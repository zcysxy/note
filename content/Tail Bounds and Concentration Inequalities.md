---
{"publish":true,"title":"Tail Bounds and Concentration Inequalities","created":"2025-05-26T19:28:12","modified":"2025-06-07T09:16:59","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Statistics]]"],"aliases":null,"type":"jupyter","related":["[[Concentration Inequality]]"]}
---


# Tail Bounds and Concentration Inequalities

Both tail bounds and concentration inequalities describe the probability that a random variable deviates from some certain value, such as its mean.
In this notebook, we will explore how tail bounds and concentration inequalities predict the behavior of random variables.

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
```

## Gaussian Tail Bound

The tail bound of a Gaussian random variable $X \sim \mathcal{N}(0,1)$ is described by [[Concentration Inequality#Mill's Ratio\|Mill's ratio]]:
$$
P(X \geq x) \le \frac{e^{-x^2 /2}}{x\sqrt{2\pi}} 
$$
We plot the theoretical tail bound:

```python
# Plotting the Gaussian Tail Bound using Mill's Ratio

def mills_ratio(x):
    """Mill's ratio approximation of the upper tail probability for N(0,1)"""
    return (np.exp(-x**2 / 2) / np.sqrt(2 * np.pi)) / x

# Domain for x
x_vals = np.linspace(2, 6, 40)
tail_gauss_theo = mills_ratio(x_vals)

# Plot
fig_gaussian, ax = plt.subplots()
ax.plot(x_vals, tail_gauss_theo, label="Mill's ratio", color='darkorange')
ax.set_yscale('log')
ax.set_xlabel('x')
ax.set_ylabel('P(X ≥ x)')
ax.set_title('Gaussian Tail Bound')
ax.legend()
```

We now demonstrate the tail bound of a Gaussian random variable using simulation.

```python
def simulate_tail_probabilities(dist_sampler, x_vals, n_samples=int(1e7)):
    """
    Simulate tail probabilities P(X ≥ x) for a given sampler.
    
    Parameters:
    - dist_sampler: function that returns samples from the target distribution
    - x_vals: array of threshold values
    - n_samples: number of samples to draw
    
    Returns:
    - A list of estimated tail probabilities for each x in x_vals
    """
    samples = dist_sampler(n_samples)
    return [np.mean(samples >= x) for x in x_vals]

# Simulate Gaussian tail probabilities
tail_gauss_emp = simulate_tail_probabilities(np.random.randn, x_vals)

# Plot
ax.plot(x_vals, tail_gauss_emp, label="Simulation", linestyle='--', marker='o', color='blue')
ax.legend()
plt.show()
```

## t-Distribution Tail Bound

Gaussian distribution is known to have a *light* tail bound, i.e., an exponential decay in the tail probability. [[t Distribution]], on the other hand, is known to have a *heavy* tail bound.
For example, $t_{1}$, or [[Cauchy Distribution\|Cauchy]], distribution, has a tail bound of
$$
P(X \geq x) = \frac{1}{\pi} \arctan x^{-1} \asymp \frac{1}{\pi x}.
$$

We plot the theoretical and empirical Cauchy tail bound against the theoretical Gaussian tail bound.

```python
tail_cauchy_theo = np.arctan(1 / x_vals) / np.pi
tail_cauchy_emp = simulate_tail_probabilities(lambda n: np.random.standard_cauchy(n), x_vals, n_samples=int(1e2))

