---
publish: true
title: Cauchy-Schwarz Inequality
created: 2024-10-28T20:28:23
modified: 2026-06-27T15:33:43
published: 2026-06-27T22:33:45.079Z
tags:
  - pub-prob
state: done
sup:
  - "[[Math]]"
aliases:
type: note
---

# Cauchy-Schwarz Inequality

## In [[Vector Space]]

For vectors $x, y$ in an [[Inner Product]] space,

$$
|\langle x,y \rangle |^{2} \le \left< x,x \right> \left< y,y \right>,
$$

or equivalently,

$$
|\langle x,y \rangle | \le \|x\|\|y\|,
$$

where the norm is induced by the inner product.
The equality holds if and only if $x$ and $y$ are linearly dependent.

## In [[Probability]]

For [[Random Variable]]s $X$, $Y$ with a finite second moment,

$$
\mathbb{E}[|XY|] \leq \sqrt{\mathbb{E}[X^2]}\sqrt{\mathbb{E}[Y^2]}.
$$

The equality holds if and only if $X = aY$ for some constant $a$.
This is a special case of [[#In Vector Space]] as [[Expectation]] is just the $L^2$ inner product w.r.t the [[Measure|Probability Measure]].

An application of this is [[Covariance#Covariance as an Inner Product]].

## Proofs

First consider the probability space.
WLOG, consider nonnegative r.v.s. If $\mathbb{E}[Y^{2}]=0$, then $Y=0$ a.s., and the inequality is trivial. Otherwise, let $a = \mathbb{E}[XY] / \mathbb{E}[Y^2]$. Then

$$
\begin{aligned}
0 &\leq \mathbb{E}[(X-aY)^{2}] = \mathbb{E}[X^{2}] - 2a\mathbb{E}[XY] + a^{2}\mathbb{E}[Y^{2}] \\
&= \mathbb{E}[X^{2}] - \frac{(\mathbb{E}[XY])^{2}}{\mathbb{E}[Y^{2}]}.
\end{aligned}
$$

From the inequality, the equality holds iff $X = aY$ a.s.
We can find $a$ in a more principled way.

### Quadratic

Consider the quadratic:

$$
\begin{aligned}
0\le\left< x+ty,x+ty \right> &= \sum (x_{i}+t y_i)^{2}\\
&=\left( \sum y_{i}^{2} \right) t ^{2} + 2 \left( \sum x_{i}y_{i} \right)t + \left( \sum x_{i}^{2} \right)\\
\implies& \left( \sum x_{i}y_{i} \right) ^{2} \le \left( \sum x_{i}^{2} \right)\left( \sum y_{i}^{2} \right).
\end{aligned}
$$

On a complex field, we replace $t$ with $t\alpha$ where $t\in\R$, $\alpha \langle x,y \rangle=|\langle x,y \rangle|$.

### Projection

We decompose $y$ as its projection onto the direction of $x$ and an orthogonal part $z$. We have

$$
0 \le \|z\|^{2} =\left\| y - \frac{\langle x,y \rangle }{\langle x,x \rangle }x\right\|^{2} = \|y\|^{2} - \frac{\langle x,y \rangle ^{2}}{\|x\|^{2} } 
$$

which implies the result.
