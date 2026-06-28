---
publish: true
title: Central Limit Theorem Fails for Cauchy Distribution
created: 2022-11-04T14:48:36
modified: 2022-11-04T14:57:55
published: 2026-06-28T06:55:56.479Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
related:
  - "[[Cauchy Distribution]]"
  - "[[Central Limit Theorem]]"
---

# Central Limit Theorem Fails for Cauchy Distribution

A direct corollary of [[Central Limit Theorem]] is: for i.i.d [[Random Variable]] set $\{ X _i \}_{i=1}^{n}$ with same [[Expectation|Mean]] $\mu$ and [[Variance]] $\sigma^{2}$,

$$
\frac{\sum^{n}_{i=1}X _i}{n} \overset{d}{\longrightarrow} Z \sim \mathcal{N}\left( \mu, \frac{\sigma^{2}}{n} \right).
$$

However, we know that the [[Cauchy Distribution#Reproducibility and Sample Mean|sample mean]] of Cauchy distribution is

$$
\frac{\sum^{n}_{i=1}X _i}{n} \sim \operatorname{Cauchy}\left( a \right),
$$

where $a$ is the parameter of $X _i$.
Therefore, [[Central Limit Theorem|CLT]] fails for [[Cauchy Distribution]].
