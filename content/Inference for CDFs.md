---
{"publish":true,"aliases":["Glivenko–Cantelli Theorem","Dvoretzky–Kiefer–Wolfowitz Theorem","DKW","CDF Inference","Donsker"],"title":"Inference for CDFs","created":"2025-07-23T02:31:36","modified":"2025-07-23T22:39:01","tags":["pub-stat"],"cssclasses":"","state":"[[%watch]]","sup":["[[Statistics]]","[[Cumulative Distribution Function]]"],"type":"note"}
---


# Inference for CDFs

[[Cumulative Distribution Function\|CDF]] estimation/inference is one of the most fundamental tasks in statistics, as the CDF completely describes the distribution of a random variable. Not so surprisingly, the empirical CDF serves as a natural and effective estimator.
Suppose we have iid data $X_{i} \sim P$. The empirical CDF is defined as the step function:
$$
\hat{F}_{n}(t) = \frac{1}{n} \sum_{i=1}^{n} \1_{\{ t \ge X_{i} \}}.
$$
One can verify that $\hat{F}_{n}$ is a valid CDF as it's monotonic, right continuous, and has limits $0$ and $1$.



For any distribution $P$ with CDF $F$, the [[Inference for CDFs#Glivenko–Cantelli]] theorem states the asymptotic almost sure convergence of $\|\hat{F}_{n}-F\|_{\infty }$, [[Inference for CDFs#Donsker]]'s theorem states its asymptotic convergence in distribution, and [[Inference for CDFs#Dvoretzky–Kiefer–Wolfowitz]] theorem gives the non-asymptotic convergence rate.

## Glivenko–Cantelli

$\hat{F}_{n}$ converges uniformly to the true CDF $F$ almost surely:
$$
\sup_{t\in \R} |\hat{F}_{n}(t) - F(t)| \overset{ \text{a.s.} }{ \to } 0.
$$

### Proof

We use the weak [[Law of Large Numbers]] to prove [[Convergence of Random Variables#Convergence in Probability]]. The [[Convergence of Random Variables#Almost Sure/ Strong Convergence]] can be proved similarly using the strong law of large numbers.

We use a grid approach. Fix $m$ for the grid granularity $1 /m$. Construct grid points $\{ t_k \}_{k=1}^{m}$ such that $F(t_k) = \frac{k}{m+1}$. By [[Law of Large Numbers\|LLN]], $\hat{F}(t)\overset{ P }{ \to } F(t)$ for all $t$. Therefore, for any $\epsilon,\delta >0$, there exists $N_{k} \in \mathbb{N}_{+}$ such that for all $n > N_{k}$, $P(|\hat{F}(t_{k}) - F(t_{k})| \ge \epsilon) \le \delta /m$. Let $N = \max_{k} N_{k}$. Then by the union bound,
$$
P(\max_{k}|\hat{F}(t _{k}) - F(t _{k})| \ge \epsilon) \le \delta.
$$
The above bound also applies when we let $t_{0}=-\infty$ and $t _{m+1}=+\infty$ as $\hat{F}(-\infty)=F(-\infty)=0$ and $\hat{F}(+\infty)=F(+\infty)=1$.

For any $t\in \R$, let $k$ be such that $t_k \le t \le t_{k+1}$. Then, by the monotonicity,
$$
\begin{aligned}
|\hat{F}(t)-F(t)| \le& \max \{ |\hat{F}(t _{k-1}) - F(t)|, |\hat{F}(t _{k})-F(t)| \}\\
=& \max \{ |\hat{F}(t _{k-1}) - F(t _{k-1}) + F(t _{k-1}) - F(t)|, |\hat{F}(t _{k})- F(t _{k})+ F(t _{k})-F(t)| \}\\
\le& \max_{k} \{ |\hat{F}(t _{k}) - F(t _{k})| \} + \max \{ F(t)-F(t _{k-1}), F(t _{k})-F(t) \}\\
\le& \frac{1}{m+1} + \epsilon, \quad \text{w.p.}\ge 1-\delta.
\end{aligned}
$$
Letting $m\to \infty$ gives the result.



## Dvoretzky–Kiefer–Wolfowitz

$\hat{F}_{n}$ converges uniformly to the true CDF $F$ with a subGaussian tail bound:
$$
P\left( \sup_{t\in \R} |\hat{F}_{n}(t) - F(t)| \ge \epsilon \right) \le 2\exp (-2n\epsilon^{2}).
$$

### Proof

Let $M_{n}\coloneqq \sup_{t}|\hat{F}_{n}(t)-F(t)|$. One important observation is that "stretching the x-axis" does not change $M_{n}$. Therefore, we can arbitrarily stretch $F$ along the x-axis to make it arbitrarily close to $F_{\mathrm{Unif}[0,1]}$.

Formally, we notice that
$$\hat{F}_{n}(t) = \frac{1}{n}\sum_{i=1}^{n}\mathbb{1}_{\{t \ge X_{i}\}}$$
is the average of $n$ iid Bernoulli r.v.s with parameter $\mathbb{E}[\mathbb{1}_{\{ t\ge X_{i} \}}]=P(X_{i}\le t) = F(t)$. Let
$$
\hat{G}_n(F(t)) = \frac{1}{n} \sum_{i=1}^{n} \mathbb{1}_{\{ F(t) \ge U_{i} \}},
$$
where $U_{i} \overset{ \text{iid} }{ \sim } \operatorname{Unif}[0,1]$. We can see that $\mathbb{1}\{ F(t)\ge U_{i} \}$ is also a Bernoulli r.v. with parameter $F(t)$. Therefore,
$$
\hat{F}_{n}(t) \overset{ d }{ = } \hat{G}_{n}(F(t)).
$$
This gives
$$
\sup_{t\in\R}|\hat{F}_{n}(t) - F(t)| \overset{ d }{ = } \sup_{t\in[0,1]}|\hat{G}_{n}(F(t)) - F(t)| = \sup_{s\in \operatorname{range}(F)} |\hat{G}_{n}(s) - s| \le \sup_{s\in[0,1]} |\hat{G}_{n}(s) - s|,
$$
where the equality holds iff $\operatorname{range}(F)=[0,1]$ iff $F$ is continuous.

Note that $\hat{G}_n$ is just the empirical CDF of the uniform distribution. Therefore, $M_n$ has the same distribution for any continuous $F$. We call such a distribution-invariant statistic a ==pivotal statistic==.

Apply some concentration analysis to the supreme of uniform empirical CDF gives the desired result.



## Donsker

If further $F$ is continuous, then
$$
\sqrt{ n } \sup_{t\in\R} |\hat{F}_{n}(t) - F(t)| \overset{ d }{\to } \sup_{t\in [0,1]}|B(t)|,
$$
where $B$ is a Brownian bridge on $[0,1]$.

To see the emergence of the Brownian bridge, we can fix a specific $t$, and the [[Central Limit Theorem\|CLT]] gives us
$$
\sqrt{ n } (\hat{F}_{n}(t) - F(t)) \overset{ d }{\to } \mathcal{N}(0, F(t)(1-F(t))).
$$
This is because $\hat{F}_{n}(t)$ is the average of indicator r.v.s.
Then, the stochastic process $\{ \hat{F}_n(t)-F(t) \}_{t\in\R}$ has an asymptotic distribution similar to a Brownian motion $B(t) \sim \mathcal{N}(0,t)$, except that $\hat{F}_n(-\infty)- F(-\infty) = \hat{F}_n(+\infty)-F(+\infty) = 0 \sim \mathcal{N}(0,0)$.
Therefore, the stochastic process actually converges to a Brownian bridge: $B(t)\given B(1)=0$.
