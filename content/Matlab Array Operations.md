---
publish: true
created: 2026-05-07T16:39:02
modified: 2026-05-07T17:14:31
published: 2026-05-07T21:14:44.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Array Operations

- MATLAB has two flavours of [[Matlab Arithmetic Operations]]: [[Matlab Matrix Operations]] and array operations.
- Array operations are the **dot operations** — element-wise — as opposed to the matrix operations of [[Matlab Matrix Operations]].
- [[Matlab Math|Mathematical]] functions in MATLAB default to array operations unless they are explicitly matrix operations: e.g. `sin`, `sqrt`, `exp`, and `log` are element-wise. The corresponding [[Matlab Matrix Operations]] are usually distinguished by an `m` suffix, e.g. `sqrtm`, `expm`, `logm`, `mtimes`, `mpower`.

## Operators

The basic unary and binary array operations all have an [[Matlab Operator|operator]] form:

| Operator | Equivalent Function |
| -------- | ------------------- |
| `+`      | _plus_              |
| `-`      | _minus_             |
| `.*`     | _times_             |
| `./`     | _rdivide_           |
| `.\`     | _ldivide_           |
| `.^`     | _power_             |

## Notes

- All of the array operations above are binary; their operands must satisfy [[Matlab Compatible Array Sizes]]. The operation is performed by first **expanding both operands to a common size**, then applying the operation element-by-element on equal indices
  - For example:

    ```octave
    >> a = [1 2 3]; b = [1 2 3]';
    >> a .* b % equivalent to repmat(a,3,1) .* repmat(b,1,3)
    ans =
        1     2     3
        2     4     6
        3     6     9
    ```

- Addition and subtraction coincide for array and matrix operations, so there is no separate dotted form

- `A ./ B` divides element-wise with _A_ as the **numerator** and _B_ as the **denominator**

- `A .\ B` divides element-wise with _A_ as the **denominator** and _B_ as the **numerator**
