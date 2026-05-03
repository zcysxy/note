---
publish: true
title: Chung–Lu Model
created: 2026-04-04T18:55:11
modified: 2026-04-04T20:29:59
published: 2026-04-30T16:13:48.213-04:00
tags:
  - pub-network
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

- Model: Fixed $n$, undirected, expected degree sequence $(d_{i})_{i=1}^{n}$, $\mathbb{1}\{ (i,j)\in E \} \sim \operatorname{Bernoulli}\left(\frac{d_{i}d_{j}}{\sum_{k} d_{k}}\right)$[^1]
- [[Network Phenomena#Phase Transition|Phase transitions]]
  - Connectivity: $\sum_{k} \exp(-d_{k})=o(1)$ ^prop-conn
    - The above threshold ensures no isolated nodes, which is _conjectured_ to be the same threshold for connectivity
  - [[Network Phenomena#Giant Component|Giant component]]: $\langle d^2 \rangle / \langle d \rangle > 2$ ([[Configuration Model#^95d986]])
- Example: $d_{i} = \frac{\lambda n}{n-\lambda}$ gives [[Erdos-Renyi Random Graph|ER]]$\left( n, \frac{\lambda}{n}  \right)$
- Remarks:
  - Assumption: $\max_{i}d_{i}^{2} < \sum_{k}d_{k}$
    - Or just cap the probability to be $p_{ij}= 1 \wedge \frac{d_{i}d_j}{\sum_{k}d_{k}}$
    - When $\max_{i}d_{i}^{2} \ll \sum_{k}d_{k}$, the probability of self-loops is of higher-order
  - Typical regime of interest: sparse $m=\Theta(n)$
  - All edges are drawn independently
  - An alternative model is to set the probability of self-loops to $0$ and renormalize the probabilities of other edges, which leads to slightly off expected degrees but is asymptotically equivalent
  - The realized degree distribution can differ significantly from the expected degree sequence

[^1]: Some definitions model $\mathbb{1}\{ (i,i)\in E \} \sim \operatorname{Bernoulli}\left( \frac{d_{i}^{2}}{2\sum_{k}d_{k}} \right)$ if $(i,i)$ is counted twice in the process, or contributes two degrees to node $i$.

## Connectivity

Proof of [[#^prop-conn]]:
Let $\mathrm{vol}\coloneqq \sum_{k}d_{k}$. Suppose $\max_{i}d_{i}^{2} \ll \mathrm{vol}$. Then, the probability that node $i$ is isolated is

$$
\prod_{j\neq i}\left( 1 - \frac{d_{i}d_{j}}{\mathrm{vol}} \right) \approx \exp\left( -\frac{d_{i}}{\mathrm{vol}}\sum_{j\neq i}d_{j} \right) \approx \exp(-d_{i}).
$$

Thus, the probability of having no isolated nodes is

$$
\prod_{i=1}^{n}\left( 1 - \exp(-d_{i}) \right) \approx \exp\left( -\sum_{k} \exp(-d_{k}) \right).
$$
