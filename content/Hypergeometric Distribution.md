---
publish: true
title: Hypergeometric Distribution
created: 2022-12-05T19:31:38
modified: 2022-12-05T19:59:28
published: 2026-06-28T06:42:17.426Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Hypergeometric Distribution

Consider a pool of $N$ machines which contains $M$ defect machines. Now $n$ machines are randomly selected, let $X$ be the number of defect machines selected. Then $X$ is said to have a **hypergeometric distribution**.

- Parameters
  - $N\in \mathbb{N}, M,n\in [N]$ ^para
- [[Probability Mass Function|PMF]]
  - $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$ ^pdf
- [[Expectation|Mean]]
  - $\frac{nM}{N}$ ^mean
- [[Variance]]
  - $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$ ^var
