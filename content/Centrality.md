---
publish: true
title: Centrality
created: 2026-03-27T22:26:33
modified: 2026-04-21T21:30:17
published: 2026-04-30T16:13:47.000-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Network]]"
aliases:
type: note
---

# Network Centrality

Throughout $A$ is the adjacency matrix where $A\_{ij}=1$ if $j$ links to $i$, and $C(i)$ is $i$-th element of vector $C$.

## Degree

Count the number of neighbors of a node as the degree centrality.

$$
C\_{D} = A\mathbf{1}.
$$

- Degree centrality does not capture the importance of indirect connections. Not all neighbors are equal.

## Eigenvector

When the score is proportional to the sum of neighboring scores, we get
$$
C\_{E} = c A C\_{E}.
$$
Since $A$ has non-negative elements, by the Perron-Frobenius theorem, only the leading eigenvector (of each component) has all elements non-negative and survives the power iteration. Thus, we let $c=\lambda _{1}$ be the largest eigenvalue of $A$ and the eigenvector centrality
$$
C_{E} = v\_{1}
$$
is the eigenvector corresponding to $\lambda \_{1}$.

- Eigenvector centrality is vacuous for acyclic directed graphs, as the source nodes have zero score, and hence all nodes have zero score as well. ^7c61e2

## Katz-Bonacich

Extending the eigenvector centrality, the Katz-Bonacich centrality assigns each node an additional constant score. Normalizing this constant score to one gives
$$
C\_{K} = \alpha AC\_{K} + \mathbf{1},
$$
where $\alpha$ is a discount factor that captures the relative importance of direct and indirect connections.
The closed-form solution is
$$
C\_{K} = (I - \alpha A)^{-1} \mathbf{1}.
$$
As $\alpha \to \lambda\_{1}^{-1}$, $C\_{K}$ aligns with the eigenvector centrality $C\_{E}=v\_{1}$.
As $\alpha \to 0$, $C\_{K}-\mathbf{1}$ aligns with the degree centrality $C\_{D} = A\mathbf{1}$.

By the Neumann series expansion, the Katz-Bonacich centrality of a node counts the number of distinct walks starting from it, discounted by their length:
$$
C\_{K}(i) = \sum\_{k=1}^{\infty}\sum\_{j} \alpha^k (A^k)_{ij} = \sum_{k=1}^{\infty} \alpha^k \sum\_{j\_{1},\dots,j\_{k}} A\_{ij\_{1}} A\_{j\_{1}j\_{2}} \cdots A\_{j\_{k-1}j\_{k}}
\= \sum\_{k=1}^{\infty}\alpha ^{k} #{ \text{length-$k$ walks from $i$} }.
$$

- A node with a high Katz-Bonacich centrality increases the centrality of its neighbors by the same amount no matter how many neighbors it has, which may not be realistic in some settings.

## PageRank

Extending the Katz-Bonacich centrality, PageRank dilutes the importance contribution of a node to its neighbors by its number of outgoing edges.
Intuitively, a page is important if another page points to it, but is less important if that other page points to many pages.
Formally,
$$
C\_{P} = \alpha AD^{-1} C\_{P} + \mathbf{1},
$$
where $D$ is the out-degree matrix lower bounded by $1$, giving
$$
C\_{P} = (I - \alpha AD^{-1})^{-1} \mathbf{1}.
$$

Removing the constant term gives
$$
C\_{P}' = \alpha AD^{-1} C\_{P}'.
$$
Note that for undirected graphs $\lambda _{\max}(AD^{-1}) \le 1$ and $C'_{P}=A \mathbf{1}$ is the leading eigenvector of $AD^{-1}$ with eigenvalue $1$. Thus, $C\_{P}'$ reduces to the degree centrality $C\_{D}$ for undirected graphs.

