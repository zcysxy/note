---
publish: true
created: 2026-05-07T22:16:45
modified: 2026-05-07T22:22:24
published: 2026-05-08T20:41:22.901Z
tags:
  - pub-matlab
type: note
sup:
  - "[[Matlab Graphics]]"
state: done
---

# MATLAB Graphics Colormap

A colormap is an _m_-by-3 matrix of `[R G B]` rows in `[0,1]`. It is the bridge between scalar data (the _c_ argument of plotting functions, the height-value of `surf`, etc.) and the rendered color: scalar values are rescaled to row indices and looked up in the active colormap.

## Setting and Reading the Active Map

- `cmap = colormap` returns the current colormap of the current figure
- `colormap(map)` sets the map for the current figure
- `colormap(ax,map)` sets the map for a specific axes
- _map_ may be a built-in name (char/string), a built-in handle (`parula`, `gray`, …), or any _m_-by-3 matrix

Each predefined name is also a function: `parula(64)` returns the 64-row matrix that `colormap parula` would install.

## Predefined Maps

| Name                                   | Description                                            |
| -------------------------------------- | ------------------------------------------------------ |
| `parula`                               | Default since R2014b; perceptually uniform, blue→yellow |
| `turbo`                                | Improved rainbow; preferred over `jet`                  |
| `jet`                                  | Classic rainbow (legacy); avoid for sequential data     |
| `hsv`                                  | Full hue cycle                                         |
| `hot`                                  | Black→red→yellow→white                                  |
| `cool`                                 | Cyan→magenta                                            |
| `spring`, `summer`, `autumn`, `winter` | Two-tone gradients                                     |
| `gray`                                 | Grayscale                                              |
| `bone`                                 | Grayscale with a slight blue tint                       |
| `copper`                               | Black→copper                                            |
| `pink`                                 | Pastel pink to white                                   |
| `lines`                                | Discrete categorical palette (uses axes `ColorOrder`)   |

## How Color Indexing Works

When a plotting function accepts scalar/vector color data (e.g. `scatter(x,y,sz,c)`, `imagesc`, `surf`):

- Values are linearly rescaled from the axes `CLim` (color limits) onto the row index range `1..size(cmap,1)` and looked up in the active colormap
- `clim([cmin cmax])` (formerly `caxis`) overrides the rescaling range
- A three-column _c_ of RGB triplets bypasses the colormap entirely

```octave
x = 1:100;
y = sin(x/5);
c = x;                 % 1..100, becomes a row index into the colormap
scatter(x, y, 30, c, 'filled')
colormap(turbo)
colorbar
```

## Custom Maps

A map is just an _m_-by-3 matrix. A 64-step black-to-red ramp:

```octave
n = 64;
cmap = [linspace(0,1,n)' zeros(n,2)];
colormap(cmap)
```
