---
publish: true
title: Dirichelet Distribution
created: 2023-04-13T17:41:58
modified: 2026-06-27T21:29:03
published: 2026-06-28T05:21:15.608Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Dirichlet Distribution

A Dirichlet distribution is a continuous distribution on **discrete probability vectors**. It is the multivariate generalization of [[Beta Distribution]].

- Parameter
  - $\alpha \in \R_{++}^{V}$ ^para
- [[Probability Density Function|PDF]]
  - $p\left(x \mid \alpha\right)=\frac{\alpha\left(\sum_v \alpha_v\right)}{\prod_{v=1}^V \alpha\left(\alpha_v\right)} \prod_{v=1}^V x_{v}^{\alpha_v-1}$ ^pdf
- [[Expectation|Mean]]
  - $\left( \alpha _{i}/ \sum _{v} \alpha _{v} \right)$ ^mean
- [[Variance]]
  - $\Cov(x_{i},x_{j}) = \frac{\delta _{ij}\tilde{\alpha}_{i}- \tilde{\alpha}_{i}\tilde{\alpha}_{j}}{\sum_{v}\alpha _{v}+1}$, where $\tilde{\alpha}_{i} = \alpha _{i} /\left( \sum_{v}\alpha _{v} \right)$ ^var

With a larger $\alpha$, $x$ will be uniform.
