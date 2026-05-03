---
publish: true
created: 2024-02-02T04:44:24.175-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# logspace

[[Matlab Functions List]]

---

- `y = logspace(a,b)` generates a row vector _y_ of ++50++ logarithmically (等比的) spaced points between decades $10^a$ and $10^b$
- `y = logspace(a,b,n)` generates _n_ points between decades $10^a$ and $10^b$

<!--endList-->

- 生成数组总是包含 _start_ ($10^a$) 和 _end_ ($10^b$)
- 生成数组长度为 _n_
