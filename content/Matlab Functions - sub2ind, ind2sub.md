---
publish: true
created: 2026-05-07T21:28:34.543-04:00
modified: 2026-05-07T21:28:34.543-04:00
published: 2026-05-07T21:28:34.543-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# sub2ind, ind2sub

## sub2ind

- `ind = sub2ind(sz,I1,...,In)` returns the **linear indices** _ind_ corresponding to the multidimensional subscripts _I1, ..., In_ for an array of size _sz_
  - _sz_ is a **vector** with _n_ (or more) elements giving the size of each array dimension
  - Each returned value is a **single linear index**
  - _I1, ..., In_ must be **vectors of equal length**

### Example

The mapping from subscripts (indexing by **position**) to linear indices for a 3-by-3 matrix is illustrated below.

![](https://www.mathworks.com/help/examples/matlab/win64/ConvertSubscriptIndicesToLinearIndicesForMatricesExample_01.png)

Specify row and column subscripts in a 3-by-3 matrix and convert them to linear indices:

```octave
>> row = [1 2 3 1];
>> col = [2 2 2 3];
>> sz = [3 3];
>> ind = sub2ind(sz,row,col)
ind =
    4     5     6     7
```

## ind2sub

- `[I1,I2,...,In] = ind2sub(sz,ind)` returns _n_ arrays _I1, ..., In_ containing the **multidimensional subscripts** equivalent to the **linear indices** _ind_ for an array of size _sz_
  - _sz_ is a vector with _n_ elements giving the size of each array dimension
  - _ind_ must be a vector or scalar of **single** linear indices
