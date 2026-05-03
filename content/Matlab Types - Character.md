---
publish: true
title: Matlab Types - Character
created: 2021-08-17T21:58:15
modified: 2021-10-22T16:05:20
published: 2026-05-01T00:08:28.000-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Types]]"
state: "[[%wip]]"
---

# Character

- MATLAB 中字符与数值的地位一致, 每个字符以 **Unicode** 编码储存, 占 **2 bytes**
  - 字符的内部运算实际上是编码**数值**的运算, 所以字符本质上是一个数字串
  - 因此==可以说 MATLAB 本质上只有数值数组一种数据结构==
  - 因此大部分接受数值参数的函数都可以接受字符参数
- 新版本中新增了更适于\*字符串操作的**字符串 string** 数据类型, 与 char 的主要区别见 [[Matlab Characters and Strings]]

## 属性

- 区别于[[Matlab Types - Numeric|数值]]数据, 大小(长度)为 1 的一个数值可以有任意位, 任意单个字符大小(长度)为 1
  - `length(1200+3.123i)` = 1; `length('hello')` = 5
- identity 测试函数
  - _ischar_ 是否为 char 类
  - _isletter_ 返回相同大小**逻辑数组**, 每个元素为对应元素是否为**英文字母字符**的判断
  - _isspace_ 返回相同大小**逻辑数组**, 每个元素为对应元素是否为**white-space 字符**的判断
  - [[Matlab Functions - isstrprop|isstrprop]]
- 利用函数 _double_ 可将字符转换为其 ASCII 编码

## 创建与连接

- 最基本的字符串创建语法为单引号 `'` 包裹字符: `'string'`
  - 注意双引号 `"` 创建的是字符串 string 类
  - 单引号字符本身语法为 `''`
    - 如 `'I''m Josh'` = `'I'm Josh'`

### 单行字符数组

要把已有字符数组 `a = 'hello,'`, `b = ' this '`, `c = 'world!'` 水平连接形成单行字符串的方法:

- 中括号 `[]` 直接连接
  - `[a b c]` = `'hello, this world!'`
- 函数 _strcat_: `strcat(a,b,c)` = `'hello, world'`
  - _strcat_ 会自动去除**末尾空白符号 white-space**
    - white-space 包括 space, tab, newline, carriage return 等

### 多行字符数组

多行字符数组即**二维**字符数组, 需要通过竖直连接 (**相同长度**) 字符数组创建:

- 中括号 `[]` 内用分号 `;` 分隔
  - `[a;b;c]`
- 函数 _char_: `char(a,b,c)`
  [[Matlab Functions - char|char]]
  - 对于**空数组**也会补齐
- 函数 _strvcat_: `strvcat(a,b,c)`
  - ++_不推荐使用_++
  - 用法同函数 `char(a,b,c)`, 但会会忽略(去除)空数组

### 特殊字符数组

- 函数 _blanks_: `blanks(n)` 创建长度为 _n_ 的空格字符行向量

## 比较运算

- 是否完全相同

## 查找与替换

[[!todo#A]]

相关函数:

- _strrep_
- _strfind_
- _findstr_
- _strmatch_
- _strok_
