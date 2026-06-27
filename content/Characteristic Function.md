---
publish: true
aliases:
  - CF
title: Characteristic Function
created: 2024-11-13T02:32:33
modified: 2026-06-27T15:44:38
published: 2026-06-27T22:44:38.774Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
type: note
---

# Characteristic Function

The characteristic function of a [[Random Variable]] $X$ is:

$$
\phi _{X}(t) = \mathbb{E}[e^{it X}]= \mathbb{E}[\cos(tX)] + i\mathbb{E}[\sin(tX)],
$$

When $X$ has [[Probability Density Function|Density]] $f$,

$$
\phi _{X}(t)=\int _{\R} e^{ixt} f(x) \, \d x ,
$$

which is similar to the Fourier transform of a function, except for the absence of a minus sign in the exponent.

The characteristic function has a similar form to the [[Moment Generating Function|MGF]]. However, it addresses the boundedness issue of MGF, e.g., for [[Cauchy Distribution]], as it always holds that $|\phi _{X}(t)| \le 1$.

Due to this similarity, CF has the same properties as MGF, such as the [[Moment Generating Function#Inversion Theorem]] and the following:

![[Moment Generating Function#^prop]]

## Other Properties

### Inversion Theorem for Continuous Random Variables

For a univariate continuous random variable $X$ with CF $\phi _{X}(t)$, we have explicit inversion formula:

$$
f_{X}(x) = \frac{1}{2\pi} \lim_{ T \to \infty } \int _{-T}^{T} e^{-itx} \phi _{X}(t) \,\d t.
$$

Again, this is similar to the inversion formula for the Fourier transform.

### DCT Applies

Since the CF is always bounded by 1, the [[Abstract Integration#Dominated Convergence Theorem]] applies, which gives

$$
\lim_{ n \to \infty } \phi _{X_n} = \phi _{X},
$$

given that $X_n\to X$ a.s.

### Generating Moments

Similar to MGF, we can generate moments from CF:

$$
\mathbb{E}[X^{k}] = i^{-k} \frac{\d^{k}}{\d t^{k}}\phi _{X}(t)\Big|_{t=0}.
$$
