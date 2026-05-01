---
publish: true
aliases:
  - Total-Variation Metric
  - TV
created: 2022-05-28T03:34:22
modified: 2025-08-18T19:02:50
published: 2026-01-06T20:10:18.000-05:00
tags:
  - pub-stat
type: note
sup:
  - "[[Probability]]"
state: done
---

# Total Variation Distance

The total variation distance between two probability measures $P$ and $Q$ on a [[Sigma Field|sigma-algebra]] $\mathcal{F}$ of subsets of the sample space $\Omega$  is defined via
$$
\TV (P,Q)=\sup \_{A\in {\mathcal {F}}}\left|P(A)-Q(A)\right|
$$
^var-rep

Informally, this is the largest possible difference between the probabilities that the two probability distributions can assign to the same event.

One direct implication from the definition is that if two distributions have disjoint support, i.e., $\nu(\operatorname{supp}(P)\cap \operatorname{supp}(Q))=0$, where $m$ is the measure on the sigma field, then their TV distance is 1.
For example, the TV distance between a discrete and a continuous distribution is 1, because on the common sample space, the support of the discrete distribution has measure 0.

> [!rmk]
> TV distance does not **tensorize**:
>
> $$
> \TV(P\_1 \otimes P\_2, Q\_1 \otimes Q\_2) \not\lesssim \TV(P\_1, Q\_1) + \TV(P\_2, Q\_2).
> $$
> In other words, a property in one dimension does not hold in multiple dimensions.
> Specifically, suppose we have $n$ iid samples from $P\_{\theta\_{1}}$. We do not have relationship
> $$
> \TV(P\_{\theta\_{1}}^{n}, P\_{\theta\_{2}}^{n}) \le n\TV(P\_{\theta\_{1}}, P\_{\theta\_{2}}).
> $$
> Therefore, in practice, it's usually more convenient to calculate other distances that tensorize, such as the [[KL Divergence]], [[Wasserstein Distance]], and [[Hellinger Distance]].

^tensorize

## L1 Norm

> [!thm]
> The TV distance is equivalent to the [[L1 Regularization|L1 norm]].
> $$
> \TV(p,q) = \frac{1}{2}| p-q | \_{1}.
> $$

### First Proof

Let $B = {p \ge q}$. Note that
$$
\begin{aligned}
\int\_\Omega \def\abs#1{\left|#1\right|}\abs{p-q}, d\nu &= \int\_B (p - q) , d\nu + \int\_{\Omega \setminus B} (q- p), d\nu\ &\le 2 \sup\_A \abs{\int\_A (p-q) , d\nu}\\
&= 2\TV(p,q).
\end{aligned}
$$
On the other side, note first that
$$
\int\_\Omega (p-q) ,d\nu = P(\Omega) - Q(\Omega) = 0
$$
and hence
$$
\int\_B (p-q) , d\nu = \int\_{\Omega \setminus B} (q-p) , d\nu
$$
Now for any $A \in \mathcal F$, we have
$$
\begin{aligned}
\abs{\int\_A (p-q), d\nu} &= \max\left{\int\_A (p-q), d\nu, \int\_A (q-p), d\nu\right}\\
&\le\max\left{ \int\_{A\cap B} (p-q), d\nu, \int\_{A \cap (\Omega \setminus B)} (q-p), d\nu\right}\\
&\le \max\left{ \int\_{B} (p-q), d\nu, \int\_{\Omega \setminus B} (q-p), d\nu\right}\\
&= \int\_B (p-q), d\nu\\
&= \frac 12 \int\_\Omega \abs{p-q},d\nu
\end{aligned}
$$
Taking the supremum over $A \in \mathcal F$, gives
$$
\sup\_A \abs{\int\_A (p-q), d\nu} \le \frac 12 \int\_\Omega \abs{p-q}, d\nu
$$
which is the other needed inequality.

### Second Proof

Again, let $B = {p \ge q}$. We know that $\int\_{B} (p-q) \d \nu = \frac{1}{2}\int \_{\Omega}|p-q|\d \nu$. Therefore, we only need to show $\sup\_A \abs{\int\_A (p-q) \d \nu} = \abs{\int\_B (p-q) \d \nu} = \abs{\int \_{B^{C}}(p-q)\d \nu} = \int\_B (p-q) \d \nu$, where the last two equalities are known.

For any $A \not\in { B,B^{C} }$, we suppose $P(A) \ge Q(A)$ WLOG. Then,
$$
(P(B) - Q(B)) - (P(A) - Q(A)) = \underbrace{ \int _{B\setminus A} (p-q)\d \nu }_{ \ge 0 } - \underbrace{ \int _{A\setminus B} (p-q)\d \nu }_{ \le 0 } > 0,
$$
where the strict inequality is because two equalties cannot hold at the same time, as $A\not\in { B,B^{C} }$. Then,
$$
(P(B) - Q(B)) - (P(A) - Q(A)) = \abs{\int \_{B} (p-q)\d \nu} - \abs{\int \_{A} (p-q)\d \nu} > 0,
$$
which further implies
$$
A\not\in\arg\sup\_A \abs{\int\_A (p-q) \d \nu}.
$$
Thus, $B$ and $B^{C}$ are the sets that achieve the supremum.

## Optimal Transport Interpretation

TV can be interpreted as the distance from transforming one distribution to another in an optimal transport perspective.

