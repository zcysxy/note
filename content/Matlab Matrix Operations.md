---
publish: true
created: 2022-02-22T20:20:09
modified: 2026-05-07T21:04:34
published: 2026-05-07T21:04:36.093-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Matrix Operations

- In this note, "matrices" means **2-D numeric arrays**, including scalars and vectors.

MATLAB has two flavors of [[Matlab Arithmetic Operations]]: matrix operations and [[Matlab Array Operations]].

Matrix operations are the matrix manipulations of [[Linear Algebra]], as opposed to the element-by-element computations of [[Matlab Array Operations]].

## Operators

The basic unary and binary numeric matrix operations all have an [[Matlab Operator|operator]] form:

| Operator | Equivalent Function | Description                 | Arguments                 |
| -------- | ------------------- | --------------------------- | ------------------------- |
| `+`      | `plus`              | addition                    | binary, compatible arrays |
| `-`      | `minus`             | subtraction                 | binary, compatible arrays |
| `*`      | `mtimes`            | multiplication              | binary, matrices          |
| `/`      | `mrdivide`          | right division              | binary, matrices          |
| `\`      | `mldivide`          | left division               | binary, matrices          |
| `^`      | `mpower`            | powers                      | binary, matrices          |
| `'`      | `ctranspose`        | complex conjugate transpose | unary, matrices           |
| `.'`     | `transpose`         | non-conjugate transpose     | unary, matrices           |

## Notes

- In the table above, "compatible arrays" means the operands may be N-D arrays as long as they satisfy [[Matlab Compatible Array Sizes]]
- "matrices" refers to ordinary matrix arithmetic and scalar arithmetic
  - For example, `A * B` requires the column count of _A_ to equal the row count of _B_
  - Or `c * B`, `A * c` where _c_ is a scalar
- Notice that every operation requiring matrix operands maps to a function name beginning with `m`, indicating "matrix operation"
- Addition `+` and subtraction `-` coincide with their [[Matlab Array Operations|array-operation]] counterparts
- Multiplication `*`, when one operand is a scalar, behaves like `.*`
- **Right division** `B / A` is $\boldsymbol{BA}^{-1}$
  - Equivalent to `B * inv(A)` using the inverse function `inv`
  - When _A_ is a scalar, this reduces to `./`
  - In particular, _A_ may be **non-square**; in that case the operation is equivalent to using the **pseudo-inverse** `pinv`: `B * pinv(A)`
- **Left division** `A \ B` is $\boldsymbol{A}^{-1}B$
  - Equivalent to `inv(A) * B`
  - When _A_ is a scalar, this reduces to `.\`
  - In particular, _A_ may be **non-square**; in that case the operation is equivalent to `pinv(A) * B`
- **Power** requires at least one operand to be a scalar (denoted below by lowercase letters)
  - `a ^ B` is $e^{(\ln a)\boldsymbol{B}}$
    - Equivalent to the **matrix exponential** function `expm`: `expm(log(a) * B)`
    - ++**Caution**++
      - The power operator computes $\boldsymbol{V}a^{\boldsymbol{D}}\boldsymbol{V}^{-1}$, where $\boldsymbol{V}$ and $\boldsymbol{D}$ are the matrices of eigenvectors (as columns) and eigenvalues (on the diagonal) of $\boldsymbol{B}$, so that $\boldsymbol{B} = \boldsymbol{V}\boldsymbol{D}\boldsymbol{V}^{-1}$
      - This algorithm requires $\boldsymbol{B}$'s eigenvectors to be linearly independent so that $\boldsymbol{V}$ is invertible
      - The function `expm` instead uses $\sum_{k=0}^\infty \frac{1}{k!}\boldsymbol{B}^k$, which has no such requirement on $\boldsymbol{B}$
      - Therefore `^` may give a result different from `expm`; in particular, `^` may raise an error
  - `A ^ a` is $\lim_{\mathbb{Q}\ni q\to a} \boldsymbol{A}^q$
  - `a ^ b` is equivalent to `a .^ b`
- The transpose `.'` is the only matrix operator that contains a dot `.` yet is not an [[Matlab Array Operations|array operation]]
