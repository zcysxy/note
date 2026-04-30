---
publish: true
title: Kleinberg Model
created: 2026-04-09T14:57:53
modified: 2026-04-22T03:07:20
published: 2026-04-30T15:37:00.256-04:00
tags:
  - "#pub-network"
state: done
sup:
  - "[[Network]]"
  - "[[Random Graph Model]]"
aliases:
type: note
---

# Kleinberg Model

- Motivation: [[Watts-Strogatz Model]] captures the [[Network Phenomena#Small-World Effect]], but it fails to explain the efficient decentralized search in social networks.
  - Lower bound of decentralized search: $\mathbb{E}\[N\_{A}] = \Omega(\sqrt{ n })$ ^prop-lower
    - Decentralized: agents know the _locations_ of other agents (geographical, before adding long-range edges), their neighbors, can distinguish a long-range neighbor from a local neighbor, and can even know if their neighbors have long-range neighbors, but they **do not know the locations** of long-range neighbors of a neighbor.
    - $N\_{A}$: the number of steps of a decentralized search algorithm $A$ to find a target node $t$ from a source node $s$, with $s,t$ chosen uniformly at random.
- Model 1D
  - [[Watts-Strogatz Model]] with $k=2$ and without removing original links
  - Add $2np$ shortcuts
  - For each shortcut, it connects two locations $r$ apart with probability $\propto r^{-\alpha}$ for some positive parameter $\alpha$, with the locations chosen uniformly at random among all pairs of locations $r$ apart
- Model 2D
  - Agents are 2D lattice points on a $n  \times n$ grid, each connected to its 4 nearest neighbors w.r.t $L\_{1}$ distance
  - Each agent has a shortcut, which links to another agent at $L\_{1}$ distance $r$ with probability $\propto r^{-\alpha}$ for $\alpha\in\[0,3)$
- [[Network Phenomena#Small-World Effect|Expected steps]] $\mathbb{E}\[N\_{A}]$
  - 1D: $O(\ln^{2} n)$ when $\alpha =1$; $O(n^{|1-\alpha |})$ o.w.
  - 2D: $O(\ln^{2} n)$ when $\alpha =2$; $O(n^{|2-\alpha|})$ o.w.
- Intuition
  - The shortcut should not jump too close that it does not give enough progress, and should not jump too far that it always skips the target when it is close
  - An ideal search method is _hierarchical_ that progressively narrows down the search space
    - The letter is first sent to anyone in the US, then to anyone in Massachusetts, then to anyone in Boston, and then to the target person
  - Uniformly random shortcuts preclude such a hierarchy

## One Dimensional

![image.png|300](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20260422004012.png)

Suppose agents know the _locations_ of other agents, i.e., the geographical distances on the ring graph. Then, agent $s$ can partition the ring into $L$ classes: Class 0 contains $t$, Class 1 contains the two 1-hop neighbors of $t$, Class 2 contains $h$-hop neighbors of $t$ for $2^{1} \le h < 2^{2}$ with total $4$ nodes, ..., Class $\ell$ contains $h$-hop neighbors of $t$ for $2^{\ell-1} \le h < 2^{\ell}$ with total $2^{\ell}$ nodes, ..., Class $L$ contains the remaining nodes. We have $2^{L+1} -1\ge n\implies L = O(\ln n)$.

We consider the following algorithm $A$: when the current agent is in Class $\ell$, it passes the message to a lower class neighbor if there is one; otherwise, it passes the message to another Class $\ell$ agent through either a shortcut or a local edge.

Let $C$ be the normalizing constant for the distribution of shortcut range $r$.
Note that there are $2^{\ell}-1\ge 2^{\ell-1}$ agents in the lower classes, each of which is at most $2^{\ell+1}$ hops away from the current agent. Thus, the probability of a Class $\ell$ agent having a shortcut to a lower class is at least
$$
2np \cdot \frac{1}{n} \cdot \frac{1}{2} \cdot  2^{\ell-1}\cdot C (2^{\ell +1 })^{-\alpha} = pC2^{(1-\alpha)\ell - (1+\alpha)},
$$
where the $1 /2$ factor comes from the fact that the shortcut can be in either direction.
Then, the expected number of steps of staying in Class $k$, which follows a [[Geometric Distribution]], is
$$
\min \biggl{  \underbrace{ 2^{\ell} \vphantom{\frac{2}{p}} }_{ \text{via a local edge} }, \underbrace{ \frac{2^{(\alpha-1)\ell+1+\alpha}}{pC } }_{ \text{via a shortcut} }  \biggr}.
$$
Thus, the expected total number of steps is bounded above by
$$
\mathbb{E}\[N\_{A}]\le\frac{2^{1+\alpha}}{pC}\sum _{\ell=1}^{L} 2^{(\alpha-1)\ell}
\= \frac{2^{1+\alpha}}{pC} \frac{1 - 2^{(\alpha-1)L}}{1 - 2^{\alpha-1}}.
$$
Note that
$$
C \sum_{r=1}^{\lfloor n /2\rfloor} r^{-\alpha} = 1 \implies C^{-1} \asymp \begin{cases}
n^{1-\alpha}, & \alpha < 1,\\
\ln n /2, & \alpha = 1,\\
1, & \alpha > 1.
\end{cases}
$$
Finally,
$$
\mathbb{E}\[N\_{A}]\lesssim \begin{cases}
n^{1-\alpha}, & \alpha < 1, \\
\ln^{2} n, & \alpha=1,\\
n^{\alpha-1}, & \alpha >1.
\end{cases}
$$

## Two Dimensional

![image.png](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20260422004333.png)

Note that the number of agents within $L\_{1}$ distance $r$ to $t$ comprises a _diamond_ with $2 r (r+1)$ agents.

When $\alpha=0$, i.e., shortcuts are uniformly random, the expected number of steps is $\Theta(n^{1/3})$, proved similarly as [[#Lower Bound]] by setting $\frac{2w(w+1)^{2}}{n} \asymp w \implies w= n^{1 /3}$.

Similar to [[#One Dimensional]], we partition the agents into $L$ classes with Class $\ell$ being the $2^{\ell}$-diamond minus the $2^{\ell-1}$-diamond, which contains $3\cdot 2^{2\ell-1} + 2^{\ell}$ agents.
The algorithm tries to move to a lower class if possible; otherwise, it moves to another agent in the same class.

The normalizing constant of the distribution of shortcut range $r$ is
$$
C^{-1} \asymp \sum\_{r=1}^{2n} 4 r \cdot r^{-\alpha} \asymp \begin{cases}
n^{(2-\alpha)}, & \alpha < 2,\\
\ln n, & \alpha = 2,\\
1, & \alpha > 2.
\end{cases}
$$
Thus, the expected total number of steps is bounded above by
$$
\mathbb{E}\[N\_{A}]\le\sum \_{\ell=1}^{\ln n} \frac{1}{(2^{2\ell-1}+ 2^{\ell}) \cdot C 2^{-\alpha (\ell+1)}}
\asymp \frac{1}{C} \frac{1-n ^{\alpha-2}}{1-2^{\alpha-2}}  \asymp \begin{cases}
n^{2-\alpha}, & \alpha < 2,\\
\ln^{2}n, & \alpha =2,\\
n^{\alpha-2}, & \alpha > 2.
\end{cases}
$$

## General Hierarchical Model

![image.png](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20260422004104.png)

Generalizing the Kleinberg model, Watts _et al_. consider arbitrary networks with a shortcut mechanism specified by another shadow hierarchical tree network.
Agents are grouped by the leaf node they belong to.
For simplicity, we assume a binary tree with the same group size $g$.
More restricted than the Kleinberg model, we assume the agents only know the _tree distance_ between them, i.e., the height of their lowest common ancestor.
Any two agents of tree distance $\ell$ is connected by a shortcut with probability $C2^{-\alpha \ell}$, where $C$ controls the expected number of shortcuts an agent have, say $\langle d \rangle$.

Similarly, the algorithm lets an agent at tree distance $\ell$ passes the message to an agent that has a smaller tree distance to the target, i.e., the opposite subtree at height $\ell$, if it can; otherwise, it passes the message to another agent in its own subtree at height $\ell$. ^\[Unlike the Kleinberg model, we cannot guarantee that the message will move into the opposite subtree; in such a case, the algorithm fails]
The expected number of steps of staying at its own subtree is upper bounded by
$$
1 /\left( 2^{\ell-1}g \cdot C2^{-\alpha \ell} \right) = \frac{1}{gC} 2^{(\alpha-1)\ell +1}.
$$
Thus, the total expected number of steps is bounded above by
$$
\mathbb{E}\[N\_{A}\given \text{success}] \le \frac{2}{gC} \sum\_{\ell=1}^{L} 2^{(\alpha-1)\ell}.
$$
Note that $2^{L}g \le n\implies L = O(\ln n)$ and
$$
\sum\_{\ell=1}^{L} C 2^{\ell-1}g\cdot 2^{-\alpha \ell} = \langle d \rangle \implies
C^{-1} \asymp \frac{1- 2^{(1-\alpha)\ln n}}{1 - 2^{(1-\alpha)}}.
$$
Finally,
$$
\mathbb{E}\[N\_{A}\given \text{success}] \lesssim (1 - n^{1-\alpha })(n^{\alpha-1}-1) \asymp \begin{cases}
n^{1-\alpha}, & \alpha <1,\\
\ln^{2} n, & \alpha=1, \\
n^{\alpha-1}, & \alpha >1,
\end{cases}
$$
recovering the same result as the Kleinberg model.

- This model reveals the design of the critical regime $\alpha=1$, which renders $2^{\ell-1} 2^{-\alpha \ell }$ constant: the decrease with distance in the probability of knowing a particular person is exactly canceled out by the increase in the number of people there are to know.

## Lower Bound

Proof of [[#^prop-lower]]:
Given $s$ ant $t$, we partition all nodes into three classes $T\_{0}$, $T\_r$, and $N\setminus (T\_{0}\cup T\_{w})$, where $T\_{0}$, $T\_{w}$ are the 1-hop long-range neighborhood and $w$-hop short-range neighborhood of $t$, respectively. $w>0$ is to be determined later.
For simplicity, consider a [[Watts-Strogatz Model]] where $k=1$ (ring graph) we $n\beta$ random long-range edges are added instead of rewiring.
Then, since $s$ is uniformly random, we have
$$
p\_{0}\coloneqq P(s\in T\_{0}) \asymp \frac{n\beta}{n\choose 2} \asymp \frac{\beta}{n},
$$
and
$$
p\_{w} := P(s\in T\_{w}) \asymp \frac{w}{n}.
$$
If $s\in T\_{0}$, an algorithm needs only one step to find $t$. If $s\in T\_{r}$, any algorithm needs $\Omega(w)$ steps to find $t$.
If $s\in N\setminus (T\_{0}\cup T\_{w})$, let $s\_{A}'$ be the next node chosen by algorithm $A$ after $s$.
Since $A$ does not know if $s\_{A}'$ has a long-range edge to $t$, $P(s\_{A}'\in T\_{0}) \asymp p\_{0}$.
Note that $s$ has $\beta$ long-range neighbors in expectation.
If $A$ chooses a long-range neighbor $s\_{A}'$, we have
$$
P(s\_{A}'\in T\_{w}) \asymp \beta\frac{w}{n}.
$$
If $A$ chooses a short-range neighbor, $s\_{A}'$ can move slightly closer to $t$ but not much, so approximately we still have
$P(s\_{A}'\in T\_{w}) \asymp p\_{w}$.
Therefore, the algorithm approximately follows a [[Geometric Distribution]] with "success" probability $p\_{0} + \beta\frac{w}{n} + p\_{w}$. Suppose $w,\beta >1$. Then this probability is of $\beta w /n$.
Then, the expected number of steps until success is of $\frac{n}{\beta w}$.
Since $w,\beta \<n$, overall, we have
$$
\begin{aligned}
\mathbb{E}N\_{A} \asymp& \left( \frac{n}{\beta w} + w \cdot \frac{w}{\beta + w} + 1 \frac{\beta}{\beta+w} \right) \cdot \left( 1 - \frac{w}{n} - \frac{\beta}{n} \right) + w \cdot  \frac{w}{n} + 1 \cdot \frac{\beta}{n}  \\
\gtrsim& \frac{(n + w^{2})(n-w-\beta)}{\beta wn} + \frac{w^{2}}{n} \\
\gtrsim& \frac{1}{\beta wn} ( n(n - \beta- w)  + (n-\beta)w^{2} ),
\end{aligned}
$$
setting whose derivative with respect to $w$ to zero gives $w = \sqrt{ n }$ and
$$
\mathbb{E}\[N\_{A}] \gtrsim \sqrt{ n }.
$$
