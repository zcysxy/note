---
publish: true
aliases:
  - Loop Control Flow
created: 2026-05-07T20:55:27
modified: 2026-05-07T21:05:17
published: 2026-05-07T21:05:25.952-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Control Statements]]"
state: done
---

# Loop Statement

- Loops are slow in MATLAB; whenever possible, replace them with array operations and built-in functions.

The loop statement—also called the _loop control flow_—is one of MATLAB's four **flow-control statements**. It includes two loop constructs, [for](#for-loop) and [while](#while-loop), and two control statements, [continue](#continue-statement) and [break](#break-statement).

## for Loop

```octave
for i = <[start:<increment>:end]>
    block
end
```

- _i_ is initialized to _start_ at the beginning of the loop

- _increment_ defaults to 1
  - When **positive**, each iteration checks whether _i_ is **≤** _end_
  - When **negative**, each iteration checks whether _i_ is **≥** _end_

- As with [[Matlab Array - Creating]], _i_ iterates through the elements of an array.

In particular, for an arbitrary numeric array _A_ you can write

```octave
for i = A
    block
end
```

where _i_ is bound to each **column vector** of _A_; the loop runs once per column. For example, with `A = rand(2,2,2)` the code above produces (4 column vectors):

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

The **conditional expression** _condExp_ is evaluated exactly as in [[Matlab Conditional Statement - if, else, elseif|if/else/elseif]].

## continue Statement

`continue` exits the **current iteration** of the **innermost** loop and moves to the next iteration. Example:

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

`break` exits the **innermost** loop entirely. Example:

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
