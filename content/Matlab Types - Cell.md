---
publish: true
created: 2026-05-07T17:28:52
modified: 2026-05-07T18:01:32
published: 2026-05-07T18:01:34.977-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Types]]"
state: done
---

# Cell

In MATLAB, cell and [[Matlab Types - Structure|structure]] are _heterogeneous containers_: special **arrays** that, unlike a regular [[Matlab Array|array]], can hold elements of different types.

- A cell array directly extends the regular array — each element (called a _cell_) may be of a different data type
  - A single-element cell is therefore not very meaningful; "cell array" by default refers to one with multiple elements
  - A cell may itself be a cell array, forming a _nested cell array_
- Example: ![|200](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210126185629.png)
- Curly braces `{}` are the cell delimiter

## Properties and Display

- `iscell`
- Display
  - `celldisp` prints the contents of every cell of a cell array
  - `cellplot` shows the **structural diagram** of a cell array

## Creation

- Assignment statements
  1. `C(ind) = {x}`
  2. `C{ind} = x`
  - _ind_ is an ordinary array index
  - These also serve to **expand** a cell array

- Function `cell(<[sz1,...,szn]>)`
  - Returns an _sz1_-by-...-by-_szn_ cell array, with every cell empty (`[]`)
  - With a single argument _sz1_, returns an _sz1_-by-_sz1_ square cell array

- These methods always produce a "rectangular" cell array; unassigned cells default to empty `[]`.

Example:

```octave
>> A = cell(2,3)
A =
  2x3 cell array
    {0x0 double}    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {0x0 double}
>> A{1,1} = 'hello'
A =
  2x3 cell array
    {'hello'   }    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {0x0 double}
>> A(2,3) = {123} 
A =
  2x3 cell array
    {'hello'   }    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {[     123]}
>> A{3,3} = [1;2]
A =
  3x3 cell array
    {'hello'   }    {0x0 double}    {0x0 double}
    {0x0 double}    {0x0 double}    {[     123]}
    {0x0 double}    {0x0 double}    {2x1 double}
```

## Access and Removal

A cell array is accessed via [[Matlab Array - Indexing]]; the only twist is that wrapping the index in **parentheses `()` returns a cell sub-array** (still of class `cell`), whereas wrapping the index in **curly braces `{}` returns the contents** themselves.

- This is also why cell-array assignment has two forms.

Example:

```octave
>> A{2,3}
ans =
   123
>> A(2,3)
ans =
  1x1 cell array
    {[123]}
```

You can also delete or slice from a cell array with indexing:

- `A{ind} = []` clears the element at _ind_ (assigns it the empty value)
- `A(ind) = []` removes a slice from _A_
  - To keep _A_ rectangular, only one component of _ind_ may differ from `:`
  - In other words, you can only remove **whole rows or columns**

## Nesting

A cell of a cell array can itself be a cell array, producing a _nested cell array_. Construction and access follow the rules of an ordinary array.

```octave
>> A{2,2} = {1, 2;'hello', cell(2)}
A =
  2x2 cell array
    {0x0 double}    {0x0 double}
    {0x0 double}    {2x2 cell  }
>> A{2,2}(2,1)
ans =
  1x1 cell array
    {'hello'}
>> A{2,2}{2,2}(2) = {'sub'}
A =
  2x2 cell array
    {0x0 double}    {0x0 double}
    {0x0 double}    {2x2 cell  }
>> A{2,2}{2,2}{2}           
ans =
    'sub'
```

- In a nested cell array, the intermediate indices typically use curly braces `{}`.
