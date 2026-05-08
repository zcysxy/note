---
publish: true
title: Matlab Characters and Strings
created: 2022-02-22T20:20:09
modified: 2026-05-07T19:11:11
published: 2026-05-07T20:24:47.825-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Types]]"
state: done
source: https://www.mathworks.com/help/matlab/characters-and-strings.html
---

# Characters and Strings

[[Matlab Types - Character|character]] and `string` are both data types for storing text; `string` was introduced in R2016b.

## Different Storage Models

- A character is analogous to a single value in a numeric array: every character is exactly 2 bytes, and its `size` equals the number of characters
- A string is analogous to a numeric array taken as a whole: it consumes far more memory than a `char` containing the same characters, and its `size` is 1

```
a = 'hello'
% a =
%     'hello'

b = "hello"
% b =
%     "hello"

whos
%   Name      Size            Bytes  Class     Attributes
%   a         1x5                10  char
%   b         1x1               164  string
```

## Different Construction Syntax

- A character is created with single quotes `''`
- A string is created with double quotes `""`, or with the `string` function

## Different Methods

Because they are different classes, character and string have different methods, each tailored to their data layout. For instance, to get a text's length, use `length` for a character and `strlength` for a string.
