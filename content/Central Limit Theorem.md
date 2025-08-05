---
{"publish":true,"aliases":["CLT"],"title":"Central Limit Theorem","created":"2022-11-04T12:18:06","modified":"2025-08-04T21:03:55","cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# Central Limit Theorem

Let $\{ X _i \}_{i=1}^{n}$ be a set of i.i.d. [[Random Variable]]s with [[Expectation\|Mean]] $\mu$ and [[Variance]] $\sigma^{2} < +\infty$. Denote $\overline{X} = \sum^{n}_{i=1}X _i /n$. Then
$$
\frac{\overline{X} - \mu}{\sigma / \sqrt{ n }} \overset{d}{\longrightarrow} Z \sim \mathcal{N}(0,1),
$$
where $\overset{ d }{ \to }$ means [[Probability Review Draft#Convergence in Distribution/ Weak\|convergence in distribution]].

- [~] Also holds for multi-variate distributions: $\sqrt{ n }(\overline{X}-\mu)\overset{ d }{ \to }\mathcal{N}(0,\Sigma)$.

Central limit theorem (CLT) implies [[Law of Large Numbers\|Weak Law of Large Numbers]]. To see this, we can rewrite the CLT as $\overline{X}\overset{ d }{ \to } \mathcal{N}(\mu, \sigma^{2} /n) \to \mu$. That is, $\overline{X}$ converges in distribution to a point mass at $\mu$, which is equivalent to convergence in probability to $\mu$. However, CLT does not imply [[Law of Large Numbers\|Strong Law of Large Numbers]]. Additionally, neither weak or strong LLN requires finite variance.

## Proof

If $X _i$ has [[Moment Generating Function\|MGF]], we can use MGF to prove the theorem. To be more general, we use [[Characteristic Function]]. WLOG, we can assume $\mu = 0, \sigma = 1$. Let $\phi(t)$ be the characteristic function of $X _i$. Then we have
$$
\phi(0) = 1, \quad \phi'(0) = i\mathbb{E}[X _i] = 0, \quad \phi''(0) = - \mathbb{E}[X _i^{2}] = -1.
$$

Therefore,
$$
\lim_{ t \to 0 } \frac{\phi(t) - \left( 1 - \frac{1}{2}t^{2} \right)}{t^{2}} = \lim_{ t \to \infty } \frac{1 - \frac{1}{2}t^{2} + o(t^{2}) - \left( 1 - \frac{1}{2}t^{2} \right)}{t^{2}} = 0.
$$

And the characteristic function of $\sqrt{ n }\overline{X}$ is
$$
\phi _{\overline{X}}(t) = \mathbb{E}[e^{it \sqrt{ n }\overline{X}}] = \prod_{i=1}^{n} \mathbb{E}[e^{it/\sqrt{ n } X _i}] = \phi\left( \frac{t}{\sqrt{ n }} \right)^{n}.
$$

Then we have
$$
\lim_{ n \to \infty } \left| \phi\left( \frac{t}{\sqrt{ n }} \right)^{n} - \left( 1 - \frac{t^{2}}{2n} \right)^{n} \right|  \le \lim_{ t \to \infty } n\left| \phi\left( \frac{t}{\sqrt{ n }} \right) - \left( 1 - \frac{t^{2}}{2n} \right) \right| = \lim_{ n \to \infty } t^{2} \cdot 0 = 0.
$$

Therefore,
$$
\lim_{ n \to \infty } \phi _{\overline{X}}(t) = \lim_{ n \to \infty } \left( 1 - \frac{t^{2}}{2n} \right)^{n} = e^{-\frac{1}{2}t^{2}},
$$

which is the CF of standard [[Normal Distribution]]. By the inverse property and [[Convergence of Random Variables#Convergence of Characteristic Functions]],
$$
\sqrt{ n }\overline{X} \overset{d}{\longrightarrow} Z \sim \mathcal{N}(0,1).
$$

## Sup-Norm Approximation Error: Berry-Essèen Theorem

The Berry-Essèen theorem gives a non-asymptotic bound on the difference between the CDF of the sample mean and standard normal, capturing the convergence rate in the CLT.
Suppose $\mathbb{E}|X_1|^{3}<+\infty$. Then
$$
\sup_{t}\left| P(Z_n\le t)-\Phi(t) \right| \le \frac{33}{4}\frac{\mathbb{E}|X_1-\mu|^{3}}{\sqrt{n}\sigma ^{3}}.
$$

Under this additional bounded third moment assumption, the Berry-Essèen theorem also implies the [[Law of Large Numbers\|Strong Law of Large Numbers]]