fig_cauchy, ax = plt.subplots()
ax.plot(x_vals, tail_gauss_theo, label="Gaussian Tail Bound", color='darkorange')
ax.plot(x_vals, tail_cauchy_theo, label="Cauchy Tail Bound", color='green')
ax.plot(x_vals, tail_cauchy_emp, label="Cauchy Simulation", linestyle='--', marker='o', color='blue')
ax.set_yscale('log')
ax.set_xlabel('x')
ax.set_ylabel('P(X ≥ x)')
ax.set_title('Cauchy Tail Bound vs Gaussian Tail Bound')
ax.legend()
plt.show()
```

## Chebyshev Inequality

Different from the tail bound of a specific random variable, concentration inequalities provide bounds for a class of random variables.

For example, for any random variable $X$ with finite mean and variance, Chebyshev's inequality gives
$$
P(|X - \mathbb{E}[X]| \geq t) \leq \frac{\mathrm{Var}(X)}{t^2}.
$$

Because of the generality, it's often too loose for certain distributions.

```python
tail_gauss_chebyshev = np.var(np.random.randn(int(1e7))) / (x_vals**2)

fig_concen, ax = plt.subplots()
ax.plot(x_vals, tail_gauss_theo, label="Gaussian Tail Bound", color='darkorange')
ax.plot(x_vals, tail_gauss_chebyshev, label="Chebyshev's Inequality", color='purple')
ax.set_yscale('log')
ax.set_xlabel('t')
ax.set_ylabel('P(X ≥ t)')
ax.set_title("Gaussian Tail Bound vs Concentration Inequalities")
ax.legend()
```

## Hoeffding's Inequality

For bounded iid random variables $X_{i}\in [0,1]$, [[Hoeffding's Inequality]] states that
$$
P\left( \left| \frac{1}{n}\sum_{i=1}^{n}X_{i} - \mathbb{E}[X] \right| \geq t \right) \leq 2e^{-2nt^2}.
$$
For a single standard Gaussian random variable, Hoeffding's inequality reduces to the Chernoff bound:
$$
P(X \geq t) \leq e^{-t^2 / 2},
$$
which is close to the exact Gaussian tail bound, with a slight difference caused by constants and the scaling of $t$.

```python
tail_gauss_hoeffding = np.exp(-(x_vals**2)/2)

ax.plot(x_vals, tail_gauss_hoeffding, label="Hoeffding's Inequality", color='green')
ax.legend()
plt.show()
```

We now explore different concentration inequalities for non-Gaussian distributions. We use iid uniform random variables as an example.

```python
def simulate_sample_means(n_trials, n_vars=10):
    """
    Simulate sample means of n_vars iid Uniform[0,1] variables over n_trials.
    """
    samples = np.random.uniform(0, 1, size=(n_trials, n_vars))
    return samples.mean(axis=1)

# Parameters
n_trials = int(1e5)
sample_means = simulate_sample_means(n_trials)
mean_estimate = 0.5
var_uniform = 1/12
var_sample_mean = var_uniform / 10

x_vals = np.linspace(0.05, 0.5, 40)

tail_mean_emp = np.array([np.mean(np.abs(sample_means - mean_estimate) >= t) for t in x_vals])
tail_mean_chebyshev = var_sample_mean / (x_vals**2)
tail_mean_hoeffding = 2 * np.exp(-2 * 10 * (x_vals**2))

plt.figure()
plt.plot(x_vals, tail_mean_emp, label="Empirical Sample Mean", linestyle='--', marker='o', color='blue')
plt.plot(x_vals, tail_mean_chebyshev, label="Chebyshev's Inequality", color='purple')
plt.plot(x_vals, tail_mean_hoeffding, label="Hoeffding's Inequality", color='green')
plt.yscale('log')
plt.xlabel('t')
plt.ylabel(r'$P(|\bar{X} - \mathbb{E}[\bar{X}]| \geq t)$')
plt.title('Concentration Inequalities for Sample Mean of Uniform Distribution')
plt.legend()
plt.show()
```

## Takeaways

- Tail bounds describe the probability of a random variable deviating from a specific value, such as its mean.
- Different distributions have different tail behaviors, with Gaussian having a light tail and Cauchy having a heavy tail. Tight-tailed distributions are easier to control and predict.
- Different from exact tail bounds, concentration inequalities provide general bounds for a class of random variables, such as Chebyshev's inequality and Hoeffding's inequality.
- Compared to exact tail bounds, concentration inequalities are often too *conservative* and thus provide looser bounds.
