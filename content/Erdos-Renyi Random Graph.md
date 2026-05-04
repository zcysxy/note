---
publish: true
aliases:
  - ER
  - Poisson random graph
title: Erdős–Rényi Random Graph
created: 2026-03-31T19:11:22
modified: 2026-05-03T23:21:01
published: 2026-05-03T23:21:02.772-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Random Graph Model]]"
  - "[[Network]]"
type: note
---

# Erdős–Rényi Random Graph

- Notation: $G(n,p)$ or $\operatorname{ER}(n,p)$
- Model: Fixed $n$, undirected, $\mathbb{1}\{ (i,j)\in E \} \sim \operatorname{Bernoulli}(p)$
- Basic properties
  - $D_{i} \sim \operatorname{Binom}(n-1,p)\approx \operatorname{Poisson}(np)$
    - Also known as ==Poisson random graph model==
  - $|E| \sim \operatorname{Binom}\left(\binom{n}{2}, p\right)$
  - Local [[Transitivity|Clustering]]: $\mathbb{E}C_{i} = p$
- [[Network Phenomena#Phase Transition|Phase transitions]]
  - Edge existence: $t(n) = \frac{1}{n^2}$
  - Connectivity: $t(n) = \frac{\log n}{n}$
  - [[Network Phenomena#Giant Component|Giant component]]: $t(n) = \frac{1}{n}$
- [[Network Phenomena#Small-World Effect|Diameter]]
- [[#Sparse ER]]: $p_{n} = \lambda / n$
  - $D_{i} \approx \operatorname{Poisson}(\lambda)$
  - Number of $k$-cycles: $\Theta(1)$
  - Number of $k$-trees: $\Theta(n)$

## Special Components

Analyzing the ER model requires us to calculate the probability of the existence of components of various shapes, or the expected number of them if they exist.

**Singleton.** Let $I^{(1)}_{i}$ be the indicator r.v. that $i$ is isolated and $I^{(1)}=\sum_{i}I^{(1)}_{i}$. We have $\mathbb{E}[I^{(1)}] = n (1-p)^{n-1}$. The variance is calculated in the next section.

**$k$-cycle.** Randomly choose $k$ nodes, fix a starting node, and randomly arrange the rest $k-1$; they form a cycle if and only if they are only connected to the nodes before and after them.
Thus, the expected number of $k$-cycles is

$$
\mathbb{E}[I^{(k,\text{cycle})}] = {n\choose k} \cdot (k-1)! \cdot \frac{1}{2} \cdot p^{k} \cdot (1-p)^{k (n-k)} \cdot (1-p)^ {k(k-3) /2}.
$$

Note that we have two $1 /2$ factors: the first one is because  a clockwise and a counter-clockwise arrangement of the same nodes correspond to the same cycle, and the second one is because the links between the $k$ nodes are double-counted by both ends.
See [[6-7260-HW1#Problem 5]] for the calculation of the variance of $I^{(3,\text{cycle})}$.

**$k$-tree.** Randomly choose $k$ nodes and label them. Each possible tree formed by them has a unique _Prüfer sequence_[^1] of length $k-2$. Thus, the number of possible trees is given by the _Cayley’s formula_ $k^{k-2}$, and the expected number of $k$-trees is

$$\tag{1}
\mathbb{E}[I^{(k,\text{tree})}] = {n\choose k} \cdot k^{k-2} \cdot p^{k-1} \cdot (1-p)^{k(n-k)} \cdot (1-p)^{{k \choose 2} - (k-1)}.
$$

[^1]: Starts with an empty sequence, remove the leaf node with the smallest label and append the label to the sequence, and repeat until only two nodes are left. The Prüfer sequence of a $k$-tree has a length $k-2$ and is a bijection.

## Connectivity

Let $p_n = \lambda \ln n /n$. We show that the network is connected w.p.1 if $\lambda > 1$ and is disconnected w.p.1 if $\lambda < 1$, as $n \to \infty$.

When $\lambda <1$, we inspect the probability of the existence of an isolated node. Then $\mathbb{E}[I^{(1)}] \to n^{1-\lambda} \to \infty$.
The second moment of $I^{(1)}$ is

$$
\mathbb{E}[(I^{(1)})^{2}] = \mathbb{E}[I^{(1)}] + (n^{2}-n)\mathbb{E}[I^{(1)}_{i}I^{(1)}_{j}]
\to n^{1-\lambda} + (n^{2}-n)n^{-2\lambda}.
$$

Thus $\Var(I^{(1)})\to n^{1-\lambda}$. By the second [[Moment Method]], we have $P(I^{(1)}\ge 1)\to 1$, and thus the network is disconnected w.p.1.

When $\lambda > 1$, showing $P(I^{(1)}\ge 1)\to 0$ is not enough. We have to show that for any $k\ge 1$, the probability of the existence of a connected component of size $k$ goes to zero.
Note that $k$ nodes form a standalone connected component only if they contain a spanning tree. Thus, similar to $(1)$, we have

$$
\mathbb{E}[I^{(k)}] \le {n\choose k} k^{k-2} p^{k-1} (1-p)^{k(n-k)} \lesssim  n^{1-\lambda k} k^{k-2}\lambda ^{k-1} \to 0, \quad\forall k\ge 1.
$$

By the union bound and [[Chebyshev Inequality|Markov Inequality]] (or first [[Moment Method]]), we have

$$
\begin{aligned}
P(\text{disconnected}) \le& \sum_{k=1}^{n/2} P(I^{(k)}\ge 1) \\
\le& \sum_{k=1}^{n/2} \mathbb{E}[I^{(k)}] \\
\le& \sum_{k=1}^{n /2} n^{1-\lambda k} n^{k-2} \lambda ^{k-1} \\
=& n^{-1} \sum_{k=1}^{n /2} n^{-(\lambda-1) k} \lambda ^{k-1} \\
\le & n^{-1} n^{-(\lambda-1)} \frac{1}{1 - n^{-(\lambda-1)}\lambda} \\
\to & 0.
\end{aligned}
$$

A finer result captures the regime $p_n = \frac{\ln n + \alpha}{n}$:

$$
P(\text{connected}) \to e^{-e^{-\alpha}}.
$$

## Sparse ER

We call the ER model in the regime of $p_{n} = \lambda / n$ the ==sparse ER== model ([[Graph#^dense-sparse]]).
Note that the degree distribution approximates a [[Poisson Distribution]] with mean $\lambda$. Thus, this regime is also known as the ==Poisson random graph model==.

**Subcritical regime $\lambda < 1$.** Let $C(i)$ be the connected component containing $i$. Then,

$$
\mathbb{E}|C(i)| \to \frac{1}{1-\lambda}\quad \text{and}\quad P(\max_{i}|C(i)| = \Theta(\ln n)) \to 1.
$$

That is, the typical size of a component is $\frac{1}{1-\lambda}$, and the size of the largest component is $\Theta(\ln n)$.

**Supercritical regime $\lambda >1$.**
Let $C_{1}$ be the largest component and $C_{2}$ be the second largest component. Let $\eta(\lambda)$ be the extinction probability of a [[Branching]] process with offspring distribution $\operatorname{Poisson}(\lambda)$. Then,

$$
P(|C_{1}| = \Theta((1-\eta(\lambda))n)) \to 1 \quad \text{and}\quad P(|C_{2}| = O(\ln n)) \to 1.
$$

That is, a giant component emerges with size $\Theta(n)$, and the size of the second largest component is $\Theta(\ln n)$.

![image.png|300](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20260331191129.png)
