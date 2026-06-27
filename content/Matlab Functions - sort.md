---
publish: true
created: 2026-05-08T01:28:23.000Z
modified: 2026-05-08T01:28:23.000Z
published: 2026-05-08T01:28:23.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# sort

- `B = sort(A,<dim>,<dir>)` sorts the elements of _A_ along dimension _dim_

  - _dir_ sets the sort direction; valid values are `'ascend'` or `'descend'`, defaulting to ascending (`'ascend'`)
  - _dim_ must be an **integer**; it defaults to the first non-singleton dimension
  - "Along dimension _dim_" means (for the ascending case):

  $$$\begin{aligned}
      \bm{A}(x_1,\underset{dim\text{th arg}}{\cdots,1,\cdots},x_n) &\leq \bm{A}(x_1,\underset{dim\text{th arg}}{\cdots,2,\cdots},x_n)\\
      & \leq \cdots\\
      & \leq \bm{A}(x_1,\underset{dim\text{th arg}}{\cdots,end,\cdots},x_n)
  \end{aligned}$$

  - Special cases:
      - If *A* is a **vector**, `sort(A)` sorts the elements of the vector
      - If *A* is a **matrix**, `sort(A)` treats each column of *A* as a vector and sorts **each column**
      - If *A* is a matrix, `sort(A,2)` sorts the elements of each row
  $$$
- `B = sort(___,Name,Value)` specifies additional sort parameters
  - For example, `sort(A,'ComparisonMethod','abs')` sorts the elements of _A_ by magnitude
- `[B,I] = sort(___)`
  - _I_ is the **index array** describing how _A_ was rearranged
    - For a vector, `B = A(I)`
    - For higher-dimensional arrays, recovering the sorted array from _I_ alone requires a more involved indexing pattern
