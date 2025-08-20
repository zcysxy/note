---
{"publish":true,"title":"Confidence Interval","created":"2023-10-17T22:44:28","modified":"2025-05-27T11:36:43","tags":["pub-stat"],"cssclasses":"","aliases":null,"type":"note","sup":["[[Statistics]]"],"state":"done"}
---


# Confidence Interval

A (<span style="color:skyblue">asymptotic</span>) level $1-\alpha$ confidence set $C=C\left(X_1, \ldots, X_n\right)$ of a parameter is such that ${\color{skyblue}\lim_{ n \to \infty }}P(\theta \in C) \geq 1-\alpha$.

- [!] The confidence set is **random**. The *confidence* means that $100(1-\alpha)\%$ of all the set **instances** will cover the unknown value of $\theta$. The **wrong** statement is that $\theta$ lies in the confidence set with a probability at least $100(1-\alpha)\%$. Note that $\theta$ is not a [[Random Variable]]

Set relations are useful in constructing different CIs:

> [!thm] If $(L, U)$ is a CI for $𝜃$ and $h$ is a monotonically increasing function, then $(h(L), h(U)$) is a CI for $h(𝜃)$.

## Test Statistic and Critical Values

Recall that a [[Statistic]] is a function of the observed data, e.g., mean and variance.
If a test involves some parameters, a test statistic is often a function of both the sample and the parameter, such that

- the distribution of $t$ is known, e.g., a [[t Distribution]] or a [[Chi-Square Distribution]], or can be approximated, e.g., using [[Central Limit Theorem\|CLT]] ^known
- the distribution of $t$ does not depend on the parameter ^unkown

Such a test statistic is also called a ==pivot (quantity)==.

Then, we can first construct a confidence interval for the test statistic $t$.
Using the knowledge of its distribution (or quantiles), the confidence interval can be given by:
$$
P(c_{\alpha /2} \leq t \leq c_{1-\alpha /2}) = 1-\alpha 
$$
where $c_{q}$ is the $q$-th quantile of the distribution of $t$, and $c_{\alpha/2}$ and $c_{1-\alpha /2}$ are called the ==critical values==.

## First Example–Gaussian Mean

Let's first consider a test statistic with a known distribution.
Suppose a statistical model $\mathcal{P} = \{ \mathcal{N}(\theta,\sigma^{2} ): \theta\in\R \}$ with know variance. Then we know that $\overline{X} - \theta \sim \mathcal{N}(0, \sigma^{2} /n)$ is is known and independent of $\theta$.
Using the quantile function (inverse CDF) of the [[Normal Distribution]],
$$
P\left( \Phi^{-1}\left( \frac{\alpha}{2} \right) \le \frac{\sqrt{ n }(\overline{X}-\theta )}{\sigma } \le \Phi^{-1} \left( 1-\frac{\alpha}{2} \right)\right) = 1-\alpha ,
$$
which gives the CI
$$
C(\overline{X}) = \left[ \overline{X} - \frac{\sigma}{\sqrt{ n }}\Phi^{-1}\left( 1-\frac{\alpha }{2} \right), \overline{X} - \frac{\sigma}{\sqrt{ n }}\Phi^{-1}\left( \frac{\alpha}{2} \right) \right]
=\left[ \overline{X} + \frac{\sigma}{\sqrt{ n }}\Phi^{-1}\left( \frac{\alpha }{2} \right), \overline{X} - \frac{\sigma}{\sqrt{ n }}\Phi^{-1}\left( \frac{\alpha}{2} \right) \right]
$$

## Standard Error Based CI

Usually the test statistic $t$ is of the form $(\hat{\theta} - \theta) / \mathrm{SE}$, where $\hat{\theta}$ is the estimator of $\theta$, and $\mathrm{SE}$ is the standard error, i.e., the (estimated) standard deviation of the estimator $\hat{\theta}$.
Then, if we know the quantile function of $t$, i.e., critical values, the confidence interval is of the form:
$$
[\hat{\theta} - c_{1- \alpha /2} \cdot \mathrm{SE}, \hat{\theta} - c_{\alpha/2}\cdot \mathrm{SE}].
$$

