---
publish: true
created: 2026-05-07T16:37:34
modified: 2026-05-07T16:59:57
published: 2026-05-07T20:59:58.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# Matlab Desktop

Unlike most programming languages, MATLAB's Desktop application is central to the experience — although it is not strictly required. For example, you can use the [MATLAB Engine API for Python](https://www.mathworks.com/help/matlab/matlab_external/install-the-matlab-engine-for-python.html) to drive an embedded MATLAB terminal inside [[VSCode]] in place of the Desktop.

MATLAB Desktop (R2020b) includes 3 panels:

1. Current Folder — Access your files
2. Command Window — Enter commands at the command line, indicated by the prompt `>>`
3. Workspace — Explore data that you create or import from files.

The first two are similar to the command prompt of any language; the distinctive panel is the Workspace, which represents the working memory and shows every variable in the current project.

## Command Window

- Like the interactive REPL of other languages, the Command Window is suited to running short, throwaway code and shows the results
- You can run a `file.m` from the Current Folder by typing `file`
  - Do not include the extension
  - You cannot run a file from the system shell with `matlab file.m`
  - You can also run a file with `run relative/or/absolute/path.m`
- Expressions without an assignment are bound to the default variable `ans`
  - `ans` is also stored in the Workspace
- For long commands, soft-wrap with `...` followed by Enter
  - `...` is treated as a **space** at execution time
  - Code after `...` on the same line is ignored, so a **comment** can follow it
- Append `;` to suppress the result display for an individual command

### ⭐ Common Commands

| command          | description                           |
|------------------|---------------------------------------|
| `format [short]` | Display doubles in short format (5 decimal places) |
| `format long`    | Display doubles in long format        |
| `format short e` | Short scientific notation             |
| `format long e`  | Long scientific notation              |
| `format bank`    | Show 2 decimal places                 |
| `format hex`     | Hexadecimal representation            |
| `format rat`     | Approximate rational representation   |
| `format +`       | Show only the sign of each element    |
| `dbstop if error`| Stop at the error site and preserve all relevant variables |
| `who`            | List Workspace variable names         |
| `whos`           | List Workspace variables with details |
| `what`           | List all `.m` and `.mat` files in the Current Folder |
| `clc`            | Clear Command Window                  |
| `clear`          | [[Matlab Functions - clear]]          |
| `save`, `load`   | [[Matlab Functions - save, load]]     |
| `diary`          | Log following input and output in Command Window to file `diary` |
| `cd`             | Change directory                      |
| `delete`         | Delete file(s)                        |
| `help`           | Help documents                        |
| `lookfor`        | Search all MATLAB files for keyword   |
| `run`            | Run the file with the exact path      |
| `quit`, `exit`   | Exit MATLAB                           |

- These commands are not restricted to the Command Window — they may also appear inside an [[Matlab M File]]. They are merely closely associated with the Command Window.

## Workspace

- Workspace variables can be saved to a `.mat` file and loaded back later
  - If the Workspace already contains a variable with the same name as one in the `.mat` file, the loaded value overwrites the existing one
  - Use `save` and `load` to save and load variables [[Matlab Functions - save, load]]
- The command (function) [[Matlab Functions - clear|clear]] clears all Workspace variables
- The command `pack` reorganises memory
- Double-clicking a variable in the Workspace opens it for editing
