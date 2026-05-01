---
publish: true
created: 2024-02-02T04:44:24.177-05:00
modified: 2026-05-01T00:07:18.599-04:00
published: 2026-05-01T00:07:18.599-04:00
---

# scatter

[[Matlab Functions List]]

---

!! 例子请见 [[Matlab Graphics - Scatter Plots]]

- `scatter(x,y,<sz>,<c>)` creates a scatter plot with **circles** at the locations specified by the vectors _x_ and _y_, in the size and color specified by _sz_ and _c_
  - Size:
    - To plot each circle with equal size, specify _sz_ as a scalar
    - To plot each circle with a different size, specify _sz_ as a vector with length equal to the length of _x_ and _y_
  - Color:
    - To plot all circles with the same color, specify _c_ as a color name or an RGB triplet
    - To use varying color, specify _c_ as a **vector** or a three-column matrix of RGB triplets
      - 这里的 vector 对应的是 [[MATLAB Graphics Colormap]] 中的颜色的索引
- `scatter(___,'filled')` fills in the circles
- `scatter(___,mkr)` specifies the marker type
- `scatter(___,Name,Value)` modifies the scatter chart using one or more name-value pair arguments
- `scatter(ax,___)` plots into the axes specified by ax instead of into the current axes
- `s = scatter(___)` returns the **Scatter object**
