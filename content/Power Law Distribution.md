---
publish: true
title: Power Law Distribution
created: 2024-11-03T00:25:26
modified: 2026-03-30T17:40:58
published: 2026-06-28T06:49:22.460Z
tags:
  - pub-prob
state: done
sup:
  - "[[Random Variable]]"
aliases:
type: note
---

# Power Law Distribution

The power law distribution is also known as the ==Pareto distribution== and ==scale-free distribution==.
A [[Random Variable]] is of power law distribution if its range is $\mathbb{N}$ (discrete) or $[c,\infty)$ (continuous) and

- Parameters
  - Discrete: $\alpha\in\R_{++}$ ^para
  - Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ ^para-cont
- [[Cumulative Distribution Function|CDF]]
  - Discrete: $P(X\ge k) = 1 /k^{\alpha}$
    - $F(k)=1-1 /(k+1)^{\alpha }$ ^cdf
  - Continuous: $P(X > x) = \beta /x^{\alpha}$ for $x\ge c>0$
    - $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$ ^cdf-cont
- [[Probability Mass Function|PMF]]
  - $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$ ^pdf
- [[Probability Density Function|PDF]]
  - $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$ ^pdf-cont
- [[Expectation|Mean]]
  - Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$ ^mean
  - Continuous: $\frac{\alpha}{\alpha-1}$ ^mean-cont
- [[Variance]]
  - Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$ ^var
  - Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$ ^var-cont
- [[Moment Generating Function|MGF]]
  - Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$ ^mgf

Note that when $α$ is small, the "tail" $P(X ≥ k)$ of the distribution decays slowly (slower than an exponential) as $k$ increases, and in some sense such a distribution has "heavy tails".
