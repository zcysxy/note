---
{"publish":true,"title":"Stochastic Asymptotic Notation","created":"2024-12-17T15:39:07","modified":"2024-12-17T15:54:21","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Probability]]"],"aliases":null,"type":"note","related":["[[Asymptotic Notation]]"]}
---


# Stochastic Asymptotic Notation

For [[Random Variable]] sequences $R_n$ and $X_n$, we denote
$$
\begin{cases}
X_n = o_{P}(R_n) \quad & \text{if } X_n = Y_n R_n \text{ where } Y_n = o_{P} (0), \\
X_n = O_{P}(R_n) \quad & \text{if } X_n = Y_n R_n \text{ where } Y_n = O_{P}(1),
\end{cases}
$$
where $o_{P}(1)$ represents a sequence that [[Convergence of Random Variables#Convergence in Distribution/ Weak\|weakly converges]] to 0, and $O_{P}(1)$ represents a [[Tight Random Variable\|uniformly tight]] sequence.

## Arithmetic Properties

- $o_{P}(1)+ o_{P}(1) = o_{P}(1)$
- $o_{P}(1)+ O_{P}(1) = O_{P}(1)$
- $o_{P}(1)O_{P}(1) = o_{P}(1)$
- $(1+o_{P}(1))^{-1} = O_{P}(1)$
- $o_{P}(R_n) = R_no_{P}(1)$
- $O_{P}(R_n) = R_nO_{P}(1)$
- $o_{P}(O_{P}(1)) = o_{P}(1)$
- $R(h) = o(\|h\|^{p}), h\to 0 \implies R(X_n) =o_{P}(\|X_n\|^{p}), X_n\overset{ P }{ \to }0$, for any $p$
- $R(h) = O(\|h\|^{p}), h\to 0 \implies R(X_n) =O_{P}(\|X_n\|^{p}), X_n\overset{ P }{ \to }0$, for any $p$

### Proof

We only prove the last two properties.
Define $r(h) = R(h) /\|h\|^{p}$ for $h\ne 0$ and $r(0) = 0$.
For the first property, by the condition, $r$ is continuous at $0$. By [[Convergence of Random Variables#Continuous Mapping Theorem]], $r(X_n)\overset{ P }{ \to }r(0) = 0$. Then,
$$
R(X_n) = r(X_n) \|X_n\|^{p} = o_{P}(\|X_n\|^{p}).
$$

For the second property, we have $r(h) = O(1)$ for $h$ near 0. There exists $M,\delta >0$ such that $|g(h)| \le M$ for $\|h\|\le \delta$. Thus,
$$
P(|g(X_n)|>M) \le P(\|X_n\|>\delta) \to 0,
$$
which implies the uniform tightness of $\{ g(X_n) \}$, and thus $R(X_n) = O_{P}(\|X_n\|^{p})$.
