---
{"publish":true,"aliases":["Moment Estimator"],"title":"Method of Moments","created":"2023-10-19T16:39:52","modified":"2025-06-02T22:25:36","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Estimation]]"],"state":"done","related":["[[Moment]]"]}
---


# Method of Moments

Suppose that we have $m$ unknown parameters to be estimated:  $\theta = (\theta_1,\ldots,\theta_{m})$.
Then we can use the first $m$ moments of the distribution and then equate them to the observations (empirical moments):
$$
\begin{cases}
    \mu_1(\theta_1,\ldots,\theta_{m}) &= \hat{\mu}_{1},\\
    &\vdots\\
    \mu_m(\theta_1,\ldots,\theta_{m}) &= \hat{\mu}_{m}.
\end{cases}
$$
This gives us a system of $m$ equations with $m$ unknowns, which can be solved to obtain the estimates $\hat{\theta}_1,\ldots,\hat{\theta}_{m}$.
If we denote the RHS of the system compactly as $M(\theta) = (\mu_{1},\dots,\mu _{m})$ and assume $M$ is one to one, then $\theta ^{(\mathrm{MM})} = M^{-1}(\hat{\mu}_{1},\dots, \hat{\mu}_{m})$.

- [@] The simplest example is that $\mu_1 = \theta_{1}$, and then $\hat{\theta}_{1} = \bar{x}$. For variance, we have $\hat{\theta}_2 =\sqrt{ \overline{x^{2}} - \overline{x}^{2} }$.

## Asymptotic Normality

Under the following regularity conditions:

- $M^{-1}$ is continuously differentiable at $M(\theta)$.
- The covariance matrix $\Sigma(\theta) = \Cov_{\theta}(X_{1},X_{1}^{2},\dots,X_{1}^{m})$ exists.

Then the multivariate [[Central Limit Theorem\|CLT]] and [[Delta Method]] yields
$$
\sqrt{ n }\left( \theta ^{(\mathrm{MM})}_{n}-\theta \right) \overset{ d }{ \to } \mathcal{N}(0,\Gamma(\theta )),
$$
where
$$
\Gamma(\theta) = \left( \frac{ \partial M^{-1} }{ \partial \theta } (M(\theta)) \right) ^T \Sigma(\theta) \left( \frac{ \partial M^{-1} }{ \partial \theta } (M(\theta )) \right) .
$$

## General MM Estimator

Using moments is just one convenient way to construct linearly independent equations. One can choose other functions $g_{1},\dots,g_{m}: \mathcal{X}\to\R$, giving
$$
\begin{cases}
		\mathbb{E}_{\theta }[g_{1}(X)] &= \hat{\mathbb{E}}_{n}[g_{1}(X)] = \frac{1}{n}\sum_{i=1}^{n}g_{1}(X_i),\\
		&\vdots\\
		\mathbb{E}_{\theta }[g_{m}(X)] &= \hat{\mathbb{E}}_{n}[g_{m}(X)]= \frac{1}{n}\sum_{i=1}^{n}g_{m}(X_i).
\end{cases}
$$
Write $g = (g_{1},\dots,g_{m})$ as a vector-valued function, then $\theta ^{(\mathrm{MM})}$ solves
$$
\mathbb{E}_{\theta}g = \hat{\mathbb{E}}_{n} g
$$
Similar results in [[Method of Moments#Asymptotic Normality]] apply.

## Misspecified Model

[[Method of Moments#Asymptotic Normality]] also holds for misspecified models, i.e., when the true distribution is not in the model family. Suppose $M: \theta \mapsto \mathbb{E}_{\theta}g$ is well-defined, and $M^{-1}$ is continuously differentiable at $\mathbb{E}_{P}g$. Note that we do not need $P \in \{ P_{\theta} \}_{\theta\in \Theta}$.
Additionally, suppose $\Sigma = \Cov_{P}(g)$ exists. Then we have
$$
\sqrt{ n }\left( \theta ^{(\mathrm{MM})}_{n}-\theta ^{*} \right) \overset{ d }{ \to } \mathcal{N}(0,\Gamma),
$$
where
$$
\theta ^{*} = M^{-1}(\mathbb{E}_{P}g), \quad \Gamma = (M^{-1})'(\mathbb{E}_{P}g)^{T}\Sigma (M^{-1})'(\mathbb{E}_{P}g).
$$
