---
publish: true
title: Chernoff Bound
created: 2023-05-09T23:16:08
modified: 2026-06-27T20:42:43
published: 2026-06-28T03:42:43.480Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[High Dimensional Probability]]"
state: done
---

# Chernoff Bound

## Exponential Transform

- Why exponential transform $t\mapsto e^{\lambda t}$?
  - Nice behavior under independent summations
    - $\psi (\lambda)$ is smooth and convex in $\lambda$; the dual $\psi ^{*}(t)$ is convex

## Chernoff Bounds

Assuming zero mean, if the [[Moment Generating Function|MGF]] $\mathbb{E}e^{sX} <\infty$ for some $s\in[0,c]$, then for any $a>0$,

$$
\P(S_n \ge an) \le e^{-\psi (a)n},
$$

where $S_n = \sum_{i}X_i$ and $\psi (a) = \sup_{s\ge 0}(as-\log M_{X} (s))$.

$\psi$ is called the ==large deviation rate function==.

### Proof

By monotonicity and [[Chebyshev Inequality|Markov Inequality]],

$$
\P(S_n>an) = \P(e^{sS_n} > e^{san}) \le e^{-san}\mathbb{E}[e^{sS_n}] = \exp(-san + n \log M_{X_{1}}(s)) \le \exp(-n \psi(a)).
$$

### Exponential Decay

The positivity of $\psi(a)$ gives the exponential decay of the tail of the distribution. To see the positivity, let $h(s) = as - \log M_{X}(s)$. Then,

$$
h(0) = 0, h'(0) = a - \mathbb{E}[X] = a > 0.
$$

Therefore, $\psi(a) > h(0) = 0$.

^hgrad

### Example - Gaussian

The MGF of a standard [[Normal Distribution|normal]] r.v. is $M_{X}(t) = e^{t^{2} /2}$, which gives $h(s) = as - s^{2} /2$, and thus $\psi(a) = a^{2} /2$, and thus $\P(s_n\ge an) \le \exp(-n a^{2} /2)$.

## Large Deviation Principle

For a sum of i.i.d. random variables $X_i$, the large deviation principle states that for any $a>0$,  we have

$$
\lim_{n\to \infty} \frac{1}{n}\log \mathbb{P}(S_n \ge an) = -\psi (a).
$$

That is, the Chernoff bound is also a lower bound and hence tight.

### Simplified Proof

Assume the following regularity conditions

1. $M_{X}$ is finite on $\R$
2. $X$ is continuous with PDF $f$
3. $F_{X}(t)\in(0,1)$ on $\R$, i.e., $X$ is not bounded above or below

The first condition implies that $M_{X}$ is differentiable on $\R$ (see [[6-7700-hw6#Exercise 5 (Interchanging expectation and differentiation)]]) and the third condition implies $\lim_{ s \to \infty } \frac{ \log M_{X}(s)}{s} =\infty$ (see [[6-7700-hw7#Exercise 3]]).

Note that by [[#^hgrad]] and $\lim_{ s \to \infty }h(s)=-\infty$, we know that $h$ has a maximizer $s^*\ge{0}$ such that $\psi(a) = h(s^*)$ and $h'(s^*)=0$, which implies $M'(s^*) / M(s^*) = a$.

We define a _tilted_ distribution $Y$ with PDF $g(x) = \frac{e^{s^*x}}{M(s^*)} f(x)$. We have

$$
\mathbb{E}[Y] = \frac{M'(s^*)}{M(s^*)} = a.
$$

We will show then the probability mass of $S_{n}$ around $an$ is the "tilted" mass of $\sum Y_{i}$ around $an$, which approaches 1 by [[Law of Large Numbers|LLN]].
Specifically, for any $\delta\in(0,a)$, let $B = \left\{  (x_{1},\dots,x_{n}): a-\delta \le \frac{1}{n}\sum_{i}x_{i} \le a+\delta  \right\}\in\R^{n}$. We have

$$
\begin{aligned}
P(S_{n}\ge (a-\delta)n)\ge& P((a+\delta)n \ge S_{n}\ge(a-\delta )n)\\
=&\int _{B}f(x_{1})\cdots f(x_{n})\d x_{1} \cdots \d x_{n} \\
=&\int _{B} M(s^*)^{n}e^{-s^* \sum_{i} x_{i}}g(x_{1})\cdots g(x_{n})\d x_{1} \cdots \d x_{n} \\
\ge&\int _{B} M(s^*)^{n}e^{-s^* n(a+\delta)}g(x_{1})\cdots g(x_{n})\d x_{1} \cdots \d x_{n} \\
=&M(s^*)^{n}e^{-s^* n(a+\delta)} \P( (Y_{1},\dots,Y_{n})\in B) \\
\to& M(s^*)^{n}e^{-s^* n(a+\delta)} \quad \text{as } n\to\infty.
\end{aligned}
$$

Therefore,

$$
\lim_{ n \to \infty } \frac{1}{n} \log \P(S_{n}\ge (a-\delta)n) \ge \log M(s^*) - s^*(a+\delta).
$$

Substituting $a-\delta$ with $a$ gives

$$
\lim_{ n \to \infty } \frac{1}{n} \log \P(S_{n}\ge an) \ge - \psi(a) - 2s^*\delta.
$$

Letting $\delta\to 0$ and combining with the upper bound gives the desired result.
