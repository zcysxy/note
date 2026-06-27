---
publish: true
title: Covariance
created: 2022-10-19T13:56:22
modified: 2024-11-07T16:03:47
published: 2026-06-27T22:36:51.549Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Covariance

The covariance of two [[Random Variable]]s is

$$
\operatorname{Cov}(X,Y) = \mathbb{E}[(X - \mu _{x})(Y - \mu _{y})] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y].
$$

More generally, for two random vectors $X,Y$,

$$
\operatorname{Cov}(X,Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])^T].
$$

## Covariance as an Inner Product

Covariance is _like_ an [[Inner Product]] (it is indeed an inner product for centralized [[Random Variable]]s). We have

- $\left< X,X \right> \ge 0$ and $\left< X,X \right> = 0$ iff $X = C$ (semi-positiveness)
- $\left< X,Y \right> = \left< Y,X \right>$
- $\left< X,Y+b \right> = \left< X,Y \right>$ where $b$ is a constant
- $\left< \sum_i a_iX _i, \sum_j b_jY_j \right> = \sum_i\sum_ja_ib_j\left< X _i,Y_j \right>$
  - Generalization: $\left< AX,BY \right> = A\left< X,Y \right>B^{T}$
- Independence (orthogonal) ==> $\left< X,Y \right> = 0$
  - However, [[Covariance and Independence|zero covariance doesn't imply independence]].
- [[Cauchy-Schwarz Inequality]]: $|\left< X,Y \right>| \le \sqrt{\left< X,X \right>\left< Y,Y \right>} = \sqrt{ \Var(X)}\sqrt{\Var(Y)}$, and the equality holds iff $Y \overset{\text{a.e.}}{=}cX$ for some constant $c$.

## Correlation

$$
\operatorname{Corr}(X,Y) = \frac{\operatorname{Cov}(X,Y)}{\sqrt{ \operatorname{Var}(X)\operatorname{Var}(Y) }}
$$

Denote $\rho = \operatorname{Corr}(X,Y)$. Then $-1\le \rho \le 1$, and $\rho = \pm 1$ iff $Y = aX + b$ a.s. for some $a\gtrless 0$.

## Sample Covariance

For two samples of $X,Y$ of size $n$, their **sample covariance** is

$$
\frac{\sum^{n}_{i=1}(x _i-\overline{x})(y_i - \overline{y})}{n-1}
$$

For centered random vectors, we have

$$
\Sigma = \frac{1}{n-1}\sum^{n}_{i=1}x _iy_i^{T} = \frac{1}{n-1} X^{T}Y,
$$

where $X = (x_{1},\dots,x_n)^{T}$.

## Sample Correlation Coefficient

For two samples of $X,Y$ of size $n$, their **sample correlation coefficient** is

$$
r = \frac{\sum^{n}_{i=1}(x _i-\overline{x})(y_i - \overline{y})}{(n-1)s_{x}s_{y}} =  \frac{\sum^{n}_{i=1}(x _i-\overline{x})(y_i - \overline{y})}{\sqrt{ \sum^{n}_{i=1}(x _i - \overline{x})^{2} }\sqrt{ \sum^{n}_{i=1} (y_i-\overline{y})^{2}}},
$$

where $s_{x}, s_{y}$ is the sample [[Variance]] of $\{ x _i \},\{ y_i \}$.

### Properties

When $r >0$, we say the sample data pairs are positively correlated;
When $r <0$, we say the sample data pairs are negatively correlated.

$r$ have some properties:

- $r\in [-1,1]$
- $r=1$ if $y_i = ax _i + b$ and $a > 0$
- $r=-1$ if $y_i = ax _i + b$ and $a < 0$
- if $r$ is the sample correlation coefficient for $\{ (x _i,y_i) \}$, then it is also the sample correlation coefficient for $\{ (ax _i +b, cy_i+d) \}$ provided that $a,c$ have the same sign.
