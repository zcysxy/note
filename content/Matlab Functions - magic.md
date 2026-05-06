---
publish: true
created: 2024-02-02T04:44:24.176-05:00
modified: 2026-05-01T00:08:27.503-04:00
published: 2026-05-01T00:08:27.503-04:00
tags:
  - pub-matlab
---

# magic

[[Matlab Functions List]]

---

- `M = magic(n)` returns an **_n_-by-_n_ matrix** constructed from the integers $\{1, ..., n\}$ with **equal row and column sums**
  - _n_ 须为大于等于 3 的 scalar
  - 每行每列和都为 $(1 + n^2)\cdot n/2$
  - _M_ class 仍是 double
