---
publish: true
created: 2022-05-28T03:34:22
modified: 2023-02-09T14:37:33
published: 2026-05-08T00:29:12.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Function]]"
  - "[[Matlab Functions Types]]"
related:
  - "[[Matlab Types - Function Handle]]"
---

# Anonymous Function

An anonymous function is a special function that does not need to live in a `.m` file, contains exactly **one expression**, and has class [[Matlab Types - Function Handle|function handle]].

- Because it does not need to live in a `.m` file, an anonymous function can be created and called from the Command Window
- Like an ordinary function, an anonymous function may have multiple input/output arguments; the rules are those of [[Matlab Functions Arguments]]

## Creation

```octave
afun = @(arg1,...,argn) expression
```

- _afun_ is the [[Matlab Types - Function Handle|function handle]] of the anonymous function — this is also the standard syntax for creating a function handle
- _arg1_, ..., _argn_ are the formal input parameters
  - You cannot use a conditional statement to vary the body based on the actual argument count, so calls generally need to supply all formal arguments one-to-one
    - "Generally" again refers to the formal arguments that the _expression_ actually uses
  - Of course, an anonymous function may take no inputs at all
- _expression_ is an expression in _arg1_, ..., _argn_

## Remarks

- The expression of an anonymous function may call other functions, and anonymous functions may even be **nested**
- Unlike a [[Matlab Types - Function Handle|function handle]] for an ordinary function, an anonymous function's handle stores the entire definition of the function it represents
- An anonymous function has its own function workspace; uniquely, it can read variables from the base workspace at creation time, but those values are then **frozen as constants** in its workspace and disconnected from the base workspace
  - Example:

```octave
>> a = 1;
>> f = @(x) x .* a;
>> disp(f(1))
    1
>> a = 5;
>> disp(f(1))
    1
>> clear a
>> disp(f(1))
    1
```
