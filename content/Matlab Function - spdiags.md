---
publish: true
title: Matlab Function - spdiags
created: 2021-10-22T14:30:33
modified: 2021-10-22T14:39:01
published: 2026-05-01T00:07:17.982-04:00
aliases:
type: note
sup:
  - "[[Matlab Functions List]]"
state: "[[%wip]]"
---

# spdiags

> Extract nonzero diagonals and create sparse band and diagonal matrices

- `Bout = spdiags(A)` extracts the nonzero diagonals from m-by-n matrix `A` and returns them as the columns in min(m,n)-by-p matrix `Bout`, where p is the number of nonzero diagonals.
- `S = spdiags(Bin,d,m,n)` creates an `m`-by-`n` sparse matrix `S` by taking the columns of `Bin` and placing them along the diagonals specified by `d`.
- `S = spdiags(Bin,d,A)` **replaces** the diagonals in `A` specified by `d` with the columns of `Bin`.

## Examples

### Create Tridiagonal Matrix

Create a tridiagonal matrix using three vectors, change some of the matrix diagonals, and then extract the diagonals.

Create a 9-by-1 vector of ones, and then create a tridiagonal matrix using the vector. View the matrix elements.

```octave
n = 9;
e = ones(n,1);
A = spdiags([e -2*e e],-1:1,n,n);
full(A)
```

```
ans = 9×9

    -2     1     0     0     0     0     0     0     0
     1    -2     1     0     0     0     0     0     0
     0     1    -2     1     0     0     0     0     0
     0     0     1    -2     1     0     0     0     0
     0     0     0     1    -2     1     0     0     0
     0     0     0     0     1    -2     1     0     0
     0     0     0     0     0     1    -2     1     0
     0     0     0     0     0     0     1    -2     1
     0     0     0     0     0     0     0     1    -2
```

Change the values on the main (`d = 0`) diagonal of `A`.

```octave
Bin = abs(-(n-1)/2:(n-1)/2)';
d = 0;
A = spdiags(Bin,d,A);
full(A)
```

```
ans = 9×9

     4     1     0     0     0     0     0     0     0
     1     3     1     0     0     0     0     0     0
     0     1     2     1     0     0     0     0     0
     0     0     1     1     1     0     0     0     0
     0     0     0     1     0     1     0     0     0
     0     0     0     0     1     1     1     0     0
     0     0     0     0     0     1     2     1     0
     0     0     0     0     0     0     1     3     1
     0     0     0     0     0     0     0     1     4
```

Finally, recover the diagonals of `A` as the columns in a matrix.

```octave
Bout = spdiags(A);
full(Bout)
```

```
ans = 9×3

     1     4     0
     1     3     1
     1     2     1
     1     1     1
     1     0     1
     1     1     1
     1     2     1
     1     3     1
     0     4     1
```
