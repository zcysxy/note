---
publish: true
created: 2026-05-07T17:29:44
modified: 2026-05-07T17:57:53
published: 2026-05-07T17:57:55.053-04:00
tags:
  - pub-matlab
state: done
type: note
sup:
  - "[[Matlab Types]]"
---

# Numeric

## Basics

- The numeric array is the most fundamental, common, and important data type in MATLAB; one could say MATLAB exists to work with numeric arrays
- Numeric values are stored by default as **double precision** (occupying 64 bits of memory)
  - The class of such a value is **`double`**
  - From here on, a numeric value is assumed to be of class `double`
  - The relative precision of `double` is `eps` (a predefined MATLAB variable), giving roughly 16 significant digits
- Numbers are displayed by default in decimal short form (`format short`, 4 decimal places)
  - In the [[Matlab Desktop|Command Window]], `format long` switches to long form (15 decimal places)
- The representable range of absolute values is roughly $[10^{-308}, 10^{308}]$
- Valid numeric literals:
  - Integers: `-99`
    - Leading zeros are allowed, e.g. `03` = `3`
  - Decimals: `9.456`
  - Scientific notation: `1.3e-3` or `1E3`

## Integers

- Functions such as `int8` and `uint16` convert floating-point values to integers; the conversion rule is **half-away-from-zero rounding**
  - This is MATLAB's default rounding mode
- Integer-with-integer arithmetic is permitted only between identical integer types; the result keeps that type
- Any integer type can be combined with a **`double`** floating-point value (but not with `single`); the result has the **integer** type and uses the default rounding rule
- In modern MATLAB, rounding-related functions such as `floor` and `round` return **`double`** values, not integer types

## Floating-Point Numbers

- Floating-point values default to `double`; convert between `single` and `double` with the functions `single` and `double`
- Result types when combining `double` with other types:
  - With a `logical` or `char`: result is **`double`**
  - With an integer: result is the corresponding **integer** type
  - With a `single`: result is **`single`**
- A `single` combined with anything other than an **integer** type produces a **`single`**
- The constants `NaN` and `Inf` are also of class `double`
  - `NaN == NaN` evaluates to `0`
  - `Inf == Inf` evaluates to `1`
