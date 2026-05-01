---
publish: true
title: Bayes Optimal Test
created: 2025-05-27T23:48:18
modified: 2025-05-31T20:00:05
published: 2026-01-06T20:10:17.000-05:00
tags:
  - pub-stat
state: done
sup:
  - "[[Hypothesis Testing]]"
  - "[[Bayes Optimality]]"
aliases:
type: note
---

# Bayes Optimal Test

Recall that [[Hypothesis Testing]] is a [[Statistical Decision Theory|decision-making problem]], where we make a binary decision $A(X)\in {0,1}$.
Therefore, given a loss function $L(a,\theta)$, we can define the [[Risk]] of a test, and thus derive the (Bayes) optimal test.
For a binary HT, the loss function always takes the form
$$
L(a,\theta) = \begin{cases}
0, & \text{if } (a = 0 \land \theta\in\Theta\_{0}) \lor (a = 1 \land \theta\in\Theta\_{1}) \\
c\_{\mathrm{FP}}, & \text{if } a = 1 \land  \theta \in \Theta\_{0} \\
c\_{\mathrm{FN}}, & \text{if } a = 0 \land  \theta \in \Theta\_{1} \\
\end{cases}
$$

From now on we consider a simple test.
Similarly, a Bayes prior always takes the form
$$
Q(\theta\_{0}) = \pi\_{0}\in (0,1), \quad Q(\theta\_{1}) = \pi\_{1} = 1 - \pi\_{0}.
$$
Then, the Bayes [[Risk]] is
$$
R\_{B}(A,Q) = \mathbb{E}_{\theta \sim Q} \mathbb{E}_{X \sim P\_{\theta }} \[L(A(X),\theta)]
\= \pi\_{0}P\_{\theta\_{0}}(A(X)=1) \cdot c\_{\mathrm{FP}} + \pi\_{1}P\_{\theta\_{1}}(A(X)=0) \cdot c\_{\mathrm{FN}}.
$$

When $\pi\_{0}=\pi\_{1}=1 /2$ and $c\_{\mathrm{FP}}=c\_{\mathrm{FN}}=1$, we call it the **unbiased risk**.

## Optimal Test

Suppose $P\_{\theta _{i}}$ has density $p_{{i}}$. Then, the Bayes-optimal test is given by
$$
A^{\*}(x) = \mathbb{1} { p\_{1}(x) /p\_{0}(x) > (\pi\_{0}c\_{\mathrm{FP}}) / (\pi\_{1}c\_{\mathrm{FN}}) }
\= \mathbb{1}{ p\_{1}\pi\_{1}c\_{\mathrm{FN}} > f\_{0}\pi\_{0}c\_{\mathrm{FP}} }.
$$

### Proof

We can simply calculate the posterior:
$$
p(\theta\_{0}\given x) = \frac{\pi\_{0}p\_{0}(x)}{\pi\_{0}p\_{0}(x) + \pi\_{1}p\_{1}(x)},\quad
p(\theta\_{1}\given x) = \frac{\pi\_{1}p\_{1}(x)}{\pi\_{0}p\_{0}(x) + \pi\_{1}p\_{1}(x)}.
$$
Then, the Bayes-optimal test is given by
$$
\begin{aligned}
A^{\*}(x) =& \argmin\_{a} \mathbb{E}_{\theta}\[L(a,\theta)\given x] \\
\=& \begin{cases}
1, & \text{if } p(\theta_{1}\given x) c\_{\mathrm{FN}} > p(\theta\_{0}\given x) c\_{\mathrm{FP}}\\
0, & \text{otherwise}.
\end{cases}\\
\=& \begin{cases}
1, & \text{if } p\_{1}(x) /p\_{0}(x) > (\pi\_{0} c\_{\mathrm{FP}}) / (\pi\_{1} c\_{\mathrm{FN}})\\
0, & \text{otherwise}.
\end{cases}
\end{aligned}
$$
