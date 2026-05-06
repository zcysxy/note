---
publish: true
title: Matlab Operator
created: 2026-01-06T20:10:18
modified: 2026-05-01T00:09:34
published: 2026-05-01T00:11:41.228-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[MATLAB]]"
  - "[[Matlab Operations]]"
state: done
---

# Operator

- [Arithmetic Operations](#matlab-arithmetic-operations)
- [Relational Operations](#matlab-relational-operations)
- [Logical Operations](#matlab-logical-operations)
- [String and Character Formatting](#string-and-character-formatting)
- [Other](#other)
- [Operator Precedence](#operator-precedence)

## [[Matlab Arithmetic Operations]]

| Symbol | Role                                             |
|:------:| ------------------------------------------------ |
| `+`    | Addition; Unary plus                             |
| `-`    | Subtraction; Unary minus                         |
| `.*`   | Element-wise multiplication                      |
| `*`    | Matrix multiplication                            |
| `./`   | Element-wise right division                      |
| `/`    | Matrix right division                            |
| `.\`   | Element-wise left division                       |
| `\`    | Matrix left division (also known as _backslash_) |
| `.^`   | Element-wise power                               |
| `^`    | Matrix power                                     |
| `.'`   | Transpose                                        |
| `'`    | Complex conjugate transpose                      |

## [[Matlab Relational Operations]]

| Symbol | Role                     |
|:------:| ------------------------ |
| `==`   | Equal to                 |
| `~=`   | Not equal to             |
| `>`    | Greater than             |
| `>=`   | Greater than or equal to |
| `<`    | Less than                |
| `<=`   | Less than or equal to    |

## [[Matlab Logical Operations]]

|      Symbol       | Role                                     |
|:-----------------:| ---------------------------------------- |
|        `&`        | Find logical AND                         |
|  <code>|</code>  | Find logical OR                          |
|       `&&`        | Find logical AND (with short-circuiting) |
| <code>||</code> | Find logical OR (with short-circuiting)  |
|        `~`        | Find logical NOT                         |

## String and Character Formatting

|  Symbol  | Effect on Text                 |
|:--------:| ------------------------------ |
|   `''`   | Single quotation mark          |
|   `%%`   | Single percent sign            |
|   `\\`   | Single backslash               |
|   `\a`   | Alarm                          |
|   `\b`   | Backspace                      |
|   `\f`   | Form feed                      |
|   `\n`   | New line                       |
|   `\r`   | Carriage return                |
|   `\t`   | Horizontal tab                 |
|   `\v`   | Vertical tab                   |
|  `\xN`   | Hexadecimal number, `N`        |
|   `\N`   | Octal number, `N`              |
| `/`, `\` | File or folder path separation |
|   `..`   | Parent folder                  |
|   `*`    | Wildcard character which can match any one or more characters in the path |
|   `@`    | Class folder indicator         |
|   `+`    | Package directory indicator    |

## Other

- 以下与上面重合的符号指叙述其与上面不同的作用

| Symbol  | Role(s)                                       |
|:-------:| --------------------------------------------- |
|   `=`   | Assignment                                    |
|   `@`   | Function handle construction and reference    |
|    ^    | Calling superclass methods                    |
|   `.`   | Decimal point                                 |
|    ^    | Element-wise operations                       |
|    ^    | Structure field access                        |
|    ^    | Object property or method specifier           |
|  `...`  | Line continuation                             |
|   `,`   | Separator                                     |
|   `:`   | Vector creation; Indexing; For-loop iteration |
|   `;`   | Signify end of row                            |
|    ^    | Suppress output of code line                  |
|    ^    | Separate multiple commands on a single line   |
|  `()`   | Operator precedence                           |
|    ^    | Function argument enclosure                   |
|    ^    | Indexing                                      |
|  `[]`   | Array construction, concatenation             |
|    ^    | Empty matrix and array element deletion       |
|    ^    | Multiple output argument assignment           |
|  `{}`   | Cell array assignment and contents            |
|  `''`   | Character array constructor                   |
|  `""`   | String constructor                            |
|   `%`   | Comment                                       |
|    ^    | Conversion specifier                          |
|  `%%`   | Cell delimiter                                |
| `%{ %}` | Block comments that extend beyond one line    |
|   `!`   | Operating system command                      |
|   `?`   | Metaclass for MATLAB class                    |
|   `~`   | Argument placeholder to suppress specific input or output arguments     |
|  `< &`  | Specify superclasses                          |
|  `.?`   | Specify fields of name-value structure when using function argument validation        |

## Operator Precedence

1. `()`
2. `~`, sign `+`, `-`
3. `^`, `.^`, transpose `'`, `.'`
4. `.*`, `*`, `./`, `/`, `.\`, `\`
5. `+`, `-`
6. `:`
7. `<`, `<=`, `==`, `>=`, `>`, `~=`
8. `&`
9. `|`
10. `&&`
11. `||`
