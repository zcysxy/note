---
publish: true
created: 2026-05-07T21:12:02
modified: 2026-05-07T21:16:53
published: 2026-05-07T21:16:55.930-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Graphics]]"
state: done
---

# Axes

In MATLAB, axes are a special kind of **object**, including the Axes object, PolarAxes object, GeographicAxes object, and standalone visualizations. Use `ax = gca` to get a handle to the current axes.

## Specify Axis Limits

Use `xlim`, `ylim`, and `zlim` to set the visible coordinate range. Common syntax:

- `xlim([min max])`
- `ylim([-inf max])`, `ylim([min inf])`
  - The maximum or minimum limit is computed automatically
- `zlim auto`
  - Revert to the default limits

## Specify Axis Tick Properties

- `xticks(TickVector)` sets the displayed tick locations
- `xticklabels(LabelCharCellArray)` sets the labels of those ticks
  - When unset, the labels default to the numeric values
  - Labels must correspond one-to-one with the displayed tick locations
  - Accepts a **cell array of char**
  - $\TeX$ is rendered automatically
- `xtickangle(angle)` rotates the tick labels by _angle_ (in degrees)
- `xtickformat(format)` sets the format/unit of the tick labels
  - See [Specify x-axis tick label format - MATLAB xtickformat](https://www.mathworks.com/help/matlab/ref/xtickformat.html) for details

## Axes Properties

For full control over axis appearance, modify the axes object's properties directly. See [Axes appearance and behavior - MATLAB](https://www.mathworks.com/help/matlab/ref/matlab.graphics.axis.axes-properties.html).
