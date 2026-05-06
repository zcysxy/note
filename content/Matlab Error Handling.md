---
publish: true
aliases:
  - try/catch Statement
created: 2023-08-02T18:42:38
modified: 2023-10-01T22:07:57
published: 2026-05-01T00:08:27.031-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Control Statements]]"
---

# Error Handling

错误控制语句,即 _try_, _catch_ 语句, 是 MATLAB 四大**程序结构控制语句**之一.

最基本语法:

```octave
try
    try_block
catch
    catch_block
end
```

程序运行时, 首先尝试执行 _try_ 语句下 _try\_block_, 如果没有错误发生, 则程序通过, 不执行 _catch_ 语句下 _catch\_block_; 若发生错误, 则立刻转而执行 _catch_ 语句下 _catch\_block_.
