---
{"publish":true,"title":"Evaluating an Estimator","created":"2025-06-06T02:05:38","modified":"2025-06-06T03:50:21","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Estimation]]"],"aliases":null,"type":"note"}
---


# Evaluating an Estimator

- [!] This note focuses on point estimators.

As with any [[Statistical Decision Theory\|statistical decision-making]] problem, the first step in an estimation task is to define the performance metrics of the estimator.
Unlike [[Evaluating a Test\|hypothesis testing]], where its binary nature gives simple metrics involving only Type I and II errors, evaluating an estimator involves more considerations.
We start by distinguishing the **probabilistic** and **statistical** properties of an estimator.

An estimator of the parameter $\theta$ is conventionally denoted as $\hat{\theta}_{X}$ to emphasize its dependence on the sample $X \sim P_{\theta}^{m}$. And note that the sample further depends on the underlying parameter $\theta$ and the dimension (number of samples) $m$. So we also sometimes denote the estimator as $\hat{\theta}_{m}$.

- Probabilistic properties investigate the **expected behavior** of the estimator w.r.t. the parameter $\theta$.
- Statistical properties investigate the **asymptotic or non-asymptotic behavior** of the estimator as the number of samples $m$ goes to infinity.

For example, although both measuring the estimator's "distance" to the true parameter, [[Evaluating an Estimator#Bias]], a probabilistic property, and [[Evaluating an Estimator#Consistency]], a statistical property, provide different insights into the estimator's performance.

This note discusses the following metrics

