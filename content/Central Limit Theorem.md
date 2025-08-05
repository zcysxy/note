---
{"publish":true,"aliases":["CLT"],"title":"Central Limit Theorem","created":"2022-11-04T12:18:06","modified":"2025-08-05T00:55:20","cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# Central Limit Theorem

Let $\{ X _i \}_{i=1}^{n}$ be a set of i.i.d. [[Random Variable]]s with [[Expectation\|Mean]] $\mu$ and [[Variance]] $\sigma^{2} < +\infty$. Denote $\overline{X} = \sum^{n}_{i=1}X _i /n$. Then
$$
\frac{\overline{X} - \mu}{\sigma / \sqrt{ n }} \overset{d}{\longrightarrow} Z \sim \mathcal{N}(0,1),
$$
where $\overset{ d }{ \to }$ means [[Convergence of Random Variables#Convergence in Probability\|convergence in probability]].

- [~] Also holds for multi-variate distributions: $\sqrt{ n }(\overline{X}-\mu)\overset{ d }{ \to }\mathcal{N}(0,\Sigma)$.

> [!rmk] CLT and LLN
> 
> Central limit theorem (CLT) implies the [[Law of Large Numbers\|Weak Law of Large Numbers]]. To see this, we can rewrite the CLT as $\overline{X}\overset{ d }{ \to } \mathcal{N}(\mu, \sigma^{2} /n) \to \mu$. That is, $\overline{X}$ converges in distribution to a point mass at $\mu$, which is equivalent to convergence in probability to $\mu$.
> 
> A non-asymptotic version of CLT, the [[Central Limit Theorem#Sup-Norm Approximation Error Berry-Essèen Theorem\|Berry-Essèen Theorem]], together with an additional bounded third moment assumption, implies the [[Law of Large Numbers\|Strong Law of Large Numbers]].
> 
> However, neither weak or strong LLN requires assumptions beyond finite mean. Therefore, LLN holds under weaker conditions, but offers less information about the asymptotic dynamics of the sample mean. See also [[Law of Large Numbers#^519975]].

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
Suppose $\mathbb{E}|X_1|^{3}<+\infty$. Let $Z_n = \sqrt{ n }(\overline{X}-\mu) /\sigma$. Then
$$
\sup_{t}\left| P(Z_n\le t)-\Phi(t) \right| \le \frac{33}{4}\frac{\mathbb{E}|X_1-\mu|^{3}}{\sqrt{n}\sigma ^{3}}.
$$

We also have a *non-uniform* Berry-Essèen bound, which is tighter for larger $t$:[^1]
$$
\left| P(Z_n\le t)-\Phi(t) \right| \le c\frac{\mathbb{E}|X_1-\mu|^{3}}{\sqrt{n}\sigma ^{3}(1+|t|^{3})},
$$
where $c$ is some constant[^2].
Under this additional bounded third moment assumption, this bound implies the [[Law of Large Numbers\|Strong Law of Large Numbers]]. To see this, we have
$$
P\left( |Z_{n}| > \sqrt{ n }\epsilon /\sigma\right)  \le 2 \Phi(- \sqrt{ n }\epsilon /\sigma) + 2c \frac{\mathbb{E}|X_{1}-\mu|^{3}}{\sqrt{ n } \sigma ^{3} (1 + n ^{3 /2}\epsilon ^{3} /\sigma ^{3})},
$$
which implies
$$
\sum_{n=1}^{\infty} P(|\overline{X}_{n}-\mu| > \epsilon) \lesssim \sum_{n=1}^{\infty} \Phi(-\sqrt{ n }\epsilon /\sigma) + n^{-2}\epsilon ^{-3} \lesssim \sum_{n=1}^{\infty} \frac{e^{-n\epsilon^{2} /2\sigma^{2}}}{\sqrt{ n }\epsilon /\sigma} + n^{-2}\epsilon ^{-3} < \infty,
$$
where we use [[Concentration Inequality#Mill's Ratio]]. Thus, by the [[Borel-Cantelli Lemma]], we have $P(\limsup_{ n \to \infty }|\overline{X}_{n}-\mu| > \epsilon)=0$ and thus $\overline{X}_{n} \overset{ \text{a.s.} }{ \to } \mu$.

[^1]: Michel, R. On the constant in the nonuniform version of the Berry-Esséen theorem. _Z. Wahrscheinlichkeitstheorie verw Gebiete_ **55**, 109–117 (1981).
[^2]: $c \le 33/4 + 8(1+e)$
