---
publish: true
aliases:
  - Congestion Game
title: Routing Game
created: 2026-02-21T22:44:20
modified: 2026-03-02T19:00:33
published: 2026-05-05T23:07:43.000-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Game Theory]]"
type: note
---

# Routing Game

An (atomic) routing game, or congestion game, is represented by a tuple $(N,G=(V,E),\{ a_{i},b_{i} \}_{i\in N},\{c_{e}\}_{e\in E})$ where

- $G$ is a directed graph;
- for each player $i\in N$, $a_{i},b_{i}\in V$ specify a source and sink vertex respectively;
- for each edge $e \in E$, $c_e: \mathbb{N} \rightarrow \mathbb{R}^{+}$ specifies a **non-decreasing** congestion cost function on that edge.

The strategy set $S_i$ of each player $i$ is the set of all paths from $a_i$ to $b_i$ in $G$.
Given a strategy profile $s$, we denote $n_e(s)$ as the number of players whose path contains $e$. The cost of player $i$ sums up the congestion cost of all edges in their path:

$$
\operatorname{cost}_i(s)=\sum_{e \in s_i} c_e(n_e(s)).
$$

Routing games are classic examples of [[Potential Game]]. Define

$$
\Phi(s) \coloneqq \sum_{e\in E} \sum_{k=1}^{n_{e}(s)} c_{e}(k).
$$

To see this is the exact potential function of routing games, suppose $s_i'$ has new edges $E_{\mathrm{new}}$ and removes edges $E_{\mathrm{old}}$ compared to $s_{i}$.
Then, the difference in the potential function is

$$
\begin{aligned}
\Phi(s) - \Phi(s') =&  \sum_{e\in E_{\mathrm{old}}} c_{e}(n_{e}(s))  + \sum_{e\in E_{\mathrm{new}}} -c_{e}(n_{e}(s)+1) + \sum_{e\in E \setminus (E_{\mathrm{old}}\cup E_{\mathrm{new}})} 0 \\
=& \sum_{e\in E_{\mathrm{old}}} c_{e}(n_{e}(s))  - \sum_{e\in E_{\mathrm{new}}} c_{e}(n_{e}(s)+1) \\
=& \operatorname{cost}_{i}(s) - \operatorname{cost}(s_{i}',s_{-i}).
\end{aligned}
$$

## Price of Anarchy

We have the following tight bound of [[Price of Anarchy]] for routing games:

> [!thm] For any routing game with linear cost functions, the PoA is upper bounded by 2.5, and there exists a routing game with linear cost functions that has PoA equal to 2.5.

With non-linear cost functions, the PoA can be unbounded.

> [!ex]
> For example, consider a routing game with two parallel edges from $a$ to $b$, where the cost function of the first edge is $c_1(k) = 1$ and the cost function of the second edge is $c_2(k) = (k /n)^p$ for some large $p$. An NE is that all players choose the second edge, resulting in a social cost of $n$.
> For the strategy where one player chooses the first edge while others choose the second edge, the social cost is $1 + (n-1) ((n-1)/n)^p\to 1$, as $p\to \infty$. Then the PoA is lower bounded by $n$.

## Cost Sharing Game

A cost sharing game is a routing game with a decreasing cost $c_{e}(k) = \frac{C_{e}}{k}$ for some positive constant $C_{e}$. That is, the cost of an edge is shared equally among all players using that edge.

We have the following three properties

- Cost sharing games are exact potential games, with the potential function defined as
  $\Phi(s) = \sum_{e\in E} \sum_{k=1}^{n_{e}(s)} \frac{C_{e}}{k}.$
- The [[Price of Anarchy|PoA]] of cost sharing games is at most $n$.
  - Proof: Let $s^{\mathrm{NE}}$ be any NE strategy profile and $s^{\mathrm{opt}}$ be the social optimal strategy profile. By definition, we have $\operatorname{cost}_{i}(s^{\mathrm{NE}}_{i},s^{\mathrm{NE}}_{-i}) \le \operatorname{cost}_{i}(s^{\mathrm{opt}}_{i},s^{\mathrm{NE}}_{-i})$. Note that $s_{-i}$ only determines how many players will share the cost with you, and the best case is that all players use the same path as you while the worst case is that no other players' path overlaps with yours. Therefore, $\operatorname{cost}_{i}(s^{\mathrm{opt}}_{i},s^{\mathrm{NE}}_{-i}) \le n \operatorname{cost}_{i}(s^{\mathrm{opt}}_{i},s^{\mathrm{opt}}_{-i})$. Summing over all players gives
    $\operatorname{cost}(s^{\mathrm{NE}}) \le n \cdot \operatorname{cost}(s^{\mathrm{opt}}).$
- The [[Price of Anarchy|PoA]] of cost sharing games is exactly $n$.
  - Proof: We only need to fine one instance with PoA of $n$. Consider $n$ agents with a shared source and a shared sink. There are two edges from the source to the sink, with costs $1$ and $n$ respectively. One NE is that all agents choose the second edge, resulting in a social cost of $n$, while the social optimal strategy profile is that all agents choose the first edge, resulting in a social cost of $1$. Thus, the PoA is $n$.
- The [[Price of Anarchy|PoS]] of cost sharing games is exactly $H(n) = O(\ln n)$, where $H(n) = \sum_{k=1}^{n} k^{-1}$ is the $n$-th harmonic number.
  - Let $s^{\mathrm{NE}} \in \Argmin_{s\in S} \Phi(s)$. We know that $s^{\mathrm{NE}}$ is an NE of the potential game. Since for any $s$, we have $\operatorname{cost}(s)\le \Phi(s) \le H(n)\operatorname{cost}(s)$, we have
    $\operatorname{cost}(s^{\mathrm{NE}}) \le \Phi(s^{\mathrm{NE}}) \le \Phi(s^{\mathrm{opt}}) \le H(n)\operatorname{cost}(s^{\mathrm{opt}}).$
    Thus, the PoS is upper bounded by $H(n)$. The following game achieves this bound: $n$ players with a shared sink node; given some constant $t$ they can either build their own road with cost $t /i$ for Player $i$, or jointly build a road with a total cost of $t+1$. It is easy to see every player building their own road is the unique NE, as Player $n$ always prefers building their own road, and then so does Player $n-1, n-2, \dots, 1$.
    The cost of the NE strategy is $H(n)t$.
    However, if all players jointly build a road, the cost is $t$.
