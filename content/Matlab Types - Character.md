---
publish: true
title: Matlab Types - Character
created: 2021-08-17T21:58:15
modified: 2026-05-07T18:00:20
published: 2026-05-07T22:00:20.000Z
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Types]]"
state: "[[%wip]]"
---

# Character

- In MATLAB, characters and numeric values share equal status. Each character is stored in **Unicode** and occupies **2 bytes**
  - Internally, character operations are really operations on the **numeric** code points; a character is essentially a numeric string
  - Hence ==MATLAB can be said to have only one fundamental data structure: the numeric array==
  - Consequently, most functions that accept numeric arguments also accept character arguments
- Newer versions add the **`string`** type, better suited to string manipulation; for the main differences from `char`, see [[Matlab Characters and Strings]]

## Properties

- Unlike [[Matlab Types - Numeric|numeric]] data, where a single value of any precision has length 1, every single character has length 1
  - `length(1200+3.123i)` = 1; `length('hello')` = 5
- Identity test functions
  - `ischar`: is the input a `char`?
  - `isletter` returns a **logical array** of the same size, indicating whether each element is an **English letter**
  - `isspace` returns a **logical array** of the same size, indicating whether each element is a **whitespace** character
  - [[Matlab Functions - isstrprop|isstrprop]]
- The function `double` converts a character to its ASCII code point

## Creation and Concatenation

- The most basic syntax wraps the characters in single quotes `'`: `'string'`
  - Note that double quotes `"` create a `string` instead
  - A literal single quote is written as `''`
    - e.g. `'I''m Josh'` = `'I'm Josh'`

### Single-Row Character Arrays

To horizontally concatenate `a = 'hello,'`, `b = ' this '`, `c = 'world!'` into a single-row string:

- Use brackets `[]`
  - `[a b c]` = `'hello, this world!'`
- Function `strcat(a,b,c)` = `'hello, world'`
  - `strcat` automatically removes **trailing whitespace** characters
    - whitespace includes space, tab, newline, carriage return, etc.

### Multi-Row Character Arrays

A multi-row character array is a **2-D** character array; it is built by vertically concatenating character arrays of **the same length**:

- Inside `[]`, separate rows with `;`
  - `[a;b;c]`
- Function [[Matlab Functions - char|char]]: `char(a,b,c)`
  - Pads any **empty array** so the rows align
- Function `strvcat(a,b,c)`
  - Not recommended
  - Same usage as `char(a,b,c)`, except empty arrays are skipped (removed)

### Special Character Arrays

- Function `blanks(n)` — creates a row vector of _n_ space characters

## Comparison

- Equality

## Search and Replace

[[!todo#A]]

Related functions:

- `strrep`
- `strfind`
- `findstr`
- `strmatch`
- `strok`
