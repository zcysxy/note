---
publish: true
aliases:
  - Probability Measure
title: Measure
created: 2024-09-06T23:20:58
modified: 2024-11-04T02:20:38
published: 2026-01-06T20:10:18.000-05:00
tags:
  - pub-prob
id: Measure
state: done
sup:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Probability]]"
type: note
---

# Measure

## Definition

A function $\mu : \mathcal{F} \to \overline{R}$, where $\mathcal{F}$ is a [[Sigma Field]], is a measure, if:

1. $\mu(\emptyset)=0$
2. (_countable additivity_) For disjoint ${A\_n \in \mathcal{F}}_{n\ge 1}$: $\mu\left(U_{n \geqslant 1} A\_n\right)=\sum\_{n=1} \mu\left(A\_n\right)$.

A measure is called a _probability measure_ if $\mu(\Omega)=1$.

## Properties

- (Finite additivity) For disjoint $A, B \in \mathcal{F}$: $\mu(A \cup B)=\mu(A)+\mu(B)$
- For any event $A$, $\mathbb{P}(A^{C}) = 1 - \mathbb{P}(A)$
- If $A \subset B$, then $\mu(A) \leq \mu(B)$
- **(Union bound)** For any countable collection of events ${A\_n}$: $\mu\left(\bigcup\_{n} A\_n\right) \leq \sum\_{n} \mu(A\_n)$
- (Inclusion-exclusion formula) For any finite collection of events ${A\_n}$: $\mathbb{P}\left(\bigcup\_{n} A\_n\right) = \sum\_{n} \mathbb{P}(A\_n) - \sum\_{i < j} \mathbb{P}(A\_i \cap A\_j) + \sum\_{i < j < k} \mathbb{P}(A\_i \cap A\_j \cap A\_k) + \ldots + (-1)^{n-1} \mathbb{P}(A\_1 \cap \ldots \cap A\_n)$ ^inc-exc

## Continuity of Probability Measures

A (probability) measure requires countable additivity, which can be difficult to verify. The following theorem provides alternative conditions for establishing the countable additivity from **finite additivity**.

> [!thm] Continuity of probability measures
> Let $\mathcal{F}$ be a $\sigma$-field of subsets of $\Omega$, and suppose that $\mathbb{P}: \mathcal{F} \rightarrow\[0,1]$ satisfies $\mathbb{P}(\Omega)=1$ as well as the finite additivity property. Then, the following are equivalent:
>
> 1. $\mathbb{P}$ is a probability measure (that is, it also satisfies countable additivity).
>
> 2. If $\left{A\_i\right}$ is an increasing sequence of sets in $\mathcal{F}$ (i.e., $A\_i \subset A\_{i+1}$, for all $i$ ), and $A=\cup\_{i=1}^{\infty} A\_i$, then $\lim \_{i \rightarrow \infty} \mathbb{P}\left(A\_i\right)=\mathbb{P}(A)$.
>
> 3. If $\left{A\_i\right}$ is a decreasing sequence of sets in $\mathcal{F}$ (i.e., $A\_i \supset A\_{i+1}$, for all $i$ ), and $A=\cap\_{i=1}^{\infty} A\_i$, then $\lim \_{i \rightarrow \infty} \mathbb{P}\left(A\_i\right)=\mathbb{P}(A)$.
>
> 4. If $\left{A\_i\right}$ is a decreasing sequence of sets (i.e., $A\_i \supset A\_{i+1}$, for all $i$ ) and $\cap\_{i=1}^{\infty} A\_i$ is empty, then $\lim \_{i \rightarrow \infty} \mathbb{P}\left(A\_i\right)=0$

^prob-cont

- The second statement also holds for general measures, not just probability measures.
- The third and fourth statements do not hold for general measures as $\P(A\_i)$ is not capped at 1. The statements are true for general measures if at least one $A\_i$ has finite measure.

### Proof

