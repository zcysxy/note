---
{"publish":true,"aliases":["Probability Measure"],"title":"Measure","created":"2024-09-06T23:20:58","modified":"2024-11-04T02:20:38","tags":["pub-prob"],"cssclasses":"","id":"Measure","state":"done","sup":["[[Measure Theory]]","[[Real Analysis]]","[[Probability]]"],"type":"note"}
---


# Measure

## Definition

A function $\mu : \mathcal{F} \to \overline{R}$, where $\mathcal{F}$ is a [[Sigma Field]], is a measure, if:

1. $\mu(\emptyset)=0$
2. (*countable additivity*) For disjoint $\{A_n \in \mathcal{F}\}_{n\ge 1}$: $\mu\left(U_{n \geqslant 1} A_n\right)=\sum_{n=1} \mu\left(A_n\right)$.

A measure is called a *probability measure* if $\mu(\Omega)=1$.

## Properties

- (Finite additivity) For disjoint $A, B \in \mathcal{F}$: $\mu(A \cup B)=\mu(A)+\mu(B)$
- For any event $A$, $\mathbb{P}(A^{C}) = 1 - \mathbb{P}(A)$
- If $A \subset B$, then $\mu(A) \leq \mu(B)$
- **(Union bound)** For any countable collection of events $\{A_n\}$: $\mu\left(\bigcup_{n} A_n\right) \leq \sum_{n} \mu(A_n)$
- (Inclusion-exclusion formula) For any finite collection of events $\{A_n\}$: $\mathbb{P}\left(\bigcup_{n} A_n\right) = \sum_{n} \mathbb{P}(A_n) - \sum_{i < j} \mathbb{P}(A_i \cap A_j) + \sum_{i < j < k} \mathbb{P}(A_i \cap A_j \cap A_k) + \ldots + (-1)^{n-1} \mathbb{P}(A_1 \cap \ldots \cap A_n)$ ^inc-exc

## Continuity of Probability Measures

A (probability) measure requires countable additivity, which can be difficult to verify. The following theorem provides alternative conditions for establishing the countable additivity from **finite additivity**.

> [!thm] Continuity of probability measures
> Let $\mathcal{F}$ be a $\sigma$-field of subsets of $\Omega$, and suppose that $\mathbb{P}: \mathcal{F} \rightarrow[0,1]$ satisfies $\mathbb{P}(\Omega)=1$ as well as the finite additivity property. Then, the following are equivalent:
> 1. $\mathbb{P}$ is a probability measure (that is, it also satisfies countable additivity).
> 2. If $\left\{A_i\right\}$ is an increasing sequence of sets in $\mathcal{F}$ (i.e., $A_i \subset A_{i+1}$, for all $i$ ), and $A=\cup_{i=1}^{\infty} A_i$, then $\lim _{i \rightarrow \infty} \mathbb{P}\left(A_i\right)=\mathbb{P}(A)$.
> 3. If $\left\{A_i\right\}$ is a decreasing sequence of sets in $\mathcal{F}$ (i.e., $A_i \supset A_{i+1}$, for all $i$ ), and $A=\cap_{i=1}^{\infty} A_i$, then $\lim _{i \rightarrow \infty} \mathbb{P}\left(A_i\right)=\mathbb{P}(A)$.
> 4. If $\left\{A_i\right\}$ is a decreasing sequence of sets (i.e., $A_i \supset A_{i+1}$, for all $i$ ) and $\cap_{i=1}^{\infty} A_i$ is empty, then $\lim _{i \rightarrow \infty} \mathbb{P}\left(A_i\right)=0$
>
>
^prob-cont

- [~] The second statement also holds for general measures, not just probability measures.
- [!] The third and fourth statements do not hold for general measures as $\P(A_i)$ is not capped at 1. The statements are true for general measures if at least one $A_i$ has finite measure.

### Proof

(a) => (b). Note that
$$
A = \bigsqcup_{n\ge 1} \left( A_{n} \setminus A_{n-1} \right),
$$
where $A_0=\emptyset$. Then by the countable additivity of $\mathbb{P}$, we have
$$
\mathbb{P}(A) = \sum_{n\ge 1} \mathbb{P}\left( A_{n} \setminus A_{n-1} \right) = \lim_{N\to\infty} \sum_{n=1}^{N} \left( \P(A_n) - \P(A_{n-1})\right)
= \lim_{N \to \infty} \P(A_N).
$$

(b) => (c). By [[De Morgan]]'s law, we have
$$
\P(A) = 1 - \P(A^C) = 1 - \P\left( \bigcup_{n\ge 1} A_n^C \right) = 1 - \lim_{n\to\infty} \P(A_n^C) = \lim_{n\to\infty} \P(A_n).
$$

(d) is a special case of (c) by taking $A=\emptyset$.

(c) => (a). Let $\{B_n\}$ be any sequence of disjoint sets. Let $A_n \coloneqq \bigcup_{i\ge n} B_i$. Then clearly $\{A_n\}$ is an decreasing sequence of sets. We claim that $\cap_{n=1}^{\infty}A_n$ is empty. To see this, suppose $\omega\in \cap_{n=1}^{\infty}A_n$. Then $\omega\in A_1 = \cup_{i=1}^{\infty}B_i$. Then there exists $n_0$ such that $\omega\in B_{n_0}$. Since $\left\{ B_n \right\}$ are disjoint, $\omega\not\in \cup_{i\ge n_0+1}B_i = A_{n_0+1}$, which contradicts the assumption that $\omega\in \cap_{n=1}^{\infty}A_n$. Therefore, by (d), we have $\lim_{i \to \infty}A_i = 0$.
Now for any $n$, by the finite additivity of $\P$, we have
$$
\P\left( \bigcup_{i=1}^{\infty}B_i \right)
= \P\left( \bigcup_{i=1}^{n-1}B_i + \bigcup_{i\ge n} B_i \right) 
= \sum_{i=1}^{n-1}\P\left( B_i\right) + \P\left(\bigcup_{i\ge n} B_i \right)
= \sum_{i=1}^{n-1}\P\left( B_i\right) + \P\left(A_n \right)
.$$
Letting $n\to\infty$ gives
$$
\P\left( \bigcup_{i=1}^{\infty}B_i \right) = \lim_{n \to \infty} \sum_{i-1}^{n-1} \P(B_i) + \lim_{n\to\infty} \P(A_n) = \sum_{i=1}^{\infty} \P(B_i).
$$

## Complete Measure

A measure space $(\Omega,\mathcal{F},\mu)$ is said to be complete if for any $A\in \mathcal{F}$ with $\mu(A)=0$, any subset $B\subset A$ is also in $\mathcal{F}$. That is, $\mathcal{F}$ contains all zero-measure sets.
A **null** set in $\mathcal{F}$ is a set $A$ such that $\mu(A)=0$.
Let $\mathcal{N}$ be the collection of all null sets. Then the *completion* of $\mathcal{F}$ is $\mathcal{F}^{*}= \sigma(\mathcal{F}\cup \mathcal{N})$.
The completion of a measure is always possible and unique, by letting $\mu^{*}(A)=0$ for all $A\subset  B \in \mathcal{N}$.

In terms of the [[Borel Sigma Field#Borel Measure]], if we refer to the Lebesgue measure as the complete measure $\mathcal{B}^{*}$, then $\mathcal{B} \subsetneqq \mathcal{B}^{*}$. That is, there exists Lebesgue sets that are not Borel measurable.
Moreover, we have $|\mathcal{B}| = \aleph_1$ and $|\mathcal{B}^{*}| = 2^{\aleph_1} = \aleph_2$, assuming the generalized continuum hypothesis.
