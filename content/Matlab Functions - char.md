---
publish: true
created: 2024-02-02T04:44:24.173-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# char

[[Matlab Functions List]]

---

- `char(A1,...,An)`
  1. 填入 string arrays, [[Matlab Types - Cell|cell]] arrays, categorical arrays 时只能填入 **1 个** 参数
     - 将 _A1_ 转换为 [[Matlab Types - Character|char]] 类字符
  2. 填入 [[Matlab Types - Character|char]] arrays
     - 不会去除 white-space
     - 不要求填入字符数组长度相等, 会自动在每行字符数组右端补齐空格使长度都与最长的数组相等
  3. 填入 [[Matlab Types - Numeric|numeric]] arrays
     - 先将 **ASCII 编码** _$\lfloor{A_i}\rfloor$_ 转换为字符
     - 再按 2 方式竖直连接字符
  4. 填入 empty array
     - 按 2 方式用空格补齐长度
