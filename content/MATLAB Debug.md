---
publish: true
title: MATLAB Debug
created: 2023-02-09T16:15:41
modified: 2023-02-09T16:25:05
published: 2026-05-01T00:08:26.000-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[MATLAB]]"
state: "[[%wip]]"
---

# MATLAB Debug

## Without GUI

Without GUI, we cannot set _visual_ breakpoints. However, there is a standard way and a workaround to debug using functions.

### dbstop

`dbstop` is the standard command to pause the file and enter the debug mode. This command can be only executed in the command window before executing a script. The syntax is as follows

```octave
dbstop in FILE at LINENO
dbstop in FILE at LINENO@
dbstop in FILE at LINENO@N
dbstop in FILE at SUBFUN
dbstop in FILE
dbstop in FILE at LINENO if EXPRESSION
dbstop in FILE at LINENO@ if EXPRESSION
dbstop in FILE at LINENO@N if EXPRESSION
dbstop in FILE at SUBFUN if EXPRESSION
dbstop in FILE if EXPRESSION
dbstop if error
dbstop if caught error
dbstop if warning
dbstop if naninf  or  DBSTOP if infnan
dbstop if error IDENTIFIER
dbstop if caught error IDENTIFIER
dbstop if warning IDENTIFIER
```

### keyboard

- `keyboard` is a function **in the script** to stop the execution of the file and gives control to the user's keyboard.
- keyboard mode can be terminated by executing the command
  - `dbcont` — continue
  - `dbquit` — terminate the execution
