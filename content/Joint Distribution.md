---
publish: true
title: Joint Distribution
created: 2024-11-03T01:18:01
modified: 2026-06-26T21:54:56
published: 2026-06-27T04:54:56.624Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
aliases:
type: note
---

# Joint Distribution

We first consider two [[Random Variable]]s $X$, $Y$, and we want to study the dependence between them.
This is captured by the joint distribution

$$
P_{X,Y}(A) = P((X,Y)\in A \subset \R^{2}).
$$

If $X$, $Y$ are on the same [[Probability Space]], for any Borel set $A\subset\R^{2}$, the set $B=\{ \omega\in\Omega: (X(\omega),Y(\omega))\in A \}$ is $\mathcal{F}$-measurable. To see this, we can inspect the _base_ set $(a,b]\times(c,d]$ of the [[Borel Sigma Field]], and see that $B = X ^{-1}((a,b])\cap Y ^{-1}((c,d])\in\mathcal{F}$.

If both r.v.s are discrete, we can define their joint [[Probability Mass Function|PMF]]:

$$
p_{X,Y}(x,y) = P(X=x, Y=y).
$$

If they are continuous, we define the joint [[Probability Density Function|PDF]]:

$$
f_{X,Y}(x,y) = \frac{\partial^2 F_{X,Y}(x,y)}{\partial x \partial y}.
$$

Joint distribution for more than two r.v.s can be defined similarly.

## Marginal Distribution

Let $P_{X}$ be the joint distribution of $X=(X_{1},\dots,X_n)$. The marginal distribution of $X_i$ is

$$
P_{X_i}(A) = P(X_i\in A) = P(X_{i}\in A, X_{-i}\in\R^{n-1}).
$$

If $X$ is discrete, we have

$$
p_{X_i}(x_i) = \sum_{x_{-i}} p_{X}(x).
$$

If $X$ is continuous, we have

$$
f_{X_i}(x_i) = \int_{\R^{n-1}} f_{X}(x) \, dx_{-i}.
$$

- If the joint distribution is discrete/continuous, the marginal distributions are also discrete/continuous. However, the reverse is not true for continuous marginal distributions.
  - Let $X=Y$ be a continuous r.v. Since $\{ x=y \}$ has zero measure on $\R^{2}$, their joint distribution is singular and not continuous.
