---
publish: true
title: Cauchy Distribution
created: 2022-11-03T21:24:11
modified: 2022-11-09T13:57:00
published: 2026-06-28T06:41:29.762Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Cauchy Distribution

- Parameter
  - $a$ ^para
- [[Cumulative Distribution Function|CDF]]
  - $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$ ^cdf
- [[Probability Density Function|PDF]]
  - $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$ ^pdf
- [[Expectation|Mean]]
  - Undefined ^mean
- [[Variance]]
  - Undefined ^var
- [[Moment Generating Function|MGF]]
  - Undefined ^mgf
- [[Characteristic Function]]
  - $e^{-a|t|}$

## Characteristic Function

The [[Characteristic Function]] of a Cauchy [[Random Variable]] is

$$
\phi(t) = \int _{\R} e^{ixt} \frac{a}{\pi} \frac{1}{x^{2} + a^{2}} \, dx.
$$

From [[Residue Theorem]], we know that

$$
\phi(t) = 2\pi i \frac{a}{\pi} \frac{e^{ix|t|}}{ \frac{ \mathrm{d} }{ \mathrm{d}x } x^{2} + a^{2}}\Big|_{x = ai} = e^{-a|t|}.
$$

Note that we need different semi-circle contour for $t \lessgtr 0$.

## Problem

Consider $P(0,a) \in \R^{2}$. A line passing $P$ has the angle with the y-axis $\theta \sim \mathcal{U}\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Let $X$ be the intersection of the line with x-axis. Then the distribution of $X$ is Cauchy distribution with parameter $a$.

## Reproducibility and Sample Mean

Just like [[Moment Generating Function|MGF]], a [[Characteristic Function|CF]] uniquely determine a distribution.
Let $\{ X _i \}_{i=1}^{n}$ be a set of Cauchy random variables with parameter $\{ a_i \}$. Then we have

$$
\mathbb{E}\left[ e^{it\sum_{i=1}^{n}X _i} \right] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i}] = \prod^{n}_{i=1} e^{-a_i|t|} = e^{-\left( \sum^{n}_{i=1}a_i \right)|t|}.
$$

Thus, $\sum^{n}_{i=1}X _i$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i$.

The sample mean r.v. of $\{ X _i \}$ is $\overline{X} = \frac{\sum^{n}_{i=1}X _i}{n}$. And we have

$$
\mathbb{E}[e^{it \overline{X}}] = \prod_{i=1}^{n}\mathbb{E}[e^{itX _i /n}] = \prod^{n}_{i=1} e^{-a_i|t /n|} = e^{-\left( \sum^{n}_{i=1}a_i \right)/n|t|}.
$$

Thus, $\overline{X}$ is also a Cauchy random variable, with parameter $\sum^{n}_{i=1}a_i /n$. Specifically, when $a_i$ are the same, then $\overline{X}$'s parameter is also $a$.

### PDF Approach

Another way to show that the sample mean of Cauchy r.v.s is still Cauchy is to calculate its [[Probability Density Function|PDF]]. We start with $(X_{1} + X_{2})/2$. We know the PDF of $X_{1} /2$ is $2f_{1}(2x) \coloneqq \hat{f}_{1}(x)$, where $f_{1}$ is the PDF of $X_{1}$. Therefore, the PDF of $(X_{1} + X_{2}) /2$ is

$$
\begin{aligned}
f(x) &= \hat{f}_{1} * \hat{f}_{2} (x)\\
&= \frac{4a_{1}a_{2}}{\pi^{2}}\int _{\R} \frac{1}{((2t)^{2} + a_{1}^{2})((2(x - t))^{2}+a_{2}^{2})} \, dt\\
&= \frac{4a_{1}a_{2}}{\pi^{2}} \frac{2xa_{1}a_{2}(\log (4t^{2} + a_{1}^{2}) - \log(4(x - t)^{2} + a_{2}^{2})) + a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2})\tan ^{-1} \left( \frac{2(t-x)}{a_{2}} \right) + a_{2}(4x^{2} + a_{2} - a_{1})\tan ^{-1}\left( \frac{2x}{a_{1}} \right)}{2a_{1}a_{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})}\Bigr|_{t=-\infty}^{\infty}\\
&= \frac{2}{\pi^{2}(16x^{4}+8x^{2}(a_{1}^{2}+a_{2}^{2}) + (a_{1}^{2} - a_{2}^{2})^{2})} \pi(a_{1}(4x^{2} + a_{1}^{2} - a_{2}^{2}) + a_{2}(4x^{2} + a_{2}^{2} - a_{1}^{2}))\\
&= \frac{2}{\pi} \frac{a_{1} +a_{2}}{4x^{2} + (a_{1} + a_{2})^{2}}\\
&= \frac{\frac{a_{1}+a_{2}}{2}}{\pi} \frac{1}{x^{2} + \left(\frac{a_{1} + a_{1}}{2}\right)^{2}}
\end{aligned}
$$

That is, $(X_{1} + X_{2})/2$ is a Cauchy r.v. with parameter $(a_{1} + a_{2}) /2$. By deduction, we know that the sample mean of Cauchy r.v.s is still Cauchy.
