---
publish: true
title: Anderson's Lemma
created: 2025-07-27T20:09:20
modified: 2025-07-27T20:37:17
published: 2026-07-04T01:10:01.721Z
tags:
  - pub-prob
type: note
sup:
  - "[[Statistics]]"
state: done
related:
  - "[[Bayes Optimal Estimator]]"
---

# Anderson's Lemma

> [!lem] Anderson
>
> Given a [[Bowl-Shaped Loss]] $\ell$ and a Guassian noise $\epsilon \sim \mathcal{N}(0, \Sigma)$, we have
>
> $$
> R_{1}(\theta) \coloneqq \mathbb{E} \ell(\theta + \epsilon)
> $$
>
> is minimized at $\theta=0$. This is saying that for any distribution $P_{\theta}$ of $\theta$, we have
>
> $$
> \int \ell \,\d \mathcal{N} \le\int \ell\,\d (\mathcal{N} \ast P_{\theta}),
> $$
>
> with the equality holding with $P_{\theta} = \delta _{0}$.

Anderson's lemma gives the following famous result:

> [!cor]
>
> The [[Bayes Optimal Estimator]] w.r.t a [[Bowl-Shaped Loss]] and a Gaussian ~~prior~~ posterior is the posterior mean.
>
> > [!pf]-
> >
> > We know that the posterior distribution of the parameter $\theta \given X$ is Gaussian given a Gaussian prior. Thus, the posterior risk is
> >
> > $$
> > \mathbb{E}_{\theta \given X} \ell(a-\theta) = \mathbb{E}_{\epsilon} \ell (a - \hat{\theta} _{\mathrm{post}}^{\mathrm{mean}} + \epsilon),
> > $$
> >
> > where $\epsilon \sim \mathcal{N}(0, \hat{\Sigma} _{\mathrm{post}})$. Therefore, by Anderson's lemma, the posterior risk is minimized at $\hat{\theta}^{\mathrm{mean}}_{\mathrm{post}}$, which is hence the [[Bayes Optimal Estimator]].
