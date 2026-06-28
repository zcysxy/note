---
publish: true
title: Uniform Distribution
created: 2022-09-25T14:45:12
modified: 2025-05-18T16:02:42
published: 2026-06-28T06:42:32.277Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Uniform Distribution

The uniform distribution over $[a,b]$ has

- Notation
  - $\mathcal{U}(a,b)$ ^nota
- Parameters
  - $a,b\in\R$ ^para
- [[Cumulative Distribution Function|CDF]]
  - $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ ^cdf
- [[Probability Density Function|PDF]]
  - $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$ ^pdf
- [[Expectation|Mean]]
  - $\frac{a+b}{2}$ ^mean
- [[Variance]]
  - $\frac{(b-a)^{2}}{12}$ ^var
- [[Moment Generating Function|MGF]]
  - $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$ ^mgf
