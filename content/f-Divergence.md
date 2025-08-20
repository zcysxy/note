---
{"publish":true,"title":"f-Divergence","created":"2023-05-09T21:45:32","modified":"2025-06-06T01:33:01","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# f-Divergence

For two distributions $P$ and $Q$ such that $Q>0$ whenever $P>0$, and a convex real function $f$ on $[0,+\infty)$ with $f(1) = 0$ and $f(0) = \lim_{ t \to 0+ }f(t)$, we can define
$$
D_{f}(P\|Q) = \int f\left( \frac{\d P(x)}{\d Q(x)} \right)\d  Q(x) \, \d x = \mathbb{E}_{q} f(p/q),
$$
where the second equality holds when $p$ and $q$ are densities of $P$ and $Q$ respectively. $D_{f}(P\| Q)$ is called the ==f-divergence== between $P$ and $Q$.

Intuitively, the expected convex function $\mathbb{E}_{Q}f$ *amplifies* the difference signal in the likelihood ratio $\d P/\d Q$.

## Examples

- Letting $f(x) = 1 /2|x-1|$ gives the [[Total Variation Distance]]
- Letting $f(x) = x \log x$ gives the [[KL Divergence]]
- Letting $f(x) = 1 /2(\sqrt{ t }-1)^{2}$ gives the squared [[Hellinger Distance]]
- Letting $f(x) = (x-1)^{2}$ gives the chi-square divergence

> [!rmk] TV vs. KL ^rmk-tv-kl
> - [[Total Variation Distance\|TV]] is a metric, meaning that it's symmetric and satisfies the triangle inequality; [[KL Divergence\|KL]] is not a metric, and does not satisfy these two properties.
> - [[Total Variation Distance\|TV]] does no "[[Total Variation Distance#^tensorize\|tensorize]]" but [[KL Divergence\|KL]] does. So in practice, KL, or other divergences that tensorize, is usually preferred, as the calculation boils down to calculating the divergence of individual samples.
> - [[Total Variation Distance\|TV]] is convenient for theoretical analysis, as it has a simple [[Total Variation Distance#^var-rep\|variational representation]], [[Total Variation Distance#L1 Norm\|L1 norm]] equivalence, and [[Total Variation Distance#Optimal Transport Interpretation\|optimal transportation interpretation]]. For example, TV is used to show [[Hardness of Simple Hypothesis Test Through Total Variation\|hardness results of hypothesis testing]].

## Properties

- Non-negativity: $D_{f}(P\|Q) \ge 0$, due to the convexity of $f$.
- Zero self-divergence: $D_{f}(P\|P) = 0$, due to that $f(1)=0$.
