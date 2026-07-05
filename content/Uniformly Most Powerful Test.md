---
publish: true
aliases:
  - Neyman-Pearson
  - UMP
title: Uniformly Most Powerful Test
created: 2025-05-30T02:48:16
modified: 2026-07-04T18:41:26
published: 2026-07-05T01:41:32.052Z
tags:
  - pub-stat
state: done
sup:
  - "[[Hypothesis Testing]]"
type: note
---

# Uniformly Most Powerful Test

The ==uniformly most powerful (UMP)== test maximizes the power of the test for all values of the alternative hypothesis, given a fixed significance level.
We start by defining the ==most powerful (MP)== test for a simple alternative hypothesis $\Theta_{1} = \{ \theta_{1} \}$. The MP test solves the following [[Constrained Optimization]] problem:

$$
\begin{aligned}
\sup_{A}\ &\  P_{\theta_{1}}(A(X)=1)\\
\text{s.t. }\ & \sup_{\theta_{0}\in\Theta_{0}} P_{\theta_{0}}(A(X)=1)\le \alpha.
\end{aligned}
$$

For a composite alternative hypothesis $\Theta_{1}$, we say a test is UMP, if it's MP for all $\theta_{1}\in\Theta_{1}$. Formally, we consider the space of all randomized test $A: \mathcal{X}\to [0,1]$. Then, $A^{(\mathrm{UMP})}$ is UMP of size $\alpha$ if

$$
\begin{aligned}
\mathbb{E}_{\theta_{1}}[A^{(\mathrm{UMP})}(X)] = \sup_{A: \mathcal{X} \to [0,1]} \ &\ \mathbb{E}_{\theta_{1}}[A(X)] &&\text{(maximize power)}\\
\text{s.t. } \quad& \sup_{\theta_{0}\in\Theta_{0}} \mathbb{E}_{\theta_{0}}[A(X)]\le \alpha &&\text{(size constraint)}\\
\forall \theta_{1}\in\Theta_{1}. &&& \text{(uniformity)}
\end{aligned}
$$

## Neyman-Pearson

For a simple-simple HT, the Neyman-Pearson lemma states that the (U)MP test is a [[Likelihood Ratio Test]] given by

$$
A^{(\mathrm{MP})} = A^{(\mathrm{NP})}(X) = \mathbb{1}\left\{ f_{1}(X) /f_{0}(X) > \lambda \right\},
$$

where

$$
P_{\theta_{0}}(f_{1}(X) / f_{0}(X) > \lambda ) = \alpha.
$$

Therefore, the (U)MP test for a simple-simple HT is also called the ==Neyman-Pearson optimal== test.

- In general, if $A^{(\mathrm{MP})} = A^{(\mathrm{NP})}$ depends on $\theta_{1}$, it is not _uniformly_ most powerful.

## Monotone Likelihood Ratio

For certain [[Statistical Model]]s, the NP optimal test evaluated at the _boundary_ of $\Theta_{0}$ and $\Theta_{1}$ is UMP.
We say a model $\mathcal{P}_{\Theta}$ has a ==monotone likelihood ratio== if there exists a statistic $T(X)\in\R$ such that for any $\theta_{0}<\theta_{1}$, $P_{\theta_{0}}$ and $P_{\theta_{1}}$ are distinct and

$$
\frac{f_{\theta_{1}}(X)}{f_{\theta_{0}}(X)} = \frac{g_{1}(T(X))}{g_{0}(T(X))}, \quad\text{for some } g_{0},g_{1} \text{ with } g_{1} /g_{0} \text{ non-decreasing}.
$$

For a statistical model with monotone likelihood ratio and a composite HT $\Theta_{0} = (-\infty,\theta_{0}]$, $\Theta_{1} = (\theta_{0},\infty)$, we have the following results:

1. An UMP test exists and has the form
   $$
   A^{(\mathrm{UMP})}(x) = \begin{cases}
   1, & T(x)>c;\\
   \gamma, & T(x)=c;\\
   0, & T(x)<c,
   \end{cases}
   $$
   where $\gamma\in[0,1]$, and $c$, $\gamma$ are **uniquely** determined by the significance level constraint $\alpha$.
