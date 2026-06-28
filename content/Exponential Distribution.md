---
publish: true
title: Exponential Distribution
created: 2022-12-05T16:39:36
modified: 2024-11-13T02:50:52
published: 2026-06-28T06:43:30.261Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Exponential Distribution

A continuous [[Random Variable]] is of exponential distribution if it has

- Parameters
  - $\lambda > 0$ ^para
- [[Probability Density Function|PDF]]
  - $\displaystyle f(x) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$ ^pdf
  - The important part is $e^{-\lambda x}$; $\lambda$ is just a constant to make if integral to 1
- [[Cumulative Distribution Function|CDF]]
  - $1 - e^{-\lambda x}$ ^cdf
- [[Expectation|Mean]]
  - $\frac{1}{\lambda}$ ^mean
- [[Variance]]
  - $\frac{1}{\lambda^{2}}$ ^var
- [[Moment Generating Function|MGF]]
  - $\lambda /(\lambda - t), \quad t < \lambda$ ^mgf
- [[Characteristic Function|CF]]
  - $\lambda /(\lambda - it)$ ^cf

By the uniqueness of [[Moment Generating Function|MGF]], exponential distribution is [[Gamma Distribution]] with parameter $(1,\lambda)$.

## Exponential Distribution and Poisson Distribution

Exponential distribution and [[Poisson Distribution]] are similar in many ways. Actually, **the waiting times for poisson distribution is an exponential distribution with parameter $\lambda$**. Actually, let $Y$ be the waiting time, let $\lambda$ be the average number of arrivals per time. For $t \ge 0$, let $X \sim \operatorname{Poisson}(\lambda t)$. We know that

$$
P(Y > t) = P(X = 0) = e^{-\lambda t} \frac{(\lambda t)^{0}}{0!} = e^{-\lambda t}.
$$

Then $P(Y \le t) = 1 - e^{-\lambda t}$, i.e., $Y \sim \exp(\lambda)$.

## Exponential Distribution and Geometric Distribution

Exponential distribution can be viewed as the "limit", or a continuous version, of a [[Geometric Distribution]]:

$$
F_{\exp }(n \delta  ) = 1-e^{-\lambda n \delta  } = 1 - (e^{-\lambda \delta })^{n} = F_{\mathrm{geo}}(n),
$$

where the geometric distribution has a parameter $q = e^{-\lambda\delta}$.
Intuitively, the exponential distribution corresponds to a limit of a situation where every $δ$ time units, we toss a coin whose success probability is $p = 1-e^{-\lambda\delta} \approx λδ$, and let $X$ be the time elapsed until the first success.

## Memoryless

We say a nonnegative [[Random Variable]] $X$ is memoryless, if for $n,k\ge{0}$

$$
P(X \ge n+k | X \ge n) = P(X \ge k).
$$

An exponential random variable is memoryless because

$$
P(X \ge n+k | X\ge n) = \frac{e^{-\lambda(n+k)}}{e^{-\lambda n}} = e^{-\lambda k} = P(x \ge k).
$$
