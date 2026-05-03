---
publish: true
aliases:
  - Homophily
  - Modularity
title: Assortativity
created: 2026-03-30T21:37:34
modified: 2026-04-22T23:28:59
published: 2026-04-30T15:36:09.699-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Network]]"
type: note
---

# Assortativity

> [!quote] Homophily
>
> tendency of individuals to associate disproportionately with others who are similar (e.g. ethnicity, age, profession, religion, etc) to themselves.
>
> - Lazarsfeld, P.F. "Friendship as a social process: A substantive and methodological analysis." _Freedom and Control in Modern Society_ (1954)

^22a619

The tendency of individuals to associate with others who are similar to themselves is known as ==homophily== or ==assortative mixing==.
On the other hand, ==disassortative mixing==, the tendency of individuals to associate with others who are _unlike_ them, is also widely observed in information, technological, and biological networks \[@newman2018Networks].

## Modularity

To talk about assortativity, we need to specify the _characteristic_ that defines the similarity between nodes.
When such characteristics are unknown, the [[Unsupervised Learning]] task of grouping nodes into clusters is called ==community detection==.

The idea of a community is that nodes in the same community have a higher probability of being connected than those in different communities.
To capture this idea, ==modularity== of a division is defined as

$$
Q = \frac{ |\mathcal{E}_{\mathrm{comm}}|- \mathbb{E}_{\mathrm{unif}}|\mathcal{E}_{\mathrm{comm}}|}{m},
$$

where $\mathcal{E}_{\mathrm{comm}}$ is the set of edges within communities, and $\mathbb{E}_{\mathrm{unif}}$ places all $m$ edges uniformly at random.
A large modularity means a low entropy, which further suggests a strong community structure.

More formally, suppose $g_{i}$ returns the community index of node $i$. Then,

$$
|\mathcal{E}_{\mathrm{comm}}| = \frac{1}{2} \sum_{ij} A_{ij} \mathbb{1}\{ g_{i} = g_{j} \}.
$$

If we collect the $m$ edges and place them uniformly at random, the expected number of edges within communities is

$$
|\mathcal{E}_{\mathrm{comm}}| = \frac{1}{2} \sum_{ij} \mathbb{E}[\mathbb{1} \{ (i,j)\in \mathcal{E} \}] \cdot \mathbb{1}\{ g_{i} = g_{j} \} = \frac{1}{2} \sum_{ij} \frac{d_{i}d_{j}}{2m} \cdot \mathbb{1}\{ g_{i} = g_{j} \}.
$$

Thus,

$$\tag{1}%%\label{eq-mod}
Q = \frac{1}{2m} \sum_{ij}\left( A_{ij} - \frac{d_i d_j}{2m} \right) \mathbb{1}\{ g_{i} = g_{j} \}.
$$

^eq-mod

Let $\Delta = (\mathbb{1}\{ g_{i}=g_{j} \})_{ij}$. The matrix form of modularity is

$$
Q = \frac{1}{2m} \mathbf{1}^T \left( A - \frac{dd^T}{2m} \right) \odot \Delta \mathbf{1}.
$$

### Modularity Maximization

Modularity can serve as an objective function for community detection. The discrete optimization problem is NP-hard in general.
Consider a partition into two communities with index $-1$ and $1$. Then,

$$
\mathbb{1} \{ g_{i}=g_{j} \} = \frac{1}{2} (1 + g_{i}g_{j}).
$$

Note that $\sum_{ij}(A_{ij}- d_{i}d_{j} /(2m)) = 2m-2m =0$. Thus, for this binary partition, we have

$$
Q = \frac{1}{4m} g^T (A - dd^T /(2m))g,
$$

recovering the [[Spectral Graph Theory#^spectral-partition]] with the graph Laplacian replaced by the ==modularity matrix== $A - dd^T /(2m)$. However, here we can directly let the relaxed real-valued $g$ be the leading eigenvector of the modularity matrix, without degenerating to the trivial case where all nodes are in the same community. This method is also referred to as the ==spectral modularity maximization==.

## Assortative Mixing

Now suppose nodes have a scalar characteristic. If nodes with similar values tend to be connected together more often than those with different values, then the network is considered ==assortatively mixed== according to that characteristic.

To see if links are formed based on a scalar characteristic $x$, we calculate the covariance between the characteristic values of the two endpoints of a randomly chosen edge:

$$
\Cov(x_{i},x_{j}) = \frac{\sum_{ij}A_{ij}(x_{i}-\mu)(x_{j}-\mu)}{\sum_{ij}A_{ij}} ,
$$

where the marginal mean $\mu$ is defined as

$$
\mu = \frac{\sum_{ij}A_{ij}x_{i}}{\sum_{ij}A_{ij}} = \frac{\sum_{i}d_i x_{i}}{2m}.
$$

Thus,

$$
\Cov(x_{i},x_{j}) = \frac{\sum_{ij}x_{i}x_j}{2m} - \frac{\sum_{ij}d_{i}x_{i}d_{j}x_{j}}{(2m)^{2}} = \frac{1}{2m}\sum_{ij}\left( A_{ij} - \frac{d_{i}d_{j}}{2m} \right) x_{i}x_{j},
$$

which recovers [[#^eq-mod]] by replacing the community indicator with the characteristic value. In matrix form, we have

$$
\Cov(x_{i},x_{j}) = \frac{1}{2m} x^T \left( A - \frac{dd^T}{2m} \right) x.
$$

Note that

$$
\Var(x_{i}) = \Cov(x_{i},x_{i}) = \frac{1}{2m}\sum_{ij}\left( d_{i}\delta _{ij} - \frac{d_{i}d_{j}}{2m} \right) x_{i}x_{j}
= \frac{1}{2m} x^T \left( D - \frac{dd^T}{2m} \right) x.
$$

We define the ==assortativity coefficient== as the correlation:

$$
r = \frac{x^T(A - dd^T/(2m))x}{x^T(D - dd^T / (2m))x}.
$$

$r=1$ means perfect assortative mixing, $r=0$ means no assortative mixing, and $r=-1$ means perfect disassortative mixing.

## Degree Correlation

When the characteristic is the degree, associative mixing gives ==core-periphery== structures, where high-degree nodes tend to stick together to form a core surrounded by a periphery of low-degree nodes, commonly observed in social networks.
Disassortative mixing by degree tend to give ==hub-and-spoke== structures, where high-degree nodes are hubs that connect many low-degree nodes that connect to other hubs.
Replacing $x$ with the degree vector $d$ gives the assortativity coefficient by degree.
