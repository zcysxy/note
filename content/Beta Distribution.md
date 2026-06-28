---
publish: true
title: Beta Distribution
created: 2023-12-19T00:52:34
modified: 2026-06-27T21:11:08
published: 2026-06-28T05:21:24.075Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Beta Distribution

A continuous [[Random Variable]] with range $[0,1]$ is of beta distribution if

- Parameters
  - $a,b >0$ ^para
- [[Probability Density Function|PDF]]
  - $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$ ^pdf
  - where $\Gamma$ is the [[Gamma Function]]
- [[Expectation|Mean]]
  - $\frac{a}{a+b}$ ^mean
- [[Variance]]
  - $\frac{ab}{(a+b)^2(a+b+1)}$ ^var
- [[Moment Generating Function|MGF]]
  - $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ ^mgf

## Properties

- [[Uniform Distribution]] is a special case of beta distribution with $a=b=1$.
- **Beta-Binomial model**:Given a prior $\operatorname{Beta}(a,b)$, the posterior distribution of $p$ given $n$ Bernoulli trials with $k$ successes is $\operatorname{Beta}(a+k, b+n-k)$.
- [[Uniform Distribution]]: If $X \sim \mathrm{U}(0,1)$ and $a>0$ then $X^{1 / a} \sim \operatorname{Beta}(a, 1)$.
- The $k$-th order statistic of a sample of size $n$ from the [[Uniform Distribution]] is a beta random variable, $U_{(k)} \sim \operatorname{Beta}(k, n+1-k)$; see also [[Order Statistics#^2e635f]].
- $\operatorname{Beta}(\alpha n, \beta n)\to \mathcal{N}\left(\frac{\alpha}{\alpha+\beta}, \frac{\alpha \beta}{(\alpha+\beta)^3 n}\right)$
- [[Gamma Distribution]]: If $X \sim \operatorname{Gamma}(\alpha, \theta)$ and $Y \sim \operatorname{Gamma}(\beta, \theta)$ are independent, then $\frac{X}{X+Y} \sim \operatorname{Beta}(\alpha, \beta)$.
- $n \operatorname{Beta}(k,n)\to \operatorname{Gamma}(k,1)$, $n \operatorname{Beta}(1,n)\to \operatorname{Exp}(1)$
- [[Chi-Square Distribution]]: If $X \sim \chi^2(\alpha)$ and $Y \sim \chi^2(\beta)$ are independent, then $\frac{X}{X+Y} \sim \operatorname{Beta}\left(\frac{\alpha}{2}, \frac{\beta}{2}\right)$.
- [[Cauchy Distribution]]: If $X \sim \operatorname{Cauchy}(0,1)$ then $\frac{1}{1+X^2} \sim \operatorname{Beta}\left(\frac{1}{2}, \frac{1}{2}\right)$
