---
publish: true
created: 2026-05-07T21:20:11.046-04:00
modified: 2026-05-07T21:20:11.046-04:00
published: 2026-05-07T21:20:11.046-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# flip

- `flip(A,<dim>)`
  - Flips array _A_ along dimension _dim_
  - _dim_ defaults to the first dimension whose size is **not 1**
    - For a vector, this flips along the **length direction**
    - For a (non-vector) matrix, this is a **top-bottom flip**—row order is reversed
  - In particular, for a non-vector matrix
    - `flip(A,1)` = `flipud(A)`
    - `flip(A,2)` = `fliplr(A)`
