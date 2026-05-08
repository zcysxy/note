---
publish: true
created: 2026-05-07T21:20:24.215-04:00
modified: 2026-05-07T21:20:24.215-04:00
published: 2026-05-07T21:20:24.215-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# length

- `L = length(X)` returns the length of the **largest array dimension** of _X_
  - For **vectors**, the length is simply the number of elements
  - For higher-dimensional arrays, the length is `max(size(X))`
  - An empty array typically has length 0, but a multi-dimensional empty array can have a positive length
