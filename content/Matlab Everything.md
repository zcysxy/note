---
publish: true
created: 2026-05-07T16:36:58
modified: 2026-05-07T17:23:10
published: 2026-05-07T21:23:12.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# Matlab Everything

## Basic Remarks

- Design philosophy:
  1. Designed around [[Matlab Array|arrays]]
  2. Designed around `double`-precision complex numbers
  3. Object-oriented design
- All numeric values are `double` by default
  - This includes the "integers" produced by various rounding methods
- The empty array `[]` is also of class `double`
- Array indices start from ++1++
- The default rounding mode is **rounding half up away from 0**
  - This is also the rounding mode used by _round_
- Any operation in MATLAB that returns a value will print to the Command Window by default; use a semicolon `;` to suppress output, especially in scripts
  - `;` also lets you place multiple statements on a single line
  - For example, `a = 1; b = 2; a + b` returns `ans = 3`
- Control-flow blocks are terminated with the keyword `end`
- Two function-call syntaxes: [[Matlab Command-Function Duality]]

## Function Inputs

> MATLAB's rules for function inputs are unusual — many rules, even more exceptions.

- For binary operations, input arrays must satisfy [[Matlab Compatible Array Sizes]]
- Functions designed for matrices typically also work on N-D arrays, usually operating on the plane spanned by the first two dimensions
- Functions that accept numeric arguments often also accept **character** arguments

## Basic Syntax

- The square brackets `[]` that delimit an array generally cannot be omitted; they may only be dropped when generating a vector with the colon operator `:`
