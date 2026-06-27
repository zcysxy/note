---
publish: true
created: 2026-05-08T01:41:07.000Z
modified: 2026-05-08T01:41:07.000Z
published: 2026-05-08T01:41:07.000Z
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
