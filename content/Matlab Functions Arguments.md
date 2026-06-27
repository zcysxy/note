---
publish: true
title: Matlab Functions Arguments
created:
modified: 2021-12-02T20:43:14
published: 2026-05-07T21:30:58.000Z
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Function]]"
state: done
---

# Input and Output Arguments

A MATLAB function declaration must directly name its **input and output parameters** as formal arguments. Every function has its own workspace; with the exception of [[Matlab Nested Function|nested functions]], which can see the parent's variables, a function's workspace is isolated from every other workspace. Calls therefore communicate by **passing arguments**: actual arguments are bound to formal parameters.

- Formal parameters do not need a type annotation.

MATLAB has only ordinary parameters and [variable-length parameters](#variable-number-of-arguments); **there are no keyword arguments**.

## Multiple Arguments

A call may have multiple actual or formal input/output arguments. The syntax is:

```octave
[y_1,...,y_j] = myFun(x_1,...,x_i) % j<=m & i<=n

function [out_1,...,out_m] = myFun(in_1,...,in_n)
...
end
```

- For actual **output arguments** at the call site
  - They are bound to formal output arguments in order
  - There must not be more actual outputs than formal outputs
  - If fewer outputs are requested than declared, only the first _m_ are produced
  - The default output is the **first** parameter
    - e.g. `myFun(...)` ⇒ `ans` = _out\_1_
  - Use the tilde [[Matlab Operator]] `~` as a placeholder to discard an output
    - e.g. `[~, a] = myFun(...)` requests two outputs and discards the first

- For actual **input arguments**
  - They generally need to **correspond one-to-one** (in order and number) with the formal inputs
    - "Generally" means whenever the function actually uses that argument
    - Hence you can use [[Matlab Conditional Statement]] together with the actual argument count to control the function's flow

- The functions `nargin` and `nargout` return the number of input/output arguments
  - `nargin(fun)`, `nargout(fun)` return the number of formal input/output arguments declared for _fun_
  - `nargin`, `nargout` (called inside a function definition) return the number of actual input/output arguments at the current call site

- Combining `nargin`, `nargout` with [[Matlab Conditional Statement]] handles calls that supply different numbers of inputs/outputs
  - Example:

    ```octave
    function [y1,y2] = fun(x1,x2)
    if nargin == 1
        y1 = x1;
        if nargout == 2
            y2 = x1;
        end
    else
        if nargout == 1
            y1 = x1 + x2;
        else
            y1 = x1;
            y2 = x2;
        end
    end
    ```

- When no actual outputs are requested, `nargout` = 0, but the **first** output is still bound to `ans`

- When an [[Matlab Conditional Statement - if, else, elseif|if/elseif]] uses a function call directly as its condition, `nargout` = 1
  - i.e. `if fun()` is equivalent to `tf = fun(); if tf`

## Variable Number of Arguments

- When the number of input/output arguments is not fixed, or you want more flexible argument handling, use `varargin`/`varargout` as the formal input/output parameter
- After the call, `varargin`/`varargout` is a **cell array** whose elements are the actual arguments
  - Inside the function definition you therefore access elements of `varargin` and assign elements to `varargout` using cell-array syntax
  - At the call site, however, you still pass arguments using ordinary array syntax
- Variable-length parameters can be combined with regular ones, but must be listed **last**
- The length of `varargin`/`varargout` still counts toward `nargin`/`nargout`
- Example:

```octave
function [a, varargout] = fun(varargin)
a = 'hello';
if nargin >= 1
    for i = 1:length(varargin)
    varargout{i} = strcat(varargin{1},',');
    end
end
varargout{end+1} = '!';
end
```
