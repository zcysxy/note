---
publish: true
created: 2022-02-22T20:20:09
modified: 2023-07-30T22:25:45
published: 2026-05-01T00:08:27.795-04:00
tags:
  - pub-matlab
type: index
sup:
  - "[[MATLAB]]"
---

# Graphics

> [!impt] Library
> [MATLAB Plot Gallery](https://www.mathworks.com/products/matlab/plot-gallery.html)

MATLAB 有强大的图形 GUI, 可以方便的进行 title, lables, legend, axis 的添加, 删减, 修改性质, 参数等操作. 这些操作当然也可以直接通过**函数**指令来完成.

## 图形分类

- [[Matlab Graphics - Line Plots]]
- [[Matlab Graphics - Scatter Plots]]
- [[Matlab Graphics - 3D Plots]]
- Bar graph
- Stairstep graph

## 其他要素

- [[Matlab Graphics - Axes]]
- [[Matlab Graphics - Text]]

### Title, Axis Labels and Legend

用以下函数对**现有**图标加上标题, 坐标轴标签和图示

- _title_
- _xlable_
- _ylable_
- _zlable_
- _legend_

以上函数都接受 **char** 类参数, 并且可编译 $\TeX$ 语言. _legend_ 还接受 cell array of char vectors.

> 添加参数对 `'Intepreter', 'latex'`  来编译 $\TeX$

## Useful Tips

- Use `exportgraphics` to export graphs.
