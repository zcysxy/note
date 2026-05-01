---
publish: true
created: 2024-02-02T04:44:24.183-05:00
modified: 2026-05-01T00:07:19.483-04:00
published: 2026-05-01T00:07:19.483-04:00
---

# Variable Scope

[[MATLAB]]

---

MATLAB 中 function workspace 独立于 base workspace, 两者互不相同, 无法共享参数. MATLAB 中**最好**的方法就是通过[[Matlab Functions Arguments|参数传递]]来沟通两个 workspaces.

还有以下方法可以沟通 workspaces.

## Global Variables

Function space 中的变量称为局部 local 变量, 全局 global 变量相对其而言. 在函数内外都想引用, 修改一个变量时, 可在每次访问它前, 都用 _global_ **关键词**声明其为全局变量. 若不用 _global_ 声明, 则它只是同名的, 无法被其他 workspaces 访问的变量.

- 关键字 _global_ 的基本语法为: `global x1 ... xn`
  - 空格分隔, 无括号和逗号

见下例

```octave
global x
x = 'gloabal';
y = 'base';
fun();

function fun()
global x y
disp(x)
disp(y)
end
```

其输出为 `global`, 没有 `base` 就是函数 _fun_ 中还未创建全局变量 %y%.

## Persistent Variables

持久变量是特殊的**局部变量**, 一般的局部变量在函数调用结束后清除, 但持久变量保留在 **function workspace** 中, 即下次再调用该函数时, 持久变量的值与上次调用结束时相同.

- 用**关键词** _persistent_ 在函数定义内声明持久变量, 基本语法同 _global_: `persistent x1 ... xn`
- 持久变量在第一次被声明时初始化为 empty array
- 清除函数 (如 `clear fun`) 时也同时清除了持久变量, 因为清除的是 function workspace

见下例:

```octave
function findSum(inputvalue)
persistent SUM_X

if isempty(SUM_X)
   SUM_X = 0;
end
SUM_X = SUM_X + inputvalue;
```

## Variables in Nested Functions

[[Matlab Nested Function|嵌套函数]]中的变量也是特殊的局部变量, 它们不能被包含它们的父函数, 或同级嵌套函数调用.

但是[[Matlab Nested Function|嵌套函数]]可以调用其上溯任意层父函数 function workspace 中的变量.
