---
publish: true
created: 2026-01-06T20:10:18.174-05:00
modified: 2021-08-26T09:32:53
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
sup:
  - "[[Matlab Functions List]]"
  - "[[Matlab Graphics]]"
---

# fplot

_fplot_ is the function to plot expressions or functions.

- `fplot(f,<xinterval>)` plots the curve defined by the function `y = f(x)` over the specified interval for _x_
  - default interval **$[-5, 5]$**
  - specify the interval as a two-element vector of the form `[xmin xmax]`
- `fplot(funx,funy,<tinterval>)` plots the curve defined by `x = funx(t)` and `y = funy(t)` over the specified interval for t
  - default interval $[-5, 5]$
  - specify the interval as a two-element vector of the form `[tmin tmax]`
- `fplot(___,LineSpec)` specifies the line style, marker symbol, and line color
  - or `fplot(___,Name,Value)`

## Examples

- Plot [[Matlab Anonymous Function]]

  ```octave
  fplot(@(x) sin(x)^2 * cos(x))
  ```

  ![20210728134413](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210728134413.png)

- Plot Parametric Curve

  ```octave
  fplot(@(t) cos(3*t), @(t) sin(2*t))
  ```

  ![20210728135628](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210728135628.png)

- Plot Piecewise Functions and Speficy Line Properties

  ```octave
  fplot(@(x) exp(x), [-3 0], '-b')
  hold on
  fplot(@(x) cos(x), [0 3], 'LineStyle', ':')
  hold off
  ```
