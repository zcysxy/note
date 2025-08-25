---
{"publish":true,"title":"Exponential Family","created":"2023-11-12T21:15:45","modified":"2025-08-06T19:16:09","tags":["pub-prob"],"cssclasses":"","aliases":null,"type":"note","sup":["[[Probability]]"],"state":"done"}
---


# Exponential Family

A family of univariate [[Probability Density Function\|PDF]]/[[Probability Mass Function\|PMF]] is said to be ==exponential== if it can be expressed as:
$$
f(x ; \theta)=c(\theta) h(x) \exp (t(x) q(\theta))
$$

^exp-pdf

or equivalently,
$$
f(x;\theta) = h(x)\exp(t(x)q(\theta) - b(\theta)),
$$
where all values are scalars, $h(x) \geq 0$, and $c(\theta) = e^{-b(\theta)} \geq 0$ is the normalizing constant.

We can extend this to cover **multivariate random variables** and **multi-dimensional parameters**. Specifically, consider real vectors $x\in\R^{d}$, $\theta\in\R^{s}$ and $t,q \in \R^{k}$ where $k \ge s$.
A joint [[Probability Density Function\|PDF]]/[[Probability Mass Function\|PMF]] is said to be exponential if
$$
f(x ; \theta)=c(\theta) h({x}) \exp (\left<  t({x}), q(\theta) \right>),
$$
where the inner product can be matrix inner product.
Common distributions have $s = k$, and such distribution is said to be in a ==$k$-parameter exponential family==. When $s< k$, we say it is in a ==curved exponential family==.
An exponential family has the following components:

- $c(\theta)$ is the ==normalizing constant==;
- $h(x)$ is the ==base measure==;
- $q(\theta)$ is the ==natural parameter==; it can be thought of as a reparameterization of $\theta$, and thus we require the dimension of  to be no less than that of $\theta$;
- $t(x)$ is a ==[[Sufficient Statistic]]== w.r.t. the *natural* parameter space:
  $$
  \Theta= \left\{  \theta:\int h(x)e^{\langle q(\theta),t(x)\rangle} \d x < \infty \right\};
  $$
- $\exp(q(\theta)^Tt(x))$ is the ==exponential tilt== that up(down)-weights the base measure.

If $q = \theta$ (perhaps after some reparameterization $\theta \gets q(\theta)$), we say the exponential family is in ==canonical form==. Further, if the sufficient statistic is the r.v. itself, i.e., $t(x) = x$, we say the exponential family is in ==natural form==. In between, we have the ==dispersion form==:
$$
f(x;\theta) = h(\phi,x) \exp\left( \frac{x^T\theta - b(\theta)}{\phi} \right),
$$
where $\phi$ is called the ==dispersion parameter==. We can see that if $\phi$ is known, then $\theta$ is the only canonical parameter, but the sufficient statistic is the *dispersed* $x$: $t(x) = x/\phi$. If $\phi$ is unknown, the model may corresponds to a multi-parameter exponential family.

- [@] For example, a [[Normal Distribution]] with known variance $\sigma^{2}$ has a dispersion form with $\phi = \sigma^{2}$, $t(x) = x$, $q(\mu) = \mu$, and $b(\mu) = \mu^{2} /2$.

## Examples

To verify if some family of distributions is of exponential type, we must be able to identify the functions $c(\theta)$ (or $b(\theta)$), $h(x)$, $t(x)$ and $q(\theta)$.

