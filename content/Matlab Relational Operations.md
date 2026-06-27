---
publish: true
created: 2026-05-07T20:54:08
modified: 2026-05-07T21:04:04
published: 2026-05-08T01:04:50.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Relational Operations

A relational operation applies a **relational operator** or **relational function** to a **pair** of operands and returns a [[Matlab Types - Logical|logical value]].

- Relational operations are often combined with [[Matlab Logical Operations]] to form complex conditional expressions.

## Element-Wise Relational Operations

| Operator | Equivalent Function |
| :------: | :-----------------: |
|   `==`   |        `eq`         |
|   `~=`   |        `ne`         |
|   `>=`   |        `ge`         |
|   `>`    |        `gt`         |
|   `<=`   |        `le`         |
|   `<`    |        `le`         |

- All operands must be **ordinary** arrays—not [[Matlab Types - Cell|cell]] or [[Matlab Types - Structure|structure]] arrays
  - Fully supported types: `single`, `double`, `int8`, `int16`, `int32`, `int64`, `uint8`, `uint16`, `uint32`, `uint64`, `logical`, `char`, `string`, `categorical`, `datetime`, `duration`
- Operand sizes must be [[Matlab Compatible Array Sizes|compatible]]
  - For arrays of **the same size**, comparison is element-wise at matching indices, returning a logical array of the same size
  - When one operand is a **scalar**, it is compared against every element of the other
- For **characters**, the comparison is **lexicographic**
- For complex numbers
  - The first two relational operations (`==`, `~=`) compare both real and imaginary parts
  - The remaining four operations compare **only the real part**
- The constant `Inf` equals `Inf`
- The constant `NaN` is unequal to any value, **including itself**
- For **floating-point** values, the storage format imposes a **relative error**, so it is best not to test equality of two floats directly. Instead, use one of the **last four** comparisons to bound the value within a tolerance interval that meets your needs
- For **integer-valued** data—whether of class `double`, an integer class, logical, or character (code point)—comparisons can be made in the usual way

## Whole-Array Relational Operations

The functions [[Matlab Functions - isequal|isequal]] and `isequaln` compare any two values and return a single logical value indicating whether they are **identical**.

- The exact definition of "identical" is given in [[Matlab Functions - isequal]]
- `isequaln` differs from [[Matlab Functions - isequal|isequal]] only in that indeterminate elements such as `NaN` are treated as equal to themselves
