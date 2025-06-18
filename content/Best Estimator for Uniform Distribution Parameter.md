---
{"publish":true,"title":"Best Estimator for Uniform Distribution Parameter","created":"2022-12-06T00:26:27","modified":"2025-06-12T06:13:33","cssclasses":"","aliases":null,"type":"jupyter","sup":["[[Probability Theory]]","[[Uniform Distribution]]"],"state":"done","related":["[[Maximum Likelihood Estimation]]"],"reference":["https://math.unm.edu/~knrumsey/pdfs/projects/Uniform.pdf"]}
---


# Best Estimator for Uniform Distribution Parameter

We want to estimate the parameter $\theta$ of a [[Uniform Distribution]] given $n$ i.i.d samples $X_i \overset{ \text{i.i.d.} }{ \sim } \operatorname{Unif}[0,\theta ]$.

- [?] So, what is the *best estimator*?

First, we need to define the metric. We use [[Mean Squared Error]]. We know for an estimator $\hat{\theta}$ of $\theta$, its [[Mean Squared Error\|MSE]] is
$$
\operatorname{MSE}(\hat{\theta},\theta ) = \operatorname{Bias}(\hat{\theta})^{2} + \operatorname{SE}(\hat{\theta})^{2},
$$
where $\operatorname{Bias}(\hat{\theta}) = \mathbb{E}[\hat{\theta}] - \theta$ is the bias of the estimator, and $\operatorname{SE}(\hat{\theta}) = \sqrt{\operatorname{Var}(\hat{\theta})}$ is the standard error of the estimator.

We will also touch on [[Evaluating an Estimator#Asymptotic Normality]] for certain estimators.

```python-r
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from scipy.optimize import minimize_scalar
import pandas as pd
from matplotlib.patches import Rectangle
import warnings
warnings.filterwarnings('ignore')

# Set style for better plots
plt.style.use('seaborn-v0_8-colorblind')
# sns.set_palette("husl")

# Set parameters for demonstrations
np.random.seed(42)
theta_true = 1.0  # True parameter value
sample_sizes = [5, 10, 20, 50, 100]
num_simulations = 100000
```

## First Attempts

Note that the [[Expectation]] of $\operatorname{Unif}[0,\theta]$ is $\theta /2$, which gives $\theta = 2\mathbb{E}[X]$. Therefore, the very first estimator we can think of is to replace the expectation with a sample value:
$$
\hat{\theta}^{(1)} = 2 X_{1}.
$$

We know this estimator is unbiased and thus its MSE is
$$
\operatorname{MSE}(\hat{\theta}^{(1)}) = \Var(2X_{1}) = 4 \Var(X_{1}) = 4\cdot \frac{\theta^{2}}{12} = \frac{\theta^{2}}{3},
$$
which is a constant regardless of the sample size $n$.

Obviously, $\hat{\theta}^{(1)}$ is not satisfactory as it only uses the information of one sample. More generally, we can consider an estimator that uses $k \le n$ samples:
$$
\hat{\theta}^{(k)} = \frac{1}{k} \sum_{i=1}^{k} 2X_{i},
$$
which is still unbiased but has a reduced standard error:
$$
\operatorname{MSE}(\hat{\theta}^{(k)}) = \Var\left( \frac{1}{k} \sum_{i=1}^{k}2X_{i} \right)  = \frac{4}{k^{2}} \sum_{i=1}^{k}\Var(X_{i}) = \frac{\theta^{2}}{3k}.
$$
Again, the MSE is a constant w.r.t $n$.

We plot the histogram of $\hat{\theta}^{(k)}$ for different $k$ values to see how the distribution changes with sample size.

```python-r
def k_sample_estimator(sample,k):
    assert k <= len(sample), "k must be less than or equal to the sample size"
    return 2 * np.mean(sample[:k], axis=0)

n_sim = sample_sizes[2]
samples_hist = np.random.uniform(0, theta_true, size=(n_sim, num_simulations)) # reuse for later simulations
ks = list(range(0,n_sim,5))
ks[0] = 1
estmates = np.empty((len(ks), num_simulations))

for kind in range(len(ks)):
    estmates[kind, :] = k_sample_estimator(samples_hist, ks[kind])

# Plot all histograms together in a plot
plt.subplot(1, 1, 1)
for kind in range(len(ks)):
    sns.histplot(estmates[kind, :], stat='density', label=f'$k={ks[kind]}$', bins=20, binrange=(0,2), alpha=0.5)
plt.axvline(theta_true, color='red', linestyle='--', label='True $\theta$')
plt.title(f'Histograms of $\\hat{{\\theta}}^{{(k)}}$ for different k (n={n_sim})')
plt.xlabel('$\\hat{\\theta}^{(k)}$')
plt.yticks([])
plt.ylabel('')
plt.legend()
plt.tight_layout()
plt.show()
```

## Method of Moments

A natural extension is to use all $n$ samples:
$$
\hat{\theta }^{(\mathrm{MM})} = \frac{1}{n}\sum_{i=1}^{n}2X_{i} = 2\overline{X}.
$$
Since the above is equivalent to solving the estimation equation
$$
2\overline{X} = \hat{\mathbb{E}}_{n}2X = \mathbb{E}_{\hat{\theta}^{(\mathrm{MM})}} 2X = \hat{\theta}^{(\mathrm{MM})},
$$
the resultant estimator is a [[Method of Moments\|Moment Estimator]]. In other words, we plug in the sample mean as the true mean (first moment) to get the estimation.
The mean squared error is the same as the previous case with $n$ samples:
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{MM})}) = \frac{\theta^{2}}{3n}.
$$

