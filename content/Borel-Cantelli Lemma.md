---
publish: true
title: Borel-Cantelli Lemma
created: 2024-10-31T15:29:51
modified: 2026-06-27T20:51:44
published: 2026-06-28T03:51:51.280Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
aliases:
type: note
---

# Borel-Cantelli Lemma

Let $\{ A_n \}$ be a sequence of events and $A \coloneqq\{ A_n \text{ i.o.} \}\coloneqq \cap _{n=1}^{\infty}\cup _{i=n}^{\infty}A_i$

1. If $\sum_{n=1}^{\infty}P(A_n)< \infty$, then $P(A) = 0$.
2. If $\sum_{n=1}^{\infty}P(A_n)= \infty$ and $A_n$ are [[Independence|Independent]], then $P(A) = 1$.
   - The **independence** is crucial here. The lemma does not hold if the events are not independent.

## Proof

### Part 1

Since the infinite sum is bounded, we have $\lim_{ n \to \infty }\sum_{i\ge n}P(A_i)=0$. By the definition of $A$, we have

$$
P(A) \le P(\cup _{i=n}^{\infty }A_i) \le \sum_{i\ge n}P(A_i)\to 0.
$$

### Alternative Proof for Part 1

Let $X_n$ be the indicator r.v. for $A_n$. We know that $A$ happens if and only if $\sum_{n=1}^{\infty}X_n = \infty$.
By [[Abstract Integration#Monotone Convergence Theorem]],

$$
\mathbb{E}\left[ \sum_{n=1}^{\infty}X_n \right] = \sum_{n=1}^{\infty}\mathbb{E}[X_n] = \sum_{n=1}^{\infty}P(A_n) < \infty.
$$

Therefore, $\sum_{n=1}^{\infty}X_n < \infty$ a.s. In other words, with probability 1, $\{ A_n \text{ i.o.} \}$ will not happen, i.e., $P(A) = 0$.

### Part 2

Let $B_n = \cup _{i\ge n}A_n$. By [[De Morgan]]'s law, we have

$$
P(A^{c}) = P(\cup _{n=1}^{\infty } B_n^{c}) \le \sum_{n\ge 1} P(B_n^{c})
$$

Note that the [[Independence]] of $\{ A_n \}$ implies the independence of $\{ A_{n}^{c} \}$ (using the conditional probability definition). Again, by [[De Morgan]],

$$
P(B_n^{c}) = P(\cap _{i\ge n}A_i^{c}) = \prod_{i\ge n}P(A_i^{c}) = \prod_{i\ge n}(1-P(A_i)).
$$

Note that $\sum_{n\ge 1}P(A_n)=\infty \implies \sum_{i\ge n}P(A_i) = \infty$ for any finite $n$.
We claim that $\prod_{i\ge n}(1-P(A_i)) = 0$:

$$
\log \left( \prod _{i\ge n}(1-P(A_i)) \right) = \sum_{i\ge n} \log (1-P(A_i)) \le \sum_{i\ge n}(-P(A_i)) = -\infty.
$$

Therefore, $P(B_n^{c}) = 0$ and then

$$
P(A) = 1-P(A^{c}) \ge 1 - 0 = 1.
$$
