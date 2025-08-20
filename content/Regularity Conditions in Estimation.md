---
{"publish":true,"title":"Regularity Conditions for M-Estimators","created":"2025-06-18T16:47:11","modified":"2025-08-20T00:36:20","cssclasses":"","aliases":null,"type":"note","sup":["[[Likelihood]]","[[M-Estimator]]","[[Maximum Likelihood Estimation]]"],"state":"done","related":["[[Likelihood]]"]}
---


# Regularity Conditions in Estimation

Common in [[Statistics]], many core ideas in certain analyses are intuitive and simple. For example, the proofs of the [[Delta Method]] and [[M-Estimator#Proof of Asymptotic Normality\|asymptotic normality of M-estimators]] primarily rely on Taylor expansions. However, to make the proof rigorous, numerous "regularity conditions" are needed. These conditions have several characteristics:

- Not the main focus of the analysis
- Make functions or variables behave well, thereby validating the proof
- Most examples of interest satisfy these conditions
- Not tight: some conditions may be relaxed, but doing so may complicate the statement or proof
- Not unique: there can be different sets of regularity conditions that work for the same proof
- Different sets of regularity conditions may yield results with varying levels of generality or applicability

Some general regularity conditions used in estimation include:

1. **Uniform support**: The support of the PDF $f(x;\theta)$ does not depend on $\theta$. ^supp
2. **Identifiability**: $f(x;\theta_1) \neq f(x;\theta_2) \iff \theta_1 \neq \theta_2$. ^id
3. **Interior**: The parameter space $\Theta$ is finite or an open interval; the true parameter $\theta ^{*}$ is not on the boundary of $\Theta$. ^int

## For Maximum Likelihood Estimation

- [~] [[Maximum Likelihood Estimation\|MLE]] is a special [[M-Estimator]]. One can also review the regularity conditions for [[M-Estimator]]s. Here we discuss the regularity conditions for MLE specifically.

MLE considers the [[Likelihood#Log-Likelihood]] $\ell _{\theta} \coloneqq \log f(x;\theta)$ as the objective function.

### Consistency

Similar to [[M-Estimator]]s, we need a stronger [[Regularity Conditions in Estimation#^id\|identifiability]] condition and a stronger [[Law of Large Numbers\|LLN]] condition:

1. **Separation**: For any $\epsilon >0$, $\sup_{\theta:\|\theta-\theta ^*\|> \epsilon} \mathbb{E}\ell _{\theta } < \mathbb{E} \ell _{\theta ^*}$. ^sep
2. **Uniform convergence**: $\sup_{\theta} | \hat{\mathbb{E}}_{n}\ell _{\theta} - \mathbb{E} \ell _{\theta}| \overset{ P }{ \to } 0$. ^uni-conv

- [!] Throughout the note, we do not need well-specification. The expectation is taken under the data generating distribution $p_{\mathrm{data}}$, and $\theta ^* = \argmin_{\theta\in \Theta }\mathbb{E}_{p_{\mathrm{data}}}\ell _{\theta}$.

Under ([[Regularity Conditions in Estimation#^sep\|separation]]) and ([[Regularity Conditions in Estimation#^uni-conv\|uniform convergence]]), the MLE is consistent: $\hat{\theta}_{\mathrm{MLE}} \overset{ P }{ \to } \theta ^*$.



___

We list two sufficient conditions

1. **Compactness**: $\Theta$ is compact. ^compact
2. **Continuity**: $\ell _{\theta}$ and $\mathbb{E}\ell _{\theta }$ are continuous in $\theta$. ^cont
3. **Lower bound**: $\mathbb{E}[\inf_{\theta\in\Theta} \ell _{\theta }(X)] > -\infty$ ^lower

- Under ([[Regularity Conditions in Estimation#^compact\|compactness]]), ([[Regularity Conditions in Estimation#^id\|identifiability]]) is equivalent to ([[Regularity Conditions in Estimation#^sep\|separation]]).
- Under ([[Regularity Conditions in Estimation#^compact\|compactness]]), ([[Regularity Conditions in Estimation#^cont\|continuity]]) and ([[Regularity Conditions in Estimation#^lower\|lower bound]]) implies ([[Regularity Conditions in Estimation#^uni-conv\|uniform convergence]]).

### Asymptotic Normality

For asymptotic normality, we aim for the stronger result:
$$
\sqrt{ n } \left( \hat{\theta}_{\mathrm{MLE}} - \theta _{*} \right)  \overset{ d }{ \to } \mathcal{N}(0, I(\theta _{*})^{-1}),
$$
where $I(\theta)$ is the [[Fisher Information]] matrix at . For this stronger result to hold, we generally requires strong continuity conditions that allow the exchange of integration and differentiation, useful in the calculation of the [[Fisher Information]].

Beyond ([[Regularity Conditions in Estimation#^id\|identifiability]]), ([[Regularity Conditions in Estimation#^supp\|uniform support]]), ([[Regularity Conditions in Estimation#^int\|interior]]), and the [[Regularity Conditions in Estimation#Consistency]] property, we need:

1. **Smoothness**: $f(x; \theta)$ is a thrice differentiable w.r.t $\theta$, and $|\partial _{\theta}^{3}f(x; \theta)| \le h(x)$ on some neighborhood of $\theta ^{*}$ for some integrable function $h(x)$. ^smooth
2. **Exchangeability**: We can interchange differentiation w.r.t $\theta$ up to second order and integration over $x$. ^ex
3. **Invertibility**: The [[Fisher Information]] matrix is invertible in a neighborhood of $\theta ^{*}$.

The above set of regularity conditions are *sufficient* but not necessary. For example, the ([[Regularity Conditions in Estimation#^smooth\|smoothness]]) condition can be relaxed to first-order continuous differentiability with some additional conditions on the mapping $\theta \mapsto \mathbb{E} \ell _{\theta}$. And ([[Regularity Conditions in Estimation#^ex\|exchangeability]]) can be implied by ([[Regularity Conditions in Estimation#^smooth\|smoothness]]) and some additional conditions. See [[M-Estimator]] for a more general set of regularity conditions.
