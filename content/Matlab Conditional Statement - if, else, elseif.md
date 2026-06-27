---
publish: true
created: 2026-05-07T20:55:06
modified: 2026-05-07T21:09:14
published: 2026-05-08T01:09:18.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Conditional Statement]]"
state: done
---

# if, else, elseif

```octave
if logical_expression_1
    block1
elseif logical_expression_2
    block2
else
    block3
end
```

- The `elseif` and `else` clauses are optional
  - With `else` present, the conditional is exhaustive
- `elseif` may appear any number of times, peer to `if` and `else` and mutually exclusive with them
- _logical\_expression\_i_ is a **conditional expression**—one that returns a [[Matlab Types - Logical|logical value]]—typically built with [[Matlab Relational Operations]] and [[Matlab Logical Operations]]
- _logical\_expression\_i_ may also be **any array** _A_, in which case it is equivalent to the conditional expression `all(A(:))`
  - However, when _A_ is an empty array, _A_ in this position is equivalent to logical false `0`, while `all(A(:))` returns logical true `1`
