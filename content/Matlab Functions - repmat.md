---
publish: true
created: 2026-05-07T21:41:07.359-04:00
modified: 2026-05-07T21:41:07.359-04:00
published: 2026-05-07T21:41:07.359-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# repmat

- `B = repmat(A,<[r1,...,rN]>)` takes a list of **scalars** _r1, ..., rN_ that describe how copies of _A_ are arranged in each dimension
  - When _A_ has _N_ dimensions, the size of _B_ is `size(A).*[r1 ... rN]`
  - For example, `repmat([1 2; 3 4],2,3)` returns a 4-by-6 matrix
