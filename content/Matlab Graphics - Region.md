---
publish: true
title: Matlab Graphics - Region
created: 2022-04-02T15:07:25
modified:
published: 2026-05-01T00:08:27.000-04:00
tags:
  - pub-matlab
aliases:
type: note
sup:
  - "[[Matlab Graphics]]"
state: "[[%watch]]"
---

# Matlab Graphics - Region

## Indication

```octave
f = @(x,y) abs(1 + x + 1i * y + (x + 1i * y).^2./2);
g = @(x,y) abs((2 + x + 1i * y) ./ (2 - x - 1i * y));

xmax = 5; ymax = 5; step_size = 0.01;
xx = -xmax:step_size:xmax;
yy = -ymax:step_size:ymax;
[x,y] = meshgrid(xx,yy);

z1 = (f(x,y) > 1);
z2 = (g(x,y) > 1);

f = figure;
tiledlayout(1,2, 'TileSpacing', 'compact',  'Padding', 'none');
nexttile
imagesc(z1); colormap gray; shading interp; axis xy;
set(gca, 'XTickLabel', xx(101:100:end));
set(gca, 'YTickLabel', yy(101:100:end));
xlabel('Re(z)'); ylabel('Im(z)');

nexttile
imagesc(z2); colormap gray; shading interp; axis xy;
set(gca, 'XTickLabel', xx(101:100:end));
set(gca, 'YTickLabel', yy(101:100:end));
xlabel('Re(z)'); ylabel('Im(z)');

f.Position(3:4) = [1000,500];
saveas(gcf, '~/Desktop/Region.png')
a = rand(10)
disp(a)
exit
```

![](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/Region.png)

## Contour

[[!todo]]

## Fill

[[!todo]]
