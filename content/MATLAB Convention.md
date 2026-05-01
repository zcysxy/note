---
publish: true
aliases: MATLAB Best Practice
title: MATLAB Convention
created: 2023-03-22T16:35:41
modified: 2024-10-03T00:23:11
published: 2026-05-01T00:08:26.929-04:00
tags:
  - pub-matlab
type: note
sup:
  - "[[MATLAB]]"
state: "[[%wip]]"
---

# MATLAB Convention

## General Conventions

```octave
%% Beginning
clear all 	% clear variable cache if needed
clc 		% clear the command window
close all 	% close all figures

%% Body
% Print: fprintf instead of disp
fprintf("hello world")

%% One-line tests
% Show process
if mod(index, period) == 0, fprintf("index"), end
% Apply default values
if nargin < 5, maxiter == 50,  end
if ~isfield(opts, 'maxiter'), opts.maxiter = 50; end
```

## Graphs

```octave
%% Defaults
% Defaults for axes
set(0, 'DefaultAxesFontSize', 15, 'DefaultAxesFontName', 'times', 'DefaultAxesFontWeight', 'bold', 'DefaultAxesLineWidth', 1.5)
% Defaults for plots
set(0, 'DefaultLineLineWidth', 2, 'DefaultAxesLineStyleOrder', '.-', 'DefaultLineMarkerSize', 20)
% Defaults for text
set(0, 'DefaultTextInterpreter', 'latex', 'DefaultTextFontName', 'times', 'DefaultTextFontWeight', 'bold')
% Defaults for legend
set(0, 'DefaultLegendInterpreter', 'latex')
```

- Label font size is controlled by `DefaultAxesFontSize`
- Text interpreted by `latex` will not be affected by `FontWeight` or `FontName`
  - So use `tex` instead!

```octave
%% Lifecycle
f = figure(1);
semilogy(xx, yy, '-o', 'DisplayName', sprintf('$N = %d$', yylist(1))
hold on
plot(xx, yy1, xx, yy2)
xlabel('iterations', 'FontSize', 20)
ylabel('mean squared error', 'FontSize', 20)
title('Error', 'FontSize', 25)
set(get(gca, 'XAxis'), 'Exponent', 0)

exportgraphics(gca, 'err.png', 'Resolution', 900)
```

- Use `figure('visible', 'off')` to suppress the image display.

```octave
%% Subplots
t = tiledlayout(2,2,'TileSpacing','Compact');

% Tile 1
nexttile
plot(rand(1,20))
% Tile 2
nexttile
plot(rand(1,20))
% Tile 3
nexttile
plot(rand(1,20))
% Tile 4
nexttile
plot(rand(1,20))

% Create shared title, xlabel and ylabel
title(t,'Size vs. Distance')
xlabel(t,'Distance (mm)')
ylabel(t,'Size (mm)')
```

## Export

```octave
exportgraphics(gca, 'err.png', 'Resolution', 900)
exportgraphics(gca, 'err.eps') % for LaTeX
savefig('err.fig')
```
