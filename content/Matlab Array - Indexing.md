---
publish: true
title: Matlab Array - Indexing
created: 2021-08-17T21:58:15
modified: 2021-12-26T10:57:30
published: 2026-05-07T17:22:25.147-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Array]]"
state: done
---

# Matlab Array - Indexing

MATLAB's array structure is well suited to accessing, modifying, and extending elements. There are three indexing modes: [**Position Indexing**](#position-indexing), [**Linear Indexing**](#linear-indexing), and [**Logical Indexing**](#logical-indexing).

- Compared with [[Python]], MATLAB arrays are also **mutable objects**.

## Position Indexing

Syntax: `A(ind_1,...,ind_n)`

- _n_ equals the number of dimensions of the array
- Each _ind\_i_ indexes the corresponding dimension
  - Can be a scalar or a vector
  - Or the operator `:`
    - Acts like a [[Python Slice]]
      - A bare `:` selects **all** elements along that dimension
    - Adds a special _end_ keyword
  - Must lie within the valid range for that dimension
- Effectively, each _ind\_i_ is an **index array**; the result is the array of _A_'s elements at those indices, arranged in the same **relative positions**

Example:

```octave
>> A = rand(3,3,3)
A(:,:,1) =
    0.8147    0.9134    0.2785
    0.9058    0.6324    0.5469
    0.1270    0.0975    0.9575
A(:,:,2) =
    0.9649    0.9572    0.1419
    0.1576    0.4854    0.4218
    0.9706    0.8003    0.9157
A(:,:,3) =
    0.7922    0.0357    0.6787
    0.9595    0.8491    0.7577
    0.6557    0.9340    0.7431
>> A(1,2,3)
ans =
    0.0357
>> A(1,1,[1 3])  
ans(:,:,1) =
    0.8147
ans(:,:,2) =
    0.7922
>> A(1,[1,3],1)      
ans =
    0.8147    0.2785
>> A(:,1,1)
ans =
    0.8147
    0.9058
    0.1270
>> A(1,1:2,1)
ans =
    0.8147    0.9134
>> A(1,1:3:2,1)
ans =
    0.8147
>> A(1,2:end,1)     
ans =
    0.9134    0.2785
```

## Linear Indexing

Linear indexing is also positional, but it applies when fewer indices than dimensions are passed: the remaining dimensions are flattened into a **single dimension**.

In particular, a single index can reach every element.

- While MATLAB displays arrays according to their defined sizes and shapes, they are actually stored in memory as a **single column** of elements.

The flattening order, illustrated for a 2-2-2-... array, is:

1. 1-1-1-...
2. 2-1-1-...
3. 1-2-1-...
4. 2-2-1-...
5. 1-1-2-...
6. 2-1-2-...
7. 1-2-2-...
8. 2-2-2-...

For matrices in particular, this is "column-major order".

Example 1:

```octave
>> B = rand(1,1,2,2,2) 
B(:,:,1,1,1) =
    0.3500
B(:,:,2,1,1) =
    0.1966
B(:,:,1,2,1) =
    0.2511
B(:,:,2,2,1) =
    0.6160
B(:,:,1,1,2) =
    0.4733
B(:,:,2,1,2) =
    0.3517
B(:,:,1,2,2) =
    0.8308
B(:,:,2,2,2) =
    0.5853
>> C=B(1,:)   
C =
    0.3500    0.1966    0.2511    0.6160    0.4733    0.3517    0.8308    0.5853
```

Example 2:

```octave
>> A = rand(3,3,3)
A(:,:,1) =
    0.8147    0.9134    0.2785
    0.9058    0.6324    0.5469
    0.1270    0.0975    0.9575
A(:,:,2) =
    0.9649    0.9572    0.1419
    0.1576    0.4854    0.4218
    0.9706    0.8003    0.9157
A(:,:,3) =
    0.7922    0.0357    0.6787
    0.9595    0.8491    0.7577
    0.6557    0.9340    0.7431
>> A(4)  
ans =
    0.9134
>> A(10)
ans =
    0.9649
```

## Related Functions

- Use [[Matlab Functions - sum|sum]] to add every element of a matrix: `sum(A(:))`
- [[Matlab Functions - sub2ind, ind2sub|sub2ind, ind2sub]]

## Logical Indexing

A conditional expression returns a **logical array** of the same size as the original; conversely, any logical array of matching size can be used as a logical index into the array.

Example:

```octave
>> A = rand(3)
A =
    0.5497    0.7572    0.5678
    0.9172    0.7537    0.0759
    0.2858    0.3804    0.0540
>> ind = A > 0.5
ind =
  3x3 logical array
   1   1   1
   1   1   0
   0   0   0
>> A(ind) = nan
A =
       NaN       NaN       NaN
       NaN       NaN    0.0759
    0.2858    0.3804    0.0540
```
