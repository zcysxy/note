---
publish: true
created: 2022-05-28T03:34:21
modified: 2026-05-07T17:19:57
published: 2026-05-07T17:20:05.165-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Array]]"
state: done
---

# Matlab Array - Creating

## Creating

- The methods below create new arrays directly; they do not include constructing a new array by combining, concatenating, or slicing an existing one.

### Direct Construction

Use square brackets `[]` together with commas `,` (or spaces) and semicolons `;`:

- List all elements inside `[]`
- Within a **row**, separate elements with `,` or whitespace
- Separate rows with `;`

### Row Vectors

- Arithmetic sequences
  - Operator `:`: `<[start:<step>:end]>`
    - All three operands are `double`
    - _step_ defaults to 1
    - _end_ need not be ≥ _start_; in that case _step_ must be negative, otherwise the result is empty
    - The first element of the result is _start_; the last is `start + floor((end - start) / step) * step`
  - Function [[Matlab Functions - linspace|linspace]]
- Geometric sequences
  - Function [[Matlab Functions - logspace|logspace]]

### Column Vectors

- Transpose operator `'`

### 2-D Arrays

```octave
A = [1 2 3; 2 5 6; 1 4 5];
B = [1:5; linspace(3, 10, 5); 3 5 2 6 4];
C = [[1:3]' linspace(2, 3, 3)' [3 5 6]'];
```

### Special Arrays

- Zero array: function [[Matlab Functions - zeros]]
- Ones array: function`ones`
  - Same syntax as [[Matlab Functions - zeros|zeros]], with 0 replaced by 1
- Identity array: function`eye`
  - Same syntax as [[Matlab Functions - zeros|zeros]]; 1 on the main diagonal, 0 elsewhere
  - Cannot create N-D (more than 2-D) arrays
- Uniformly distributed random array: function`rand`
  - Same syntax as [[Matlab Functions - zeros|zeros]], with 0 replaced by samples drawn **uniformly** on $[0,1]$
  - However,`typename` may only be`single` or`double`
- Normally distributed random array: function`randn`
  - Same as`rand`, with the uniform distribution on $[0,1]$ replaced by the **standard normal** distribution on $\mathbb{R}$
- Logical array: functions`true` and`false`
  - Same syntax as [[Matlab Functions - zeros|zeros]], with 0 replaced by logical 1/0; produces a logical array
  - Therefore there is no`typename` parameter
- Diagonal array: function [[Matlab Functions - diag|diag]]
- Magic square: function [[Matlab Functions - magic|magic]]
