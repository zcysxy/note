---
publish: true
created: 2026-05-07T21:20:37.470-04:00
modified: 2026-05-07T21:20:37.470-04:00
published: 2026-05-07T21:20:37.470-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# plot

- For examples, see [[Matlab Graphics - Line Plots]].

- `plot(X,Y)` creates a 2-D [[Matlab Graphics - Line Plots|line plot]] of the data in _Y_ versus the corresponding values in _X_
  - If _X_ and _Y_ are both vectors, they must have equal length
  - If _X_ and _Y_ are both matrices, they must have equal size, and `plot` plots columns of _Y_ versus columns of _X_
  - If one of _X_ or _Y_ is a vector and the other is a matrix, the matrix must have a dimension whose size equals the length of the vector
    - If the number of matrix rows equals the vector length, `plot` plots each matrix column versus the vector
    - If the number of matrix columns equals the vector length, `plot` plots each matrix row versus the vector
    - If the matrix is square, `plot` plots each **column** versus the vector
  - If one of _X_ or _Y_ is a scalar and the other is a scalar or a vector, `plot` plots discrete points
    - You must specify a marker symbol to see those points

- `plot(X,Y,LineSpec)` sets the appearance of the plot via _LineSpec_
  - _LineSpec_ is a **char vector** combining
    - line style
    - marker symbol
    - color
  - The components are unordered, and not all three need be present
  - For example: `-.or`, `db`, `--mo`

- `plot(X1,Y1,...,Xn,Yn)` plots multiple _X_, _Y_ pairs in the same axes

- `plot(X1,Y1,LineSpec1,...,Xn,Yn,LineSpecn)` sets line style, marker type, and color for each line
  - You can mix _X_, _Y_, _LineSpec_ triplets with bare _X_, _Y_ pairs, as in `plot(X1,Y1,X2,Y2,LineSpec2,X3,Y3)`

- `plot(Y)` creates a 2-D line plot of the data in _Y_ versus the **index** of each value
  - If _Y_ is a vector, the _x_-axis ranges from 1 to `length(Y)`
  - If _Y_ is a matrix, `plot` plots the columns of _Y_ versus their row numbers; the _x_-axis ranges from 1 to the number of rows
  - If _Y_ is **complex**, `plot` plots the imaginary part versus the real part
    - In this case `plot(Y)` is equivalent to `plot(real(Y),imag(Y))`

- `plot(Y,LineSpec)` sets line style, marker symbol, and color

- `plot(___,Name,Value)` specifies line properties using one or more **_Name,Value_ pair arguments**
  - Name-value settings apply to every line plotted

- `plot(ax,___)` plots into the axes specified by _ax_ instead of the current axes (`gca`) [[!tocheck]]

- `h = plot(___)` returns a column vector of chart line objects
