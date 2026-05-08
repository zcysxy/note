---
publish: true
created: 2026-05-07T21:20:29.892-04:00
modified: 2026-05-07T21:20:29.892-04:00
published: 2026-05-07T21:20:29.892-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# magic

- `M = magic(n)` returns an **_n_-by-_n_ matrix** built from the integers $\{1, ..., n^2\}$ with **equal row and column sums**
  - _n_ must be a scalar ≥ 3
  - Every row and column sums to $(1 + n^2)\cdot n/2$
  - The class of _M_ is `double`
