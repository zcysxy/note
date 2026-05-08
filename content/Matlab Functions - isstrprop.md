---
publish: true
created: 2026-05-07T21:20:22.552-04:00
modified: 2026-05-07T21:20:22.552-04:00
published: 2026-05-07T21:20:22.552-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# isstrprop

- `isstrprop(str,category)` returns a logical array (or cell) the same size as _str_, indicating whether each element of _str_ belongs to _category_

**_category_ table**:

| Category   | Description                                    |
|------------|------------------------------------------------|
| `alpha`    | Letters                                        |
| `lower`    | Lowercase letters                              |
| `upper`    | Uppercase letters                              |
| `alphanum` | Letters or numeric digits                      |
| `digit`    | Numeric digits                                 |
| `punct`    | Punctuation characters                         |
| `graphic`  | [Graphic characters](#graphic-characters)      |
| `print`    | Graphic characters + `char(32)` (blank space)  |
| `wspace`   | Whitespace characters                          |
| `cntrl`    | Control characters (for example, `char(0:20)`) |
| `xdigit`   | Valid hexadecimal digits                       |

## Graphic Characters

`isstrprop` treats all Unicode characters as graphic characters, except for the following:

- Unassigned characters
- Whitespace characters
- The line separator
- The paragraph separator
- Control characters
- Private user-defined characters
- Surrogate characters
