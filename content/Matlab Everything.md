---
publish: true
created: 2024-02-02T04:44:24.173-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# Matlab Everything

[[MATLAB]]

---

## Basic Remarks

- 设计哲学:
  1. 面向[[Matlab Array|数组 array]]设计
  2. 面向 double 类复数设计
  3. 面向对象 object 设计
- 所有数值默认为 **double** 类
  - 包括各种取整方法产生的 "整数"
- 空数组 `[]` 也为 double 类
- 数组索引从 ++1++ 开始
- 默认取整方式为 **rounding half up away from 0**
  - 这也是函数 _round_ 的取整方式
- MATLAB 中有返回值的操作都会默认输出到 Command Window 中, 用分号 `;` 可以抑制输出, 尤其是在 scripts 中
  - 且可以利用分号 `;` 在一行内写任意多条语句
  - 如 `a = 1; b = 2; a + b` 返回 `ans = 3`
- 程序控制语句通过关键词 `end` 标志结束
- 两种函数调用语法: [[Matlab Command-Function Duality]]

## Function Inputs

> MATLAB 的函数输入非常奇怪, 有很多规则, 有更多特例

- 对于 binary operation, 输入 arrays 需满足 [[Matlab Compatible Array Sizes]]
- 一般作用于 matrices 的函数往往也可以作用于 N-D arrays, 且往往就是在它们的一二维形成的平面上操作
- 一般接受数值参数的函数也可以接受**字符**参数

## Basic Syntax

- 标志着数组的方括号 `[]` 一般不能省, 只有在用冒号运算符 `:` 生成 vector 时可省
