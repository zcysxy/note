---
publish: true
created: 2024-02-02T04:44:24.171-05:00
modified: 2026-05-01T00:07:11.222-04:00
published: 2026-05-01T00:07:11.222-04:00
---

# switch, case, otherwise

sup: [[Matlab Conditional Statement]]

---

```octave
switch expression
    case value_1
        block_1
    case value_2
        block_2
    otherwise
        block_3
end
```

以上语句执行中, 先计算表达式 _expression_ 的值, 当结果等于[^1]某个 _case_ 语句的 _value\_i_ 时, 就执行该 _case_ 语句下的代码块; 如果所有 _case_ 语句的 _value\_i_ 都和 _expression_ 计算结果不相等, 则执行 _otherwise_ 语句下的代码块. 等价于以下 [[Matlab Conditional Statement - if, else, elseif|if, else, elseif]] 语句

[^1]: [[Matlab Functions - isequal|isequal]] 是我试验下来最适合描述 "相等" 的函数

```octave
x = expression;
if isequal(x,value_1)
    block_1
elseif isequal(x,value_2)
    block_2
else
    block_3
end
```

- 所以与 [[Matlab Conditional Statement - if, else, elseif|if, else, elseif]] 语句类似, _otherwise_ 语句可选, 有的话条件完备
- _case_ 语句可以任意多, 且都同级互斥
- 但这里要求 _expression_ 的返回值只能是 **scalar** 或 **char vector**, 与 [[Matlab Conditional Statement - if, else, elseif|if, else, elseif]] 中条件表达式可以是任意数组不同
- 特别的, _value\_i_ 可为 **cell array**, 此时执行 _block\_i_ 若存在 _value\_i_ 中 cell 与 _expression_ 相等
