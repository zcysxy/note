---
publish: true
created: 2024-02-02T17:44:24
modified: 2026-05-07T16:57:30
published: 2026-05-07T17:06:59.371-04:00
tags:
  - pub-matlab
type: note
sup: "[[MATLAB]]"
status: "[[%wip]]"
---

# Matlab Types

- MATLAB stores and accesses all data through the **[[Matlab Array|array]]** structure; "data type" refers to the type of the **elements** of an array
- MATLAB's data types are described as **classes with attributes**
  - For example, a complex number has class **double** with attribute **complex**
  - As with [[Python Sequence]] in [[Python]], you can index, slice, and so on
- There are \[15]"R2012b"+x built-in fundamental types and 2 user-defined kinds^\[<https://www.mathworks.com/help/matlab/matlab_prog/fundamental-matlab-classes.html>]
- Fundamental data types:
  - [[Matlab Types - Numeric|Numeric]]
  - [[Matlab Types - Character|Character]]
  - [[Matlab Types - Structure|Structure]]
  - [[Matlab Types - Cell|Cell]]
  - [[Matlab Types - Logical|Logical]]
  - [[Matlab Types - Function Handle|Function Handle]]
- Type determination functions (returning logical values)
  - [[Matlab Functions - class]]
  - `isa(A, 'class_name')`
  - `isreal(A)`
  - `isnan(A)`
  - `isnumeric(A)`
  - `isinf(A)`
  - `isinteger(A)`
  - `isfinite(A)`
  - `isfloat(A)`

```mermaid
graph TD
A{{Array}} --> B(Numeric)
    B --> B1(Float)
        B1 --> B11(Single)
        B1 --> B12(Double):::imp
    B --> B2(Integer)
        B2 --> B21(Signed)
            B21 --- B211(int8-bit)
            B211 --- B212(int16-bit)
            B212 --- B213(int32-bit)
            B213 --- B214(int64-bit)
        B2 --> B22(Unsigned)
            B22 --- B221(uint8-bit)
            B221 --- B222(uint16-bit)
            B222 --- B223(uint32-bit)
            B223 --- B224(uint64-bit)
A --> C(Text)
    C --> C1(Character):::imp
    C --> C2(String)
A --> D(Function Handle):::imp
A --> E(Heterogeneous Container)
    E --> E1(Cell):::imp
    E --> E2(Structure):::imp
A --> F(Logical):::imp

classDef imp stroke:#ff0000,stroke-width:4px;
```

- The string type was introduced later; the difference from character can be roughly read from the names — see [[Matlab Characters and Strings]]
  - A character is analogous to a single value within a numeric array; each character occupies exactly 2 bytes
  - A string behaves more like a numeric array taken as a single value
- Integer types come in **signed** and **unsigned** flavours; the former includes negative values, the latter does not
- The trailing number indicates the bit width of the binary representation
  - For the same width, `unsigned` covers a larger non-negative range than `signed`, since one bit is reserved for the sign

## Types Conversion

[[!todo#A]]
