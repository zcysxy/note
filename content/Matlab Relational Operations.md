---
publish: true
created: 2024-02-02T04:44:24.182-05:00
modified: 2026-05-01T00:08:28.152-04:00
published: 2026-05-01T00:08:28.152-04:00
tags:
  - pub-matlab
---

# Relational Operations

[[Matlab Operations]]

---

关系运算指**关系运算符**和**关系运算函数**作用于**一对**对象, 返回判断[[Matlab Types - Logical|逻辑值]]的运算过程

\~~ Relational operations 常常和 [[Matlab Logical Operations]] 组合形成复杂条件表达式

## 逐元素关系运算

| Operator  | Equivalent Function |
|:---------:|:-------------------:|
| ==        | _eq_                |
| ~=        | _ne_                |
| >=        | _ge_                |
| > ​ | _gt_                |
| <=        | _le_                |
| <         | _le_                |

- 以上所有运算比较对象都是**一般** arrays, 即不能是 [[Matlab Types - Cell|cell]] 或 [[Matlab Types - Structure|structure]]
  - 完整支持数据类型列表: single, double, int8, int16, int32, int64, uint8, uint16, uint32, uint64, logical, char, string, categorical, datetime, duration
- 比较对象尺寸需 [[Matlab Compatible Array Sizes|"相容"]]
  - 如**相同尺寸** arrays, 此时比较 index 相同元素, 返回相同尺寸 logical array
  - 如一方是 **scalar**, 则与另一方中每个元素比较
- 对于**字符**, 按**字典序**比较
- 对于复数
  - 前两种关系运算比较实部和虚部
  - 后四种关系运算只比较**实部**
- 常数 _Inf_ = _Inf_
- 常数 _NaN_ 与任何数值, 包括 _NaN_ 都不等
- 对于**浮点数**, 其存储形式决定了**相对误差**的存在, 故程序设计中最好不要直接比较两个浮点数是否相等, 而是采用**后四种**比较运算将待确定值限制在一个满足需要的**区间**之内
- 对于**整数**, 无论是 double 类, 整数类, 逻辑值, 字符(编码), 都可以按常规意义比较

## 整体关系运算

函数 [[Matlab Functions - isequal|iseuqal]] 和 _isequaln_ 可以比较任意两个数据类型, 并且只返回一个逻辑值, 判断比较对象是否**完全相同**

- "完全相同" 的定义见 [[Matlab Functions - isequal]]
- _isequaln_ 与 [[Matlab Functions - isequal|iseuqal]] 的唯一区别在于 _NaN_ 等不定元素视为与自身相等
