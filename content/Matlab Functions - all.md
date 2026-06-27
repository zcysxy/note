---
publish: true
created: 2026-05-07T21:12:51
modified: 2026-05-07T21:18:32
published: 2026-05-08T01:18:34.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# all

- `all(A,<dimvec>)`
  - For each combination of indices in the dimensions **not** named in _dimvec_, returns logical true `1` iff every element along the dimensions named in _dimvec_ is generalized-true
    - _dimvec_ defaults to the first non-singleton dimension
  - Returns **logical true** when _A_ is an empty array
- `all(A,'all')` tests **every** element of _A_ and returns logical true iff all are true
  - Equivalent to `all(A(:))`

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
