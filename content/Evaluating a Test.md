---
{"publish":true,"title":"Evaluating a Test","created":"2025-05-30T02:48:39","modified":"2025-07-15T14:19:33","cssclasses":"","state":"done","sup":["[[Hypothesis Testing]]"],"aliases":null,"type":"note"}
---


# Evaluating a Test

Since a [[Hypothesis Testing]] task is a binary decision-making problem, we have two basic metrics for evaluating a test $\psi$:

- ==Type I error==, a.k.a ==false positive rate==, is the probability of rejecting $H_{0}$ when it is true: $P_{\theta_{0}}(\psi (X)=1)$.
- ==Type II error==, a.k.a ==false negative rate==, is the probability of failing to reject $H_{0}$ when it is false: $P_{\theta_{1}}(\psi (X)=0)$.

More generally, Type I and II errors are functions indexed by the test $\psi$, defined as
$$
\begin{cases}
\alpha _{\psi} &: \Theta_{0}\to \R, & \theta_{0} \mapsto P_{\theta_{0}}(\psi (X)=1), & \text{(Type I error)}\\
\beta _{\psi} &: \Theta_{1}\to \R, &\theta_{1} \mapsto P_{\theta_{1}}(\psi (X)=0), & \text{(Type II error)}
\end{cases}
$$

The largest Type I error is called the ==size== of the test:
$$
\overline{\alpha} _{\psi} = \sup_{\theta_{0}\in\Theta_{0}}\alpha _{\psi}(\theta_{0}).
$$
Recall that in [[Hypothesis Testing]], we use data to *disprove* the null. Thus, size evaluates how *confident* the test is. For a test of size $\alpha$, it correctly fails to reject the null with an $(1-\alpha )$ confidence. See also [[Confidence Interval and Hypothesis Test Duality]].

We say a test has (<span style="color:skyblue">asymptotic</span>) ==level== $\alpha$ if its size is at most $\alpha$:
$$
{\color{skyblue}\lim_{ n \to \infty } }\sup_{\theta_{0}\in\Theta_{0}}\alpha _{\psi}(\theta_{0})\le \alpha.
$$

A small size ensures that, under the null, the test does not reject the null with high probability. The ==power== of a test describes, under the alternative, its *ability* to correctly reject the null:
$$
\pi _{\psi} = \inf_{\theta_{1}\in\Theta_{1}}(1-\beta _{\psi}(\theta_{1})).
$$

We summarize the above metrics into a confusion matrix:

| Truth \\ Decision | Fail to Reject                             | Reject                                                                   |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------ |
| $H_{0}$           | True Negative<br>Confidence<br>$1-\alpha$  | False Positive<br>Type I Error<br>Size<br>Significance Level<br>$\alpha$ |
| $H_{1}$           | False Negative<br>Type II Error<br>$\beta$ | True Positive<br>Power<br>$1-\beta$                                      |

^confusion

## Balanced Evaluation

Different situations favors different evaluation metrics. Specifically, one may want to balance the Type I and Type II errors, or focus more on one of them. There are two common ways to balance the two.

### Bayes Risk

[[Bayes Optimal Test\|Bayes risk]] assigns different weights to the Type I and Type II errors, according to the loss function and prior. Specifically, the Bayes risk is the weighted sum:
$$
R_{B}(\psi,\pi ) = \alpha \cdot \pi_{0} c_{\mathrm{FP}} + \beta \cdot \pi_{1} c_{\mathrm{FN}},
$$
where $\pi$ is the prior for $\theta$ and $c_{\mathrm{FP}}$ and $c_{\mathrm{FN}}$ are the costs of Type I and Type II errors, respectively. See [[Bayes Optimal Test]] for the optimal test under this metric.

### Neyman-Pearson Paradigm

Neyman-Pearson paradigm, or [[Uniformly Most Powerful Test]]ing for general HT, for a simple alternative hypothesis formulates the problem as a constrained optimization problem:
$$
\begin{aligned}
\max_{\psi} & \quad \pi _{\psi }\\
\text{s.t.} & \quad \alpha _{\psi}(\theta_{0}) \le \alpha, \quad \forall \theta_{0}\in\Theta_{0},
\end{aligned}
$$
which is equivalent to
$$
\begin{aligned}
\min_{\psi} & \quad \beta  _{\psi }(\theta_{1})\\
\text{s.t.} & \quad \max_{\theta_{0}\in\Theta_{0}}\alpha _{\psi}(\theta_{0}) \le \alpha .
\end{aligned}
$$
It puts the Type I error as a **size constraint**, and maximizes the **power** (minimizes the Type II error) under this constraint. Similarly, this reflects the *asymmetry* between the null and alternative hypotheses ([[Hypothesis Testing#^d85be2]]). See [[Uniformly Most Powerful Test]] for the optimal test under this metric.
