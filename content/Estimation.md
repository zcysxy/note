---
publish: true
created: 2023-08-02T18:42:38
modified: 2025-07-30T02:57:19
published: 2026-01-06T20:10:18.069-05:00
tags:
  - pub-stat
type: index
sup:
  - "[[Machine Learning]]"
  - "[[Statistics]]"
state: done
---

# Estimation

> [!tldr]+ Quick Reference
>
> - Types of estimation
>   - [[#Point Estimation]]
>   - [[Confidence Interval]]/Region
>   - [[Bayesian Inference]]
> - Metric
>   - [[Evaluating an Estimator]]
>     - Probabilistic properties
>       - [[#Bias]]
>       - [[#Standard Error]]
>       - [[#Risk]]
>     - Statistical properties
>       - [[#Consistency]]
>       - [[#Asymptotic Normality]]
>   - [[Bayes Optimal Estimator]]
>   - [[Minimax Optimal Estimator]]
> - Point estimation methods
>   - [[Method of Moments]]
>   - [[Maximum Likelihood Estimation]]
>   - [[Mean Squared Error|Least Squares]]
>   - [[M-Estimator]]
>   - [[Z-Estimator]]
>   - [[Maximum a Posteriori]]
>
> ```mermaid
> flowchart
> subgraph BB[Prediction]
> direction TB
> E["Empirical Risk Minimization"]
> E --"geneneralizes"--> F["Regression"]
> F --"contains"--> FF@{shape: processes, label: "... ...", w: 100px}
> end
> subgraph AA[Estimation]
> direction TB
> A["M-Estimator"] --"generalizes"--> B["Maximum Likelihood Estimator"]
> C["Z-Estimator"] --"generalizes"--> A
> C["Z-Estimator"] --"generalizes"--> D["Moment Estimator"]
> B <--"same for exponential family"--> D
> B --"add a prior"--> M["Maximum a Posteriori "]
> D --"contains"--> D1["Sample Mean"]
> D --"contains"--> D2["Sample Variance"]
> end
> E  <--"same form"--> A
> ```

## Point Estimation

A ==point estimator/statistic== _recovers_ a quantity of interest from data samples. Formally, it's any algorithm/measurable function that returns a **point** in the parameter space given the sample:
$$
\hat{\theta} : \mathcal{X}\to \Theta, \quad X \mapsto \hat{\theta}_{X}.
$$
The parameter space $\Theta$ can be one-dimensional, multi-dimensional, or even a function space. When the sample $X=(X_{1},\dots,X\_{n})$ has a sample size/dimension of $n$, we also conventionally write $\hat{\theta}\_{n}$ to denote the point estimator.

In contrast to point estimation, [[confidence interval]]/region returns a subset of the parameter space $\hat{C}\in 2^{\Theta}$, and [[Bayesian Inference]] returns a distribution over the parameter space $\hat{P}\in \Delta(\Theta)$.

## Comparison of Estimation Methods

### MLE vs MoM

- For quadratic risks, [[Maximum Likelihood Estimation|MLE]] is more accurate in general
- [[Maximum Likelihood Estimation#Misspecification|MLE]] still gives good results even for misspecified models, while [[Method of Moments]] is more sensitive to model misspecification.
- Sometimes [[Maximum Likelihood Estimation|MLE]] can be computationally intractable, and [[Method of Moments]] is easier with only polynomial equations.

### Bayesian Estimation

![[Bayesian Inference#^bayes-est-comp]]

### Bayes vs Frequentist

- The [[Bayesian Inference|Bayesian approach]] has been criticized for its over-reliance on convenient priors and lack of robustness.
- The frequentist approach, such as [[Maximum Likelihood Estimation|MLE]], has been criticized for its inflexibility (failure to incorporate prior information) and incoherence (failure to process information systematically).
- For large sample sizes ($n$), or when the prior is uniform, the Bayesian method tends to yield results similar to those of the classical likelihood approach.
