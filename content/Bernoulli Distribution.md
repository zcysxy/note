---
publish: true
aliases:
  - Bernoulli Trial
title: Bernoulli Distribution
created: 2022-11-02T14:17:22
modified: 2025-05-15T17:49:50
published: 2026-06-28T06:40:45.921Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Bernoulli Distribution

A [[Random Variable]] is of Bernoulli distribution if its range is $\{ 0,1 \}$.

- Parameters
  - $p\in[0,1]$ ^para
- [[Probability Mass Function|PMF]]
  - $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$ ^pdf
- [[Cumulative Distribution Function|CDF]]
  - $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$ ^cdf
- [[Expectation|Mean]]
  - $p$ ^mean
- [[Variance]]
  - $pq$ ^var
- [[Moment Generating Function|MGF]]
  - $q + pe^{t}$ ^mgf

## Properties

The sum of $n$ iid Bernoulli random variables follows a [[Binomial Distribution]].
