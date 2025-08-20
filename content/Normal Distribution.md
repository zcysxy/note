---
{"publish":true,"aliases":["Gauss distribution","Gaussian","Gaussian distribution"],"created":"2022-05-28T03:34:22","modified":"2024-12-16T16:00:42","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# Normal Distribution

A [[Random Variable]] is said to be normally distributed if it has

- Notation
    - $\mathcal{N}(\mu, \sigma^{2})$ ^nota
- Parameters
    - $\mu\in\R, \sigma^{2}\in\R_{+}$ ^para
- [[Probability Density Function\|PDF]]
    - $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$ ^pdf
    - $(2 \pi)^{-k / 2} |\boldsymbol{\Sigma}|^{-1 / 2} \exp \left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top} \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$ for $k$-dimensional with PSD $\Sigma$ ^vec-pdf
- [[Expectation\|Mean]]
    - $\mu$ ^mean
- [[Variance]]
    - $\sigma^{2}$ ^var
- [[Moment Generating Function\|MGF]]
    - $e^{\mu t + \sigma^{2}t^{2} /2}$ ^mgf
- [[Characteristic Function\|CF]]
    - $e^{it\mu - \sigma^{2}t^{2} /2}$ ^cf

Because of the [[Central Limit Theorem]], in practice, many random phenomena obey, at least approximately, a normal probability distribution.

## Equivalent Definitions for Multivariate Normal Distribution

We can define a random vector to be (nondegenerate multivariate) normal if if has a PDF specified above.
1. Or, if it has the form:
$$
X = DW + \mu,
$$
for any matrix $D$ and vector $\mu$, where $W$ is a random vector whose components are independent standard normal random variables $\mathcal{N}(0,1)$. ^7bb02c
2. Or, if for any real vector $a$, the random variable $a^{T}X$ is normal. ^f2c84a

These two alternative definitions cover *degenerate* normal distribution, i.e., some components are constant/ the distribution is concentrated on a proper subspace of $\R^{k}$.

### Equivalence

#### First Alternative

By change of variables, we can see that the definition via PDF implies the first alternative definition. We now show that if $D$ is not singular, $X=DW+\mu$ is a nondegenerate normal r.v. with a PDF of the form above.
By the relationship of [[Derived Distribution]], we have
$$
f_{X}(x) = f_{W}(D^{-1}x) \cdot | D^{-1}|.
$$
Plugging in the PDF of standard normal distribution, we get
$$
f_{X}(x) = (2\pi)^{-n /2}\exp \left( -\frac{1}{2} (x-\mu)^T D^{-T}D^{-1} (x-\mu) \right) \cdot \frac{1}{|D|}
= (2\pi)^{-n /2}|DD^T|^{-1 /2}\exp \left( -\frac{1}{2} (x-\mu)^T (DD^T)^{-1} (x-\mu) \right),
$$
and $DD^T$ is the covariance of $X$.

#### Second Alternative

The relationship from the first alternative definition to the second is direct. Now suppose $a^TX$ is normal for any vector $a$.

> [!error] Wrong
> We inspect the [[Moment Generating Function\|MGF]] of $X$:
> $$
> M_{X}(s) = M_{s^TX}(1) = \exp(s^T\mathbb{E}[X] + s^T\Var(X)s/2),
> $$
> where we use the fact that $s^TX$ is normal with mean $s^T\mathbb{E}X$ and variance $s^T\Var(X)s$. On the other hand, let $Y=\sqrt{ \Var(X) }W+\mathbb{E}[X]$, where $W$ is a standard normal random vector. Then, $Y$ ~~is multivariate normal and~~ has the same MGF as $X$. By the inversion theorem of MGF, $X$ and $Y$ have the same distribution.

- [!] The above proof is wrong, as we want to show $X=Y$ but not only $X\overset{ d }{ = }Y$.

To rigorously prove the equivalence, we consider two cases.

