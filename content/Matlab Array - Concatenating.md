---
publish: true
created: 2024-02-02T04:44:24.170-05:00
modified: 2026-05-01T00:08:21.721-04:00
published: 2026-05-01T00:08:21.721-04:00
tags:
  - pub-matlab
---

# Matlab Array - Concatenating

sup: [[Matlab Array]]

---

!! 以下所有操作均返回**新数组**

## 一般连接

!! 所有被连接的数组的大小都要与连接方式匹配, 否则报错

- 水平连接
  - `[A1 A2 ...]`
  - 函数 _horcat_: `horzcat(A1,A2,...)`
- 竖直连接
  - `[A1; A2; ...]`
  - 函数 _vertcat_: `vertcat(A1,A2,...)`
- 任意维数连接
  - 函数 _cat_: `cat(dim,A1,A2,...)` concatenates _A1, ..., An_ along dimension _dim_
    - _dim_ 可以大于被连接数组的维数, 从而创建**高维数组**, 且未被指定的中间维数自动为 1

!! 对于多维数组, 水平连接相当于 _dim = 1_, 竖直连接相当于 _dim = 2_

## Block Operation

以下函数一般以 **matrix** 为参数, 将它们作为块矩阵, 运算生成新数组

- 块对角矩阵 [[Matlab Functions - blkdiag|blkdiag]]
- 复制块矩阵 [[Matlab Functions - repmat|repmat]]
- [[Kronecker Tensor Product]] _kron_: `kron(A,B)`
