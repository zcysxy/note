---
publish: true
created: 2022-02-22T20:20:09
modified: 2022-04-03T15:54:09
published: 2026-05-01T00:08:28.031-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Matrix Operations

- 此文档 matrices 为**二维数值数组**, 包括 scalars 和 vectors

MATLAB 中有两种 [[Matlab Arithmetic Operations]]: matrix operations 和 [[Matlab Array Operations]].

Matrix Operations 就是 [[Linear Algebra]] 中的矩阵操作, 区别于 [[Matlab Array Operations]] 的元素与元素之间的运算.

## Operators

基本的双目或单目矩阵数值运算都能通过[[Matlab Operator|运算符]]实现.

| Operator | Equivalent Function | Description                 | Arguments                 |
| -------- | ------------------- | --------------------------- | ------------------------- |
| `+`      | _plus_              | addition                    | binary, compatible arrays |
| `-`      | _minus_             | subtraction                 | binary, compatible arrays |
| `*`      | _mtimes_            | multiplication              | binary, matrices          |
| `/`      | _mrdivide_          | right division              | binary, matrices          |
| `\`      | _mldivide_          | left division               | binary, matrices          |
| `^`      | _mpower_            | powers                      | binary, matrices          |
| `'`      | _ctranspose_        | complex conjugate transpose | single, matrices          |
| `.'`     | _transpose_         | non conjugate transpose     | single, matrices          |

## 说明

- 以上表格中 `compatible arrays` 指的是运算对象可以是 N-D arrays, 只要满足 [[Matlab Compatible Array Sizes]]
- `matrices` 指的是一般矩阵运算和标量运算
  - 如 `A * B` 要满足 _A_ 列数与 _B_ 行数相等
  - 或 `c * B`, `A * c` 中 _c_ 为 scalar
- 也可以看出, 所有运算对象须为 matrices 的运算对应函数都有 `m`, 表示为 "矩阵运算"
- 加法 `+` 和减法 `-` 对于 matrix operations 和 [[Matlab Array Operations|array operations]] 没有区别
- 乘法 `*` 只要有一个运算对象是 scalar, 则相当于 `.*`
- **右除** `B / A` 即 $\boldsymbol{BA}^{-1}$
  - 又等价于利用求逆函数 _inv_: `B * inv(A)`
  - _A_ 为 scalar 时相当于 `./`
  - 特别地, _A_ 可为**非方阵**, 此时相当于利用**广义逆函数** _pinv_: `B * pinv(A)`
- **左除** `A \ B` 即 $\boldsymbol{A}^{-1}B$
  - 又等价于利用求逆函数 _inv_: `inv(A) * B`
  - _A_ 为 scalar 时相当于 `.\`
  - 特别地, _A_ 可为**非方阵**, 此时相当于利用**广义逆函数** _pinv_: `pinv(A) * B`
- **幂次** 要求至少一个运算对象为 scalar (下用小写字母表示)
  - `a ^ B` 即 $e^{(\ln a)\boldsymbol{B}}$
    - 即相当于**矩阵指数函数** _expm_: `expm(log(a) * B)`
    - ++**特别注意**++
      - 这里幂次运算符的计算公式是$\boldsymbol{V}2^{\boldsymbol{D}}\boldsymbol{V}^{-1}$, 其中 $\boldsymbol{V,D}$ 分别是以 $\boldsymbol{B}$ 特征向量为列向量的矩阵和特征值为对角线的矩阵, 即 $\boldsymbol{B} = \boldsymbol{V}\boldsymbol{D}\boldsymbol{V}^{-1}$
      - 因此这种算法要求 $\boldsymbol{B}$ 的特征向量线性无关, 所以 $\boldsymbol{V}$ 才可逆
      - 而函数 _expm_ 的计算公式就是 $\sum\_{k=0}^\infty \frac{1}{k!}\boldsymbol{B}^k$, 对 $\boldsymbol{B}$ 无任何要求
      - 因此 `^` 可能与函数 _expm_ 结果不一致, 特别地, `^` 会报错
  - `A ^ a` 即 $\lim\_{\mathbb{Q}\ni q\to a} \boldsymbol{A}^q$
  - `a ^ b` 相当于 `a .^ b`
- 转置 `.'` 是唯一有句号 `.` 但不是 [[Matlab Array Operations]] 的矩阵运算符
