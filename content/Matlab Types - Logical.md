---
publish: true
created: 2026-05-07T17:29:30
modified: 2026-05-07T17:58:11
published: 2026-05-07T17:58:25.913-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Types]]"
state: done
---

# Logical

- Logical values are only `1` and `0`, produced by the **functions** `true` and `false`
  - In MATLAB, `true` and `false` are functions, not constants
- They are distinct from the `1` and `0` of the `double` or integer classes
  - Operations between a `logical` and a `double` are allowed; the result has class `double`
  - A logical value occupies only 1 byte
- The function `logical` converts any non-zero numeric value, or any non-`char(0)` character, to logical true (`1`)
  - **Complex numbers** and `NaN` cannot be converted
  - Only numeric, character, and logical inputs are accepted
- Identity test for the `logical` class: `islogical`
