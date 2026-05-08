---
publish: true
aliases:
  - try/catch Statement
created: 2023-08-02T18:42:38
modified: 2026-05-07T21:07:49
published: 2026-05-07T21:07:51.151-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Control Statements]]"
state: done
---

# Error Handling

The error-handling statement—`try`/`catch`—is one of MATLAB's four **flow-control statements**.

Basic syntax:

```octave
try
    try_block
catch
    catch_block
end
```

When this runs, MATLAB first attempts the _try\_block_ under `try`; if no error occurs, the program proceeds and the _catch\_block_ under `catch` is skipped. If an error is raised, control immediately transfers to the _catch\_block_.
