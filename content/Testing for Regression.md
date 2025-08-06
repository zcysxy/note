---
{"publish":true,"title":"Testing for Regression","created":"2025-08-05T21:59:56","modified":"2025-08-05T23:34:37","cssclasses":"","state":"done","sup":["[[Hypothesis Testing]]","[[Regression]]"],"aliases":null,"type":"note"}
---


# Testing for Regression

[[Regression]] studies the effect of the explanatory variable $X$ on the response variable $Y$. After solving the regression task, we want to know if specific features of $X$ have *significant* effects on $Y$. We use [[Hypothesis Testing]] for this purpose.

For example, in a linear regression model:
$$
Y = f_{\theta}(X) + \epsilon = X\theta +\epsilon ,
$$
we want to test
$$
H_{0}: \theta _{j} = 0 \quad \text{vs} \quad H_{1}: \theta _{j} \neq 0.
$$
^ex

Other regression models and hypotheses can be considered.
We can also test a group of features using [[Multiple Hypothesis Testing]].

## Gaussian Linear Model

We focus the [[Testing for Regression#^ex\|above example]] with a [[Gaussian Linear Model]], i.e., $\epsilon \sim \mathcal{N}(0,\sigma^{2}I)$.
We have two useful lemmas:[^1]

1. Let $\hat{\sigma}^{2} \coloneqq \|Y - X\hat{\theta}^{\mathrm{LS}}\|_{2}^{2} /(n-d)$, where $d$ is feature dimension ($X\in\R^{n\times d}$). Then  $(n-d)\hat{\sigma}^{2} / \sigma^{2} \sim \chi ^{2}_{n-d}$.
2. $\hat{\theta}^{\mathrm{LS}} \Perp \hat{\sigma}^{2}$.

[^1]: Both lemmas can be proved using the derivation in [[Gaussian Linear Model#Minimax Estimator]] or [[Prediction#^ls-pred]]. Specifically, for the first item, $Y - {X}\hat{\theta} ^{\mathrm{LS}} = \operatorname{Proj}_{\operatorname{col}(X)^\perp}\epsilon \sim \mathcal{N}(0, \sigma^{2}I_{n-d})$ and thus $(n-d)\hat{\sigma}^{2}/\sigma^{2} = \|Y-X\hat{\theta}^{\mathrm{LS}}\|^{2} /\sigma^{2} \sim \chi _{n-d}^{2}$.
For the second item $\operatorname{Proj}_{\operatorname{col}(X)}Y$ is sufficient for $\theta$ and perpendicular to $\operatorname{Proj}_{\operatorname{col}(X)^{\perp}}\epsilon$, and thus $\theta \Perp \hat{\sigma}^{2}$.

Combining the two lemmas gives the test statistic:
$$
T_{n}^{(j)} \coloneqq \frac{\frac{\hat{\theta}^{\mathrm{LS}}_{j} - \theta _{j}}{\sqrt{ \sigma^{2}(X^TX)^{-1}_{jj} }}}{\sqrt{ \frac{\hat{\sigma}^{2}}{\sigma^{2}} }} = \frac{\hat{\theta}^{\mathrm{LS}}_{j}-0}{\sqrt{ \hat{\sigma}^{2} (X^TX)^{-1}_{jj} }} \sim t_{n-d},
$$
where $A_{j j}$ is the $j$-th diagonal element of the matrix $A$.
