---
publish: true
created: 2024-02-02T04:44:24.176-05:00
modified: 2026-05-01T00:07:18.562-04:00
published: 2026-05-01T00:07:18.562-04:00
---

# reshape

[[Matlab Functions List]]

---

- `B = reshape(A,sz1,...,szN)`
  - reshapes _A_ into a _sz1-by-...-by-szN_ array _B_ where _sz1, ...,szN_ indicates the **size** of each dimension
  - 要求 _A_ 与 _B_ 中元素的 linear index 一致
    - 本质上即 `A(:)` = `B(:)`
    - 自然 `numel(A)` = `numel(B)`
  - You can specify a single dimension size of `[]` to have the dimension size automatically calculated, such that the number of elements in B matches the number of elements in A
    - For example, if _A_ is a 10-by-10 matrix, then `reshape(A,2,2,[])` reshapes the 100 elements of _A_ into a 2-by-2-by-25 array
