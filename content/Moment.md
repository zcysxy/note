---
publish: true
title: Moment
created: 2021-08-17T21:55:55
modified: 2024-11-03T03:26:49
published: 2026-06-26T19:31:32.481Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Moment

The $n$-th moment of a real-valued continuous function $f(x)$ of a real variable about a value $c$ is

$$
\mu_{n}=\int_{-\infty}^{\infty}(x-c)^{n} f(x) \mathrm{d} x
$$

Restricted to the context of [[Random Variable]]s, we consider a probability measure $P$. Then the $n$-th moment of a random variable $X$ is

$$
\mathbb{E}[X^{n}] = \int_{-\infty}^{\infty} x^{n} \d P(x).
$$

The $n$-th central moment is $\mathbb{E}[(X-\mathbb{E}[X])^{n}]$.
[[Expectation|Mean]] is the first moment, and [[Variance]] is the second central moment.

## p-Order Integrable

A r.v. is called $p$-order integrable if $\mathbb{E}[|X|^{p}] < \infty$.

- If $p>q$, then $p$-order integrable implies $q$-order integrable.
