---
publish: true
created: 2026-05-07T21:11:44
modified: 2026-05-07T21:14:46
published: 2026-05-08T01:14:48.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# Timing

Several methods exist for timing program execution in MATLAB.

## cputime Method

`cputime` returns the CPU time used since MATLAB started; subtracting two values gives the CPU time spent on the code in between.

## tic/toc Method

`tic` and `toc` form a **pair** of stopwatch timer functions. Basic syntax:

```octave
tic
% Code block
toc
```

`tic` records the start time and passes it to `toc` automatically; `toc` then returns the elapsed time.

When multiple `tic`/`toc` pairs are needed, you must capture the value of `tic` manually and feed it into the corresponding `toc`.

## timeit

`timeit` returns the average elapsed time after running the input function repeatedly; it takes a **function handle** as input.

## Remarks

- `cputime` returns CPU time, while `timeit` and `tic`/`toc` return wall-clock time
  - CPU time for the pause function is typically small, but the wall-clock time accounts for the actual time that MATLAB execution is paused
  - The `cputime` function measures the total CPU time and sums across all threads
    - If your function uses four processing cores equally, the CPU time could be approximately four times higher than the wall-clock time
- Unlike `tic`/`toc`, the `timeit` function calls your code multiple times, and therefore considers **first-time costs**
