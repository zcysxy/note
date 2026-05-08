---
publish: true
created: 2023-08-03T06:42:38
modified: 2026-05-07T17:02:30
published: 2026-05-07T17:02:32.084-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# MATLAB Basics

## Basics

- MATLAB is designed around **double precision**, **complex numbers**, and **arrays**
- End any value-producing statement with `;` to suppress its result display, especially in scripts
- The comment marker is `%`
  - `%{...%}` for multi-line comments
- MATLAB is **insensitive to indentation**; the end of a block is marked by `end`

## Numeric Constants

| Constant     | Description                             |
|--------------|-----------------------------------------|
| `pi`         | $\pi$                                   |
| `eps`        | Floating-point relative precision $2.2204e\text{-}16$ |
| `i`, `j`     | Imaginary unit $\sqrt{-1}$              |
| `inf`, `Inf` | Infinity, e.g. $\frac{1}{0}$            |
| `nan`, `NaN` | Indeterminate (not a number), e.g. $\frac{0}{0}$ |
| `intmax`     | Largest representable integer $2147483647$ |
| `intmin`     | Smallest representable integer $-2147483648$ |
| `realmax`    | Largest representable positive real $1.7977e\text{+}308$ |
| `realmin`    | Smallest representable positive real $2.2251e\text{-}308$ |

## Keywords

| Keyword | Usage |
|-|-|
| break |
| case |
| catch |
| classdef |
| continue |
| else |
| elseif |
| end |
| for |
| function |
| global |
| if |
| otherwise |
| parfor |
| persistent |
| return |
| spmd |
| switch |
| try |
| while |

## Variables

Like [[Python]], MATLAB does not require variable declarations or type annotations.

### Variable Naming Rules

1. Must consist only of **letters, digits, and underscores**, and must begin with a **letter**
2. Case-sensitive
3. Length must not exceed **31 characters**
4. Must not be a [**keyword**](#keywords)
5. May reuse a constant or function name
   - After such reuse, the name no longer refers to the original constant or function

#### Validating Variable Names

- Use [[Matlab Functions - iskeyword]] to check whether a name is a keyword
- Use [[Matlab Functions - exist]] to check whether a name is already in use as a variable, function, file, or folder

### Predefined Variables

| Variable  | Description                                              |
|-----------|----------------------------------------------------------|
| `ans`     | Default variable that receives a result when no assignment is given |
| `nargin`  | Number of input arguments actually passed to a function  |
| `nargout` | Number of output arguments actually requested            |
