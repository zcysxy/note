---
publish: true
title: Geometric Distribution
created: 2022-12-05T19:09:50
modified: 2024-11-03T19:03:08
published: 2026-06-28T06:42:12.969Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Geometric Distribution

For a [[Bernoulli Trial]], let $X$ be the number of tests when we first meet 1. Then $X$ is said to have a **geometric distribution**.
Another definition lets $X$ be the number of failures before the first success, then the PMF is $pq^{n}$.

- Parameter
  - $p\in [0,1]$ ^para
- [[Cumulative Distribution Function|CDF]]
  - $F(n) = 1 - q^{n}$ ^cdf
- [[Probability Mass Function|PMF]]
  - $p(n) = pq^{n-1}$ ^pdf
- [[Expectation|Mean]]
  - $1 /p$ ^mean
- [[Variance]]
  - $q /p^{2}$ ^var
- [[Moment Generating Function|MGF]]
  - $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$ ^mgf

## Memoryless

An geometric random variable is memoryless:

$$
P(X \ge n+k | X> n) = \frac{q^{n+k-1}}{q^{n}} = q^{k-1} = P(x \ge k).
$$

This gives an alternative method to calculate the expectation of geometric distribution using [[Conditional Probability#Conditional Expectation]].
For the mean, we have

$$
\mathbb{E}[X] = \mathbb{E}[X\given X =1 ]P(X=1) + \mathbb{E}[X\given X >1 ]P(X>1) = 1 \cdot p + \left( 1 + \mathbb{E}[X] \right) \cdot q,
$$

which implies $\mathbb{E}[X] = (p+q)/p = 1 /p$.
Similarly, for the second moment, we have

$$
\mathbb{E}[X^{2}] = 1\cdot p + (\mathbb{E}[(X+1)^{2}])\cdot q,
$$

which implies $\mathbb{E}[X^{2}] = (2-p) /p^{2}$.
