---
{"publish":true,"aliases":"LRT","title":"Likelihood Hypothesis Test","created":"2023-10-17T19:15:35","modified":"2025-07-22T20:34:40","cssclasses":"","type":"note","sup":["[[Hypothesis Testing]]"],"state":"done"}
---


# Likelihood Hypothesis Test

## Rejection Region

We can also construct a rejection region using the [[Likelihood]] ratio:
$$
\Lambda(\boldsymbol{x}) = \frac{\sup_{\theta \in \Theta_0} L(\theta \mid \boldsymbol{x})}{\sup_{\theta \in \Theta} L(\theta \mid \boldsymbol{x})}
= \frac{L(\hat{\theta}_{0} )}{L(\hat{\theta}_{\mathrm{MLE}})},
$$
where $\Theta_0$ is the null hypothesis parameter space. To highlight the role of the alternative, we can also constrain the supremum to the alternative parameter space $\Theta_1$ in the denominator. By definition, the maximizers are called constrained MLEs.

Then, the rejection region is given by
$$
\mathrm{RR} = \{ \boldsymbol{x} \mid \Lambda(\boldsymbol{x}) \le k \},
$$
where $k$ is chosen such that the test has a significance level $\alpha$.

This method is called the ==likelihood ratio test (LRT)==.

We can see that LRT is closely related to [[Hypothesis Testing#Wald Test]] with MLE: Wald statistic measures the closeness of the MLE to the null value (x-axis), while LRT measures the closeness of their likelihoods (y-axis). Under certain regularity conditions, the two measures are equivalent.

## Asymptotic LRT

Under [[Regularity Conditions in Estimation#For Maximum Likelihood Estimation]], as $n → ∞$, we have
$$
− 2 \log \Lambda  (X) \eqqcolon G^{2} \overset{d}{\to} 𝜒^{2}_{k} ,
$$
where the degrees of freedom $k = \operatorname{dim}(\Theta ) – \operatorname{dim}(\Theta_0)$. This is the ==Wilks' theorem==.

For a simple null hypothesis, $\operatorname{dim}(\Theta_{0}) = 0$, and the result can be derived using the fact about the unconstrained MLE:
$$
\begin{aligned}
-2 \log \Lambda(X) =& 2\left( \ell(\hat{\theta}) - \ell(\theta_{0}) \right)\\
\approx & 2 \cdot  \left(-\frac{1}{2} \left( \hat{\theta} - \theta_{0} \right) ^T \ddot{\ell}_{\theta_{0}} \left( \hat{\theta}- \theta_{0} \right) \right)\\
=& \left( \hat{\theta} - \theta \right)^T I(\theta_{0}) \left( \hat{\theta}-\theta_{0} \right) \\
\to& \chi^{2}_{k},
\end{aligned}
$$
where $\ell$ is the log-likelihood, the approximation follows the [[M-Estimator#Proof Sketch]] of the asymptotic normality of M-Estimators.

- [~] LRT is useful to find a convenient **test statistic**. For instance, we can transform the inequality $\Lambda \le$ into an inequality in $-2 \log \Lambda$, which is a convenient test statistic because of the theorem of asymptotic LRT.
