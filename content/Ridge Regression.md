---
publish: true
title: Ridge Regression
created: 2023-01-24T22:41:18
modified: 2023-03-08T15:43:40
published: 2026-07-01T21:41:43.000Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Regression]]"
state: done
related:
  - "[[L2 Regularization]]"
  - "[[Linear Regression]]"
---

# Ridge Regression

Ridge regression controls the modulus of the weight: we use [[Mean Squared Error]] plus [[L2 Regularization]] as the [[Cost Function]]

$$
J = \| y - Xw \|^{2} + \alpha\| w \|^{2} =  (Xw - y)^T(Xw - y) + \alpha w^Tw
$$

^obj

We get $w_{\symrm{RR}} \to w_{\symrm{LS}}$ as $\alpha \to 0$; and $w_{\symrm{RR}} \to 0$ as $\alpha \to \infty$.

Then with the same process, we get

$$
w = (X^TX + \alpha I)^{-1} X^Ty.
$$

^sol

![image.png|500](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20230124153216.png)

Above is an illustration. Ridge regression seeks an equilibrium between the weight norm and the [[Mean Squared Error|MSE]].

The math relationship between $w_{\symrm{RR}}$ and $w_{\symrm{MLE}}$ is derived in [[L2 Regularization#Weight Decay]], where $\tilde{w} = w_{\symrm{RR}}$ and $w^* = w_{\symrm{LS}}$; $H = X^{T}X = Q\Lambda Q^{T}$ is the eigenvalue decomposition/[[Singular Value Decomposition|SVD]].
Furthermore, let $X = USV^{T}$, we have

$$
\begin{cases}
w_{\symrm{RR}} &= V\diag\left\{  \frac{\sigma _i}{\alpha + \sigma _i^{2}}  \right\}U^{T}y; \\
w_{\symrm{LS}} &= V\diag\{ \sigma _i^{-1} \}U^{T}y.
\end{cases}
$$

^e72db7

Therefore, ridge regression is more stable than [[Linear Regression]].

Also, we can see that [[L2 Regularization]] causes the learning algorithm to "perceive" the input $X$ as having a **higher variance**, which makes it shrink the weights on features whose covariance with the output target is low compared to this added variance.

In the above example, the components of $X$ corresponding to the first dimension $w_{1}$ has lower variance (or the eigenvalue of the Hessian of $J$ is small in this direction); thus, the objective function does not increase much when moving horizontally away from $w_{\symrm{LS}}$. Then the regularizer pulls $w_1$ close to zero. In the second dimension, the situation is reversed, pulling $w_{2}$ away from zero.

## Pseudoinverse

As we can see, if we let $\alpha \to 0$, then we get

$w = X^{\dagger} y$

where $X^{\dagger}$ is the [[Moore-Penrose Pseudoinverse]]. Therefore we can interpret the [[Moore-Penrose Pseudoinverse|pseudoinverse]] as stabilizing underdetermined problems using regularization.

## Variance, Correlation, Singular Value, and Weight

First, the variance of the random vector is a [[Covariance]] matrix. And the sample [[Covariance]] matrix is $\frac{1}{n-1} X^{T}X$.
For highly correlated data, i.e., some features are dependent, some non-diagonal elements of the covariance matrix will be big.
Also, if the data is correlated, some eigenvalues of $X^{T}X$ or singular values of $X$ will be small.

Back to the illustrative graph above. We know that

$$
J_{\symrm{LS}}(w) = \| y - Xw \| ^{2} = \| y - Xw_{\symrm{LS}} \| ^{2} + \| X(w - w_{\symrm{LS}}) \|^{2},
$$

and

$$
\nabla _{w}J_{\symrm{LS}}(w) = 2X^{T}X(w - w_{\symrm{LS}}),
$$

which is zero at $w_{\symrm{LS}}$. Therefore, we need to examine the Hessian of $J$, which is $2X^{T}X$, the scaled sample [[Covariance]] matrix.

So the sample [[Covariance]] matrix determines the curvature of $J_{\symrm{LS}}$ at $w_{\symrm{LS}}$. And $J_{\symrm{LS}}$ is more sensitive in directions of $w$ corresponding to larger eigenvalues of $X^{T}X$, or larger singular values of $X$, which captures larger variance of the data.

Then, with regularization, $w$'s direction with a smaller variance will be pull to zero more quickly.

## Bias and Variance

$$
\mathbb{E}[w_{\symrm{{RR}}}] = (\lambda I+ X^{T}X)^{-1}X^{T}X w, \quad \Var(w_{\symrm{RR}})= \sigma^{2}Z(X^TX)^{-1}Z^T,
$$

^bias-var

where $Z = (I +\lambda(X^TX)^{-1})^{-1}$.

Compared to the variance of $w_{\symrm{MLE}}$: ![[Linear Regression#^var]]
the variance of $w_{\symrm{MLE}}$ shrinks by a factor of $(1 + \lambda C)^{-1}$.

> [!impt] Least Squares vs. Ridge Regression
>
> - Least squares solution: unbiased, but potentially high variance
> - Ridge regression solution: biased, but lower variance than LS

For general bias and variance trade-off, see [[Bias-Variance Trade-Off]].
