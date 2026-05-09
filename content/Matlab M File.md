---
publish: true
created: 2026-05-07T22:16:54
modified: 2026-05-07T22:25:33
published: 2026-05-08T16:41:22.000-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: done
---

# Matlab M File

An M file is a plain-text file with the `.m` extension that MATLAB executes. There are two kinds—**script files** and **function files**—distinguished only by the file's first non-comment line.

## Script File

A script is a sequence of statements that runs in the **base workspace**, just as if the lines had been typed into the Command Window in order.

- No `function` declaration at the top
- Reads and writes the base workspace directly (no separate workspace of its own)
- Modern MATLAB allows local function definitions at the **end** of a script; they are visible only to the script

```octave
% myScript.m
x = 1:10;
y = x.^2;
plot(x, y)
```

## Function File

A function file's first executable line is a [[Matlab Function|function declaration]]. Each call gets its own [[Matlab Variable Scope|function workspace]] that is isolated from the base workspace.

- The file name should match the (main) function name; if it does not, callers from outside the file must use the **file** name
- A function file may also contain [[Matlab Functions Types#Local Function|local functions]] and [[Matlab Nested Function|nested functions]]; only the main function is visible from outside
- See [[Matlab Functions Types]] for the full taxonomy

```octave
% mySum.m
function s = mySum(a, b)
s = a + b;
end
```

## Discovery and the Search Path

MATLAB locates an M file by searching, in order, the **Current Folder** and then every directory on the **MATLAB search path**. The first match wins; resolution within a single folder follows [[Matlab Function Precedence Order]].

- View the path with `path`; add a folder with `addpath`; persist the change with `savepath`
- A folder named `private` has restricted visibility—see [[Matlab Functions Types#Private Function]]
- A folder whose name starts with `+` defines a **package**; one whose name starts with `@` defines a **class**

## Other M-Family Files

- `.mlx` — **Live Script**: same idea as a `.m` script but with rich text and inline output. Edited in the Live Editor; can be exported to `.m`.
- `.p` — **P-code**: an obfuscated, executable form of a `.m` file
- `.mex*` — compiled C/C++/Fortran extensions, with a platform-specific suffix
