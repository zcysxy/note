---
{"publish":true,"aliases":["EM"],"title":"Expectation Maximization","created":"2023-04-13T16:33:44","modified":"2025-06-18T19:49:51","cssclasses":"","type":"note","sup":["[[Maximum Likelihood Estimation]]","[[Unsupervised Learning]]"],"state":"done"}
---


# Expectation Maximization

Expectation Maximization (EM) algorithm is an iterative algorithm used to estimate the [[Maximum Likelihood Estimation]] (MLE) or [[Maximum a Posteriori]] (MAP) parameters of a probabilistic model, in the presence of **unobserved** or **missing** data.

Imagine we have a *hidden* (unobserved or missing) random variable $Y$, given whose observation the [[Likelihood]] $p(x,y\given \theta)$ is easy to compute or optimize.
When only $x$ is available, we have
$$
p(x\given \theta ) =\int_{\mathcal{Y}} p(x,y\given \theta) \d y.
$$
Then, optimizing the RHS gives us the MLE/MAP.

> [!ex] Gaussian parameters
> For a Gaussian random variable $X$ with observed subvector $x^{o}$ and missing subvector $x^{m}$, we can easily find its [[Maximum Likelihood Estimation]] for parameters when there is no missing data. Therefore, with the presence of missing data, we have
> $$
> p\left(x_i^o \mid \mu, \Sigma\right)=\int p\left(x_i^o, x_i^m \mid \mu, \Sigma\right) d x_i^m=N\left(\mu_i^o, \Sigma_i^o\right),
> $$
> where $\mu_i^o$ and $\Sigma_i^o$ are the sub-vector/sub-matrix of $\mu$ and $\Sigma$ defined by $x_i^o$.
^ex

