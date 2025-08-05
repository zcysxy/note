---
{"publish":true,"aliases":["Bernoulli Law of Large Numbers","Weak Law of Large Numbers","Strong Law of Large Numbers","LLN"],"title":"Law of Large Numbers","created":"2021-08-17T21:58:15","modified":"2025-08-04T23:42:28","cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"related":[],"state":"done"}
---


# Law of Large Numbers

Let $\{ X _i \}_{i=1}^{n}$ be iid [[Random Variable]]s with mean $\mu$. Denote $\overline{X} = \sum_{i=1}^{n}X_{i} /n$. Then
$$
\overline{X} \overset{ P }{ \to } \mu,
$$
where $\overset{ P }{ \to }$ means [[Convergence of Random Variables#Convergence in Probability\|convergence in probability]]. This is the ==weak law of large numbers (WLLN)==.

Substituting the [[Convergence of Random Variables#Convergence in Probability]] with the [[Convergence of Random Variables#Almost Sure/ Strong Convergence]] gives the ==strong law of large numbers (SLLN)== under the same condition (finite mean):
$$
\overline{X} \overset{ \text{a.s.} }{ \to } \mu.
$$

## Proof

### WLLN Assuming Finite Variance

- [!] The following proof only works for r.v. with finite variance.
- [~] prerequisite: [[Chebyshev Inequality]].

Suppose $X_{i}$ has finite variance $\sigma^{2}$. For any $\varepsilon > 0$, by [[Chebyshev Inequality]],

$$
\mathbf{P}\left(\left|\bar{X}-\mu\right|>\varepsilon\right) \leqslant \frac{1}{\varepsilon^2} \mathbb{E}|\bar{X}-\mu|^2\\
= \frac{\sigma^{2}}{n\varepsilon^2} \to 0, \quad\text{ as } n \to +\infty.
$$

### WLLN with General Case

- [~] prerequisite: [[Characteristic Function]]

We now remove the condition of finite variance. Since $X_n$ are independent,
$$
\phi _{\overline{X}}(t) = \phi _{X_{1} /n}(t)^{n} = \phi _{X_{1}}(t /n)^{n}.
$$
By the Taylor expansion and the fact that $\phi _{X_{1}}(0) = 1,\phi'_{X_{1}}(0) = i\mu$,
$$
\phi _{\overline{X}}(t) = (1 + i\mu t /n + o(t/n))^{n} \to e^{i \mu t}.
$$
Since $e^{i \mu t}$ is also the CF of the constant $\mu$, by the inverse property and [[Convergence of Random Variables#Convergence of Characteristic Functions]], $\sum_{i}X_i /n \overset{ d }{ \to }\mu$.
And since $\mu$ is a constant, convergence in distribution implies convergence in probability.

> [!rmk] Comparison with [[Central Limit Theorem#Proof]]
>
> Both using the [[Characteristic Function]], the proof of WLLN only uses the first order Taylor expansion, while the proof of [[Central Limit Theorem]] uses the second order expansion. This is because WLLN concerns only about *what* the convergence point is (mean), while CLT characterizes *how* the sequence converges (variance). In this sense, WLLN is less informative than CLT, while requires weaker assumptions.

### SLLN

- [~] prerequisite: [[Borel-Cantelli Lemma]]
- [&] Reference: Etemadi, N. An elementary proof of the strong law of large numbers. Z. Wahrscheinlichkeitstheorie verw Gebiete 55, 119–122 (1981) and [Terance Tao: The strong law of large numbers](https://terrytao.wordpress.com/2008/06/18/the-strong-law-of-large-numbers/).

Note that the almost sure convergence is equivalent to
$$
\begin{aligned}
& \P(\lim_{ n \to \infty } \overline{X}_n = \mu) = 1\\
\iff & \P(\lim_{ n \to \infty } \overline{X}_n \ne \mu) = 0\\
\iff & \P(\limsup_{ n \to \infty } |\overline{X}_n - \mu| > \epsilon  ) = 0, \quad \forall \epsilon > 0\\
\iff & \P(\cap_{m=1}^{\infty} \cup_{n=m}^{\infty} \{ |\overline{X}_n - \mu| > \epsilon \}) = 0, \quad \forall \epsilon > 0,
\end{aligned}
$$
where in the second equivalence, we say the event is true if $\overline{X}_{n}$ does not converge.
This hints us to use the [[Borel-Cantelli Lemma]].

Before invoking the lemma, we make several reductions. First, let $X_{i}^{+} = \max \{ X_{i},0 \}$ and $X_{i}^{-} = -\min \{ X_{i},0 \}$. Then, if $\overline{X}_{n}^{+} \coloneqq \frac{1}{n} \sum_{i=1}^{n} \overset{ \text{a.s.} }{ \to } \mathbb{E} X_{1}^{+}$ and $\overline{X}_{n}^{-} \coloneqq \frac{1}{n} \sum_{i=1}^{n} \overset{ \text{a.s.} }{ \to } \mathbb{E} X_{1}^{-}$, by the property of [[Convergence of Random Variables#Convergence under Transformations]], we have
$$
\overline{X}_{n} = \overline{X}_{n}^{+} - \overline{X}_{n}^{-} \overset{ \text{a.s.} }{ \to } \mathbb{E} X_{1}^{+} - \mathbb{E} X_{1}^{-} = \mathbb{E} X_{1}.
$$
Thus, WLOG, we assume $X_{i} \ge 0$.

Second, instead of considering all $n$, we consider the subsequence $k_{j} = \alpha ^{j}$ for $\alpha >1$. Denote $S_{n}\coloneqq \sum_{i=1}^{n}X_{i}$. We know $S_{n}$ is monotonic. Therefore, for any $n\in \N$, let $j$ such that $k_{j} \le n < k_{j+1}$, we have
$$
\frac{S_n}{n} \le \frac{S_{k_{j+1}}}{n} \le \frac{S_{k_{j+1}}}{k_{j}} = \frac{S_{k_{j+1}}}{k_{j+1}} \cdot \alpha = \alpha \overline{X}_{k_{j+1}}.
$$
Similarly, we have $S_n /n \ge \alpha^{-1} \overline{X}_{k_{j}}$. If $\overline{X}_{k_{j}}$ converges to $\mu$ almost surely, by the arbitrariness of $\alpha$, we get the desired result.
Thus, we focus on the subsequence $\overline{X}_{k_{j}}$.

Third, we focus on a **truncated** sequence of $\overline{X}_{k_{j}}$. Let $Y_{i} \coloneqq X_{i}\1 \{ X_{i} \le i \}$ and $S'_{n}\coloneqq \sum_{i=1}^{n}Y_{i}$. Then, $Y_{i}$ has finite second moment and we can apply [[Chebyshev Inequality]]. Importantly, the *error* due to truncation is negligible because of the property of [[Expectation]]:
$$
\begin{aligned}
\sum_{i=1}^{\infty }\P(Y_{i}\ne X_{i})
& = \sum_{i=1}^{\infty }\P(X_{i} > i) \\
& = \sum_{i=1}^{\infty }\sum_{j=i}^{\infty}\P(j < X_{i} \le j+1) \\
& = \sum_{i=1}^{\infty }i\P(i < X_{i} \le i+1) \\
& \le \sum_{i=1}^{\infty }\int_{i}^{i+1}x\d \P(x) \\
& = \mathbb{E}X_{1} < \infty.
\end{aligned}
$$
Therefore, by the [[Borel-Cantelli Lemma]], $Y_{i}$ only differs from $X_{i}$ finitely many times almost surely.
Thus, we can focus on the truncated sequence $Y_{i}$.

Finally, we apply [[Chebyshev Inequality]] and [[Borel-Cantelli Lemma]] to the truncated subsequence:
$$
\begin{align}
&\sum_{j=1}^{\infty }\P\left( \left|\frac{S_{k_{j}}' - \mathbb{E} S_{k_j}'}{k_{j}} \right| > \epsilon\right) \notag\\
\le & \sum_{j=1}^{\infty } \frac{\Var(S_{k_{j}}')}{k_{j}^{2} \epsilon^{2}} \tag{1}\\
\le & \sum_{j=1}^{\infty } \frac{\sum_{i=1}^{k_{j}}\Var(Y_{i})}{k_{j}^{2} \epsilon^{2}} \tag{2}\\
= & \sum_{i=1}^{k_{1}}\Var(Y_{i}) \cdot \frac{1}{k_{1}^{2}\epsilon^{2}} \frac{1}{1-\alpha^{-2}} + \sum_{i=k_{1}+1}^{k_{2}} \Var(Y_{i}) \cdot \frac{1}{k_{2}^{2}\epsilon^{2}} \frac{1}{1-\alpha^{-2}} + \cdots \tag{3}\\
\le & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \left(\sum_{i=1}^{k_{1}}\frac{\Var(Y_{i})}{i^{2}} + \sum_{i=k_{1}+1}^{k_{2}} \frac{\Var(Y_{i})}{i^{2}} + \cdots\right) \notag\\
= & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty}\frac{\Var(Y_{i})}{i^{2}} \notag\\
\le & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty}\frac{\mathbb{E} Y^{2}_{i}}{i^{2}} \tag{4}\\
= & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty}i^{-2}\int _{x=0}^{i} x^{2}\,\d \P(x) \tag{5}\\
= & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty}i^{-2}\sum_{j=0}^{i-1}\int _{j}^{j+1} x^{2}\,\d \P(x)\notag\\
= & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty}\left( \sum_{j=i}^{\infty} j^{-2}\right) \int _{i-1}^{i} x^{2}\,\d \P(x) \notag\\
\le & \frac{1}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty} \frac{2}{i} \int _{i-1}^{i} x^{2}\,\d \P(x) \tag{6}\\
\le & \frac{2}{\epsilon^{2}(1-\alpha ^{-2})} \sum_{i=1}^{\infty}  \int _{i-1}^{i} x\,\d \P(x) \notag\\
= & \frac{2}{\epsilon^{2}(1-\alpha ^{-2})} \mathbb{E}X_{1} < \infty.\notag
\end{align}
$$
See [[Law of Large Numbers#Details]] for the derivation of $(1)$-$(7)$. Thus, by the [[Borel-Cantelli Lemma]],
$$
\P\left( \limsup_{ j \to \infty } \left| \frac{S_{k_{j}}' - \mathbb{E} S_{k_j}'}{k_{j}} \right| >\epsilon  \right) =
\P\left( \bigcap _{i=1}^{\infty} \bigcup_{j=i}^{\infty} \left\{ \left| \frac{S_{l_j}' - \mathbb{E} S_{k_j}'}{k_{j}} \right| > \epsilon \right\}\right) = 0, \quad \forall \epsilon > 0.
$$
Finally, we claim that
$$
\lim_{ j \to \infty } \frac{\mathbb{E} S_{k_{j}}'}{k_{j}} = \mathbb{E}X_{1} = \mu.\tag{7}
$$
Thus, $S_{k_j}' /k_{j}\overset{ \text{a.s.} }{ \to }\mu$.
Unrolling the reductions we made gives the desired result:
$$
\overline{X}_n \overset{ \text{a.s.} }{ \to } \mu.
$$

### Details

1. By [[Chebyshev Inequality]].
2. By the independence of $Y_{i}$, inherited from $X_{i}$.
3. By the definition of $k_{j}$ and geometric series.
4. Central moment is smaller than the raw moment.
5. By the truncation of $Y_{i}$.
6. Note that $\sum_{j=1}^{\infty}j^{-2} = \pi^{2} /6 \le 2$ and for $i\ge 2$:
    $$
    \sum_{j=i}^{\infty} \frac{1}{j^{2}} \le \sum_{j=i}^{\infty} \frac{1}{j(j-1)} = \sum_{j=i}^{\infty} \frac{1}{j-1} - \frac{1}{j} = \frac{1}{i-1} \le \frac{2}{i}.
    $$
7. First we have
    $$
    \mathbb{E}X_{1} =\lim_{ i \to \infty } \int _{0}^{i} x\,\d \P(x) = \lim_{ i \to \infty } \mathbb{E}Y_{i}.
    $$
    Thus, for any $\epsilon>0$, there exists $i_{0}\in\N$ such that for all $i\ge i_{0}$, $\mathbb{E}X_{1} - \mathbb{E}Y_{i} \le \epsilon$. Then, for all $i \ge i_{0}$, we have
    $$
    \mathbb{E}X_{1} - \frac{\mathbb{E} S_{i}'}{i} \le \mathbb{E}X_{1} - \frac{\sum_{j=i_{0}}^{i}\mathbb{E}_{Y_{j}}}{i}  \le \frac{i_{0}}{i}\mu + \frac{i-i_{0}}{i}\epsilon,
    $$
    which gives
    $$
    \lim_{ i \to \infty }  \mathbb{E}X_{1} - \frac{\mathbb{E}S_{i}'}{i} \le \epsilon.
    $$
    By the arbitrariness of $\epsilon$, we conclude $\lim_{ i \to \infty } \mathbb{E} S_{i}' /i = \mu$.
