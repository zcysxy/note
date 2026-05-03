---
publish: true
created: 2024-02-02T04:44:24.183-05:00
modified: 2026-05-01T00:08:28.000-04:00
published: 2026-05-01T00:08:28.000-04:00
tags:
  - pub-matlab
---

# Numeric

[[Matlab Types]]

---

## Basics

- Numeric array 数值数组是 MATLAB 中最基本, 最常用, 最重要的数据类型, 可以说 MATLAB 就是为了处理数值数组而创造出来的
- 数值默认储存为 (占用 64 位内存的) 双精度  double
  - 此类数值的 class 就是 **double**
  - 之后默认++数值就是 double 类++
  - double 相对精度是 _eps_ (MATLAB 的一个预定义变量)，大约保持16 位有效数字
- 数值默认表示为十进制，短表示 (`format short`, 保留小数点后 4 位)
  - 可在 [[Matlab Desktop|Command Window]] 中用 `format long` 命令显示长表示 (保留小数点后 15 位)
- 数值绝对值允许范围大致为 $[10^{-308}, 10^{308}]$
- 合法数值记述:
  - 整数 `-99`
    - 允许前面有多余的零, 如 `03` = `3`
  - 小数 `9. 456`
  - 科学计数法 `1. 3e-3` 或 `1E3`

## 整数

- 可通过函数 _int8_, _uint16_ 等将浮点数转换为整数, 转换规则为**远离 0 的四舍五入**
  - ==这是 MATLAB 中默认的取整方式==
- 整数与整数之间的运算只有相同类型时才能进行, 结果仍然是这种整数类型
- 任何类型整数可以和 **double** 浮点数 (single 不行) 进行运算, 结果是这种**整数类型**, 取整采用默认取整方式
- 新版本 MATLAB 中取整相关函数, 如 _floor_, _round_ 等返回的是 **double** 类而非整数类

## 浮点数

- 浮点数默认为 double 类, 可通过函数 _single_ 和 _double_ 进行与 single 类之间的转换
- double 类与其他类运算结果结果类型
  - 与逻辑类, 字符类返回结果为 **double** 类
  - 与整数类返回结果为相应的**整数**类
  - 与 single 类返回结果为 **single** 类
- single 类与**整数**之外类型计算结果均为 **single** 类
- 常数 _NaN_ 和 _Inf_ 也是 double 类
  - `NaN == NaN` = 0
  - `Inf == Inf` = 1
