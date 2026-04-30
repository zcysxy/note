---
publish: true
title: Chung–Lu Model
created: 2026-04-04T18:55:11
modified: 2026-04-04T20:29:59
published: 2026-04-30T15:36:47.694-04:00
tags:
  - "#pub-network"
state: done
sup:
  - "[[Random Graph Model]]"
  - "[[Network]]"
aliases:
type: note
related:
  - "[[Configuration Model]]"
---

# Chung–Lu Model

The Chung-Lu model generates a graph with potential self-loops given a expected degree sequence as the [[Configuration Model#^deg-spec|degree specification]].

- Model: Fixed $n$, undirected, expected degree sequence $(d\_{i})_{i=1}^{n}$, $\mathbb{1}{ (i,j)\in E } \sim \operatorname{Bernoulli}\left(\frac{d_{i}d\_{j}}{\sum\_{k} d\_{k}}\right)$[^1]
- [[Network Phenomena#Phase Transition|Phase transitions]]
  - Connectivity: $\sum\_{k} \exp(-d\_{k})=o(1)$ ^prop-conn
    - The above threshold ensures no isolated nodes, which is _conjectured_ to be the same threshold for connectivity
  - [[Network Phenomena#Giant Component|Giant component]]: $\langle d^2 \rangle / \langle d \rangle > 2$ ([[Configuration Model#^95d986]])
- Example: $d\_{i} = \frac{\lambda n}{n-\lambda}$ gives [[Erdos-Renyi Random Graph|ER]]$\left( n, \frac{\lambda}{n}  \right)$
- Remarks:
  - Assumption: $\max\_{i}d\_{i}^{2} < \sum\_{k}d\_{k}$
    - Or just cap the probability to be $p\_{ij}= 1 \wedge \frac{d\_{i}d\_j}{\sum\_{k}d\_{k}}$
    - When $\max\_{i}d\_{i}^{2} \ll \sum\_{k}d\_{k}$, the probability of self-loops is of higher-order
  - Typical regime of interest: sparse $m=\Theta(n)$
  - All edges are drawn independently
  - An alternative model is to set the probability of self-loops to $0$ and renormalize the probabilities of other edges, which leads to slightly off expected degrees but is asymptotically equivalent
  - The realized degree distribution can differ significantly from the expected degree sequence

[^1]: Some definitions model $\mathbb{1}{ (i,i)\in E } \sim \operatorname{Bernoulli}\left( \frac{d\_{i}^{2}}{2\sum\_{k}d\_{k}} \right)$ if $(i,i)$ is counted twice in the process, or contributes two degrees to node $i$.

## Connectivity

Proof of [[#^prop-conn]]:
Let $\mathrm{vol}\coloneqq \sum\_{k}d\_{k}$. Suppose $\max\_{i}d\_{i}^{2} \ll \mathrm{vol}$. Then, the probability that node $i$ is isolated is
$$
\prod\_{j\neq i}\left( 1 - \frac{d\_{i}d\_{j}}{\mathrm{vol}} \right) \approx \exp\left( -\frac{d\_{i}}{\mathrm{vol}}\sum\_{j\neq i}d\_{j} \right) \approx \exp(-d\_{i}).
$$
Thus, the probability of having no isolated nodes is
$$
\prod\_{i=1}^{n}\left( 1 - \exp(-d\_{i}) \right) \approx \exp\left( -\sum\_{k} \exp(-d\_{k}) \right).
$$
