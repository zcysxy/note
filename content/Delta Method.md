---
publish: true
title: Delta Method
created: 2025-05-21T21:18:39
modified: 2025-06-09T21:33:39
published: 2025-08-19T11:19:51.387-04:00
tags:
  - pub-stat
state: done
sup:
aliases:
type: note
---

# Delta Method

Given a converging sequence of r.v.s and a function, the delta method uses the function's first-order derivative to describe the limiting distribution of the transformed sequence after the function.

Formally, suppose there exists a vector $\theta\in\R^{k}$ and a $k$-dimensional r.v. $T$, such that the number sequence ${ r\_n }$ and the r.v. sequence ${ \theta \_n }$ satisfy
$$
r\_n(\theta \_n - \theta) \overset{ d }{ \to } T,\quad \text{and}\quad r\_n \to \infty, \quad \text{as}\quad  n \to \infty.
$$
Additionally, suppose the function $\phi:\R^{k}\to\R^{d}$ is differentiable at $\theta$. Then,
$$
r\_n\left( \phi(\theta\_n)-\phi(\theta) \right) \overset{ d }{ \to } \nabla \_{\theta}^T \phi\cdot T.
$$

## Proof Sketch

We can approximate the difference $\phi(\theta \_{n})-\phi(\theta)$ using its first-order derivative:
$$
\phi(\theta _{n})-\phi (\theta ) \approx \nabla ^T_{\theta} \phi (\theta \_n-\theta).
$$
Thus,
$$
r\_n\left( \phi(\theta _{n})-\phi(\theta) \right) \approx \nabla ^T_{\theta} \phi  \left(r\_n(\theta _n-\theta)\right) \overset{ d }{ \to } \nabla ^T_{\theta} \phi\cdot T.
$$

## Formal Proof

Define the remainder $R(h) = \phi(\theta+h)-\phi(\theta)-\nabla \_{\theta}^T \phi h = o(|h|)$.
Since $r\_n\to \infty$, we know $\theta _{n}-\theta \overset{ d }{ \to } T /\infty = 0$. By [[Convergence of Random Variables#Slutsky's Theorem]], using the [[Stochastic Asymptotic Notation]], we have
$$
R(\theta _n-\theta ) = o_{P}(|\theta _n-\theta |).
$$
On the other hand, we have $r\_n(\theta _n-\theta) = O_{P}(1)$. Thus
$$
r\_nR(\theta _n-\theta ) = r\_n\cdot o_{P}\left( |\theta _n-\theta| \right)  = o_{P}\left( |r\_n(\theta _n-\theta)| \right) = o_{P}(O_{P}(1)) = o_{P}(1).
$$
Therefore
$$
r\_n\left( \phi(\theta \_n)-\phi(\theta ) \right)  = r\_n\left( R(\theta \_n-\theta) + \nabla \_{\theta}^T \phi(\theta \_n-\theta) \right) \overset{ d }{ \to } r\_n \nabla \_{\theta}^T\phi  (\theta \_n-\theta ) \overset{ d }{ \to } \nabla \_{\theta}^T \phi\cdot T.
$$

## Asymptotic Normality

The delta method is often combined with [[Central Limit Theorem|CLT]] to establish asymptotic normality. Suppose $\sqrt{ n }(\theta \_n-\theta)\overset{ d }{ \to } \mathcal{N}(0,\Sigma)$, then $\sqrt{ n }(\phi(\theta \_{n})-\phi(\theta))\overset{ d }{ \to } \mathcal{N}(0, \phi'(\theta)\Sigma \phi'(\theta)^T)$, where $\phi'$ is the Jacobian matrix.

The Jacobian matrix is the transpose of the gradient vector $\nabla\_{\theta} \phi$. That is, $\phi'(\theta) = \nabla\_{\theta}^T \phi$.

## Application

1. Write statistics as a (differentiable) function of simple statistics.
2. Apply [[Central Limit Theorem|CLT]] on simple statistics.
3. Apply the delta method on the function, to obtain the limiting distribution of the complex statistic.

### Example - Sample Variance

Let the sample variance be $\hat{\sigma}^{2} = \frac{1}{n}\sum (x _i - \overline{x})^{2}$. Suppose the sample has finite $k$th moment $\alpha _{k}$ up to $k\ge 4$. Then,
$$
\sqrt{ n }(\hat{\sigma}^{2} - \sigma^{2}) \overset{ d }{ \to } \mathcal{N}\left( 0, (-2\alpha_{1},1) \begin{pmatrix}
\alpha_{2}-\alpha\_{1}^{2} & \alpha\_{3}-\alpha\_{1}\alpha\_{2} \ \alpha\_{3}-\alpha\_{1}\alpha\_{2} & \alpha\_{4}-\alpha\_{2}^{2}
\end{pmatrix}\begin{pmatrix}
-2\alpha\_{1}\1 \end{pmatrix} \right).
$$

To see this, we first express the sample variance as a function of the sample mean and the sample second moment:
$$
\hat{\sigma}^{2} = \phi(\overline{x}, \overline{x^{2}}), \text{where } \phi(x,y) = y-x^{2}.
$$
We have $\phi'(\mu,\sigma^{2}) = (-2\alpha\_{1},1)$. And by [[Central Limit Theorem|CLT]], we have
$$
\sqrt{ n }\left( \begin{pmatrix}
\overline{X} \ \overline{X^{2}}
\end{pmatrix} - \begin{pmatrix}
\alpha\_{1} \ \alpha\_{2}
\end{pmatrix} \right) \overset{ d }{ \to } \mathcal{N}\left( 0, \begin{pmatrix}
\alpha\_{2}-\alpha\_{1}^{2} & \alpha\_{3}-\alpha\_{1}\alpha\_{2} \ \alpha\_{3}-\alpha\_{1}\alpha\_{2} & \alpha\_{4}-\alpha\_{2}^{2}
\end{pmatrix} \right).
$$
Combining CLT and delta method gives the result.
