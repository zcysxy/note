---
publish: true
created: 2026-05-07T20:29:00.648-04:00
modified: 2026-05-07T20:45:23.419-04:00
published: 2026-05-07T20:45:23.419-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Function]]"
state: done
---

# Matlab Functions Types

- For function-call resolution order, see [[Matlab Function Precedence Order]].

Aside from the [main function](#main-function), functions fall into the following categories:

- [Main Function](#main-function)
- [Nested Function](#nested-function)
- [Local Function](#local-function)
- [Private Function](#private-function)
- [Anonymous Function](#anonymous-function)

## Main Function

The main function is the **first** function defined in a **function file**; the term is meaningful only relative to [local functions](#local-function) and [nested functions](#nested-function). Conventionally the main function shares its name with the file.

## Nested Function

See [[Matlab Nested Function]].

## Local Function

A local function is any function defined inside a **script file** (placed at the end of the file), or any non-[nested](#nested-function) function defined after the main function in a **function file**.

- All local functions in a file are peers: any of them can be called from the script's commands or from the main function in a function file, and they may also call **each other**
- Their **order has no effect**
- Local functions cannot be called from another file or from the Command Window
  - You can, however, view the help comment of a local function with `help myFun > myFun_local`, where _myFun\_local_ lives inside the file `myFun.m`
- A local function may not share its name with the file

## Private Function

- A private function has **restricted accessibility**: its `.m` file must live in a subfolder named `private`. Private functions can only be called from `.m` files in the **immediate parent folder** of that `private` folder
  - That immediate parent folder must be the Current Folder or a folder on the MATLAB path
  - Private functions cannot be called from the Command Window
  - The same code can also be invoked from the file itself, files in the same folder, or the Command Window in that folder — but in those contexts it is no longer "private"
- The code of a private function is no different from an ordinary function; you can also have a main function with sub-functions and nested functions inside the same `.m` file
- You can read the help comment of a private function with `help private/private_fun`

## Anonymous Function

See [[Matlab Anonymous Function]].
