---
publish: true
title: Statistical Functional
created: 2025-06-28T17:51:19
modified: 2025-06-28T19:02:02
published: 2026-01-06T20:10:18.000-05:00
tags:
  - pub-stat
type: note
sup:
  - "[[Statistics]]"
state: done
---

# Statistical Functional

Similar to a [[Statistic]], a ==statistical functional== is some measurement of the underlying _distribution_. With a slight abuse of notation, we write it as
$$
T: \Delta(\mathcal{X}) \to \R^{d}.
$$

## Reduction to Statistic

A [[Statistic]] is a special statistical functional evaluated at the **empirical distribution**, i.e., the uniform distribution over all samples:
$$
T(X) = T\left(\frac{1}{n}\sum\_{i=1}^{n}\delta\_{X\_i}\right) \eqqcolon T(\hat{P}).
$$
Since all information about the sample is included in its empirical distribution, the above equation is one-to-one. Thus we use the notation for [[Statistic]] $T(X)$ and statistical functional at empirical distribution $T(\hat{P})$ interchangeably.

## Plug-In Principle

> [!rmk] In general, $T(\hat{P})$ is a good estimator of $T(P)$.

## Examples

- **Mean**. $T(P) =\int _{\mathcal{X}}x , \d P(x)$; the reduced statistic is the sample mean $T(\hat{P}) = \frac{1}{n}\sum_{i=1}^{n}X\_{i}$. ^853ce9
- **Variance**. $T(P) = \int _{\mathcal{X}}x^{2},\d P(x) - (\int _{\mathcal{X}}x , \d P(x))^{2}$; the reduced statistic is the sample variance $T(\hat{P}) = \frac{1}{n}\sum_{i=1}^{n}(X_{i} - \overline{X})^{2}$.
- **Least squares**. $T(P) = \argmin\_{\Theta}\mathbb{E}_{P}(Y-\theta ^T X)^{2}$; the reduced statistic is the [[Ordinary Least Squares]] $T(\hat{P}) = \argmin_{\Theta}\frac{1}{n}\sum\_{i=1}^{n}(Y\_{i}-\theta ^T X\_{i})^{2}$.
- **Quantiles and Order Statistics**. $T(P)=F\_P^{-1}(q)$, where $F\_P$ is the CDF of $P$ and $q\in\[0,1]$; the $k$-th [[Order Statistics]] is reduced by choosing $q = k /n$ and then $X\_{(k)} = T(\hat{P}) = F\_{n}^{-1}( k /n)$.

## Linear Statistical Functional

A statistical functional is called ==linear==, if there exists a function $r: \mathcal{X}\to\R^{d}$ such that
$$
T(P) = \int\_{\mathcal{X}}r(x),\d P(x).
$$

- [[#^853ce9|Mean]] is a linear statistical functional with $r(x) = x$.

Due to the linearity of integral, an implication is
$$
T(aP\_{1}+bP\_{2}) = aT(P\_{1}) + bT(P\_{2}).
$$

Additionally, the plug-in estimator for a linear statistical functional becomes
$$
T(\hat{P}) =\int _{\mathcal{X}} r(x) , \d \hat{P}(x)  = \frac{1}{n}\sum_{i=1}^{n}r(X\_{i}).
$$
A corollary is

> [!corollary]
>
> Suppose a statistical functional can be expressed as $T=h(T\_{1},\dots,T\_{K})$, where $T\_{k}$ is a linear statistical functional for $1\le k\le K$. Then, a plug-in estimator of $T(P)$ is $h(T\_{1}(\hat{P}),\dots,T\_{K}(\hat{P}))$.

This corollary covers many common statistical functionals.

> [!ex] Variance
>
> Let $T\_{1}$ and $T\_{2}$ be the first and second moments respectively. Then, the variance is $T = T\_{2} - T\_{1}^{2}$. The corresponding plug-in estimator is $T(\hat{P}) = T\_{2}(\hat{P})-T\_{1}(\hat{P})^{2} = \frac{1}{n}\sum\_{i=1}^{n}(X\_{i})^{2} - (\frac{1}{n}\sum\_{i=1}^{n}X\_{i})^{2} = \frac{1}{n}\sum\_{i=1}^{n}(X\_{i} - \overline{X})^{2}$, the sample variance.

> [!ex] Correlation
>
> Let $T\_{a,b}$ be the mixed moment of $X$ and $Y$ of order $a+b$. Then the correlation is
> $$
> T = \frac{T\_{1,1} - T\_{1,0}T\_{0,1}}{\sqrt{ T\_{2,0} - T\_{1,0}^{2} } \sqrt{ T\_{0,2} - T\_{0,1}^{2} }} = \frac{\mathbb{E}XY - \mathbb{E}X \mathbb{E}Y}{\sqrt{ \mathbb{E} X^{2} - (\mathbb{E}X)^{2} } \sqrt{ \mathbb{E} Y^{2} - (\mathbb{E}Y)^{2} }}.
> $$
> Hence, the corresponding plug-in estimator is
> $$
> T(\hat{P}) = \frac{T\_{1,1}(\hat{P}) - T\_{1,0}(\hat{P})T\_{0,1}(\hat{P})}{\sqrt{ T\_{2,0}(\hat{P}) - T\_{1,0}(\hat{P})^{2} } \sqrt{ T\_{0,2}(\hat{P}) - T\_{0,1}(\hat{P})^{2} }} = \frac{\sum\_{i=1}^{n}(X\_{i}-\overline{X})(Y\_{i}-\overline{Y})}{\sqrt{ \sum\_{i=1}^{n}(X\_{i}-\overline{X})^{2} } \sqrt{ \sum\_{i=1}^{n}(Y\_{i}-\overline{Y})^{2} }},
> $$
> which is the sample correlation.
