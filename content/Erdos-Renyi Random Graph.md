---
publish: true
aliases:
  - ER
  - Poisson random graph
title: Erdős–Rényi Random Graph
created: 2026-03-31T19:11:22
modified: 2026-05-04T22:47:40
published: 2026-05-04T22:47:55.834-04:00
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
- [[Network Phenomena#Small-World Effect|Diameter]]: $\Theta(\ln n / \ln \lambda)$
  - see [[Configuration Model#Diameter]]
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
P(|C_{1}| = \Theta((1-\eta(\lambda))n)) \to 1, \quad  P(|C_{2}| = O(\ln n)) \to 1,\quad\text{and}\quad \mathbb{E}|C(i)| \to \frac{1}{1-\eta(\lambda)\lambda}.
$$

That is, a giant component emerges with size $\Theta(n)$, the size of the second largest component is $\Theta(\ln n)$, and the typical size of a small component is $\frac{1}{1-\eta(\lambda)\lambda}$.

## Proofs

### Supercritical regime, giant component

Let $u$ be the probability that a random node $i$ does not belong to the giant component.
Then $(1-u)n$ is the expected size of the giant component.
We have the recursion

$$
u = (1-p + pu)^{n-1},
$$

where for any other node $j$, w.p. $1-p$, $i$ is not connected to $j$, and if they are connected, w.p. approximately $u$, $j$ does not belong to the giant component.
Plugging $p = \lambda /n$ gives

$$
u = \left( 1+\frac{\lambda(u-1)}{n} \right)^{n-1}\to \exp(\lambda (u-1)) = g(u),
$$

where $g$ is the PGF of $\operatorname{Poisson}(\lambda)$.

![Regimes|300](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20260331191129.png)

### Supercritical regime, uniqueness of the giant component

Before proving the second largest component in the supercritical regime is _small_, we can easily show that there cannot be two giant components.
For any $v_{1},v_{2}\in(0,1]$, suppose there are two giant components of sizes at least $v_{1}n$ and $v_{2}n$. The probability that they are not connected is at most $(1-p)^{v_{1}n\cdot v_{2}n} \to \exp(-\lambda v_{1}v_{2}n)$. Then, one can calculate the upper bound of the probability that there are two giant components using a similar equation in $(1)$.

Another easier approach is called _sprinkling_. Consider the ER model is generated in two steps: first generate links i.i.d. with probability $p$, and then _sprinkle_ additional links with probability $n^{-\epsilon} p$ for some small $\epsilon \in (0,1)$.
Then, this model is equivalent to $G(n,(1+n^{-\epsilon})p)\to G(n,p)$.

Now suppose in the first step there are two giant components with sizes at least $v_{1}n$ and $v_{2}n$. Then, the probability that they are not connected in the second step is at most $(1-n^{-\epsilon}p)^{v_{1}n\cdot v_{2}n} \to \exp(-\lambda v_{1}v_{2}n^{1-\epsilon})\to 0$. Thus, w.p.1, $G(n,p)$ has only one giant component.

### Supercritical regime, the second largest component

### All regimes, typical size of a small component

We have proved in all regimes, there is at most one giant component with size $\Theta((1-\eta(\lambda))n)$, with $\eta(\lambda)=1$ when $\lambda < 1$.
For a random node $i$ not in the giant component, let $C(i)$ be the small component containing $i$.
We have also proved that $|C(i)| = O(\ln n)$ almost surely and $C(i)$ is a [[Configuration Model#Local Branching|tree almost surely]].
Thus, removing $i$ breaks $C(i)$ into $D_{i}$ subtrees, denoted by $\{ C'(j_{k}) \}_{k=1}^{D_{i}}$.
We have

$$
|C(i)| = 1 + \sum_{k=1}^{D_{i}} |C'(j_{k})|,
$$

which gives

$$
\mathbb{E}|C(i)| = 1 + \mathbb{E}[D_{i}\mathbb{E} [C'(j_{1})\given D_{i}]],
$$

where we use the symmetry of the subtrees.
In analogy to the [[Branching]] process, we have $\mathbb{E} [C'(j_{1})\given D_{i}] = \mathbb{E}|C(i)|$.
Additionally, note that $D_{i}$ links can only connect to nodes not in the giant component. Thus, $\mathbb{E}D_{i} = \eta n p$. Together, we have

$$
\mathbb{E}|C(i)| \to \frac{1}{1 - \eta(\lambda)\lambda}.
$$

See [[Configuration Model#Local Branching]] for a more formal treatment.

> [!rmk] Average size of small components
>
> The above quantity is the expected size of a small component to which a random node belongs. It is not equivalent to the expected size of a randomly chosen small component. Since nodes in _larger_ small components are more likely to be chosen, the above is larger than the average size of a randomly chosen small component.
