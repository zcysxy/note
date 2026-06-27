---
publish: true
aliases:
  - Independent
title: Independence
created: 2022-12-05T15:19:32
modified: 2024-11-04T02:50:36
published: 2026-06-26T18:02:57.073Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Independence

## Independent Events

The following definitions of independence are equivalent for two events $A,B$:

- $P(A\cap B) = P(A)P(B)$.
- If $P(B)>0$, $P(A|B) = P(A)$ using [[Conditional Probability]].

For a family (potentially infinite) of events $\{ A _i\}_{i\in \mathcal{I}}$, they are independent if for any finite subset $\{ A_{i_1},\ldots, A_{i_n}\}$, the events are independent.

## Independent Sigma Fields

Two [[Sigma Field]]s $\mathcal{F}_1,\mathcal{F}_2$ on the same probability space are independent if any two events $A\in \mathcal{F}_1, B\in \mathcal{F}_2$ are independent.

For a family of [[Sigma Field]]s $\{ \mathcal{F}_{i} \}_{i\in \mathcal{I}}$, they are independent if we pick one arbitrary event $A_i$ from each $\mathcal{F}_i$, the events $\{ A_i \}_{i\in \mathcal{I}}$ are independent.

> [!thm]
> If $\mathcal{F}_i = \sigma(\mathcal{G}_i)$ and $\mathcal{G}_i$ is closed under intersection, then $\mathcal{F}_i$ are independent if and only if $\mathcal{G}_i$ are independent, i.e., for arbitrary events $A_i\in \mathcal{G}_i$, the events $\{ A_i \}$ are independent.

## Independent Random Variables

- Intuitively, two random variables are independent if any partial information on the realized value of one random variable does not change the distribution of the other.

For two [[Random Variable]]s $X,Y$, the following statements are equivalent

- $X,Y$ are independent
- $P(X\in A, Y \in B) = P(X\in A)\cdot P(Y\in B)$ for any borel sets $A,B$
  - That is, events $\{ X\in A \}$ and $\{ Y\in B \}$ are [[#Independent Events]]
- $P(X\in A | Y\in B) = P(X\in A)$ for any possible event $A,B$
  - Equivalently, $f_{X\given Y}(a\given b) = f_{X}(a)$ if they are jointly continuous[^1]
  - $p_{X\given Y}(a\given b) = p_{X}(a)$ if they are jointly discrete
- $F(a,b) = F_{X}(a)\cdot F_{Y}(b)$
  - This is a special case of the second statement
- $f(a,b) = f_{X}(a)\cdot f_{Y}(b)$ if they are jointly continuous[^1]
- $p(a,b) = p_{X}(a)\cdot p_{Y}(b)$ if they are jointly discrete

[^1]: $f(a,b) = \frac{ \partial ^{2} }{ \partial a\partial b }F(a,b)$.

For a collection of r.v.s $\{ X_i \}_{i\in \mathcal{I}}$, where $\mathcal{I}$ is a potentially infinite index set, they are independent if any finite subset of them are independent.

### Independence Preserved by Functions

Let $X$, $Y$ be independent r.v.s. For any functions $f,g$, $f(X)$ and $g(Y)$ are also independent.

## Joint Probability Space

It is intuitive to discuss the independence of [[Random Variable]]s on different [[Probability Space]]s. On the other hand, it is more convenient to discuss the [[Joint Distribution]] of $X$ and $Y$ if they have the same probability space; and then we can formally discuss their conditional probability, independence, etc.
Here we introduce a canonical way to construct independent random variables on the same probability space with $X\in (\Omega_{1},\mathcal{F}_1,P_{1})$ and $Y\in (\Omega_{2},\mathcal{F}_2,P_{2})$.
We first construct the probability space:

$$
\begin{cases}
\Omega = \Omega_{1} \times\Omega_{2},\\ 
\mathcal{F} = \sigma(\mathcal{F}_{1}\times \mathcal{F}_{2}), \\
P = P_{1} \otimes P_{2}: A_{1} \times A_{2} \mapsto P(A_{1}\times A_{2}) = P(A_{1})P(A_{2}).
\end{cases}
$$

Then we define the new random variables $\overline{X}(\omega_1,\omega_2) = X(\omega_1)$ and $\overline{Y}(\omega_1,\omega_2) = Y(\omega_2)$ on $\Omega$.
One can easily verify that $\overline{X}$ and $\overline{Y}$ are $(\mathcal{F},\mathcal{B})$-measurable, and $F_{\overline{X}}=F_{X}$, $F_{\overline{Y}}=F_{Y}$. Further, $\overline{X} \perp \overline{Y}$.

> [!rmk]
>
> - $\mathcal{F} = \sigma\left( \{ A_{1}\times\Omega_{2} : A_{1}\in \mathcal{F}_{1} \}\cup \{ \Omega_{1}\times A_{2}:A_{2}\in \mathcal{F}_{2} \} \right)$
> - $P$ satisfying the condition is unique
