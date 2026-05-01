---
publish: true
title: Matlab Graphics - Tile
created: 2022-04-01T22:33:42
modified: 2022-04-01T22:33:52
published: 2026-05-01T00:08:27.991-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Graphics]]"
state: "[[%wip]]"
---

# Tile

```octave
f = figure;
tiledlayout(1,2, 'TileSpacing', 'compact',  'Padding', 'none');

nexttile;
fplot(@sin);

nexttile;
fplot(@cos);

f.Position = [50,50,800,400];
sgtitle('Common Title')
waitfor(f);
```

![](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/untitled.png)

> [!tip] Remove Margins
>
> This also serves as an easy way to remove margins.
>
> ```octave
> f = figure;
> tiledlayout(1,1,'Padding','none')
>
> nexttile
> fplot(@(x) exp(sin(x)))
> waitfor(f)
> ```
