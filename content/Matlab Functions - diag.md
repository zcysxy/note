---
publish: true
created: 2024-02-02T04:44:24.174-05:00
modified: 2026-05-01T00:08:27.317-04:00
published: 2026-05-01T00:08:27.317-04:00
tags:
  - pub-matlab
---

# diag

[[Matlab Functions List]]

---

- `D = diag(v)` returns a **square diagonal matrix** with the elements of **vector** _v_ on the main diagonal
- `D = diag(v,k)` places the elements of vector _v_ on the **_&#x6B;_&#x74;h diagonal**
  - _k=0_ represents the main diagonal
  - _k>0_ is above the main diagonal
    - <img align="top" src="https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210125143046.png">
  - _k<0_ is below the main diagonal
- `x = diag(A)` returns a **column vector** of the main diagonal elements of _A_
- `x = diag(A,k)` returns a column vector of the elements on the _&#x6B;_&#x74;h diagonal of _A_
