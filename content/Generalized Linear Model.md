---
publish: true
aliases: GLM
title: Generalized Linear Model
created: 2023-11-12T21:11:03
modified: 2025-08-07T03:07:05
published: 2026-01-06T20:10:18.000-05:00
tags:
  - pub-stat
type: note
sup:
  - "[[Linear Regression]]"
state: done
---

# Generalized Linear Model

A Generalized linear model (GLM) extends the classic [[linear regression]] model in two ways:

1. $Y\given x \sim$ [[Exponential Family]]
2. Allows a _link_ between the outcome and the predictors that satisfies $g(\mathbb{E}\[Y\given x]) = x^{T}𝛽$
   - The function $g$ is called the ==link function==
   - The regression function is $f\_{\beta}(x) = (x \mapsto \mathbb{E}\[Y\given x]) = g^{-1}(x^T\beta)$.

The generalized linear model can also be combined with _[[Linear Regression#Generalized Linear Regression]]_, where the regression function is $x \mapsto \phi(x)^T\beta$, which is still linear in the parameter, but $x$ could be transformed non-linearly into a new feature space. Together, we have the regression function $f\_{\beta}(x) = g^{-1}(\phi(x)^T\beta)$.

- If $\mathbb{E}\[Y\given x] = \frac{mx}{h + x}$, then $g(y) = y^{-1}$ and $\phi(x) = x ^{-1}$ satisfies the requirement, as $g(\mathbb{E}\[Y\given x]) = \frac{1}{m} + \frac{h}{m} \frac{1}{x} = \phi(1; x)^T (\frac{1}{m}; \frac{h}{m})$.

> [!rmk] Remarks
>
> - Note that just like a [[Gaussian Linear Model]], GLM is a _model_ for the data-generating distribution that enable tractable [[Regression]] _methods_. In other words, it's an assumption rather than a specific algorithm.
> - We can use regression methods tailored for GLM even if the _assumption_ does not hold. If we want to do so, we should _design_ the best GLM that describes the data.
> - Since the data-generating model is parametrized, the [[Regression]] task reduces to the [[Estimation]] of $\beta$, and [[Maximum Likelihood Estimation|MLE]] is a natural method for this task.
> - Here the regression function is chosen to be the conditional mean. One can also extend the model to consider other regression functions.

## Canonical GLM

Conventionally, GLM often refers to the canonical form that $Y\given x$ follows a natural exponential dispersion model:
$$
f\left(y\_i ; \theta\_i, \phi\right)=\exp\left( \frac{y\_i \theta\_i-b\left(\theta\_i\right)}{\phi}+c\left(y\_i, \phi\right) \right), \quad i=1, \ldots, n,
$$
where $\phi$ is called a ==dispersion parameter== (and could be known); see more in [[Exponential Family]]. We remark that not every exponential family can be cast into this natural exponential dispersion model, but many common distributions can be.

Clearly, $\theta _{i}$ depends on $x_{i}$. In canonical GLM, we model the natural parameter _linearly_: $\theta = x^T\beta$, and _link_ it to the conditional mean:
$$
g(\mathbb{E}\[Y\given \theta, \phi]) = \theta = x^T\beta.
$$
This is called the ==canonical link==.

As calculated in [[Exponential Family#Moments of Dispersion Exponential Family]], we have $\mathbb{E}\[Y\given \theta,\phi] = b'(\theta)$. Thus, we have
$$
g = b'^{-1}.
$$
Furthermore, $\Var(Y\given \theta,\phi) = \phi b''(\theta)$. Therefore, if $\phi > 0$, we have
$$
\Var(Y\given \theta,\phi) > 0 \implies b''(\theta ) > 0 \implies (g^{-1})' > 0 \implies g^{-1} \text{ is strictly increasing} \implies g \text{ is strictly increasing}.
$$
^bpp

A positive variance means the problem is not degenerated. And the strictly monotonicity also ensures the invertibility of $g$ and $b'$, which further enables the identifiability of $\beta$.

## MLE for GLM

We focus on [[Maximum Likelihood Estimation|MLE]] for canonical GLM. We use the nice properties of [[Exponential Family|natural exponential dispersion family]] to derive the likelihood of $\beta$. We first have
$$
\theta _{i} = b'^{-1}(\mathbb{E}\[Y_{i}\given X\_i]) =  b'^{-1}(g^{-1}(X\_{i}^T\beta)) = (g \circ b')^{-1}(X\_{i}^T\beta) \eqqcolon h(X\_{i}^T\beta),
$$
where $h = (g\circ b')^{-1}$.
Then the log-likelihood is
$$
\ell(\beta\given (X,Y)) = \sum\_{i} \frac{Y\_{i}\theta _{i} - b(\theta _{i})}{\phi} + \text{Const.} = \sum_{i} \frac{Y_{i}h(X\_{i}^T\beta) - b(h(X\_{i}^T\beta))}{\phi} + \text{Const}.
$$

If we use the **canonical link**, then $g = b'^{-1}$, and thus $h = \operatorname{id}$, i.e., $\theta _{i} = X_{i}^T\beta$; modeling $\theta _{i}$ by $X_{i}^T\beta$ is the motivation of the canonical link.
Further, the MLE reduces to
$$
\beta ^{\mathrm{MLE}} = \argmax\_{\beta} \sum\_{i} \frac{Y\_{i} X\_{i}^T\beta - b(X\_{i}^T\beta)}{\phi}.
$$
Moreover, a positive $\phi$, a positive variance ([[#^bpp]]), and a full column rank $X=(X\_{1},\dots,X\_{n})^T$ gives a negative definite Hessian of the log-likelihood:
$$
\operatorname{Hess}(\ell(\beta)) =- \phi^{-1}\sum\_{i} \operatorname{Hess}(b(X\_{i}^T\beta)) =- \phi^{-1} \sum\_{i} b''(X\_{i}^T\beta)X\_{i}X\_{i}^T \prec 0.
$$
Therefore, $\beta ^{\mathrm{MLE}}$ is unique and can be attained by either [[Convex Optimization]] or solving the zero of the gradient:
$$
\sum\_{i} Y\_{i}X\_{i} - \sum\_{i} b'(X\_{i}^T\beta) X\_{i} = 0.
$$
^zerog

- The asymptotic normality of [[Maximum Likelihood Estimation|MLE]] applies to GLMs.

## Applications

## Ordinary Least Squares by Gaussian Distribution

When the GLM is [[Gaussian Linear Model]] with canonical link, the MLE gives [[Linear Regression#Ordinary Least Squares]], the _first_ regression method. In this case, $Y$ is a continuous numerical.

To see this, the natural exponential dispersion form of Gaussian has $b(\theta) = \theta^{2} /2$ with a dispersion parameter $\sigma^{2}$. Then, $b'(\theta) = \theta$ is linear, making the zero point of the log-likelihood ([[#^zerog]]) satisfy
$$
\sum\_{i} Y\_{i}X\_{i} = \sum\_{i} X\_{i} X\_{i}^T \beta ^{\mathrm{MLE}} \iff X^TY = X^TX\beta ^{\mathrm{MLE}} \iff \beta ^{\mathrm{MLE}} = (X^TX)^{-1}X^TY.
$$

### Logistic Regression by Bernoulli Distribution

When the GLM is [[Bernoulli Distribution]] with canonical link, the MLE gives [[Logistic Regression]]. In this case, $Y$ is a categorical with two possible outcomes.

To see this, we have
$$
f(y) = p^{y}(1-p)^{1-y} = \exp(y \ln(p / (1-p)) + \ln(1-p)) \eqqcolon \exp(y\theta - \ln (1+e ^{\theta })) \eqqcolon \exp(y\theta - b(\theta)).
$$
Therefore, the canonical link function is
$$
g(p) = \ln \left( \frac{p}{1-p} \right).
$$
This link is called the ==logit link==, and $g^{-1}$ is called the ==sigmoid function==:
$$
p = b'(\theta) = \frac{\exp(\theta)}{1+\exp(\theta)} = \frac{\exp(x^T\beta)}{1+\exp(x^T\beta)}.
$$

### Poisson Regression by Poisson Distribution

When the GLM is [[Poisson Distribution]] with canonical link, the MLE gives [[Poisson Regression]]. In this case, $Y$ is a count variable, which is a non-negative integer.

### Other

- Multinomial distribution with MLE gives multinomial or ordinal regression, where $Y$ is categorical with more than two outcomes.
- [[Gamma Distribution]] with MLE gives Gamma regression, where $Y$ is positive, e.g., amount of an insurance claim.
