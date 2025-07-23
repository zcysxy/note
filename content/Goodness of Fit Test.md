---
{"publish":true,"title":"Goodness of Fit Test","created":"2025-07-22T21:17:40","modified":"2025-07-23T16:32:43","cssclasses":"","state":"[[%wip]]","sup":["[[Hypothesis Testing]]"],"aliases":null,"type":"note"}
---


# Goodness of Fit Test

Goodness of fit tests are non-parametric tests that assess how well a statistical model fits a set of observations.
The general idea is to test the empirical [[Probability Mass Function\|PMF]]/[[Probability Density Function\|PDF]] against the null PMF/PDF of a statistical model.

## Discrete Case

A discrete distribution with a finite sample space is a general Bernoulli distribution, or termed a ==categorical distribution==, determined by the PMF $P(X=k)=p_{k}$, where $\{ k \}_{k=1}^{K}$ are the categories.
The collection of all categorical distribution with $n$ categories is actually a parametrized model with parameter space $\Delta ^{n}$, the -dimensional simplex. And this parameter space is of dimension $K-1$.
This implies the following theorem:

> [!thm]
> $$
> n \sum_{k=1}^{K} \frac{(\hat{p}_{k} - p^{0}_{k})^{2}}{p^{0}_{k}} \overset{d}{\to} \chi^{2}_{K-1},
> $$
where $\hat{p}$ is the PMF MLE, $p^{0}$ is true PMF (under the null), and $\chi^{2}_{K-1}$ is the [[Chi-Square Distribution]] with $K-1$ degrees of freedom (DoF).

With some calculation, one can show that $\hat{p}$ is indeed the empirical PMF: $\hat{p}_{k} = \frac{n_{k}}{n}$, where $n_{k}$ is the number of observations in category $k$.

> [!rmk] $K-1$ vs $K$
>
Additionally, the result seems to be consistent with the classical asymptotic distribution of [[Maximum Likelihood Estimation#Asymptotic Normality\|MLE]], except the DoF of the chi-square distribution is $K-1$ instead of $K$.
>
> Although one can memorize the above result by mirroring it to the classical properties of MLE, the same derivation will not go through. This is because, due to the dependence of $\hat{p}$'s coordinates, the covariance matrix of the score function will be of rank $K-1$, hence not invertible, failing the [[Regularity Conditions in Estimation#For Maximum Likelihood Estimation]].

The asymptotic valid test using the above theorem against $H_{0}: p = p^{0}$ is called the ==chi-square test==.

## Continuous Case

One possible way is to plot the [[Histogram]] of the sample, which is essentially a [[Probability Mass Function\|PMF]] with finite bins, and use [[Goodness of Fit Test#Discrete Case\|chi-square test]]. Suppose our null PDF is $f^{0}$, then the discretized null PMF is $p^{0}_{j} = P(X\in B_{j}) = \int _{x\in B_{j}}f^{0}(x)\d x$, where $B_{j}$ is the $j$-th bin.

We can also look at the [[Cumulative Distribution Function\|CDF]]. Note that the CDF of a [[Probability Mass Function\|Discrete Random Variable]] is a step function. For any data-generating distribution, the empirical CDF constructed from finite samples is naturally a step function. Therefore, we do not need to manually discretize the data into bins. And because of the nice convergence properties of [[Inference for CDFs]], we can directly use the empirical CDF to test against the null CDF.

Let $\hat{F}_{n}(t) = \frac{1}{n} \sum_{i=1}^{n} \mathbb{1}(X_{i} \le t)$ be the empirical CDF. We then conduct *inference by simulation*:

- Input: $n$, $\alpha$.
- For $j=1,\ldots,N$:
	- Sample $U_{i} \sim \operatorname{Unif}[0,1]$ for $i=1,\dots,n$.
	- Compute the empirical CDF $\hat{G}$ of $U_{i}$.
	- Compute $W_{j} = \sup_{t\in[0,1]} |\hat{G}(t)-t|$.
- Let $\epsilon _{\mathrm{sim}}$ be the $(1- \alpha/2)$-quantile of $\{ W_{j} \}_{j=1}^{N}$.

Then, an asymptotic $(1-\alpha /2)$ confidence interval for $F$ is $\hat{F} \pm \epsilon _{\mathrm{sim}}$ as $N\to \infty$.
For the null hypothesis $H_{0}: F = F^{0}$, the ==Kolmogorov–Smirnov test== is $\psi = \mathbb{1}\{ \| \hat{F}-F^{0} \|_{\infty} \le \epsilon _{\mathrm{sim}} \}$.
