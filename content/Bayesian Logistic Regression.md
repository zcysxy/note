---
publish: true
title: Bayesian Logistic Regression
created: 2023-03-03T23:34:48
modified: 2023-03-08T23:24:53
published: 2026-07-04T07:15:44.877Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Logistic Regression]]"
state: done
---

# Bayesian Logistic Regression

As stated in [[Logistic Regression#Solution]], giving the weight $w$ a normal prior distribution can ameliorate its [[Overfitting and Underfitting|overfitting]] phenomena.
But unlike [[Ridge Regression]]/[[Bayesian Linear Regression]], where we can get a closed solution/posterior distribution, the [[Logistic Sigmoid]] makes it impossible to calculate the posterior of $w$ in [[Logistic Regression]].

One solution is to approximate the posterior using a parametrized distribution, e.g., [[Normal Distribution]], and then approximate the parameter.
Notice that the posterior has the expression

$$
p(w|x,y) = \frac{p(w,y|x)}{p(y|x)} = \frac{\exp(\ln p(w,y|x))}{\int \exp(\ln p(w,y|x)) \, \d w }.
$$

Then, by Taylor expansion, we can make $\ln p(w,y|x)$ a **quadratic term**, which gives a [[Normal Distribution]] approximating the posterior. This is called the ==Laplace approximation==.
Let $f(w) = p(w,y|x)$. Expanding $\ln f(w)$ to the second order at [[Maximum a Posteriori|MAP]] gives

$$
\exp(\ln f(w)) \approx \exp\left( \ln f(w_{\mathrm{MAP}}) + 0 + \frac{1}{2}(w - w_{\mathrm{MAP}})^T\nabla^{2}\ln f(w_{\mathrm{MAP}})(w-w_{\mathrm{MAP}}) \right),
$$

where $0$ is given by the definition of $w_{\mathrm{MAP}}$. And $w$-independent constants are canceled out from both the denominator and the numerator.
Therefore, we get $p(w|x,y) \approx N(\mu,\Sigma)$, where

$$
\mu = w_{\mathrm{MAP}},\quad
\Sigma = (-\nabla^{2} \ln p(w_{\mathrm{MAP}}, y|x))^{-1}.
$$

^post

Furthermore, by taking the prior $w \sim \mathcal{N}(0,\lambda ^{-1}I)$, we have

$$
w_{\mathrm{MAP}} = \argmax_{w} \sum \ln \sigma(y_ix _i^Tw) - \frac{\lambda}{2}w^Tw, \quad \text{\color{red} no closed solution}
$$

^map

and by Property 2 of [[Logistic Sigmoid]], we get

$$
\nabla^{2}\ln p(y,w|x) = \nabla^{2}\left( \sum \ln\sigma(y_ix_i^Tw) + C -\frac{\lambda}{2}w^Tw\right) = -\lambda I - \sum \sigma _i(1-\sigma _i)x_ix_i^T.
$$

^var
