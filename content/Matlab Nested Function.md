---
publish: true
created: 2026-05-07T20:29:21
modified: 2026-05-07T20:44:34
published: 2026-05-07T20:44:40.163-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Function]]"
  - "[[Matlab Functions Types]]"
state: done
---

# Nested Function

A nested function—strictly, an _inner-nested function_—is a function defined entirely inside another function. A nested function may itself contain nested functions.

## Requirements

1. In any file that contains a nested function, every function definition must end with `end`
2. A nested function can appear anywhere within its parent's body (it is no longer required to be last), but cannot appear inside any [[Matlab Control Statements]]

Calling rules involving nested functions:

- An outer function can call functions nested **one level inward**, but **cannot** call functions at **deeper** levels
- A nested function can call other nested functions at the **same level** that share the same parent
- A nested function can also call any of its **ancestor** functions at any depth, or other nested functions sharing one of those ancestors as parent — but it cannot reach into nested functions that are themselves more deeply nested inside such siblings

## Sharing Variables

- A nested function can directly use any variable defined in any of its **ancestor** functions, provided that variable was not defined inside a sibling nested function

## Examples

[[!todo#A]]

A valid example:

```octave
function A()
B(); D();
    function B()
    C(); D();
        function C()
        B(); D();
```
