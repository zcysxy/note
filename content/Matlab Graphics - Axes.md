---
publish: true
created: 2024-02-02T04:44:24.179-05:00
modified: 2026-05-01T00:08:27.000-04:00
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
---

# Axes

[[Matlab Graphics]]

---

MATLAB 中坐标轴 axes 是一类特殊的**对象**, 包括 Axes object, PolarAxes object, GeographicAxes object 或 standalone visualization. 通过 `ax = gca` 可返回当前坐标轴.

## Specify Axis Limits

用函数 _xlim_, _ylim_ 和 _zlim_ 指定坐标范围. 有如下语法

- `xlim([min max])`
- `ylim([-inf max])`, `ylim([min inf])`
  - The maximum or minimum limit will be automatically calculated
- `zlim auto`
  - Revert back to the default limits

## Specify Axis Tick Properties

- `xticks(TickVector)` 指定显示的坐标值
- `xticklabels(LabelCharCellArray)` 指定坐标值标签
  - 若不指定, 则默认为原本数值
  - 需和显示坐标值一一对应
  - 接受 **cell array of char**
  - 自动编译 $\TeX$
- `xtickangle(angle)` 指定坐标值标签旋转角度 (角度制)
- `xtickformat(format)` 指定坐标值单位
  - 详见 [Specify x-axis tick label format - MATLAB xtickformat](https://www.mathworks.com/help/matlab/ref/xtickformat.html)

## Axes Properties

更详尽完全的调整坐标轴表现的方法就是修改坐标轴对象的 properties, 详见 [Axes appearance and behavior - MATLAB](https://www.mathworks.com/help/matlab/ref/matlab.graphics.axis.axes-properties.html)
