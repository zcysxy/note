---
publish: true
created: 2024-02-02T04:44:24.182-05:00
modified: 2026-05-01T00:08:28.000-04:00
published: 2026-05-01T00:08:28.000-04:00
tags:
  - pub-matlab
---

# Cell

[[Matlab Types]]

---

MATLAB 中 cell 类和 [[Matlab Types - Structure|structure]] 类称为 heterogeneous containers, 它们是特殊的**数组 array**, 与一般 [[Matlab Array|数组]]不同, 可以储存不同类型数据.

- Cell array 是对一般 array 的直接扩展, 即其中元素 (称为元胞 cell) 可以为不同数据类型
  - 所以只含一个元素的 cell 类是没有意义的, 所以一般说 cell array 并默认其包含多个元素
  - Cell array 中元素自然还可以是 cell 类, 构成 nested cell array
- 例子: ![20210126185629](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210126185629.png)
- 花括号 `{}` 是 cell 的识别符

## 属性与显示

- 函数 _iscell_
- 显示
  - 函数 _celldisp_ 逐个显示 cell array 每个 cell 具体内容
  - 函数 _cellplot_ 显示 cell array 的**结构图**

## 创建

- 赋值语句
  1. `C(ind) = {x}`
  2. `C{ind} = x`
  - 其中 _ind_ 即一般的数组索引
  - 以上赋值语句也适用于**扩展** cell array
- 函数 _cell_: `cell(<[sz1,...,szn]>)`
  - 返回 _sz1_-...-_szn_ 维 cell array, 其中每个 cell 都为空 `[]`
  - 只有一个参数 _sz1_ 时, 返回 _sz1_-_sz1_ 方 cell array

!! 以上方法生成 "矩形" cell array, 未被赋值的 cell 默认为空 `[]`

例子:

```octave
>> A = cell(2,3)
A =
  2x3 cell array
    {0x0 double}    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {0x0 double}
>> A{1,1} = 'hello'
A =
  2x3 cell array
    {'hello'   }    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {0x0 double}
>> A(2,3) = {123} 
A =
  2x3 cell array
    {'hello'   }    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {[     123]}
>> A{3,3} = [1;2]
A =
  3x3 cell array
    {'hello'   }    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {[     123]}
    {0x0 double}    {0x0 double}    {2x1 double}
```

## 访问与删减

Cell array 的访问完全通过 [[Matlab Array - Indexing]], 只不过用圆括号 `()` 包裹索引时返回的是**子 cell array** (为 cell 类), 用花括号 `{}` 包裹索引时返回的才是其中元素本身

!! 这也解释了为什么 cell array 的赋值语法有两种

例子:

```octave
>> A{2,3}
ans =
   123
>> A(2,3)
ans =
  1x1 cell array
    {[123]}
```

通过索引就可以删除和切除 cell array

- `A{ind} = []` 删除索引为 _ind_ 的元素 (赋空值)
- `A(ind) = []` 切除 _A_
  - 为保证 cell array 为 "矩形", _ind_ 只能有一个分量不是引号 `:`
  - 即只能 "整行/整列" 地切除

## 嵌套

Cell array 的 cell 自然可以为 cell array, 这样就构成 nested cell array. 其创建, 访问等过程与一般 array 一致. 见下例

```octave
>> A{2,2} = {1, 2;'hello', cell(2)}
A =
  2x2 cell array
    {0x0 double}    {0x0 double}
    {0x0 double}    {2x2 cell  }
>> A{2,2}(2,1)
ans =
  1x1 cell array
    {'hello'}
>> A{2,2}{2,2}(2) = {'sub'}
A =
  2x2 cell array
    {0x0 double}    {0x0 double}
    {0x0 double}    {2x2 cell  }
>> A{2,2}{2,2}{2}           
ans =
    'sub'
```

!! 一般来说 nested cell array 的中间指标都是花括号 `{}`
