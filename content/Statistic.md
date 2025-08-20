---
{"publish":true,"title":"Statistic","created":"2025-05-21T19:18:56","modified":"2025-06-28T18:01:58","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Statistics]]"],"aliases":null,"type":"note"}
---


# Statistic

A ==statistic== is some *measurement* taken directly from the sample.
Formally, a statistic is a [[Measurable]] function $T: \mathcal{X}\to \R^{k}$.
A statistic transforms the sample into some measurement of the sample.
Notably, a statistic acts on the sample, but not the underlying distribution. And usually we want to use the statistic to infer something about the underlying distribution.

> [!example]
>
> The sample average $T(X_{1},\dots,X_n) = \frac{1}{n}\sum_{i=1}^{n}X_{i}$, is a statistic, which approximates the [[Expectation\|Mean]] of the underlying distribution.

**First generalization**. A statistic can be a measurable functional: $T : \mathcal{X}\to \mathcal{T}$, where $\mathcal{T}$ is some function space.

> [!example]
>
> The empirical CDF $T(X_{1},\dots,X_n) = \frac{1}{n}\sum_{i=1}^{n}\mathbb{1} \{ x \le  X_i \}$, is a statistic, which is a function on $\R$ and approximates the CDF of the underlying distribution.

**Second generalization**. A statistic can be regarded as a [[Statistical Functional]] evaluated at the empirical distribution. Similarly, a statistical functional is some *measurement* taken from the underlying distribution. See [[Statistical Functional]] for more details.

**Third generalization**. This is a generalization of the interpretation. Due to its general definition, any *output of a statistical procedure* is also a statistic (if measurable), such as an [[Estimation\|estimator]], [[Hypothesis Testing\|test]], [[Prediction\|predictor]], etc.

> [!rmk] Statistic is Random
>
> Being a function of random variables, a statistic is also a [[Random Variable]].
> Thus, if a statistic is an estimator of some function on the underlying distribution, we can discuss its [[Convergence of Random Variables\|convergence properties]].
