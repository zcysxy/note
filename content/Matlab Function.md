---
publish: true
title: Matlab Function
created: 2021-08-17T21:58:15
modified: 2021-10-22T14:30:20
published: 2026-05-07T22:03:13.000Z
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[MATLAB]]"
state: "[[%wip]]"
---

# MATLAB Function

- This note focuses on user-defined functions.

In older MATLAB versions, every user-defined function had to live in its own `.m` file — a sign of how distinctive and central functions are in MATLAB. Modern MATLAB also allows non-function code together with one or more peer-level function definitions in the same `.m` file, but every function definition must come **last**: no non-function code may follow the `end` of a function definition.

Even so, the cleanest convention is to keep each function in its own **same-named** `.m` file. With that layout, no matter whether the function file is in the Current Folder or anywhere on the MATLAB search path, the function can be called by name from any other file or from the Command Window.

- When the name in the `function` declaration differs from the file name, the function can only be called externally via the **file name**.

To distinguish ordinary scripts from function files: a function definition must live in a `.m` file (and cannot be created in the Command Window), whereas a script is just a collection of statements that could equally be entered in the Command Window.

Definitions used below:

function file
: a `.m` file that contains only function definitions

script file
: a `.m` file that is not a function file

## Basic Syntax

The basic syntax of a function definition is:

```octave
function output = myFunction(input)
% H1 comment
% Other comments

function_block
end
```

- The first line is the **function declaration**, specifying the function name and its input/output parameters
- The second line, the _H1_ comment, summarises what the function does; its content is searchable via `lookfor`
- Subsequent comment lines explain the function and are shown by `help`
- The keywords `function` and `end` mark the function's beginning and end
  - In a standalone function file with no nested functions, `end` may be omitted

## [[Matlab Functions Types]]

- For function-call resolution order, see [[Matlab Function Precedence Order]].

Aside from the [main function](#main-function), functions fall into the following four categories:

1. [[Matlab Nested Function|Nested function]]
2. [[Matlab Functions Types#local-function|Local function]]
3. [[Matlab Functions Types#private-function|Private function]]
4. [[Matlab Anonymous Function|Anonymous function]]

## [[Matlab Functions Arguments]]
