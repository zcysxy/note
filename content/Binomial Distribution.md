---
publish: true
title: Binomial Distribution
created: 2022-12-05T17:36:46
modified: 2022-12-05T17:39:30
published: 2026-06-28T23:18:01.070Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Binomial Distribution

A discrete [[Random Variable]] is of binomial distribution if its range is $\mathbb{N}$ and

- Notation
  - $B(n,p)$ ^nota
- Parameters
  - $n \in \mathbb{N}, p\in[0,1]$ ^para
- [[Probability Mass Function|PMF]]
  - $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$ ^pdf
- [[Expectation|Mean]]
  - $np$ ^mean
- [[Variance]]
  - $npq$ ^var
- [[Moment Generating Function|MGF]]
  - $(q + pe^{t})^{n}$ ^mgf
