---
publish: true
created: 2026-05-07T21:20:26.504-04:00
modified: 2026-05-07T21:25:54.250-04:00
published: 2026-05-07T21:25:54.250-04:00
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
