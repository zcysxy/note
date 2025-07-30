---
{"publish":true,"title":"Bayes Optimal Estimator","created":"2025-06-27T22:22:59","modified":"2025-06-28T00:04:40","cssclasses":"","state":"done","sup":["[[Estimation]]","[[Bayesian Inference]]"],"aliases":null,"type":"note","related":["[[Risk]]"]}
---


# Bayes Optimal Estimator

Given a loss function $L: \mathcal{A}\times\Theta\to\R_{+}$ and a prior, the ==Bayes optimal estimator==, often shortened to ==Bayes estimator==, minimizes the Bayes risk:
$$
A^{*} = \arg\inf_{A} R_{B}(A) = \arg\inf_{A} \mathbb{E}_{\theta\sim Q}[\mathbb{E}_{X \sim P_{\theta}}L(A(X),\theta)].
$$
Due to the [[Bayes Optimality#Greedy]] principle, we have
<div class="transclude" data-embed-alias="  " data-url="Bayes Optimality"> 

$$
A^{*}(x) = \arg\inf_{\hat{\theta}} \mathbb{E}_{\theta }[L(\hat{\theta },\theta)\given X=x].
$$

</div>
 <a href="Bayes Optimality" class="internal transclude-src">Link to original</a>

This can also be interpreted as a Bayesian approach:

1. Have a prior over $\Theta$;
2. Observe $x$ and form the posterior $\theta\given X=x$;
3. Act optimally according to the posterior.

## Uniqueness

The Bayes estimator may not be unique. However, we have the following result.

Suppose the action space $\mathcal{A}$[^1] is convex, $L(\cdot,\theta)$ is strictly convex in the first argument for any $\theta\in\Theta$, and for any $x\in \mathcal{X}$, there exists $a\in \mathcal{A}$ such that $\mathbb{E}[L(a,\theta)\given X=x]< \infty$. Then, the Bayes estimator is unique.

[^1]: Note that $A: \mathcal{X}\to \mathcal{A}$. Usually $\mathcal{A}=\Theta$ for an estimation task.

### Proof of Uniqueness

Since $L$ is strictly convex, we have
$$
F_{x}(a) \coloneqq \mathbb{E}[L(a,\theta)\given X=x],
$$
is also strictly convex due to the linearity of expectation, and is proper because of the assumption.
Therefore,
$$
A^{*}(x) = \arg\inf_{a\in\mathcal{A}} F_{x}(a)
$$
is uniquely defined.

We now need to show that all Bayes optimal estimator is the minimizer of $F_{x}$. Suppose $A'$ is another Bayes optimal estimator. By definition,
$$
R_{B}(A') \le R_{B}(A^{*}) \implies \mathbb{E}_{x}\left[ F_{x}(A'(x)) - F_{x}(A^{*}(x)) \right]  \le 0.
$$
However, by the definition of $A^{*}$, $F_{x}(A'(x))-F_{x}(A^{*}(x))$ is a non-negative random variable. Therefore, we must have
$$
F_{x}(A'(x)) \overset{ \text{a.s.} }{ = } F_{x}(A^{*}(x)) = \inf_{a\in \mathcal{A}} F_{x}(a).
$$
By the uniqueness of the minimizer of $F_{x}$, we have
$$
A'(x) = A^{*}(x), \quad \text{a.s.}
$$

## Minimizing Posterior Risk

After calculating the posterior (see [[Bayesian Inference]] for discussion on the calculation of posterior), the next question is how to calculate the Bayes estimator, i.e., find the minimizer of the posterior risk.

For certain loss functions, their posterior risk minimizers are common functional of the posterior:

- **Posterior median**: $L(a,\theta) = |a-\theta|$ implies $A^{*}(x) = F_{\theta\given x}^{-1}(1 /2)$.
- **Posterior mode**: $L(a,\theta) = \mathbb{I}(a\ne\theta)$ implies $A^{*}(x) = \arg\max_{\theta} f(\theta\given x)$.

More often, the **posterior mean** happens to be the Bayes estimator:
$$
A^{*}(X) = \mathbb{E}[\theta \given X].
$$
This is the case when

- $L$ is the [[Mean Squared Error]]; or
- $L$ is a [[Bowl-Shaped Loss]] and the posterior is [[Normal Distribution\|Gaussian]].

For the first case, see [[Conditional Probability#Optimal Estimation]].
The second case is given by the [[Anderson's Lemma]].

## Example: Gaussian Mean

Consider the [[Mean Squared Error]]. Suppose $X_{i}\sim \mathcal{N}(\theta,\sigma^{2})$ and $Q = \mathcal{N}(\mu_{0},\tau^{2})$. The posterior is also Gaussian:
$$
\theta \given \overline{X} \sim \mathcal{N}((1-B)\overline{X} + B \mu_{0}, (1-B)\sigma^{2} /n),
$$
where
$$
B = \frac{\sigma^{2} /n}{\sigma^{2} /n + \tau^{2}}.
$$
We can see that the posterior mean is a convex combination of the prior mean and the sample mean, with $B$ being the proportion, which increases with more information in the prior ($\tau$ decreases), and decreases with more information in the sample ($n$ increases).

Thus, the Bayes optimal estimator is
$$
A^{*}(X) = (1-B)\overline{X} + B \mu_{0}.
$$
When $\mu_{0}=0$ and $\tau^{2} = \sigma^{2} /n$, we have $A^{*}(X) = \overline{X} /2$, i.e., a regularized sample mean.

The following figure plots the risk (MSE with $\sigma^{2}=1$) for different estimators. We can see that, unlike sample mean or sample median, which have a constant risk regardless of $\theta$, the regularized sample mean has a lower risk when $\theta$ is small, but underestimate when $\theta$ is large. Therefore, if the prior puts more belief on small $\theta$, the regularized sample mean has a smaller Bayes risk.

![[excalidraw/gaussian-mean-risk.excalidraw]]
