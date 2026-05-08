---
publish: true
created: 2026-05-07T17:29:25
modified: 2026-05-07T17:59:06
published: 2026-05-07T17:59:08.826-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Types]]"
state: done
---

# Function Handle

A function handle is a data type that represents a [[Matlab Function]]. It lets you assign a function to a **variable** and use functions more flexibly. When invoked, a function handle behaves the same as the function it points to.

Note, however, that a function handle is only a **reference** to the original function; it does not store the function's body. If the original function is removed, every handle pointing to it becomes invalid.

## Properties

- `functions` returns detailed information about the function referenced by a handle
- [[Matlab Functions - isequal|isequal]] can compare two function handles
  - Operators such as `==` are not supported on function handles

## Creation Syntax

```octave
fhandle = @funName
```

The operator `@` converts the function _funName_ into a function-handle value and assigns it to the variable _fhandle_.

- A space is allowed after `@`.

## Anonymous Functions

A common use of function handles is to create single-line **anonymous functions**; see [[Matlab Anonymous Function]].

## As a Data Type

To build "function arrays" or "function structures", you rely on the fact that a function handle is itself a data type. For example:

```octave
disp('sin',pi/2) % displays 1

function y = fun(which_fun,x)
s.sin = @sin; % store functions as handles inside a structure
s.cos = @cos;
y = s.(which_fun)(x);
end
```

Some functions accept a function as an argument (_function functions_); the input function must first be converted to a handle before being passed in:

```octave
Sin = @sin
disp(integral(Sin,0,pi)) % displays 2.0000
```

This is a property of the [[Matlab Types|data type]] itself, so the handle does not have to be assigned to a variable — it can be used directly as a function-handle value:

```octave
disp(integral(@sin,0,pi)) % displays 2.0000
disp(integral(@(x) x.^2,0,1)) % displays 0.3333
```

For an anonymous function with no input arguments, you cannot omit the parentheses `()` the way you can with ordinary functions; otherwise the result is the handle's **variable** information rather than a call:

```octave
>> f = @() disp('hello');
>> f()
hello
>> f
  function_handle with value:
    @()disp('hello')
```
