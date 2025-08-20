---
{"publish":true,"title":"Gaussian Properties","created":"2025-05-20T18:58:54","modified":"2025-05-21T01:13:06","tags":["pub-stat"],"cssclasses":"","state":"[[%wip]]","sup":["[[Normal Distribution]]"],"aliases":null,"type":"note"}
---


# Gaussian Properties

A real-valued random variable (r.v.) is called a normal/Gaussian r.v. if it admits the following probability density function (PDF):
<div class="transclude" data-embed-alias="  " data-url="Normal Distribution"> 

    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$ 

</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>
Generally, a vector-valued r.v. is normal/Gaussian if it has PDF:
<div class="transclude" data-embed-alias="  " data-url="Normal Distribution"> 

    - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$ 

</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>

Normal r.v.s have many nice properties, each of which gives a partial answer to why they are so common in nature.

## Parametrized Model

A ==parametrized model== is a family of probability distributions with its elements completely determined by a finite number of parameters.
Normal distribution is a parametrized model with two parameters: mean $\mu$ and variance $\sigma^2$.
In other words, once we know the values of $\mu$ and $\sigma^2$, we know everything about the normal distribution.

The parameterization has many implications in [[Statistics]]. For example, suppose the variance $\sigma^{2}$ is known, and we want to do some statistical inference on a normal distribution with i.i.d samples $\{ X_i \}_{i=1}^{n}$. Then, the sample mean $\overline{X} \coloneqq \frac{1}{n}\sum_{i=1}^{n}X_{i}$ is a **[[Sufficient Statistic]]** for the distribution.
That is, we can *compress* the data from an $n$-dimensional vector to a real number, without losing any information about the distribution.

## Affine Transformation Invariance

Any [[Affine Transformation]] of a normal r.v. is also normal. Specifically,
<div class="transclude" data-embed-alias="  " data-url="Normal Distribution"> 

    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$ 

</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>

<div class="transclude" data-embed-alias="  " data-url="Normal Distribution"> 

    - As a special case, any sub-vector of a normal random vector is also normal 

</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>

The affine transformation invariance is central to normal distribution. Actually, normal distribution can be defined through affine transformation.
We have the following two alternative definitions:

<div class="transclude" data-embed-alias="  " data-url="Normal Distribution"> 

1. Or, if it has the form:
$$
X = DW + \mu,
$$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$. 

</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>
<div class="transclude" data-embed-alias="  " data-url="Normal Distribution"> 

2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal. 

</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>

## Symmetry

Normal distribution is symmetric around its mean $\mu$, meaning that $X-\mu$ and $-(X-\mu)$ has the same distribution for any normal r.v. $X \sim \mathcal{N}(\mu,\sigma^{2})$.

Graphically, the PDF of a normal r.v. is of a bell shape, symmetric around the mean $\mu$.
Formally, we denote the CDF of standard normal r.v. $X$ as $\Phi$; then,
$$
\Phi(-x) = 1 - \Phi(x), \quad \forall x\in\R.
$$
For a general normal r.v. $X \sim \mathcal{N}(\mu,\sigma^{2})$, we know its CDF $F$ satisfies $F(x) = \Phi\left(\frac{x-\mu}{\sigma}\right)$, because
$$
P(X \le x) = P\left( \frac{X-\mu}{\sigma} \le \frac{x-\mu}{\sigma} \right) = P\left( Z \le \frac{x-\mu}{\sigma} \right)  = \Phi\left( \frac{x-\mu}{\sigma} \right) ,
$$
where $Z \sim \mathcal{N}(0,1)$ is a standard normal r.v. Therefore, we have
$$
F(\mu-x) = 1 - F(x+\mu).
$$

We often rely on the above transformation to reduce a general normal r.v. to a standard normal r.v. for the ease of analysis.

## Moments

Then central moments of normal distribution have a nice closed form:
$$
\mathbb{E}\left[ (X-\mu)^{p} \right] = \begin{cases}
0 & \text{if } p \text{ is odd} \\
\sigma ^{p}(p-1)!! & \text{if } p \text{ is even}
\end{cases}
$$
So do its central absolute moments:
$$
\mathbb{E}\left[ (X-\mu)^{p} \right] =\sigma ^{p}(p-1)!!\cdot \begin{cases}
\sqrt{ 2 / \pi } & \text{if } p \text{ is odd} \\
 1 & \text{if } p \text{ is even}
\end{cases}
= \sigma ^{p} \frac{2^{p /2}\Gamma((p+1)/2)}{\sqrt{ \pi }}
$$

## Independence, Correlation, and Jointly Normal

<div class="transclude" data-embed-alias=" n-h " data-url="Normal Distribution"> 

