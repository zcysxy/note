---
publish: true
created: 2023-08-03T06:42:38
modified: 2024-02-02T01:09:53
published: 2026-05-01T00:08:21.780-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# MATLAB Basics

## Basics

- MATLAB 面向**双精度 double**, **复数 complex**, **数组 array** 设计
- 需以 `;` 作为有运算结果的指令结尾, 以抑制结果显示, 特别是在 scripts 中
- 注释符号为 `%`
  - `%{...%}` for multi-line comments
- MATLAB **对缩进不敏感**, 其通过 _end_ 语句来指示语句块的结束

## 基本数值常量

| Constant     | Description                             |
|--------------|-----------------------------------------|
| `pi`         | $\pi$                                   |
| `eps`        | 浮点数相对精度 $2.2204e-16$             |
| `i`, `j`     | 虚单元 $\sqrt{-1}$                      |
| `inf`, `Inf` | 无穷大, 如 $\frac{1}{0}$                |
| `nan`, `NaN` | 不定值 (not a number), 如 $\frac{0}{0}$ |
| `intmax`     | 可表达最大整数 $2147483647$             |
| `intmin`     | 可表达最小整数 $2147483648$             |
| `realmax`    | 可表达最大正实数 $1.7977e+308$          |
| `realmin`    | 可表达最小正实数 $2.2251e-308$          |

## 关键字

| Keyword | Usage |
|-|-|
| break |
| case |
| catch |
| classdef |
| continue |
| else |
| elseif |
| end |
| for |
| function |
| global |
| if |
| otherwise |
| parfor |
| persistent |
| return |
| spmd |
| switch |
| try |
| while |

## 变量

跟 [[Python]] 一样, MATLAB 中变量无须事先定义, 也无需预先声明变量类型

### 变量命名规则

1. 只能由**字母, 数字, 下划线**组成, 且须以**字母**开头
2. 区分大小写
3. 长度不得超过 ++31 位++
4. 不可为[**关键字**](#关键字)
5. 可为常量名, 函数名
   - 则之后该变量名不再代表原先常量, 函数

#### 变量名检验

- 可用函数 [[Matlab Functions - iskeyword]] 检验变量名是否为关键字
- 可用函数 [[Matlab Functions - exist]] 检验变量名是否为现有变量名, 函数名, 文件名, 文件夹名等
  [[Matlab Functions - exist]]

### 预定义变量

| Variable  | Description                    |
|-----------|--------------------------------|
| `ans`     | 无赋值符号时接受运算结果的变量 |
| `nargin`  | 函数实际输入参数个数           |
| `nargout` | 函数实际输出参数个数           |
