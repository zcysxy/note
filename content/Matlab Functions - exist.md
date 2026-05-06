---
publish: true
created: 2024-02-02T04:44:24.174-05:00
modified: 2026-05-01T00:08:27.332-04:00
published: 2026-05-01T00:08:27.332-04:00
tags:
  - pub-matlab
---

# exist

[[Matlab Functions List]]

---

- `exist variable` 返回 %variable% 对应**整数**, 若为 0 则无重名
- `exist('variable)` 同上

对应整数表

| Integer | Meaning                                          |
| ------- | ------------------------------------------------ |
| 0       | name does not exist or cannot be found           |
| 1       | name is a **variable** in the Workspace          |
| 2       | name is a **file** with extension `.m`, `.mlx`, or `.mlapp`, or is `file.ext` which exists in the folder  |
| 3       | name is a MEX-file on your MATLAB search path    |
| 4       | name is a Simulink model or library file on your MATLAB search path     |
| 5       | name is a built-in **function**                  |
| 6       | name is a P-code file on your MATLAB search path |
| 7       | name is a **folder**                             |
| 8       | name is a **class**                              |
