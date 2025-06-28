---
{"publish":true,"title":"Statistical Functional","created":"2025-06-28T17:51:19","modified":"2025-06-28T18:19:13","cssclasses":"","alias":null,"type":"note","sup":["[[Statistics]]"],"state":"[[%wip]]"}
---


# Statistical Functional

Similar to a [[Statistic]], a ==statistical functional== is some measurement of the underlying *distribution*. With a slight abuse of notation, we write it as
$$
T: \Delta(\mathcal{X}) \to \R^{d}.
$$

## Reduction to Statistic

A [[Statistic]] is a special statistical functional evaluated at the **empirical distribution**, i.e., the uniform distribution over all samples:
$$
T(X) = T\left(\frac{1}{n}\sum_{i=1}^{n}\delta_{X_i}\right) \eqqcolon T(\hat{P}).
$$
Since all information about the sample is included in its empirical distribution, the above equation is one-to-one. Thus we use the notation for [[Statistic]] $T(X)$ and statistical functional at empirical distribution $T(\hat{P})$ interchangeably.

## Plug-In Principle

> [!rmk] In general, $T(\hat{P})$ is a good estimator of $T(P)$.

## Examples

- **Mean**. $T(P) =\int _{\mathcal{X}}x \, \d P(x)$; the reduced statistic is the sample mean $T(\hat{P}) = \frac{1}{n}\sum_{i=1}^{n}X_{i}$. ^853ce9
- **Variance**. $T(P) = \int _{\mathcal{X}}x^{2}\,\d P(x) - (\int _{\mathcal{X}}x \, \d P(x))^{2}$; the reduced statistic is the sample variance $T(\hat{P}) = \frac{1}{n}\sum_{i=1}^{n}(X_{i} - \overline{X})^{2}$.
- **Least squares**. $T(P) = \argmin_{\Theta}\mathbb{E}_{P}(Y-\theta ^T X)^{2}$; the reduced statistic is the [[Ordinary Least Squares]] $T(\hat{P}) = \argmin_{\Theta}\frac{1}{n}\sum_{i=1}^{n}(Y_{i}-\theta ^T X_{i})^{2}$.
- **Quantiles and Order Statistics**. $T(P)=F_P^{-1}(q)$, where $F_P$ is the CDF of $P$ and $q\in[0,1]$; the $k$-th [[Order Statistics]] is reduced by choosing $q = k /n$ and then $X_{(k)} = T(\hat{P}) = F_{n}^{-1}( k /n)$.

## Linear Statistical Functional

A statistical functional is called ==linear==, if there exists a function $r: \mathcal{X}\to\R^{d}$ such that
$$
T(P) = \int_{\mathcal{X}}r(x)\,\d P(x).
$$

- [@] [[Statistical Functional#^853ce9\|Mean]] is a linear statistical functional with $r(x) = x$.

Due to the linearity of integral, an implication is
$$
T(aP_{1}+bP_{2}) = aT(P_{1}) + bT(P_{2}).
$$

Additionally, the plug-in estimator for a linear statistical functional becomes
$$
T(\hat{P}) =\int _{\mathcal{X}} r(x) \, \d \hat{P}(x)  = \frac{1}{n}\sum_{i=1}^{n}r(X_{i}).
$$
A corollary is

> [!corollary]
>
> Suppose a statistical functional can be expressed as $T=h(T_{1},\dots,T_{K})$, where $T_{k}$ is a linear statistical functional for $1\le k\le K$. Then, a plug-in estimator of $T(P)$ is $h(T_{1}(\hat{P}),\dots,T_{K}(\hat{P}))$.

This corollary covers many common statistical functionals.

> [!ex] Variance

> [!ex] Correlation
