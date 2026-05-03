---
publish: true
aliases: 数组
title: Matlab Array
created: 2021-08-17T21:58:15
modified: 2023-02-09T13:24:10
published: 2026-05-01T00:08:21.000-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Types]]"
state: done
---

# Array

- MATLAB 面向**数组**设计, 其中的任何数据类型, 都是按照**数组**的形式进行存储和运算的
- 这里说的数组是广义的,它可以只有**一个元素**,也可以是**一行或一列元素**, **二维数组**，**多维数组**等
- 数组内元素也可以是**任意数据类型**, 如[[Matlab Types - Numeric|数值型]]、[[Matlab Types - Logical|逻辑型]], [[Matlab Types - Character|字符型]], [[Matlab Types - Cell|元胞型]]
  - 但非异构类数组 ([[Matlab Types - Cell|cell]] 和 [[Matlab Types - Structure|structure]] 等) 内的元素类型必须相同
- MATLAB 中的 array 也有类似的 [[Python Sequence Unpacking]]
  - 但不同于 Python 中的无括号默认为原则, MATLAB 中不能省略方括号 `[]`
- 数组中区分同维数元素的分隔符为逗号 `,` 或**空格**
- 对数组的有返回值的操作返回的都是**新数组**

## 数组分类

- 按照元素个数和排列方式:
  - 空数组 empty array - 0 个元素
    - **~~空数组为 double 类~~**
  - 标量 scalar - 1 个元素 (一行一列)
  - 向量 vector - 一行或一列元素 (一维数组)
  - 二维数组
  - 多维数组

* 对于 empty array, scalar, vector, 大部分情况 MATLAB 仍作为二维数组处理

- 按照储存方式
  - 普通数组
  - 稀疏数组 (大部分元素为 0)
- 按照元素类型
  - 数值数组
  - 字符数组
  - 逻辑数组等

## 数组属性

- 结构测试函数 (返回逻辑值)
  - _isempty_
  - _ismatrix_
  - _isvector_
  - _isrow_
  - _iscolumn_
  - _isscalar_
  - _issparse_

* $scalar \subset vector = row \cup column \subset matrix$

- 数组大小
  - 函数 [[Matlab Functions - size]]
  - 函数 [[Matlab Functions - length]]
  - 函数 _numel_ 返回数组元素总数, 相当于 `prod(size(A))`
  - 函数 _ndims_ 返回数组维数, 相当于 `length(size(A))`
- 数据类型测试函数
  - isnumeric
  - isreal
  - isfloat
  - isinteger
  - islogical
  - ischar
  - isstruct
  - iscell
  - iscellstr
- 顺序测试函数
  - issorted: `issorted(A,__)` = `isequal(A,sort(A,__))`
  - issortedrows: `issortedrows(A,__)` = `isequal(A,sortrows(A,__))`

## [[Matlab Array - Indexing]]

通过[[Matlab Array - Indexing|数组索引]]可以

- 访问/截取数组中部分元素
- [扩展数组](#expanding)
- 删除数组中部分元素: `A(index) = []`

## [[Matlab Array - Creating]]

## [[Matlab Array - Concatenating]]

## Expanding

通过[[Matlab Array - Indexing|数组索引]]中的 **position index** 可以扩展数组大小, 如下

```octave
>> A = ones(3)
A =
     1     1     1
     1     1     1
     1     1     1

>> A(5,5) = 2
A =
     1     1     1     0     0
     1     1     1     0     0
     1     1     1     0     0
     0     0     0     0     0
     0     0     0     0     2
```

- Position index 需大于 _A_ 的大小, 否则为修改 _A_ 的元素
- 其余位置填 0

## Reshaping

#R 以下所有操作均返回**新数组**

- Fliping
  - 函数 [[Matlab Functions - flip|flip]]
  - 函数 _flipud_: `flipud(A)` 上下翻转, 即沿第 1 维翻转
  - 函数 _fliplr_: `fliplr(A)` 左右翻转, 即沿第 2 维翻转
  - 函数 _rot90_: `rot90(A,<k>)`
    - 逆时针旋转数组 _A_ $k\times 90\degree$
    - 对于多维数组, 旋转的是**1, 2维形成的平面**

> [!rmk] 多维数组
>
> 多维数组的大于 2 的维数称为 "页", 直观的理解是每页储存的是 matrices.
>
> 一个规律是, 一般适用于 matrices 的操作也适用于多维数组, 而操作的就是多维数组**1, 2维形成的平面**, 即页中的 matrices.

- 维数置换[[!todo#A]]
  - 函数 _permute_
  - 函数 _ipermute_
- Transpose `'`
- 函数 [[Matlab Functions - reshape|reshape]]
- 函数 _squeeze_: `squeeze(A)` 在至少保留两维的情况下, 去除 _A_ 长度为 **1** 的维数, 返回数组中元素与 _A_ 相同

## Rearranging

- 轮换
  - 函数 [[Matlab Functions - circshift|circshift]]
  - 函数 _shiftdim_: `B = shiftdim(A,n)` shifts the **dimensions** of an array _A_ by _n_ positions
- 排序
  - 函数 [[Matlab Functions - sort|sort]]
  - 函数 [[Matlab Functions - sortrows|sortrows]]

## Finding

见 [[Matlab Functions - find]]
