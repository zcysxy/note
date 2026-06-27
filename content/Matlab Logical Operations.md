---
publish: true
created: 2022-05-28T03:34:23
modified: 2026-05-07T21:07:16
published: 2026-05-08T01:07:25.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Logical Operations

A logical operation applies a **logical operator** or **logical function** to [[Matlab Types - Logical|logical values]].

- Here a "logical value" is the generalized one—any non-zero numeric value or any non-`char(0)` character is treated as logical true (`1`); that is, _x_ is treated as `logical(x)`.

## Element-Wise Logical Operations

|    Operator     | Equivalent Function |
| :-------------: | :-----------------: |
|       `&`       |        `and`        |
| <code>|</code> |        `or`         |
|       `~`       |        `not`        |

- The **AND `&`** and **OR `|`** operators are binary; their array operands must satisfy [[Matlab Compatible Array Sizes]]
- The **NOT `~`** operator is unary

### Other Element-Wise Logical Functions

- **XOR**: `xor`
- `&` extends to the function [[Matlab Functions - all|all]]
- `|` extends to the function `any`, with the same usage as [[Matlab Functions - all|all]]

## Short-Circuit Logical Operations

| Operator          | Description                     |
| ----------------- | ------------------------------- |
| `&&`              | Lazy version of `&`             |
| <code>||</code> | Lazy version of <code>|</code> |

- The existence of short-circuit operators implies that the [element-wise logical operations](#element-wise-logical-operations) always evaluate **both** operands in full
- Prefer short-circuit operators in general; they are required whenever the **second expression depends on the first being true**
  - For example:

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
