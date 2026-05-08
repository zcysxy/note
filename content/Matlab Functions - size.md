---
publish: true
created: 2026-05-07T21:28:18.315-04:00
modified: 2026-05-07T21:28:18.315-04:00
published: 2026-05-07T21:28:18.315-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# size

- `sz = size(A)` returns a **row vector** whose elements are the lengths of the corresponding dimensions of _A_
  - For example, if _A_ is a 3-by-4 matrix, then `size(A)` = `[3 4]`
  - For an empty array, vector, or scalar, `size` still returns a two-element vector
  - If _A_ is a table or timetable, `size(A)` returns a two-element row vector consisting of the number of rows and the number of table variables [[!tocheck]]
- `szdim = size(A,dim)` returns the length of dimension _dim_ when _dim_ is a **positive integer scalar**
- `szdim = size(A,[dim1,dim2,…,dimN])` returns the lengths of dimensions _dim1, dim2, …, dimN_ as a **row vector** _szdim_
  - The brackets `[]` may be omitted
- `[sz1,...,szN] = size(__)`
  - The argument may take any of the three forms above
    - For the second and third forms, the number of outputs on the LHS must match the number of dimensions queried
    - For the first form, when _A_ has more than _N_ dimensions, _szN_ is the **product of the lengths** of the remaining dimensions
  - Behaves like [[Python Sequence Unpacking]]
