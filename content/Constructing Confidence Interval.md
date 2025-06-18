---
{"publish":true,"title":"Constructing Confidence Interval","created":"2025-05-26T20:56:19","modified":"2025-06-07T17:05:27","cssclasses":"","state":"done","sup":["[[Confidence Interval]]"],"aliases":null,"type":"jupyter"}
---


# Constructing Confidence Interval

This notebook explores methods of constructing [[Confidence Interval]]s. We focus on the following methods:

1. Exact calculation
2. [[Central Limit Theorem\|CLT]] CI
3. Hoeffding CI
4. Plug-in (Wald) CI
5. Wilson score CI

We focus on the example of estimating the mean of a Bernoulli distribution with parameter $p$.

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import norm
import pandas as pd

# Plotting aesthetics
sns.set(style='whitegrid')
plt.rcParams['figure.figsize'] = (10, 5)
plt.rcParams['axes.titlesize'] = 14
plt.rcParams['axes.labelsize'] = 12

# Reproducibility
np.random.seed(42)

# Sampler
sampler = lambda n, p: np.random.binomial(1, p, size=n)
```

## Test Statistic and Critical Values

Recall that a [[Statistic]] is a function of the observed data, e.g., mean and variance.
If a test involves some parameters, a test statistic is often a function of both the sample and the parameter, such that

- the distribution of $t$ is known, e.g., a [[t Distribution]] or a [[Chi-Square Distribution]], or can be approximated, e.g., using [[Central Limit Theorem\|CLT]] ^known
- the distribution of $t$ does not depend on the parameter ^unkown

Such a test statistic is also called a *pivot (quantity)*.

Then, we can first construct a confidence interval for the test statistic $t$.
Using the knowledge of its distribution (or quantiles), the confidence interval can be given by:
$$
P(c_{\alpha /2} \leq t \leq c_{1-\alpha /2}) = 1-\alpha 
$$
where $c_{q}$ is the $q$-th quantile of the distribution of $t$, and $c_{\alpha/2}$ and $c_{1-\alpha /2}$ are called the *critical values*.

## Exact CI

Exact CIs are constructed using known quantile function $c_{q}$ and explicit expression of the test statistic $t$.

> [!tip] Warm up
> Construct the exact CI of estimating $\theta$ with 10 iid samples from $\mathcal{N}(\theta,5)$. Use the look-up table of the Normal distribution quantiles.

For Bernoulli trials, let's consider the sum of $n$ trials, $S_n = \sum_{i=1}^{n} X_i$, as the test statistic. $S_n$ follows a Binomial distribution, whose CDF satisfies:
$$
F_{\mathrm{binom}}\left( t; n,p \right)  = F_{\mathrm{beta}}(p; t+1, n+1-t).
$$
where $F_{\mathrm{beta}}(\cdot;\alpha,\beta)$ is the CDF of the Beta distribution with parameters $\alpha$ and $\beta$.
Therefore, using exact beta distribution quantiles, a $1-\alpha$ level exact CI for $p$ is
$$
C^{(\mathrm{exact})}(S_n) = [b_{\alpha /2}(S_n,n-S_n+1), b_{1-\alpha /2}(S_n+1,n-S_n)],
$$
where $b_{q}(\alpha,\beta)$ is the $q$-th quantile of the Beta distribution with parameters $\alpha$ and $\beta$.

> [!rmk] Remark
> Note that $p$ is **not a random variable**. However, treating it as a beta random variable (as in a Bayesian interpretation) gives us the same exact calculation as using the binomial distribution.

```python
from scipy.stats import beta

def exact_ci(s, n, alpha=0.05):
    """
    Compute the exact confidence interval for a Bernoulli parameter p
    using the Beta quantile representation of the Binomial CDF.

    Parameters:
    - s: int, number of successes (sum of Bernoulli trials)
    - n: int, number of trials
    - alpha: significance level

    Returns:
    - (lower_bound, upper_bound): tuple of floats
    """
    if s == 0:
        lower = 0.0
    else:
        lower = beta.ppf(alpha / 2, s, n - s + 1)
        
    if s == n:
        upper = 1.0
    else:
        upper = beta.ppf(1 - alpha / 2, s + 1, n - s)

    return lower, upper
