---
publish: true
created: 2024-02-02T04:44:24.174-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# circshift

[[Matlab Functions List]]

---

- `Y = circshift(A,K)` circularly shifts the elements in array _A_ by _K_ positions
  - If _K_ is an **integer**, then _circshift_ shifts along the first dimension of _A_ whose size does not equal 1
  - If _K_ is a **vector** of integers, then each element of _K_ indicates the shift amount in the corresponding dimension of _A_
- `Y = circshift(A,K,dim)` circularly shifts the values in array _A_ by _K_ positions along dimension _dim_
  - _K_ and _dim_ must be **scalars**
