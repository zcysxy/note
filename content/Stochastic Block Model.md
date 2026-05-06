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
- Model: Fixed $n$, undirected, a partition of nodes into disjoint $r$ communities $(N_{s})_{s=1}^{r}$, $\mathbb{1}\{ (i,j)\in E \} \sim \operatorname{Bernoulli}( p_{s_{i}s_{j}})$ with $i\in N_{s_{i}}$ and $j\in N_{s_{j}}$
  - We write $n_{s}$ and $c_{s}= n_{s}/n$ for the absolute and relative size of community $s$, respectively
  - We write $P = (p_{sl})_{sl}\in \R^{r\times r}$ for edge probabilities between communities
- Basic properties
  - Expected degree: $\mathbb{E}D_{i}\approx \sum_{s=1}^{r}c_{s}\left( \sum_{l=1}^{r}c_{l}p_{sl} \right)=\sum_{s,l}c_{s}c_{l}p_{sl}$
- Remarks:
  - Reduces to [[Erdos-Renyi Random Graph|ER]] model when there is only one community
  - Thus also known as ==multi-type ER model==

## Multi-Type Branching

Analyzing SBM requires generalizing the [[Configuration Model#Local Branching]] to multi-type.

![[6-7260-HW2#Problem 2|n-h]]

## Testing

Consider  a two-community SBM with $n_{1}=n_{2}=n/2$ and $p_{1} = a_{1}\frac{\ln n}{n}, p_2 = a_{2}\frac{\ln n}{n}$ for some constants $a_{1}, a_{2}$. We can recover the community structure with high probability if and only if $(\sqrt{ a }- \sqrt{ b })^{2} > 2$.

## Degree Correlated SBM

Within each community, standard SBM recovers [[Erdos-Renyi Random Graph|ER]] model. We can also equip [[Chung–Lu Model]] with community structure to allow for degree heterogeneity within communities. This is known as ==degree-correlated SBM==.
Specifically, for an expected degree sequence $(d_{i})$ and community weight $(w_{sl})\in\R^{r\times r}$, we have $\mathbb{1}\{ (i,j)\in E \} \sim \operatorname{Bernoulli}\left( \frac{d_{i}d_{j}}{\sum_{k}d_{k}}w_{s_{i}s_{j}} \right)$.
To ensure node $i$ has the expect degree of $d_{i}$, we have $r$ linear constraints for $(w_{sl})$:

$$
\sum_{i} w_{ls_{i}}c_{i} = 2\sum_{k}d_{k},\quad l=1,\ldots,r.
$$
