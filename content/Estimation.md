---
{"publish":true,"created":"2023-08-02T18:42:38","modified":"2025-06-27T22:32:18","cssclasses":"","type":"index","sup":["[[Machine Learning]]","[[Statistics]]"],"state":"done"}
---


# Estimation

- Types of estimation
    - [[Estimation#Point Estimation]]
    - [[Confidence Interval]]/Region
    - [[Bayes Estimation]]
- Metric
    - [[Evaluating an Estimator]]
    - [[Bayes Optimal Estimator]]
    - [[Minimax Optimal Estimator]]
- Point estimation methods
    - [[Method of Moments]]
    - [[Maximum Likelihood Estimation]]
    - [[Mean Squared Error\|Least Squares]]
    - [[M-Estimator]]
    - [[Z-Estimator]]
    - [[Maximum a Posteriori]]

```mermaid
flowchart
subgraph BB[Prediction]
direction TB
E["Empirical Risk Minimization"]
E --"geneneralizes"--> F["Regression"]
F --"contains"--> FF@{shape: processes, label: "... ...", w: 100px}
end
subgraph AA[Estimation]
direction TB
A["M-Estimator"] --"generalizes"--> B["Maximum Likelihood Estimator"]
C["Z-Estimator"] --"generalizes"--> A
C["Z-Estimator"] --"generalizes"--> D["Moment Estimator"]
B <--"same for exponential family"--> D
B --"add a prior"--> M["Maximum a Posteriori "]
D --"contains"--> D1["Sample Mean"]
D --"contains"--> D2["Sample Variance"]
end
E  <--"same form"--> A
```

## Point Estimation

A ==point estimator/statistic== *recovers* a quantity of interest from data samples. Formally, it's any algorithm/measurable function that returns a **point** in the parameter space given the sample:
$$
\hat{\theta} : \mathcal{X}\to \Theta, \quad X \mapsto \hat{\theta}_{X}.
$$
The parameter space $\Theta$ can be one-dimensional, multi-dimensional, or even a function space. When the sample $X=(X_{1},\dots,X_{n})$ has a sample size/dimension of $n$, we also conventionally write $\hat{\theta}_{n}$ to denote the point estimator.

In contrast to point estimation, [[Confidence Interval]]/region returns a subset of the parameter space $\hat{C}\in 2^{\Theta}$, and [[Bayes Estimation]] returns a distribution over the parameter space $\hat{P}\in \Delta(\Theta)$.



## Comparison of Estimation Methods  

### MLE vs MoM

- For quadratic risks, [[Maximum Likelihood Estimation\|MLE]] is more accurate in general
- [[Maximum Likelihood Estimation#Misspecification\|MLE]] still gives good results even for misspecified models, while [[Method of Moments]] is more sensitive to model misspecification.
- Sometimes [[Maximum Likelihood Estimation\|MLE]] can be computationally intractable, and [[Method of Moments]] is easier with only polynomial equations.

### Bayesian Estimation

- [[Maximum a Posteriori\|MAP]] returns the **mode** of the posterior distribution.
- [[Bayes Optimal Estimator]] returns the
    - **mean** of the posterior distribution for [[Mean Squared Error]], or any [[Bowl-Shaped Loss]] with a Gaussian posterior;
    - **median** of the posterior distribution for absolute error loss $L(\hat{\theta},\theta)= |\hat{\theta}-\theta|$;
    - **mode** of the posterior distribution for zero-one loss $L(\hat{\theta},\theta)= \mathbb{I}(\hat{\theta}\ne\theta)$.

### Bayes vs Frequentist

- The [[Bayes Estimation\|Bayesian approach]] has been criticized for its over-reliance on convenient priors and lack of robustness.
- The frequentist approach, such as [[Maximum Likelihood Estimation\|MLE]], has been criticized for its inflexibility (failure to incorporate prior information) and incoherence (failure to process information systematically).
- For large sample sizes ($n$), or when the prior is uniform, the Bayesian method tends to yield results similar to those of the classical likelihood approach.
