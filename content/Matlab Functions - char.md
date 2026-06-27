---
publish: true
created: 2026-05-07T21:12:56
modified: 2026-05-07T21:18:17
published: 2026-05-08T01:18:18.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# char

- `char(A1,...,An)`
  1. When _Ai_ is a string array, [[Matlab Types - Cell|cell]] array, or categorical array, only **one** argument is allowed
     - Converts _A1_ to a [[Matlab Types - Character|char]] array
  2. When _Ai_ is a [[Matlab Types - Character|char]] array
     - Whitespace is **not** trimmed
     - Inputs need not have the same length; each row is right-padded with spaces to match the longest one
  3. When _Ai_ is a [[Matlab Types - Numeric|numeric]] array
     - Converts the **ASCII code points** $\lfloor A_i \rfloor$ to characters
     - Then concatenates them vertically as in case 2
  4. When _Ai_ is an empty array
     - Padded with spaces as in case 2
