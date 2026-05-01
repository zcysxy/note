---
publish: true
created: 2024-02-02T04:44:24.178-05:00
modified: 2026-05-01T00:07:18.758-04:00
published: 2026-05-01T00:07:18.758-04:00
---

# sub2ind, ind2sub

[[Matlab Functions List]]

---

## sub2ind

- `ind = sub2ind(sz,I1,...,In)` returns the **linear indices** ind corresponding to multidimensional subscripts _I1, ..., In_ for a multidimensional array of size _sz_
  - Here sz is a **vector** with _n_ (_or greater than n_) elements that specifies the size of each array dimension
  - 返回的都是元素的 **single linear index**
  - _I1, ..., In_ 为**长度相同 vector**

### Example

The mapping from subscripts (indexing by **position**) to linear indices for a 3-by-3 matrix can be illustrated as in the following.

![](https://www.mathworks.com/help/examples/matlab/win64/ConvertSubscriptIndicesToLinearIndicesForMatricesExample_01.png)

Specify the row and column subscripts in a 3-by-3 matrix. Convert the subscripts to linear indices.

```octave
>> row = [1 2 3 1];
>> col = [2 2 2 3];
>> sz = [3 3];
>> ind = sub2ind(sz,row,col)
ind =
    4     5     6     7
```

## ind2sub

- `[I1,I2,...,In] = ind2sub(sz,ind)` returns _n_ arrays _I1, ..., In_ containing the equivalent **multidimensional subscripts** corresponding to the **linear indices** ind for a multidimensional array of size _sz_
  - Here _sz_ is a vector with _n_ elements that specifies the size of each array dimension
  - _ind_ 需为 **single** indices 组成的 vector 或 scalar
