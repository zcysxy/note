---
publish: true
title: Potential Games
created: 2026-04-05T03:21:55
modified: 2026-04-05T03:32:11
published: 2026-05-05T23:07:48.839-04:00
tags:
  - pub-network
state: "[[%watch]]"
sup:
  - "[[Game Theory]]"
aliases:
type: note
---

# Potential Games

A game with finite players is a potential game if there exists a potential function $\Phi: S\to\R$ such that $\Phi(s_{i},s_{-i})$ provides information about $u_{i}(s_{i},s_{-i})$ for **all** $i$.
$\Phi$ is an ==ordinal potential function== if

$$
u_{i}(s_{i},s_{-i}) - u_{i}(s_{i}',s_{-i}) > 0 \iff \Phi(s_{i},s_{-i}) - \Phi(s_{i}',s_{-i}) > 0,\quad \forall s_{i},s_{i}',s_{-i},i.
$$

$\Phi$ is an ==exact potential function== if

$$
u_{i}(s_{i},s_{-i}) - u_{i}(s_{i}',s_{-i}) = \Phi(s_{i},s_{-i}) - \Phi(s_{i}',s_{-i}),\quad \forall s_{i},s_{i}',s_{-i},i.
$$

For games with an infinite strategy space, we further require $\Phi$ to be continuous.

> [!thm] The global maxima of a potential function are [[Nash Equilibrium|PSNEs]].

- A [[Game Library#Cournot Competition]] with homogeneous costs is an ordinal potential game, and is an exact potential game if further the demand is linear.
- [[Routing Game]]s and [[Routing Game#Cost Sharing Game]]s are exact potential games.