| Distribution \\  Component                  | PDF/PMF                                                                                          | $q$                                                                 | $t$                     | $b$                                                       | $h$                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------- | -------------------------------------- |
| Univariate [[Normal Distribution]]          | $(2 \pi)^{-1/2} \sigma^{-1} \exp\left(-(x - \mu)^2 /(2\sigma^2\right)$                           | $(\mu/\sigma^2,\ -1/(2\sigma^2))$                                   | $(x,\ x^2)$             | $\mu^2 / (2\sigma^2) + \ln \sigma$                        | $(2\pi)^{-1/2}$                        |
| Multivariate [[Normal Distribution]]        | $(2 \pi)^{-d / 2} \vert\Sigma\vert^{-1 / 2} \exp (-({x}-{\mu})^{T} {\Sigma}^{-1}({x}-{\mu}) /2)$ | $(\Sigma^{-1}\mu , -\Sigma^{-1} /2)\in \R^{d}\times\R^{d \times d}$ | $(x, x x^T)$            | $(\mu ^T\Sigma^{-1} \mu  + \ln \vert \Sigma \vert)/2$     | $(2\pi)^{-d /2}$                       |
| [[Exponential Distribution]]                | $\lambda \exp(-\lambda x)$                                                                       | $-\lambda$                                                          | $x$                     | $-\ln \lambda$                                            | $\1_{x \ge 0}$                         |
| [[Bernoulli Distribution]]                  | $p^x (1 - p)^{1 - x}$                                                                            | $\ln(p /(1 - p))$                                                   | $x$                     | $-\ln(1/(1-p))$                                           | $\1_{x\in \{0,1\}}$                    |
| [[Binomial Distribution]] with known $n$    | $\binom{n}{x} p^x (1 - p)^{n - x}$                                                               | $\ln(p /(1 - p))$                                                   | $x$                     | $-n \ln(1 /(1-p))$                                        | $\binom{n}{x}\1_{x \in \{0,\dots,n\}}$ |
| [[Poisson Distribution]]                    | $\lambda^x e^{-\lambda} /x!$                                                                     | $\log \lambda$                                                      | $x$                     | $\lambda$                                                 | $1 / x!\1_{x \in \mathbb{N}}$          |
| [[Chi-Square Distribution]]                 | $e^{-x/2}(x/2)^{\nu /2 -1} / (2\Gamma(\nu /2))$                                                  | $\nu /2 -1$                                                         | $\ln x$                 | $\ln\Gamma(\nu /2) + \ln 2\cdot \nu /2$                   | $e^{-x /2}(\nu/2)\1_{x>0}$             |
| [[Gamma Distribution]]                      | $\beta e^{-\beta x} (\beta x)^{\alpha - 1} /\Gamma(\alpha)$                                      | $(\alpha-1, -\beta)$                                                | $(\ln x, x)$            | $\ln \Gamma(\alpha)-\alpha\ln \beta$                      | $\1_{x>0}$                             |
| [[Beta Distribution]]                       | $x^{\alpha - 1} (1 - x)^{\beta - 1} \Gamma(\alpha+\beta)/(\Gamma(\alpha)\Gamma(\beta))$          | $(\alpha,\ \beta)$                                                  | $(\ln x,\ \ln(1 - x))$  | $\ln ( \Gamma(\alpha)\Gamma(\beta)/\Gamma(\alpha+\beta))$ | $\1_{x \in (0,1)} /(x(1-x))$           |
| [[Categorical Distribution]] with known $K$ | $\prod_{i=1}^{K} p_i^{x_{i}}$ with $p_{K} = 1-\sum_{i=1}^{K-1}p_{i}$                             | $(\log(p_1/p_K),\dots,\log(p_{K-1}/p_K))\in \R^{K-1}$               | $(x_{1},\dots,x_{K-1})$ | $-\ln p_{K}$                                              | $\1_{x \in \{e_1,\dots,e_K\}}$         |

## MLE for Exponential Family

Due to the exponential family's special form of the likelihood, the [[Maximum Likelihood Estimation\|MLE]] estimator of $\theta$ coincides with the [[Method of Moments\|moment estimator]] w.r.t. the exponent statistic $t(x)$.
WLOG, suppose $q(\theta)=\theta\in\R^{k}$.
We first note that the inverse normalizing constant is infinitely differentiable:
$$
\frac{ \partial ^{p} }{ \partial ^{j_{1}}\theta_{1} \dots \partial ^{j_{k}}\theta_{k} } \left( \frac{1}{c(\theta)} \right) =\int h(x)t_{1}^{j_{1}}(x) \dots t_{k}^{j_{k}}(x)e^{\theta^{T}t(x)} \d x,
$$
where $j_{i}\in\N$ and $p=\sum j_{i}$.
Therefore, the derivative of the log-likelihood $\operatorname{LL}(\theta \given x)$ is
$$
\begin{aligned}
\operatorname{LL}'(\theta) =& \frac{ \mathrm{d} }{ \mathrm{d}\theta } \left( \log \left(c(\theta)h(x)e^{\theta ^Tt(x)} \right) \right ) \\
=& \frac{c'(\theta)}{c(\theta)} + t(x) \\
=& -c(\theta)\frac{ \mathrm{d} }{ \mathrm{d}\theta }\left( \frac{1}{c(\theta)} \right)  + t(x)\\
=& t(x) - \int c(\theta)h(x)t(x)e^{\theta ^Tt(x)} \d x\\
=& t(x) - \mathbb{E}_{\theta}[t(X)].
\end{aligned}
$$
Then, the MLE estimator of $t$, which is the zero of the derivative, satisfies $\mathbb{E}_{\hat{\theta}_{\mathrm{MLE}}}t(X) = \hat{\mathbb{E}}_{n}t(x)$, indicating that MLE is a [[Method of Moments#General MM Estimator]] w.r.t $t(x)$.
As a result, the asymptotic normality property of both MLE (M-estimator) and MM (Z-estimator) applies.

## Moments of Dispersion Exponential Family

The above calculation also gives a convenient way to compute the first (mean) and second (variance) central moments of $X$ when $X$ follows a dispersion exponential family. Specifically, notice that $t(x) = x /\phi$ and $c(\theta) = \exp(-b(\theta) / \phi)$. Therefore, we have
$$
\operatorname{LL}'(\theta) = \frac{c'(\theta)}{c(\theta)} + t(x) = \frac{x - b'(\theta)}{\phi}.
$$
Under [[Regularity Conditions in Estimation#For Maximum Likelihood Estimation]], we have $\mathbb{E}[\operatorname{LL}'(\theta)]=0$, and thus
$$
\mathbb{E}[X] = b'(\theta).
$$
Similarly, under the same conditions, we have
$$
0 = \mathbb{E}\left[ \operatorname{LL}''(\theta) + (\operatorname{LL}'(\theta))^{2} \right] = \frac{-b''(\theta)}{\phi} + \frac{\mathbb{E}[(X - \mathbb{E}[X])^{2}]}{\phi^{2}},
$$
which gives
$$
\Var(X) = \phi b''(\theta).
$$

- [@] For example, for a [[Poisson Distribution]], $\theta = \ln \lambda$, $b(\theta) = e^{\theta}$, and $\phi=1$. Thus, $\mathbb{E}[X]=\Var(X)=b(\theta)=b'(\theta)=b''(\theta) =\lambda$.
