---
publish: true
created: 2026-05-08T01:28:25.000Z
modified: 2026-05-08T01:28:25.000Z
published: 2026-05-08T01:28:25.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# sortrows

- `B = sortrows(A,<col>)` sorts the **rows** of a **matrix** _A_ by the column(s) specified by the **vector** _col_
  - When _col_ is omitted, `sortrows` compares the first column first; rows tied on the first column are then compared by the second column, and so on
  - When _col_ is given, rows are compared by the _col(1)_-th column, then the _col(2)_-th, and so on; rows that match in every listed column keep their original order

The following syntaxes behave as in [[Matlab Functions - sort]]:

- `B = sortrows(___,direction)`
- `B = sortrows(___,Name,Value)`
- `[B,index] = sortrows(___)`