```

```python
# Simulate exact CI coverage as sample size increases

p = 0.7
sample_sizes = np.unique(np.round(np.logspace(1, 3, num=15)).astype(int))
lower_bounds = []
upper_bounds = []
point_estimates = []

for n in sample_sizes:
    samples = sampler(n, p)
    s = np.sum(samples)
    lower, upper = exact_ci(s, n)
    
    lower_bounds.append(lower)
    upper_bounds.append(upper)
    point_estimates.append(s / n)

# Plotting
def plot_ci(sample_sizes, lower_bounds, upper_bounds, point_estimates, p_true, method_name):
    fig = plt.figure()
    plt.plot(sample_sizes, point_estimates, label='Empirical Mean', color='black', linestyle='--', marker='o')
    plt.plot(sample_sizes, lower_bounds, label='Lower Bound', color='blue')
    plt.plot(sample_sizes, upper_bounds, label='Upper Bound', color='red')
    plt.fill_between(sample_sizes, lower_bounds, upper_bounds, color='blue', alpha=0.2)
    plt.axhline(p_true, color='green', linestyle=':', label=f'True p = {p_true}')
    plt.xscale('log')
    plt.xlabel('Sample Size (n)')
    plt.ylabel('Estimated p with CI')
    plt.title(f'{method_name} vs Log-Spaced Sample Size')
    plt.legend()
    plt.grid(True, which='both', linestyle='--', alpha=0.6)
    return fig

fig = plot_ci(sample_sizes, lower_bounds, upper_bounds, point_estimates, p, 'Exact CI')
plt.show()
```

```python
def evaluate_ci_method(ci_function, p, sample_sizes, num_trials=1000, alpha=0.05):
    """
    Evaluate a CI method over multiple sample sizes.
    
    Parameters:
    - ci_function: function that returns (lower, upper) given (s, n, alpha)
    - p: float, true parameter of the Bernoulli distribution
    - sample_sizes: array-like of integers, sample sizes to evaluate
    - num_trials: int, number of Monte Carlo repetitions
    - alpha: float, significance level
    
    Returns:
    - result: dict with keys 'n', 'avg_length', 'coverage'
    """
    
    avg_lengths = []
    coverages = []
    
    for n in sample_sizes:
        lengths = []
        hits = []
        
        for _ in range(num_trials):
            samples = sampler(n, p)
            s = np.sum(samples)
            lower, upper = ci_function(s, n, alpha=alpha)
            lengths.append(upper - lower)
            hits.append(lower <= p <= upper)
        
        avg_lengths.append(np.mean(lengths))
        coverages.append(np.mean(hits))
    
    return {
        'n': sample_sizes,
        'avg_length': avg_lengths,
        'coverage': coverages
    }
```

```python
results_exact = evaluate_ci_method(exact_ci, p, sample_sizes, num_trials=int(1e3))

def plot_stat(results, method_name, alpha=0.05):
    n_vals = results['n']
    avg_lengths = results['avg_length']
    coverages = results['coverage']

    fig = plt.figure(figsize=(12, 5))

    # Average Length
    plt.subplot(1, 2, 1)
    plt.plot(n_vals, avg_lengths, marker='o', color='blue')
    plt.xscale('log')
    plt.yscale('log')
    plt.plot(n_vals, 1 / np.sqrt(n_vals), linestyle='--', color='gray', label='$n^{-1/2}$')
    plt.xlabel('Sample Size (n)')
    plt.ylabel('Average CI Length')
    plt.title(f'{method_name}: Average CI Length vs Sample Size')
    plt.grid(True, which='both', linestyle='--', alpha=0.6)
    plt.legend()

    # Coverage
    plt.subplot(1, 2, 2)
    plt.plot(n_vals, coverages, marker='s', color='green')
    plt.axhline(1 - alpha, color='red', linestyle='--', label=f'Nominal Level = {1 - alpha:.2f}')
    plt.xscale('log')
    plt.xlabel('Sample Size (n)')
    plt.ylabel('Empirical Coverage')
    plt.title(f'{method_name}: Coverage vs Sample Size')
    plt.legend()
    plt.grid(True, which='both', linestyle='--', alpha=0.6)

    plt.tight_layout()
    return fig

