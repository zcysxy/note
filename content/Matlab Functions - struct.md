---
publish: true
created: 2026-05-07T22:16:33
modified: 2026-05-07T22:20:40
published: 2026-05-08T16:41:22.000-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Functions List]]"
state: done
---

# struct

The `struct` function constructs a [[Matlab Types - Structure|structure]] (or structure array) from field/value pairs. It is an alternative to building a structure incrementally with dot assignment, useful when the fields are known up front or when a structure array of identical schema is needed.

- `s = struct` returns a 1×1 structure with no fields
- `s = struct(field,value)` creates a single-field structure
- `s = struct(field1,value1,...,fieldN,valueN)` creates a structure with multiple fields in one call
- `s = struct([])` returns a 0×0 empty structure with no fields

## Field Names

- _field_ is a [[Matlab Types - Character|char]] vector or `string` scalar that obeys the rules of [[Matlab Basics#Variable Naming Rules|variable names]]
- Duplicate field names raise an error

## Structure Arrays from Cell Arrays

When _value_ is a [[Matlab Types - Cell|cell]] array, `struct` does **not** put the cell into a single field. Instead, it spreads the cells across a **structure array**: each cell becomes the field value of one element, and the array's size matches the cell's size.

- To store a cell array _as a single field value_, wrap it in another cell: `struct('f',{{1,2,3}})` produces a scalar struct whose field `f` is the inner 1×3 cell.

```octave
>> s = struct('name',{'Alice','Bob'},'age',{30,42})
s =
  1x2 struct array with fields:
    name
    age
>> s(2)
ans =
  struct with fields:
    name: 'Bob'
     age: 42
```

When several values are cell arrays, they must all have the same size; that size becomes the size of the resulting structure array.
