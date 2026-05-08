---
publish: true
created: 2026-05-07T21:28:11.457-04:00
modified: 2026-05-07T21:28:11.457-04:00
published: 2026-05-07T21:28:11.457-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# save, load

- `save <filename> <variable1> <variable2> ...` or `save(<'filename.mat'> <'variable1', 'variable2' ...>)` saves the variables _variable1_, _variable2_, ... to the file `filename.mat`
  - _filename_ defaults to `matlab`
  - By default, every variable is saved
  - Append `-append` to the first form to add variables to an existing file instead of overwriting it
- `load <filename> <variable1> <variable2> ...` or `load(<'filename.mat'> <'variable1', 'variable2' ...>)` loads with the same syntax
