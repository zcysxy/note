---
publish: true
created: 2022-02-22T20:20:09
modified: 2026-05-07T21:15:19
published: 2026-05-08T02:21:54.000Z
tags:
  - pub-matlab
type: index
sup:
  - "[[MATLAB]]"
state: done
---

# Graphics

> [!impt] Library
> [MATLAB Plot Gallery](https://www.mathworks.com/products/matlab/plot-gallery.html)

MATLAB ships with a powerful graphics GUI that makes it easy to add, remove, and edit titles, labels, legends, and axes. The same operations can also be performed directly through **functions**.

## Plot Categories

- [[Matlab Graphics - Line Plots]]
- [[Matlab Graphics - Scatter Plots]]
- [[Matlab Graphics - 3D Plots]]
- Bar graph
- Stairstep graph

## Other Elements

- [[Matlab Graphics - Axes]]
- [[Matlab Graphics - Text]]
- [[MATLAB Graphics Colormap]]

### Title, Axis Labels, and Legend

The following functions add a title, axis labels, and a legend to an **existing** chart:

- `title`
- `xlabel`
- `ylabel`
- `zlabel`
- `legend`

These all accept **char** arguments and can render $\TeX$. `legend` additionally accepts a cell array of char vectors.

> Pass the name-value pair `'Interpreter', 'latex'` to render with $\TeX$.

## Useful Tips

- Use `exportgraphics` to export graphs.
