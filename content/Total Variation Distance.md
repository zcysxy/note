---
{"publish":true,"aliases":["Total-Variation Metric","TV"],"created":"2022-05-28T03:34:22","modified":"2025-08-18T19:02:50","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# Total Variation Distance

The total variation distance between two probability measures $P$ and $Q$ on a [[Sigma Field\|sigma-algebra]] $\mathcal{F}$ of subsets of the sample space $\Omega$  is defined via
$$
\TV (P,Q)=\sup _{A\in {\mathcal {F}}}\left|P(A)-Q(A)\right|
$$
^var-rep

Informally, this is the largest possible difference between the probabilities that the two probability distributions can assign to the same event.

One direct implication from the definition is that if two distributions have disjoint support, i.e., $\nu(\operatorname{supp}(P)\cap \operatorname{supp}(Q))=0$, where $m$ is the measure on the sigma field, then their TV distance is 1.
For example, the TV distance between a discrete and a continuous distribution is 1, because on the common sample space, the support of the discrete distribution has measure 0.

> [!rmk]
> TV distance does not **tensorize**:
>
> $$
> \TV(P_1 \otimes P_2, Q_1 \otimes Q_2) \not\lesssim \TV(P_1, Q_1) + \TV(P_2, Q_2).
> $$
> In other words, a property in one dimension does not hold in multiple dimensions.
> Specifically, suppose we have $n$ iid samples from $P_{\theta_{1}}$. We do not have relationship
> $$
> \TV(P_{\theta_{1}}^{n}, P_{\theta_{2}}^{n}) \le n\TV(P_{\theta_{1}}, P_{\theta_{2}}).
> $$
> Therefore, in practice, it's usually more convenient to calculate other distances that tensorize, such as the [[KL Divergence]], [[Wasserstein Distance]], and [[Hellinger Distance]].

^tensorize

## L1 Norm

> [!thm]
> The TV distance is equivalent to the [[L1 Regularization\|L1 norm]].
> $$
> \TV(p,q) = \frac{1}{2}\| p-q \| _{1}.
> $$

### First Proof

Let $B = \{p \ge q\}$. Note that
$$
\begin{aligned}
\int_\Omega \def\abs#1{\left|#1\right|}\abs{p-q}\, d\nu &= \int_B (p - q) \, d\nu + \int_{\Omega \setminus B} (q- p)\, d\nu\\ &\le 2 \sup_A \abs{\int_A (p-q) \, d\nu}\\
&= 2\TV(p,q).
\end{aligned}
$$
On the other side, note first that
$$
\int_\Omega (p-q) \,d\nu = P(\Omega) - Q(\Omega) = 0
$$
and hence
$$
\int_B (p-q) \, d\nu = \int_{\Omega \setminus B} (q-p) \, d\nu
$$
Now for any $A \in \mathcal F$, we have
$$
\begin{aligned}
\abs{\int_A (p-q)\, d\nu} &= \max\left\{\int_A (p-q)\, d\nu, \int_A (q-p)\, d\nu\right\}\\
&\le\max\left\{ \int_{A\cap B} (p-q)\, d\nu, \int_{A \cap (\Omega \setminus B)} (q-p)\, d\nu\right\}\\
&\le \max\left\{ \int_{B} (p-q)\, d\nu, \int_{\Omega \setminus B} (q-p)\, d\nu\right\}\\
&= \int_B (p-q)\, d\nu\\
&= \frac 12 \int_\Omega \abs{p-q}\,d\nu
\end{aligned}
$$
Taking the supremum over $A \in \mathcal F$, gives
$$
\sup_A \abs{\int_A (p-q)\, d\nu} \le \frac 12 \int_\Omega \abs{p-q}\, d\nu
$$ 
which is the other needed inequality.

### Second Proof

Again, let $B = \{p \ge q\}$. We know that $\int_{B} (p-q) \d \nu = \frac{1}{2}\int _{\Omega}|p-q|\d \nu$. Therefore, we only need to show $\sup_A \abs{\int_A (p-q) \d \nu} = \abs{\int_B (p-q) \d \nu} = \abs{\int _{B^{C}}(p-q)\d \nu} = \int_B (p-q) \d \nu$, where the last two equalities are known.

For any $A \not\in \{ B,B^{C} \}$, we suppose $P(A) \ge Q(A)$ WLOG. Then,
$$
(P(B) - Q(B)) - (P(A) - Q(A)) = \underbrace{ \int _{B\setminus A} (p-q)\d \nu }_{ \ge 0 } - \underbrace{ \int _{A\setminus B} (p-q)\d \nu }_{ \le 0 } > 0,
$$
where the strict inequality is because two equalties cannot hold at the same time, as $A\not\in \{ B,B^{C} \}$. Then,
$$
(P(B) - Q(B)) - (P(A) - Q(A)) = \abs{\int _{B} (p-q)\d \nu} - \abs{\int _{A} (p-q)\d \nu} > 0,
$$
which further implies
$$
A\not\in\arg\sup_A \abs{\int_A (p-q) \d \nu}.
$$
Thus, $B$ and $B^{C}$ are the sets that achieve the supremum.

## Optimal Transport Interpretation

TV can be interpreted as the distance from transforming one distribution to another in an optimal transport perspective.

Formally, suppose $\TV(P_{1},P_{2}) = \gamma$. Then, there exists a joint distribution of $(X_{1},X_{2}) \sim P$ such that the marginal distributions are $P_{1}$ and $P_{2}$, and $P(X_{1}=X_{2})=1-\gamma$.

This means that we can transform $P_{1}$ to $P_{2}$ by moving $\gamma$ mass from $P_{1}$ to $P_{2}$, and the remaining mass remains unchanged.

### Proof

Suppose $P_1, P_2$ have PDF/PMF $f_1, f_2$. Then note that

$$
\begin{aligned}
\int_\mathcal{X} f_1 \wedge f_2 
=& \int_{\{f_1 \le f_2\}} f_1 + \int_{\{f_2 < f_1\}} f_2 \\
=& 1 - \int_{\{f_1 \le f_2\}^c} f_1 + 1 - \int_{\{f_2 < f_1\}^c} f_2 \\
=& 2 - \int_{\{f_1 > f_2\}} (f_1 - f_2) - \int_{\{f_2 \ge f_1\}} (f_2 - f_1) \quad \\
& - \int_{\{f_1 > f_2\}} f_2 - \int_{\{f_2 \ge f_1\}} f_1 \\
=& 2 - 2 \|P_1 - P_2\|_{\mathrm{TV}} - \int_\mathcal{X} f_1 \wedge f_2,
\end{aligned}
$$
which implies
$$
\int_x f_1 \wedge f_2 = 1 - \|P_1 - P_2\|_{\mathrm{TV}} = 1 - \gamma
$$

Now note that due to the marginal constraint,
$$
P(X_1 = X_2 = x) \le P(X_1 = x) \land P(X_2 = x),
$$
which implies
$$
\sup_{P} P(X_1 = X_2) \le \int_x f_1 \wedge f_2 = 1 - \gamma
$$

OTOH, we can define

$$
P(X_1 = x, X_2 = x) = P(X_1 = x) \land P(X_2 = x) \Rightarrow P(X_1 = X_2) = 1 - \gamma
$$

Then we can specify the other values of $P$ to make it meet the marginal constraint.



### Example

Consider the following discrete distribution:
<div class="transclude" data-embed-alias="  " data-url="Hardness of Simple Hypothesis Test Through Total Variation"> 

$$
P_{0}(X=k) = \begin{cases}
0.1, & k=0; \\
0.6, & k=1; \\
0.3, & k=2;
\end{cases}\quad P_{1}(X=k) = \begin{cases}
0.3, & k=0; \\
0.6, & k=1; \\
0.1, & k=2.
\end{cases}
$$

</div>
 <a href="Hardness of Simple Hypothesis Test Through Total Variation" class="internal transclude-src">Link to original</a>
To find the joint distribution $P$ that achieves the *optimal coupling*, the general approach is to assign
$$
P(X_{0}=X_{1}=x) = P_{0}(x)\wedge P_{1}(x),
$$
and assign the remaining mass to make the marginal distributions satisfied.

An example joint distribution is

$$
P(X_{0}=x_{0},X_{1}=x_{1}) 
= \begin{cases}
0.6, & (x_{0},x_{1})=(1,1);\\
0.1, & (x_{0},x_{1})\in \{(0,0),(2,2)\};\\
0.2, & (x_{0},x_{1})= (2,0);\\
0, & \text{otherwise}.
\end{cases}
$$
We can verify that $P(X_{0})=P_{0}$, $P(X_{1})=P_{1}$, and $P(X_{1}=X_{2}) = 0.8 = 1 -\operatorname{TV}(P_{0},P_{1})$.

## Sample Gain

It's intuitive that more iid samples help distinguish two distributions. Formally, we claim
$$
\TV(P_{0},P_{1}) \le \TV(P_{0}\times P_{0},P_{1}\times P_{1} )
$$

### First Proof

The first proof is for continuous distributions.
Let $B = \{ f_{0} > f_{1} \}$ and WLOG, $\int _{B}f_{0} + \int_{B}f_{1} \ge 1$. Note that $B\times B \subset B^{\mathrm{opt}} = \{ f_{0} \times f_{0} > f_{1} \times f_{1} \}$. Thus,
$$
\begin{aligned}
\TV(P_{0}\times P_{0},P_{1}\times P_{1}) &\ge\int _{B\times B} (f_{0}\times f_{0} - f_{1}\times f_{1}) \d x\d y \\
&= \int _{B \times B} (f_{0} + f_{1}) \d x(f_{0}-f_{1}) \d y \\
&= \TV(P_{0},P_{1}) \int _{B} (f_{0} + f_{1}) \d x \\
&\ge \TV(P_{0},P_{1}).
\end{aligned}
$$

### Second Proof

The second proof applies to general distributions.
By the set relationship, we have
$$
\begin{aligned}
\TV(P_{0},P_{1}) &= \sup_{B} \left| P_{0}(B)-P_{1}(B) \right| \\
&= \sup_{B} \left| P_{0}(B)\times P_{0}(\mathcal{X})-P_{1}(B)\times P_{1}(\mathcal{X}) \right| \\
&= \sup_{C = B \times \mathcal{X}} \left| P_{0}\times P_{0}(C)-P_{1}\times P_{1}(C) \right| \\
&\le \sup_{C } \left| P_{0}\times P_{0}(C)-P_{1}\times P_{1}(C) \right| \\
&= \TV(P_{0}\times P_{0},P_{1}\times P_{1}).
\end{aligned}
$$
