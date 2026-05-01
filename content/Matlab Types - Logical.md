---
publish: true
created: 2024-02-02T04:44:24.183-05:00
modified: 2026-05-01T00:07:19.458-04:00
published: 2026-05-01T00:07:19.458-04:00
---

# Logical

[[Matlab Types]]

---

- 逻辑值只有 `1` 和 `0`, 可以由 **函数** _true_ 和 _false_ 分别生成
  - MATLAB 中 _true_ 和 _false_ 为函数, 不是常量
- 区别于 double 类或整数类的 1 和 0
  - 虽然 logical 类和 double 类之间可以做运算, 结果为 double 类
  - 逻辑值指占 1 byte
- 利用函数 _logical_ 将非 0 数值和非 `char(0)` 字符转换为逻辑真 1
  - 不能转换**复数**和 _NaN_
  - 只能接受数值参数, 字符参数和逻辑值参数
- Logical 类判定函数 _islogical_
