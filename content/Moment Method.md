---
publish: true
title: Moment Method
created: 2026-04-05T00:55:07
modified: 2026-04-05T01:04:22
published: 2026-06-28T06:51:33.995Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
aliases:
type: note
---

# Moment Method

The first and second moment methods are applications of the [[Chebyshev Inequality]]. Consider a **non-negative** and **integer-valued** [[Random Variable]] sequence $(X_{n})$.

## First Moment Method

If $\mathbb{E}X_{n}\to 0$, then $P(X_{n}>0)\to 0$.

Proof: By [[Chebyshev Inequality|Markov Inequality]], we have

$$
P(X_{n}>0) = P(X_{n}\ge 1) \le \mathbb{E}X_{n} \to 0.
$$

## Second Moment Method

If $\mathbb{E}X_{n}\not\to 0$ and $\frac{\Var(X_{n})}{(\mathbb{E}X_{n})^{2}}\to 0$, then $P(X_{n}>0)\to 1$.

Proof: By [[Chebyshev Inequality]], we have

$$
P(X_{n}\le 0) \le P\left( \left|\frac{X_{n}-\mathbb{E}X_{n}}{\mathbb{E}X_{n}}\right|\ge 1 \right) \le \frac{\Var(X_{n})}{(\mathbb{E}X_{n})^{2}} \to 0.
$$

Another statement of the second moment method is

$$
P(X > 0) \ge \frac{(\mathbb{E}X)^{2}}{\mathbb{E}[X^{2}]}.
$$
