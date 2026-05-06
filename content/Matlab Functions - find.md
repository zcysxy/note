---
publish: true
created: 2024-02-02T04:44:24.174-05:00
modified: 2026-05-01T00:08:27.350-04:00
published: 2026-05-01T00:08:27.350-04:00
tags:
  - pub-matlab
---

# find

[[Matlab Functions List]]

---

## Syntax

- `k = find(X,<n>,<dir>)` returns a vector containing the **linear indices** of first/last _n_ **nonzero** element in array _X_
  - _n_ 默认为全部
  - _dir_ 可填 `'fisrt'` 或 `'last'`, 默认为 `'first'`
- `[row,col] = find(___)` returns the row and column subscripts of each nonzero element in array _X_
- `[row,col,v] = find(___)` also returns vector _v_, which contains the nonzero elements of _X_

## Usage

在实际应用中, 经常通过多重[[Matlab Logical Operations|逻辑运算]]嵌套产生**逻辑数组**, 判断数组元素是否符合某种比较关系, 然后用 _find_ 函数查找这个逻辑数组中的非零元素, 返回符合比较关系的元素的**索引**, 从而实现元素访问.

例子:

```octave
>> A = rand(3)
A =
    0.5085    0.7948    0.8116
    0.5108    0.6443    0.5328
    0.8176    0.3786    0.3507
>> test = (A>0.3) & (A<0.7);
>> I = find(test);  
>> A(I)
ans =
    0.5085
    0.5108
    0.6443
    0.3786
    0.5328
    0.3507
```
