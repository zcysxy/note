---
{"publish":true,"title":"Bayes Optimality","created":"2023-09-20T21:26:09","modified":"2025-06-27T23:04:22","cssclasses":"","aliases":null,"type":"note","sup":["[[Machine Learning]]","[[Statistical Learning]]","[[Risk]]"],"state":"done","related":["[[Classification]]","[[Bayesian Statistics]]","[[Bayes Optimal Test]]","[[Bayes Optimal Estimator]]","[[Bayesian Linear Regression]]"]}
---


# Bayes Optimality

A Bayes optimal *procedure* $A^{*}$ minimizes the [[Risk\|Bayes risk]]:
$$
R(A) = \mathbb{E}_{P \sim Q}\mathbb{E}_{X,Y \sim P}[L(A(X),Y)],
$$
where $L$ is the loss function, $Q$ is the prior of the data-generating distribution $P$.
The "procedure" can be an estimator, a predictor, a classifier, a test, etc., giving corresponding [[Bayes Optimal Estimator]], [[Bayesian Linear Regression]], [[Classification#Optimal Classifier Bayes Classifier\|Bayes Classifier]], [[Bayes Optimal Test]], etc.

For an [[Estimation]] task, the data-generating distribution is parameterized by $\theta \in \Theta$. Thus the prior $Q$ is on $\Theta$ and the target $Y$ is $\theta$ itself, giving
$$
R(A) = \mathbb{E}_{\theta \sim  Q}\mathbb{E}_{X \sim P_{\theta}}[L(A(X),\theta)].
$$

For a [[Prediction]] or [[Classification]] task, $Y$ is the label. Since we do not focus on recovering the underlying distribution, we can collapse the two expectations into one:
$$
R(A) = \mathbb{E}_{X,Y }[L(A(X),Y)].
$$

For a [[Hypothesis Testing]] task, since the decision is binary, we have a concise form:
$$
R(A) = \pi_{0}P_{\theta_{0}}(A(X)=1) \cdot c_{\mathrm{FP}} + \pi_{1}P_{\theta_{1}}(A(X)=0) \cdot c_{\mathrm{FN}},
$$
where $\pi _{0},\pi_{1}$ are the priors of the two hypotheses; $c_{\mathrm{FP}},c_{\mathrm{FN}}$ are the costs of false positive and false negative.

## Principles of Bayes Optimality

The definition of Bayes optimality gives several principles that apply to all Bayes optimal procedures:

### Greedy

A Bayes optimal procedure *greedily* minimizes the "individual loss":
$$
A^{*}(x) = \arg\inf_{\hat{y}} \mathbb{E}_{P \sim Q, Y \sim P|X}[L(\hat{y},Y)\given X=x], \quad \forall x\in \mathcal{X}.
$$
This principle is due to the tower property:
$$
R(A) = \mathbb{E}[L(A(X),Y)] = \mathbb{E}\left[ \mathbb{E}\left[ L(A(X),Y)\given X=x \right]  \right] ,
$$
which is minimized by minimizing the inner expectation for each $x$.

If $Y$ is determined by $X$ regardless of the underlying distribution $P\in \mathcal{P}$, say $Y = f(X)$, then we have
$$
A^{*}(x) = \arg\inf_{\hat{y}} L(\hat{y},f(x)).
$$
This is often the case in [[Classification]].

If $Y$ is determined by $P$ regardless of $X$, say $Y = \theta \cong P \sim Q$, then we have
$$
A^{*}(x) = \arg\inf_{\hat{\theta}} \mathbb{E}_{\theta }[L(\hat{\theta },\theta)\given X=x].
$$

^6bddb6

Now the expectation is over the posterior of $\theta$ given observation $X=x$. This is often the case in [[Estimation]]. In this case, the greedy principle also appears by exchanging the order of integration:
$$
R(A) =\int _{\Theta }\int_{\mathcal{X}} L(A(x),\theta )\d x\d \theta = \int _{\mathcal{X}} \int_{\Theta } L(A(x),\theta )\d \theta \d x.
$$

### Deterministic

If there exist any Bayes optimal procedures, there exist a deterministic Bayes optimal procedure. This is a direct consequence of the greedy principle.

In the context of [[Classification]], a deterministic classifier predicts a label with probability one. With the zero-one loss function $L(\hat{y},y)=\mathbb{1}\{ \hat{y}\ne y \}$, the Bayes classifier is
$$
A^{*}(x) = \argmax_{y} \Pr(y \,|\, x).
$$
