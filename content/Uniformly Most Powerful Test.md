---
{"publish":true,"aliases":["Neyman-Pearson","UMP"],"title":"Uniformly Most Powerful Test","created":"2025-05-30T02:48:16","modified":"2025-06-04T01:45:31","cssclasses":"","state":"[[%wip]]","sup":["[[Hypothesis Testing]]"],"type":"note"}
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

- [!] In general, if $A^{(\mathrm{MP})} = A^{(\mathrm{NP})}$ depends on $\theta_{1}$, it is not *uniformly* most powerful.

## Monotone Likelihood Ratio

For certain [[Statistical Model]]s, the NP optimal test evaluated at the *boundary* of $\Theta_{0}$ and $\Theta_{1}$ is UMP.
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
2. The power function $\beta(\theta)=\mathbb{E}_{\theta}A(X)$ is strictly increasing on $\{ \theta: \beta(\theta)\in(0,1) \}$.
3. Among all size-$\alpha$ tests, $A^{(\mathrm{UMP})}$ minimizes $\mathbb{E}_{\theta}A(X)$ for $\theta\in(-\infty,\theta_{0})$.
4. For any $\theta'$, $A^{(\mathrm{UMP})}$ determines a test that is UMP for $\Theta_{0}' = (-\infty,\theta']$, $\Theta_{1}' = (\theta',\infty)$ at level $\alpha' = \beta(\theta')$.

- [!] We note that $A^{(\mathrm{UMP})}$ is independent of $\theta_{1}$.

### Exponential Family

An important class of models with monotone likelihood ratio is the [[Exponential Family]], which includes many common distributions such as the [[Normal Distribution]], [[Poisson Distribution]], and [[Exponential Distribution]].
Recall that a one-parameter exponential family has the form
<div class="transclude" data-embed-alias="  " data-url="Exponential Family"> 

$$
f(x ; \theta)=c(\theta) h(x) \exp (t(x) q(\theta))
$$

</div>
 <a href="Exponential Family" class="internal transclude-src">Link to original</a>
As a corollary of the above results, if $q(\theta)$ is strictly monotone, then this model admits an UMP test for $\Theta_{0}=(-\infty,\theta_{0}]$, $\Theta_{1}=(\theta_{0},\infty)$.
Specifically, if $q$ is monotonically increasing, then the UMP test has the same form as $A^{(\mathrm{UMP})}$; if $q$ is monotonically decreasing, then the UMP test has the form of $A^{(\mathrm{UMP})}$ with reversed inequalities.

> [!rmk] Existence of UMP implies exponential family  
> We state that an UMP exists for exponential family models. Surprisingly, the other direction is also generally true. Under weak conditions, the exists of UMP for one-sided composite HT of level $\alpha$ and all sample sizes implies an exponential family model.

#### Gaussian
