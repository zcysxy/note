---
publish: true
created: 2024-02-02T04:44:24.172-05:00
modified: 2026-05-01T00:07:11.370-04:00
published: 2026-05-01T00:07:11.370-04:00
---

# Matlab Desktop

[[MATLAB]]

---

不同于一般的程序语言, MATLAB 的桌面软件 Desktop 非常重要, 但仍然不是必需的, 比如可以通过 [MATLAB Engine API for Python](https://www.mathworks.com/help/matlab/matlab_external/install-the-matlab-engine-for-python.html) 在 [[VSCode]] 内设置内置 MATLAB Terminal 取代 Desktop.

MATLAB Desktop (R2020b) includes 3 panels:

1. Current Folder — Access your files
2. Command Window — Enter commands at the command line, indicated by the prompt `>>`
3. Workspace — Explore data that you create or import from files.

前两个 panels 与一般程序语言的 Command Prompt 区别不大, 重要的是 Workspace, 它代表的是工作内存空间, 显示着项目中所有的数据与变量.

## Command Window

- 与其他语言的交互式窗口一样, MATLAB 的 Command Window 可以/适合运行简单的, 临时性的代码, 并负责显示结果
- 还可以直接输入 `file` 执行 Current Folder 中的 `file.m` 文件
  - 注意不能包含 extension
  - 而且无法在系统 cmd 中利用 `matlab file.m` 执行文件
  - 还可以用指令 `run relative/or/absolute/path.m` 执行文件
- 不含赋值符号的表达式的结果都会赋予给默认变量 `ans`
  - 此变量也会保存在 Workspace 中
- 需要在 Command Window 中输入长指令时, 可用 `...` 加回车软换行
  - `...` 在代码执行时作为**空格**
  - MATLAB 忽略 `...` 后该行代码, 因此后面可加**注释**
- 若不想每个命令都显示运算结果, 在命令后加上分号 `;` 即可

### ⭐ 常用命令

| command          | description                           |
|------------------|---------------------------------------|
| `format [short]` | 短格式显示 double 数值 (保留小数点后 5 位) |
| `format long`    | 短格式显示 double 数值 (保留小数点后 5 位) |
| `format short e` | 短格式科学计数法显示 double 数值          |
| `format long e`  | 短格式科学计数法显示 double 数值          |
| `format bank`    | 保留小数点后两位数                       |
| `format hex`     | 表示为 16 进制                          |
| `format rat`     | 表示为近似有理数                         |
| `format +`       | 表示元素的符号                           |
| `dbstop if error`| 在出错位置停止程序, 并保存所有相关变量       |
| `who`            | 显示 Workspace 变量名                   |
| `whos`           | 显示 Workspace 变量详细信息              |
| `what`           | 显示 Current Folder 所有 `.m`, `.mat` 文件 |
| `clc`            | Clear Command Window                  |
| `clear`          | [[Matlab Functions - clear]]          |
| `save`, `load`   | [[Matlab Functions - save, load]]     |
| `diary`          | Log following input and output in Command Window to file `diary` |
| `cd`             | Change directory                      |
| `delete`         | Delete file(s)                        |
| `help`           | Help documents                        |
| `lookfor`        | Search all MATLAB files for keyword   |
| `run`            | Run the file with the exact path      |
| `quit`, `exit`   | Exit MATLAB                           |

!! 以上命令并不是只能在 Command Window 输入, 也可以包含在 [[Matlab M File]] 内, 只是它们都跟 Command Window 有关

## Workspace

- Workspace 中的变量可以储存为 `.mat` 文件, 也可以从 `.mat` 文件导入
  - 若 Workspace 已有 `.mat` 文件中同名变量, 则导入后覆盖已有变量
  - 可以通过函数 _save_ 和 _load_ 储存和导入变量
    [[Matlab Functions - save, load]]
- 命令(函数) [[Matlab Functions - clear|clear]] 可以清除 Workspace 所有变量
- 命令 `pack` 可以整理内存
- 双击 Workspace 中变量还可以修改变量
