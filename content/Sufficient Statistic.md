---
{"publish":true,"aliases":["Sufficiency"],"title":"Sufficient Statistic","created":"2025-05-20T19:13:46","modified":"2025-08-18T18:23:51","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Statistics]]"],"type":"note"}
---


# Sufficient Statistic

Recall that a [[Statistic]] is a "measurement" of the sample. A statistic is sufficient if we can "recover" the sample distribution without knowing the true parameter.
Formally, A statistic $T$ is ==sufficient== for [[Statistical Model]] $\{ P_{\theta } \}$ if the conditional distribution of the sample given $T$ does not depend on $\theta$.
In symbolic form, we have
$$
(X \Perp \theta )\given T(X) \qquad \text{or} \qquad \theta \Perp X \given T(X).
$$

In the language of causal inference, the statistic "blocks" the causal chain
$$
\theta \to T(X) \to X.
$$

> [!info]
> - The intuition is that, if I know $T$ but not $\theta$, I can simulate $X' \sim \cdot \given T=t$ as good as[^1] $X \sim P_{\theta}$.
> - A sufficient statistic is a "lossless" compression of the data that has all the information about the parameter.

[^1]: Equal in distribution.

## Fisher-Neyman Factorization Theorem

> [!thm]
> Suppose $\mathcal{X} = \R^{d}$, distribution $P_{\theta}$ has density $p_{\theta }$ for all $\theta\in\Theta$. Then, a statistic $T:\mathcal{X}\to\R^{k}$ is sufficient iff $p_{\theta } = g(T(x),\theta)\cdot f(x)$, for some functions $g:\R^{k}\times\Theta\to\R_{\ge0}$ and $f:\Theta\to\R_{\ge0}$.
>
> - [!] The result also holds for PMFs.

The proof is straightforward:
$$
p(x\given T=t) = \frac{p_{\theta}(x,t)}{\int p_{\theta}(x,t)\d x} = \frac{g(t,\theta)\cdot f(x) \cdot \1 \{ T(x)=t \}}{\int g(t,\theta) \cdot f(x) \cdot \1 \{ T(x)=t \} \d x} \propto f(x)\1 \{ T(x)=t \} \Perp \theta.
$$

- [!] $f(x)$ can be a constant. Then, $g$, and thus $T$, is just a reformulation of $p_{\theta}$. See [[!todo]] homework 1.1.

## Examples

- $T(X)=X$ is always a sufficient statistic.
- [[Order Statistics]] $T(X)= (X_{(1)},\dots,X_{(n)})$ is sufficient.
- For $n$ iid Gaussian r.v.s with unit variance, $p_{\theta} = (2\pi)^{-n/2} \exp\left(-1/2\left( -\theta \sum_{i=1}^{n}x_{i} + n\theta^{2} + \sum_{i=1}^{n}x_{i}^{2} \right)\right)$. Thus, $T = \sum_{i=1}^{n}X_{i}$ and $g(T,\theta) = \exp(-1 /2 (-\theta T + n\theta^{2}))$.

- [!] For iid Gaussian r.v.s with a known variance, the [[Order Statistics]] $(X_{(i)})\in\R^{n}$ is considered "bigger" than $\overline{X} = \frac{1}{n}\sum_{i=1}^{n}X_{i}\in\R$, and the latter is more "compressed".

> [!ex] Gaussian Linear Model
>
> For a fixed overdetermined ($n\ge d$) design matrix $X\in\R^{n\times d}$ and the Gaussian linear model is $Y = X\theta + \epsilon$, $\epsilon \sim \mathcal{N}(0,\sigma^{2}I_{n})$. Let $U = X(X^TX)^{-1 /2}$. Then, $T(Y) = UU^TY$ is sufficient for $Y$.
>
> One way to prove this is to express $Y$ in $T$ and show that the expression does not depend on $\theta$. We have
> $$
> T = X(X^TX)^{-1}X^T (X\theta+\epsilon ) = X\theta + UU^T\epsilon = Y - (I-UU^T)\epsilon .
> $$
> Note that $I-UU^T$ is a projector and $X^T(I-UU^T) = \mathbf{0}$. Thus,
> $$
> Y = T + \operatorname{Proj}_{\operatorname{Ker}(X^T)}\epsilon .
> $$
> Specifically,
> $$
> Y\given T(y)=t \sim \mathcal{N}(t,\sigma^{2}P) \Perp \theta.
> $$
>
> Intuitively, the date $Y$ is high-dimensional ($n$) while the useful information $\theta$ is low-dimensional ($d$). The statistic $T$ maps the data to the column space of $X$, which is also of dimension $d$. The remaining part is pure noise, orthogonal to the column space of $X$.
>
> See [[Gaussian Linear Model]] for more details.