**Case I.** $V = D^{2} = \Cov(X,X) \succ 0$. Thus, $D$ is invertible and we let $W = D^{-1}(X-\mu)$. We want to show that $W$ is standard normal, and thus $X = DW +\mu$ satisfies the first alternative definition.
We first have $\mathbb{E}[W] = 0$ and $\Var(W) = D^{-1}\Var(X)D^{-T} = D^{-1}D^{2}D^{-1} = I$.
We then inspect the [[Moment Generating Function\|MGF]] (transform) of $W$:
$$
\begin{aligned}
M_{W}(s) =& \mathbb{E}[\exp(s^{T}W)] \\
=& \mathbb{E}[\exp(s^{T}W + \mu') \exp(-\mu')] && (\mu' = s^{T}D^{-1}\mu )\\
=& \exp(-\mu') \mathbb{E}[\exp(s'^{T}X)] && (s' = D^{-1}s)\\
=& \exp(-\mu')M_{s'^{T}X}(1) \\
=& \exp(-\mu')\exp(s'^{T}\mu + s'^{T}V s'/2) && (s'X \text{ is normal by Alt. Def. 2}) \\
=& \exp(-\mu')\exp(\mu' + s^{T}s/2) \\
=& \exp(s^{T}s/2),
\end{aligned}
$$
which is the MGF of a standard normal random variable. Therefore, $W \sim \mathcal{N}(0,I)$.

**Case II.** $V$ is singular. Then, there exists a vector $a\ne 0$ such that $Va = 0$. For simplicity, suppose $\mu=0$. Note that
$$
a^{T}Va = \mathbb{E}[(a^{T}X)^{2}] = 0.
$$
Thus, $a^{T}X = 0$, indicating the linear dependence of $X$. WLOG, suppose $X = (Y;Z)\in\R^{k=d+(k-d)}$ and the first $0\le d<k$ components of $X$ are linearly independent and $Z = AY$ is a linear combination of $Y$. Since $X$ satisfies the second alternative definition, $Y$ also satisfies it. By the Case I, we know $Y=DW$ for some positive definite $D$ and standard normal $W$. Let $W'$ be another $k-d$-dimensional standard normal r.v. independent of $W$. Then, we can write
$$
X = \begin{bmatrix} Y\\Z \end{bmatrix}
= \begin{bmatrix} D&0\\AD&0 \end{bmatrix}
 \begin{bmatrix} W\\W' \end{bmatrix}
.$$

## Properties

- (**Sufficiency**) The mean and covariance of a multivariate normal distribution consist of a [[Sufficient Statistic]]. ^prop-suff
    - In other words, the distribution of a multivariate normal random vector is completely determined by its mean and covariance
    - [&] See [[Normal Distribution#Sufficiency]] for proof
- (**Affine transformation**). The [[Affine Transformation]] of a normal random variable $X$: $a + BX$ is also a normal random variable
    - As a special case, any sub-vector of a normal random vector is also normal ^bcd246
        - As a special case, any component of a normal random vector is also normal
    - If $X \sim \mathcal{N}(\mu,\Sigma)$, then $BX+a \sim \mathcal{N}(B\mu+a,B \Sigma B^{T})$ ^e2d605
    - [&] The proof follows the alternative definition 1 above
- (**Independent Gaussians are jointly Gaussian**). The sum of independent normal random variables is also a normal random variable ^prop-ind-joint
    - [&] Prove this using the [[Moment Generating Function#Inversion Theorem]]
    - [!] Note that this is generally not true for dependent random variables
    - [!] More generally, if a random vector with normal components is not **jointly** normal, then its affine transformation is not necessarily normal! See also [[Normal Distribution#Independence, Correlation, and Jointly Normal]]
- (**Independent iff Uncorrelated**). For a multivariate normal random vector, its components are independent if and only if they are uncorrelated
    - [&] We can use the sufficiency property to prove this. For $X$ with uncorrelated components, we can construct $Y$ with independent components that have the same mean and variance. Then $X\overset{ d }{ = }Y$ and thus $X$ has independent components. See also [[Normal Distribution#Independence, Correlation, and Jointly Normal]]
    - [&] For nondegenerate normal random vector, we can also factorize the PDF to show independence.
    - [!] The statement is not true for general [[Random Variable]]s for which the mean and variance are not sufficient; see [[Normal Distribution#Independence, Correlation, and Jointly Normal]]
- Hence, if $X\sim \mathcal{N}(\mu,\sigma^{2})$, then $Z = (X - \mu) /\sigma$ is normal with mean 0 and variance 1; $Z$ is said to have a ==standard== or ==unit== normal distribution
    - We write the CDF of a standard normal distribution $\Phi$
- (**Symmetry**). $\Phi(-x) = 1 - \Phi(x)$
- Let $\R^{p} \ni X \sim \mathcal{N}(\mu,\Sigma)$; then, $(X-\mu)^{T} \Sigma ^{-1}(X-\mu) \sim \chi^{2}_{p}$ (see [[Chi-Square Distribution]])

### Proofs

#### Sufficiency

Note that [[Probability Density Function\|PDF]] or [[Cumulative Distribution Function\|CDF]] completely determines the distribution of a random variable. Therefore, by the definition for nondegenerate multivariate normal distribution via PDF, we can see that the mean and covariance matrix are sufficient.

For general normal random vectors, we can seek help from the [[Moment Generating Function\|MGF]]. Note that a MGF also completely determines a distribution.
We use the second alternative definition. For a random vector, its [[Moment Generating Function\|MGF]] is the multivariate transform:
$$
M_{X}(s) = \mathbb{E}[\exp(s^TX)] = M_{s^TX}(1) = \exp(s^T\mu + s^TVs/2),
$$
where we use the definition that $s^TX$ is normal with mean $s^T\mu$ and variance $s^TVs$.
As we can see, the mean and variance are sufficient to determine the MGF, and thus the distribution.

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
> We use the second alternative definition above to prove this. Let $X=(X_{1},\dots,X_n)$ with normal components. Then, for any vector $a$, we have $a^{T}X = \sum_{i=1}^{n} a_{i}X_{i}$. Note that $a_iX _i$ are independent normal random variables, and thus their sum is normal by Property [[Normal Distribution#^prop-ind-joint]], or the [[Moment Generating Function#Inversion Theorem]].
> By the alternative definition, $X$ is jointly normal.

> [!rmk] Joint normal with zero correlation implies independence.
>
> Suppose that the components of $X$ are uncorrelated, i.e., its covariance matrix is a diagonal. Consider another random vector $Y$ such that $Y_i\overset{ d }{ = }X_{i}$ and $Y_i$ are independent. By Property [[Normal Distribution#^prop-ind-joint]], $Y$ is jointly normal.
> Since $X$ and $Y$ have the same mean and covariance, by Property [[Normal Distribution#^prop-suff]], $X$ and $Y$ have the same distribution, and thus the components of $X$ are independent.

> [!rmk] Zero correlation does not imply independence for general random variables.
>
> For example, let $X \sim \mathrm{Unif}[-1,1]$ and $Y=X^{2}$. Certainly, $X$ and $Y$ are not independent, but they are uncorrelated:
> $$
> \Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}[X^{3}] - 0 = 0.
> $$

## Sample Mean and Sample Variance

> [!thm]
>
> If $\{ X _i \}_{i=1}^{n}$ is a sample from a normal population having mean $\mu$ and variance $\sigma^{2}$, then $\overline{X}$ and $S^{2}$ are independent random variables,
> with $\overline{X} \sim \mathcal{N}(\mu,\sigma^{2} /n)$, and $\frac{n-1}{\sigma^{2}}S^{2} \sim \chi^{2}_{n-1}$.
> Then we have $\frac{\overline{X} - \mu}{S /\sqrt{n }} \sim t_{n-1}$.

- [!] This independence of $\overline{X}$ and $S^2$ is a unique property of the normal distribution.

## General Bivariate Normal Distribution

We skipped the introduction of standard bivariate normal random variable $(X,Y)\in\R^{2}$, as it is more convenient, and not conceptually harder, to directly deal with the general bivariate normal distribution.

Let $X$ and $Y$ be two random *vectors* with a joint normal distribution. That is
$$
\begin{bmatrix} X \\ Y \end{bmatrix} \sim \mathcal{N}\left( \begin{bmatrix} \mu_{X} \\ \mu_{Y} \end{bmatrix}, \begin{bmatrix} \Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX} & \Sigma_{YY} \end{bmatrix} \right).
$$
Suppose $\Sigma_{YY} >0$ (PSD). We have

- $\mathbb{E}[X\given Y] = \mu_{X} + \Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y})$.
- $\tilde{X} \coloneqq X - \mathbb{E}[X\given Y]$ is independent of $Y$, and thus independent of any function of $Y$.
- $\Cov(\tilde{X}, \tilde{X}\given Y) = \Cov(\tilde{X},\tilde{X}) = \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}$.

Before proving the above results, we recover the standard bivariate normal distribution from them. Let $\Sigma_{XX}=\sigma_{X}^{2}$, $\Sigma_{YY}=\sigma_{Y}^{2}$, $\Sigma_{XY}=\rho\sigma_{X}\sigma_{Y}$. Then, we have
$$
\mathbb{E}[X\given Y] = \rho \frac{\sigma_{X}}{\sigma_{Y}}Y,
\quad
\Var(\tilde{X}) = \sigma_{X}^{2}(1-\rho^{2}).
$$

### Proofs

WLOG, we assume $\mu_{X}=\mu_{Y}=0$ for simplicity.
Let $\hat{X} = \Sigma_{XY}\Sigma_{YY}^{-1}Y$. We have
$$
\mathbb{E}[\hat{X}Y]
= \Sigma_{XY}\Sigma_{YY}^{-1} \mathbb{E}[YY] = \Sigma_{XY}
= \mathbb{E}[XY]
\implies \mathbb{E}[(X-\hat{X})Y] = 0.
$$
Note that $(X-\hat{X},Y)$ is a linear transformation of $(X,Y)$, and thus the above uncorrelatedness implies independence.
This also implies, for any function $g$:
$$
\mathbb{E}[(X-\hat{X})g(Y)] = 0.
$$
By the [[Conditional Probability#General Definition of Conditional Expectation]], the above condition says that
$$
\mathbb{E}[X\given Y] = \hat{X}.
$$

Finally, we compute $\Var(\tilde{X})$. Since $\mathbb{E}[X\given Y]$ is also a function of $Y$, it is independent of $\tilde{X}$. Thus, we have
$$
\Var(\tilde{X})
= \mathbb{E}\left[ (X-\hat{X})(X-\hat{X})^{T} \right]
= \mathbb{E}\left[ (X-\hat{X})X^{T} \right]
= \Sigma_{XX} - \Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$$
