---
publish: true
created: 2026-05-07T20:55:14
modified: 2026-05-07T21:08:52
published: 2026-05-07T21:08:54.053-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Conditional Statement]]"
state: done
---

# switch, case, otherwise

```octave
switch expression
    case value_1
        block_1
    case value_2
        block_2
    otherwise
        block_3
end
```

When this statement runs, _expression_ is evaluated first; when its result equals[^1] the _value\_i_ of some `case`, that case's block runs. If none of the _value\_i_ match, the `otherwise` block runs. The statement is equivalent to the following [[Matlab Conditional Statement - if, else, elseif|if/else/elseif]]:

[^1]: In my experiments, [[Matlab Functions - isequal|isequal]] is the function that best captures the notion of "equality" used here.

```octave
x = expression;
if isequal(x,value_1)
    block_1
elseif isequal(x,value_2)
    block_2
else
    block_3
end
```

- Like [[Matlab Conditional Statement - if, else, elseif|if/else/elseif]], the `otherwise` clause is optional; when present, the conditional is exhaustive
- There may be any number of `case` clauses, all peer and mutually exclusive
- Here _expression_ must return a **scalar** or **char vector**, in contrast with the [[Matlab Conditional Statement - if, else, elseif|if/else/elseif]] form, where the conditional expression may be any array
- Notably, _value\_i_ may be a **cell array**; in that case _block\_i_ runs whenever any cell in _value\_i_ equals _expression_
