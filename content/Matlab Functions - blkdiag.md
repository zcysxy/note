---
publish: true
created: 2024-02-02T04:44:24.173-05:00
modified: 2026-05-01T00:07:18.075-04:00
published: 2026-05-01T00:07:18.075-04:00
---

# blkdiag

[[Matlab Functions List]]

---

- `B = blkdiag(A1,...,AN)` returns the **block diagonal matrix** created by aligning the input matrices _A1, ..., AN_ along the diagonal of _B_

```octave
>> A1 = ones(2,2); A2 = 2*ones(3,2); A3 = 3*ones(2,3); 

>> B = blkdiag(A1, A2, A3)
B =
     1     1     0     0     0     0     0
     1     1     0     0     0     0     0
     0     0     2     2     0     0     0
     0     0     2     2     0     0     0
     0     0     2     2     0     0     0
     0     0     0     0     3     3     3
     0     0     0     0     3     3     3
```
