---
publish: true
created: 2024-02-02T04:44:24.170-05:00
modified: 2026-05-01T00:07:00.266-04:00
published: 2026-05-01T00:07:00.266-04:00
---

# Array Operations

[[Matlab Operations]]

---

MATLAB 中有两种 [[Matlab Arithmetic Operations]]: [[Matlab Matrix Operations]] 和 array operations.

Array operations 就是点运算, element-wise 运算, 区别于 [[Matlab Matrix Operations]] 的矩阵运算.

MATLAB 中的[[Matlab Math|数学]]运算函数, 除了是明确的矩阵运算, 主要默认是 array operations, 如函数 _sin_, _sqrt_, _exp_, _log_, 而对应的 [[Matlab Matrix Operations]] 一般名字有 `m` 加以区别, 如 _sqrtm_, _expm_, _logm_, _mtimes_, _mpower_.

## Operators

基本的双目或单目 array operations 都能通过[[Matlab Operator|运算符]]实现.

| Operator | Equivalent Function |
| -------- | ------------------- |
| `+`      | _plus_              |
| `-`      | _minus_             |
| `.*`     | _times_             |
| `./`     | _rdivide_           |
| `.\`     | _ldivide_           |
| `.^`     | _power_             |

## 说明

- 以上所有 array operations 都是 binary 运算, 运算对象尺寸需满足 [[Matlab Compatible Array Sizes]], 具体的运算过程为先将两个运算**扩展为同尺寸数组**, 然后再同索引元素逐元素运算
  - 如

    ```octave
    >> a = [1 2 3]; b = [1 2 3]';
    >> a .* b % 实际等于 repmat(a,3,1) .* repmat(b,1,3)
    ans =
        1     2     3
        2     4     6
        3     6     9
    ```

- 因为加减法 array operations 与矩阵运算一致, 故没有区别

- `A ./ B` 是以 _A_ 中元素为**分子**, _B_ 中元素为**分母**的除法

- `A .\ B` 是以 _A_ 中元素为**分母**, _B_ 中元素为**分子**的除法
