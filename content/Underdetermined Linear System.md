---
publish: true
aliases: Least Norm
title: Underdetermined Linear System
created: 2023-02-07T00:22:56
modified: 2026-07-02T21:32:05
published: 2026-07-03T04:32:07.244Z
tags:
  - pub-prob
type: note
state: done
sup:
  - "[[Linear Regression]]"
  - "[[Machine Learning]]"
---

# Underdetermined Linear System

In high-dimensional [[Machine Learning]], we often need to solve **underdetermined linear systems** $y = Xw$, where the feature number is much higher than the sample number ($d \gg n$). For **overdetermined linear systems**, use [[Linear Regression]].
We can also think of these systems as for the [[Linear Regression]] problem. Except here, there are infinite solutions that can achieve zero [[Mean Squared Error|MSE]]. So instead of aiming at [[Mean Squared Error|least square error]], we aim for the **least norm** for underdetermined linear systems.

## L2 Norm

We can easily show that $w_{\ln} = X^T(XX^T)^{-1}y$ is a solution to the system (we always assume that $X$ has full row rank). We can also use [[Constrained Optimization|KKT]] to get the solution. ^32cf47

- Don't mix it up with the [[Mean Squared Error|MSE]] solution $w_{\mathrm{LS}} = (X^TX)^{-1}X^Ty$.

We claim that $w_{\ln}$ has the least [[L2 Regularization|L2 norm]]: for any solution $w$, we have

$$
\begin{aligned}
\| w \|_{2}^{2}
&= \| w - w_{\ln} + w_{\ln} \|_{2}^{2}\\
&= \| w-w_{\ln} \| _{2}^{2} + \| w_{\ln} \| _{2}^{2} + 2(w - w_{\ln})^Tw_{\ln }\\
&= \| w-w_{\ln} \| _{2}^{2} + \| w_{\ln} \| _{2}^{2} + 2 (X(w - w_{\ln}))^T (XX^T)^{-1}y\\
&= \| w-w_{\ln} \| _{2}^{2} + \| w_{\ln} \| _{2}^{2} + 0\\
&\ge \| w_{\ln } \|_{2}^{2}.
\end{aligned}
$$

We can also solve the [[Optimization]] problem $\argmin_{w}\|w\|_{2}^{2} \text{ subject to } Xw=y$ to get $w_{\ln }$. ^65cda9

- The geometric perception of the solution is $w_{\mathrm{ln}} = \operatorname{proj}_{\{ w:Xw=y \}}0$. Therefore, $w_{\mathrm{ln}}$ achieves optimality.

## L1 Norm

We can think of the least $\ell_{2}$ norm solution as applying [[L2 Regularization]] to [[Mean Squared Error]] (which is equivalent to [[Ridge Regression]]) on underdetermined linear systems. When using an [[L1 Regularization]] to general [[Linear Regression|linear systems]], we get [[LASSO]].

[[L1 Regularization]]/sparsity/feature selection is especially important for underdetermined linear systems.
