---
publish: true
title: Ridgeline
created: 2022-10-21T23:11:54
modified: 2022-12-12T15:09:36
published: 2026-05-09T18:20:05.378-04:00
tags:
  - pub-edav
aliases:
type: note
dg-publish: true
sup:
  - "[[EDAV]]"
state: done
---

# Ridgeline

A ridgeline plot is a way of visualizing multiple [[Density Curve|densities]] in a single plot. This plot type is useful for visualizing data that has many different levels of density, such as data that has been binned. Ridgeline plots are similar to area charts, but they emphasize the shape of the data more than the area.

Ridgelines show **modes** and **movement** better.
But generally, ridgelines won't provide more insight than other graphs. It even loses information since it is a smooth approximation of the data and doesn't provide exact statistics like [[Boxplot]].

![](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20221210200107.png)

`ggridges` is an implementation for ridgelines.