- Probabilistic properties
	- [[Evaluating an Estimator#Bias]]
	- [[Evaluating an Estimator#Standard Error]]
	- [[Evaluating an Estimator#Risk]]
- Statistical properties
	- [[Evaluating an Estimator#Consistency]]
	- [[Evaluating an Estimator#Asymptotic Normality]]

^list

## Bias

The ==bias== of an estimator is
$$\operatorname{bias}(\hat{\theta}_m) = \mathbb{E}(\hat{\theta}_m) - \theta$$
where the expectation is over the data generating distribution which is determined by the true parameter $\theta$.

- An estimator $\hat{\theta}_{m}$ is said to be ==unbiased== if $\operatorname{bias}(\hat{\theta}_m)=0,$ which implies that $\mathbb{E}(\hat{\theta}_m)=\theta$.
- An estimator $\hat{\theta}_m$ is said to be ==asymptotically unbiased== if $\lim_{m \to \infty} \operatorname{bias}(\hat{\theta}_m)=0$.
    - [!] Asymptotic unbiasedness is NOT equivalent to [[Evaluating an Estimator#Consistency vs Asymptotic Unbiasedness\|consistency]].



### Example: Variance Estimator

We compare two different estimators of the variance parameter $σ^2$ of a [[Normal Distribution]].

#### Sample Variance

$$\hat{\sigma}^2_m = \frac{1}{m}\sum_{i=1}^m(x^{(i)} - \hat{\mu}_m)^2 $$

where $\hat{\mu}_m$ is the sample mean. Then the bias of the variance estimator is
$$\begin{aligned}
\mathbb{E}[\hat{\sigma}_m^2] &= \frac{1}{m}\sum \mathbb{E}[(x^{(i)} - \mu + \mu - \hat{\mu}_m)^2]\\
&= \sigma^2 - \frac{1}{m} \left(2\mathbb{E}[(\mu - \hat{\mu}_m)(\sum x^{(i)} - m\mu)]\right) + \mathbb{E}[(\mu-\hat{\mu}_m)^2]\\
&= \sigma^2 - \operatorname{Var}(\hat{\mu}_m)
\end{aligned}$$
Here from the i.i.d condition we have
$$\begin{aligned}
    \operatorname{Var}(\hat{\mu}_m) &= \mu^2 - 2\mu\mathbb{E}[\hat{\mu}_m] + \frac{1}{m}\mathbb{E}[(x^{(1)})^2] + \frac{m-1}{m}\mu^2\\
    &= \frac{1}{m}(\mathbb{E}[(x^{(1)})^2] - \mu^2)\\
    &= \frac{\sigma^2}{m}
\end{aligned}$$
Thus we get
$$\mathbb{E}[\hat{\sigma}_m] = \frac{m-1}{m}\sigma^2$$
So the bias of sample variance estimator is $-\frac{1}{m}\sigma^2$, hence it is a **biased estimator**

#### Unbiased Sample Variance

$$
\tilde{\sigma}^2_m = \frac{1}{m-1}\sum_{i=1}^m(x^{(i)} - \hat{\mu}_m)^2 = \frac{m}{m-1}\hat{\sigma}^2_m
$$

From the calculation above, we know that unbiased sample variance estimator $\tilde{\sigma}^2_m$ is **unbiased**.

## Standard Error

The ==standard error== is
$$\operatorname{SE}(\hat{\theta}) = \sqrt{\operatorname{Var}(\hat{\theta})}$$
where the variance is taken over the data generating distribution which is determined by the true parameter $\theta$.

> [!rmk] Unbiasedness has no constancy
>
> * Neither the square root of the sample variance nor the square root of the unbiased estimator of the variance provide an unbiased estimate of the standard error
>     * Both approaches tend to **underestimate** the true standard error, but are still used in practice.
>     * The square root of the **unbiased estimator of the variance** is less of an underestimate. For large $m$, the approximation is quite reasonable
> * In general, the unbiasedness is not preserved under the transformation
> 

### Example: Error Mean

Using $\hat{\mu}$ to denote the mean of the data, from the calculation in [[Evaluating an Estimator#Example Variance Estimator]], we have
$$\operatorname{SE}(\hat{\mu}) = \frac{\sigma}{\sqrt{m}}$$
where $\sigma$ is the **true** standard deviation of the data, and $m$ is the number of data points.

Standard error is often combined with [[Central Limit Theorem\|CLT]] to constrict [[Confidence Interval]]s.

For example, in machine learning experiments, we often estimate the **generalization error** by computing the sample mean of the error on the test set. The number of examples in the test set determines the accuracy of this estimate. Taking advantage of the [[Central Limit Theorem]], which tells us that the mean will be approximately distributed with a normal distribution, we can use the standard error to compute the probability that the true expectation falls in any chosen interval. For example, the 95% [[Confidence Interval]] centered on the mean $\hat{\mu}_m$ is
$$(\hat{\mu}_m − 1.96\operatorname{SE}(\hat{\mu}_m), \hat{\mu}_m + 1.96\operatorname{SE}(\hat{\mu}_m))$$
under the normal distribution with mean $\hat{\mu}_m$ and variance $\operatorname{SE}(\hat{\mu}_m)^2$. In machine learning experiments, it is common to say that algorithm `A` is better than algorithm `B` if the upper bound of the 95% confidence interval for the error of algorithm `A` is lower than the lower bound of the 95% confidence interval for the error of algorithm `B`.

## Risk

As seen in previous sections, we can have different probabilistic (expected) performance metric of an estimator. [[Risk]] is the most general probabilistic metric as it can incorporate any loss function.

For example, [[Mean Squared Error]] is the quadratic risk using a quadratic loss function $L(\hat{\theta},\theta) = (\hat{\theta} - \theta)^2$; and it encompasses both [[Evaluating an Estimator#Bias]] and [[Evaluating an Estimator#Standard Error]]: $\mathrm{MSE} = \mathrm{Bias}^{2} + \mathrm{SE}^{2}$.

Further, if we want to control the risk across all possible values of the parameter $\theta$, we can consider optimality in terms of [[Bayes Optimal Estimator\|Bayes risk]] and [[Minimax Optimal Estimator\|minimax risk]].

## Consistency

We wish that as the number of data in our dataset increases, our point estimates converge [[Convergence of Random Variables#Convergence in Probability\|in probability]] to the true value. This condition is called ==consistency==:
$$\hat{\theta}_m \overset{P}{\longrightarrow} \theta$$

### Consistency vs Asymptotic Unbiasedness

$$\text{Consistency} \begin{aligned}\Longrightarrow\\[-2ex] \not\Longleftarrow\end{aligned} \text{Asymptotic Unbiasedness}$$

> [!thm]
>
> If $\operatorname{bias}(\hat{\theta}_{n})\to 0$ and $\operatorname{SE}(\hat{\theta}_{n})\to 0$, then $\hat{\theta}_{n}$ is a consistant estimator.

The above can be proved using [[Chebyshev Inequality]] or the [[Convergence of Random Variables#Relation between Convergence Modes]] ($L_2$ convergence implies convergence in probability).

## Asymptotic Normality

We wish that as the number of data in our dataset increases, our point estimates behave like following a normal distribution. This condition is called ==asymptotic normality==:
$$
\sqrt{m}(\hat{\theta}_m - \theta) \overset{d}{\longrightarrow} \mathcal{N}(0, \Sigma)
$$

Asymptotic normality tells us that the deviation of the estimator from the true parameter has an exponentially decaying tail bound, and thus we can construct tight [[Confidence Interval]]s around the estimator.

For an asymptotic normal estimator, its *statistical difficulty*[^1] is governed by its asymptotic variance $\Sigma$.

[^1]: Or statistical complexity/efficiency. See also [[Maximum Likelihood Estimation#Best Statistical Efficiency]].