fig = plot_stat(results_exact, 'Exact CI')
plt.show()
```

## CLT CI

By CLT and LLN, we know that
$$
\frac{\sqrt{ n }(\overline{X}-p)}{\hat{\sigma}} \overset{ d }{ \to } \mathcal{N}(0,1),
$$
where $\overline{X}$ is the sample mean and $\hat{\sigma}^{2} =\frac{1}{n-1}\sum_{i=1}^{n}(X_{i}-\overline{X})^{2}$ is the sample variance.
This gives the CLT CI:
$$
C^{(\mathrm{CLT})}(X) = \overline{X} \pm z_{\alpha /2}\frac{\hat{\sigma}}{\sqrt{ n }}.
$$
where $z_{\beta}$ is the $\beta$-th quantile of the standard normal distribution.

```python
from scipy.stats import norm

def clt_ci(s, n, alpha=0.05):
    X_bar = s / n
    sigma_hat_sq = (s * (1-X_bar)**2 + (n - s) * X_bar**2) / (n - 1)
    z = norm.ppf(1 - alpha / 2)
    half_width = z * np.sqrt(sigma_hat_sq / n)
    return (X_bar - half_width, X_bar + half_width)

# Run pointwise simulation with log-spaced n
lower_bounds, upper_bounds, point_estimates = [], [], []
for n in sample_sizes:
    samples = sampler(n, p)
    s = np.sum(samples)
    lower, upper = clt_ci(s, n)
    lower_bounds.append(lower)
    upper_bounds.append(upper)
    point_estimates.append(s / n)


fig = plot_ci(sample_sizes, lower_bounds, upper_bounds, point_estimates, p, 'CLT CI')
plt.show()
```

```python
results_clt = evaluate_ci_method(clt_ci, p, sample_sizes, num_trials=int(1e3))

fig = plot_stat(results_clt, 'CLT CI')
plt.show()
```

We can see that both exact CI and CLT CI have an average length of order $n^{-1/2}$.
However, CLT CI is only asymptotically valid.

## Hoeffding CI

Since Bernoulli trials are bounded, Hoeffding's inequality gives
$$
P\left( \left| \overline{X}-p \right| \ge t \right) \le 2\exp\left( -2 n t^{2} \right),
$$
leading to a $1-\alpha$ level CI:
$$
C^{(\mathrm{Hoeff})}(\overline{X}) = \overline{X} \pm \sqrt{\frac{\log(2/\alpha)}{2n}}.
$$

```python
def hoeffding_ci(s, n, alpha=0.05):
    X_bar = s / n
    half_width = np.sqrt(np.log(2 / alpha) / (2 * n))
    return (X_bar - half_width, X_bar + half_width)

# Run pointwise simulation with log-spaced n
lower_bounds, upper_bounds, point_estimates = [], [], []
for n in sample_sizes:
    samples = sampler(n, p)
    s = np.sum(samples)
    lower, upper = hoeffding_ci(s, n)
    lower_bounds.append(lower)
    upper_bounds.append(upper)
    point_estimates.append(s / n)


fig = plot_ci(sample_sizes, lower_bounds, upper_bounds, point_estimates, p, 'Hoeffding CI')
plt.show()
```

```python
results_hoeff = evaluate_ci_method(hoeffding_ci, p, sample_sizes, num_trials=int(1e3))
fig = plot_stat(results_hoeff, 'Hoeffding CI')
plt.show()
```

We can see Hoeffding CI is super *conservative*: it has a much wider CI with a higher coverage than the nominal level.

> [!ex] Chebyshev CI
> Construct another concentration inequality-based CI. For example, Chebyshev CI. And compare it with Hoeffding CI.

## Wald CI

Another version of CLT CI is using the fact that
$$
\frac{\hat{\theta}-\theta}{\mathrm{SE}(\hat{\theta} )} \overset{ d }{ \to } \mathcal{N}(0,1),
$$
where $\mathrm{SE}$ is the *standard error* of the statistic $\hat{\theta}$.
For sample mean, we know its standard error is
$$
\mathrm{SE}(\overline{X}) = \frac{\operatorname{Var}(X_{i})}{\sqrt{ n }}.
$$
For Bernoulli distribution, instead of using a sample variance to estimate the variance, and hence estimate the standard error, as we did in constructing [CLT CI](#clt-ci), we notice that
$$
\operatorname{Var}(X_i) = p(1-p).
$$
Thus, we can estimate the standard error by **plugging in** the estimation of $p$ instead, using $\hat{p} = \overline{X}$, giving the Wald plug-in CI:
$$
C^{(\mathrm{Wald})}(X) = \overline{X} \pm z_{\alpha /2} \sqrt{\frac{\overline{X}(1-\overline{X})}{n}}.
$$

```python
def wald_ci(s, n, alpha=0.05):
		X_bar = s / n
		half_width = norm.ppf(1 - alpha / 2) * np.sqrt(X_bar * (1 - X_bar) / n)
		return (X_bar - half_width, X_bar + half_width)

