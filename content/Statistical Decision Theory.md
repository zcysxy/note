---
{"publish":true,"title":"Statistical Decision Theory","created":"2025-05-21T18:44:38","modified":"2025-05-24T19:42:37","cssclasses":""}
---


# Statistical Decision Theory
 
Statistical decision theory is a general framework that models every statistical task as a decision-making problem, including [[Estimation\|Estimation]], prediction, and [[Hypothesis Testing\|Hypothesis Testing]].

Given a [[Statistical Model\|Statistical Model]] and observe $\mathcal{X}\ni X \sim P_{\theta }$, we want to find a statistical procedure
$$
A : \mathcal{X} \to \mathcal{A},
$$
where $\mathcal{A}$ is called the ==action/decision space==.

The question asked is

> [!qn] Which procedure $A$ is (approximately) optimal?

## Examples

- Point [[Estimation\|Estimation]]: $\mathcal{A} = \Theta$, and $\hat{\theta}(X)\coloneqq A(X)$ aims to recover the true parameter $\theta$.
- [[Confidence Interval\|Confidence Interval]]: $\mathcal{A} = 2^{\Theta}$, and $C(X)\coloneqq A(X)\subset \Theta$ aims to contain the true parameter $\theta$ with high probability, i.e., $P(\theta \in C(X))\ge 1-\alpha$.
- [[Prediction\|Prediction]]: $\mathcal{A} = \mathscr{F}$ which is a function class, and $A : \{ (X_{i},Y_{i}) \}_{i=1}^{n} \mapsto \hat{f}\in \mathscr{F}$ aims to make a good prediction about the outcome $Y_{i+1}$ given a new data point $X_{i+1}$, i.e., $(X_{i+1},\hat{f}(X_{i+1}))\approx (X_{i+1},Y_{i+1}) \sim P_{\theta}$.
- [[Hypothesis Testing\|Hypothesis Testing]]: $\mathcal{A} = \{0,1\}$, and $A(X) = 1$ if we reject the null hypothesis $H_0$ given observation $x$, i.e., $A(X) \approx \mathbb{1}\{ \theta\in \Theta _{1} \}$.

- [!] As we can see, the definition of a statistical procedure coincides with the definition of a [[Statistic\|Statistic]] if $\mathcal{A}$ is a [[Measure\|Measure]] space. Especially, for an [[Estimation\|Estimation]] task with a measure space $\Theta$ as the action space, we usually use estimator, statistic, and procedure interchangeably.
