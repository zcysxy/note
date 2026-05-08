---
publish: true
aliases: 数组
title: Matlab Array
created: 2021-08-17T21:58:15
modified: 2026-05-07T17:13:28
published: 2026-05-07T17:13:30.091-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Types]]"
state: done
---

# Array

- MATLAB is designed around **arrays**: every data type is stored and operated on in array form
- "Array" is meant in a generalized sense — it can have **a single element**, be **a row or a column** of elements, be **two-dimensional**, **multi-dimensional**, and so on
- Elements may be of **any data type**, e.g. [[Matlab Types - Numeric|numeric]], [[Matlab Types - Logical|logical]], [[Matlab Types - Character|character]], [[Matlab Types - Cell|cell]]
  - However, in non-heterogeneous arrays (i.e. anything other than [[Matlab Types - Cell|cell]] and [[Matlab Types - Structure|structure]] arrays) all elements must share the same type
- MATLAB arrays support an analogue of [[Python Sequence Unpacking]]
  - Unlike Python, where parentheses can typically be omitted, MATLAB always requires the square brackets `[]`
- Within an array, elements at the same dimension are separated by commas `,` or **whitespace**
- Operations that return a value always return a **new array**

## Array Categories

- By number of elements and arrangement:
  - Empty array — 0 elements
    - An empty array has class `double`
  - Scalar — 1 element (one row, one column)
  - Vector — one row or one column of elements (1-D array)
  - 2-D array
  - N-D array
  - In most contexts, MATLAB still treats empty arrays, scalars, and vectors as 2-D.
- By storage:
  - Full (regular) array
  - Sparse array (most elements are zero)
- By element type:
  - Numeric array
  - Character array
  - Logical array, etc.

## Array Properties

- Structural test functions (returning logical values)
  - `isempty`
  - `ismatrix`
  - `isvector`
  - `isrow`
  - `iscolumn`
  - `isscalar`
  - `issparse`
  - $\text{scalar} \subset \text{vector} = \text{row} \cup \text{column} \subset \text{matrix}$
- Array size
  - Function [[Matlab Functions - size]]
  - Function [[Matlab Functions - length]]
  - Function `numel` — total number of elements, equivalent to `prod(size(A))`
  - Function `ndims` — number of dimensions, equivalent to `length(size(A))`
- Type test functions
  - isnumeric
  - isreal
  - isfloat
  - isinteger
  - islogical
  - ischar
  - isstruct
  - iscell
  - iscellstr
- Order test functions
  - issorted: `issorted(A,__)` = `isequal(A,sort(A,__))`
  - issortedrows: `issortedrows(A,__)` = `isequal(A,sortrows(A,__))`

## [[Matlab Array - Indexing]]

[[Matlab Array - Indexing|Array indexing]] can be used to:

- Access or extract a portion of the array
- [Expand the array](#expanding)
- Delete elements: `A(index) = []`

## [[Matlab Array - Creating]]

## [[Matlab Array - Concatenating]]

## Expanding

You can grow an array by writing to a **position index** beyond its current size, as below:

```octave
>> A = ones(3)
A =
     1     1     1
     1     1     1
     1     1     1

>> A(5,5) = 2
A =
     1     1     1     0     0
     1     1     1     0     0
     1     1     1     0     0
     0     0     0     0     0
     0     0     0     0     2
```

- The position index must lie outside _A_'s current size, otherwise the operation just modifies an existing element
- Newly created positions are filled with 0

## Reshaping

- All operations below return a **new array**.

- Flipping
  - Function [[Matlab Functions - flip|flip]]
  - Function `flipud(A)` flips top–bottom (i.e. along dimension 1)
  - Function `fliplr(A)` flips left–right (i.e. along dimension 2)
  - Function `rot90(A,<k>)`
    - Rotates _A_ counter-clockwise by $k\times 90\degree$
    - For N-D arrays, the rotation acts on the **plane spanned by dimensions 1 and 2**

> [!rmk] N-D arrays
>
> Dimensions of an N-D array beyond the second are called "pages" — intuitively, each page stores a matrix.
>
> A useful rule of thumb: most operations defined for matrices extend naturally to N-D arrays, acting on the **plane spanned by dimensions 1 and 2**, i.e. on each page.

- Permuting dimensions[[!todo#A]]
  - Function `permute`
  - Function `ipermute`
- Transpose `'`
- Function [[Matlab Functions - reshape|reshape]]
- Function `squeeze(A)` removes singleton dimensions while keeping at least two dimensions; the elements are unchanged

## Rearranging

- Cyclic shifting
  - Function [[Matlab Functions - circshift|circshift]]
  - Function `B = shiftdim(A,n)` shifts the **dimensions** of an array _A_ by _n_ positions
- Sorting
  - Function [[Matlab Functions - sort|sort]]
  - Function [[Matlab Functions - sortrows|sortrows]]

## Finding

See [[Matlab Functions - find]].
