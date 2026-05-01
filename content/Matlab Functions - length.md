---
publish: true
created: 2024-02-02T04:44:24.175-05:00
modified: 2026-05-01T00:07:18.433-04:00
published: 2026-05-01T00:07:18.433-04:00
---

# length

[[Matlab Functions List]]

---

- `L = length(X)` returns the length of the **largest array dimension** in _X_
  - For **vectors**, the length is simply the number of elements
  - For arrays with more dimensions, the length is `max(size(X))`
  - 一般情况下 empty array 长度为 0, 但定义多维 empty array 可能有正长度
