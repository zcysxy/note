---
publish: true
title: Reproductivity
created: 2022-12-05T16:19:25
modified: 2022-12-05T19:29:28
published: 2026-06-28T07:00:11.369Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Reproductivity

We say a distribution is reproductive if the sum of two [[Random Variable]]s of this distribution is still in this distribution.
The easiest way to prove reproductivity is to use [[Moment Generating Function|MGF]] or [[Characteristic Function|CF]].

- Reproductive distributions
  - [[Poisson Distribution]]
    - Parameter: $\lambda_{1}, \lambda_{2} \to \lambda_{1} + \lambda_{2}$
  - [[Normal Distribution]]
    - Parameter: $(\mu_{1},\sigma_{1}^{2}),(\mu_{2},\sigma_{2}^{2}) \to (\mu_{1}+\mu_{2}, \sigma_{1}^{2} + \sigma_{2}^{2})$
  - [[Chi-Square Distribution]]
    - Parameter: $n_{1},n_{2} \to n_{1}+n_{2}$
- Reproductive under $\min$ operator
  - [[Exponential Distribution]]
    - Parameter: $\lambda_{1},\lambda_{2} \to \lambda_{1} + \lambda_{2}$
  - [[Geometric Distribution]]
    - Parameter: $q_{1},q_{2} \to q_{1}q_{2}$
- Reproductive when one of the parameters is the same
  - [[Binomial Distribution]]
    - Parameters: $(n_{1},p),(n_{2},p) \to (n_{1}+n_{2},p)$
  - [[Gamma Distribution]]
    - Parameters: $(\alpha_{1},\lambda),(\alpha_{2},\lambda) \to (\alpha_{1}+\alpha_{2}, \lambda)$
- Sample variance is of the same distribution
  - [[Cauchy Distribution]]
