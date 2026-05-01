---
publish: true
title: Matlab Function
created: 2021-08-17T21:58:15
modified: 2021-10-22T14:30:20
published: 2026-05-01T00:07:17.954-04:00
aliases:
type: note
sup:
  - "[[MATLAB]]"
state: "[[%wip]]"
---

# MATLAB Function

#R 本文主要关于自定义函数

旧版本的 MATLAB 中, 自定义函数需为独立的 `.m` 文件, 可见 MATLAB 中函数的独特性与重要性. 新版本的 MATLAB 中虽然允许一个 `.m` 文件中有非函数定义代码和函数定义代码, 且可以有多个同级函数, 但所有函数定义代码应该放在**最后**, 即不允许函数定义语句的 _end_ 后面有非函数定义代码.

而且, 最合适的方法仍是将一个函数单独封存为一个**同名** `.m` 文件中. 这样, 无论该函数文件在 Current Folder 还是 MATLAB 的搜索路径, 都可以在其他文件或 Command Window 中通过函数名直接调用该函数.

#R 函数声明中的名字与文件名不一致时, 通过**文件名**才能在文件外直接调用函数

同时, 若要区别一般的 scripts 和函数文件, 一个重要区别就是函数定义必须通过 `.m` 文件完成, 无法在 Command Window 中进行; 而一个 script 则只是可在 Command Window 中执行的指令的集合.

以后定义:

函数文件 function files
: `.m` files that contain only function definitions

脚本文件 script files
: `.m` files that are not function files

## 基本语法

定义函数的基本语法如下

```octave
function output = myFunction(input)
% H1 comment
% Other comments

function_block
end
```

- 其中第一行为**函数声明行**, 指定函数名称和输入/输出参数
- 第二行的 _H1_ 注释概括函数功能, 其内容可被 _lookfor_ 函数查找到
- 其他注释行解释函数, 其内容可被 _help_ 函数显示
- **关键字** _function_ 和 _end_ 分别指示函数开头和结尾
  - 单独函数文件且无嵌套函数的情况下 _end_ 可省略

## [[Matlab Functions Types]]

!! 以下函数调用顺序见 [[Matlab Function Precedence Order]]

除[主函数](#main-function)外, 函数分为以下四类:

1. [[Matlab Nested Function|嵌套函数]]
2. [[Matlab Functions Types#local-function|局部函数]]
3. [[Matlab Functions Types#private-function|局部函数]]
4. [[Matlab Anonymous Function|匿名函数]]

## [[Matlab Functions Arguments]]
