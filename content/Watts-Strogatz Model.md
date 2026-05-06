---
publish: true
aliases:
  - Small World Model
title: Watts-Strogatz Model
created: 2026-04-05T01:12:52
modified: 2026-05-05T22:24:05
published: 2026-05-05T22:38:17.000-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Network]]"
  - "[[Random Graph Model]]"
type: note
---

# Watts-Strogatz Model

- Motivation: how to explain the [[Network Phenomena#Small-World Effect]] in addition to high clustering?
- Model: Fixed $n$, mean degree $k$, such that $n\gg k \gg \ln n$;
  1. Create a ring graph
  2. Connect each node to its $k/2$ nearest neighbors on each side
  3. For each edge, rewire it with probability $\beta$ to a uniformly chosen node that does not lead to a self-loop or duplicate edge
     - The number of rewired edges follows $\operatorname{Binom}(nk,\beta)$
     - We can also randomly choose another edge, and swap one of its endpoints with the current edge
- [[Network Phenomena#Small-World Effect|Expected distance between two random nodes]]: $\Theta(\ln n)$
- [[Transitivity|Expected clustering coefficient]]: $\mathbb{E}C_{i} = \frac{3(k-1)}{2(2k-1)}(1-\beta)^{3}$
  - The number of neighbors is unchanged, and each original triangle is preserved with probability $(1-\beta)^{3}$
- Remarks
  - $\beta=0$ reduces to a ring graph, which has high clustering but large diameter $\Theta(n)$
  - $\beta=1$ reduces to [[Erdos-Renyi Random Graph|ER]] model, which has small diameter but low clustering $O(k/n)$
  - An [[6-7260-HW3#Problem 1|alternate model]] is to add $\beta nk$ random edges to the ring graph and no original edge is removed, which is easier to analyze but no longer reduces to ER when $\beta=1$

## Small World

We focus on the [[6-7260-HW3#Problem 1|Newman-Watts model]] where we add $\beta nk$ random edges to the ring graph and no original edge is removed.
The subgraph containing all nodes and the added shortcuts is a [[Erdos-Renyi Random Graph|ER]] network with parameters $n$ and $p = \frac{2\beta k}{n-1}$.

**Case I $2\beta k > 1$.** Then, a giant component emerges in the ER subgraph, where the expected distance between two random nodes is $\Theta(\ln n)$. Any node is connected to the giant component with probability $1-c(\beta,k) > 0$.
Then, walking along the ring graph in both directions, the probability of not encountering a node connected to the giant component within $t$ steps is $c(\beta,k)^{2t}$. Thus, the typical distance between any two nodes is

$$
\underbrace{ \Theta(\ln n) }_{ \text{on ER} } + \underbrace{ O\left( \delta n + \frac{\ln \delta^{-1}}{\ln c(\beta,k)^{-1}} \right) }_{ \text{on ring} }.
$$

Letting $\delta = n^{-1}$ gives the desired result.

**Case II $2\beta k\le 1$.** We apply the "renormalization" trick by partitioning the ring graph into $m$-node segments and treating each segment as a super-node. Then, any two super-nodes are connected with probability $1-(1-\frac{2\beta k}{n-1})^{m^{2}} \approx \frac{2\beta k m^{2}}{n}$, which is greater than $\frac{1}{n / m}$ for sufficiently large $m \ge (2\beta k)^{-1}$. Thus, a giant component emerges in the super-node graph, and the expected distance between two random nodes is

$$
\Theta ( \underbrace{ m }_{ \text{within each segment} }\cdot\underbrace{ \ln n m^{-1} }_{ \text{between super-nodes} } ) = \Theta(\ln n).
$$

### A Continuum Model

We can also prove the result using a continuum (mean field) model.
Consider a continuum of nodes on the unit circle, with $n\beta k$ shortcuts added uniformly at random. Let $L$ be the expected distance between two random nodes in the continuum model.
Because we normalize the original circumstance $n/k$ to 1, the expected distance between two random nodes on the original network is $Ln /k$.

Let $u=n\beta k$. Evenly partition the unit circle into $u$ segments. Since $u$ shortcuts are added, two segments are connected by a shortcut with probability

$$
\frac{u}{{u \choose 2}} \approx  \frac{2}{u}.
$$

Thus, the network between segments is a [[Erdos-Renyi Random Graph|ER]] model with edge probability $2 /u$, which has a giant component. We know that the expected distance between two random notes in a giant component of an ER model is $\Theta (\ln u)$.
For a segment not in the giant component, similar to Case I above, it takes a constant number of steps to reach a segment in the giant component. Thus,

$$
L = \Theta\left( \frac{1}{u} \cdot (\ln u + c) \right).
$$

And the expected diameter of the original network is

$$
\Theta\left( \frac{n}{k} \cdot  \frac{\ln u}{u} \right) = \Theta(\ln n).
$$
