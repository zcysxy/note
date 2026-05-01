---
publish: true
aliases:
  - Loop Control Flow
created: 2025-05-26T19:23:15.000-04:00
modified: 2026-05-01T00:08:28.013-04:00
published: 2026-05-01T00:08:28.013-04:00
tags:
  - pub-matlab
---

# Loop Statement

[[Matlab Control Statements]]

---

!! MATLAB 循环效率低, 尽量用数组结构和内部函数代替循环

循环语句 loop statement, 又可以称为循环控制语句, 是 MATLAB 四大**程序结构控制语句**之一, 包含两种循环结构 [for](#for-loop), [while](#while-loop) 和两个控制语句 [continue](#continue-statement), [break](#break-statement).

## for Loop

```octave
for i = <[start:<increment>:end]>
    block
end
```

- 循环开始先将 _i_ 赋值为 _start_
- "增量" _increment_ 默认为 1
  - 为**正数**时, 每次判断 _i_ 是否**小于等于** _end_
  - 为**负数**时, 每次判断 _i_ 是否**小于等于** _end_

!! 以上同 [[Matlab Array - Creating]], 就是 _i_ 遍历赋值为数组中元素

所以特别地, 对于一般的数值数组 _A_ 可以有

```octave
for i = A
    block
end
```

其中 _i_ 被赋值为 _A_ 中的**列向量**, 于是 _A_ 有多少列向量就循环多少轮. 例如对于 `A = rand(2,2,2)`, 上面代码输出如下 (4 个列向量   )

```octave
    0.5060
    0.6991

    0.8909
    0.9593

    0.5472
    0.1386

    0.1493
    0.2575
```

## while Loop

```octave
while condExp
    block
end
```

这里的**条件表达式** _condExp_ 判定完全同 [[Matlab Conditional Statement - if, else, elseif|if, else, elseif]] 语句

## continue Statement

_continue_ 语句用于退出**当层**, **当轮**循环, 进入下一轮. 例子如下

```octave
for i = 1:3
    for j = 1:3
        if j == 2
            continue;
        end
        disp([i j])
    end
end
```

output:

```txt
1     1

1     3

2     1

2     3

3     1

3     3
```

## break Statement

_break_ 语句用于退出**当层**循环. 例子如下

```octave
for i = 1:3
    for j = 1:3
        if j == 2
            break;
        end
        disp([i j])
    end
end
```

output:

```txt
1     1

2     1

3     1
```
