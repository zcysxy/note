---
publish: true
title: Admissibility
created: 2025-05-24T20:14:46
modified: 2025-07-27T20:38:21
published: 2025-08-19T11:19:51.011-04:00
tags:
  - pub-stat
state: done
sup:
  - "[[Statistical Decision Theory]]"
type: note
related:
  - "[[Risk]]"
---

# Admissibility

A statistical procedure $A$ is ==admissible== if it is not _dominated_ by any other procedure $A'$.
Formally, given a [[Risk]] function $R$, we say $A$ is ==inadmissible== if there exists another procedure $A'$ such that $R(A',\theta)\le R(A,\theta)$ for all $\theta\in\Theta$ and there exists $\theta\_{0}$ such that $R(A',\theta\_{0})\<R(A,\theta\_{0})$.
We say $A$ is admissible if it is not inadmissible.

We have the following useful results regarding admissibility.

## Unique Minimax Estimator is Admissible

> [!cor]
>
> A unique [[Minimax Optimal Estimator|minimax estimator]] is admissible.
>
> > [!pf]-
> >
> > If the minimax estimator $A$ is inadmissible, then there exists $A'$ such that $R(A',\theta)\le R(A,\theta)$ for all $\theta$. Then,
> > $$
> > R\_{M}(A') = \sup\_{\theta} R(A',\theta) \le \sup\_{\theta} R(A,\theta) = R\_{M}(A) = \inf\_{A} R\_{M}(A),
> > $$
> > indicating that $A'$ is also minimax optimal, contradicting the uniqueness of $A$.

## Unique Bayes Estimator is Admissible

> [!thm]
>
> A unique [[Bayes Optimal Estimator|Bayes estimator]] $A^{\*}$ w.r.t prior $Q$ is admissible.
>
> > [!pf]-
> >
> > Suppose $A^_$ is inadmissible. Then there exists $A'$ such that $R(A', \theta) \le R(A^_, \theta)$ for all $\theta$. Then,
> > $$
> > R\_B(A', Q) = \int\_Q R(A', \theta) \d \theta \le \int\_Q R(A^_, \theta) \d\theta = R\_B(A^_, Q).
> > $$
> > By the Bayes optimality, $R\_B(A', Q) \ge R\_B(A^_, Q)$. Thus, $R\_B(A', Q) = R\_B(A^_, Q)$, which implies $A^\*$ is not unique, making a contradiction.

> [!cor]
>
> If the unique [[Bayes Optimal Estimator|Bayes estimator]] is also [[Minimax Optimal Estimator|minimax]] with equal Bayes risk and minimax risk, then $A^{\*}$ is the unique minimax estimator.
>
> > [!pf]-
> >
> > Suppose $A'$ is another minimax estimator. By definitions of the minimax optimality and Bayes optimality, we have
> > $$
> > \begin{cases}
> > R\_{M}(A^{_}) \ge R\_{M}(A') \ge R\_{B}(A',Q)\ \\
> > R\_{B}(A',Q) \ge R\_{B}(A^{_},Q).
> > \end{cases}
> > $$
> > Then, since $R\_{M}(A^{_}) = R\_{B}(A^{_},Q)$, we have $R\_{B}(A',Q) = R\_{B}(A^{\*},Q)$, contradicting the uniqueness of the Bayes estimator.

## Bayes Estimator with Strictly Positive Prior is Admissible

> [!thm]
>
> Suppose the risk $R$ is continuous on $\Theta$ and the prior has full support on $\Theta$. Then if the Bayes risk is finite, the [[Bayes Optimal Estimator|Bayes estimator]]  is admissible.
>
> > [!pf]-
> >
> > If a Bayes estimator $A^{_}$ is inadmissible, then there exists another procedure $A'$ such that $R(A', \theta) \le R(A^{_}, \theta)$ for all $\theta\in\Theta$ and there exists $\theta\_{0}$ such that $R(A', \theta\_{0})\<R(A^{_}, \theta\_{0})$. Then,
> > $$
> > \begin{aligned}
> > R\_{B}(A',Q) - R\_{B}(A^{_},Q) =& \int\_{\Theta} R(A',\theta)- R(A^{_},\theta) ,\d Q(\theta)\\
> > \le& \int\_{B(\theta\_{0};\epsilon)} R(A',\theta)- R(A^{_},\theta) ,\d Q(\theta)\\
> > \le& -c \int\_{B(\theta\_{0};\epsilon)} \d Q(\theta)\\
> > <& 0,
> > \end{aligned}
> > $$
> > where $B(\theta\_{0};\epsilon)$ is a small neighborhood of $\theta\_{0}$ such that $R(A',\theta)-R(A^{\*},\theta) < -c$ on $B(\theta \_{0};\epsilon)$; Such $\epsilon$ and $c>0$ exist due to the continuity of $R$; and the last inequality is due to the strictly positivity of $Q$.

> [!ex] Sample mean
>
> By [[Anderson's Lemma]], we know that the sample mean $\overline{X}$ is a [[Bayes Optimal Estimator]] w.r.t a [[Bowl-Shaped Loss]] and a Gaussian prior $Q=\mathcal{N}(\mu\_{0},\tau^{2})$ with $\tau \to \infty$. Since this prior is strictly positivity, the sample mean is admissible.
