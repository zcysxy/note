---
publish: true
aliases:
  - Variance of Number of Correct Letters
title: Matching Problem
created: 2023-06-24T16:23:24
modified: 2024-11-03T15:16:23
published: 2026-06-28T05:56:35.352Z
tags:
  - pub-prob
author: Chenyu Zhang (cz2736)
type: output
output: pdf_document
header-includes:
  - \usepackage{mytex}
sup:
  - "[[Probability]]"
state: done
---

# Matching Problem

There are $n$ letters and $n$ corresponding envelopes. Insert each letter into an envelope at random. Let $X$ be the number of correct matches between the letter and envelope.

## Mean

Let $X_i$ be the **indicator random variable** that equals 1 when the $i$th letter is put into the correct envelope, and equals 0 otherwise.
By symmetry, we know that $X_{i}$ have the same distribution, and $P(X_{i}=1)= \frac{1}{n}$.
Then we have

$$
\mathbb{E}[X] = \sum_{i=1}^{n} \mathbb{E}[X_i] = n /n=1.
$$

## Variance

We have

$$
\begin{aligned}
\operatorname{Var}\left(\sum_{i}X_i\right) &= \sum_{i,j} \operatorname{Cov}(X_i, X_j)\\
&= n\operatorname{Var}(X_1) + n(n-1)\operatorname{Cov}(X_1,X_2)\\
&=n\left(\frac{1}{n} - \frac{1}{n^{2}}\right) + n(n-1)\left( \frac{1}{n(n-1)} - \frac{1}{n^{2}} \right)\\
&= 1,
\end{aligned}
$$

where in the second equality we utilize the **symmetry** of $X_i$s; and in the third equality we use $E[X_{1}^{2}] = 1/n$ and $E[X_1X_2] = 1 /(n(n-1))$.

## PMF

For any $r\in [n]$, the event $\{ X=r \}$ is equivalent to that there exists a set of $r$ letters ($S$) such that each letter is put into the correct envelope ($B_{S}$), and the remaining $n-r$ letters are put into the wrong envelopes ($C_{S}$). Formally, we have

$$
\{ X = r \} = \bigcup _{S:|S|=r} \left( B_{S} \cap C_{S} \right).
$$

Note that $B_{S}\cap C_{S}$ for different subset $S$ are disjoint sets in $|\Omega| = n!$. Thus,

$$
P(X=r) = \sum_{S:|S|=r} P(B_{S}\cap C_{S})
={n\choose r}P(B_{S})P(C_{S}\given B_{S}),
$$

where the last equality uses symmetry. The probability of $B_{S}$ is straightforward:

$$
P(B_{S}) = \frac{(n-r)!}{n!}.
$$

The probability of $P(C_{S}\given B_{S})$ is the same as if there are only $n-r$ letters and envelopes, and there is no match. By the [[Measure#^inc-exc|inclusion-exclusion principle]], we have

$$
\begin{aligned}
P(C_{S}\given B_{S}) =& P(\tilde{X} = 0)\\
=& 1 - P(\cup _{i=1}^{n-r}\{\tilde{X}_i = 1\})\\
=& 1 - \left( \sum_{i=1}^{n-r}P(\tilde{X}_i=1) - \sum_{i<j}P(\tilde{X}_i=\tilde{X}_j=1) + \ldots \right)\\
=& 1 - \left( {n-r \choose 1} \cdot \frac{(n-r-1)!}{(n-r)!}  - {n-r \choose 2} \cdot \frac{(n-r-2)!}{(n-r)!} + \ldots \right)\\
=& 1- \left( 1 - \frac{1}{2!} + \frac{1}{3!} - \dots + (-1)^{n-r+1} \frac{1}{(n-r)!} \right) \\
=& \frac{1}{2!} - \frac{1}{3!} + \dots + (-1)^{n-r} \frac{1}{(n-r)!}.
\end{aligned}
$$

Together, we get

$$
P(X=r) = {n \choose r} \frac{(n-r)!}{n!} \left( \frac{1}{2!} - \frac{1}{3!} + \dots + (-1)^{n-r} \frac{1}{(n-r)!} \right)
= \frac{1}{r!}\left( \frac{1}{2!} - \frac{1}{3!} + \dots + (-1)^{n-r} \frac{1}{(n-r)!} \right).
$$

Note that the above formula is only valid for $r\le n-2$. When $r=n$, we have $P(X=n)=P(\cap _{i=1}^{n}\{ X_i=1 \}) = 1 /n!$. And $\{ X=n-1 \}$ is impossible.

- Additionally, the probability $P(X=r)$ converges to $e^{-1} /r!$ as $n\to\infty$, which corresponds to the [[Poisson Distribution]] with $\lambda=1$. An intuitive justiﬁcation is that $X_i$ are not independent; on the other hand, as $n → ∞$, they are “approximately independent”. Furthermore, the success probability for each match is $1/n \to 0$, giving a similar situation as in [[Poisson Distribution#Poisson Distribution as Approximation to Binomial Distribution]].