## Independence, Correlation, and Jointly Normal

> [!rmk] Normal components does not imply jointly normal.
>
> It is not true that if $X$ and $Y$ are both normal, then the joint distribution of $(X,Y)$ is normal.
> For example, let $X \sim \mathcal{N}(0,1)$ and $Y=(2B-1)X$, where $B \sim \operatorname{Bern}(0.5)$, i.e., $Y=\pm X$ with equal probability.
> Then, it is easy to verify that $\Phi$ is also the CDF of $Y$, and thus $Y \sim \mathcal{N}(0,1)$.
> However, if $(X,Y)$ is jointly normal, we would have $(1,1)(X,Y)^T=X+Y$ is normal, which is not true because $X+Y=2BX$.

> [!rmk] Independent normal components implies jointly normal.
>
> The above statement becomes true once we impose the independence condition.
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[Gaussian Properties#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[Gaussian Properties#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[Gaussian Properties#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $$
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $$


</div>
 <a href="Normal Distribution" class="internal transclude-src">Link to original</a>

## Tail Bound

"Tail" refers to the area under the PDF curve that is far away from the mean. The tail of a standard normal r.v. is given by Mill's inequality:
$$
\frac{\exp(-t^{2} /2)}{\sqrt{ 2\pi }} \cdot \left(   \frac{1}{t} - \frac{1}{t^{3}}\right) \le P(Z \ge t) \le \frac{\exp(-t^{2} /2)}{\sqrt{ 2\pi }} \cdot \frac{1}{t}, \quad \forall t > 0,
$$
which implies the tight bound:
$$
P(|Z|\ge t) \asymp t^{-1}\exp(-t^{2} /2).
$$

The [[Chernoff Bound#Example - Gaussian\|Chernoff bound]] of normal r.v. gives a slightly looser bound, often referred to as ==sub-Gaussian tail bound==:
$$P(|Z|\ge t) \le 2\exp(- t^{2} /2).$$

It turns out that such a *light* tail bound (exponential rate) is actually very common, that an important class of r.v. in probability and statistics is called ==[[Sub-Gaussian]]==, defined as r.v.s with a sub-Gaussian tail bound (perhaps with a different constant in the exponent).

And it turns out that such a sub-Gaussian bound is not much looser than the Mill's Gaussian tail bound. Specifically the following properties are equivalent definitions of sub-Gaussian r.v.s:

1. There exists $c_{1}>0$ such that $P(|X|\ge t)\le 2\exp(-t^{2} /c_{1})$;
2. There exists $c_{2}\ge_{0}$ and a Gaussian r.v. $Z \sim \mathcal{N}(0,\tau^{2})$ such that $P(|X|\ge t)\le c_{2}P(|Z|\ge t)$.

The second property says that any sub-Gaussian tail bound is essentially bounded by a Gaussian tail bound. This is because of the dominance of the exponential decay.

## Bayesian Inference

In Bayesian inference, we always need to calculate the posterior distribution given the observed data by
$$
\text{posterior} \propto \text{likelihood} \cdot \text{prior}.
$$
A nice thing about normal distribution is that the posterior of a normal prior and a normal likelihood is also normal.
A specific example in [[Bayesian Linear Regression]] is:
<div class="transclude" data-embed-alias="  " data-url="Bayesian Linear Regression"> 

$$
\begin{aligned}
\text{Likelihood}:& \quad y \sim N\left(X w, \sigma^2 I\right)\\
\text{Prior}:& \quad w \sim N\left(0, \lambda^{-1} I\right)
\end{aligned}
$$

</div>
 <a href="Bayesian Linear Regression" class="internal transclude-src">Link to original</a>
Then, the posterior is
<div class="transclude" data-embed-alias="  " data-url="Bayesian Linear Regression"> 

$$
\tag{1}
p(w|y,X) \sim \mathcal{N}\left( (\lambda\sigma^{2}I + X^TX)^{-1}X^Ty, (\lambda I+\sigma^{-2}X^TX)^{-1}\right).
$$

</div>
 <a href="Bayesian Linear Regression" class="internal transclude-src">Link to original</a>
More importantly, with the help of linear algebra ([[Sherman-Morrison Formula]]) with low-rank update ($X^T_{t+1}X_{t+1} = X^T_{t}X_{t} + x_{t+1}x_{t+1}^T$), we can calculate the normal posterior easily in an online fashion.

Additionally, other common operations on Gaussian distributions also preserve Gaussianity, including [[Gaussian Properties#Affine Transformation Invariance\|affine transformation]], [[Convolution]], conditioning, and marginalization.
As a result, other distributions involved in Bayesian inference using Gaussian models are also Gaussian.
