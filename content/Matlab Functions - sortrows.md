---
publish: true
created: 2024-02-02T04:44:24.178-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# sortrows

[[Matlab Functions List]]

---

- `B = sortrows(A,<col>)` 对 **matrix** 中的 **rows** 按照 **vector** _col_ 指定的 _column(s)_ 进行排序
  - _col_ 默认先比较第一列元素, 遇到两行第一列对应元素相同时, 比较它们的第二列, 以此类推
  - 若填了 _col_, 则先比较第 _col(1)_ 列元素, 再比较 _col(2)_ 列..., 若 _col_ 指定列的元素都相同则保留原顺序

以下 syntax 用法同 [[Matlab Functions - sort]]

- `B = sortrows(___,direction)`
- `B = sortrows(___,Name,Value)`
- `[B,index] = sortrows(___)`
