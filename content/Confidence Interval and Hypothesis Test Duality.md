---
{"publish":true,"title":"Confidence Interval and Hypothesis Test Duality","created":"2025-05-27T14:51:17","modified":"2025-05-31T23:12:33","cssclasses":"","state":"done","sup":["[[Statistics]]"],"aliases":null,"type":"note","related":["[[Confidence Interval]]","[[Hypothesis Testing]]"]}
---


# Confidence Interval and Hypothesis Test Duality

Beyond both being [[Statistical Decision Theory\|statistical decision-making]] procedures, confidence intervals and hypothesis tests have a stronger connection.
The one direction of the duality is easy: given a confidence interval $C(X)$ for the parameter, we can construct a hypothesis test $\psi(X) = \mathbb{1}\{ \theta_{0} \not\in C(X) \}$. Essentially, the confidence region corresponds to the rejection region of the hypothesis test.

For the other direction, we consider a *family* of tests $\{ \psi _{\theta_{0}} \}_{\theta_{0}\in\Theta}$, each of which rejects the null hypothesis $H_0: \theta = \theta_{0}$ with probability $\alpha$. That is, the family of tests test against all possible values of the parameter $\theta$.
Then, we can construct a confidence interval
$$
C(X) = \{ \theta: \psi _{\theta}(X) = 0 \}.
$$
Recall the definition of the level of a [[Hypothesis Testing]]. We have
$$
P(C(X)\not\ni \theta ) = P_{\theta }(\psi _{\theta}(X) = 1) \le \alpha,
$$
indicating that $C(X)$ is indeed a $(1-\alpha )$ level confidence interval.
In other words, to build a $(1-\alpha)$ level CI, we collect all parameters that are *consistent enough* with the data, i.e., those that do not reject of the simple null hypothesis at level $\alpha$.

## Algorithm for HT to CI

We give an example algorithm for constructing CI through HT.
Our goal is to construct a CI with *balanced coverage*: $P(\theta> \sup C(X)) \approx  P(\theta < \inf C(X))$.

> [!algorithm]
> - Input: level $\alpha$
> - For $\tilde{\theta}\in\Theta$:
>     - Generate a $\alpha /2$-test $\psi ^{\uparrow}_{\tilde{\theta}}$ on HT $\Theta_{0}=\{ \tilde{\theta} \}$ against $\Theta_{1} = \{ \theta > \tilde{\theta} \}$.
>     - Generate a $\alpha /2$-test $\psi ^{\downarrow}_{\tilde{\theta}}$ on HT $\Theta_{0}=\{ \tilde{\theta} \}$ against $\Theta_{1} = \{ \theta < \tilde{\theta} \}$.
> - Return: $C(X) = \{ \tilde{\theta}\in\Theta : \psi ^{\uparrow}_{\tilde{\theta}}(X) = \psi ^{\downarrow}_{\tilde{\theta}}(X) = 0 \}$

One can check that the above method returns a finite-sample valid CI.

## HT CI for a Few Bernoulli Trials

We construct a [[Confidence Interval]] for the parameter $p$ given a few [[Bernoulli Distribution\|Bernoulli Trial]]s to demonstrate how HT-based CI adapts to the number of samples and is finite-sample valid.

First, we note that when we only have a few samples, it's more likely we observe extreme events like $\overline{X} = 0$ or $\overline{X} = 1$. In such cases, non-inclusive [[Confidence Interval#Wald CI]] gives an degenerated CI:
$$
C^{(\mathrm{Wald})}(X) = \hat{p} \pm z_{1-\alpha /2} \sqrt{ \frac{\hat{p}(1-\hat{p})}{n} } = \{ \hat{p} \},
$$
which is obviously not valid.

We now examine the HT-based CI constructed by [[Confidence Interval and Hypothesis Test Duality#Algorithm for HT to CI]] under such extreme events. Consider $n$ trials from $\operatorname{Binom}(n,p)$. Since the [[Binomial Distribution]] has a monotone likelihood function, we know the [[Uniformly Most Powerful Test\|UMP]] level-$\alpha$ test is
$$
\psi ^{\uparrow}_{\tilde{\theta}}(X) = \mathbb{1} \{ X > q_{1-\alpha /2}^{\tilde{\theta}} \}, \quad \psi ^{\downarrow}_{\tilde{\theta}}(X) = \mathbb{1} \{ X < q_{\alpha /2}^{\tilde{\theta}} \},
$$
where $q^{\tilde{\theta}}_{\beta}$ is the $\beta$-quantile of $\operatorname{Binom}(n,\tilde{\theta})$.
Now suppose $\hat{p} = \overline{X} = 0$. We need to find the parameter $\tilde{\theta}$ such that
$$
\psi _{\tilde{\theta}}(X) = \psi ^{\uparrow}_{\tilde{\theta}}(X) \lor   \psi ^{\downarrow}_{\tilde{\theta}}(X) = \psi ^{\downarrow}_{\tilde{\theta}}(X) =  \mathbb{1} \{ q_{\alpha/2}^{\tilde{\theta}} > 0 \},
$$
where the second equality uses the fact that $\mathbb{1}\{ 0 > q^{\tilde{\theta}}_{1- \alpha /2} \} \equiv 0$.
Although the general binomial quantile function is hard to express, in such extreme events, we have
$$
\begin{aligned}
\psi _{\tilde{\theta}}(X) = 0 \iff& \mathbb{1} \{ q_{\alpha /2}^{\tilde{\theta}} >0 \} = 0\\
\iff&  q_{\alpha /2}^{\tilde{\theta}} = 0\\
\iff & P_{\tilde{\theta}}(X \le 0) \ge \alpha /2\\
\iff & n(1-\theta)^{n} \ge \alpha /2\\
\iff & \tilde{\theta} \le 1 - \left( \frac{\alpha }{2n} \right)^{1/n}.
\end{aligned}
$$
Therefore, we get the CI
$$
C^{(\mathrm{HT})}(X) = \left[0,1 - \left( \frac{\alpha}{2n} \right)^{1 /n}\right],
$$
which is not degenerated and is valid.
