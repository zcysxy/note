---
publish: true
created: 2026-01-06T20:10:18.180-05:00
modified: 2026-05-01T00:08:28.000-04:00
published: 2026-05-01T00:08:28.000-04:00
tags:
  - pub-matlab
---

# Function Handle

[[Matlab Types]]

---

函数句柄 function handle 是用来表示 [[Matlab Function]] 的一种数据类型. 它的作用就是将函数赋值给**变量**, 更灵活的应用各种函数. 作为函数时函数句柄与一般函数的用法一致.

但是注意, 函数句柄只是原函数的一种**表示**, 本身并不储存原函数信息. 所以若原函数代码被删除后, 指向这个函数的所有函数句柄也就失效了.

## 属性

- 函数 _functions_ 返回函数句柄表示的函数的详细信息
- 函数 [[Matlab Functions - isequal|isequal]] 可以比较两个函数句柄
  - 注意 `==` 等操作不支持函数句柄作为运算对象

## 创建语法

```octave
fhandle = @funName
```

以上操作符 `@` 将函数 _funName_ 变成 function handle 类赋值给了变量 %fhandle%

!! `@` 后可有空格

## 匿名函数

函数句柄一个重要应用就是创建单行的**匿名函数**, 见 [[Matlab Anonymous Function]].

## 作为数据类型

要形成 "函数数组", "函数结构体", 就需要用到函数句柄是一种数据类的特定. 如下例

```octave
disp('sin',pi/2) % 显示 1

function y = fun(which_fun,x)
s.sin = @sin; % 将函数作为函数句柄保存在结构体中
s.cos = @cos;
y = s.(which_fun)(x);
end
```

又比如一些函数接收函数作为参数 (_function functions_), 则需要先将被作用函数转换为函数句柄, 在传递给作用于它的函数. 如下例

```octave
Sin = @sin
disp(integral(Sin,0,pi)) % 显示 2.0000
```

注意以上性质是[[Matlab Types|数据类型]]的特点, 所以不一定需要将 function handle赋值给变量, 也可以直接作为 function handle 类使用. 如下例

```octave
disp(integral(@sin,0,pi)) % 显示 2.0000
disp(integral(@(x) x.^2,0,1)) % 显示 0.3333
```

对于无输入参数匿名函数, 不能像一般函数那样省略圆括号 `()`, 否则返回的是其作为**变量**的信息. 如下例

```octave
>> f = @() disp('hello');
>> f()
hello
>> f
  function_handle with value:
    @()disp('hello')
```
