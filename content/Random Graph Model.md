---
publish: true
title: Random Graph Model
created: 2026-03-31T17:53:22
modified: 2026-04-02T17:31:01
published: 2026-04-30T16:13:47.000-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Network]]"
aliases:
type: index
---

# Random Graph Model

A random graph model specifies a [[Probability|distribution]] on a set of graphs, modeling the [[Network]] generating process.
A ==static== random graph model specifies the distribution given a graph space,
while a ==dynamic/growing== random graph model specifies the distribution given the current graph and a new graph space.
In other words, a static model can be thought of as having all nodes present at the same time and then having links drawn according to some probabilistic rule,
while in a growing model, new nodes are introduced over time, and form links with existing nodes as they enter.

- Static
  - [[Erdos-Renyi Random Graph]]
  - [[Stochastic Block Model]]
  - [[Configuration Model]]
  - [[Chung–Lu Model]]
  - [[Random Geometric Graph]]
  - [[Watts-Strogatz Model]]
  - [[Kleinberg Model]]
- Dynamic/Growing
  - [[Preferential Attachment]]
