---
publish: true
created: 2024-02-02T04:44:24.182-05:00
modified: 2026-05-01T00:08:28.178-04:00
published: 2026-05-01T00:08:28.178-04:00
tags:
  - pub-matlab
---

# Set Operations

[[Matlab Operations]]

---

MATLAB 没有所谓集合 set 数据类型, 这里的集合就是指的 [[Matlab Array]], 其中元素可以为任意数据类型.

## Functions

MATLAB 没有集合运算的运算符, 只有通过简单函数实现运算.

| Functions     | Description                                  |
|---------------|----------------------------------------------|
| _intersect_   | Set intersection of two arrays               |
| _ismember_    | Array elements that are members of set array |
| _setdiff_     | Set difference of two arrays                 |
| _setxor_      | Set exclusive OR of two arrays               |
| _union_       | Set union of two arrays                      |
| _unique_      | Unique values in array                       |
| _ismembertol_ | Members of set within tolerance              |
| _uniquetol_   | Unique values within tolerance               |
| _join_        | Combine two tables or timetables by rows using key variables |
| _innerjoin_   | Inner join between two tables or timetables  |
| _outerjoin_   | Outer join between two tables or timetables  |

/! Tolerance

- MATLAB 中一个常见的问题就是因为浮点数精度的原因, 两个数字很难完全相等, 所以可以用 _...tol_ 函数来接受允许误差
- MATLAB 默认 tolerance 为
  - single 类: **1e-6**
  - double 类: **1e-12**