> [!rmk]
> The sufficient statistic is not unique.

## Rao-Blackwell Theorem

> [!thm]
>
> Suppose the action space $\mathcal{A}$ is convex, the loss function $L(a,\theta)$ is convex in $a$, and $T$ is a sufficient statistic for $\theta$. Then, for any statistical procedure $A$, consider
> $$
> A'(x) = \mathbb{E}_{X' \sim \cdot \given T(x)}[A(X')\given T(x)].
> $$
> We have
> $$
> R(A'; \theta) \le R(A; \theta), \forall \theta\in \Theta.
> $$

### Applications

#### Gaussian Median

Rao-Blackwell theorem gives a better estimator for the median of a Gaussian distribution with known variance than the sample median. Since $T=\overline{X}$ is sufficient, we can do a *symmetric sampling* such that the new sample satisfies $\frac{1}{m}\sum_{j=1}^{m}X_{j}' = T = \overline{X}$. Then, we use the sample median of the new sample as the estimator.

#### Order Should Not Matter

Rao-Blackwell theorem is useful in proving [[Admissibility]].
Suppose the loss function $L$ is strictly convex in $a$. If $A: [0,1]^{n}\to [0,1]$ is not order-invariant to its $n$ arguments, then $A$ is not admissible.

To see this, we use the [[Order Statistics]] as the sufficient statistic. Since $[0,1]$ is convex, by Rao-Blackwell theorem, we consider
$$
A'(x) = \mathbb{E}[A(X)\given (x_{(i)})] = \frac{1}{n!} \sum_{\sigma\in {S}_{n}}A(x_{(\sigma(i))}) =  \frac{1}{n!} \sum_{\sigma\in {S}_{n}}A(x_{\sigma(i)}),
$$
where $S_n$ is the permutation group of $n$ elements and the last equality is because the summation is over all permutations. Clearly, $A'$ is order-invariant. Further, by the strict convexity of $L$, we have
$$
\begin{aligned}
R(A', \theta) =& \mathbb{E}\left[ L\left( \frac{1}{n!} \sum_{\sigma }A(\sigma(X)),\theta\right) \right] \\
<& \mathbb{E}\left[ \frac{1}{n!} \sum_{\sigma }L\left( A(\sigma(X)),\theta\right) \right] \\
=& \frac{1}{n!} \sum_{\sigma }\mathbb{E}\left[ L\left( A(\sigma(X)),\theta\right) \right] \\
=& \mathbb{E}\left[ L\left( A(X),\theta\right) \right] \\
=& R(A,\theta),
\end{aligned}
$$
where the penultimate equality is because $\sigma(X)\overset{ d }{ = }X$ due to iidness, and the strict inequality is by Jensen's inequality; the equality holds iff $A(\sigma _{i})=A(\sigma _{j})$ for any two permutations, which implies $A$ is order-invariant.

If the loss function is [[Mean Squared Error]], we have an alternative proof that has a better interpretation. Recall the MSE decomposition:
$$
\mathrm{MSE} = \Var + \mathrm{Bias}^{2}.
$$
Note that
$$
\operatorname{Bias}(A') =\mathbb{E}[A'(X) - \theta] = \frac{1}{n} \sum_{\sigma} \mathbb{E}[A(\sigma(X))-\theta] = \mathbb{E}[A(X)-\theta] = \operatorname{Bias}(A).
$$
So we only need to compare the variance:
$$
\Var(A') = \Var\left( \frac{1}{n!} \sum_{\sigma} A \circ \sigma \right) = \frac{1}{(n!)^{2}}\Var\left(  \sum_{\sigma } A\circ \sigma \right) \le \frac{(n!)^{2}}{(n!)^{2}} \Var(A) = \Var(A),
$$
where the inequality is due to [[Cauchy-Schwartz Inequality]], and the equality holds if and only if
$$
\begin{aligned}
& A\circ \sigma _{i} \overset{ d }{ = } c A\circ \sigma _{j}, \quad \exists c, \forall \sigma _{i},\sigma _{j}\in S_{n}\\
\iff& A\circ \sigma _{i} \overset{ d }{ = } A\circ \sigma _{j} \\
\iff& A \text{ is order-invariant,}
\end{aligned}
$$
where the first equivalence is because
$$
\Var(A) = \Var(A\circ \sigma _{i}) = c^{2} \Var(A\circ \sigma _{j}) = c^{2} \Var(A) \implies c=1.
$$
