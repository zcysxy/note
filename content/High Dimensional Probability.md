---
publish: true
title: High Dimensional Probability
created: 2023-05-09T19:38:43
modified: 2025-08-05T01:24:05
published: 2026-01-06T20:10:18.096-05:00
tags:
  - pub-stat
aliases:
type: note
banner: https://lh3.googleusercontent.com/Rs2iZI77DywOVUtFprm9d5SQqAy-76Q4stgKQ0xS5XO0oqcMfvXUvtoYbRi8txBI26i1L7-4alpYn0CXdnPUyEfaWtriHcNN1lTfZpY=s2500
banner_icon: 🤹
sup:
  - "[[Probability]]"
  - "[[Stochastic Process]]"
  - "[[Math]]"
state: "[[%wip]]"
---

# High-Dimensional Probability

High-dimensional probability theory studies a high-dim random vector $X\in\R^{n}$ and its transformation (high-dim functions). Without any additional structure, there is nothing special about this random vector. In high-dim probability, we always assume $X$ has **independent** (or **weakly** dependent) coordinates, i.e., $X = (X\_{1},\dots,X\_{n})$ where $X\_{i}$ are independent random variables.
Suppose $X\_i$ are iid, the very first result we have is regarding its variance:
$$
\Var(X) = \Cov(X\_{1},\dots,X\_n) = n\Var(X\_{1}).
$$
Such a factorization into the dimension $n$ and one-dim property is called ==tensorization==, a key technique in high-dimensional probability.

For the transformation of such high-dim random vectors, high-dimensional probability theory studies **high-dimensional functions** of the form
$$
f(X\_{1},\dots,X\_n).
$$
Provided that $f$ is "smooth" enough, we expect [[#Concentration of Measure]], i.e., $f(X) \approx \mathbb{E}\[f(X)]$.
Provided that $f$ is not too "complex", we can express it as a [[#Suprema of Stochastic Processes]], and bound its expectation by its "complexity".

> [!oth] Applications
>
> - [[Statistical Learning]]
> - Compressed sensing
> - random matrices
>   - covariance matrix
>   - random graphs
> - Sampling
> - Optimal transport
> - Gaussian approximation

## Concentration of Measure

Consider the simplest form: $f(x\_{1},\dots,x\_n) = \frac{1}{n}\sum\_{i=1}^{n}x\_i$. If ${ X\_{i} }_{i=1}^{\infty}$ is IID and has a finite mean, by the strong [[Central Limit Theorem]], we know $f(X) \overset{a.s.}{\to} \mathbb{E}\[X_{1}]$. We ask

> [!qn]
>
> 1. How about general functions?
> 2. How fast is this convergence? (non-asymptotic)

> [!thm] Informal Principle
> If $X = { X\_i }\_{i=1}^{n}$ is IID, then $f(X) \approx  \mathbb{E}f(X)$ provided that $f$ is "smooth" enough, i.e., $f$ does not depend too heavily on any of its coordinates.

- [[Chebyshev Inequality]]
- [[Hoeffding's Inequality]]
  - [[Azuma]]
- [[Poincare Inequality]]
- [[Chernoff Bound]]
- [[Sobolev Inequality]]
- [[Transportation Inequality]]

## Suprema of Stochastic Processes

> [!qn]
> How large is $\mathbb{E}f(X)$?

> [!ex]
>
> - L2 error: $| X - \hat{X} |_{2} = \sup_{v\in S^{d-1}}\left|\left< v, (X-\hat{X})v \right>\right|$.
> - Convex conjugate: $f^{\*}(x)=\sup\_{y\in\R^{n}}{ \left< y,x \right> - f(y) }$

The prevalence of suprema is related to the ==variational principle==, which transform the original problem into an [[Optimization]] problem, with the original solution corresponding to a supremum.

> [!thm] Informal Principle
> If $t\mapsto Y\_{t}$ is "smooth", then $\mathbb{E}\[\sup\_{t\in T}Y\_t]$  can be controlled by the complexity of $T$.
