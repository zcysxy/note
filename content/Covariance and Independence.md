---
publish: true
title: Covariance and Independence
created: 2022-10-19T14:18:20
modified: 2022-10-19T14:22:16
published: 2026-06-27T22:38:22.810Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Covariance and Independence

By definition, independence implies zero [[Covariance]]. The converse is not true.

Easy example: Let $X$ be a random variable that is $-1$ or $+1$ with probability 0.5. Then let $Y$ be a random variable such that $Y=0$ if $X=-1$, and $Y$ is randomly $-1$ or $+1$ with probability 0.5 if $X=1$.

Clearly $X$ and $Y$ are highly dependent (since knowing $Y$ allows me to perfectly know $X$), but their covariance is zero: They both have zero mean, and

$$
\begin{aligned}
\mathbb{E}[XY] =&(-1) \cdot 0 \cdot P(X=-1) \\
& +1 \cdot 1 \cdot P(X=1,Y=1) \\
& +1 \cdot (-1)\cdot P(X=1,Y=-1) \\
=&0.
\end{aligned}
$$

Or more generally, take any distribution $P(X)$ and any $P(Y|X)$ such that $P(Y=a|X) = P(Y=-a|X)$ for all $X$ (i.e., a joint distribution that is symmetric around the $x$ axis), and you will always have zero covariance. But you will have non-independence whenever $P(Y|X) \neq P(Y)$; i.e., the conditionals are not all equal to the marginal. Or ditto for symmetry around the $y$ axis.)
