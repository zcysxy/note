---
publish: true
created: 2024-02-02T17:44:24
modified: 2024-02-06T23:16:16
published: 2026-05-01T00:08:28.213-04:00
tags:
  - pub-matlab
type: note
sup: "[[MATLAB]]"
status: "[[%wip]]"
---

# Matlab Types

- MATLAB 中所有数据以 **[[Matlab Array|数组 array]]** 结构储存和调用, 数据类型指的是数组中**元素**的数据类型
- MATLAB 中的 Data Types 称为 Classes with Attributes
  - 如复数的 class 为 **double**, attributes 为 **complex**
  - 类比 [[Python]] 中的 [[Python Sequence]], 可以进行索引等操作
- 共有 \[15]"R2012b"+x 种内置基本数据类型, 和 2 种用户自定义类型

![2021-01-26](https://www.mathworks.com/help/matlab/matlab_prog/fundamental_classes.png)

```mermaid
graph TD
A{{Array}} --> B(数值<br>Numeric)
    B --> B1(浮点<br>float)
        B1 --> B11(单精度<br>Single)
        B1 --> B12(双精度<br>Double):::imp
    B --> B2(整数<br>integer)
        B2 --> B21(有符号<br>signed)
            B21 --- B211(int8-bit)
            B211 --- B212(int16-bit)
            B212 --- B213(int32-bit)
            B213 --- B214(int64-bit)
        B2 --> B22(无符号<br>unsigned)
            B22 --- B221(uint8-bit)
            B221 --- B222(uint16-bit)
            B222 --- B223(uint32-bit)
            B223 --- B224(uint64-bit)
A --> C(字符<br>Text)
    C --> C1(字符<br>Character):::imp
    C --> C2(字符串<br>String)
A --> D(函数句柄<br>Function Handle):::imp
A --> E(异构器<br>Heterogeneous Container)
    E --> E1(元胞<br>cell):::imp
    E --> E2(结构<br>structure):::imp
A --> F(逻辑<br>Logical):::imp

classDef imp stroke:#ff0000,stroke-width:4px;
```

- 字符串类型 string 为新版本引入, 与字符类型 character 的区别大致可以字面理解, 详见 [[Matlab Characters and Strings]]
  - character 相当于数值类型中的数值, 每个字符严格为 2 bytes
  - 而 string 相当于数值数组看作一个整体
- 整数类型分为有符号 signed 和无符号 unsigned 两种, 即前者包含负数, 而后者不包含
- 整数类型后面的数字表示其 (二进制表示) 占用 bits
  - 同样的 x-bit 整数 unsigned 范围比 signed 范围大, 因为符号占用一个 bit

## Fundamental Data Types

- [[Matlab Array]]
  - [[Matlab Types - Numeric|Numeric]]
  - [[Matlab Types - Character|Character]]
  - [[Matlab Types - Structure|Structure]]
  - [[Matlab Types - Cell|Cell]]
  - [[Matlab Types - Logical|Logical]]
  - [[Matlab Types - Function Handle|Function Handle]]

## Determine Types

- 函数 [[Matlab Functions - class]]

![20210126033006](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210126033006.png)

## Types Conversion

[[!todo#A]]
