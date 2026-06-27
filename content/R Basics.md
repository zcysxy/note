---
publish: true
title: R Basics
created: 2022-09-06T16:38:48
modified: 2022-12-12T14:24:08
published: 2026-05-11T15:41:06.516Z
tags:
  - pub-edav
aliases:
type: note
dg-publish: true
sup:
  - "[[R]]"
state: done
---

# R Basics

- Comments start with `#`
  - No specific syntax for multi-line comments
- Index starts from _**1**_ ^wqehih
- Most index in R are **inclusive**
  - `c(1,2,3)[1:2]` returns `1 2`
- The naming convention of files and variables is **snake\_case**
- Print variables using `print`
- Assign a value to a variable using
  - `x <- 1` (preferred traditionally)
  - `1 -> x`
  - `x = 1`
- Variables in [[R]] are dynamic typing like [[Python]]
- The default arithmetics in [[R]] are **element-wise**, unlike [[MATLAB]] ^1e9b8c
- The interactive shell of [[R]] uses an indicator `[x]` to show the index of the printed vector
  - example:

````R
    > x <- 11:30
    > x
     [1] 11 12 13 14 15 16 17 18 19 20 21 22
    [13] 23 24 25 26 27 28 29 30
    ```
- Use function `View()` to view data in a specific RStudio viewer
````
