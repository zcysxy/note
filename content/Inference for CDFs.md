---
{"publish":true,"aliases":["Glivenko–Cantelli Theorem","Dvorak–Kiefer–Wolfowitz Theorem","DKW","CDF Inference","Donsker"],"title":"Inference for CDFs","created":"2025-07-23T02:31:36","modified":"2025-07-23T16:17:22","cssclasses":"","state":"done","sup":["[[Statistics]]"],"type":"note"}
---


# Inference for CDFs

[[Cumulative Distribution Function\|CDF]] estimation/inference is one of the most fundamental tasks in statistics, as the CDF completely describes the distribution of a random variable. Not so surprisingly, the empirical CDF serves as a natural and effective estimator.
Suppose we have iid data $X_{i} \sim P$. The empirical CDF is defined as the step function:
$$
\hat{F}_{n}(t) = \frac{1}{n} \sum_{i=1}^{n} \1_{\{ t \ge X_{i} \}}.
$$
One can verify that $\hat{F}_{n}$ is a valid CDF as it's monotonic, right continuous, and has limits $0$ and $1$.

```tikz
\usepackage{pgfplots}

\begin{document}

\begin{tikzpicture}

\begin{axis}[
    xlabel={$t$},
    ylabel={$F(t)$},
    xmin=0, xmax=6,
    ymin=0, ymax=1.1,
    axis lines=left,
    grid=major,
    legend pos=south east,
    % width=12cm,
    % height=8cm,
]

% --------------------------------------------------
% 1. Theoretical CDF (Red)
% --------------------------------------------------
% We use a scaled and shifted sigmoid function as a stand-in for a
% theoretical CDF (e.g., from a Normal distribution).
\addplot[
    red,
    thick,
    domain=0:6,
    samples=100,
] {1 / (1 + exp(-1.5*(x-3)))};
\addlegendentry{Theoretical CDF}


% --------------------------------------------------
% 2. Empirical CDF (Blue)
% --------------------------------------------------
% Based on a sample dataset of n=10 points.
% The data points have been chosen to better match the theoretical CDF.
% We now use 'const plot' for the step function and 'only marks' for the jump points.

% --- Draw the ECDF step function line ---
\addplot[blue, thick, mark=none] coordinates {(0,0)};
\addlegendentry{Empirical CDF}
\addplot[
    jump mark left,
    mark=*,
    mark size=1pt,
    blue,
    thick,
] coordinates {
    (0, 0)      % Start at the origin
    (1.5, 0.1)
    (2.1, 0.2)
    (2.5, 0.3)
    (2.8, 0.4)
    (3.0, 0.5)
    (3.2, 0.6)
    (3.5, 0.7)
    (3.9, 0.8)
    (4.4, 0.9)
    (5.0, 1.0)
    (6, 1.0)      % Extend to the plot edge
};

\end{axis}
\end{tikzpicture}

\end{document}
```

For any distribution $P$ with CDF $F$, the [[Inference for CDFs#Glivenko–Cantelli]] theorem states the asymptotic almost sure convergence of $\|\hat{F}_{n}-F\|_{\infty }$, [[Inference for CDFs#Donsker]]'s theorem states its asymptotic convergence in distribution, and [[Inference for CDFs#Dvorak–Kiefer–Wolfowitz]] theorem gives the non-asymptotic convergence rate.

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



## Dvorak–Kiefer–Wolfowitz

$\hat{F}_{n}$ converges uniformly to the true CDF $F$ with a subGaussian tail bound:
$$
P\left( \sup_{t\in \R} |\hat{F}_{n}(t) - F(t)| \ge \epsilon \right) \le 2\exp (-2n\epsilon^{2}).
$$

### Proof

Let $M_{n}\coloneqq \sup_{t}|\hat{F}_{n}(t)-F(t)|$. One important observation is that "stretching the x-axis" does not change $M_{n}$. Therefore, we can arbitrarily stretch $F$ along the x-axis to make it arbitrarily close to $F_{\mathrm{Unif}[0,1]}$

[[!todo]]

We call such a distribution-invariant quantity $M_{n}$ as pivotal.

## Donsker

If further $F$ is continuous, then
$$
\sqrt{ n } \sup_{t\in\R} |\hat{F}_{n}(t) - F(t)| \overset{ d }{\to } \sup_{t\in [0,1]}|B(t)|,
$$
where $B$ is a Brownian bridge on $[0,1]$.
