---
publish: true
title: Hardness of Simple Hypothesis Test Through Total Variation
created: 2025-05-27T23:43:04
modified: 2025-08-18T18:50:00
published: 2026-01-06T20:10:18.093-05:00
tags:
  - pub-stat
state: done
sup:
  - "[[Hypothesis Testing]]"
aliases:
type: note
related:
  - "[[Total Variation Distance]]"
---

# Hardness of Simple Hypothesis Test Through Total Variation

The [[Total Variation Distance|TV]] distance encodes the hardness of simple [[Hypothesis Testing|HT]].
Intuitively, a simple HT tries to distinguish between two distributions $P\_{\theta\_{1}}$ and $P\_{\theta\_{0}}$ that possibly generate the sample data. And the TV distance measures their distinguishability.

Formally, consider an unbiased [[Bayes Optimal Test|Bayes risk]]:
$$
R\_{B}(A,\mathrm{Unif}) = \frac{1}{2} \left(\int A(x)\d P\_{0}(x) + \int (1-A(x))\d P\_{1}(x)\right),
$$
where we consider a **randomized test** $A: \mathcal{X} \to \[0,1]$ such that $A(X)$ is the probability of rejecting null. Note that this risk recovers the deterministic test when $A(x) \in {0,1}$.
Denote $S\_{P\_{0},P\_{1}}(A) = 2R\_{B}(A,\mathrm{Unif})$.
Then, we have

> [!thm]
> $$
> \inf\_{A: \mathcal{X}\to { 0,1 }} S\_{P\_{0},P\_{1}}(A) = 1 - \TV(P\_{0},P\_{1}).
> $$

> [!pf]- Proof
>
> We know the [[Bayes Optimal Test]] is $A^{_}(x) = \mathbb{1} { p\_{1}(x) > p\_{0}(x) }$. Obviously, this is also optimal for random tests.
> This gives the minimum Bayes risk
> $$
> \begin{aligned}
> 2R\_{B}(A^{_},\mathrm{Unif}) =&\int A^{_}(x)\d P\_{0}(x) + \int (1-A^{_}(x))\d P\_{1}(x)\\
> \=& 1 -\int A^{\*}(x) (p\_{1}(x)-p\_{0}(x))\d x\\
> \=& 1 -\int _{p_{1} > p\_{0}} (p\_{1}(x)-p\_{0}(x))\d x\\
> \=& 1 - \TV(P\_{0},P\_{1}).
> \end{aligned}
> $$

## Example

Let's verify [[Bayes Optimal Test]] achieves this lower bound.

Consider the following discrete distribution:
$$
P\_{0}(X=k) = \begin{cases}
0.1, & k=0; \\
0.6, & k=1; \\
0.3, & k=2;
\end{cases}\quad P\_{1}(X=k) = \begin{cases}
0.3, & k=0; \\
0.6, & k=1; \\
0.1, & k=2.
\end{cases}
$$
^ex

Note that $B^{\mathrm{opt}} \coloneqq { P\_{1} >P\_{0} } = { 0 }$. Thus, a Bayes optimal test is
$$
A^_(x) = \begin{cases}
1, & x \in{0};\\
0, & x \in { 1,2 },
\end{cases}
$$
whose risk is
$$
S\_{P\_{0},P\_{1}}(A^{_}) = P\_{0}(A^_(X)=1) + P\_{1}(A^_(X)=0) = 0.1 + (0.6 + 0.1) = 0.8.
$$
OTOH, we have
$$
\operatorname{TV}(P\_{0},P\_{1}) = P\_{1}(X=0) - P\_{0}(X=0) = 0.2.
$$
Thus, $S\_{P\_{0},P\_{1}}(A^\*) = 1-\operatorname{TV}(P\_{0},P\_{1})$.
