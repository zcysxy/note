---
publish: true
created: 2022-02-22T20:20:09
modified: 2022-04-01T17:34:13
published: 2026-05-01T00:08:27.936-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Graphics]]"
---

# Line Plots

线图 line plots 是 MATLAB 中最基本的图形, class 为 `matlab.graphics.chart.primitive.Line`.

## Functions

- 2-D: [[Matlab Functions - plot|plot]]
- 3-D: _plot3_, 用法同 [[Matlab Functions - plot|plot]]
- log scale: _loglog_, 用法同 [[Matlab Functions - plot|plot]], 只是坐标轴范围为**log scale**
- polar: _polarplot_, 用法同 [[Matlab Functions - plot|plot]]

## Line Properties

线图性质 line properties 控制 **Line object** 的样貌和表现, 以 **structure** 类储存. 通过将图像以**对象 object**形式储存在变量中, 可以查看和修改其各种性质

```octave
p =

  Line with properties:

              Color: [0 0.4470 0.7410]
          LineStyle: '-'
          LineWidth: 0.5000
             Marker: 'o'
         MarkerSize: 15
    MarkerFaceColor: 'none'
              XData: [1x501 double]
              YData: [1x501 double]
              ZData: [1x501 double]

  Use GET to show all properties
```

以下列出部分常用性质.

### Line

#### Line Color

- Field name: `.Color`
- Default: `[0 0 0]`
- Inputs:

| Color Name  | Short Name     | RGB Triplet    | Hex Color Code |
| ----------- | -------------- | -------------- | -------------- |
| `'red'`     | `'r'`          | `[1 0 0]`      | `'#FF0000'`    |
| `'green'`   | `'g'`          | `[0 1 0]`      | `'#00FF00'`    |
| `'blue'`    | `'b'`          | `[0 0 1]`      | `'#0000FF'`    |
| `'cyan'`    | `'c'`          | `[0 1 1]`      | `'#00FFFF'`    |
| `'magenta'` | `'m'`          | `[1 0 1]`      | `'#FF00FF'`    |
| `'yellow'`  | `'y'`          | `[1 1 0]`      | `'#FFFF00'`    |
| `'black'`   | `'k'`          | `[0 0 0]`      | `'#000000'`    |
| `'white'`   | `'w'`          | `[1 1 1]`      | `'#FFFFFF'`    |
| `'none'`    | Not applicable | Not applicable | Not applicable |

#### Line Style

- Field name: `.LineStyle`
- Default: `'-'`
- Inputs:

| Line Style | Description      |
|------------|------------------|
| `'-'`      | Solid line       |
| `'--'`     | Dashed line      |
| `':'`      | Dotted line      |
| `'-.'`     | Dash-dotted line |
| `'none'`   | No line          |

#### Line width

- Field name: `.LineWidth`
- Default: `0.5`
- Inputs: numeric

### Markers

#### Marker Symbol

- Field name: `.Marker`
- Default: `'none'`
- Inputs:

| Value                  | Description                   |
| ---------------------- | ----------------------------- |
| `'o'`                  | Circle                        |
| `'+'`                  | Plus sign                     |
| `'*'`                  | Asterisk                      |
| `'.'`                  | Point                         |
| `'x'`                  | Cross                         |
| `'_'`                  | Horizontal line               |
| <code>'|'</code>      | Vertical line                 |
| `'square'` or `'s'`    | Square                        |
| `'diamond'` or `'d'`   | Diamond                       |
| `'^'`                  | Upward-pointing triangle      |
| `'v'`                  | Downward-pointing triangle    |
| `'>'`                  | Right-pointing triangle       |
| `'<'`                  | Left-pointing triangle        |
| `'pentagram'` or `'p'` | Five-pointed star (pentagram) |
| `'hexagram'` or `'h'`  | Six-pointed star (hexagram)   |
| `'none'`               | No markers                    |

#### Marker Size

- Field name: `.MarkerSize`
- Default: 6
- Inputs: numeric

#### Marker Outline Color

- Field name: `.MarkerEdgeColor`
- Default: `'auto'` (same as `.Color`)
- Inputs: 同 [Line Color](#line-color)

#### Marker Fill Color

- Field name: `.MarkerFaceColor`
- Default: `'none'`
- Inputs: 同 [Line Color](#line-color)

## Examples

### 2-D

```octave
% Generate some data using the besselj function
x = 0:0.2:10;
y0 = besselj(0,x);
y1 = besselj(1,x);
y2 = besselj(2,x);
y3 = besselj(3,x);
% Plot the lines from the Bessel functions using standard line styles
figure
plot(x, y0, 'r-', x, y1, 'g--', x, y2, 'b:', x, y3, 'k-.')
```

![20210218121706](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210218121706.png)

### 3-D

```octave
t = 0:pi/500:pi;
xt1 = sin(t).*cos(10*t);
yt1 = sin(t).*sin(10*t);
xt2 = sin(t).*cos(12*t);
yt2 = sin(t).*sin(12*t);
zt = cos(t);
plot3(xt1, yt1, zt, xt2, yt2, zt)
```

![20210204171235](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210204171235.png)

```octave
t = 0:pi/500:pi;
X(1,:) = sin(t).*cos(10*t);
X(2,:) = sin(t).*cos(12*t);
X(3,:) = sin(t).*cos(20*t);
Y(1,:) = sin(t).*sin(10*t);
Y(2,:) = sin(t).*sin(12*t);
Y(3,:) = sin(t).*sin(20*t);
Z = cos(t);
plot3(X,Y,Z)
```

![20210204171540](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210204171540.png)
