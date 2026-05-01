---
publish: true
title: Stochastic Asymptotic Notation
created: 2024-12-17T15:39:07
modified: 2024-12-17T15:54:21
published: 2026-01-06T20:10:18.000-05:00
tags:
  - pub-stat
state: done
sup:
  - "[[Probability]]"
aliases:
type: note
related:
  - "[[Asymptotic Notation]]"
---

# Stochastic Asymptotic Notation

For [[Random Variable]] sequences $R\_n$ and $X\_n$, we denote
$$
\begin{cases}
X\_n = o\_{P}(R\_n) \quad & \text{if } X\_n = Y\_n R\_n \text{ where } Y\_n = o\_{P} (0), \\
X\_n = O\_{P}(R\_n) \quad & \text{if } X\_n = Y\_n R\_n \text{ where } Y\_n = O\_{P}(1),
\end{cases}
$$
where $o\_{P}(1)$ represents a sequence that [[Convergence of Random Variables#Convergence in Distribution/ Weak|weakly converges]] to 0, and $O\_{P}(1)$ represents a [[Tight Random Variable|uniformly tight]] sequence.

## Arithmetic Properties

- $o\_{P}(1)+ o\_{P}(1) = o\_{P}(1)$
- $o\_{P}(1)+ O\_{P}(1) = O\_{P}(1)$
- $o\_{P}(1)O\_{P}(1) = o\_{P}(1)$
- $(1+o\_{P}(1))^{-1} = O\_{P}(1)$
- $o\_{P}(R\_n) = R\_no\_{P}(1)$
- $O\_{P}(R\_n) = R\_nO\_{P}(1)$
- $o\_{P}(O\_{P}(1)) = o\_{P}(1)$
- $R(h) = o(|h|^{p}), h\to 0 \implies R(X\_n) =o\_{P}(|X\_n|^{p}), X\_n\overset{ P }{ \to }0$, for any $p$
- $R(h) = O(|h|^{p}), h\to 0 \implies R(X\_n) =O\_{P}(|X\_n|^{p}), X\_n\overset{ P }{ \to }0$, for any $p$

### Proof

We only prove the last two properties.
Define $r(h) = R(h) /|h|^{p}$ for $h\ne 0$ and $r(0) = 0$.
For the first property, by the condition, $r$ is continuous at $0$. By [[Convergence of Random Variables#Continuous Mapping Theorem]], $r(X\_n)\overset{ P }{ \to }r(0) = 0$. Then,
$$
R(X\_n) = r(X\_n) |X\_n|^{p} = o\_{P}(|X\_n|^{p}).
$$

For the second property, we have $r(h) = O(1)$ for $h$ near 0. There exists $M,\delta >0$ such that $|g(h)| \le M$ for $|h|\le \delta$. Thus,
$$
P(|g(X\_n)|>M) \le P(|X\_n|>\delta) \to 0,
$$
which implies the uniform tightness of ${ g(X\_n) }$, and thus $R(X\_n) = O\_{P}(|X\_n|^{p})$.
