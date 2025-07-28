---
{"publish":true,"title":"Permutation Test","created":"2025-07-27T19:01:13","modified":"2025-07-27T19:27:40","cssclasses":"","state":"done","sup":["[[Hypothesis Testing]]"],"aliases":null,"type":"note"}
---


# Permutation Test

The permutation test is a non-parametric [[Hypothesis Testing\|statistical test]] used to determine whether two samples come from the same distribution.
Given two samples $X_{i} \overset{ \text{iid} }{ \sim }P_{1}, i=1,\dots,n$ and $Y_{j} \overset{ \text{iid} }{ \sim }P_{2}, j=1,\dots,m$, the null hypothesis is $H_0: P_{1} = P_{2}$, and suppose we have a test statistic $T: \mathcal{X}^{n+m}\to \R$ that measures the agreement of the first $n$ with the last $m$ elements.

- [@] An example $T$ is $T(x_{1},\dots,x_{n},y_{1},\dots ,y_{m}) = |\frac{1}{n}\sum_{i=1}^{n}x_{i} - \frac{1}{m} \sum_{j=1}^{m}y_{j}|$.

The ==permutation test== is conducted as follows:

> [!alg] Permutation test
>
> 1. Input: $Z = (x_{1},\dots,x_{n},y_{1},\dots ,y_{m})\in \mathcal{X}^{n+m}$, $T^{*} = T(Z)$.
> 2. For $k=1,\dots K$:
>     1. Draw a random permutation $\sigma _{k}\in S_{n+m}$; let $(Z_{\sigma})_{i} = Z_{\sigma(i)}$.
>     2. Compute $t_k=T(Z_{\sigma})$.
> 3. Return: $p = \frac{1+ \sum_{k=1}^{K}\1 \{ T^{*}\le t _{k} \}}{1+K}$.

We can see that the test relies on the property that a larger $T$ implies a larger asymmetry between the first $n$ and the last $m$ elements. Thus, if $T^{*}$ is large, we get a small p-value and is prone to reject $H_{0}:P_{1}=P_{2}$.

The permutation is

- [+] Good. It is valid for all $P_{1}$, $P_{2}$, and proper $T$.
- [i] Neutral. It requires choosing a proper $T$.
- [-] Bad. The power of the test is not optimal; and it does not give [[Confidence Interval]]s for the difference of means.

To see the validity, we require that if $X_{i}\overset{ d }{ = }Y_{j}$ for all $1\le i\le n, 1\le j\le m$, then $T(Z)\overset{ d }{ = }T(Z_{\sigma})$, where $\sigma \sim \operatorname{Unif}(S_{m+n})$, $S_{m+n}$ is the set of all permutations of $m+n$ elements.
Then, we know that $p\to P(T^{*}\le T(Z_{\sigma}))$ as $K\to \infty$, and we have $P(T^{*}\le T(Z_{\sigma })) = 1-F_{T}(T^{*}) \sim \operatorname{Unif}[0,1]$, where $F_{T}$ is the CDF of $T^{*} = T(Z)$.
That is, $p$ is super-uniform.
