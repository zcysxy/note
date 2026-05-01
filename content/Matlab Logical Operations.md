---
publish: true
created: 2022-05-28T03:34:23
modified: 2023-03-30T20:13:24
published: 2026-05-01T00:07:19.101-04:00
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Logical Operations

逻辑运算指**逻辑运算符**和**逻辑运算函数**作用于[[Matlab Types - Logical|逻辑值]]的运算过程

!! 这里逻辑值为广义逻辑值, 即任意非 0 数值和非 `char(0)` 字符视为逻辑真 1 (即 x 视为 `logical(x)`)

## 逐元素逻辑运算

| Operator | Equivalent Function |
|:--------:|:-------------------:|
| &        | _and_               |
| |       | _or_                |
| ~        | _not_               |

- 以上**与运算 `&`** 和**或运算 `|`** 都是 binary operation, 运算 arrays 需遵循 [[Matlab Compatible Array Sizes]]
- **逻辑非 `~`** 运算为单目运算

### 其他逐元素逻辑运算函数

- **亦或运算** _xor_
- `&` 可扩展为函数 [[Matlab Functions - all|all]]
- `|` 可扩展为函数 _any_, 用法同 [[Matlab Functions - all|and]]

## 捷径逻辑运算

| Operator | Description   |
|----------|---------------|
| &&       | & 的惰性运算  |
| ||     | | 的惰性运算 |

- 捷径 short-circuit 逻辑运算符的存在意味着[之前逻辑运算](#逐元素逻辑运算)都是要完整运算两个操作对象
- 一般都使用捷径逻辑运算符, 特别当运算中**第二个表达式依赖于第一个条件成立**时, 则只能使用捷径逻辑运算符
  - 例如

    ```octave
    >> a = "a";
    >> isnumeric(a) && (1/a > 3)
    ans =
      logical
       0
    >> (a ~= 0) & (1/a > 3) 
    Error using /
    Arguments must be numeric, char, or logical.
    ```
