---
publish: true
created: 2022-05-28T03:34:21
modified: 2023-02-09T13:25:40
published: 2026-05-01T00:08:21.734-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Array]]"
state: done
---

# Matlab Array - Creating

## Creating

- 以下方法为直接创建新数组的方法, 不包括组合, 连接, 裁剪已有数组产生新数组的方法

### 直接创建

一般使用方括号 `[]`, 逗号 `,` 或空格, 以及分号 `;` 来创建数组

- `[]` 中给出数组的所有元素
- 同**一行**中的元素间用 `,` 或空格分隔
- 不同行之间用 `;` 分隔

### 行向量

- 等差数列
  - Operator `:`: `<[start:<step>:end]>`
    - 三个参数为 double 类型
    - _step_ 默认为 1
    - _end_ 无需大于等于 _start_, 不过此时需要 _step_ 需为负数, 否则生成空数组
    - 生成数组第一个元素为 _start_, 最后一个元素为 (_start_ + \[(_end_ - _start_) / _step_] \* _step_)
  - 函数 [[Matlab Functions - linspace|linspace]]
- 等比数列
  - 函数 [[Matlab Functions - logspace|logspace]]

### 列向量

- 转置 operator `'`

### 二维数组

```octave
A = [1 2 3; 2 5 6; 1 4 5];
B = [1:5; linspace(3, 10, 5); 3 5 2 6 4];
C = [[1:3]' linspace(2, 3, 3)' [3 5 6]'];
```

### 特殊数组

- 0-数组: 函数 [[Matlab Functions - zeros]]
- 1-数组: 函数 _ones_
  - 用法完全同 [[Matlab Functions - zeros|zeros]], 0 换成 1
- 单位数组: 函数 _eye_
  - 用法完全同 [[Matlab Functions - zeros|zeros]], 主对角线上为 1, 其余为 0
  - 但不能生成多维 (高于二维) 数组
- 均匀分布随机数组: 函数 _rand_
  - 用法完全同 [[Matlab Functions - zeros|zeros]], 0 换成 $\[0,1]$ 上**均匀分布**的随机数
  - 但 _typename_ 只能为 _single_ 或 _double_
- 正态分布随机数组: 函数 _randn_
  - 用法完全同 _rand_, $\[0,1]$ 上均匀分布的随机数换成 $\mathbb{R}$ 上**正太分布**的随机数
- 逻辑数组: 函数 _true_ 和 _false_
  - 用法完全同 [[Matlab Functions - zeros|zeros]], 0 换成逻辑值 1/0, 因此生成的是逻辑值数组
  - 于是没有 _typename_ 参数
- 对角数组: 函数 [[Matlab Functions - diag|diag]]
- 魔方数组: 函数 [[Matlab Functions - magic|magic]]
