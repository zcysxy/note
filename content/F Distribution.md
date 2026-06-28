---
publish: true
title: F Distribution
created: 2022-12-05T18:42:08
modified: 2026-06-27T23:50:02
published: 2026-06-28T06:50:03.234Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# F Distribution

![pdf](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/F-distribution_pdf.svg/650px-F-distribution_pdf.svg.png)

The random variable defined by

$$
F_{n,m} = \frac{\chi _{n}^{2}/n}{\chi _{m}^{2}/m}
$$

is said to have an **F-distribution** with $n,m$ degrees of freedom.

- Parameters
  - $n,m \in \mathbb{N}$ ^para
- [[Expectation|Mean]]
  - $m/(m-2)$ ^mean
- [[Variance]]
  - $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$ ^var
- [[Moment Generating Function|MGF]]
  - _Undefined_ ^mgf
