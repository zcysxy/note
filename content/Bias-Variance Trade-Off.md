---
publish: true
title: Bias-Variance Trade-Off
created: 2023-01-30T17:28:57
modified: 2026-07-01T15:04:15
published: 2026-07-03T03:37:14.019Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Linear Regression]]"
state: done
---

# Bias-Variance Trade-Off

!["20210414231119"|500](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20210414231119.png)

- An illustration of the relationship between bias, variance, [[Overfitting and Underfitting]].

## For Linear Regression

For a weight estimation $\hat{w}$, we want to evaluate the error of new estimates. Specifically, let $X$ be the training data and $x_{0}$ be a new observation with a real target $y_{0}$. We want to evaluate

$$
\mathbb{E}[(y_{0} - x_{0}^T\hat{w})^{2}|X,x_{0},w] = \int _{\R\times\R^{n}}(y_{0} - x_{0}^T\hat{w}(y))^{2} p(y|X,w)p(y_{0}|x_{0},w) \, \d y\d y_{0}, 
$$

Assume $Y \sim \mathcal{N}(Xw, \sigma^{2}I), y_{0} \sim \mathcal{N}(w^Tx_{0},\sigma^{2})$,

$$
\begin{aligned}
\mathbb{E}[(y_{0} - x_{0}^T\hat{w})^{2}] &= \mathbb{E}y_{0}^{2} - 2x_{0}^T\mathbb{E}[y_{0}\hat{w}] + x_{0}^T\mathbb{E}[\hat{w}\hat{w}^T]x_{0}\\
&= \left( \sigma^{2} + (x_{0}^Tw)^{2} \right) - 2x_{0}^T\mathbb{E}[y_{0}]\mathbb{E}[\hat{w}] + x_{0}^T\left( \Var(\hat{w}) + \mathbb{E}[\hat{w}]\mathbb{E}[\hat{w}]^T \right) x_{0}\\
&= \sigma^{2} + x_{0}^T\Var(\hat{w})x_{0} + (x_{0}^T(w - \mathbb{E}[\hat{w}]))^{2}.
\end{aligned}
$$

We see this generation error decomposes into 

1. **Measurement error** $\sigma^{2}$
2. **Squared model bias** $(x_{0}^{T}(w - \mathbb{E}[\hat{w}]))^{2}$: how close to the real solution (expected)
3. **Model variance**: $x_{0}^T\Var[\hat{w}]x_{0}$: how sensitive the estimation is

For [[Maximum Likelihood Estimation]], the model bias is zero, but the variance if high; for [[Ridge Regression]], the variance is reduced, though it is a biased estimator.

## General Regression

For model $y = f(x;w) + \epsilon, \mathbb{E}[\epsilon] = 0, \Var(\epsilon) = \sigma^{2}$ and the approximator $\hat{f}$, the expected error for new data is

$$
\begin{aligned}
\mathbb{E}[(y_{0} - \hat{f}(x_{0}))^{2}] &= \mathbb{E}[y_{0}^{2}] - 2\mathbb{E}[y_{0}\hat{f}(x_{0})] + \mathbb{E}[\hat{f}^{2}(x_{0})]\\
&= \sigma^{2} + f_{0}^{2} - 2f_{0}\mathbb{E}[\hat{f}(x_{0})] + \mathbb{E}[\hat{f}(x_{0})]^{2} + \Var(\hat{f}(x_{0}))\\
&= \underbrace{ \sigma^{2} }_{ \text{noise} }
 + \underbrace{ (f_{0} - \mathbb{E}[\hat{f}(x_{0})])^{2} }_{ \text{squared bias} } 
 + \underbrace{ \Var(\hat{f}(x_{0})) }_{ \text{variance} }
\end{aligned}
$$

## In Other Statistical Tasks

Bias-variance trade-off was originally formulated in regression tasks. But it's also prevalent in other [[Statistical Decision Theory|statistical decision-making]] tasks, especially when using quadratic [[Risk]]. For example, the same analysis applies to [[Estimation]] with [[Mean Squared Error]].

## Trade-Off Negotiation

Two common ways to negotiate the trade-off between two:

- [[Cross-Validation]]
- [[Mean Squared Error]]
