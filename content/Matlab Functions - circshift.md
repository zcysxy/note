---
publish: true
created: 2026-05-07T21:40:50.222-04:00
modified: 2026-05-07T21:40:50.222-04:00
published: 2026-05-07T21:40:50.222-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# circshift

- `Y = circshift(A,K)` circularly shifts the elements in array _A_ by _K_ positions
  - If _K_ is an **integer**, then `circshift` shifts along the first dimension of _A_ whose size does not equal 1
  - If _K_ is a **vector** of integers, then each element of _K_ indicates the shift amount in the corresponding dimension of _A_
- `Y = circshift(A,K,dim)` circularly shifts the values in array _A_ by _K_ positions along dimension _dim_
  - _K_ and _dim_ must be **scalars**
