---
publish: true
created: 2026-01-06T20:10:18.000-05:00
modified: 2026-05-01T00:08:27.164-04:00
published: 2026-05-01T00:08:27.164-04:00
tags:
  - pub-matlab
sup: "[[MATLAB]]"
state: "[[%wip]]"
source: https://www.mathworks.com/help/matlab/matlab_prog/function-precedence-order.html
---

# Function Precedence Order

调用一个对象时, MATLAB 程序的搜索域为

- the current file
- an optional private subfolder relative to the currently running function
- the current folder
- the MATLAB path

具体的搜索顺序为

1. Variables in the Workspace
2. Function or class whose name matches an explicitly imported name [[!tocheck]]
   - The [`import`](https://www.mathworks.com/help/matlab/ref/import.html) function allows functions with compound names (names comprised of several parts joined by dots) to be called using only the final part of the compound name
   - When a function name matches an explicit (non-wildcard) imported function,​ MATLAB uses the imported compound name and gives it precedence over all other functions with the same name
3. Nested functions within the current function
4. Local functions within the current file
5. Function or class whose name matches a wildcard-based imported name
   - When a function name matches a wildcard-based imported function,​ MATLAB uses the imported compound name and gives it precedence over all other functions with the same name,​ except for nested and local functions
6. Private functions
   - _Private functions_ are functions in a subfolder named `private` that is immediately below the folder of the currently running file.
7. Object functions
   - An object function accepts a particular class of object in its input argument list
   - When there are multiple object functions with the same name, MATLAB checks the classes of the input arguments to determine which function to use
8. Class constructors in @ folders
   - MATLAB uses class constructors to create a variety of objects (such as `timeseries` or `audioplayer`), and you can define your own classes using object-oriented programming
   - For example, if you create a class folder `@polynom` and a constructor function `@polynom/polynom.m`, the constructor takes precedence over other functions named `polynom.m` anywhere on the path
9. Loaded Simulink models
10. Functions in the current folder
11. Functions elsewhere on the **path**, in order of appearance

When determining the precedence of functions within the same folder, MATLAB considers the file type, in this order:

1. Built-in function
2. MEX-function
3. Simulink model files that are not loaded, with file types in this order:
4. Stateflow chart with a `.sfx` extension
5. App file (`.mlapp`) created using MATLAB App Designer
6. Program file with a `.mlx` extension
7. P-file (that is, an encoded program file with a `.p` extension)
8. Program file with a `.m` extension

To determine the function MATLAB calls for a particular input, include the function name and the input in a call to the _which_ function.

## Change in Rules For Function Precedence Order

Starting in R2019b, MATLAB changes the rules for name resolution, impacting the precedence order of variables, nested functions, local functions, and external functions. For information about the changes and tips for updating your code, see [Update Code for R2019b Changes to Function Precedence Order](https://www.mathworks.com/help/matlab/matlab_prog/upgrade-code-for-r2019b-changes-to-function-precedence-order.html).

- Identifiers cannot be used for two purposes inside a function
- Identifiers without explicit declarations might not be treated as variables
- Variables cannot be implicitly shared between parent and nested functions
- Change in precedence of compound name resolution
- Anonymous functions can include resolved and unresolved identifiers

The behavior of the `import` function has changed.

- Change in precedence of wildcard-based imports
- Fully qualified import functions cannot have the same name as nested functions
- Fully qualified imports shadow outer scope definitions of the same name
- Error handling when import not found
- Nested functions inherit import statements from parent functions
