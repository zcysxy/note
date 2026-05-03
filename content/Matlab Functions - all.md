---
publish: true
created: 2024-02-02T04:44:24.173-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# all

[[Matlab Functions List]]

---

- `all(A,<dimvec>)`
  - 固定 _dimvec_ 指定维数之外维数的元素, 相应 _dimvec_ 指定维数的所有元素都为广义逻辑真时返回逻辑真 1
    - _dimvec_ 默认为第一个长度非 1 的维数
  - _A_ 为 empty array 时返回**逻辑真**
- `all(A,'all')` 测试 _A_ **所有**元素, 都为真时返回逻辑真
  - 相当于 `all(A(:))`

## Example

```octave
>> A = [0 1 0];
>> all(A)
ans =
  logical
   0
>> B = [zeros(1,3)' ones(1,3)' zeros(1,3)'];
>> all(B)
ans =
  1x3 logical array
   0   1   0
>> C(:,:,1) = ones(3); C(:,:,2) = zeros(3);
>> all(C,2) 
  3x1x2 logical array
ans(:,:,1) =
   1
   1
   1
ans(:,:,2) =
   0
   0
   0
>> all(C,[1,2])
  1x1x2 logical array
ans(:,:,1) =
   1
ans(:,:,2) =
   0
>> all(B,'all')
ans = 
  logical
   0
```
