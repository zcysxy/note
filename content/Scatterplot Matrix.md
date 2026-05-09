---
publish: true
title: Scatterplot Matrix
created: 2022-10-13T01:12:05
modified: 2022-10-13T01:37:30
published: 2026-05-09T18:20:05.440-04:00
tags:
  - pub-edav
aliases:
type: note
dg-publish: true
sup:
  - "[[EDAV]]"
state: done
related:
  - "[[Scatterplot]]"
---

# Scatterplot Matrix

If we want to show the relationships between $n \geq 2$ variables $\{ x_i \}_{i=1}^{n}$ using [[Scatterplot]]s, we need $\sum_{i=1}^{n}\sum_{j>i}^{n} 1 = n(n-1) /2$ scatterplots. If we plot $x _i \sim x_j$ and  $x_j \sim x _i$ as two different plots, then we have $n^{2} - n$ plots. Then adding labels, we have a scatterplot matrix.

![](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20221013011906.png)

- When passing multiple variables to the [[R]] built-in function `plot`, it will create a scatterplot matrix.
- While this is quite useful for personal exploration of a dataset, it is **not** recommended for presentation purposes. Something called the [Hermann grid illusion](https://en.wikipedia.org/wiki/Grid_illusion) makes this plot very difficult to examine.

Other implementations

- `ggpairs()` in `GGally`
- `splom()` in `lattice`
