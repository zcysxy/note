---
publish: true
title: Variance
created: 2022-09-25T15:11:01
modified: 2024-11-03T03:08:43
published: 2026-06-26T19:23:01.489Z
tags:
  - pub-prob
aliases:
type: note
sup: []
state: done
---

# Variance

The **variance** of a [[Random Variable]] is

$$
\operatorname{Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^{2}] = \mathbb{E}[X^{2}] - (\mathbb{E}[X])^{2}.
$$

## Properties

- If $X_{1}$ and $X_{2}$ are independent, then $\Var(X_{1}+X_{2}) = \Var(X_{1}) + \Var(X_{2})$.
  - Generally, this is not true, unlike [[Expectation]]
- For any linear transformation on random vector $X$, $\Var(AX+b) = A\Var(X)A^T$
  - special case: $\Var(aX+b) = a^{2}\Var(X)$

## Sample Variance

For a finite sample of size $n$, the sample variance is

$$
s^{2} = \frac{\sum_{i=1}^{n}(x _i - \overline{x})^{2}}{n-1},
$$

where $\overline{x} = \frac{\sum_{i=1}^{n}x _i}{n}$.
The $n-1$ in the denominator makes it a **unbiased** estimator of the real variance of the population.
This is because

$$
\begin{aligned}
\mathbb{E}[s^{2}]
&= \frac{1}{n-1}\sum_{i=1}^{n}\mathbb{E}[x_i^{2} - 2x _i\overline{x} + \overline{x}^{2}]\\
&= \frac{n}{n-1} \left( \left( 1-\frac{2}{n}+\frac{n}{n^{2}} \right)\mathbb{E}[x _i^{2}] + \left( \frac{n^{2}-n}{n^{2}} - \frac{2(n-1)}{n}\right)\mathbb{E}[x_{1}x_{2}] \right) \\
&= \frac{n}{n-1} \frac{n-1}{n}(\mathbb{E}[x_{1}^{2}] - \mathbb{E}[x_{1}]^{2})\\
&= \operatorname{Var}(x_{1})
\end{aligned}
$$
