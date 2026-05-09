---
publish: true
title: R Function
created: 2022-09-08T19:18:55
modified:
published: 2026-05-09T18:10:23.053-04:00
tags:
  - pub-edav
aliases:
type: note
dg-publish: true
sup:
  - "[[R]]"
state: done
---

# R Function

To define a function

```r
jiggle <- function(x) {
    x = x + rnorm(1, sd=.1)
    return(x)
}
jiggle(5)
```

The return function is not necessary; it can be any statement that returns a result. For example

```r
f <- function(x) { x*x }
f(4)
```