# Run pointwise simulation with log-spaced n
lower_bounds, upper_bounds, point_estimates = [], [], []
for n in sample_sizes:
		samples = sampler(n, p)
		s = np.sum(samples)
		lower, upper = wald_ci(s, n)
		lower_bounds.append(lower)
		upper_bounds.append(upper)
		point_estimates.append(s / n)

fig = plot_ci(sample_sizes, lower_bounds, upper_bounds, point_estimates, p, 'Wald CI')
plt.show()
```

```python
results_wald = evaluate_ci_method(wald_ci, p, sample_sizes, num_trials=int(1e3))
fig = plot_stat(results_wald, 'Wald CI')
plt.show()
```

Since Wald CI also uses CLT, it behaves similarly to CLT CI.

## Wilson Score CI

Left as exercise

## Comparison

We now compare the average length and coverage of the confidence intervals constructed above.

```python
def plot_ci_comparison(all_results, method_names, alpha=0.05):
    fig = plt.figure(figsize=(12, 5))

    # Average Length Plot
    plt.subplot(1, 2, 1)
    for results, name in zip(all_results, method_names):
        plt.plot(results['n'], results['avg_length'], marker='o', label=name)
    plt.xscale('log')
    plt.yscale('log')
    plt.xlabel('Sample Size (n)')
    plt.ylabel('Average CI Length')
    plt.title('Average CI Length vs Sample Size')
    plt.legend()
    plt.grid(True, which='both', linestyle='--', alpha=0.6)

    # Coverage Plot
    plt.subplot(1, 2, 2)
    for results, name in zip(all_results, method_names):
        plt.plot(results['n'], results['coverage'], marker='s', label=name)
    plt.axhline(1 - alpha, color='red', linestyle='--', label=f'Nominal Level = {1 - alpha:.2f}')
    plt.xscale('log')
    plt.xlabel('Sample Size (n)')
    plt.ylabel('Empirical Coverage')
    plt.title('Coverage vs Sample Size')
    plt.legend()
    plt.grid(True, which='both', linestyle='--', alpha=0.6)

    plt.tight_layout()
    return fig

fig = plot_ci_comparison(
    [results_exact, results_clt, results_hoeff, results_wald],
    ["Exact CI", "CLT CI", "Hoeffding CI", "Wald CI"],
)
plt.show()
```

## Takeaways

Summary of the methodology behind the above methods:

- Exact calculation is finite-sample valid, preferred when the test statistic's distribution is known and easy to compute. Not practical for unknown distributions.
- CLT CI uses [[Central Limit Theorem]] and thus is asymptotically valid. It is preferred when the sample size is large. It does not leverage any structural information about the distribution.
- Hoeffding CI is one example of a concentration inequality-based CI. This class of CIs is finite-sample valid. Any concentration inequality can be used to construct a CI, and some are more suitable for specific distributions. Generally, concentration inequality-based CIs are more conservative.
- Wald CI uses the plug-in principle, which is asymptotically valid. It is preferred when the test statistic involves parameters that can be readily estimated; then the estimation is plugged into the CI formula.
- Wilson score CI constructs the CI by *solving* the inequality by CLT or other concentration inequalities. It leverages the structure of the test statistic but is preferred only when the inequality can be solved easily.

The width of the confidence interval, that is, its accuracy, depends on:

- The sample size n: the larger the sample size the narrow the width of the CI.
- The confidence level: the higher the confidence the wider the CI will be!
- The standard deviation of the population or SE: the larger the SE the wider the CI will be.
- The method used to construct the CI
