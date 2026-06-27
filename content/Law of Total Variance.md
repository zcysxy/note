---
publish: true
aliases:
  - Variance Decomposition
  - Conditional Variance Formula
  - Law of Iterated Variances
  - Eve's Law
title: Law of Total Variance
created: 2024-10-29T12:31:04
modified: 2024-10-29T12:49:35
published: 2026-06-26T18:41:20.468Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
  - "[[Conditional Probability]]"
type: note
---

# Law of Total Variance

For [[Random Variable]]s $X$, $Y$ on the same probability space, if $Y$ has finite variance, then

$$
\Var(X) = \mathbb{E}[\Var(X|Y)] + \Var(\mathbb{E}[X|Y]).
$$

## Proof

$$
\begin{aligned}
\Var(X) =& \mathbb{E}X^{2} - (\mathbb{E}X)^{2} \\
=& \mathbb{E}\left[\mathbb{E}[X^2\given Y] \right] - \left( \mathbb{E}[\mathbb{E}[X\given Y]] \right) ^{2}\\
=& \mathbb{E}\left[\mathbb{E}[X^2\given Y] - \left( \mathbb{E}[X\given Y] \right)^{2}  \right] + \mathbb{E}\left[ \left( \mathbb{E}[X\given Y] \right) ^{2} \right] - \left( \mathbb{E}[\mathbb{E}[X\given Y]] \right) ^{2}\\
=& \mathbb{E}\left[ \Var(X\given Y) \right]  + \Var\left( \mathbb{E}[X\given Y] \right) .
\end{aligned}
$$

## Interpretation

Typically, we want to find a causal random variable $Y$ that _explains_ (the variance of) $X$.

- For example, let $X$ be the weight of a dog, and $Y$ be the dog's breed.

Intuitively, fixing a breed $Y=y$, the variance of $X\given Y=y$ should be small; this contributes to the "unexplained" part of the variance of $X$: $\mathbb{E}[\Var(X\given Y)]$.
And the dog's weight should be close to the average weight of the breed $\mathbb{E}[X\given Y]$, whose variance is the "explained" part of the variance of $X$: $\Var(\mathbb{E}[X\given Y])$.
