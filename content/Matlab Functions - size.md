---
publish: true
created: 2024-02-02T04:44:24.177-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# size

[[Matlab Functions List]]

---

- `sz = size(A)` returns a **row vector** whose elements are the lengths of the corresponding dimensions of _A_
  - For example, if _A_ is a 3-by-4 matrix, then `size(A)` = `[3 4]`
  - 对于 empty array, vector 或 scalar, 函数仍返回两个元素的 vector
  - If A is a table or timetable, then `size(A)` returns a two-element row vector consisting of the number of rows and the number of table variables [[!tocheck]]
- `szdim = size(A,dim)` returns the length of dimension _dim_ when _dim_ is a **positive integer scalar**
- `szdim = size(A,[dim1,dim2,…,dimN])` returns the lengths of dimensions _dim1, dim2, …, dimN_ in the **row vector** _szdim_
  - 方括号 `[]` 可省略
- `[sz1,...,szN] = size(__)`
  - 括号内可填上面三种形式
    - 填第 2, 3 种形式时, 前后元素数目必须一致
    - 填第 1 种形式时, 若 _A_ 维数大于 _N_, 则 _szN_ 为剩余维数**长度之积**
  - 类似于 [[Python Sequence Unpacking]]
