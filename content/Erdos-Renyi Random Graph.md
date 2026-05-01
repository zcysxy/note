---
publish: true
aliases:
  - ER
title: Erdős–Rényi Random Graph
created: 2026-03-31T19:11:22
modified: 2026-04-04T19:00:22
published: 2026-04-30T16:13:47.000-04:00
tags:
  - pub-network
state: "[[%wip]]"
sup:
  - "[[Random Graph Model]]"
  - "[[Network]]"
type: note
---

# Erdős–Rényi Random Graph

- Notation: $G(n,p)$ or $\operatorname{ER}(n,p)$
- Model: Fixed $n$, undirected, $\mathbb{1}{ (i,j)\in E } \sim \operatorname{Bernoulli}(p)$
- Basic properties
  - $D\_{i} \sim \operatorname{Binom}(n-1,p)\approx \operatorname{Poisson}(np)$
    - Also known as ==Poisson random graph model==
  - $|E| \sim \operatorname{Binom}\left(\binom{n}{2}, p\right)$
  - Local [[Transitivity|Clustering]]: $\mathbb{E}C\_{i} = p\_{n}$
- [[Network Phenomena#Phase Transition|Phase transitions]]
  - Connectivity: $t(n) = \frac{\log n}{n}$
  - [[Network Phenomena#Giant Component|Giant component]]: $t(n) = \frac{1}{n}$
- [[Network Phenomena#Small-World Effect|Diameter]]

![image.png|300](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20260331191129.png)

## Sparse ER

We call the ER model in the regime of $p\_{n} = \lambda / n$ the ==sparse ER== model.

- Basic properties
