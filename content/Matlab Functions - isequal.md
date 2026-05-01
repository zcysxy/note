---
publish: true
created: 2024-02-02T04:44:24.175-05:00
modified: 2026-05-01T00:07:18.373-04:00
published: 2026-05-01T00:07:18.373-04:00
---

# isequal

[[Matlab Functions List]]

---

- \`isequal(A1,A2,...,An) 返回逻辑值 1, 若 _A1_, ..., _An_ [完全相同](#equivalent)
  - _NaN_ 等不定元素被视为与任何元素都不等, 包括它们自身

## Equivalant

| A,B 类型 | `isequal(A,B)` = 1 的条件 |
|-|-|
| numeric | same size + equal value(both real and imaginary parts) |
| string scalar, character vector | containing the same sequence of characters |
| structure | fields' names + fields' contents (fields need not be in the same order) |
| table, timetable, cell array | all elements and properties are equal |
| funtion handle | 表示同个命名函数, 或是同个匿名函数的拷贝 |
| ordinal categorical array | same sets of categories +  order |
| object | of the same class + equal property values |

- For categorical array that is not ordinal, they can have different sets of categories, and isequal compares the category names of each pair of elements
- For datetime arrays, _isequal_ ignores display format when it compares points in time. If the arrays are all associated with time zones, then isequal compares the instants in time rather than the clockface times (for example, 01-May-2018 09:00:00 EDT is the same instant as 01-May-2018 06:00:00 PDT, so isequal returns true even though the clockface times of 9:00 and 6:00 differ).

### 广义数值

以上数值 numeric 指的是广义数值, 包括字符, 逻辑值, 整数类等, 比如以下 _isequal_ 都返回逻辑真

- `(char(1), 1)`
- `(int8(1), 1)`
- `(true, 1)`

### 函数句柄

- 对于 **[[Matalb Anonymous Function|匿名函数]]**, 同样表达式和参数的匿名函数也可能是 "不同" 的, 只有通过赋值运算拷贝得到的两个匿名函数[[Matlab Types - Function Handle|句柄]]才被认为是相同的
- 若两个[[Matlab Types - Function Handle|函数句柄]]表示同一个 **[[Matlab Nested Function|嵌套函数]]**, 则只有在对其父函数**同一次**调用中, 它们在被视为是相同的
