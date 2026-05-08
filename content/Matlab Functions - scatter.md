---
publish: true
created: 2026-05-07T21:28:14.268-04:00
modified: 2026-05-07T21:28:14.268-04:00
published: 2026-05-07T21:28:14.268-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# scatter

- For examples, see [[Matlab Graphics - Scatter Plots]].

- `scatter(x,y,<sz>,<c>)` creates a scatter plot with **circles** at the locations specified by the vectors _x_ and _y_, sized by _sz_ and colored by _c_
  - Size:
    - To plot every circle at the same size, specify _sz_ as a scalar
    - To use a different size per point, specify _sz_ as a vector with the same length as _x_ and _y_
  - Color:
    - To use a single color for every circle, specify _c_ as a color name or an RGB triplet
    - For varying colors, specify _c_ as a **vector** or a three-column matrix of RGB triplets
      - Here a vector indexes into the [[MATLAB Graphics Colormap]]

- `scatter(___,'filled')` fills in the circles

- `scatter(___,mkr)` specifies the marker type

- `scatter(___,Name,Value)` modifies the chart using one or more name-value pair arguments

- `scatter(ax,___)` plots into the axes specified by _ax_ instead of the current axes

- `s = scatter(___)` returns the **Scatter object**
