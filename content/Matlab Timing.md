---
publish: true
created: 2024-02-02T04:44:24.182-05:00
modified: 2026-05-01T00:07:19.298-04:00
published: 2026-05-01T00:07:19.298-04:00
---

# Timing

[[MATLAB]]

---

MATLAB 中程序运行计时有以下方法

## cputime Method

函数 _cputime_ 返回 MATLAB 启动后 CPU 运行时间, 做差的程序 CPU 运行时间

## tic/toc Method

_tic_, _toc_ 作为**一对**函数称为 stopwatch timer functions. 基本语法如下

```octave
tic
% Code block
toc
```

_tic_ 记录的时间自动传递给 _toc_, _toc_ 再返回差值.

当有多对 _tic_/_toc_ 时, 需要手动记录 _tic_ 并传递给 _toc_.

## timeit

函数 _timeit_ 返回函数运行多次后的平均运行时间, 输入参数为**函数句柄**.

## Remarks

- _cputime_ 返回的是 CPU 时间; _timeit_ 和 _tic_/_toc_ 返回的是 wall-clock 时间
  - CPU time for the pause function is typically small, but the wall-clock time accounts for the actual time that MATLAB execution is paused
  - The _cputime_ function measures the total CPU time and sums across all threads
    - If your function uses four processing cores equally, the CPU time could be approximately four times higher than the wall-clock time
- Unlike _tic_/_toc_, the _timeit_ function calls your code multiple times, and, therefore, considers **first-time costs**
