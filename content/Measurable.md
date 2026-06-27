---
publish: true
title: Measurable
created: 2024-10-02T16:31:39
modified: 2024-11-02T22:49:43
published: 2026-06-27T22:45:22.133Z
tags:
  - pub-prob
state: done
sup:
  - "[[Measure Theory]]"
aliases:
type: note
---

# Measurable

Let $(\Omega_{1},\mathcal{F}_1)$ and $(\Omega_{2},\mathcal{F}_{2})$ be two [[Sigma Field|measurable spaces]].
A function $f: \Omega_{1}\to\Omega_{2}$ is $(\mathcal{F}_{1},\mathcal{F}_{2})$-==measurable== if the preimage of any measurable set ($B\in \mathcal{F}_{2}$) is measurable $f^{-1}(B)\in \mathcal{F}_{1}$.

- A [[Random Variable]] is a $(\mathcal{F},\mathcal{B})$-measurable function where $\mathcal{F}$ is the [[Sigma Field]] on the [[Probability Space]] and $\mathcal{B}$ is the [[Borel Sigma Field]] on the real line.
- A continuous function $f:\R\to\R$ is Borel-measurable.
- The composition of measurable functions is measurable.
  - Specifically, given a continuous function $f$ and [[Random Variable]] $X$, $f(X)$ is a [[Random Variable]].
  - Further, given a continuous multivariate function $f:\R^{n}\to\R$ and [[Random Variable]]s $X_{1},\ldots,X_{n}$, $f(X_{1},\ldots,X_{n})$ is a [[Random Variable]].
    - In particular, the sum and product of [[Random Variable]]s are [[Random Variable]]s.

^rv