We compare the MSE and histogram of the moment estimator with $\hat{\theta}^{(2)}$:

```python-r
def moment_estimator(sample):
		return 2 * np.mean(sample, axis=0)

estimators_mse = {
    'two samples': lambda n: theta_true**2 / (3 * 2),
    'MM': lambda n: theta_true**2 / (3 * n),
}

# Plot MSE vs sample size n
ax_mse = plt.subplot(2, 1, 1)
n_mse = range(2,30)
def plot_mse(ax,estimators_mse,n_mse):
    for m in estimators_mse:
        ax.plot(n_mse, [estimators_mse[m](n) for n in n_mse], label=f'{m}')
    ax.set_xlabel('Sample Size n')
    ax.set_ylabel('MSE')
    ax.set_title('MSE of Estimators vs Sample Size')
    ax.legend()
plot_mse(ax_mse, estimators_mse, n_mse)


estimators = {
    'two samples': lambda sample: k_sample_estimator(sample, 2),
    'MM': moment_estimator,
}

estimates = np.empty((0, num_simulations)) # expand this array in later simulations
for i, (name, estimator) in enumerate(estimators.items()):
    # Check if estimates has already been filled for this method
    if estimates.shape[0] > i:
        continue
    estimates = np.vstack((
        estimates,
        estimator(samples_hist)
    ))

# Plot histograms of the estimators
ax_hist = plt.subplot(2, 1, 2)
def plot_hist(ax, estimators, estimates):  
    for i, (name, estimator) in enumerate(estimators.items()):
        sns.histplot(estimates[i, :], stat='density', label=name, bins=20, binrange=(0,2), alpha=0.5)
    ax.axvline(theta_true, color='red', linestyle='--', label='$\\theta$')
    ax.set_title(f'Histograms of Estimators (n={n_sim})')
    ax.set_xlabel('$\\hat{\\theta}$')
    ax.set_ylabel('')
    ax.set_yticks([])
    ax.legend()
plot_hist(ax_hist, estimators, estimates)

plt.tight_layout()
plt.show()
```

## Maximum Likelihood Estimation

$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{MLE})}) = \operatorname{Var}(\hat{\theta}^{(\mathrm{MLE})}) + \operatorname{Bias}(\hat{\theta}^{(\mathrm{MLE})})^{2}.
$$

To get $\operatorname{Var}(\hat{\theta}^{(\mathrm{MLE})})$ and $\operatorname{Bias}(\hat{\theta}^{(\mathrm{MLE})})$, we need first get the distribution of $\hat{\theta}^{(\mathrm{MLE})} = \max_{i} X _i$.
$$
P(\hat{\theta}^{(\mathrm{MLE})} \le x) = P(\max_{i} X _i \le x) = \prod_{i}P(X _i\le x) = (x / \theta)^{n}.
$$

Therefore, the [[Probability Density Function\|PDF]] of $\hat{\theta}^{(\mathrm{MLE})}$ is
$$
f(x) = \frac{nx^{n-1}}{\theta ^{n}}, \quad x \in [0,\theta ]
$$

Then, we have
$$\tag{1}
\mathbb{E}[\hat{\theta}^{(\mathrm{MLE})}] = \int _{0}^{\theta}xf(x) \, dx = \frac{n}{\theta ^{n}} \frac{1}{n+1}\theta ^{n+1} = \frac{n\theta}{n+1},
$$
$$
\operatorname{Var}(\hat{\theta}^{(\mathrm{MLE})}) = \mathbb{E}[(\hat{\theta}^{(\mathrm{MLE})})^{2}] - \mathbb{E}[\hat{\theta}^{(\mathrm{MLE})}]^{2} = \frac{n\theta^{2}}{n+2} - \left( \frac{n\theta}{n+1} \right)^{2} = \frac{n\theta^{2}}{(n+2)(n+1)^{2}}.
$$

Therefore
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{MLE})},\theta) = \frac{2\theta^{2}}{(n+2)(n+1)} \le \frac{\theta^{2}}{3n} = \operatorname{MSE}d_{1},\theta ).
$$

Thus, we can say that $\hat{\theta}^{(\mathrm{MLE})} = \max_{i}X _i$ is a better estimator than $d_{1} = 2\overline{X}$.

We compare the MLE with previous estimators.

```python-r
def mle_estimator(sample):
    return np.max(sample, axis=0)

# Plot MSE vs sample size n
estimators_mse['MLE'] = lambda n: 2*theta_true**2 / ((n + 2) * (n + 1))
plot_mse(plt.subplot(2, 1, 1), estimators_mse, n_mse)

# Plot histograms of the estimators
estimators['MLE'] = mle_estimator
if estimates.shape[0] < len(estimators):
    estimates = np.vstack((estimates, mle_estimator(samples_hist)))
else:
    id = list(estimators.keys()).index('MLE')
    estimates[id, :] = mle_estimator(samples_hist)
plot_hist(plt.subplot(2, 1, 2), estimators, estimates)

plt.tight_layout()
plt.show()
```

## Uniformly Minimum-Variance Unbiased Estimator

