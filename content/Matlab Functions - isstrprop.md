---
publish: true
created: 2024-02-02T04:44:24.175-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# isstrprop

[[Matlab Functions List]]

---

- `isstrprop(str,category)` 返回与 _str_ 相同大小逻辑数组/cell, 其中元素为对应 _str_ 元素是否属于 _category_ 的判断

**_category_ table**:

| Category   | Description                                    |
|------------|------------------------------------------------|
| `alpha`    | Letters                                        |
| `lower`    | Lowercase letters                              |
| `upper`    | Uppercase letters.                             |
| `alphanum` | Letters or numeric digits                      |
| `digit`    | Numeric digits                                 |
| `punct`    | Punctuation characters.                        |
| `graphic`  | [Graphic characters](#graphic-characters)      |
| `print`    | Graphic characters + `char(32)` (blank space)  |
| `wspace`   | Whitespace characters                          |
| `cntrl`    | Control characters (for example, `char(0:20)`) |
| `xdigit`   | Valid hexadecimal digits                       |

## Graphic characters

`isstrprop` treats all Unicode characters as graphic characters, except for the following:

- Unassigned characters
- Whitespace characters
- The line separator
- The paragraph separator
- Control characters
- Private user-defined characters
- Surrogate characters
