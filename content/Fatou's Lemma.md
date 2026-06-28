---
publish: true
title: Fatou's Lemma
created: 2024-11-04T01:41:12
modified: 2024-12-13T13:28:18
published: 2026-06-28T05:36:11.249Z
tags:
  - pub-prob
state: done
sup:
  - "[[Real Analysis]]"
aliases:
type: note
---

# Fatou's Lemma

Let $f$ be an [[Abstract Integration|integrable]] function on a measure space; let $g_n$ be a sequence of functions on the same space.

- If $g_n$ are lower bounded by $f$, i.e., $g_n \ge f$ for all $n$, then $\int \liminf g_n \, \d \mu \le \liminf \int g_n \, \d \mu$;
- If $g_n$ are upper bounded by $f$, i.e., $g_n \le f$ for all $n$, then $\int \limsup g_n \, \d \mu \ge \limsup \int g_n \, \d \mu$.

## Proof

We only prove the first statement. Fixing $n\in\N$, for any $m\ge n$, we have

$$
\inf_{k\ge n} g_k-f \le g_m-f.
$$

Taking integrals gives

$$
\int \inf_{k\ge n} g_k-f \, \d \mu \le \int g_m-f \, \d \mu.
$$

Taking infimum over $m\ge n$ gives

$$
\int \inf_{k\ge n}g_k-f \,\d \mu\le \inf_{m\ge n}\int g_m-f \,\d \mu.
$$

Since the integrand on the LHS is **nonnegative**, by [[Abstract Integration#Monotone Convergence Theorem|MCT]], taking limit over $n$ gives

$$
\lim_{n}\int\inf_{k\ge n} g_k - f \,\d\mu=\int\liminf_{n} g_n - f \,\d\mu\le \liminf_{n}\int g_n-f \,\d\mu.
$$

By the linearity of integral, we have

$$
\int \liminf g_n \, \d \mu \le \liminf \int g_n \, \d \mu.
$$

## Counter Example

Let $X_n = \mathbb{1}_{[n,n+1]}$ or $X_{n}=\mathbb{1}_{[0,1 /n]}\cdot n$. Then $\liminf_{ n \to \infty }X_n = 0$ but $\mathbb{E}[X_n] = 1$ for all $n$.
