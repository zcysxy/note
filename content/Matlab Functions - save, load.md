---
publish: true
created: 2024-02-02T04:44:24.177-05:00
modified: 2026-05-01T00:08:27.559-04:00
published: 2026-05-01T00:08:27.559-04:00
tags:
  - pub-matlab
---

# save, load

<<Matlab Functions List>>

---

- `save <filename> <variable1> <variable2> ...` 或 `save(<'filename.mat'> <'variable1', 'variable2' ...>)` 将变量 %variable1%, %variable2%, ... 保存到文件 `filename.mat`
  - 默认 _filename_ 为 _matlab_
  - 默认保存所有变量
  - 第一种语法后添加 option `-append` 则为附加变量到相应文件
- `load <filename> <variable1> <variable2> ...` 或 `load(<'filename.mat'> <'variable1', 'variable2' ...>)` 同理
