---
publish: true
title: Caratheodory's Extension
created: 2024-10-17T14:33:24
modified: 2024-10-17T14:50:33
published: 2026-06-26T17:58:51.572Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
aliases:
type: note
---

# Caratheodory's Extension

> [!qn] Motivation
> To define a (probability) measure on a general [[Sigma Field]] $\mathcal{F}$, we start with a smaller collection, $\mathcal{F}_{0} \subset \mathcal{F}$, of subsets of Ω, which is a ﬁeld (closed under finite union), and on which the desired probabilities are easy to deﬁne. Furthermore, we make sure that $\mathcal{F}_{0}$ is rich enough, so that the $σ$-ﬁeld it generates is the same as the desired $σ$-ﬁeld $\mathcal{F}$. We then extend the deﬁnition of the probability measure from $\mathcal{F}_{0}$ to the $\mathcal{F}$.

> [!thm] Cathéodory's Extension Theorem
>
> Let $\mathcal{F}_{0}$ be a field of subsets of $\Omega$ and let $\mathcal{F} = \sigma(\mathcal{F}_{0})$ be the $\sigma$-field it generates. Suppose $\P_{0}$ is a mapping from $\mathcal{F}_{0}$ to $[0, 1]$ such that $\P_{0}(\Omega) = 1$ and is **countably additive**. Then, $\P_0$ can be extended uniquely to a probability measure $\P$ on $\mathcal{F}$. That is, there exists a unique probability measure $\P$ on $(\Omega,\mathcal{F})$ such that $\P(A) = \P_{0}(A)$ for all $A \in \mathcal{F}_{0}$.

> [!rmk] Remarks
>
> - The main hurdle in applying the extension theorem is the verification of the **countable additivity** property of $\P_0$ on $\mathcal{F}_{0}$.
> - Alternatively, by [[Measure#Continuity of Probability Measures]], it suffices to verify that if $\left\{ A_i \right\}$ is a decreasing sequence of sets in $\mathcal{F}_{0}$ and if $∩ _{i=1}^{ ∞}A_i$ is empty, then $\lim_{n→∞}\P_0(A_i) = 0$.
