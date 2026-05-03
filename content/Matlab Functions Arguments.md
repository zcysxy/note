---
publish: true
title: Matlab Functions Arguments
created:
modified: 2021-12-02T20:43:14
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Function]]"
state: done
---

# Input and Output Arguments

MATLAB 函数定义的声明行中, 需要通过形式参数直接指明**输入和输出参数**. 每个函数都有自己独立的 workspace, 除[[Matlab Nested Function|嵌套函数]]可使用父函数的变量外, 函数的独立 workspace 不与其他任何 workspace 有关系, 因此在函数调用时, 通过**传递参数**将实际参数传递给形式参数.

#R 形式参数无需指定参数类型

MATLAB 中只有一般参数和[数目可变参数](#variable-number-of-arguments)两种参数, **没有关键参数**

## Multiple Arguments

可以有多个实际/形式输入/输出参数, 基本语法如下

```octave
[y_1,...,y_j] = myFun(x_1,...,x_i) % j<=m & i<=n

function [out_1,...,out_m] = myFun(in_1,...,in_n)
...
end
```

- **调用函数**时, 对于实际**输出参数**
  - 按照形式输出参数顺序输出
  - 不得多于形参数目
  - 若实参少于形参, 则输出前 _m_ 个参数
  - 默认输出**第一个**参数
    - 如 `myFun(...)` => _ans_ = _out\_1_
  - 可用 tilde [[Matlab Operator]] `~` 作为变量占位符来舍去输出
    - 如 `[~, a] = myFun(...)` 返回两个输出变量, 然后将第一个舍去了

- 对于实际**输入参数**
  - 一般需要与形式输入参数**一一对应** (顺序, 数目)
    - **"一般"** 指的是若函数执行过程中需要用到该参数
    - 于是可以通过 [[Matlab Conditional Statement]], 根据实际参数数目, 决定函数执行过程

- 函数 _nargin_ 和 _nargout_ 返回输入和输出参数个数
  - `nargin(fun)`, `nargout(fun)` 返回函数 _fun_ 定义中的形式输入, 输出参数个数
  - `nargin`, `nargout` 在函数定义中, 返回该函数被调用时实际传递的输入参数, 输出参数个数

- 因此可以结合函数 _nargin_, _nargout_ 和 [[Matlab Conditional Statement]] 处理函数调用中指定不同数目的输入/输出参数的情况
  - 例子:

    ```octave
    function [y1,y2] = fun(x1,x2)
    if nargin == 1
        y1 = x1;
        if nargout == 2
            y2 = x1;
        end
    else
        if nargout == 1
            y1 = x1 + x2;
        else
            y1 = x1;
            y2 = x2;
        end
    end
    ```

- 没有指定实际输出参数时, _nargout_ = 0, 但只是赋值给变量 _ans_ **第一个**输出参数

- [[Matlab Conditional Statement - if, else, elseif|if, elseif 语句]] 后面若直接以函数调用为条件表达式, 则 _nargout_ = 1
  - 如 `if fun()` 相当于 `tf = fun(); if tf`

## Variable Number of Arguments

- 在输入/输出参数数目不定, 或想更灵活处理参数时, 可用 _varargin_/_varargout_ 作为形式输入参数/形式输出参数
- 参数传递后 _varargin_/_varargout_ 变为以实际参数为元素的 **cell array**
  - 即**函数定义**中, 需通过 cell array 的方法调用 _varargin_ 中元素, 为 _varargout_ 中元素赋值
  - 但调用函数时, 还是按照一般数组格式传递参数
- 可变数目参数可以与一般参数混用, 但需要列在**最后**
- _varargin_/_varargout_ 的长度依然计入 _nargin_/_nargout_
- 例子:

```octave
function [a, varargout] = fun(varargin)
a = 'hello';
if nargin >= 1
    for i = 1:length(varargin)
    varargout{i} = strcat(varargin{1},',');
    end
end
varargout{end+1} = '!';
end
```
