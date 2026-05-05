---
publish: true
title: Configuration Model
created: 2026-04-02T17:38:46
modified: 2026-05-04T23:55:06
published: 2026-05-04T23:55:07.149-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Random Graph Model]]"
  - "[[Network]]"
aliases:
type: note
---

# Configuration Model

- Motivation: The basic [[Erdos-Renyi Random Graph|ER]] model has a binomial/Poisson degree distribution. How do we generate a network with any degree distribution/tail behavior?
- Model: graphic sequences $(d_{i})_{i=1}^{n}$ converging to a degree distribution $(p_{d})_{d\in\N}$
  - i.e., $(p_{d}^{(n)})\to (p_{d})$, so we can use the [[#Local Branching]] property
  - We use $\langle d^{k} \rangle$ to denote the $k$-th moment of the degree distribution, i.e., $\langle d^{k} \rangle = \sum_{d} d^{k} p_{d}$
- Basic properties
  - Expected [[#Excess Degree Distribution|excess degree]]: $\langle \tilde{d} \rangle = \langle d^{2} \rangle /\langle d \rangle -1$
  - Local [[Transitivity|Clustering]]: $\mathbb{E}C_{i} = \frac{1}{n}\frac{(\langle d^{2} \rangle - \langle d \rangle )^{2}}{\langle d \rangle^{3} }$
- [[Network Phenomena#Phase Transition|Phase transitions]]
  - [[Network Phenomena#Giant Component|Giant component]]: $\langle d^{2} \rangle > 2\langle d \rangle$
    - Small component size: $1 + \frac{\langle d \rangle^{2}}{2\langle d \rangle - \langle d^{2} \rangle }$
  - Connectivity for power law: $\gamma \le 2$
    - General: $g_{1}(0)=0$, where $g_{1}$ is the [[Probability Generating Function|PGF]] of the excess degree distribution
- [[Network Phenomena#Small-World Effect|Diameter]]: $\ln n /\ln \langle \tilde{d} \rangle$ when $\langle \tilde{d} \rangle >1$

> [!rmk] Degree specification
>
> Given $n$ nodes, we can specify their degrees with three levels:
>
> 1. a fixed degree sequence $(d_{i})_{i=1}^{n}$ such that $D_{i}=d_{i}$ ([[#Algorithm 1 Uniform Stub-Matching]]);
> 2. a degree expectation sequence $(d_{i})_{i=1}^{n}$ such that $\mathbb{E}D_{i} = d_{i}$ ([[Chung–Lu Model]]); and
> 3. a degree distribution $(p_{d})_{d\in\N}$ such that $\mathbb{P}(D_{i} = d) = p_{d}$ ([[#Algorithm 2 Sampling]]).

^deg-spec

Generally, the configuration model is the family of random graph models that generate networks from any degree specification above.
People also categorize the models into ==microcanonical== and ==canonical (soft)== configuration models, referring to the first and second degree specification levels respectively.
[[Chung–Lu Model]] is the _canonical_  canonical configuration model.
Customarily, the configuration model refers a specific process of generating a random graph with a fixed degree sequence, which is the focus of this note.
The properties in this note also hold _in expectation_ when the fixed degree sequence is a realization of a degree distribution (the third specification).

> [!thm] Graphic sequence
>
> Given a degree sequence $(d_{i})_{i=1}^{n}$ with $d_{1}\ge d_{2}\ge\dots\ge d_{n}$ WLOG, a graph with this degree sequence exists if and only if $\sum_{i=1}^{n}d_{i}$ is even and for all $k\in[n-1]$,
>
> $$
> \sum_{i=1}^{k}d_{i} \le k(k-1) + \sum_{i=k+1}^{n}(d_{i}\wedge k).
> $$
>
> A degree sequence satisfying these two conditions is called a ==graphic sequence==.

## Algorithm 1: Uniform Stub-Matching

1. List all nodes, each with $d_{i}$ stubs (half-edges).
2. Uniformly randomly match two stubs and form an edge, and delete the two stubs.
3. Repeat step 2 until no stubs are left.

- Possible to generate a multigraph with self-loops and multiple edges.
- Cumbersome to generate and does not scale with $n$.

### Multi-edges and Self-loops

Under suitable assumptions on the degree sequence and as $n$ grows,
we can work directly with the generated multigraph, and show it has essentially the same properties as a randomly selected graph with the same degree sequence;
or we can delete self-links and duplicate links in the generated multigraph, and show the proportion of deletions is suitably small, and we end up with a graph with a degree distribution close to the specification.

The justification is the following two propositions.

> [!prop]
>
> Consider an infinite degree sequence $(d_{1},d_{2},\dots)$ such that $\max_{i\le n} d_{i}=o(n^{1 /3})$. Then
>
> $$
> \lim_{ n \to \infty } \max_{i\le n}P( i \text{ has a self-loop or a multiple edge} ) = 0.
> $$
>
> > [!pf]-
> >
> > Fix $n$. Let $\bar{d}_{n},\hat{d}_{n}$ be the average and maximum degree in the first $n$ nodes, respectively.
> > Consider an equivalent procedure that first matches all stubs of an arbitrary node $i$, and then move on to the next node, and so on.
> > In this procedure, the probability of the first edge being a self-loop or a multiple edge is $\frac{d_{i}-1}{n\bar{d}_{n}-1}\le \frac{\hat{d}_{n}}{n\bar{d}_{n}-\hat{d}_{n}}$.
> > Then, suppose the the first edge goes to node $j$. The probability of the second edge being a self-loop or a multiple edge is $\frac{d_{i}-2}{n\bar{d}_{n}-2} + \frac{d_{j}-1}{n\bar{d}_{n}-2}\le \frac{2\hat{d}_{n}}{n\bar{d}_{n}-\hat{d}_{n}}$.
> > By induction, the probability of node $i$ having no self-loop or multiple edge is at least
> >
> > $$
> > \prod_{k=1}^{d_{i}} \left( 1 - \frac{j\hat{d}_{n}}{n\bar{d}_{n}-\hat{d}_{n}} \right) \ge \left( 1 - \frac{\hat{d}_{n}^{2}}{n\bar{d}_{n}-\hat{d}_{n}} \right)^{\hat{d}_{n}} \approx \exp\left( - \frac{\hat{d}_{n}^{3}}{n\bar{d}_{n}-\hat{d}_{n}} \right) \to 1.
> > $$

The above proposition does not imply that the process will generate no self-links or duplicate links. When one aggregates across many nodes, there will tend to be some duplicate and self-links in this process, except under more extreme assumptions on the degree sequences.
We now calculate the expected total number of multi-edges and self-loops.

> [!prop]
>
> The expected total number of self-loops is $\frac{\langle d^{2} \rangle-\langle d \rangle}{2\langle d \rangle}$ and the expected total number of multi-edges is $\frac{1}{2}\left( \frac{\langle d^{2} \rangle-\langle d \rangle}{\langle d \rangle} \right)^{2}$.
>
> > [!pf]-
> >
> > For node $i$, the probability it has a self link is ${d_{i}\choose 2} \cdot \frac{1}{2m-1}$. Thus, the expected total number of self-loops is
> >
> > $$
> > \sum_{i} \frac{{d_i \choose 2}}{2m-1} \approx  \frac{\sum _id_i(d_i-1)}{4m} = \frac{\langle d^{2} \rangle -\langle d \rangle }{2\langle d \rangle }.
> > $$
> >
> > Note that under the uniform stub-matching process, the probability of a link between two nodes $i$ and $j$ is $\frac{d_{i}d_{j}}{2m-1}$, where $m = \frac{1}{2}\sum_{i} d_{i}$ is the total number of edges.
> > Conditioned on that $i,j$ are connected by a first link, they form a second link with probability $\frac{(d_i-1)(d_j-1)}{2m-3}$.
> > The product of the two probabilities is the probability of a multi-edge between $i$ and $j$ (more than two links count as one multi-edge).
> > Suppose $m \gtrsim n\to \infty$.
> > Then, the expected number of multi-edges is
> >
> > $$
> > \sum_{i<j} \frac{d_id_j(d_i-1)(d_j-1)}{(2m-1)(2m -3)} \approx  \frac{(\sum_{i}d_{i}(d_{i}-1))(\sum_{j}d_{j}(d_{j}-1))- \sum_{i}d_{i}^{2}(d_{i}-1)^{2}}{8m^{2}}  \approx \frac{1}{2}\left( \frac{\langle d^{2} \rangle-\langle d \rangle}{\langle d \rangle} \right)^{2},
> > $$
>
> where we assumed that all involved moments exist and grow slower than $n$.

## Algorithm 2: Sampling

1. Input: a degree specification $(p_{d})_{d\in\N}$ of the second type, a size $n$.
2. Generate $D_{i} \overset{ \text{i.i.d.} }{ \sim } (p_{d})$ for $i=1,\dots,n$.
3. If $(D_{i})_{i=1}^{n}$ is not a graphic sequence, go back to step 2.
4. Generate a uniform random match of stubs as in Algorithm 1.
5. If the generated graph has self-links or duplicate links, go back to step 4.

- Re-sampling introduces correlations across nodes and edges, but negligible as a higher-order effect.
- One can show that as $n$ grows:
  - $\#\text{self-loops} \overset{ d }{ \sim } \operatorname{Poisson}(\lambda _{\operatorname{self}})$ with $\lambda _{\operatorname{self}}=O(1)$,
  - $\#\text{duplicate edges} \overset{ d }{ \sim } \operatorname{Poisson}(\lambda _{\operatorname{dup}})$ with $\lambda _{\operatorname{dup}}=O(1)$,
  - $\#\text{self-loops}$ and $\#\text{duplicate edges}$ are asymptotically independent with high probability, and thus
  - the success rate of Algorithm 2 is $\exp(-\lambda _{\operatorname{self}} - \lambda _{\operatorname{dup}}) = O(1)$.

## Local Branching

Configuration models including [[Chung–Lu Model]] generalize [[Erdos-Renyi Random Graph]] to accommodate arbitrary degree distributions. In all these models, the local graph structure is **[[Tree]]-like**, as the probability of an edge linking back to a previously visited node is negligible as $n$ grows.

The local tree structure can be thought of as generated by a **[[Branching]] process**, as all neighbors of a node are generated i.i.d. (not true when correlation exists, see e.g., [[6-7260-HW2#Problem 3]])

Formally, consider a local connected subgraph or a small component of size $s$. Since it's connected it has at least $s-1$ links. If the degree distribution (or [[#Excess Degree Distribution]]) has a constant mean w.r.t the graph size $n$, the probability of having an additional link is

$$
\left( {s\choose 2} - (s-1) \right) \cdot \frac{\langle d \rangle}{n} =o(1),
$$

where $\langle d \rangle /n$ (or $\langle \tilde{d} \rangle /n$) is the average probability of a link between two nodes, which is $p$ in [[Erdos-Renyi Random Graph|ER]].

## Excess Degree Distribution

To utilize the local branching property, we need to know that is the degree distribution of a neighbor of a node to figure out the offspring distribution. Since this neighbor already has one link to the node, we are interested in the number of its other neighbors, which is called the ==excess degree==.
For the following generation, the number of offsprings is specified by the excess degree distribution.

Suppose we have a graph generated by a configuration model and has a degree distribution $D_{i} \overset{ \text{i.i.d.} }{ \sim }(p_{d})_{d\in\N}$.
According to the process in [[#Algorithm 1 Uniform Stub-Matching]], the probability of a node being $i$'s neighbor is proportional to its degree, so the excess degree a neighbor follows

$$
P(\tilde{D}_{j}=d) = \frac{(d+1) p_{d+1}}{\sum_{d'} d' p_{d'}} = \frac{(d+1) p_{d+1}}{\mathbb{E}D_{i}}, \quad \forall d\in\N,
$$

which is independent of node $i$.
Thus, the extinction probability of this branching process depends on $\langle \tilde{d} \rangle= \langle d^{2} \rangle /\langle d \rangle -1$.

> [!rmk] Random node vs random link
>
> Randomly picking a node from a network vs. randomly following the end of a link, are two very different exercises. The latter is much more likely to find a high degree node.

> [!rmk] Friendship paradox
>
> The expected average neighbor degree is hence $\mathbb{E}D_{i}^{2} / \mathbb{E}D_{i}$, which is no smaller and can be much larger than $\mathbb{E} D_{i}$.

This gives the following [[Network Phenomena#Phase Transition|phase transition]]:

> [!prop] A [[Network Phenomena#Giant Component]] appears if $\langle \tilde{d} \rangle>1$, i.e., $\langle d^{2} \rangle > 2\langle d \rangle$. When $\langle \tilde{d} \rangle<1$, a component has an expected size of $1 + \frac{\langle d \rangle^{2}}{2\langle d \rangle - \langle d^{2} \rangle }$.

^95d986

- When $D \sim \operatorname{Poisson}(\lambda)$, we have $\mathbb{E}D_{i}=\lambda$ and $\mathbb{E}D_{i}^{2} / \mathbb{E}D_{i}= 1 + \lambda$, so the phase transition occurs at $\lambda=1$, which is consistent with the ER model.
- When $D$ follows a [[Power Law Distribution]] with exponent $\gamma$, then $\langle d^{2} \rangle = \zeta(\gamma-2)$ and $\langle d \rangle = \zeta(\gamma-1)$, where $\zeta(\cdot)$ is the Riemann zeta function. Thus, the phase transition occurs at $\zeta(\gamma-2) > 2\zeta(\gamma-1)$, which is approximately $\gamma < 3.4788$.
- &#x20;The above approximation applies to both [[Erdos-Renyi Random Graph]] and [[Chung–Lu Model]].

## Clustering Coefficient

A corollary of [[#Local Branching]] property is a zero clustering coefficient. Intuitively, your neighbors are much more likely to be connected to other nodes than to each other.
We formally calculate the expected clustering coefficient without assuming constant moments of the degree distribution:

$$
C = \mathbb{E}[\mathbb{E}[ \mathbb{1}\{(j,k)\in E\}\given (i,j),(i,k)\in E]].
$$

Note that the excess degrees of $j$ and $k$ are independent of $i$ and they randomly pick from the remaining $2(m-2)$ stubs. Thus,

$$
\begin{aligned}
C =& \mathbb{E}[P((j,k)\in E)\given \tilde{D}_{j}=d_{j},\tilde{D}_{k}=d_{k}] \\
\approx& \sum_{d_j=0, d_k=0}^{\infty} \frac{d_{j} d_{k}}{2m} \cdot \frac{(d_{j}+1) p_{d_{j}+1}(d_{k}+1) p_{d_{k}+1}}{\langle d \rangle ^{2}} \\
=& \frac{1}{2m}\left( \frac{\langle d^{2} \rangle - \langle d \rangle }{\langle d \rangle } \right) ^{2} \\
=& \frac{1}{n}\frac{(\langle d^{2} \rangle - \langle d \rangle )^{2}}{\langle d \rangle^{3} } .
\end{aligned}
$$

Therefore, if $\langle d^{2} \rangle$ grows with $n$, we could have a non-vanishing clustering coefficient.

## Diameter

We calculated that the average number of other neighbors of a neighbor is $\langle \tilde{d} \rangle = \langle d^{2} \rangle/ \langle d \rangle-1$. Thus, the number of neighbors at distance $2$ is $\langle d^{2} \rangle- \langle d \rangle$.
By induction, we know the number of neighbors at distance $r$ is approximately $\langle d \rangle \langle \tilde{d} \rangle ^{r-1}$.

For a shortest path $(i,k_{1},\dots,k_{l-1},j)$ from $i$ to $j$, we know that $k_{s}$ must be at distance $s$ of $i$ and at distance $l-s$ of $j$, i.e., the path also contains the shortest paths from $i$ to $k_{s}$ and from $j$ to $k_{s}$, otherwise we can find a shorter path.
Therefore, the distance between $i$ and $j$ is no larger than $l$ if there exists a node $k_{s}$ at distance $s$ of $i$ and a node $k_{s+1}$ at distance $l-s-1$ of $j$ such that $(k_{s},k_{s+1})\in E$.
The probability of the existence of such a link is

$$
\langle d \rangle \langle \tilde{d} \rangle ^{s-1} \cdot \langle d \rangle \langle \tilde{d} \rangle ^{l-s-1} \cdot \frac{\langle \tilde{d} \rangle^{2} }{2m}
= \frac{\langle d \rangle \langle \tilde{d} \rangle ^{l}}{n}.
$$

Thus, with probability at least $1-\delta$, the distance between any two nodes is bounded by

$$
\frac{\ln \delta + \ln n - \ln \langle d \rangle }{\ln \langle \tilde{d} \rangle } \asymp \frac{\ln n}{\ln \langle \tilde{d} \rangle }.
$$

Thus, [[Network Phenomena#Small-World Effect]] holds if $\langle \tilde{d} \rangle>1$.
