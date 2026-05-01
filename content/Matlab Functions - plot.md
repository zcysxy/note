---
publish: true
created: 2024-02-02T04:44:24.176-05:00
modified: 2026-05-01T00:07:18.530-04:00
published: 2026-05-01T00:07:18.530-04:00
---

# plot

[[Matlab Functions List]]

---

!! 例子见 [[Matlab Graphics - Line Plots]]

- `plot(X,Y)` creates a 2-D [[Matlab Graphics - Line Plots|line plot]] of the data in _Y_ versus the corresponding values in _X_
  - If _X_ and _Y_ are both vectors, then they must have equal length
  - If _X_ and _Y_ are both matrices, then they must have equal size, and it plots columns of _Y_ versus columns of _X_
  - If one of _X_ or _Y_ is a vector and the other is a matrix, then the matrix must have dimensions such that one of its dimensions equals the vector length
    - If the number of matrix rows equals the vector length, then the _plot_ function plots each matrix column versus the vector
    - If the number of matrix columns equals the vector length, then the function plots each matrix row versus the vector
    - If the matrix is square, then the function plots each **column** versus the vector.
  - If one of _X_ or _Y_ is a scalar and the other is either a scalar or a vector, then the function plots discrete points
    - To see the points you must specify a marker symbol

- `plot(X,Y,LineSpec)` sets the appearance of the plot by _LineSpec_
  - _LineSpec_ should be a **char vector** made up of
    - line style
    - marker symbol
    - color
  - 无顺序, 也无需包含全部三者
  - For example: `-.or`, `db`, `--mo`

- `plot(X1,Y1,...,Xn,Yn)` plots multiple _X_, _Y_ pairs using the same axes for all lines

- `plot(X1,Y1,LineSpec1,...,Xn,Yn,LineSpecn)` sets the line style, marker type, and color for each line
  - You can mix _X_, _Y_, _LineSpec_ triplets with _X_, _Y_ pairs, like `plot(X1,Y1,X2,Y2,LineSpec2,X3,Y3)`

- `plot(Y)` creates a 2-D line plot of the data in _Y_ versus the **index** of each value
  - If _Y_ is a vector, then the _x_-axis scale ranges from 1 to `length(Y)`
  - If _Y_ is a matrix, then the _plot_ function plots the columns of _Y_ versus their row number. The _x_-axis scale ranges from 1 to the number of rows in _Y_
  - If _Y_ is **complex**, then the _plot_ function plots the imaginary part of _Y_ versus the real part of _Y_
    - In this case `plot(Y)` is equivalent to `plot(real(Y),imag(Y))`

- `plot(Y,LineSpec)` sets the line style, marker symbol, and color

- `plot(___,Name,Value)` specifies line properties using one or more **_Name,Value_ pair arguments**
  - Name-value pair settings apply to all the lines plotted.

- `plot(ax,___)` creates the line in the axes specified by _ax_ instead of in the current axes (_gca_) [[!tocheck]]

- `h = plot(___)` returns a column vector of chart line objects
