---
publish: true
created: 2026-05-08T01:20:29.000Z
modified: 2026-05-08T01:20:29.000Z
published: 2026-05-08T01:20:29.000Z
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
