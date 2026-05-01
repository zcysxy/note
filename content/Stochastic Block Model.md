---
publish: true
aliases:
  - SBM
title: Stochastic Block Model
created: 2026-04-04T21:26:18
modified: 2026-04-22T22:28:45
published: 2026-04-30T16:13:48.000-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Random Graph Model]]"
  - "[[Network]]"
type: note
---

# Stochastic Block Model

- Motivation: Stochastic block models (SBMs) generalize [[Erdos-Renyi Random Graph|ER]] models to accommodate community structure, also known as _homophily_ or _[[Assortativity|assortative]] mixing_
  - ![[Assortativity#^22a619|compact]]
- Model: Fixed $n$, undirected, a partition of nodes into disjoint $r$ communities $(N\_{s})_{s=1}^{r}$, $\mathbb{1}{ (i,j)\in E } \sim \operatorname{Bernoulli}( p_{s\_{i}s\_{j}})$ with $i\in N\_{s\_{i}}$ and $j\in N\_{s\_{j}}$
  - We write $n\_{s}$ and $c\_{s}= n\_{s}/n$ for the absolute and relative size of community $s$, respectively
  - We write $P = (p\_{sl})\_{sl}\in \R^{r\times r}$ for edge probabilities between communities
- Basic properties
  - Expected degree: $\mathbb{E}D\_{i}\approx \sum\_{s=1}^{r}c\_{s}\left( \sum\_{l=1}^{r}c\_{l}p\_{sl} \right)=\sum\_{s,l}c\_{s}c\_{l}p\_{sl}$
- Remarks:
  - Reduces to [[Erdos-Renyi Random Graph|ER]] model when there is only one community
  - Thus also known as ==multi-type ER model==

## Multi-Type Branching

Analyzing SBM requires generalizing the [[Configuration Model#Local Branching]] to multi-type.

![[6-7260-HW2#Problem 2|n-h]]

## Testing

Consider  a two-community SBM with $n\_{1}=n\_{2}=n/2$ and $p\_{1} = a\_{1}\frac{\ln n}{n}, p\_2 = a\_{2}\frac{\ln n}{n}$ for some constants $a\_{1}, a\_{2}$. We can recover the community structure with high probability if and only if $(\sqrt{ a }- \sqrt{ b })^{2} > 2$.

## Degree Correlated SBM

Within each community, standard SBM recovers [[Erdos-Renyi Random Graph|ER]] model. We can also equip [[Chung–Lu Model]] with community structure to allow for degree heterogeneity within communities. This is known as ==degree-correlated SBM==.
Specifically, for an expected degree sequence $(d\_{i})$ and community weight $(w\_{sl})\in\R^{r\times r}$, we have $\mathbb{1}{ (i,j)\in E } \sim \operatorname{Bernoulli}\left( \frac{d\_{i}d\_{j}}{\sum\_{k}d\_{k}}w\_{s\_{i}s\_{j}} \right)$.
To ensure node $i$ has the expect degree of $d\_{i}$, we have $r$ linear constraints for $(w\_{sl})$:
$$
\sum\_{i} w\_{ls\_{i}}c\_{i} = 2\sum\_{k}d\_{k},\quad l=1,\ldots,r.
$$