2. The power function $\beta(\theta)=\mathbb{E}_{\theta}A^{\mathrm{UMP}}(X)$ is strictly increasing on $\{ \theta: \beta(\theta)\in(0,1) \}$.
3. For any $\theta'$, $A^{(\mathrm{UMP})}$ determines a test that is UMP for $\Theta_{0}' = (-\infty,\theta']$, $\Theta_{1}' = (\theta',\infty)$ at level $\alpha' = \beta(\theta')$.
4. Among all size-$\alpha$ tests, $A^{(\mathrm{UMP})}$ minimizes $\mathbb{E}_{\theta}A(X)$ for $\theta\in(-\infty,\theta_{0})$.

- We note that $A^{(\mathrm{UMP})}$ is independent of $\theta_{1}$.

### Proof

- This proof covers the [[#Neyman-Pearson]] lemma.

**(Simple).**
We first consider simple-simple HT for $\theta_{0}$ and an arbitrary $\theta_{1}\in \Theta_{1}$. Let $F_{T}(t) = P_{0}(T(X)\le t)$ be the [[Cumulative Distribution Function|CDF]] of $T(X)$ under $\theta_{0}$.
For any $\alpha\in(0,1)$, let $c \coloneqq F_{T}^{-1}(1-\alpha) = \inf_{t} \{ F_{T}(t)\ge 1-\alpha \}$.
Note that for any $c'<c$, we have $F_{T}(c')< 1-\alpha$. Thus,

$$
1-F_T(c)\le \alpha \le 1-F_{T}(c^{-}).
$$

Let

$$
A(x) = \begin{cases}
1,T(x)>c;\\
\gamma, T(x)=c;\\
0, T(x)<c.
\end{cases}
$$

We calculate the size of this test:

$$
\mathbb{E}_{0}[A(X)] = P_{0}(T(X)>c) + \gamma P_{0}(T(X)=c)
= 1-F_{T}(c) + \gamma (F_{T}(c)-F_{T}(c^{-})).
$$

Therefore, we let $\gamma = \frac{\alpha-\alpha(c)}{\alpha(c^{-})-\alpha(c)}$, where $\alpha(c) = 1-F_{T}(c)$, which is between $[0,1]$ as argued above.

**(Sufficient).**
We then show that $A$ maximizes the power for $\theta_{1}$. For any other test $A'$ such that $\mathbb{E}_{0}[A'(X)]\le \alpha$, let $S^{+}\coloneqq \{ A > A' \}$ and $S^{-}\coloneqq \{ A < A' \}$. We see that on $S^{+}$, we must have $A(x)>0$ and thus $T(x)\ge c$; and on $S^{-}$, we must have $A(x)<1$ and thus $T(x)\le c$.
Let $k = g_{1}(c)/g_{0}(c)$.
Thus,

$$
\begin{aligned}
\int _{\mathcal{X}}(A(x) - A'(x))(f_{1}(x) - kf_{0}(x))\d x
=& \int _{\mathcal{X}}(A(x) - A'(x))\left(1 - \frac{g_{0}(T(x))}{g_{1}(T(x))} \frac{g_{1}(c)}{g_{0}(c)} \right)f_{1}(x)\d x\\
=& \int _{S^{+}}(\underbrace{ A(x) - A'(x) }_{ >0 })\Biggl(1 - \underbrace{ \frac{g_{0}(T(x))}{g_{1}(T(x))} \frac{g_{1}(c)}{g_{0}(c)} }_{ \le 1 } \Biggr)f_{1}(x)\d x\\
&+ \int _{S^{-}}(\underbrace{ A(x) - A'(x) }_{ <0 })\Biggl(1 - \underbrace{ \frac{g_{0}(T(x))}{g_{1}(T(x))} \frac{g_{1}(c)}{g_{0}(c)} }_{ \ge 1 } \Biggr)f_{1}(x)\d x \\
\ge& 0.
\end{aligned}
$$

Therefore,

$$
\mathbb{E}_{1}[A(X)-A'(X)] \ge k \mathbb{E}_{0}[A(x)-A'(X)] = k\alpha - k\mathbb{E}_{0}[A'(X)] \ge 0.
$$

So $A$ is most powerful.

**(Necessary).** We also show that for any MP test $A'$, $S'\coloneqq\{A(x)\ne A'(x)\}\cap \{ f_{1}(x)\ne kf_{0}(x) \}$ is of zero measure.
If not, similarly, we have

$$
\int_{\mathcal{X}}(A(x)-A'(x)) (f_{1}(x)-k f_{0}(x))\d x
= \int_{S'}(A(x)-A'(x)) (f_{1}(x)-k f_{0}(x))\d x > 0,
$$

indicating that $A$ is more powerful, which is a contradiction.
Further, if $\mathbb{E}_{0}[A'(X)]<\alpha$ and $\mathbb{E}_{1}[A'(X)]<1$, we can add points to the rejection region of $A'$ to increase the power without violating the size constraint. Therefore, any MP test satisfies either $\mathbb{E}_{0}[A'(X)]=\alpha$ or $\mathbb{E}_{1}[A'(X)]=1$.

**(Composite).** First, since $A$ is independent of $\theta_{1}$, it is UMP for $(\{ \theta_{0} \},\Theta_{1})$.
We then need to show Property (2), and the $A$ is UMP for $(\Theta_{0},\Theta_{1})$. This is because no UMP $A'$ for $(\Theta_{0},\Theta_{1})$ would have a larger power than a UMP for $(\{\theta_{0}\},\Theta_{1})$ (less constraint), and thus $A$ has the largest power for $(\Theta_{0},\Theta_{1})$ as well (power is independent of $\Theta_{0}$).

**(Property 2).** For any $\theta$ such that $\beta(\theta)\in(0,1)$, we see that the above Neyman-Pearson test is UMP for $(\{ \theta \}, \{ \theta' \})$ with size $\beta(\theta)$ for any $\theta' > \theta$. We now show that the power of the test $\beta(\theta')$ is strictly larger than its size $\beta(\theta)$, hence proving the property.
First, the constant test $A'(x)\equiv \beta(\theta)$ has a size $\beta(\theta)$ and power $\beta(\theta)$. Since $A$ is UMP, it must have a power no less than $\beta(\theta)$.
Now suppose $\beta(\theta') = \beta(\theta)$. Then, the constant test $A'$ is also UMP. By the (Necessary) condition, we have $T(x)\equiv c$, and thus $P_{\theta}\dot{=}P_{\theta'}$, contradicting the assumption that two distributions are distinct. Therefore, $\beta(\theta')>\beta(\theta)$.

**(Property 3).** Note that $c$ depends on $\theta$ and $\alpha$, and for a fixed $c$, the same test $A$ if UMP for $(-\infty,\theta'],(\theta',\infty)$ with size $\beta(\theta')$.

**(Property 4).** One obtains a test that minimizes the power by flipping the rejection region of the UMP test. Therefore, $A$ maximizes the power for $\theta\in(\theta_{0},\infty)$ and minimizes the power for $\theta\in(-\infty,\theta_{0})$.

### Exponential Family

An important class of models with monotone likelihood ratio is the [[Exponential Family]], which includes many common distributions such as the [[Normal Distribution]], [[Poisson Distribution]], and [[Exponential Distribution]].
Recall that a one-parameter exponential family has the form
![[Exponential Family#^exp-pdf]]
As a corollary of the above results, if $q(\theta)$ is strictly monotone, then this model admits an UMP test for $\Theta_{0}=(-\infty,\theta_{0}]$, $\Theta_{1}=(\theta_{0},\infty)$.
Specifically, if $q$ is monotonically increasing, then the UMP test has the same form as $A^{(\mathrm{UMP})}$; if $q$ is monotonically decreasing, then the UMP test has the form of $A^{(\mathrm{UMP})}$ with reversed inequalities.

> [!rmk] Existence of UMP implies exponential family\
> We state that an UMP exists for exponential family models. Surprisingly, the other direction is also generally true. Under weak conditions, the exists of UMP for one-sided composite HT of level $\alpha$ and all sample sizes implies an exponential family model.

#### Gaussian

We consider $\mathcal{P}_{\theta}= \mathcal{N}(\theta,1)$ as a concrete example. Suppose $\Theta_{0} = (-\infty,0]$, $\Theta_{1}=(0,\infty)$. Then,

$$
A^{(\mathrm{UMP})}_{\alpha}(x) = \1 \{ x > \Phi^{-1}(1-\alpha)  \}.
$$

To prove this, we first consider a simple-simple HT $\Theta_{0}=\{ 0 \}$, $\Theta_{1}=\{ \theta_{1} \}, \theta_{1} > 0$. By the [[#Neyman-Pearson]] lemma, the optimal test for this simple-simple HT is

$$
A^{(\mathrm{NP})}_{\alpha}(x) = \1 \{ f_{1}(x) /f_{0}(x) > \lambda  \},
$$

where $\lambda$ is determined by $P_{0}(f_{1}(X) / f_{0}(X) > \lambda ) = \alpha$.

Note that for this simple-simple HT,

$$
f_{1}(x) /f_{0}(x) = \exp \left( -\frac{1}{2}(x-\theta_{1})^{2} + \frac{1}{2}x^{2} \right)  = \exp\left( \theta_{1} x - \frac{1}{2}\theta_{1}^{2} \right),
$$

which monotonically increases in $x$. Thus, there exists $\eta$ such that

$$
P_{0}(f_{1}(X) / f_{0}(X) > \lambda) = \alpha \iff P_{0}(x > \eta) = \alpha \iff \eta = \Phi^{-1}(1-\alpha).
$$

$A_{\alpha}^{(\mathrm{NP})}$ is independent of $\theta_{1}$, and is thus UMP for the simple-composite HT $\Theta_{0}=\{ 0 \}$, $\Theta_{1}=(0,\infty)$.

On the other hand, for any $\theta_{0} <0$, we have

$$
\mathbb{E}_{\theta_{0}}A^{(\mathrm{NP})}(X) = P_{\theta_{0}}(X > \Phi^{-1}(1-\alpha)) < P_{0}(X > \Phi^{-1}(1-\alpha)) = \alpha.
$$

Thus, $A_{\alpha}^{(\mathrm{NP})}$ satisfies the size constraint for the composite null $\Theta_{0}=(-\infty,0]$.
In conclusion, $A^{(\mathrm{UMP})} = A^{(\mathrm{NP})}$.
