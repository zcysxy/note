---
publish: true
title: Matlab Functions - sum
created: 2021-12-26T10:56:31
modified: 2021-12-26T11:06:46
published: 2026-05-01T00:07:18.763-04:00
aliases:
type: note
sup:
  - "[[Matlab Function]]"
state: done
---

# Matlab Functions - sum

- `sum(A)`
  - returns the sum of the elements of `A` along the **first array** dimension whose size **does not equal 1**.
    - If `A` is a vector, then `sum(A)` returns the sum of the elements.
    - If `A` is a matrix, then `sum(A)` returns a **row vector** containing the **sum of each column**.
    - If `A` is a multidimensional array, then `sum(A)` operates along the first array dimension whose size does not equal 1, treating the elements as vectors. This dimension becomes 1 while the sizes of all other dimensions remain the same.
- `sum(A,dim)`
  - returns the sum along dimension `dim`.
    - For example, if `A` is a matrix, then `sum(A,2)` is a **column vector** containing the **sum of each row**.
- `sum(A,vecdim)`
  - sums the elements of `A` based on the dimensions specified in the vector `vecdim`.
    - For example, if `A` is a matrix, then `sum(A,[1 2])` is the sum of all elements in A, since every element of a matrix is contained in the array slice defined by dimensions 1 and 2.
- `sum(A,'all')`
  - computes the sum of all elements of A.
    - #R This syntax is valid for versions R2018b and later.
- `sum(_,outtype)`
  - returns the sum with a specified data type, using any of the input arguments in the previous syntaxes.
  - `outtype` can be `'default'`, `'double'`, or `'native'`.
- `sum(___,nanflag)`
  - specifies whether to include or omit NaN values from the calculation for any of the previous syntaxes.
  - `sum(A,'includenan')` includes all NaN values in the calculation while `sum(A,'omitnan')` ignores them.
