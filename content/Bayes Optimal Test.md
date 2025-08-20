---
{"publish":true,"title":"Bayes Optimal Test","created":"2025-05-27T23:48:18","modified":"2025-05-31T20:00:05","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Hypothesis Testing]]","[[Bayes Optimality]]"],"aliases":null,"type":"note"}
---


# Bayes Optimal Test

Recall that [[Hypothesis Testing]] is a [[Statistical Decision Theory\|decision-making problem]], where we make a binary decision $A(X)\in \{0,1\}$.
Therefore, given a loss function $L(a,\theta)$, we can define the [[Risk]] of a test, and thus derive the (Bayes) optimal test.
For a binary HT, the loss function always takes the form
$$
L(a,\theta) = \begin{cases}
0, & \text{if } (a = 0 \land \theta\in\Theta_{0}) \lor (a = 1 \land \theta\in\Theta_{1}) \\
c_{\mathrm{FP}}, & \text{if } a = 1 \land  \theta \in \Theta_{0} \\
c_{\mathrm{FN}}, & \text{if } a = 0 \land  \theta \in \Theta_{1} \\
\end{cases}
$$

From now on we consider a simple test.
Similarly, a Bayes prior always takes the form
$$
Q(\theta_{0}) = \pi_{0}\in (0,1), \quad Q(\theta_{1}) = \pi_{1} = 1 - \pi_{0}.
$$
Then, the Bayes [[Risk]] is
$$
R_{B}(A,Q) = \mathbb{E}_{\theta \sim Q} \mathbb{E}_{X \sim P_{\theta }} [L(A(X),\theta)]
= \pi_{0}P_{\theta_{0}}(A(X)=1) \cdot c_{\mathrm{FP}} + \pi_{1}P_{\theta_{1}}(A(X)=0) \cdot c_{\mathrm{FN}}.
$$

When $\pi_{0}=\pi_{1}=1 /2$ and $c_{\mathrm{FP}}=c_{\mathrm{FN}}=1$, we call it the **unbiased risk**.

## Optimal Test

Suppose $P_{\theta _{i}}$ has density $p_{{i}}$. Then, the Bayes-optimal test is given by
$$
A^{*}(x) = \mathbb{1} \{ p_{1}(x) /p_{0}(x) > (\pi_{0}c_{\mathrm{FP}}) / (\pi_{1}c_{\mathrm{FN}}) \}
= \mathbb{1}\{ p_{1}\pi_{1}c_{\mathrm{FN}} > f_{0}\pi_{0}c_{\mathrm{FP}} \}.
$$

### Proof

We can simply calculate the posterior:
$$
p(\theta_{0}\given x) = \frac{\pi_{0}p_{0}(x)}{\pi_{0}p_{0}(x) + \pi_{1}p_{1}(x)},\quad
p(\theta_{1}\given x) = \frac{\pi_{1}p_{1}(x)}{\pi_{0}p_{0}(x) + \pi_{1}p_{1}(x)}.
$$
Then, the Bayes-optimal test is given by
$$
\begin{aligned}
A^{*}(x) =& \argmin_{a} \mathbb{E}_{\theta}[L(a,\theta)\given x] \\
=& \begin{cases}
1, & \text{if } p(\theta_{1}\given x) c_{\mathrm{FN}} > p(\theta_{0}\given x) c_{\mathrm{FP}}\\
0, & \text{otherwise}.
\end{cases}\\
=& \begin{cases}
1, & \text{if } p_{1}(x) /p_{0}(x) > (\pi_{0} c_{\mathrm{FP}}) / (\pi_{1} c_{\mathrm{FN}})\\
0, & \text{otherwise}.
\end{cases}
\end{aligned}
$$
