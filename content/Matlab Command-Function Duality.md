---
publish: true
created: 2026-05-07T20:29:40.861-04:00
modified: 2026-05-07T20:49:53.357-04:00
published: 2026-05-07T20:49:53.357-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
---

# Matlab Command-Function Duality

One reason MATLAB feels inconsistent is that it gives equal weight to both **commands** and **functions**. In particular, any function whose inputs are **[[Matlab Types - Character|char]] vectors** and that returns no outputs has an equivalent **command syntax**—the following two lines are equivalent:

- `fun('argin_1',...,'argin_n')`
- `fun argin_1 ... argin_n`

Note these peculiarities of the **command syntax**:

- The function name must be followed by at least one space
- It cannot be followed (no matter how many **spaces** apart) by a left parenthesis `(`; if there is one, MATLAB treats the call as **function syntax**
- It cannot contain the `char`-string single quote `'`
- The only argument separator is **whitespace**—exactly the opposite of function syntax
  - Therefore a `char` argument _arg\_i_ may not contain spaces
- In addition to chaining multiple commands on a single line with `;`, the **command syntax** can also separate them with a comma `,`

More importantly, this duality only applies to **direct [[Matlab Types - Character|char]] vectors**—the arguments may be neither variables nor any other data type. Command syntax effectively wraps each argument in single quotes `'`, as illustrated below:

```octave
>> disp "123"
"123"
>> a = 123;
>> disp a
a
>> a = '123';
>> disp a
a
```

## Recognising Command Syntax

When variable naming is sloppy — say _disp_ is a user-defined variable assigned the value 1 — the following statements are ambiguous:

- `disp .* 1` actually yields `ans = 1` — _disp_ is treated as a variable
- `disp .*1` actually yields `'.*1` — _disp_ is treated as a function

In general, given an identifier (which may name a function or a variable), MATLAB decides its kind from what follows:

- Followed by an assignment `=` — it is a **variable**

- Followed by parentheses `()` — disambiguated by [[Matlab Function Precedence Order]] (variable indexing vs. function call)

- Followed by a **binary operator**
  - If the operator has a **trailing space**, or no leading space, the identifier is a **variable**
  - If the operator has no trailing space but does have a leading space, the identifier is treated as the **command syntax** of a function

- This is one of the rare cases in which MATLAB is sensitive to whitespace.
