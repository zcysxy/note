---
publish: true
created: 2026-05-07T20:54:28
modified: 2026-05-07T21:02:44
published: 2026-05-08T01:02:46.000Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Operations]]"
state: done
---

# Set Operations

MATLAB has no dedicated `set` data type—a "set" here is just a [[Matlab Array]] whose elements may be of any data type.

## Functions

MATLAB also has no operators for set operations; they are realized through plain functions.

| Functions      | Description                                  |
|----------------|----------------------------------------------|
| `intersect`    | Set intersection of two arrays               |
| `ismember`     | Array elements that are members of set array |
| `setdiff`      | Set difference of two arrays                 |
| `setxor`       | Set exclusive OR of two arrays               |
| `union`        | Set union of two arrays                      |
| `unique`       | Unique values in array                       |
| `ismembertol`  | Members of set within tolerance              |
| `uniquetol`    | Unique values within tolerance               |
| `join`         | Combine two tables or timetables by rows using key variables |
| `innerjoin`    | Inner join between two tables or timetables  |
| `outerjoin`    | Outer join between two tables or timetables  |

> [!rmk] Tolerance
>
> - A common pitfall in MATLAB is that floating-point precision rarely lets two values be exactly equal; the `...tol` functions accept a permitted error
> - Default tolerances are
>   - For `single`: **1e-6**
>   - For `double`: **1e-12**
