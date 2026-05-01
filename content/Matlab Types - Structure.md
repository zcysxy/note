---
publish: true
created: 2022-02-22T20:20:09
modified: 2022-05-07T20:32:51
published: 2026-05-01T00:07:19.477-04:00
type: note
sup:
  - "[[Matlab Types]]"
state: done
---

# Structure

MATLAB 中 sturcture 类和 [[Matlab Types - Cell|cell]] 类称为 heterogeneous containers, 它们是特殊的**数组 array**, 与一般 [[Matlab Array|数组]]不同, 可以储存不同类型数据.

- 一个 structure 像一个数据容器 data container, 通过字段 field 存储多个不同类型的数据
  - field 自然还可以是 structure 类, 构成 [nested structure](#嵌套)
- 一个 structure 就是一个 1\*1 的 structure array
- 例子: ![20210126173230](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210126173230.png)
- 句号 `.` 是 structure 的识别符

## 属性

- Identity test functions
  - _isstruct_
  - _isfield_: `isfield(S,F)` 判断 _F_ 是否为 _S_ 某个 field 的**名字**
    - _S_ 为 struct, _F_ 为 char vector 才有可能返回逻辑真
- 函数 _fieldnames_ 返回以 struct 所有 fields 名字为元素的 **cell**

## 创建

- 赋值语句 `struct.field = x`
  - 用句号 `.` 连接 structure name 和 field name
  - 创建更大尺寸 structrue 可利用数组索引: `struct(i).field = x`
    - 一个 structure array 中所有 structure 具有**相同**的 field(S)
    - 未赋值的 field 默认为 empty array
- 函数 [[Matlab Functions - struct|struct]]

赋值语句创建 structure array 例子:

```octave
>> lover.name = 'Josh';
>> lover.age = 21;
>> lover
lover = 
  struct with fields:
    name: 'Josh'
     age: 21
>> lover(2).score = [90 80 95]
lover =
  1x2 struct array with fields:
    name
    age
    score
>> lover(2)
ans =
  struct with fields:
     name: []
      age: []
    score: [90 80 95]
>> lover(1)         
ans =
  struct with fields:
     name: 'Josh'
      age: 21
    score: []
>> whos
  Name       Size            Bytes  Class     Attributes
  ans        1x1               424  struct
  lover      1x2               568  struct
```

## 访问

Structure array 可以通过**索引**访问其中 structures 和它们的 fields, 用法见 [[Matlab Array - Indexing]], 基本语法为: `struct(I1).field(I2)`

- 其中索引 _I1_ 访问的是 structure array _struct_ 中的 structure(s)
  - 只有在无字段访问时才可以填入多个 structures 的索引, 否则报错
  - > You can index into part of a field only when you refer to a **single** element of a structure array
- _I2_ 访问的是上述 structures 的字段 _field_ 中的元素

例:

```octave
>> lover(2).score([1,3]) 
ans =
    90    95
>> lover(:).score(:)     
Expected one output from a curly brace or dot indexing expression, but there were 2 results.
>> lover(:)         
ans =
  2x1 struct array with fields:
    name
    age
    score
```

### Dynamic Fields

当访问/创建字段名也是**变量**时, 就要用到动态字段 dynamic fileds, 语法为用圆括号 `()` 包裹字段名变量, 如下例

```octave
>> S.(char(100+rand*10)) = [] % 以随机变量作为字段名创建字段
S =
  struct with fields:
    m: []
>> S.(char(100+rand*10)) = []
S =
  struct with fields:
    m: []
    e: []

>> S1.a = 1; S1.b = 2; F = 'ab';
>> S1.(F(randi(2))) % 随机访问字段
ans =
     1
```

## 删减

通过函数 _rmfield_ 删除 struct 中某些 field(s), 返回删减后的 structure

- 语法: `rmfield(S,fieldname)`
  - 其中 _fieldname_ 可以为 char vector 或 cell array of char vectors

## 嵌套

Structure 的 field 自然可以为 structure 类, 这样就构成 nested structure. 其创建, 访问等过程与一般 structure 一致. 见下例

```octave
>> S.A.a = rand(2)
S =
  struct with fields:
    A: [1x1 struct]
>> S.A(2).a = rand(2)
S =
  struct with fields:
    A: [1x2 struct]
>> S.A(1).a(2,1)           
ans =
    0.8491
```

\~~ 以句号 `.` 为分层符号的嵌套表示非常清晰: `S.layer1.layer2...`