Can we do better? Equation $(1)$ suggests that $\frac{n+1}{n}\hat{\theta}^{(\mathrm{MLE})}$ is an unbiased estimator, which may further reduce the error.

We have the following fact:

> [!prop] Proposition ^prop
>
> If $T$ is a complete and [[Sufficient Statistic]] for a parameter $\theta$, and $\phi(T)$ is an estimator dependent only on $T$, then $\phi(T)$ is the unique minimum-variance unbiased estimator (UMVUE) of $\mathbb{E}_{\theta }\phi(T)$.

We note that $\max_{i}X_{i}$ is a complete and sufficient statistic for $\theta$. Thus, the estimator
$$
\hat{\theta}^{(\mathrm{UMVUE})} = \frac{n+1}{n}\max_{i}X_{i},
$$
has the minimum variance among all unbiased estimators of $\theta$.

We calculate its variance, i.e., MSE:
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{UMVUE})}) = \operatorname{Var}\left( \frac{n+1}{n}\hat{\theta}^{(\mathrm{MLE})} \right) = \left( \frac{n+1}{n} \right)^{2}\operatorname{Var}(\hat{\theta}^{(\mathrm{MLE})}) = \frac{\theta^{2}}{n(n+2)}.
$$

```python-r
def umvue_estimator(sample):
    n = len(sample)
    return (n+1) / n * np.max(sample, axis=0)

# Plot MSE vs sample size n
estimators_mse['UMVUE'] = lambda n: theta_true**2 / (n * (n + 2))
plot_mse(plt.subplot(2, 1, 1), estimators_mse, n_mse)

# Plot histograms of the estimators
estimators['UMVUE'] = umvue_estimator
if estimates.shape[0] < len(estimators):
    estimates = np.vstack((estimates, umvue_estimator(samples_hist)))
else:
    id = list(estimators.keys()).index('UMVUE')
    estimates[id, :] = umvue_estimator(samples_hist)
plot_hist(plt.subplot(2, 1, 2), estimators, estimates)

plt.tight_layout()
plt.show()
```

## Jackknife

In our problem, the bias of the MLE can be explicitly calculated, and thus we can directly correct it using the [[Best Estimator for Uniform Distribution Parameter#Uniformly Minimum-Variance Unbiased Estimator\|UMVUE]]. For more general biased estimators, we can use Jackknife resampling to *estimate* the bias, and then correct the estimator.

The first step of this procedure is to produce a series of [[Cross-Validation\|leave-one-out]] estimates:
$$
\hat{\theta}_{(-i)} = \hat{\theta}_{\{ X_{1},\dots,X_{i-1},X_{i+1},\dots,X_n \}}.
$$
That is, we remove one sample $X_{i}$ and construct the estimator $\hat{\theta}_{(-i)}$ using the remaining samples.
Then, the Jackknife bias estimate is
$$
\widehat{\operatorname{Bias}}(\hat{\theta}_{n}) = (n-1)\left( \frac{1}{n}\sum_{i=1}^{n}\hat{\theta}_{(-i)} - \hat{\theta}_{n} \right) ,
$$
where $\hat{\theta}_{n}$ is the original estimator (with $n$ samples) to be corrected.
Thus, the corrected Jackknife estimator is
$$
\hat{\theta}^{(\mathrm{Jack})} = \hat{\theta} - \widehat{\operatorname{Bias}}(\hat{\theta}_{n}) = n\hat{\theta}_{n} -  \frac{n-1}{n}\sum_{i=1}^{n}\hat{\theta}_{(-i)}.
$$

Generally, the MSE of a Jackknife estimator is difficult to calculate as $\hat{\theta}_{(-i)}$ are correlated. However, if we are to correct the MLE estimator, the Jackknife estimator has a simple form:
$$
\hat{\theta}^{(\mathrm{Jack})} = \frac{2n-1}{n} X_{(n)} - \frac{n-1}{n}X_{(n-1)},
$$
where $X_{(i)}$ is the $i$-th order statistic of the sample $X_{1},\dots,X_{n}$, and thus $X_{(n)}=\max_{i}X_{i}$.
Moreover, we can calculate its MSE, which slightly improves that of the MLE estimator:
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{Jack})}) = \left( 1- \frac{n-1}{n^{2}} \right) \operatorname{MSE}(\hat{\theta}^{(\mathrm{MLE})}).
$$

