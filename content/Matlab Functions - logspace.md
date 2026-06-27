---
publish: true
created: 2026-05-07T21:20:27
modified: 2026-05-07T21:25:27
published: 2026-05-08T01:25:29.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# logspace

- `y = logspace(a,b)` generates a row vector _y_ of ++50++ logarithmically (geometrically) spaced points between decades $10^a$ and $10^b$
- `y = logspace(a,b,n)` generates _n_ points between decades $10^a$ and $10^b$

<!-- endlist -->

- The result always includes _start_ ($10^a$) and _end_ ($10^b$)
- The output has length _n_
