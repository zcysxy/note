---
publish: true
created: 2026-05-07T21:28:34.676-04:00
modified: 2026-05-07T21:28:34.676-04:00
published: 2026-05-07T21:28:34.676-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# zeros

- `X = zeros` returns the scalar `0`
- `X = zeros(n)` returns an **_n_-by-_n_ matrix** of zeros
- `X = zeros([sz1,...,szN])` returns an _sz1_-by-...-by-_szN_ array of zeros
  - The brackets `[]` may be omitted
- `X = zeros(___,typename)` returns an array of zeros of data type _typename_
  - For example, `zeros('int8')` returns a scalar 8-bit integer `0`
- `X = zeros(___,'like',p)` returns an array of zeros like _p_; that is, with the same data type (class), sparsity, and complexity (real or complex) as _p_
  - You may specify `typename` or `'like'`, but not both
