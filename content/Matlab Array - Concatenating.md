---
publish: true
created: 2026-05-07T16:38:51
modified: 2026-05-07T17:23:42
published: 2026-05-07T21:23:44.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Array]]"
state: done
---

# Matlab Array - Concatenating

- All operations below return a **new array**.

## General Concatenation

- Each input array's size must match the chosen concatenation axis, otherwise an error is raised.

- Horizontal concatenation
  - `[A1 A2 ...]`
  - Function `horzcat(A1,A2,...)`

- Vertical concatenation
  - `[A1; A2; ...]`
  - Function `vertcat(A1,A2,...)`

- Concatenation along an arbitrary dimension
  - Function `cat(dim,A1,A2,...)` concatenates _A1, ..., An_ along dimension _dim_
    - _dim_ may exceed the input arrays' dimensionality, in which case a **higher-dimensional array** is created; any unspecified intermediate dimensions are filled with size 1

- Horizontal concatenation corresponds to _dim = 2_, and vertical concatenation to _dim = 1_.

## Block Operations

The functions below take **matrices** as inputs and treat them as building blocks of a larger array:

- Block-diagonal: [[Matlab Functions - blkdiag|blkdiag]]
- Tile a block: [[Matlab Functions - repmat|repmat]]
- [[Kronecker Tensor Product]] `kron(A,B)`