- [@] See [[Estimation#The Standard Error of the Mean]] for an example, which is the same as [[Confidence Interval#First Example–Gaussian Mean]].

> [!rmk] Confidence Interval Width
>
> The width of the confidence interval, that is, its accuracy depends on:
>
> - The sample size n: the larger the sample size the narrow the width of the CI.
> - The confidence level: the higher the confidence the wider the CI will be!
> - The standard deviation of the population or SE: the larger the SE the wider the CI will be.
> - The method used to construct the CI

## CLT CI

The CI in [[Confidence Interval#First Example–Gaussian Mean]] is finite-sample valid since we use exact quantiles.
When estimating the mean of a unknown distribution and unknown variance, we can leverage the asymptotic normality by [[Central Limit Theorem\|CLT]]:
$$
C^{(\mathrm{CLT})}(X) = \left[ \overline{X} - z_{\alpha /2}\frac{\hat{\sigma}}{\sqrt{ n }}, \overline{X} + z_{\alpha /2}\frac{\hat{\sigma}}{\sqrt{ n }} \right],
$$
where $\hat{\sigma}^{2}\coloneqq \frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline{X})^{2}$; then $\hat{\sigma} /\sqrt{ n }$ is an estimated SE.

### Asymptotic Valid

We prove that CLT CI is asymptotic valid. Denote $\mu=\mathbb{E}X_{i}$. We have
$$
\begin{aligned}
P\left( \mu\in C^{(\mathrm{CLT})}(X) \right) 
=& P\left( \overline{X}-z_{\alpha /2}\frac{\hat{\sigma}}{\sqrt{ n }} \leq \mu \leq \overline{X} + z_{\alpha /2}\frac{\hat{\sigma}}{\sqrt{ n }} \right)\\
=& P\left( z_{\alpha /2} \leq \frac{\sqrt{ n }(\overline{X}-\mu )}{\hat{\sigma}} \leq - z_{\alpha /2} \right)\\
=& P\left( z_{\alpha /2} \leq \frac{\sqrt{ n }(\overline{X}-\mu )}{\sigma }\frac{\sigma }{\hat{\sigma}} \leq z_{1-\alpha /2} \right).
\end{aligned}
$$
By [[Central Limit Theorem\|CLT]], $\sqrt{ n }(\overline{X}-\mu) /\sigma \overset{ d }{ \to } \mathcal{N}(0,1)$; by [[Law of Large Numbers\|LLN]], $\hat{\sigma} \overset{ p }{ \to } \sigma$. Then, by [[Convergence of Random Variables#Slutsky's Theorem]],
$$
P\left( \mu\in C^{(\mathrm{CLT})}(X) \right) \to P\left( z_{\alpha /2} \leq Z \leq - z_{\alpha /2} \right) = 1-\alpha, \quad \text{as } n \to \infty,
$$

## Hoeffding CI

For bounded r.v.s $X_{i}\in[a,b]$, [[Hoeffding's Inequality]] gives
$$
P\left( \left| \overline{X}-\mu \right| \ge t \right) \le 2\exp\left( -\frac{2 n t^{2}}{(b-a)^{2}} \right). 
$$
Letting the RHS be $\alpha$ gives $t=\frac{(b-a)}{\sqrt{2 n }}\sqrt{\log(2/\alpha)}$, which further gives a $1-\alpha$ level CI:
$$
C^{(\mathrm{Hoeff})}(\overline{X}) = \overline{X} \pm (b-a) \sqrt{ \frac{\log (2 /\alpha)}{2n} }.
$$

- [!] Note that Hoeffding CI is finite-sample valid, in contrast to the CLT CI, which is asymptotic valid. However, Hoeffding is very conservative and not typically used in practice.

## Wald CI

When the SE of the estimator depends on the true parameter $\theta$, we can simply *plug in* the estimator $\hat{\theta}$ into the SE to get an estimated $\operatorname{SE}(\hat{\theta})$.
This gives the Wald statistics:
$$
W = \frac{\hat{\theta} - \theta}{\operatorname{SE}(\hat{\theta})}.
$$
Under some conditions, $W \overset{ d }{ \to } Z$.
Thus, the Wald CI is $\hat{\theta}\pm z_{\alpha /2}\operatorname{SE}(\hat{\theta})$.
The Wald CI is also called the plug-in CI.

- [@] For example, the Wald CI for [[Binomial Distribution]] is $$\hat{\theta} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{\theta}(1-\hat{\theta})}{n}}.$$

- [-] Different from the [[Confidence Interval#CLT CI]] where we use the sample variance to approximate the SE, Wald CI requires the knowledge of how SE depends on the parameter.
- [+] However, Wald CI is usually easier to compute, and needs only one statistic.
    - [@] For example, when estimating the mean, Wald CI only needs $\overline{X}$, while computing the sample variance generally needs to store the entire dataset.

## Wilson Score CI

Instead of constructing the CI using the [[Confidence Interval#Standard Error Based CI]] with an estimated SE, we can also use the exact SE and solve the inequality with unknown parameter on both sides. However, only in a few cases, this leads to a closed form.

For example, for [[Binomial Distribution]], using the exact SE, we have
$$
P\left( z_{\alpha /2} \le \frac{\hat{p}-p}{\sqrt{ \frac{p(1-p)}{n} }} \le -z_{\alpha /2}\right) \approx 1-\alpha.
$$
The involved inequalities are quadratic in $p$. Solving them gives the Wilson score CI:
$$
\frac{1}{1+\frac{z^2}{n}}\left(\hat{p}+\frac{z^2}{2 n}\right) \pm \frac{z}{1+\frac{z^2}{n}} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}+\frac{z^2}{4 n^2}}.
$$
