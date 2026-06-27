---
publish: true
created: 2026-05-08T01:20:26.000Z
modified: 2026-05-08T01:25:54.000Z
published: 2026-05-08T01:25:54.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# linspace

- `y = linspace(x1,x2)` returns a row vector of ++100++ evenly spaced points between _x1_ and _x2_
- `y = linspace(x1,x2,n)` generates _n_ points; the spacing between them is `(x2-x1)/(n-1)`

<!-- endList -->

- Unlike the `:` operator, `linspace` controls the **number of points**, not the step size
- The result always includes _end_ (here, _x2_)
- The output has length _n_ (default 100)
