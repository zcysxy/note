---
publish: true
created: 2022-05-28T03:34:22
modified: 2023-03-24T00:44:37
published: 2026-05-01T00:08:21.685-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Math]]"
  - "[[Matlab Operations]]"
state: done
---

# Arithmetic Operations

本文重点介绍基本数学运算\_\_函数\_\_, 关于\_\_运算符\_\_实现的基本运算见 [[Matlab Matrix Operations]] 和 [[Matlab Array Operations]].

## Modulo division

- _mod_ 取余数
  - `mod(a,m)` returns the **remainder** after division of a by m
  - \= `a - m.*floor(a./m)`
  - `mod(a,0)` returns _a_
- _rem_ 取余数
  - `rem(a,m)` returns the **remainder** after division of a by m
  - \= `a - m.*fix(a./m)`
  - `rem(a,0)` returns _NaN_
- _idivide_ 取整数
  - `idivide(a,b,<opt>)` 返回按 _opt_ 取整后的 _a_/_b_
  - _opt_ 默认为 `'fix'`, 可选 `'fix'`, `'floor'`, `'ceil'`, `'round'`

## Rounding

- _round_ rounds half up away from 0
- _fix_ rounds towards 0
- _floor_ rounds towards negative infinity
- _ceil_ rounds towards positive infinity
