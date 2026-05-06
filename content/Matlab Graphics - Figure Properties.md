---
publish: true
title: MATLAB Graphics - Window
created: 2022-04-01T22:23:24
modified:
published: 2026-05-01T00:08:27.920-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Graphics]]"
state: "[[%watch]]"
source: https://www.mathworks.com/help/matlab/ref/matlab.ui.figure-properties.html
---

# Figure Properties

To get the **handle** of a figure:

```octave
% When creating
f = figure

% When is plotted
f = gcf
```

## Position and Size

### Position

Type: four-element array: `[left, bottom, width, height]`

| Element  | Description                                                                                                                                                                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `left`   | Distance from the left edge of the primary display to the inner left edge of the window. This value can be negative on systems that have more than one monitor. <br> If the figure is docked, then this value is relative to the Figure panel within the MATLAB desktop.     |
| `bottom` | Distance from the bottom edge of the primary display to the inner bottom edge of the window. This value can be negative on systems that have more than one monitor. <br> If the figure is docked, then this value is relative to the Figure panel within the MATLAB desktop. |
| `width`  | Distance between the right and left inner edges of the figure.                                                                                                                                                                                                               |
| `height` | Distance between the top and bottom inner edges of the window.                                                                                                                                                                                                               |
