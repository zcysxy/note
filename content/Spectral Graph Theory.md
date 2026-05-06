---
publish: true
title: Spectral Graph Theory
created: 2026-04-22T16:36:13
modified: 2026-05-06T04:58:33
published: 2026-05-06T04:58:34.014-04:00
tags:
  - pub-network
state: "[[%watch]]"
sup:
  - "[[Graph Theory]]"
aliases:
type: note
---

# Spectral Graph Theory

Throughout, let $A\in\R^{n\times n}$ be the adjacency matrix of a graph, and $D\in \R^{n\times n}$ be the diagonal (in)degree matrix.

## Adjacency

$$
A_{ij}=1 \iff \text{there is a link from $j$ to $i$}.
$$

### Properties

- For connected undirected graphs and irreducible directed graphs, the leading eigenvector of $A$ corresponding to the largest eigenvalue is the only eigenvector with elements all non-negative. Moreover, it has strictly positive elements.

## Markov

A [[Random Walk]] on a graph is a [[Markov Chain]] with kernel

$$
P = D^{-1} A
$$

### Properties

- The is a row-stochastic matrix, so $\lambda_{1}=1$ is an eigenvalue with the corresponding eigenvector $\mathbf{1}$.
- 1 is the largest eigenvalue, with its multiplicity equal to the number of CCs (undirected) or terminal SCCs (recurrent classes, directed).
- A simple proof of the [[Mixing Property]]: let $\mu_{0}=\pi + x_{0}$, where $x_{0} \perp \pi$. Then $\|\mu_{0} P^{t}-\pi\| = \|x_{0}P^{t}\|$; since $x_{0}$ lies in the subspace spanned by the eigenvectors corresponding to eigenvalues other than 1, $\|x_{0}P^{t}\| \le |\lambda_{2}|^{t}\|x_{0}\|$.
- The mixing rate is captured by the ==spectral gap== $1-|\lambda_{2}|$.
- For undirected graphs, $P$ corresponds to a ==reversible== Markov chain with steady-state distribution $\pi _{i}=d_{i} /d$.
  - $\pi ^T P = \pi$ and $\pi _{i}P_{ij}= A_{ij}/d = A_{ji} /d = \pi _{j}P_{ji}$.
  - Conversely, every reversible Markov chain can be represented as a random walk on an undirected graph with edge weights $A_{ij} = \pi _{i}P_{ij}$.
  - We further have $|P_{t}(ij)-\pi _{j}|\le\sqrt{\pi _{j} /\pi _{i}}|\lambda_{2}| ^{t}$.
- Note that for an undirected graph, $D^{1 /2}(D^{-1}A)D^{-1 /2} = D^{-1 /2}AD^{-1 /2}$ is symmetric, and thus $P$ has real eigenvalues. Then, we can sort the eigenvalues by their values (not absolute values) and the spectral gap becomes $1-\max\{|\lambda_{2}|,|\lambda _{n}|\}$

## Laplacian

For **undirected** graphs, we define the graph Laplacian as

$$
L = D - A.
$$

### Properties

- $L$ is positive semidefinite, and the multiplicity of the zero eigenvalue of $L$ equals the number of CCs in the graph, with the eigenvectors being indicators of the CCs.
- Let $s\in \{ -1,+1 \}^{n}$ specify a partition of the nodes into two sets. Then $s^{T} L s = 4|\delta(s)|$, where $\delta(s)$ is the cut set (edges that connect two sets) of the partition. ^spectral-partition
  - $\begin{aligned} s^TLs =& s^TDs - s^TAs \\ =& \sum_{i}d_{i}- \sum_{ij}s_{i}A_{ij}s_{j}\\ =& \sum_{i}d_{i}- \sum_{ij}|s_{i}|A_{ij}|s_{j}|+2\sum_{ij}\mathbb{1}\{s_{i}\neq s_{j}\}A_{ij}\\ =& 4\sum_{j>i}\mathbb{1}\{s_{i}\neq s_{j}\}A_{ij}\\ =& 4|\delta(s)|. \end{aligned}$