Formally, suppose $\TV(P\_{1},P\_{2}) = \gamma$. Then, there exists a joint distribution of $(X\_{1},X\_{2}) \sim P$ such that the marginal distributions are $P\_{1}$ and $P\_{2}$, and $P(X\_{1}=X\_{2})=1-\gamma$.

This means that we can transform $P\_{1}$ to $P\_{2}$ by moving $\gamma$ mass from $P\_{1}$ to $P\_{2}$, and the remaining mass remains unchanged.

### Proof

Suppose $P\_1, P\_2$ have PDF/PMF $f\_1, f\_2$. Then note that

$$
\begin{aligned}
\int\_\mathcal{X} f\_1 \wedge f\_2
\=& \int\_{{f\_1 \le f\_2}} f\_1 + \int\_{{f\_2 < f\_1}} f\_2 \\
\=& 1 - \int\_{{f\_1 \le f\_2}^c} f\_1 + 1 - \int\_{{f\_2 < f\_1}^c} f\_2 \\
\=& 2 - \int\_{{f\_1 > f\_2}} (f\_1 - f\_2) - \int\_{{f\_2 \ge f\_1}} (f\_2 - f\_1) \quad \\
& - \int\_{{f\_1 > f\_2}} f\_2 - \int\_{{f\_2 \ge f\_1}} f\_1 \\
\=& 2 - 2 |P\_1 - P\_2|_{\mathrm{TV}} - \int_\mathcal{X} f\_1 \wedge f\_2,
\end{aligned}
$$
which implies
$$
\int\_x f\_1 \wedge f\_2 = 1 - |P\_1 - P\_2|\_{\mathrm{TV}} = 1 - \gamma
$$

Now note that due to the marginal constraint,
$$
P(X\_1 = X\_2 = x) \le P(X\_1 = x) \land P(X\_2 = x),
$$
which implies
$$
\sup\_{P} P(X\_1 = X\_2) \le \int\_x f\_1 \wedge f\_2 = 1 - \gamma
$$

OTOH, we can define

$$
P(X\_1 = x, X\_2 = x) = P(X\_1 = x) \land P(X\_2 = x) \Rightarrow P(X\_1 = X\_2) = 1 - \gamma
$$

Then we can specify the other values of $P$ to make it meet the marginal constraint.

### Example

Consider the following discrete distribution:
![[Hardness of Simple Hypothesis Test Through Total Variation#^ex]]
To find the joint distribution $P$ that achieves the _optimal coupling_, the general approach is to assign
$$
P(X\_{0}=X\_{1}=x) = P\_{0}(x)\wedge P\_{1}(x),
$$
and assign the remaining mass to make the marginal distributions satisfied.

An example joint distribution is

$$
P(X\_{0}=x\_{0},X\_{1}=x\_{1})
\= \begin{cases}
0.6, & (x\_{0},x\_{1})=(1,1);\\
0.1, & (x\_{0},x\_{1})\in {(0,0),(2,2)};\\
0.2, & (x\_{0},x\_{1})= (2,0);\\
0, & \text{otherwise}.
\end{cases}
$$
We can verify that $P(X\_{0})=P\_{0}$, $P(X\_{1})=P\_{1}$, and $P(X\_{1}=X\_{2}) = 0.8 = 1 -\operatorname{TV}(P\_{0},P\_{1})$.

## Sample Gain

It's intuitive that more iid samples help distinguish two distributions. Formally, we claim
$$
\TV(P\_{0},P\_{1}) \le \TV(P\_{0}\times P\_{0},P\_{1}\times P\_{1} )
$$

### First Proof

The first proof is for continuous distributions.
Let $B = { f\_{0} > f\_{1} }$ and WLOG, $\int _{B}f_{0} + \int\_{B}f\_{1} \ge 1$. Note that $B\times B \subset B^{\mathrm{opt}} = { f\_{0} \times f\_{0} > f\_{1} \times f\_{1} }$. Thus,
$$
\begin{aligned}
\TV(P\_{0}\times P\_{0},P\_{1}\times P\_{1}) &\ge\int _{B\times B} (f_{0}\times f\_{0} - f\_{1}\times f\_{1}) \d x\d y \\
&= \int _{B \times B} (f_{0} + f\_{1}) \d x(f\_{0}-f\_{1}) \d y \\
&= \TV(P\_{0},P\_{1}) \int _{B} (f_{0} + f\_{1}) \d x \\
&\ge \TV(P\_{0},P\_{1}).
\end{aligned}
$$

### Second Proof

The second proof applies to general distributions.
By the set relationship, we have
$$
\begin{aligned}
\TV(P\_{0},P\_{1}) &= \sup\_{B} \left| P\_{0}(B)-P\_{1}(B) \right| \\
&= \sup\_{B} \left| P\_{0}(B)\times P\_{0}(\mathcal{X})-P\_{1}(B)\times P\_{1}(\mathcal{X}) \right| \\
&= \sup\_{C = B \times \mathcal{X}} \left| P\_{0}\times P\_{0}(C)-P\_{1}\times P\_{1}(C) \right| \\
&\le \sup\_{C } \left| P\_{0}\times P\_{0}(C)-P\_{1}\times P\_{1}(C) \right| \\
&= \TV(P\_{0}\times P\_{0},P\_{1}\times P\_{1}).
\end{aligned}
$$
