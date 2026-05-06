---
publish: true
title: Network Phenomena
created: 2026-04-02T16:35:16
modified: 2026-04-05T01:16:21
published: 2026-04-30T16:13:48.000-04:00
tags:
  - pub-network
state: "[[%wip]]"
sup:
  - "[[Network]]"
aliases:
type: note
---

# Network Phenomena

## Phase Transition

For a [[Random Graph Model]] with parameter $p(n)$, a ==threshold function==, or ==critical value==, for a property is a function $t(n)$ such that the property holds with a probability approaching 1 if $p(n) = \Omega(t(n))$,  while approaching 0 if $p(n)=o(t(n))$.
When such a threshold function exists, it is said that a ==phase transition== occurs at that threshold.

## Giant Component

In a [[Random Graph Model]], a ==giant component== is one whose size grows proportionally to the number of nodes.
We usually denote the _size_ of a component as the fraction of nodes it contains: $|C| /n \in (0,1]$.

A finer definition refers to a component with nodes fewer than $n^{2 /3}/2$ as a ==small component==, and one with nodes more than $n^{2 /3}$ as a ==large component==.

## Small-World Effect

A ==small-world== network has a small diameter and average path length compared to its number of nodes.
Usually we look for a $O(\ln n)$ diameter.
