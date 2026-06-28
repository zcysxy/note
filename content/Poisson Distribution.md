---
publish: true
title: Poisson Distribution
created: 2022-12-05T15:58:25
modified: 2024-11-03T02:30:58
published: 2026-06-28T06:42:24.336Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Poisson Distribution

A discrete [[Random Variable]] is of Poisson distribution if its range is $\mathbb{N}_0$, and

- Parameters
  - $\lambda > 0$ ^para
- [[Probability Mass Function|PMF]]
  - $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$ ^pdf
  - The important part is $\lambda ^{n} / n!$; $e^{-\lambda}$ is just a constant to make if sum to 1
  - Remember it as the **expansion** of the exponential
- [[Expectation|Mean]]
  - $\lambda$ ^mean
- [[Variance]]
  - $\lambda$ ^var
- [[Moment Generating Function|MGF]]
  - $\exp(\lambda(e^{t}-1))$ ^mgf
- [[Characteristic Function|CF]]
  - $\exp(\lambda(e^{it}-1))$ ^cf

## Poisson Distribution as Approximation to Binomial Distribution

When $n$ is large and $p$ is small, Poisson distribution can be an approximation of a [[Binomial Distribution]]. This is because for $X\sim \operatorname{Binom}(n,p)$, we have

$$
P(X = k) = {n \choose k} p^{k}(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\left( \frac{np}{n} \right)^{k}\left( 1 - \frac{np}{n} \right)^{n}\left( 1 - p \right)^{-k}
$$

When $n$ is large and $p$ is small, we have

$$
\frac{n(n-1)\dots(n-k+1)}{n^{k}} \approx 1, \quad \left( 1 - \frac{np}{n} \right)^{n} \approx e^{-np}, \quad (1-p)^{-k} \approx 1.
$$

Therefore, we have

$$
P(X = k) \approx e^{-np} \frac{(np)^{k}}{k!},
$$

i.e., $X \dot{\sim} \operatorname{Poisson}(np)$. Or, $\operatorname{Binom}(n,\lambda /n)\overset{ d }{ \longrightarrow } \operatorname{Poisson}(\lambda)$.

- The Poisson approximation result can be shown to be valid under even more general conditions than those so far mentioned. For instance, suppose that n independent trials are to be performed, with the ith trial resulting in a success with probability $p_i, i = 1,...,n$. Then it can be shown that if n is large and each $p_i$ is small, then the number of successful trials is approximately Poisson distributed with mean equal to $\sum^n_{i=1}p_i$. In fact, this result will sometimes remain true even when the trials are not independent, provided that their dependence is “weak.” For instance, consider the following example.

## Splitting a Poisson Random Variable

Consider conducting $N \sim \operatorname{Poisson}(\lambda )$ trials. Let $X$ be the success count with a conditional distribution $X \given N = n \sim \operatorname{Binom}(n,p)$. Let $Y = N-X$.
We can show that $X$ and $Y$ are independent, and $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$.

Since all r.v.s are discrete, we consider their PMFs. First, we have

$$
p_{X,Y}(x,y) = p_{X,Y\given N}(x,y\given n=x+y) p_{N}(n=x+y) 
= \mathbb{1}\{ y=y \} p_{X\given N}(x| n=x+y)  p_{N}(n=x+y) 
= e^{-\lambda}\frac{\lambda^{x+y}}{(x+y)!} \cdot {x+y \choose x}p^{x}(1-p)^{y}.
$$

Then, as $X$ is the marginal distribution of $X,N$, we have

$$
p_{X}(x) = \sum_{n=0}^{\infty}p_{X,N}(x,n) = \sum_{n=0}^{\infty}p_{X\given N}(x\given n)p_{N}(n) = \sum_{n=x}^{\infty}{n \choose x}p^{x}(1-p)^{n-x}e^{-\lambda}\frac{\lambda^{n}}{n!}
= \frac{(p /(1-p))^{x}e^{-\lambda}}{x!} \sum_{n\ge x} \frac{(\lambda (1-p))^{n}}{(n-x)!}
= \frac{(\lambda p)^{x}e^{-\lambda}}{x!} \sum_{n=0}^{\infty} \frac{(\lambda (1-p))^{n}}{n!}
= \frac{(\lambda p)^{x}}{x!} e^{\lambda(1-p)-\lambda}
= e^{-\lambda p} \frac{(\lambda p)^{x}}{x!}.
$$

By symmetry, $p_{Y}(y) = e^{-\lambda(1-p)}(\lambda(1-p)^{y}) / y!$.
Thus, $X \sim \operatorname{Poisson}(\lambda p)$ and $Y \sim \operatorname{Poisson}(\lambda (1-p))$, and,

$$
p_{X}(x)p_{Y}(y) = e^{-\lambda} \frac{\lambda^{x+y}p^{x}(1-p)^{y}}{x!y!}  = p_{X,Y}(x,y),
$$