See [[Best Estimator for Uniform Distribution Parameter#Appendix]] for details of the calculation.

```python-r
def jackknife_estimator(sample):
    mle = mle_estimator(sample)
    # Produce leave-one-out MLEs
    mle_loo = 0
    n = sample.shape[0]
    for i in range(n):
        mle_loo = mle_loo + mle_estimator(np.delete(sample, i, axis=0))
    return n * mle - (n - 1) / n * mle_loo 

# Plot MSE vs sample size n
estimators_mse['Jackknife'] = lambda n: 2 * (n**2 - n + 1) * theta_true**2 / (n**2 * (n + 1) * (n + 2))
plot_mse(plt.subplot(2, 1, 1), estimators_mse, n_mse)

# Plot histograms of the estimators
estimators['Jackknife'] = jackknife_estimator
if estimates.shape[0] < len(estimators):
    estimates = np.vstack((estimates, jackknife_estimator(samples_hist)))
else:
    id = list(estimators.keys()).index('Jackknife')
    estimates[id, :] = jackknife_estimator(samples_hist)
plot_hist(plt.subplot(2, 1, 2), estimators, estimates)

plt.tight_layout()
plt.show()
```

## Minimal MSE

When we look at the MSEs, for [[Best Estimator for Uniform Distribution Parameter#Maximum Likelihood Estimation\|MLE]], bias dominates, for [[Best Estimator for Uniform Distribution Parameter#Uniformly Minimum-Variance Unbiased Estimator\|UMVUE]] and [[Best Estimator for Uniform Distribution Parameter#Jackknife]], variance dominates.
A natural next step is to find the estimator that achieves the optimal balance between [[Bias-Variance Trade-Off\|bias and variance]]. Actually, such an estimator is indeed the *best* estimator for $\theta$ in terms of MSE (see [[Best Estimator for Uniform Distribution Parameter#Appendix]]).

Consider a general form of the MLE and UMVUE using the complete and sufficient statistic $X _{(n)}$:
$$
\hat{\theta}^{(\mathrm{MMSE})} = cX_{(n)}
$$
Then, we have
$$
\mathbb{E}[\hat{\theta}^{(\mathrm{MMSE})}] = \frac{cn\theta}{n+1},
\quad
\operatorname{Var}(\hat{\theta}^{(\mathrm{MMSE})}) = \frac{c^{2}n\theta^{2}}{(n+1)^{2}(n+2)}.
$$
Thus,
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{MMSE})}) = \frac{\theta^{2}}{(n+1)^{2}(n+2)} (\underbrace{c^{2}n + (n+1-cn)^{2}(n+2)}_{f(c)}) 
$$
Setting
$$
\frac{ \mathrm{d}f }{ \mathrm{d}c } = 2nc - 2n(n+2)(n+1-cn) = 0
$$
gives $c = \frac{n+2}{n+1}$. Therefore, we get
$$
\hat{\theta}^{(\mathrm{MMSE})} = \frac{n+2}{n+1} \max_{i}X_{i},
$$
with
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{MMSE})}) = \frac{\theta^{2}}{(n+1)^{2}}.
$$

```python-r
def mmse_estimator(sample):
    n = sample.shape[0]
    return (n + 2) / (n + 1) * np.max(sample, axis=0)

# Plot MSE vs sample size n
estimators_mse['MMSE'] = lambda n: theta_true**2 / ((n + 1) ** 2)
plot_mse(plt.subplot(2, 1, 1), estimators_mse, n_mse)

# Plot histograms of the estimators
estimators['MMSE'] = mmse_estimator
if estimates.shape[0] < len(estimators):
    estimates = np.vstack((estimates, mmse_estimator(samples_hist)))
else:
    id = list(estimators.keys()).index('MMSE')
    estimates[id, :] = mmse_estimator(samples_hist)
plot_hist(plt.subplot(2, 1, 2), estimators, estimates)

plt.tight_layout()
plt.show()
```

## Summary

The following table summarizes the estimators we have discussed.

| Estimator | Expression | Bias | Variance | MSE |
|-----------|------------|------|----------|-----|
| $k$ Samples | $\frac{2}{k} \sum_{i=1}^{k} X_i$ | $0$ | $\frac{\theta^2}{3k}$ | $\frac{\theta^2}{3k}$ |
| Method of Moments | $2\overline{X}$ | $0$ | $\frac{\theta^2}{3n}$ | $\frac{\theta^2}{3n}$ |
| MLE | $X_{(n)}$ | $-\frac{\theta}{n+1}$ | $\frac{n\theta^2}{(n+2)(n+1)^2}$ | $\frac{2\theta^2}{(n+2)(n+1)}$ |
| UMVUE | $\frac{n+1}{n} X_{(n)}$ | $0$ | $\frac{\theta^2}{n(n+2)}$ | $\frac{\theta^2}{n(n+2)}$ |
| Jackknife | $\frac{2n-1}{n} X_{(n)} - \frac{n-1}{n} X_{(n-1)}$ | $-\frac{\theta}{n(n+1)}$ | $\frac{(2n^2 - 1)\theta^2}{n(n+1)^2(n+2)}$ | $\frac{2(n^2 - n + 1)\theta^2}{n^2(n+1)(n+2)}$ |
| MMSE | $\frac{n+2}{n+1} X_{(n)}$ | $-\frac{\theta}{(n+1)^{2}}$ | $\frac{n(n+2)\theta^2}{(n+1)^4}$ | $\frac{\theta^2}{(n+1)^2}$ |

Finally, we plot the histograms of all estimators separately to compare their distributions, and calculate their empirical mean squared errors.

```python-r
# Plot histograms of all estimators separately
num_bins = 20
range_bins = (0.8, 1.2)
y_lim_high = 0
colors = plt.rcParams["axes.prop_cycle"]()

fig, ax = plt.subplots(round(len(estimators) / 2), 2)
for i, (name, estimator) in enumerate(estimators.items()):
    plt.subplot(round(len(estimators) / 2), 2, i + 1)
    # Match the color increment
    sns.histplot(estimates[i, :], stat='density', bins=num_bins, binrange=range_bins, alpha=0.5, color=next(colors)['color'])
    plt.axvline(theta_true, color='red', linestyle='--', label='$\\theta$')
    plt.title(f'{name}')
    # log the y lim
    y_lim_high = max(y_lim_high, plt.ylim()[1])
    
plt.setp(ax, ylim=(0, y_lim_high))
fig.supxlabel('$\\hat{\\theta}$')
fig.supylabel('Density')
plt.tight_layout()
plt.show()
```

```python-r
# Calculate empirical MSE for each estimator
num_simulations = int(1e3)
mse_empirical = np.empty((len(estimators), len(sample_sizes), num_simulations))
mse_empirical[:] = np.nan
for n in sample_sizes:
    samples = np.random.uniform(0, theta_true, size=(n, num_simulations))
    estimates = np.empty((num_simulations, len(estimators)))
    for i, (name, estimator) in enumerate(estimators.items()):
        mse_empirical[i, sample_sizes.index(n), :] = (estimator(samples) - theta_true)**2
```

```python-r
# Plot empirical MSE with 0.95 confidence region using fill_between for each estimator in a single plot
plt.figure()
for i, (name, estimator) in enumerate(estimators.items()):
    mean_mse = np.mean(mse_empirical[i, :, :], axis=1)
    std_mse = np.std(mse_empirical[i, :, :], axis=1)
    err_high = mean_mse + 1.96 * std_mse / np.sqrt(num_simulations)
    err_low = mean_mse - 1.96 * std_mse / np.sqrt(num_simulations)

    plt.plot(sample_sizes, mean_mse, label=name)
    plt.fill_between(sample_sizes, err_low, err_high, alpha=0.2)
    # Remove legend handles for the fill_between
plt.xscale('log')
plt.yscale('log')
plt.xlabel('Sample Size n')
plt.ylabel('Empirical MSE')
plt.title('Empirical MSE of Estimators vs Sample Size')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
```

## Beyond MSE

So far, we have focused on the MSE as the metric for evaluating estimators. In this section, we first explore a new risk, and then discuss the statistical properties of MLE for the uniform distribution.

### Zero-One Loss

Recall that MSE is the risk associated with the squared error loss function $L(\hat{\theta},\theta) = (\hat{\theta} - \theta)^{2}$.

Consider a new loss function:
$$
L(\hat{\theta},\theta) = \mathbb{1}\left\{ |\hat{\theta}-\theta| > \epsilon \right\}.
$$
This zero-one loss function is often used in binary decision-making problems. In the context of parameter estimation, it finds applications in catastrophic risk assessment, where any estimation error beyond a certain threshold $\epsilon$ is catastrophic. Then, the corresponding risk
$$
R(\hat{\theta},\theta) = \mathbb{E}_{\theta}L(\hat{\theta},\theta) = P_{\theta}\left( |\hat{\theta}-\theta| > \epsilon \right)
$$
is the probability of catastrophe.

Again, let's consider an estimator of the general form $\hat{\theta}^{(\mathrm{ZO})} = cX_{(n)}$, and try to minimize the zero-one risk. We have
$$
\begin{aligned}
  R(\hat{\theta}^{(\mathrm{ZO})} ,\theta) =& P_{\theta}\left( |cX_{(n)} - \theta| > \epsilon \right) \\
  =& P_{\theta}\left( cX_{(n)} - \theta > \epsilon \right) + P_{\theta}\left( cX_{(n)} - \theta < -\epsilon \right) \\
  =& P_{\theta}\left( X_{(n)} >c^{-1} (\theta + \epsilon)\right) + P_{\theta}\left( X_{(n)} < c^{-1} (\theta - \epsilon)\right) \\
  =& 1-F_{X_{(n)}}\left( c^{-1} (\theta + \epsilon) \right) + F_{X_{(n)}}\left( c^{-1} (\theta - \epsilon) \right)
.\end{aligned}
$$
We have already derived the CDF of $X_{(n)}$ in [[Best Estimator for Uniform Distribution Parameter#Maximum Likelihood Estimation]], which gives
$$
\begin{aligned}
R(\hat{\theta}^{(\mathrm{ZO})} ,\theta) =& \begin{cases}
1 - \left( \frac{c^{-1} (\theta + \epsilon)}{\theta} \right)^{n} + \left( \frac{c^{-1} (\theta - \epsilon)}{\theta} \right)^{n}
, \quad &1 + \epsilon /\theta < c\\
\left( \frac{c^{-1} (\theta - \epsilon)}{\theta} \right)^{n}
= c^{-n}(1- \epsilon/\theta)^{n} , \quad & 1 - \epsilon /\theta \le c \le 1 + \epsilon /\theta \\
1, \quad & 1 - \epsilon /\theta > c  \\
\end{cases}\\
=& \begin{cases}
1 - c^{-n} \left( (1+ \epsilon/\theta)^{n} - (1- \epsilon/\theta)^{n} \right), \quad & 1 + \epsilon /\theta < c \\
c^{-n}(1- \epsilon/\theta)^{n} , \quad & 1 - \epsilon /\theta \le c \le 1 + \epsilon /\theta \\
1, \quad & 1 - \epsilon /\theta > c  \\
\end{cases}
\end{aligned}
$$
For a fixed $\theta$, we usually consider a small threshold $\epsilon$. In such scenario,
$$
(1+\epsilon /\theta)^{n} \approx 1 + n\epsilon /\theta, \quad \text{and} \quad (1-\epsilon /\theta)^{n} \approx 1 - n\epsilon /\theta.
$$
Using the above approximation, one can easily verify that $c = 1 + \epsilon /\theta$ minimizes the zero-one risk.

Note that the estimator should not depend on the true parameter $\theta$. Thus, we consider a zero-one loss based on the relative distance:
$$
R(\hat{\theta},\theta) = P_{\theta}\left( |\hat{\theta} - \theta| > \delta  \theta \right) ,
$$
whose corresponding optimal estimator is
$$
\hat{\theta}^{(\mathrm{ZO})} = \left( 1 + \delta \right) X_{(n)}.
$$

We plot the histogram of the zero-one estimator for different $\delta$ values, and compare it with the MLE estimator on both the MSE and zero-one risk.

```python-r
def zero_one_estimator(sample, delta):
    return (1 + delta) * np.max(sample, axis=0)

# Plot histograms of the zero-one estimator for different delta values
delta_values = [0.05, 0.1, 0.2, 0.5]
num_simulations = 100000
estimates_zo = np.empty((len(delta_values), num_simulations))
for i, delta in enumerate(delta_values):
    estimates_zo[i, :] = zero_one_estimator(samples_hist, delta)

plt.figure()
for i, delta in enumerate(delta_values):
    sns.histplot(estimates_zo[i, :], stat='density', label=f'$\\delta={delta}$', bins=20, binrange=(0.8,1.6), alpha=0.5)
# Plot MLE estimator for comparison
mle_estimates = mle_estimator(samples_hist)
sns.histplot(mle_estimates, stat='density', label='MLE', bins=20, binrange=(0.8,1.6), alpha=0.5)
plt.axvline(theta_true, color='red', linestyle='--', label='True $\\theta$')
plt.title('Histograms of Zero-One Estimator for Different $\\delta$ Values')
plt.xlabel('$\\hat{\\theta}$')
plt.ylabel('Density')
plt.legend()
plt.tight_layout()
plt.show()
```

```python-r
# Calculate the empirical risks and zero-one risk for the zero-one estimator and MMSE
num_simulations = int(1e3)
delta = 5e-3
risk_empirical = np.empty((2, 2, len(sample_sizes), num_simulations)) # 2 risks (MSE and zero-one), 2 estimators (MMSE and zero-one), sample sizes, simulations
risk_empirical[:] = np.nan
for n in sample_sizes:
    samples = np.random.uniform(0, theta_true, size=(n, num_simulations))
    # Minimum MSE Estimator
    estimates_mmse = mmse_estimator(samples)
    risk_empirical[0, 0, sample_sizes.index(n), :] = (estimates_mmse - theta_true)**2
    risk_empirical[1, 0, sample_sizes.index(n), :] = np.abs(estimates_mmse - theta_true) > delta * theta_true
    # Zero-One Estimator
    estimates_zo = zero_one_estimator(samples, delta)
    risk_empirical[0, 1, sample_sizes.index(n), :] = (estimates_zo - theta_true)**2
    risk_empirical[1, 1, sample_sizes.index(n), :] = np.abs(estimates_zo - theta_true) > delta * theta_true

# Plot empirical MSE for the zero-one estimator and MMSE
fig, ax = plt.subplots(1, 2, figsize=(12, 6))
plt.subplot(1, 2, 1)
mean_mse_mmse = np.mean(risk_empirical[0, 0, :, :], axis=1)
ci_mse_mmse = 1.96 * np.std(risk_empirical[0, 0, :, :], axis=1) / np.sqrt(num_simulations)
plt.plot(sample_sizes, mean_mse_mmse, label='MMSE')
plt.fill_between(sample_sizes, mean_mse_mmse - ci_mse_mmse, mean_mse_mmse + ci_mse_mmse, alpha=0.2)

mean_mse_zo = np.mean(risk_empirical[0, 1, :, :], axis=1)
ci_mse_zo = 1.96 * np.std(risk_empirical[0, 1, :, :], axis=1) / np.sqrt(num_simulations)
plt.plot(sample_sizes, mean_mse_zo, label='Zero-One')
plt.fill_between(sample_sizes, mean_mse_zo - ci_mse_zo, mean_mse_zo + ci_mse_zo, alpha=0.2)
plt.xscale('log')
plt.legend()
plt.title('Empirical MSE')

# Plot empirical zero-one risk for the zero-one estimator and MMSE
plt.subplot(1, 2, 2)
mean_risk_mmse = np.mean(risk_empirical[1, 0, :, :], axis=1)
ci_risk_mmse = 1.96 * np.std(risk_empirical[1, 0, :, :], axis=1) / np.sqrt(num_simulations)
plt.plot(sample_sizes, mean_risk_mmse, label='MMSE')
plt.fill_between(sample_sizes, mean_risk_mmse - ci_risk_mmse, mean_risk_mmse + ci_risk_mmse, alpha=0.2)
mean_risk_zo = np.mean(risk_empirical[1, 1, :, :], axis=1)
ci_risk_zo = 1.96 * np.std(risk_empirical[1, 1, :, :], axis=1) / np.sqrt(num_simulations)
plt.plot(sample_sizes, mean_risk_zo, label='Zero-One')
plt.fill_between(sample_sizes, mean_risk_zo - ci_risk_zo, mean_risk_zo + ci_risk_zo, alpha=0.2)
plt.title('Empirical Zero-One Risk')
# plt.xlim(sample_sizes[0], sample_sizes[-2])

plt.setp(fig.axes, yscale='log')
fig.supxlabel('Sample Size n')
fig.supylabel('Risk')
plt.show()
```

### Statistical Properties of MLE for Uniform Distribution

[[Maximum Likelihood Estimation\|MLE]] is known to be the *best* estimator, in terms of statistical properties, such as consistency and asymptotic normality, under mild conditions. However, in this note, we have shown that the MLE for the uniform distribution is biased and has a larger MSE than some other estimators. Do our findings contradict the properties of MLE?

We first verify the consistency. In the previous section, we show that for $c=1$ and any $\epsilon\in(0,\theta)$,
$$
P_{\theta}(|\hat{\theta}^{(\mathrm{MLE})} - \theta| > \epsilon) = (1-\epsilon /\theta)^{n}\to 0.
$$
Thus, $\hat{\theta}^{(\mathrm{MLE})}$ is consistent.

For asymptotic normality, we notice that
$$
\operatorname{supp}(\sqrt{n}(\hat{\theta}^{(\mathrm{MLE})} - \theta)) = ( -\sqrt{n}\theta,0) \to (-\infty,0) \ne \mathbb{R}.
$$
Thus, $\hat{\theta}^{(\mathrm{MLE})}$ cannot be asymptotically normal.
Specifically, the uniform distribution fails to meet the regularity condition that the support of the distribution should not depend on the parameter $\theta$.

Moreover, we actually have
$$
P_{\theta}(n(\theta-\hat{\theta}^{(\mathrm{MLE})} ) \le t) = 1 - P_{\theta}(\hat{\theta}^{(MLE)} \le \theta - t/n) = 1 - (1 - t /(n\theta))^{n} \to 1-e^{-t /\theta},
$$
indicating that
$$
n (\theta-\hat{\theta}^{(\mathrm{MLE})} ) \overset{d}{\to} \mathrm{Exp}(1 /\theta).
$$
Note that the exponential tail bound is significantly heavier than the Gaussian tail bound ($e^{-nt}$ vs. $e^{-nt^{2}}$). We verify this by simulation.

```python-r
n = 1000
samples = np.random.uniform(0, theta_true, size=(n, 10000))
mle_estimates = mle_estimator(samples)
asymptotic_distribution = n*(theta_true - mle_estimates)
plt.figure()
sns.histplot(asymptotic_distribution, stat='density', alpha=0.5, label='empirical')
x = np.linspace(0, plt.xlim()[1], 1000)
plt.plot(x, (1/theta_true) * np.exp(-x/theta_true), label='Exp(1)', color='red', linestyle='--')
# Plot theoretical standard normal distribution for comparison
plt.plot(x, (1/(np.sqrt(2 * np.pi))) * np.exp(-(x)**2 / (2 )), label='Normal', color='green', linestyle='--')
plt.title(f'Empirical distribution of $n(\\theta - \\hat{{\\theta}}^{{(MLE)}})$ with $n={n}$')
plt.xlabel('')
plt.ylabel('')
plt.legend()
plt.tight_layout()
plt.show()
```

Finally, we remark that either MSE or asymptotic normality is just one of the many criteria for evaluating estimators. One estimator with smaller MSE may underestimate other risks. One asymptotically normal estimator may have larger MSE than another estimator. At the end of the day, we should choose the estimator that best fits our specific problem and risk criteria.


## Appendix

### Calculation of Jackknife MSE

For correcting the MLE $X_{(n)}$, the Jackknife estimator has a simple form:
$$
\hat{\theta}^{(\mathrm{Jack})} = n X_{(n)} - \frac{n-1}{n}\left( (n-1)X_{(n)} + X_{(n-1)} \right) 
= \frac{2n-1}{n} X_{(n)} - \frac{n-1}{n}X_{(n-1)},
$$
where $X_{(i)}$ is the $i$-th order statistic of the sample $X_{1},\dots,X_{n}$, and thus $X_{(n)}=\max_{i}X_{i}$.

Similar to the calculation in [[Best Estimator for Uniform Distribution Parameter#Maximum Likelihood Estimation]] (see also [[Order Statistics#Distribution of i-th Order Statistic]]), the PDF of $X_{(n-1)}$ is
$$
f_{(n-1)}(x) = \frac{n!}{(n-2)!} \frac{(x /\theta)^{n-2}(1-x /\theta)}{\theta} = \frac{n(n-1)x^{n-2}(1-x /\theta)}{\theta ^{n-1}}.
$$
Then, we can calculate the bias:
$$
\operatorname{Bias}(\hat{\theta}^{(\mathrm{Jack})}) =\frac{2n-1}{n} \frac{n\theta}{n+1} - \frac{n-1}{n} \frac{n(n-1)}{\theta ^{n-1}}\left( \frac{\theta ^{n}}{n} - \frac{\theta ^{n+1}}{(n+1)\theta } \right) -\theta  = -\frac{1}{n^{2}+n}\theta .
$$
We can see that compared to the [[Best Estimator for Uniform Distribution Parameter#Maximum Likelihood Estimation]], the bias is significantly reduced.

To calculate the variance of $\hat{\theta}^{(\mathrm{Jack})}$, we need to know the joint distribution of $X_{(n)}$ and $X_{(n-1)}$. Note that the [[Order Statistics#Joint Distribution\|joint PDF of the entire order statistic]] is given by
$$
f_{(X_{(i)})} (x) = \frac{n!}{\theta ^{n}} \mathbb{1}\{ x_{1}\le \dots\le x_{n} \}.
$$
Integrating out $(X_{(1)},\dots ,X_{(n-2)})$ gives
$$
\begin{aligned}
f_{(X_{(n-1)},X_{(n)})}(x_{n-1},x_{n}) =&\frac{n!}{\theta ^{n}}\int _{0}^{x_{n-1}}\int _{0}^{x_{n-2}}\cdots\int _{0}^{x_{2}} \d x_{1} \cdots  \, \d x_{n-3} \d x_{n-2} \\
=&\frac{n!}{\theta ^{n}}\int _{0}^{x_{n-1} }\int _{0}^{x_{n-2}}\frac{1}{(n-4)!}x_{n-3}^{n-4} \d x_{n-3}  \d x_{n-2} \\
=&n(n-1) \frac{x_{n-1}^{n-2}}{\theta ^{n}}, \quad 0 \le x_{n-1} \le x_{n} \le \theta.
\end{aligned}
$$
Thus, their covariance is
$$
\begin{aligned}
\Cov(X_{(n-1)},X_{(n)}) =& \mathbb{E}[X_{(n-1)}X_{(n)}] - \mathbb{E}[X_{(n-1)}]\mathbb{E}[X_{(n)}]\\
=&\int_{0}^{\theta}\int_{0}^{y} x y f_{(X_{(n-1)},X_{(n)})}(x,y) \mathrm{d}x \mathrm{d}y - \frac{n\theta}{n+1}  \frac{(n-1)\theta}{n+1}\\
=& \frac{n(n-1)}{\theta^{n}} \frac{\theta^{n+2}}{n(n+2)} - \frac{n\theta}{n+1}  \frac{(n-1)\theta}{n+1} \\
=& \frac{(n-1)\theta^{2}}{(n+1)^{2}(n+2)}.
\end{aligned}
$$
Then, we can calculate the variance:
$$
\begin{aligned}
\Var(\hat{\theta}^{(\mathrm{Jack})}) =& \frac{(2n-1)^{2}}{n^{2}}\Var(X_{(n)}) + \frac{(n-1)^{2}}{n^{2}}\Var(X_{(n-1)}) - 2 \frac{(2n-1)(n-1)}{n^{2}}\Cov(X_{(n)},X_{(n-1)}) \\
=&  \frac{(2n-1)^{2}}{n^{2}}\frac{n\theta^{2}}{(n+2)(n+1)^{2}} 
+ \frac{(n-1)^{2}}{n^{2}}\frac{2(n-1)\theta^{2}}{(n+1)^{2}(n+2)} 
- 2 \frac{(2n-1)(n-1)}{n^{2}}\frac{(n-1)\theta^{2}}{(n+1)^{2}(n+2)} \\
=& \frac{\theta^{2}}{(n+2)(n+1)^{2}} \left( \frac{(2n-1)^{2}}{n} + \frac{2(n-1)^{3}}{n^{2}} - \frac{2(2n-1)(n-1)^{2}}{n^{2}}\right) \\
=& \frac{(2n^{2}-1)\theta^{2}}{n(n+1)^{2}(n+2)}.
\end{aligned}
$$

Finally, we get
$$
\operatorname{MSE}(\hat{\theta}^{(\mathrm{Jack})}) = \operatorname{Var}(\hat{\theta}^{(\mathrm{Jack})}) + \operatorname{Bias}(\hat{\theta}^{(\mathrm{Jack})})^{2} = \frac{2(n^{3}+1)\theta^{2}}{n^{2}(n+1)^{2}(n+2)} = \frac{2(n^{2}-n+1)}{n^{2}(n+1)(n+2)} \theta^{2} .
$$

### Optimality of MMSE

For any estimator $\hat{\theta}$, we write $\mathbb{E}\hat{\theta}_{X} = f_n(\theta)$. Suppose $f$ is linear, then by the linearity of expectation, we have
$$
\mathbb{E}f_{n}\left( \frac{n+1}{n}X_{(n)} \right) = f_{n} \left( \frac{n+1}{n} \mathbb{E}X_{(n)} \right)  = f_{n}(\theta ) = \mathbb{E}\hat{\theta}_{X}.
$$
Let $\phi(T) = f_{n}\left( \frac{n+1}{n}T \right)$. By Proposition [[Best Estimator for Uniform Distribution Parameter#^prop]], we know $\phi(X_{(n)})$ has the same bias as but smaller variance than $\hat{\theta}_{X}$ if $\hat{\theta}_{X}\ne \phi(T)$ (uniqueness). Further, among the class of estimators consisting of linear functions of $X_{(n)}$, it is easy to see $\hat{\theta}^{(\mathrm{MMSE})}$ has the smallest MSE.

Now suppose $f_{n}$ is not linear. By Taylor expansion,
$$
f_{n}(\theta) = \sum_{k=0}^{\infty} \frac{f_n^{(k)}(0)}{k!} \theta^k.
$$
For $\hat{\theta}$ to be uniformly optimal for any $\theta$, it must satisties
$$
f_n(0) -\theta  = o(\theta) \text{ as }\theta \to 0  \quad\text{and}\quad f_{n}(\theta) -\theta  = O(\theta) \text{ as } \theta\to \infty.
$$
Thus, $f_{n}^{(k)} = 0$ for $k\ne 1$ and any $n$, indicating that $f_{n}$ must be linear in $\theta$.
