---
publish: true
aliases:
  - CDF
  - Distribution Function
title: Cumulative Distribution Function
created: 2022-09-25T14:47:10
modified: 2024-11-02T23:43:32
published: 2026-06-26T19:02:17.506Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Cumulative Distribution Function

The **cumulative distribution function**, or more simply the distribution function, $F$ of the random variable $X$ is defined for any real number $x$ by

$$
F(x) = P (X ≤ x) = P(X^{-1}(- \infty, x]).
$$

Since $(-\infty, x]$ is measurable, the above function is well-defined.

## Properties

- (Monotonicity) $x_1 \le x_2 \implies F(x_1) \le F(x_2)$.
- (Limit) $\lim_{x \to -\infty} F(x) = 0$, $\lim_{x \to \infty} F(x) = 1$.
- (Right continuity) $F(x) = F(x^+)$.

The proof of the right continuity uses the fact that given any decreasing sequence $\{ x_n \}$ to $x$, we have $\cap _{n=1}^{\infty}\{  X\le x_n \} = \{ X\le x \}$.
While given any increasing sequence $\{ x_n \}$ to $x$, we have $\cup _{n=1}^{\infty}\{  X\le x_n \} = \{ X< x \}$. Therefore, a CDF needs not be left continuous, and

$$
F(x) - F(x^{-}) = P(X\le x) - P(X< x) = P(X=x).
$$

Any function $F:\R\to[0,1]$ that satisfies the above properties is called a ==distribution function==.
The next section shows that any distribution function defines a [[Random Variable]], or equivalently, its probability law.

- Moreover, the [[Random Variable#Law|probability law]] and CDF (of a r.v.) uniquely determine each other. ^law-cdf
  - Proof sketch: law => CDF is trivial. Now suppose a CDF $F_{X}$ is given. It is easy to show that $F_{X}$ uniquely determines a probability measure $P_{X}$ on field $\mathcal{F}_0$, the collection of all unions of finitely many intervals of the form $(a, b]$. Moreover, one can show that $P_{X}$ satisfies the countable additivity property on $\mathcal{F}_{0}$. Then by [[Caratheodory's Extension]], $P_{X}$ can be uniquely extended to a probability measure on the $(\R,\mathcal{B})$.

## Simulate Any Distribution

To simulate an arbitrary distribution $F$, let $X \sim \mathcal{U}(0,1)$, then let $Y = F^{-1}(X) \coloneqq \inf\{ y: F(y)\ge X \}$. Then we have

$$
P(Y\le y) = P(F^{-1}(X) \le y) = P(X \le F(y)) = F_{\mathcal{U}(0,1)}(F(y)) = F(y),
$$

where the second equality comes from the property of the general inverse $F(y) \ge x \iff y \ge F^{-1}(x)$
Therefore, $Y \sim F$.
