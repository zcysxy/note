---
publish: true
created: 2026-01-06T20:10:18.175-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# Matlab Functions Types

[[Matlab Function]]

---

!! 以下函数调用顺序见 [[Matlab Function Precedence Order]]

除[主函数](#main-function)外, 函数分为以下四类:

- [Main Function](#main-function)
- [Nested Function](#nested-function)
- [Local Function](#local-function)
- [Private Function](#private-function)
- [Anonymous Function](#anonymous-function)

## Main Function

主函数, 指**函数文件**中**第一个**函数, 是相对[局部函数](#local-function)和[嵌套函数](#nested-function)而言的. 主函数一般与函数文件名相同.

## Nested Function

见 [[Matlab Nested Function]]

## Local Function

局部函数, 指**脚本文件**中定义的任意函数 (需放在最后), 或**函数文件**中主函数之后的非[嵌套](#nested-function)函数.

- 局部函数之间地位相等, 都可以被脚本文件中的指令或函数文件中的主文件调用, 也可以**互相调用**
- 局部函数之间的顺序**无任何影响**
- 局部函数无法从其他文件或 Command Window 中调用
  - 但可以通过命令 `help myFun > myFun_local` 查看主函数文件 `myFun.m` 中的局部函数  _myFun\_local_ 的帮助注释
- 局部函数不能与文件名同名

## Private Function

- 私有函数是具有**限制性访问权限**的函数, 它们对应的 M 文件需要保存在名为 `private` 的子文件夹下, 则其中的私有函数只能在该子文件夹的**直接父目录**的 **M 文件**中被调用
  - 子文件夹的直接父目录应是 Current Folder 或某个 MATLAB path
  - 私有函数无法被 Command Window 调用
  - 当然 "私有函数" 还可以被本文件, 同目录下文件和同目录 Command Window 调用, 但此时它不再是 "私有函数"
- 这些私有函数代码编写上和普通的函数没有什么区别, 也可以在一个 M 文件中编写一个主函数和多个子函数, 以及嵌套函数
- 但可以通过命令 `help private/private_fun` 获取私有函数 _private\_fun_ 的帮助注释

## Anonymous Function

见 [[Matlab Anonymous Function]]
