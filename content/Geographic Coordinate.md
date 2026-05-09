---
publish: true
aliases: Latitude & Longitude
title: Geographic Coordinate
created: 2022-11-10T19:15:08
modified: 2022-12-12T01:28:28
published: 2026-05-09T18:20:04.900-04:00
tags:
  - pub-edav
type: note
dg-publish: true
sup:
  - "[[EDAV]]"
state: done
---

# Geographic Coordinate

Geographic coordinate uses **latitude and longitude** to locate a position.
Latitude and longitude are just like x-y axes, so you can build all kinds of graphs with them, like [[Scatterplot]] and [[Density Contour Plot]].

- In a geographic coordinate, **latitude** comes first. But it is the north-south direction. Therefore, there is a cross between lat-long and x-y coordinates. ^5kd68p

There are also some special graphs for geographic coordinate system, but with controversial performance, like

- Radius Map: use a circle with a radius dependent on an additional variable to represent a dot
- Push Pin Map: use a push pin icon to represent a dot

## Implementation

### ggmap

[[R Package|Package]] `ggmap` can generate real-world maps. It is compatible with [[ggplot2]], so you can easily add layers on top of the base map. Related functions:

- `get_stamenmap`: get a US map
  - can be zoomed using option `bbox`, `zoom`, and the latitude-longitude range of the area
- `get_googlemap`: get the map of the specified latitude-longitude range from Google map
- `ggmap`: render the map

### sf and tmap

![[Spatial Data#sf and tmap]]
