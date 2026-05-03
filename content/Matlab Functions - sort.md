---
publish: true
created: 2024-02-02T04:44:24.177-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# sort

[[Matlab Functions List]]

---

- `B = sort(A,<dim>,<dir>)` 将 _A_ 中元素沿维数 _dim_ 排列

  - _dir_ 指示排列方向, 可填 `'ascend'` 或 `'descend'`, 默认为升序 `'ascend'`
  - _dim_ 需为**整数**, 默认为第一个非 1 的维数
  - 沿维数 _dim_ 的意思是 (若为升序):

  $$$\begin{aligned}
      \bm{A}(x_1,\underset{dim\text{th arg}}{\cdots,1,\cdots},x_n) &\leq \bm{A}(x_1,\underset{dim\text{th arg}}{\cdots,2,\cdots},x_n)\\
      & \leq \cdots\\
      & \leq \bm{A}(x_1,\underset{dim\text{th arg}}{\cdots,end,\cdots},x_n)
  \end{aligned}$$

  * 特例:
      * If *A* is a **vector**, then `sort(A)` sorts the vector elements
      * If *A* is a **matrix**, then `sort(A)` treats the columns of *A* as vectors and sorts **each column**
      * if *A* is a matrix, then `sort(A,2)` sorts the elements of each row
  $$$
- `B = sort(___,Name,Value)` specifies additional parameters for sorting
  - For example, `sort(A,'ComparisonMethod','abs')` sorts the elements of _A_ by magnitude.
- `[B,I] = sort(___)`
  - _I_ 为描述 _A_ 重排情况的**索引数组**
    - 对于 vector 有 _B_ = `A(I)`
    - 对于高维数组则需要更复杂的操作才能从 _I_ 得到排序后数组
