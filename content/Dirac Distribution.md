---
publish: true
aliases:
  - Degenerate Distribution
created: 2024-02-02T04:44:24
modified: 2024-11-07T19:28:35
published: 2026-06-28T06:49:40.824Z
tags:
  - pub-prob
sup:
  - "[[Random Variable]]"
related:
state: done
dg-publish:
source:
type: note
---

# Dirac Distribution

A Dirac (or degenerate) distribution on a [[Probability Space]] with support only on a lower-dimensional manifold, which could be a point.
Usually, we consider $\Omega\subset\mathbb{R}$ and the support is a point.

- Notation
  - $\delta_{x_0}$ ^nota
- Parameter
  - $x_0\in\mathbb{R}$ ^para
- [[Probability Mass Function|PMF]]
  - $p(x)=\delta(x-x_0)$ ^pdf
    - $\delta$ is the Dirac delta function, which is 0-valued everywhere except 0, yet integrates to 1.
    - By defining $p(x)$ to be $\delta$ shifted by $-x_0$ we obtain an infinitely narrow and infinitely high peak of probability mass where $x=x_0$.
- [[Cumulative Distribution Function|CDF]]
  - $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$ ^cdf
- [[Expectation|Mean]]
  - $x_0$ ^mean
- [[Variance]]
  - $0$ ^var
- [[Moment Generating Function|MGF]]
  - $e^{x_0t}$ ^mgf
