---
publish: true
title: Minimax Optimal Estimator
created: 2025-06-28T00:06:01
modified: 2025-07-17T15:21:44
published: 2026-01-06T20:10:18.000-05:00
tags:
  - pub-stat
state: done
sup:
  - "[[Estimation]]"
aliases:
type: note
related:
  - "[[Risk]]"
---

# Minimax Optimal Estimator

A ==minimax optimal estimator==, often shortened to ==minimax estimator==, minimizes the [[Risk|minimax risk]]:
$$
A\_{M} = \arg\inf\_{A} R\_{M}(A) = \arg\inf\_{A} \sup\_{\theta\in\Theta} R(A,\theta).
$$

This note discusses three strategies for finding minimax estimators: via [[#Minimax via Constant Risk + Generalization|generalization]], [[#Minimax via Constant Risk + Bayes|Bayes risk]], and [[#Minimax via Bayes|constant risk]].

## Generalization

Minimax estimators have a simple generalization result: suppose $A\_{M}$ is minimax w.r.t [[Statistical Model]] $\mathcal{P} = { P\_{\theta} }$, which is contained in a larger model $\mathcal{P}'$, and we have
$$
\sup\_{P\in\mathcal{P}}R(A\_{M},P) = \sup\_{P\in \mathcal{P}'}R(A\_{M},P).
$$
Then $A\_{M}$ is also minimax w.r.t $\mathcal{P}'$.

### Proof of Generalization

By minimax optimality and set inclusion,
$$
\sup\_{P\in \mathcal{P}} R(A\_{M},P) = \inf\_{A} \sup\_{P\in \mathcal{P}} R(A,P) \le \inf\_{A}\sup\_{P\in \mathcal{P}'} R(A,P) .
$$
On the other hand,
$$
\sup\_{P\in \mathcal{P}'}R(A\_{M},P) \ge \inf\_{A}\sup\_{P\in \mathcal{P}'} R(A,P).
$$
Since the LHS of both inequalities are equal, we have
$$
R\_{M}(A\_{M}, \mathcal{P}') = \inf\_{A} R\_{M}(A\_{M},\mathcal{P}'),
$$
i.e., $A\_{M}$ is also minimax w.r.t $\mathcal{P}'$.

## Minimax via Constant Risk + Generalization

The generalization property provides us with a way to find minimax estimators. A more specific case is when $R(A\_{M},P)$ is constant w.r.t $P$.
Formally, if $A\_{M}$ is minimax w.r.t $\mathcal{P} \subset \mathcal{P}'$ and $R(A\_{M},P)$ is constant w.r.t $P\in \mathcal{P}'$, then $A\_{M}$ is also minimax w.r.t $\mathcal{P}'$.

> [!alg] Minimax via constant risk + generalization
>
> 1. Choose a subset $\mathcal{P}\_{0}$ of the original model $\mathcal{P}$.
> 2. Find a minimax estimator $A\_{M}$ w.r.t $\mathcal{P}\_{0}$.
> 3. Show that $R(A\_{M},P)$ is constant w.r.t $P\in \mathcal{P}$.
> 4. Conclude that $A\_{M}$ is minimax w.r.t $\mathcal{P}$.

> [!rmk] Worst-case and conservative
>
> The generalization property, which is from the "worst-case" nature of the minimax risk, indicates that this metric can be very conservative. Even if an estimator performs well for almost all distributions in the larger model, it may still not be minimax if there is a single distribution for which it performs poorly.

### Example: Non-Parametric Mean

We give an interesting example of non-parametric model $\mathcal{P}$, which is the collection of distributions with finite mean $\mu$ and variance $\sigma^{2}$. Consider a loss $L(a, (\mu,\sigma^{2})) = (a-\mu)^{2} /\sigma^{2}$.
Then, the sample mean $\overline{X}$ is a minimax estimator of $\mu$ w.r.t $\mathcal{P}$.

This is because $\overline{X}$ is a minimax estimator of $\mu$ w.r.t a smaller parametric model $\mathcal{P}\_{0}$, the collection of Gaussian distributions with finite mean $\mu$ and variance $\sigma^{2}$ (see [[#Example Gaussian Mean]]). Then, since $R(A,P) = \mathbb{E}\[(\overline{X}-\mu)^{2} /\sigma^{2}] = 1/n$ is constant w.r.t $P\in \mathcal{P}$, we can apply the generalization property to conclude that $\overline{X}$ is also minimax w.r.t $\mathcal{P}$.

## Minimax via Bayes

- Picking a _bad_ prior (or "nature", "environment") to prove worst-case/hardness results is a common technique in [[Statistics]] and theoretical computer science.

In the same spirit, we can use [[Risk|Bayes risks]] to find minimax estimators. The prior we choose is called the ==least favorable prior==.

The supreme gives an immediate lower bound of the [[Risk|minimax risk]]:
$$
R\_{M}(A) \ge R\_{B}(A,Q), \quad \forall Q. \tag{1}
$$

Therefore, we have the following strategy:

> [!alg] Minimax via Bayes
>
> 1. Find a prior $Q$ with a large Bayes risk $R\_{B}(A^{_},Q)$, where $A^{_}$ is a [[Bayes Optimal Estimator]] w.r.t $Q$.
> 2. Find an estimator $A\_{M}$ such that $R\_{M}(A\_{M}) = R\_{B}(A^{\*},Q)$.
> 3. Conclude that $A\_{M}$ is minimax optimal.

This strategy is valid because taking infimum on both sides of the lower bound $(1)$ gives
$$
\inf\_{A} R\_{M}(A) \ge \inf\_{A} R\_{B}(A,Q) = R\_{B}(A^{\*},Q) = R\_{M}(A\_{M}) \ge \inf\_{A} R\_{M}(A),
$$
which indicates that $A\_{M}$ is minimax.

> [!rmk] Remarks
>
> - The bound for any $Q$; thus we only need to find one such $Q$.
> - We do not need $A\_{M} = A^{_}$, but only that $R\_{M}(A\_{M}) = R\_{B}(A^{_},Q)$.
>   - However, quite often $A\_{M}=A^{\*}$.

### Example: Gaussian Mean

From [[Bayes Optimal Estimator#Example Gaussian Mean]], we know that for the [[Mean Squared Error]], the posterior mean is Bayes optimal of the Gaussian mean $\theta$, and the Bayes risk is
$$
R\_{B}(A^{_},Q) = \mathbb{E}_{X}\[\Var(\theta \given X)] = (1-B)\sigma^{2} /n,
$$
where $B = \frac{\sigma^{2} /n}{\sigma^{2} /n + \tau^{2}}$. By letting $\tau\to \infty$, we get a prior $Q_{\infty}$ whose Bayes risk is $R\_{B}(A^{_},Q\_{\infty}) = \sigma^{2} /n$.

Now let $A\_{M}$ be the sample mean. We have $R(A\_{M},\theta) = \sigma^{2} /n$, which is constant w.r.t $\theta$. Therefore, we have
$$
R\_{M}(A\_{M}) = \sigma^{2} /n= R\_{B}(A^{\*},Q\_{\infty}).
$$

Therefore, we conclude that for [[Mean Squared Error|MSE]], the sample mean $\overline{X}$ is minimax, as well as Bayes with prior $\mathcal{N}(0,\infty)$.

## Minimax via Constant Risk + Bayes

From the above [[#Example Gaussian Mean|example]] we can see that, if an estimator has a constant risk w.r.t $\theta$, it's easier to prove its minimax optimality. This motivates the following strategy:

> [!alg] Minimax via constant risk + bayes
>
> 1. Show $R(A\_{M},\theta)$ is constant w.r.t $\theta$.
> 2. Find a prior $Q$ such that $A\_{M}$ is Bayes w.r.t $Q$.
> 3. Conclude that $A\_{M}$ is minimax optimal.

The first step establishes that $R\_{M}(A\_{M}) = R(A\_{M}) = R\_{B}(A\_{M},Q)$ and the second step establishes that $R\_{B}(A\_{M},Q) = R\_{B}(A^{\*},Q)$.

### Example: Bernoulli Mean

We will show that with [[Mean Squared Error|MSE]], the sample mean of Bernoulli trials $X \sim \operatorname{Binom}(n,\theta)$ is not a minimax estimator of $\theta$, and we will find a minimax estimator.

Recall that the [[Bayesian Inference#Conjugate Prior]] of [[Binomial Distribution|binomial]] is [[beta distribution]]:
$$
(\theta \sim \operatorname{Beta}(a,b)) \ast ( x \sim  \operatorname{Binom}(n,\theta)) = \theta \sim \operatorname{Beta}(a+n,b+n-x),
$$
whose posterior mean is
$$
A^{_}(x) = \frac{x+a}{a+b+n}.
$$
We need to find a prior such that $A^{_}$ has a constant risk w.r.t $\theta$. The risk is
$$
\begin{aligned}
R(A^{_},\theta) =& \operatorname{Bias}^{2}(A^{_}) + \Var(A^{\*}) \\
\=& \left( \frac{n\theta + a}{a+b+n}-\theta \right) ^{2} + \left( \frac{1}{a+b+n} \right)^{2} n \theta(1-\theta) \\
\=& \frac{1}{(a+b+n)^{2}} \left( ((a+b)^{2}-n)\theta^{2} + (n - 2a(a+b))\theta + a^{2} \right).
\end{aligned}
$$
Thus, to make the above quantity independent of $\theta$, we let
$$
a =b  = \frac{\sqrt{ n }}{2},
$$
which gives
$$
\begin{aligned}
A\_{M}(x) =& \frac{x+ \sqrt{ n } /2}{\sqrt{ n }+n}, \\
\=& \frac{\sqrt{ n }}{\sqrt{ n }+1} \frac{x}{n} + \frac{1}{\sqrt{ n }+1} \frac{1}{2}\\
\eqqcolon& (1-B)\overline{X} + B \mu\_{0},
\end{aligned}
$$
where $\mu\_{0}$ can be think of as the prior mean of $\operatorname{Beta}\left( \frac{1}{2}, \frac{1}{2} \right)$, and $B$ is the information proportion, which has a rate of $n^{-1 /2}$.

We conclude that $A\_{M}$ is minimax, and it has a constant risk w.r.t $\theta$:
$$
R\_{M}(A\_{M}) = R(A\_{M}) = \frac{1}{4(\sqrt{ n }+1)^{2}} = R\_{B}\left( A^{\*},\operatorname{Beta}\left( \frac{1}{2}, \frac{1}{2} \right)\right) .
$$

On the other hand, the sample mean has a risk of
$$
R(\overline{X},\theta) = \Var(\overline{X}) = \frac{\theta(1-\theta)}{n}.
$$
When $\theta = 1 /2$, we have
$$
R\left( \overline{X}, \frac{1}{4} \right) = \frac{1}{4n} > \frac{1}{4(\sqrt{ n }+1)^{2}} = R\_{M}(A\_{M}).
$$
Thus, the sample mean is not minimax.
However, as illustrated in the figure below, the sample mean's risk is only larger than this minimax estimator's risk when $\theta$ is near $1/2$; as $n\to \infty$, their minimax risk gap vanishes, and the sample mean's risk is almost always smaller than this minimax estimator's.

![[bernoulli-minimax.excalidraw.svg]]
