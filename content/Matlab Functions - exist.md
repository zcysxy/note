---
publish: true
created: 2026-05-07T21:13:07
modified: 2026-05-07T21:17:11
published: 2026-05-07T21:17:13.386-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# exist

- `exist variable` returns an **integer** describing what _variable_ refers to; `0` means no name collision
- `exist('variable')` is equivalent

Integer codes:

| Integer | Meaning                                          |
| ------- | ------------------------------------------------ |
| 0       | name does not exist or cannot be found           |
| 1       | name is a **variable** in the Workspace          |
| 2       | name is a **file** with extension `.m`, `.mlx`, or `.mlapp`, or `file.ext` exists in the folder  |
| 3       | name is a MEX-file on your MATLAB search path    |
| 4       | name is a Simulink model or library file on your MATLAB search path     |
| 5       | name is a built-in **function**                  |
| 6       | name is a P-code file on your MATLAB search path |
| 7       | name is a **folder**                             |
| 8       | name is a **class**                              |
