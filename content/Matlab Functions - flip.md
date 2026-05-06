---
publish: true
created: 2024-02-02T04:44:24.174-05:00
modified: 2026-05-01T00:08:27.352-04:00
published: 2026-05-01T00:08:27.352-04:00
tags:
  - pub-matlab
---

# flip

[[Matlab Functions List]]

---

- `flip(A,<dim>)`
  - 沿着维&#x6570;_&#x64;i&#x6D;_&#x7FFB;转数&#x7EC4;_&#x41;_
  - _dim_ 默认为大小**不为 1** 的第一个维数
    \*如 vector 就是沿着**长度方向**反转
    - 如 (非 vector) matrix 就是**上下翻转**, 即行向量顺序颠倒
  - 特别的, 对于非 vector matrix
    - `flip(A,1)` = `flipud(A)`
    - `flip(A,2)` = `fliplr(A)`
