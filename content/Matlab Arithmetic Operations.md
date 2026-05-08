---
publish: true
created: 2022-05-28T03:34:22
modified: 2023-03-24T00:44:37
published: 2026-05-07T20:50:36.993-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Math]]"
  - "[[Matlab Operations]]"
state: done
---

# Arithmetic Operations

This note focuses on the basic arithmetic **functions**; for the basic operations exposed via **operators**, see [[Matlab Matrix Operations]] and [[Matlab Array Operations]].

## Modulo Division

- `mod`: remainder
  - `mod(a,m)` returns the **remainder** after division of _a_ by _m_
  - \= `a - m.*floor(a./m)`
  - `mod(a,0)` returns _a_
- `rem`: remainder
  - `rem(a,m)` returns the **remainder** after division of _a_ by _m_
  - \= `a - m.*fix(a./m)`
  - `rem(a,0)` returns `NaN`
- `idivide`: integer division
  - `idivide(a,b,<opt>)` returns _a_/_b_ rounded according to _opt_
  - _opt_ defaults to `'fix'`; allowed values are `'fix'`, `'floor'`, `'ceil'`, `'round'`

## Rounding

- `round` rounds half up away from 0
- `fix` rounds towards 0
- `floor` rounds towards negative infinity
- `ceil` rounds towards positive infinity
