---
{"publish":true,"title":"Hardness of Simple Hypothesis Test Through Total Variation","created":"2025-05-27T23:43:04","modified":"2025-08-18T18:50:00","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Hypothesis Testing]]"],"aliases":null,"type":"note","related":["[[Total Variation Distance]]"]}
---


# Hardness of Simple Hypothesis Test Through Total Variation

The [[Total Variation Distance\|TV]] distance encodes the hardness of simple [[Hypothesis Testing\|HT]].
Intuitively, a simple HT tries to distinguish between two distributions $P_{\theta_{1}}$ and $P_{\theta_{0}}$ that possibly generate the sample data. And the TV distance measures their distinguishability.

Formally, consider an unbiased [[Bayes Optimal Test\|Bayes risk]]:
$$
R_{B}(A,\mathrm{Unif}) = \frac{1}{2} \left(\int A(x)\d P_{0}(x) + \int (1-A(x))\d P_{1}(x)\right),
$$
where we consider a **randomized test** $A: \mathcal{X} \to [0,1]$ such that $A(X)$ is the probability of rejecting null. Note that this risk recovers the deterministic test when $A(x) \in \{0,1\}$.
Denote $S_{P_{0},P_{1}}(A) = 2R_{B}(A,\mathrm{Unif})$.
Then, we have

> [!thm]
> $$
> \inf_{A: \mathcal{X}\to \{ 0,1 \}} S_{P_{0},P_{1}}(A) = 1 - \TV(P_{0},P_{1}).
> $$

> [!pf]- Proof
>
> We know the [[Bayes Optimal Test]] is $A^{*}(x) = \mathbb{1} \{ p_{1}(x) > p_{0}(x) \}$. Obviously, this is also optimal for random tests.
> This gives the minimum Bayes risk
> $$
> \begin{aligned}
> 2R_{B}(A^{*},\mathrm{Unif}) =&\int A^{*}(x)\d P_{0}(x) + \int (1-A^{*}(x))\d P_{1}(x)\\
> =& 1 -\int A^{*}(x) (p_{1}(x)-p_{0}(x))\d x\\
> =& 1 -\int _{p_{1} > p_{0}} (p_{1}(x)-p_{0}(x))\d x\\
> =& 1 - \TV(P_{0},P_{1}).
> \end{aligned}
> $$

## Example

Let's verify [[Bayes Optimal Test]] achieves this lower bound.

Consider the following discrete distribution:
$$
P_{0}(X=k) = \begin{cases}
0.1, & k=0; \\
0.6, & k=1; \\
0.3, & k=2;
\end{cases}\quad P_{1}(X=k) = \begin{cases}
0.3, & k=0; \\
0.6, & k=1; \\
0.1, & k=2.
\end{cases}
$$
^ex

Note that $B^{\mathrm{opt}} \coloneqq \{ P_{1} >P_{0} \} = \{ 0 \}$. Thus, a Bayes optimal test is
$$
A^*(x) = \begin{cases}
1, & x \in\{0\};\\
0, & x \in \{ 1,2 \},
\end{cases}
$$
whose risk is
$$
S_{P_{0},P_{1}}(A^{*}) = P_{0}(A^*(X)=1) + P_{1}(A^*(X)=0) = 0.1 + (0.6 + 0.1) = 0.8.
$$
OTOH, we have
$$
\operatorname{TV}(P_{0},P_{1}) = P_{1}(X=0) - P_{0}(X=0) = 0.2.
$$
Thus, $S_{P_{0},P_{1}}(A^*) = 1-\operatorname{TV}(P_{0},P_{1})$.
