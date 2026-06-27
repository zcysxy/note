---
publish: true
aliases: Mean, Expected Value
title: Expectation
created: 2022-09-25T15:03:19
modified: 2024-11-04T00:45:10
published: 2026-06-26T19:22:44.486Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Expectation

- The **expectation** or mean of a discrete [[Random Variable]] is
  $$
  \mathbb{E}[X] = \sum_{i}x_i p(x_{i}),
  $$
  where $\{x_i\}$ is the range of $X$, and $p$ is the [[Probability Mass Function|PMF]] of $X$.

- For a continuous [[Random Variable]],
  $$
  \mathbb{E}[X] = \int_{\R} xf(x) \, d, 
  $$
  where $f$ is the [[Probability Density Function|PDF]] of $X$.

We say $X$ is integrable if $\mathbb{E}[|X|] < \infty$. If one of the expectations $\mathbb{E}[X_{+}]$ or $\mathbb{E}[X_{-}]$ is finite, the expectation is well-defined. Otherwise, the expectation is undefined.

- For **nonnegative** r.v. $X$,

$$
\mathbb{E}[X] = \int_{0}^{\infty} P(X > x) \, dx.
$$

- Specifically, if $X$ takes vales in $\N$,
  $$
  \mathbb{E}[X] = \sum_{n\ge 0} P(X > n).
  $$
  - Proof: ![[6-7700-hw4#Exercise 2#Solution|n-h]]
- If $X$ is continuous with [[Probability Density Function|Density]] $f$, the proof is easier:
  $\int _{0}^{\infty}P(X>x) \, \d x = \int _{0}^{\infty} \int _{x}^{\infty} f(t) \, \d t  \, \d x = \int _{0}^{\infty}  \int _{0}^{t} f(t) \, \d x \, \d t = \int _{0}^{\infty}t f(t) \, \d  t  = \mathbb{E}[X],$
  where the interchange of the order of integration is justified by [[Fubini's Theorem]] as $f$ is nonnegative.
- For general r.v. $X$, following [[Abstract Integration]], the expectation is defined as ^d5bee7
  $$
  \mathbb{E}[X] = \int_{\R} x \, \d P_{X} = \int_{\Omega} X \, \d P.
  $$

## Properties

- (Linearity) For any linear transformation on random vector $X$, $\mathbb{E}[AX+b] = A\mathbb{E}[X]+b$.
  - Special case: $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$.
- (Independence) For independent r.v. $X, Y$, $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$.
- (Function transformation) For any measurable function $g$, $\mathbb{E}[g(X)] = \int g(x) \, \d P(x)$.

### Proof of Function Transformation

Let $g = g_{+}-g_{-}$. Using the definition of expectation for nonnegative function and linearity, we have

$$
\mathbb{E}[g(X)] = \mathbb{E}[g_{+}(X)] - \mathbb{E}[g_{-}(X)] = \int _{0}^{\infty} P(g_{+}(X) > x) \, \d x - \int _{0}^{\infty} P(g_{-}(X) > x) \, \d x = \int _{0}^{\infty}P(g(X)>x) \, \d  x - \int _{0}^{\infty}P(g(X)<-x) \, \d x.
$$

For the first term on the RHS, we have

$$
\int _{0}^{\infty}P(g(X)>t) \, \d t = \int _{0}^{\infty} \int _{\{ x: g(x)>t \}} \, \d P(x)   \, \d t  
=  \int _{\R} \int _{0}^{g_{+}(x)}\,\d t\, \d P(x)  
= \int _{\R} g_{+}(x) \, \d P(x),
$$

where the interchange of the order of integration is justified by [[Fubini's Theorem]]. Similarly, the second term is $\int _{\R} g_{-}(x) \, \d P(x)$. Therefore, we have

$$
\mathbb{E}[g(X)] = \int g_{+}(x) \, \d P(x)  - \int g_{-}(x) \, \d P(x) = \int g(x) \, \d P(x).
$$
