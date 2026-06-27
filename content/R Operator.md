---
publish: true
title: R Operator
created: 2022-09-08T18:33:13
modified: 2022-09-22T17:33:42
published: 2026-05-11T15:41:06.518Z
tags:
  - pub-edav
type: note
dg-publish: true
sup:
  - "[[R]]"
state: done
---

# Operator

## Arithmetic

```r
10L + 66L # integer
2.0 * 2L # numeric
1 / 2
c(1,2,3)^2

# Remainder
3 %% 2 # 1 (numeric)
3L %% 2L # 1 (integer)

# Integer Division
5 %/% 2
5 == 2 * (5 %/% 2) + (5 %% 2) # TRUE

# Element-wise product
c(1,2,3) * c(3,2,1)
```

Note that ![[R Basics#^1e9b8c|inline n-link]]. There are special operators for matrix arithmetics.

```r
A %*% B
```

## Comparison

```r
1 > 2
2 <= 3
TRUE == TRUE
FALSE != FALSE

# Element-wise comparison
c(1,2,3) == c(1,2,4) # TRUE  TRUE FALSE
c(1,2,3) == 1 # TRUE FALSE FALSE

# Identify if an element belongs to a vector.
1 %in% c(1,2,3)
```

- Use `near(x,y)` to compare two floating point numbers.

## Logic

```r
TRUE | FALSE # or
TRUE || FALSE # or
TRUE & FALSE # and
TRUE && FALSE # and
!TRUE # not

# Element-wise logic operations
c(TRUE, FALSE, FALSE) | c(FALSE, TRUE, FALSE) # TRUE TRUE FALSE
```

## Assignment

```r
x <- 1
y = 1
z <<- 1
1 -> u
1 ->> w
cat(x, y, z, u, w)
```

- It's a convention to use `<-` rather than `=` for assignment, and leave `=` only for function arguments. The reasons are compatibility and precedence (`<-` is slightly higher, and `=` is used for function arguments before the assignment)

The special assignment operators `<<-` and `->>` are **looking up** operators, and can maintain states. They can assign value to the variables in the parent scopes. See the example

```r
new_counter <- function() {
  i <- 0
  function() {
    i <<- i + 1 # see if you change <<- to <-
    i
  }
}

counter_one <- new_counter() # outer function, with i = 0
counter_two <- new_counter()

counter_one() # call ther inner function, i is changed to 1
counter_one() # i is changed to 2, the state is maintained
counter_two()
```

## Other

```r
# Colon for sequence generating
all(1:4 == seq(1,4,1))
```

- [[R Operator - Pipe]]
