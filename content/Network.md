---
publish: true
aliases:
  - Network Science
title: "*Networked* Networks"
created: 2026-03-27T17:35:19
modified: 2026-05-05T22:58:45
published: 2026-05-05T23:07:25.000-04:00
tags:
  - pub-network
state: "[[%wip]]"
sup:
  - "[[@Subjects]]"
type: index
banner: https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/Joyce_Kozloff-Stars_Over_Manhattan-cropped.png
banner_y: 20.0%
banner_icon: 🌐
pub-banner: https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/network-icon.svg
---

# Network

A network is a [[Graph]], but imagine there are _real_ entities and relationships.

> [!rmk]- Network Science and [[Graph Theory]]
>
> [[Graph Theory]] is a subfield of [[Math]] while network science is an engineering or interdisciplinary subject. Underneath, they share the same model, graphs or networks. But they focus on different research questions and adopt different approaches.
> Graph theory focuses on proving the (combinatorial) properties of graphs, while network science focuses on quantifying the structure and dynamics of complex systems on networks, and make predictions.
> Network science researchers are more interested in large-scale networks with an underlying generative mechanism, motivated by real-life systems such as [[Social Science|social]], [[Microeconomics|economic]], [[Information Theory|information]], physical, and biological systems, calling the use of [[Statistics|statistical]] methods.
> Graph theory focuses on structures that are more analytically treatable, while network science focuses on those observed in actual networks.

- Basic Concepts
  - [[Graph]]
    - [[Spectral Graph Theory]]
  - [[Branching]]
- Properties
  - [[Transitivity]]
  - [[Centrality]]
  - [[Assortativity]]
- [[Random Graph Model]]s
  - [[Erdos-Renyi Random Graph]]
  - [[Configuration Model]]
  - [[Chung–Lu Model]]
  - [[Stochastic Block Model]]
  - [[Random Geometric Graph]]
  - [[Watts-Strogatz Model]]
  - [[Preferential Attachment]]
  - [[Kleinberg Model]]
- [[Network Phenomena]]
- Applications
  - Model: $(\mathcal{V},\mathcal{E}, X)$ for various $X$
  - Question: What is the network effect and how does the network structure manifest?
  - [[Network Propagation]]: $X=$ (status, dynamics)
  - Network Game: $X=$ (payoff, strategy)
    - [[Routing Game|Congestion Game]]
    - [[Potential Game]]
    - [[Fictitious Play]]
  - Network Learning/Optimization: $X=$ (objective, decision, data)

## References

- M. Jackson. _Social and Economic Networks_. Princeton University Press, 2008.
- R. Durrett. _Random graph dynamics_. Cambridge University Press, 2007.
- M. Newman. _Networks_. Oxford University Press, second edition, 2018.
- MIT 6.7260 w/ Prof. Patrick Jaillet, Spring 2026.
