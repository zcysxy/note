---
publish: true
title: Fubini's Theorem
created: 2024-11-04T02:55:07
modified: 2024-12-13T13:32:34
published: 2026-06-28T07:05:18.847Z
tags:
  - pub-prob
state: done
sup:
  - "[[Real Analysis]]"
aliases:
type: note
---

# Fubini's Theorem

Informally, for a nonnegative or integrable function $f: \Omega_{1}\times\Omega_{2}\to \R$, we have

$$
\int_{\Omega_{1}\times\Omega_{2}}f\d\mu(x,y) =\int _{\Omega_{1}}\int_{\Omega_{2}}f\d\mu_{2}(y)\d\mu_{1}(x) = \int_{\Omega_{2}}\int_{\Omega_{1}}f\d\mu_{1}(x)\d\mu_{2}(y).
$$

## Nonnegative Functions

Let $f: \Omega_{1}\times\Omega_{2} \to \mathbb{R}$ be a nonnegative function and $\mu=\mu_{1}\otimes \mu_{2}$ be a $\sigma$-finite[^1] product measure on $\Omega_{1}\times\Omega_{2}$. Then

- $f(\omega_{1},\omega_{2})$ is a measurable function of $\omega_{1}$ and $\omega_{2}$.
- $f_{1}(x_{1}) = \int_{\Omega_{2}} f(x_{1}, x_{2}) d\mu_{2}(x_{2})$ is measurable on $\Omega_{1}$.
- $f_{2}(x_{2}) = \int_{\Omega_{1}} f(x_{1}, x_{2}) d\mu_{1}(x_{1})$ is measurable on $\Omega_{2}$.

And we have

$$
\int_{\Omega_{1}\times\Omega_{2}} f d\mu = \int_{\Omega_{1}} f_{1} d\mu_{1} = \int_{\Omega_{2}} f_{2} d\mu_{2}.
$$

[^1]: A measure $\mu$ is $\sigma$-finite if there exists a countable collection of measurable sets $A_{1}, A_{2}, \ldots$ such that $\mu(A_{i}) < \infty$ for all $i$ and $\Omega = \bigcup_{i} A_{i}$.

## Integrable Functions

Let $f: \Omega_{1}\times\Omega_{2} \to \mathbb{R}$ be an integrable function with respect to a $\sigma$-finite measure $\mu=\mu_{1}\otimes \mu_{2}$.[^2] Then

- $f(\omega_{1},\omega_{2})$ is an integrable function of $\omega_{1}$ for almost all $\omega_{2}$.
- $f(\omega_{1},\omega_{2})$ is an integrable function of $\omega_{2}$ for almost all $\omega_{1}$.
- $f_{1}(x_{1}) = \int_{\Omega_{2}} f(x_{1}, x_{2}) d\mu_{2}(x_{2})$ is integrable almost surely on $\Omega_{1}$ ($f_1$ may be undefined or infinite on a zero measure set).
- $f_{2}(x_{2}) = \int_{\Omega_{1}} f(x_{1}, x_{2}) d\mu_{1}(x_{1})$ is integrable almost surely on $\Omega_{2}$.

And we have

$$
\int_{\Omega_{1}\times\Omega_{2}} f d\mu = \int_{\Omega_{1}} f_{1} d\mu_{1} = \int_{\Omega_{2}} f_{2} d\mu_{2}.
$$

[^2]: That is $\int |f|\d \mu <\infty$.

## Counterexamples

### Non-Sigma-Finite Measure

Let $\Omega_{1}=\Omega_{2} = (0,1)\subset\R$. Let $\mathcal{F}_{1}=\mathcal{B}(0,1)$, $\mathcal{F}_{2}=2^{\Omega_{2}}$. Let $\mu_{1} = \lambda$, the Lebesgue measure, and $\mu_{2}(A) = |A|$, the counting measure. Then $\mu_{2}$ is not $\sigma$-finite.
Consider the function $f(x,y)=\mathbb{1}\{ x=y \}$. We have

$$
\int_{\Omega_{1}}\int _{\Omega_{2}} f(x,y)\d \mu_{2}\d \mu_{1} =\int _{\Omega_{1}} 1 \d \mu_{1} = 1,
$$

but

$$
\int_{\Omega_{2}}\int _{\Omega_{1}} f(x,y)\d \mu_{1}\d \mu_{2} =\int _{\Omega_{2}} 0 \d \mu_{2} = 0,
$$

### General Function

Let $\Omega_{1}=\Omega_{2} = \N$, $\mathcal{F}_{1}=\mathcal{F}_{2}=2^{\N}$, and $\mu_{1}=\mu_{2}$ be the counting measure. Consider the function $f(x,x) = 1$, $f(x,x+1)=-1$, and $f(x,y)=0$ otherwise. Then

$$
\int_{\Omega_{1}} \int _{\Omega_{2}} f(x,y)\d \mu_{2}\d \mu_{1} = \sum_{n}\sum_{m} f(n,m) = \sum_{n}0=0,
$$

but

$$
\int_{\Omega_{2}} \int _{\Omega_{1}} f(x,y)\d \mu_{1}\d \mu_{2} = \sum_{m}\sum_{n} f(n,m) = 1 + \sum_{m\ge 2}0=1.
$$
