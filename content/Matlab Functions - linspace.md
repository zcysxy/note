---
publish: true
created: 2024-02-02T04:44:24.175-05:00
modified: 2026-05-01T00:08:27.466-04:00
published: 2026-05-01T00:08:27.466-04:00
tags:
  - pub-matlab
---

# linspace

[[Matlab Functions List]]

---

- `y = linspace(x1,x2)` returns a row vector of ++100++ evenly spaced points between _x1_ and _x2_
- `y = linspace(x1,x2,n)` generates n points. The spacing between the points is (_x2_-_x1_)/(_n_-1)

<!--endList-->

- 与 operator `:` 不同的是该函数控制的是分割数, 而非分割步长
- 且总是包含 _end_ (这里为 _x2_)
- 生成的数组长度为 _n_ (默认为 100)
