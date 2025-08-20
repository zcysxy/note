---
{"publish":true,"title":"Likelihood","created":"2022-05-18T16:26:34","modified":"2025-06-18T16:49:05","tags":["pub-stat"],"cssclasses":"","aliases":null,"type":"note","sup":["[[Probability Theory]]","[[Statistics]]"],"state":"done","related":["[[Maximum Likelihood Estimation]]"]}
---


# Likelihood

## Definition: Likelihood and Probability

Consider a [[Statistical Model]] parameterized by a parameter $\theta$ and an observation of samples $X \sim P_{\theta}$. We have, the **probability** of observing $X$ under parameter $\theta$ is $\Pr(X \mid \theta)$.
For the same value, we define it as the **likelihood** of the true parameter being $\theta$ given observation $X$:
$$
L(\theta \given X) = \Pr(X \given \theta).
$$
- [~] That is, the likelihood of a parameter is the probability of observing the data given that parameter. Note that the likelihood is a function of the parameter $\theta$.
 
For continuous [[Random Variable]]s, sometimes (we will see later) it is more convenient to define the likelihood using the observation's [[Probability Density Function]]:
$$
L(\theta \given X) = f(X\mid \theta ).
$$

If $\theta$ is the true value of the parameter, $\Pr(X\mid \theta)$ should be large. That's why we call $L$ the likelihood, and we usually want to [[Maximum Likelihood Estimation\|maximize the likelihood]]. Since mass-density transformation does not affect the maximization operation, the likelihood is usually defined using the density function.

## Log-Likelihood

For iid samples $\{ x_i \}$, the likelihood function is of the form $L(\theta) = \prod f(x_{i}\mid \theta)$. Thus, it is usually more convenient to deal with the log of the likelihood function, turning the product into a sum:

$$
\ell(\theta)\coloneqq \log L(\theta) = \log \prod_{i} f(x_{i}\given \theta) = \sum_{i} \log f(x_{i}\given \theta).
$$

Since the log function is monotonically increasing, this transformation again does not affect the maximization operation.

## Score Function

The derivation of the log-likelihood function is called the ==score function==:
$$
s(\theta) \coloneqq \frac{ \mathrm{d} }{ \mathrm{d}\theta  }  \log L(\theta).
$$


