---
publish: true
created: 2024-02-02T04:44:24.178-05:00
modified: 2026-05-01T00:07:18.767-04:00
published: 2026-05-01T00:07:18.767-04:00
---

# zeros

[[Matlab Functions List]]

---

- `X = zeros` returns the scalar `0`
- `X = zeros(n)` returns an **_n_-by-_n_ matrix** of zeros
- `X = zeros([sz1,...,szN])` returns an _sz1_-by-...-by- _szN_ array of zeros
  - 方括号 `[]` 可省
- `X = zeros(___,typename)` returns an array of zeros of data type _typename_
  - For example, `zeros('int8')` returns a scalar, 8-bit integer `0`
- `X = zeros(___,'like',p)` returns an array of zeros like _p_; that is, of the same data type (class), sparsity, and complexity (real or complex) as _p_
  - You can specify `typename` or `'like'`, but not both.