For directed graphs, $C\_{P}'$ faces the [[#^7c61e2|same issue]] as the eigenvector centrality.
From another perspective, we see that $AD^{-1}$ is a row-stochastic matrix, which specifies a [[Markov Chain]] corresponding to a random walk, and $C\_{P}'$ is the stationary distribution.
To prevent the Markov chain being trapped in a sink node,
the additional constant term helps PageRank jump to a node uniformly at random with probability $\frac{1}{n(1+\alpha)}$.

- When assigning PageRank and previous centralities, each node plays two roles: it receives importance from its neighbors and contributes importance to its neighbors. A closer look inspires us to find the most influential and most influenced nodes using separate scores.

## Hub and Authority

Consider each node has two roles: hub and authority.
A hub node is more important if it points to more important authorities; an authority node is more important if it is pointed to by more important hubs.
Associate each node $i$ with a hub score $C\_{H}(i)$ and an authority score $C\_{A}(i)$. Formalize the above relationship with a linear form:
$$
C\_{A} = \alpha A C\_{H}, \quad C\_{H} = \beta A^T C\_{A}.
$$
A fixed point solution satisfies
$$
C\_A = \alpha\beta  A A^T C\_A, \quad C\_H = \alpha\beta A^TA C\_H.
$$

> [!rmk]
>
> $(A^TA)_{ij} = \sum\_k A_{ki} A\_{kj}$ counts the number of nodes that point to both $i$ and $j$; $(A A^T)_{ij} = \sum\_k A_{ik} A\_{jk}$ counts the number of nodes that are pointed to by both $i$ and $j$.

Similar to [[#Eigenvector]] centrality, if $AA^T$ and $A^TA$ are irreducible, then only their leading eigenvectors have all elements non-negative and survive the power iteration.
Thus, let $\alpha\beta=\lambda\_{\max}^{-1}$ and $C\_{A}$ and $C\_H$ be the leading eigenvectors of $A A^T$ and $A^TA$, referred to as the authority and hub centrality, respectively.

## Closeness

- Previous centralities are based on the adjacency matrix. Can we propose other centralities based on path or connectivity?

[[#Katz-Bonacich]] centrality gives an interpretation of counting walks: a node has a high centrality if it can initiate many short walks. In the same spirit, we can assign a high centrality to a node if it can reach many nodes through short paths.

The closeness centrality of a node is the reciprocal of the average shortest path length from it to all other nodes:
$$
C\_C(i) = \frac{n-1}{\sum\_{j \neq i} \dist(i,j)}.
$$

However, when the network is not connected, the above expression always gives zero. To fix this issue, we can use a harmonic mean instead:
$$
C\_{C}'(i) = \frac{\sum \_{j\in i} \frac{1}{\dist(i,j)}}{n-1}
$$

## Betweenness

- We can also assign a high centrality to a node if it is key to connecting other nodes.

The between centrality of a node is the proportion of shortest paths between pairs of nodes that pass through it. Formally, let $S(i,j)$ be the set of shortest paths between nodes $i$ and $j$, and $S(i,j|k)$ be the set of those paths that pass through node $k$. Then the betweenness centrality of node $k$ is defined as:
$$
C\_B(i) = \sum\_{i \neq j \neq k} \frac{|S(j,k|i)| /|S(j,k)|}{(n-1)(n-2) /2}.
$$

- All previous centralities all have a positive correlation with degree centrality, i.e., measure how well-connected a node is. However, a low-degree node that is distant from other nodes can have a high betweenness centrality.

## Random Walk Betweenness

Replacing the shortest path in [[#Betweenness]] centrality with a random walk gives the random walk betweenness centrality:
$$
C\_{R}(i) = \sum\_{i\ne j\ne k} \frac{P(j\to i \to k \given j\to k)}{(n-1)(n-2) /2},
$$
where $P(j\to i \to k \given j\to k)$ is the probability that a random walk passes through $i$ conditioned on it starting from $j$ and ending at $k$.
