---
publish: true
title: Matlab Functions List
created: 2021-08-17T21:58:15
modified: 2026-05-07T22:21:34
published: 2026-05-07T22:21:35.699-04:00
tags:
  - pub-matlab
aliases:
type: index
sup:
  - "[[MATLAB]]"
state: "[[%wip]]"
---

# Matlab Functions List

> [!rmk]
>
> - \~~Only functions referenced in my notes are listed.~~
> - Functions without a dedicated note are those that
>   - have a single syntax with nothing else worth saying,
>   - duplicate the usage of another function, or
>   - are rarely used
>     - For these, only the most basic syntax is kept.
> - Symbols
>   - `...` denotes variable-length argument omission
>   - `__` repeats the preceding syntax
>   - `<>` marks an optional argument with a default value
>   - `<[]>` means the brackets `[]` may be omitted, i.e. the argument may be either a variable-length list or an array

## Basics

- [[Matlab Functions - save, load|save, load]]
- [[Matlab Functions - exist|exist]]
- [[Matlab Functions - iskeyword|iskeyword]]
- [[Matlab Functions - clear|clear]]
- [[Matlab Functions - isequal|isequal]]

## Array Related

- [[Matlab Functions - linspace|linspace]]
- [[Matlab Functions - logspace|logspace]]
- `isempty`
- `isscalar`
- `isvector`
- `issparse`

## Graphics Related

- [[Matlab Functions - fplot|fplot]]

## Mathematics

- [[Matlab Random Number Generation]]
- `round(a)`: nearest integer to _a_; break ties by rounding away from zero
- `fix(a)`: nearest integer to _a_ toward $0$
- `floor(a)`: nearest integer to _a_ toward $-\infty$
- `ceil(a)`: nearest integer to _a_ toward $+\infty$
- `real(z)`: real part of complex number _z_
- `imag(z)`: imaginary part of complex number _z_
- `abs(z)`: absolute or modulus
- `angle(z)`: phase angle in radians, in the range $(-\pi, \pi]$
- `conj(z)`: conjugate of complex number _z_
- `complex(a,b)`: complex number with real part _a_ and imaginary part _b_

### Matrix Manipulation

- [[Matlab Function - spdiags]]

## Data Type Construction

- [[Matlab Functions - struct|struct]]

## Identity Test

- Any function that starts with `is` returns a [[Matlab Types - Logical|logical value]] indicating whether the tested variable satisfies a certain condition
- Without special comment, the syntax is `iscond(a)`, which returns `1` if the condition `cond` is satisfied by variable `a`, and `0` otherwise
- `isa(var,type)` tests if `var` is of type `type`
- `isnumeric`
- `isfloat`
- `isstruct`
- `islogical`
- `ischar`
- `iscell`
- `iscellstr` tests if input is a cell array of strings
- `isnan`
- `isinf`
- `isfinite`
- `isinteger`
- `isreal`
- `isscalar`
- `isvector`
- `issparse`
- `isspace`
- `isempty`
- `isdir`
- `iskeyword`
- `isvarname` tests if the input is a valid variable name
- `isglobal`
- `ismember(var,set)` tests if `var` is a member of `set`
- `isequal(a,b,...)` tests if all inputs are equal
- `isequalwithequalnans(a,b,...)` tests if all inputs are equal, treating NaN values as equal
- `issorted`
- `isfield(struct,field)` tests if `struct` has a field named `field`
