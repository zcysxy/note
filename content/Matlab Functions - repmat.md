---
publish: true
created: 2024-02-02T04:44:24.176-05:00
modified: 2026-05-01T00:07:18.535-04:00
published: 2026-05-01T00:07:18.535-04:00
---

# repmat

[[Matlab Functions List]]

---

- `B = repmat(A,<[r1,...,rN]>)` specifies a list of **scalars** _r1, ..., rN_, that describes how copies of A are arranged in each dimension
  - When _A_ has _N_ dimensions, the size of B is `size(A).*[r1 ... rN]`
  - For example, `repmat([1 2; 3 4],2,3)` returns a 4-by-6 matrix
