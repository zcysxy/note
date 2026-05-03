---
publish: true
aliases:
  - Clustering
title: Transitivity
created: 2026-03-27T20:51:41
modified: 2026-03-30T21:46:20
published: 2026-04-30T16:13:47.870-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Network]]"
type: note
---

# Transitivity

Network transitivity, also known as clustering, means the presence of a heightened number of _triangles_ in the [[Network]]. A triangle consists of three nodes that are mutually connected.
We define the local/individual ==clustering coefficient== of a node in an undirected graph as

$$
C_{i} = \frac{\text{number of triangles connected to }i}{\text{number of triples centered on }i}
= \frac{|\{ (j,k)\in E : j,i\in \mathcal{N}_{i}\}|}{\deg(i)(\deg(i)-1)/2}.
$$

We use the convention that $C_i = 0$ if $\deg(i) < 2$.
Then, we can define the average clustering coefficient of the graph as $\overline{C} = \frac{1}{n}\sum_{i}C_{i}$.

A quite different measure of clustering is the global/overall clustering coefficient, also known as the fraction of transitive triples, is defined as

$$
C = \frac{\sum_{i,j,k} \mathbb{1}\{ (i,j),(j,k),(k,i) \in E\}}{\sum_{i,j,k} \mathbb{1}\{ (i,j),(j,k)\in E \}}.
$$

In the numerator, we count the number of triangles in the graph, each counted 6 times; in the denominator, we count the number of paths of length two (paths with different start and end nodes are different paths), or equivalently, the number of "wedges" (connected triplets, specified by a path of two without distinguishing the start and end nodes), each counted 2 times.
Therefore, we can rewrite the global clustering coefficient as

$$
C = \frac{3\times \text{number of triangles}}{\text{number of connected triplets}}
= \frac{6\times \text{number of triangles}}{\text{number of paths of length two}}.
$$

The overall clustering can be thought of a weighted averaging of clustering across nodes with weights proportional to $d_i\choose 2$, while average clustering weights all nodes equally.
Thus, the average clustering coefficient tends to overweight the contribution of low-degree nodes than the global clustering coefficient.
Consequently, if there is a negative correlation between clustering and degree, then the overall clustering will be lower than the average clustering, and vice versa.

For directed graphs, in both the local and global clustering coefficients, we count in the denominator directed paths: $(j,i),(i,k)\in E$, and in the numerator directed triangles: $(j,i),(i,k),(j,k)\in E$.
This is the true definition of transitivity.

## Clique

We can extend transitivity on three nodes to more nodes.
A ==clique== in a [[Graph]] is a maximally complete subgraph, that is, a subset of vertices such that every two distinct vertices are adjacent, and no additional vertex can be included without breaking this property.
We can measure the size and number of cliques similarly.
