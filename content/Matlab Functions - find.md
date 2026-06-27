---
publish: true
created: 2026-05-08T01:20:08.000Z
modified: 2026-05-08T01:20:08.000Z
published: 2026-05-08T01:20:08.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
---

# find

## Syntax

- `k = find(X,<n>,<dir>)` returns a vector containing the **linear indices** of the first/last _n_ **nonzero** elements of array _X_
  - _n_ defaults to all matching elements
  - _dir_ may be `'first'` or `'last'`; the default is `'first'`
- `[row,col] = find(___)` returns the row and column subscripts of each nonzero element of array _X_
- `[row,col,v] = find(___)` additionally returns a vector _v_ containing the nonzero values of _X_

## Usage

A common pattern is to chain several [[Matlab Logical Operations|logical operations]] to produce a **logical array** flagging the elements that satisfy some condition, then call `find` on that logical array to retrieve the **indices** of the matching elements—giving you direct access to them.

Example:

```octave
>> A = rand(3)
A =
    0.5085    0.7948    0.8116
    0.5108    0.6443    0.5328
    0.8176    0.3786    0.3507
>> test = (A>0.3) & (A<0.7);
>> I = find(test);  
>> A(I)
ans =
    0.5085
    0.5108
    0.6443
    0.3786
    0.5328
    0.3507
```