(a) => (b). Note that
$$
A = \bigsqcup\_{n\ge 1} \left( A\_{n} \setminus A\_{n-1} \right),
$$
where $A\_0=\emptyset$. Then by the countable additivity of $\mathbb{P}$, we have
$$
\mathbb{P}(A) = \sum\_{n\ge 1} \mathbb{P}\left( A\_{n} \setminus A\_{n-1} \right) = \lim\_{N\to\infty} \sum\_{n=1}^{N} \left( \P(A\_n) - \P(A\_{n-1})\right)
\= \lim\_{N \to \infty} \P(A\_N).
$$

(b) => (c). By [[De Morgan]]'s law, we have
$$
\P(A) = 1 - \P(A^C) = 1 - \P\left( \bigcup\_{n\ge 1} A\_n^C \right) = 1 - \lim\_{n\to\infty} \P(A\_n^C) = \lim\_{n\to\infty} \P(A\_n).
$$

(d) is a special case of (c) by taking $A=\emptyset$.

(c) => (a). Let ${B\_n}$ be any sequence of disjoint sets. Let $A\_n \coloneqq \bigcup\_{i\ge n} B\_i$. Then clearly ${A\_n}$ is an decreasing sequence of sets. We claim that $\cap\_{n=1}^{\infty}A\_n$ is empty. To see this, suppose $\omega\in \cap\_{n=1}^{\infty}A\_n$. Then $\omega\in A\_1 = \cup\_{i=1}^{\infty}B\_i$. Then there exists $n\_0$ such that $\omega\in B\_{n\_0}$. Since $\left{ B\_n \right}$ are disjoint, $\omega\not\in \cup\_{i\ge n\_0+1}B\_i = A\_{n\_0+1}$, which contradicts the assumption that $\omega\in \cap\_{n=1}^{\infty}A\_n$. Therefore, by (d), we have $\lim\_{i \to \infty}A\_i = 0$.
Now for any $n$, by the finite additivity of $\P$, we have
$$
\P\left( \bigcup\_{i=1}^{\infty}B\_i \right)
\= \P\left( \bigcup\_{i=1}^{n-1}B\_i + \bigcup\_{i\ge n} B\_i \right)
\= \sum\_{i=1}^{n-1}\P\left( B\_i\right) + \P\left(\bigcup\_{i\ge n} B\_i \right)
\= \sum\_{i=1}^{n-1}\P\left( B\_i\right) + \P\left(A\_n \right)
.$$
Letting $n\to\infty$ gives
$$
\P\left( \bigcup\_{i=1}^{\infty}B\_i \right) = \lim\_{n \to \infty} \sum\_{i-1}^{n-1} \P(B\_i) + \lim\_{n\to\infty} \P(A\_n) = \sum\_{i=1}^{\infty} \P(B\_i).
$$

## Complete Measure

A measure space $(\Omega,\mathcal{F},\mu)$ is said to be complete if for any $A\in \mathcal{F}$ with $\mu(A)=0$, any subset $B\subset A$ is also in $\mathcal{F}$. That is, $\mathcal{F}$ contains all zero-measure sets.
A **null** set in $\mathcal{F}$ is a set $A$ such that $\mu(A)=0$.
Let $\mathcal{N}$ be the collection of all null sets. Then the _completion_ of $\mathcal{F}$ is $\mathcal{F}^{_}= \sigma(\mathcal{F}\cup \mathcal{N})$.
The completion of a measure is always possible and unique, by letting $\mu^{_}(A)=0$ for all $A\subset  B \in \mathcal{N}$.

In terms of the [[Borel Sigma Field#Borel Measure]], if we refer to the Lebesgue measure as the complete measure $\mathcal{B}^{_}$, then $\mathcal{B} \subsetneqq \mathcal{B}^{_}$. That is, there exists Lebesgue sets that are not Borel measurable.
Moreover, we have $|\mathcal{B}| = \aleph\_1$ and $|\mathcal{B}^{\*}| = 2^{\aleph\_1} = \aleph\_2$, assuming the generalized continuum hypothesis.
