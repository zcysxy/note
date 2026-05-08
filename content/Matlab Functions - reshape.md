---
publish: true
created: 2026-05-07T21:28:08.316-04:00
modified: 2026-05-07T21:28:08.316-04:00
published: 2026-05-07T21:28:08.316-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# reshape

- `B = reshape(A,sz1,...,szN)`
  - Reshapes _A_ into an _sz1_-by-...-by-_szN_ array _B_, where _sz1, ..., szN_ gives the **size** of each dimension
  - _A_ and _B_ must agree on the linear-index ordering of their elements
    - Equivalently, `A(:)` = `B(:)`
    - Naturally, `numel(A)` = `numel(B)`
  - You can specify a single dimension size as `[]` to have it computed automatically so the element count of _B_ matches that of _A_
    - For example, if _A_ is a 10-by-10 matrix, then `reshape(A,2,2,[])` reshapes the 100 elements of _A_ into a 2-by-2-by-25 array
