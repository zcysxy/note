---
publish: true
created: 2024-02-02T04:44:24.171-05:00
modified: 2026-05-01T00:08:26.886-04:00
published: 2026-05-01T00:08:26.886-04:00
tags:
  - pub-matlab
---

# if, else, elseif

sup: [[Matlab Conditional Statement]]

---

```octave
if logical_expression_1
    block1
elseif logical_expression_2
    block2
else
    block3
end
```

- 其中 _elseif_, _else_ 语句可选
  - 有 _else_ 语句则条件完备
- _elseif_ 语句可以有任意多个, 且它们都是与 _if_, _else_ 语句同级互斥的
- _logical\_expression\_i_ 为**条件表达式**, 即返回[[Matlab Types - Logical|逻辑值]]的表达式, 一般包含[[Matlab Relational Operations]] 和 [[Matlab Logical Operations]]
- _logical\_expression\_i_ 的位置也可以为**任意 array** _A_, 则其等价于条件表达式 `all(A(:))`
  - ++但是 _A_ 为 empty array 时, 在这里其等价于逻辑假 0, 而 `all(A(:))` 返回逻辑真 1++
