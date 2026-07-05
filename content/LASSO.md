---
publish: true
aliases:
  - Least Absolute Shrinkage and Selection Operator
  - L1-Regularized Regression
title: LASSO
created: 2023-02-07T00:46:24
modified: 2024-03-13T19:58:50
published: 2026-07-05T02:16:30.067Z
tags:
  - pub-prob
type: note
sup:
  - "[[Linear Regression]]"
  - "[[Optimization]]"
state: done
related:
  - "[[L1 Regularization]]"
  - "[[Mean Squared Error]]"
---

# LASSO

LASSO stands for Least Absolute Shrinkage and Selection Operator. It is the combination of [[Mean Squared Error|MSE]] and [[L1 Regularization|L1 norm]].

$$
w_{\text{lasso}} = \argmin_{w} \| y - Xw \| ^{2} + \lambda \| w \| _{1}.
$$

^obj

The [[L1 Regularization]] not only penalizes the [[Overfitting and Underfitting|overfitting]], but also encourages **sparsity** (refer to [[L1 Regularization#Sparsity]]).

LASSO can be efficiently solved by methods such as projected GD, [[Proximal Gradient Method|PGM]], and [[ADMM]].
