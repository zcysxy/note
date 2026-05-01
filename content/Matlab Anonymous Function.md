---
publish: true
created: 2022-05-28T03:34:22
modified: 2023-02-09T14:37:33
published: 2026-05-01T00:05:03.857-04:00
type: note
sup:
  - "[[Matlab Function]]"
  - "[[Matlab Functions Types]]"
related:
  - "[[Matlab Types - Function Handle]]"
---

# Anonymous Function

匿名函数, 是不需要储存在 M 文件中, 只含有**一个表达式**, 数据类型为 [[Matlab Types - Function Handle|function handle]] 的特殊函数

- 不需要储存在 M 文件中, 意味着匿名函数可以在 Command Window 中创建和调用
- 与一般函数一样, 匿名函数可以有多个输入/输出参数, 并且规则同 [[Matlab Functions Arguments]]

## Creation

```octave
afun = @(arg1,...,argn) expression
```

- 其中 _afun_ 就是该匿名函数的 [[Matlab Types - Function Handle|function handle]], 这也是函数句柄的创建语法
- _arg1_, ..., _argn_ 为匿名函数的形式输入参数
  - 因为不能用条件控制语句根据实际输入参数数目决定函数内容, 所以调用匿名函数时实际输入参数一般需要与形式输入参数一一对应
    - "一般" 仍指的是所有参数都被 _expression_ 用到了
  - 自然也可以没有输入参数
- _expression_ 为以 _arg1_, ..., _argn_ 为运算对象的表达式

## Remarks

- 匿名函数的表达式中可以调用其他函数, 还可以**嵌套**匿名函数
- 不同于表示一般函数的 [[Matlab Types - Function Handle|function handle]], 匿名函数本身作为 function handle 储存了该函数的所有信息
- 匿名函数也有自己的 function workspace, 但特别的是, 匿名函数可以使用 base workspace 的变量, 但是一旦创建, 这些变量就变为匿名函数 function workspace 中的**常量**, 与 base workspace 无关了
  - 例:

```octave
>> a = 1;
>> f = @(x) x .* a;
>> disp(f(1))
    1
>> a = 5;
>> disp(f(1))
    1
>> clear a
>> disp(f(1))
    1
```
