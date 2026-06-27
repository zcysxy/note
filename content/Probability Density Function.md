---
publish: true
aliases:
  - PDF
  - Density
  - Continuous Random Variable
title: Probability Density Function
created: 2022-09-25T14:56:16
modified: 2024-11-03T19:23:07
published: 2026-06-26T19:20:18.082Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Probability Density Function

We say that X is a ==continuous random variable== if there exists a nonnegative measurable function $f(x)$, defined for all real $x ∈(−∞,∞)$, having the property that for any (measurable) set $B$ of real numbers

$$
P (X ∈ B) = \int_{B} f(x)\d x.
$$

The function $f(x)$ is called the **probability density function** of the random variable $X$.

Or equivalently, by [[Cumulative Distribution Function#^law-cdf|the equivalence between CDF and law]], a r.v. $X$ is continuous iff it possesses a density $f$ such that

$$
F(t) = \int_{-\infty}^{t} f(x)\d x.
$$

Any nonnegative measurable function $f(x)$ such that

$$
\int_{-\infty}^{\infty} f(x)\d x = 1
$$

is called a ==density function==.
Obviously, a density function defines a [[Cumulative Distribution Function|Distribution Function]] that satisfies the [[Cumulative Distribution Function#Properties]], and there exists a [[Random Variable]] whose PDF is the given density function.

## Remarks

- The PDF of a continuous r.v. is not unique. But two PDFs are equal a.s.
- A continuous r.v. need not to be a continuous function.
  - A continuous r.v. has a continuous [[Cumulative Distribution Function|CDF]].
  - However, any plateau in the CDF implies a jump (discontinuity) in $X$.
    - $X(\omega) = \omega + \mathbb{1}\{ 1/2 < \omega \le 1 \}$ for $\omega \in [0,1]$. This is a non-continuous function with density $f(x) = \mathbb{1}\{ x\in [0, 1/2] \cup (3 /2, 2] \}$.
