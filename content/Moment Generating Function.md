---
publish: true
aliases: MGF
title: Moment Generating Function
created: 2022-09-25T15:43:43
modified: 2024-11-07T17:31:17
published: 2026-06-26T19:42:58.959Z
tags:
  - pub-prob
type: note
sup: []
state: done
---

# Moment Generating Function

The **moment generating function** of a [[Random Variable]] is

$$
M(t) = \mathbb{E}[e^{tX}],
$$

where $\mathbb{E}$ is the [[Expectation]]. We note that

$$
\frac{\textup{d}^{n}}{\textup{d}t^{n}}\mathbb{E}[e^{tX}]\big|_{t=0}= \mathbb{E}[X^{n}],
$$

which is the $n$th moment of $X$.

- We only need the MGF to be defined around 0. Even though, there are some [[Random Variable]]s that don't have a MGF.
  - [[Cauchy Distribution]] doesn't have a MGF except at $t=0$.

## Inversion Theorem

Suppose that $M_X(s)$ is finite for all $s$ in an interval of the form $[-a, a]$, where $a>0$. Then, $M_X$ determines uniquely the [[Cumulative Distribution Function|CDF]] of the [[Random Variable]] $X$.
In particular, if $M_X(s)=M_Y(s)<\infty$, for all $s \in[-a, a]$, then the random variables $X$ and $Y$ have the same CDF.

## Multivariate Tranform

We can define joint MGF, or multivariate transform, of $n$ r.v.s $X_{1},\dots,X_n$:

$$
M_{X_{1},\dots,X_n}(s_{1},\dots,s_n) = \mathbb{E}\left[ \exp\left( \sum_{i=1}^{n} s_i X_i \right) \right].
$$

The inversion theorem holds for the joint MGF as well:
if $Y_1, \ldots, Y_n$ is another set of random variables and $M_{X_1, \ldots, X_n}\left(s_1, \ldots, s_n\right), M_{Y_1, \ldots, Y_n}\left(s_1, \ldots, s_n\right)$ are the same functions of $s_1, \ldots, s_n$, in a neighborhood of the origin, then the joint distribution of $X_1, \ldots, X_n$ is the same as the joint distribution of $Y_1, \ldots, Y_n$.

## Properties

- $Y=aX+b\implies M _{Y}(s) = e^{sb}M_{X}(as)$
- $X\perp Y\implies M_{X+Y}(s)=M_{X}(s)M_{Y}(s)$
- $X\perp Y\implies M_{X,Y}(s,t)=M_{X}(s)M_{Y}(t)$
- $X\perp Y \land (Z=BX + (1-B)Y, B \sim \operatorname{Bern}(p)) \implies M_{X}(s)=pM_{X}(s)+(1-p)M_{Y}(s)$

^prop

### Example - MGF of a Normal Distribution

We calculate the MGF of a [[Normal Distribution]]. For a standard normal distribution $\mathcal{N}(0,1)$, one can easily calculate that $M_{Z}(s) = \exp(s^{2}/2)$.
Using the first property, for a general normal distribution $X \sim \mathcal{N}(\mu,\sigma^{2})$, we have $M_{X}(s) = \exp(\mu s + \sigma^{2} s^{2} /2)$.

Further, for $X \sim \mathcal{N}(\mu_{1},\sigma_{1}^{2})$ and $Y \sim \mathcal{N}(\mu_{2},\sigma_{2}^{2})$, we have

$$
M_{X+Y}(s) = \exp\left( (\mu_{1}+\mu_{2})s + (\sigma_{1}^{2}+\sigma_{2}^{2})s^{2}/2 \right).
$$

Note that this is the MGF of $\mathcal{N}(\mu_{1}+\mu_{2}, \sigma_{1}^{2}+\sigma_{2}^{2})$.
By the inversion theorem, we conclude that $X+Y \sim \mathcal{N}(\mu_{1}+\mu_{2}, \sigma_{1}^{2}+\sigma_{2}^{2})$.

## Related Problems

- [[6-7700-hw6#Exercise 5 (Interchanging expectation and differentiation)]] justifies the interchange of expectation and differentiation in the computation of moments for nonnegative random variables.
- [[6-7700-hw7#Exercise 3]]

### Boundedness of MGF

Suppose

$$
\limsup_{ x \to \infty }  \frac{\log \P(X>x)}{x} = -\nu <0.
$$

Show that $M_{X}(s)$ is finite for all $s\in[0,\nu )$.

**Solution:**

First, the $\limsup$ implies that for any $\epsilon>0$, there exists $x_{0}$ such that $\frac{\log \P(X>x)}{x} < -\nu + \epsilon$for all $x>x_{0}$.
We only need to show that $\mathbb{E}[e^{sX}\given x> x_{0}]$ is finite.
By the definition of [[Expectation]] for nonnegative random variables, we have

$$
\mathbb{E}[e^{sX}\given x>x_{0}] =\int_{\exp sx_{0}}^{\infty} P(e^{sX}> t)\d t
=\int _{\exp sx_{0}}^{\infty} P(X > (\ln t) /s ) \d t
\le \int_{\exp sx_{0}}^{\infty} \exp((\epsilon-\nu) (\ln t)/s) \d t
= \int _{\exp sx_{0}}^{\infty} t^{(\epsilon-\nu)/s} \d t.
$$

Let $\epsilon < \nu - s$. Then $(\epsilon - \nu) /s < -1$, which gives

$$
\int_{\exp sx_{0}}^{\infty} t^{(\epsilon-\nu)/s} \d t < \infty.
$$
