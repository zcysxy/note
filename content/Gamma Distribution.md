---
publish: true
title: Gamma Distribution
created: 2022-12-05T17:49:24
modified: 2022-12-05T18:00:11
published: 2026-06-28T04:06:20.974Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Gamma Distribution

A continuous [[Random Variable]] is of gamma distribution if

- Parameters
  - $\alpha, \lambda >0$ ^para
- [[Probability Density Function|PDF]]
  - $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$ ^pdf
  - where $\Gamma$ is the [[Gamma Function]]
    - $\Gamma(\alpha) = \int _{0}^{\infty} e^{-y}y^{\alpha-1} \, dy$
    - $\Gamma(1) = 1$
    - $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
    - $\Gamma(n) = (n-1)!$
- [[Expectation|Mean]]
  - $\alpha /\lambda$ ^mean
- [[Variance]]
  - $\alpha /\lambda^{2}$ ^var
- [[Moment Generating Function|MGF]]
  - $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$ ^mgf