More often, the [[Likelihood#Log-Likelihood]] function, which is a summation instead of a production, is easier to optimize given complete data: $\log p(x,y\given \theta)$. This motivates the EM algorithm.

## Objective Justification

Formally, with the help of another random variable $y$ and its distribution $q$, we have the following log-likelihood decomposition:
$$
\begin{aligned}
\ln p(x|\theta )
=& \int _{\mathcal{Y}}q(y) \ln p(x|\theta ) \, \d y\\
=& \int _{\mathcal{Y}}q(y)\ln \frac{p(x,y|\theta)}{p(y|x,\theta)}\d y\\
=& \int _{\mathcal{Y}}q(y) \ln p(x,y|\theta)\d y -
\int _{\mathcal{Y}}q(y) \ln p(y|x,\theta)\d y\\
= &\ \mathbb{E}_{q}[\ln p(x,Y \given \theta )] + H(q\| p_{x,\theta}),
\end{aligned}
$$
where $p_{x,\theta}$ is the conditional distribution of $y$ given $x$ and $\theta$, and $H$ is the [[Cross-Entropy]].

> [!qn] Should we maximize or minimize the entropy term in the above decomposition?

Since we want to maximize the log-likelihood, the above decomposition seems to suggest that we should maximize the cross-entropy over $q$.
However, it's important to note that the above equality holds for any $q$. And thus $q$ is not a decision variable.

Instead, we notice that
$$
\begin{aligned}
\ln p(x\given \theta) =& \mathbb{E}_{q} [\ln p(x,Y\given \theta)] + D_{\mathrm{KL}}(q\| p_{x,\theta }) - \mathbb{E}_{q}[\ln q(Y)] \\
\ge& \mathbb{E}_{q} [\ln p(x,Y\given \theta)] -\underbrace{  \mathbb{E}_{q}[\ln q(Y)] }_{ \text{constant w.r.t. } \theta} ,
\end{aligned}
$$
because the [[KL Divergence]] is always non-negative.
Therefore, we see that when optimizing the log-likelihood over $\theta$, the increase of the objective will be *lower bounded* by the increase of the expectation term $\mathbb{E}_{q} [\ln p(x,Y\given \theta)]$, which is easier to optimize as it involves the log-likelihood of the complete data $(X,Y)$.
And to make this lower bound tight, we need to **minimize** the [[Cross-Entropy]]/[[KL Divergence]] term. By this, any increase in the expectation term leads to the maximum increase in the log-likelihood.

Another reason for minimizing the cross-entropy term is given in [[Expectation Maximization#Convergence Property]].

## Algorithm

Justified above, the EM algorithm iteratively minimizes the cross-entropy term and then maximizes the expectation term:

1. **E-step:** Update
  $$
  q_{t+1} = \argmin_{q} H(q\| p_{x,\theta_t}) = p_{x,\theta _t},
  $$
  and calculate the expectation $\mathbb{E}_{q_{t+1}} \ln p\left(x, Y \given \theta\right)$.
2. **M-step:** Update
$$
\theta_{t+1}=\arg \max _{\theta}  \mathbb{E}_{q_{t+1}}[\ln p\left(x, Y \given \theta\right)].
$$

## Convergence Property

Generally, EM is not theoretically guaranteed to converge to the [[Maximum Likelihood Estimation]] or [[Maximum a Posteriori]]. However, it is a monotonic increasing algorithm:
$$
\begin{aligned}
\ln p(x \mid \theta_t) &=\mathbb{E}_{q}\ln p(x,Y\given \theta_t)+H(q \| p_{ x, \theta_t}) && \text{(holds for any $q$)}\\
&=\mathbb{E}_{q_{t+1}}\ln p(x,Y\given \theta_t)+H(q_{t+1} \| p_{ x, \theta_t}) \\
&=\mathbb{E}_{q_{t+1}}\ln p(x,Y\given \theta_t)+ H(q_{t+1})  \quad && \text{(E-step; $H(q)$ is self-entropy)} \\
&\le\mathbb{E}_{q_{t+1}}\ln p(x,Y\given \theta_{t+1}) +H(q_{t+1})  \quad && \text{(M-step)} \\
&\le\mathbb{E}_{q_{t+1}}\ln p(x,Y\given \theta_{t+1}) +H(q_{t+1}\| p_{x,\theta _{t+1}}) &&  (H(q\|p)> H(q) \text{ if } p\ne q )\\
&=\mathbb{E}_{q}\ln p(x,Y\given \theta_{t+1}) +H(q\| p_{x,\theta _{t+1}}) 
&& \text{(holds for any $q$)}\\
& =\ln p(x \mid \theta_{t+1}).
\end{aligned}
$$

Note that we have two increases in one iteration:
![image.png|300](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20230423183207.png)
Additionally, the increase in the cross-entropy/KL term is introduced by the update of $\theta$ rather than $q$. And to make any update in $\theta$ lead to an increase in the cross-entropy/KL term, we need to first **minimize** the cross-entropy/KL term in the E-step. This reasoning is consistent with [[Expectation Maximization#Objective Justification]].

## Application: Filling Missing Gaussian Data

We now return to the [[Expectation Maximization#^ex\|example]], to both learn the parameter and fill in the missing data.
In this specific problem $\theta = (\mu,\Sigma),y = x^{m}$. And the objective decomposition reads
$$
\begin{aligned}
\sum_{i=1}^n \ln p\left(x_i^o \mid \mu, \Sigma\right)= & \sum_{i=1}^n \int q\left(x_i^m\right) \ln \frac{p\left(x_i^o, x_i^m \mid \mu, \Sigma\right)}{q\left(x_i^m\right)} d x_i^m+ \\
& \sum_{i=1}^n \int q\left(x_i^m\right) \ln \frac{q\left(x_i^m\right)}{p\left(x_i^m \mid x_i^o, \mu, \Sigma\right)} d x_i^m.
\end{aligned}
$$

As we can see, the only difficult part is calculating $q = p(x^{m}|x^{o},\mu,\Sigma)$. ^q

For the E-step, since $[x_{i}^{o}; x_{i}^{m}] \sim \mathcal{N}(\mu,\Sigma)$, by [[Normal Marginal Distribution from Normal Joint Distribution]], we get the conditional parameter of [[Expectation Maximization#^q]]:
$$
\widehat{\mu}_i=\mu_i^m+\Sigma_i^{m o}\left(\Sigma_i^{o o}\right)^{-1}\left(x_i^o-\mu_i^o\right), \quad \widehat{\Sigma}_i=\Sigma_i^{m m}-\Sigma_i^{m o}\left(\Sigma_i^{o o}\right)^{-1} \Sigma_i^{o m}
$$

For the M-step, we need to maximize the following expectation:

$$
\begin{aligned}
\mathbb{E}_{q}[\ln(p (x_{i}^{o},x_{i}^{m}|\mu,\Sigma ))]
= &\mathbb{E}_{q}[(x_{i}-\mu)^{T}\Sigma^{-1}(x_{i}-\mu)] \\
= &{{\mathbb{E}_{q}[\operatorname{trace}\{\Sigma^{-1}(x_{i}-\mu)(x_{i}-\mu)^{T}\}]}}\\
= &\mathrm{trace}\{\Sigma^{-1}\mathbb{E}_{q}[(x_{i}-\mu)(x_{i}-\mu)^{T}]\}\end{aligned},
$$
where $q(x_{i}^{m}) = \mathcal{N}(\hat{\mu} _{i}, \hat{\Sigma}_i)$. Then the maximization gives us
$$
\begin{aligned}
\mu_{\mathrm{up}} & =\frac{1}{n} \sum_{i=1}^n \widehat{x}_i, \\
\Sigma_{\mathrm{up}} & =\frac{1}{n} \sum_{i=1}^n\left(\left(\widehat{x}_i-\mu_{\mathrm{up}}\right)\left(\widehat{x}_i-\mu_{\mathrm{up}}\right)^T+\widehat{V}_i\right),
\end{aligned}
$$
where $\hat{x}_i$ is $x_{i}$ with the missing values being replaced by $\hat{\mu}_i$,
and $\hat{V}_i$ is the zeros matrix plus the sub-matrix $\hat{\Sigma}_i$ in the missing dimensions.

## Application: Mixed Gaussian Model
