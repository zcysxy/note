---
publish: true
created: 2026-05-08T01:20:17.000Z
modified: 2026-05-08T01:20:17.000Z
published: 2026-05-08T01:20:17.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# isequal

- `isequal(A1,A2,...,An)` returns logical `1` when _A1_, ..., _An_ are [identical](#equivalent)
  - Indeterminate elements such as `NaN` are treated as unequal to any value, including themselves

## Equivalent

| Type of _A_, _B_                | Condition for `isequal(A,B) == 1`                                              |
|---------------------------------|--------------------------------------------------------------------------------|
| numeric                         | same size + equal values (both real and imaginary parts)                       |
| string scalar, character vector | contain the same sequence of characters                                        |
| structure                       | same field names + same field contents (fields need not be in the same order)  |
| table, timetable, cell array    | all elements and properties are equal                                          |
| function handle                 | both refer to the same named function, or are copies of the same anonymous one |
| ordinal categorical array       | same set of categories + same order                                            |
| object                          | same class + equal property values                                             |

- For a categorical array that is not ordinal, the two arrays may have different sets of categories; `isequal` compares the category names of each pair of elements
- For datetime arrays, `isequal` ignores display format when comparing points in time. If the arrays are all associated with time zones, `isequal` compares the instants in time rather than the clockface times (for example, 01-May-2018 09:00:00 EDT is the same instant as 01-May-2018 06:00:00 PDT, so `isequal` returns true even though the clockface times of 9:00 and 6:00 differ).

### Generalized Numeric

The "numeric" row above is meant in the generalized sense and includes characters, logical values, integer types, and so on. For example, all of the following return logical true:

- `isequal(char(1), 1)`
- `isequal(int8(1), 1)`
- `isequal(true, 1)`

### Function Handles

- For an [[Matlab Anonymous Function|anonymous function]], two anonymous functions with the same expression and parameters can still be considered "different"; only [[Matlab Types - Function Handle|handles]] obtained by **copying via assignment** are treated as equal
- Two [[Matlab Types - Function Handle|function handles]] referring to the same [[Matlab Nested Function|nested function]] are treated as equal only within **the same call** to their parent function
