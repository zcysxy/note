---
publish: true
title: Sigma Field
created: 2024-09-06T23:15:35
modified: 2024-11-02T22:32:21
published: 2026-06-26T17:36:04.912Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
aliases:
type: note
---

# Sigma Field

> [!impt] Motivation
> We can not define a uniform distribution ([[Borel Sigma Field#Borel Measure]]) on $2^{[0,1]}$.
> Thus, we compromise by assigning probabilities to only a _certain_ collection of subsets of $Ω$.
>
> Actually, it is not possible to construct any probability space on $2^{[0, 1]}$, with the property that $\P( \{ x \} ) = 0$ for every $x ∈ (0, 1]$.

## Definition

A set $\mathcal{F}\in 2^{\Omega}$ is a $\sigma$-field if:

1. $\emptyset \in \mathscr{F}$
2. $\forall A \in \mathcal{F}, A^C \in \mathcal{F}$
3. $\forall$ countable sequence $(A_n)_{n\ge 1}$, $\cup _{n\ge 1} A_n \in \mathscr{F}$.

> [!def] Notation
> A set $A$ that belongs to $\mathcal{F}$ is called an _event_, an _$\mathcal{F}$-measurable set_, or simply a _measurable set_. The pair $(Ω, \mathcal{F})$ is called a _measurable space_.

- A _measurable space_ does not require a measure, in contrast to a _measure space_.

## Examples

1. $2^{\Omega}$
   - This is the conventional $\sigma$-field for discrete [[Probability Space]]
2. $\{ \emptyset, \Omega \}$
3. [[Borel Sigma Field]]

## Properties

- For any collection of $\sigma$-fields $\{ \mathcal{F}_{i} \}_{i\in \mathcal{I}}$, $\cap _{i\in \mathcal{I}} \mathcal{F}_{i}$ is a $\sigma$-field.
  - Thus, for any $C\in 2^{\Omega }$, $\sigma(C)\coloneqq \cap _{C\in \mathcal{F}_i, \mathcal{F}_i \text{ is a }\sigma \text{-field}}\mathcal{F}_i$ is well-defined. It is the smallest $\sigma$-field containing $C$. ^prop-1-1
