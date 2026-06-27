---
publish: true
aliases:
  - Borel Set
  - Lebesgue Measure
title: Borel Sigma Field
created: 2024-09-06T23:27:30
modified: 2026-06-26T10:40:37
published: 2026-06-26T17:41:20.339Z
tags:
  - pub-prob
id: Borel Sigma Field
state: done
sup:
  - "[[Sigma Field]]"
type: note
---

# Borel Sigma Field

## Definition

Let $C = \{ [a,b]: a,b\in \mathbb{R} \}$ be the collection of all closed intervals or all open intervals.
By the [[Sigma Field#^prop-1-1]], we know $\sigma(C)$ exists, and we call it the _Borel $\sigma$-field_.
Any set in the Borel $\sigma$-field is called a _Borel set_.
For a topological space $X$, the Borel $\sigma$-algebra of it is the collection of all Borel set on it. The Borel algebra is the smallest $\sigma$-algebra containing all open sets on $X$.

## Borel Measure

Any [[Measure]] $\mu$ defined on the Borel algebra is a Borel measure. Typically the choice of Borel measure that assigns $\mu ((a,b])=b-a$ for every half-open interval $(a,b]$ is sometimes called "_the_" Borel measure on $\R^{n}$[^1].
This is also called the **Lebesgue measure** or the **uniform measure**.
Note that the **Lebesgue measure** also refers to the [[Measure#Complete Measure]] on $\sigma(\mathcal{B}\cup \mathcal{N})$, where $\mathcal{N}$ is the collection of all null (zero-measure) sets.

[^1]: When $n>1$, $(a,b] = (a_{1},b_{1}]\times\dots(a_{n},b_{n}]$, $b-a = \prod(b_{i} - a_{i})$.

## Construction of Lebesgue Measure

To formally define the Lebesgue measure, we can use [[Caratheodory's Extension]]. We first define a field (closed under finite union)

$$$
\mathcal{F}_{0} = \left\{ \cup_{i=1}^{n}(a_i,b_i]: n\in\N, a_i,b_i\in\R  \right\}
.$$
It can be shown that
- $\mathcal{F}_0$ is a field but not a [[Sigma Field]].
- $\sigma(\mathcal{F}_{0}) = \sigma(\mathcal{C}) = \mathcal{B}$.

Define $\P_{0}$ as
$$$

\P\_{0}(\cup\_{i=1}^{n}(a\_i,b\_i]) = \sum\_{i=1}^{n}(b\_i - a\_i)
.\$\$
It can be proved (nontrivial) that $\P_{0}$ is countably additive.
Then the Lebesgue measure is defined as the [[Caratheodory's Extension]] of $\P_{0}$.

## Uniform Distribution on $\{0,1\}^{\infty}$

Using the **binary representation of real numbers**, the Lebesgue measure is equivalent to the uniform distribution on $\{0,1\}^{\infty}$, with the [[Sigma Field]] $\sigma(\mathcal{F}_{0})$, where

$$$
\mathcal{F}_{0} = \bigcup_{n=1}^{\infty} \mathcal{F}_{n}
= \bigcup_{n=1}^{\infty} \left\{ B \times \left\{ 0,1 \right\}^{\infty} : B \subset \left\{ 0,1 \right\}^{n}   \right\}
.$$
That is $\mathcal{F}_{n}$ is the collection of all events whose occurrence can be decided by looking at the results of the first $n$ digits. $\mathcal{F}_n$ is a $\sigma$-field while $\mathcal{F}_0$ is not.
The uniform probability measure is consistent with $\P_{0}$ defined on $\mathcal{F}_{0}$:
$$$

\P\_{0}(A) = |B| / 2^{n} .

$$

## Related Problems

- [[6-7700-hw1#Exercise 3 (Borel $ sigma$-field)]]
- [[6-7700-hw2#Exercise 3]]
$$
