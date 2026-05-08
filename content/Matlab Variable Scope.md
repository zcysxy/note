---
publish: true
created: 2026-05-07T20:29:54.738-04:00
modified: 2026-05-07T20:40:25.448-04:00
published: 2026-05-07T20:40:25.448-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# Variable Scope

In MATLAB the function workspace is independent of the base workspace; the two cannot share variables directly. The _best_ way to communicate between them is through [[Matlab Functions Arguments|argument passing]].

The methods below offer additional ways to bridge workspaces.

## Global Variables

Variables in a function workspace are _local_ variables; _global_ variables are their counterpart. To read or modify the same variable from inside and outside a function, declare it global with the `global` **keyword** before each access. Without `global`, two same-named variables remain isolated and cannot be reached from another workspace.

- `global` syntax: `global x1 ... xn`
  - Names are separated by whitespace, with no parentheses or commas

Example:

```octave
global x
x = 'gloabal';
y = 'base';
fun();

function fun()
global x y
disp(x)
disp(y)
end
```

This prints `global` but not `base`, because the function _fun_ has not yet created the global _y_.

## Persistent Variables

A persistent variable is a special **local variable**. Ordinary local variables are cleared when the function returns; a persistent variable is preserved in the **function workspace**, so the next call sees the same value the previous call left behind.

- Declare a persistent variable inside a function definition with the `persistent` **keyword**; the syntax mirrors `global`: `persistent x1 ... xn`
- A persistent variable is initialized to an empty array on its first declaration
- Clearing the function (e.g. `clear fun`) also clears its persistent variables, since the entire function workspace is cleared

Example:

```octave
function findSum(inputvalue)
persistent SUM_X

if isempty(SUM_X)
   SUM_X = 0;
end
SUM_X = SUM_X + inputvalue;
```

## Variables in Nested Functions

Variables in [[Matlab Nested Function|nested functions]] are also a special kind of local variable: they cannot be referenced from the parent function or from sibling nested functions.

A [[Matlab Nested Function|nested function]] can, however, read variables from the workspace of any of its **ancestor** functions.
