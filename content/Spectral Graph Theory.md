---
publish: true
title: Spectral Graph Theory
created: 2026-04-22T16:36:13
modified: 2026-04-22T17:05:36
published: 2026-05-06T03:37:37.450-04:00
tags:
  - pub-network
state: "[[%watch]]"
sup:
  - "[[Graph Theory]]"
aliases:
type: note
---

# Spectral Graph Theory

Throughout, let $A\in\R^{n\times n}$ be the adjacency matrix of a graph, and $D\in \R^{n\times n}$ be the diagonal degree matrix.

## Adjacency

$$
A_{ij}=1 \iff \text{there is a link from $j$ to $i$}.
$$

### Properties

- For connected undirected graphs and irreducible directed graphs, the leading eigenvector of $A$ corresponding to the largest eigenvalue is the only eigenvector with elements all non-negative. Moreover, it has strictly positive elements.

## Markov

A random walk on a graph is a Markov chain with kernel

$$
P = D^{-1} A
$$

### Properties

- If the graph contains multiple CC or SCC, eigenvalue $1$ has a multiplicity equal to the number of CC or SCC, and the corresponding eigenvectors are indicator vectors of CCs or SCCs.

## Laplacian

For **undirected** graphs, we define the graph Laplacian as

$$
L = D - A.
$$

### Properties

- $L$ is positive semidefinite, and the multiplicity of the zero eigenvalue of $L$ equals the number of CCs in the graph.
- Let $s\in \{ -1,+1 \}^{n}$ specify a partition of the nodes into two sets. Then $s^{T} L s = 4|\delta(s)|$, where $\delta(s)$ is the cut set (edges that connect two sets) of the partition. ^spectral-partition
  - $\begin{aligned} s^TLs =& s^TDs - s^TAs \\ =& \sum_{i}d_{i}- \sum_{ij}s_{i}A_{ij}s_{j}\\ =& \sum_{i}d_{i}- \sum_{ij}|s_{i}|A_{ij}|s_{j}|+2\sum_{ij}\mathbb{1}\{s_{i}\neq s_{j}\}A_{ij}\\ =& 4\sum_{j>i}\mathbb{1}\{s_{i}\neq s_{j}\}A_{ij}\\ =& 4|\delta(s)|. \end{aligned}$
