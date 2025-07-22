---
{"publish":true,"title":"Multiple Hypothesis Testing","created":"2024-11-14T13:36:19","modified":"2025-07-22T19:46:34","cssclasses":"","state":"done","sup":["[[Statistics]]"],"aliases":null,"type":"output","output":{"pdf_document":{"defaults":".config/pandoc/defaults/pdf","output":"scribe.pdf","template":"statscribe.tex"}},"header-includes":["\\usepackage{pgfplots}","\\usetikzlibrary{calc}","\\PassOptionsToPackage{dvipsnames,svgnames}{xcolor}","\\usepackage[dvipsnames,svgnames]{xcolor}","\\usepgfplotslibrary{fillbetween}"],"author":"Chenyu Zhang","date":"November 14","lec-num":17,"secnumdepth":2}
---


# Multiple Hypothesis Testing

## Multiple Hypothesis Testing

Similar to the setup for single hypothesis testing, we consider data $\mathcal{X}\sim P_{\theta}$, where $\theta\in\Theta$. However, here we test multiple null hypotheses: $H_{0,i}: \theta\in\Theta _{0,i}$ for $i=1,\dots,n$. Here $n$ is the number of hypotheses, and $\Theta _{0,i}$ are general subsets of $\Theta$ that may overlap. A straightforward example is that $H_{0,i}$ is a null hypothesis about the $i$-th coordinate of $X$, and $\Theta _{0,i}$ contains parameters with their $i$-th coordinate satisfying the null condition.

> [!ex] Gaussian
>
> Consider Gaussian data $X \sim \mathcal{N}(\theta,I)$ with $\theta\in\R^{d}$. One example multiple testing problem is to test against $H_{0,i}: \theta_{i}=0$.

> [!ex] Genome-wide association studies
>
> Given some disease status variable $Y$, we want to study the association of each gene with the disease. Consider $X\in\R^{n}$ with $n \approx 20,000$, where $X _i$ is some gene. We test against $H_{0,i}: X_{i}$ is independent of $Y$.

We ask the following questions.

> [!question] Questions
>
> 1. (**Global null testing**). Is $\cap_{i}H_{0,i}$ true? For example, when the null hypothesis is $H_{0,i}: \theta _{i}=0$, the global null testing asks whether $\theta=0$ holds.
> 2. Which $H_{0,i}$ are not true? We ask this because the effects of the alternative hypotheses are often of greater interest.

Similar to [[Evaluating a Test]], different questions (tasks) lead to different evaluation metrics.
Let the output of a multiple hypothesis test be the rejection set $R \subset \{ 1,\dots,n \}$. Let $T_{i}$ be the test statistic for $H_{0,i}$, and the rejection region for $H_{0,i}$ be $\{ |T_{i}| > c_{i} \}$. That is, $i\in R \iff |T_{i}| > c_{i}$.
We consider the following two error metrics:

> [!def] Family-wise error rate (FWER)
>
> We want to return an $R$ such that $\P(R \text{ contains any null}) \le \alpha$.
> Equivalently, we want to find the critical values $\{ c_{i} \}$ such that $\P_{H_{0}}(\cup _{i=1}^{n}\{ |T_{i}| > c_{i} \})\le \alpha$.

> [!def] False discovery rate (FDR)
> We want to return an $R$ such that at most an $\alpha$-fraction of the rejected hypotheses are null.
> Equivalently, we want to control $\mathbb{E}_{H_{0}}\left[|R\cap \{ H_{0,i} \text{ is true} \}| /|R| \right] \le \alpha$. The elements in $R$ are called ==discoveries==.
>

FWER obeys the [[Uniformly Most Powerful Test\|Neyman-Pearson]] paradigm which controls the Type-I error, which can be too conservative in high-dimensional settings.
Instead, FDR restricts the scope of discoveries and consider a relative error rate

A key question in designing a multiple testing algorithm is how to combine the results of individual hypothesis tests to produce a coherent output.
[[p-value]]s serve as a convenient object to work with for this purpose. We denote $p_i$ as the p-value for $H_{0,i}$, i.e., $P_{\theta}(p_{i}\le t)\le t$ for all $\theta\in\Theta_{0,i}$ and $t\in[0,1]$. ^[Note that by definition p-values are super-uniform; but sometimes we assume they are exactly uniform to obtain tight results.]
[[Multiple Hypothesis Testing#^fig-p\|The following figure]] plots the sorted p-values for different signals. Specifically, when the null hypothesis is true, the p-values are uniformly distributed (no interesting signal); when the sorted p-values deviate significantly from the line $y=x$, it presents a clear signal.
However, this signal does not directly translate into that all p-values below a certain threshold are significant. Because even when all nulls are true, due to the high dimension, some of their p-values will be small by chance.
Thus, the observed signal suggests only a systematic departure from the null hypothesis rather than significance for each individual p-value.

![Sorted p-values.](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/mhtp.svg)
 ^fig-p



A multiple testing algorithm using p-values is of the form
$$
A: [0,1]^{n}\to 2^{\{ 1,\dots,n  \}} \cong \{ 0,1 \}^{n},\quad \vec{p}\mapsto R.
$$
One simple algorithm of this kind is the Bonferroni algorithm.

## Bonferroni Algorithm

Let $\alpha\in(0,1)$ be the family-wise error rate (FWER). Let $\{p_i\}_{i=1}^{n}$ be the p-values of individual tests. The ==Bonferroni== algorithm returns
$$
A(\vec{p}) = \{ i: p_{i}\le \alpha /n \}.
$$

> [!prop] FWER control for Bonferroni
>
> The Bonferroni algorithm controls the FWER at level $\alpha$.
>
> > [!proof]-
> >
> > By definition, the FWER is
> > $$
> > \P(\exists i: p_{i}\le \alpha /n) = \P(\cup_{i\in\mathcal{N}} \{ p_{i}\le \alpha /n \}) ,
> > $$
> > where $\mathcal{N} = \{ 1\le i\le n: H_{0,i} \text{ is true} \}$. Then, by the union bound,
> > $$
> > \P(\cup_{i\in\mathcal{N}} \{ p_{i}\le \alpha /n \}) \le \sum_{i\in\mathcal{N}} \P(p_{i}\le \alpha /n)\le \sum_{i\in\mathcal{N}} \alpha /n \le \alpha.
> > $$

We remark that the Bonferroni algorithm works for dependent tests. Nonetheless, the following example on independent Gaussian helps us understand the algorithm.

> [!ex] Gaussian
>
> Consider data $X \sim \mathcal{N}(\theta,I)$, null hypotheses $H_{0,i}: \theta_{i}=0$, and one-sided p-values $p_{i} = 1-\Phi(X_{i})$. Then, the Bonferroni algorithm rejects $H_{0,i}$ if $p_{i}\le \alpha/n$, which is equivalent to $X_{i}\ge -\Phi^{-1}(\alpha/n)$.
> See [[Multiple Hypothesis Testing#^fig-g]] for a visualization of how the Bonferroni algorithm controls the cumulative tail probability.

![The Bonferroni algorithm on Gaussian data.](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/mhtbon.svg)
^fig-g



The following proposition gives an approximation of $\Phi^{-1}(-\alpha / n)$ for any $\alpha\in(0,1)$.

> [!prop] Max-Central Limit Theorem (Fisher–Tippett–Gnedenko) ^prop-max
>
> Let $Z_{i} \overset{ \text{iid} }{ \sim }\mathcal{N}(0,1), i=1,\dots,n$. We have
> $$
> \frac{\max_{i}Z_i}{\sqrt{ 2 \log n }} \overset{ P }{ \to } 1, \quad \text{as } n\to\infty.
> $$
> Then, calculating the CDF of $\max_{i}Z_{i}$ gives
> $$
> -\Phi ^{-1}( \alpha / n ) = \sqrt{ 2 \log n } (1 + o(1)),
> $$
> where the [[Asymptotic Notation]] holds as $n\to\infty$.

[[Multiple Hypothesis Testing#^fig-a]] gives an illustration of how $\sqrt{ 2\log n }$ approximates $\Phi^{-1}(-\alpha/n)$ when $\alpha=0.05$.

![Approximation of $\Phi^{-1}(-\alpha/n)$.}](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/maxclt.png)
^fig-a

### Sparsity Connection

The previous proposition already connects the threshold of the Bonferroni algorithm to the max statistic, which is good for detecting sparse signals. The following propositions further formalize the connection between the Bonferroni algorithm and sparsity, suggesting that the Bonferroni algorithm is good at detecting sparse signals and dealing with sparse alternatives.

> [!prop]
>
> If $\theta_{1} = (1+\epsilon )\sqrt{ 2\log n }$ with $\epsilon\in(0,1)$ and $\theta _{i}=0$ for $i\ge 2$, then the Bonferroni algorithm has power
> $$
> \P(\underbrace{ 1\in R=A(X) }_{ \textup{reject }H_{0,1} }) \to 1, \text{ as } n\to\infty.
> $$

> [!pf]
>
> First, by the definition of the Bonferroni algorithm, we have
> $$
> \P(1\in R) = \P(X_{1}\ge -\Phi^{-1}(\alpha/n)) = \P(Z \ge -\Phi^{-1}(\alpha/n) - \theta_{1}),
> $$
> where $Z\sim \mathcal{N}(0,1)$. Then, by Proposition [[Multiple Hypothesis Testing#^prop-max]], we get
> $$
> \P(Z \ge -\Phi^{-1}(\alpha/n) - \theta_{1})
> = \P(Z \ge (1 + o(1) - 1 -\epsilon )\sqrt{ 2\log n }).
> $$
> Letting $n\to\infty$ gives
> $$
> \P(1\in\R) \to \P(Z\ge -\infty) = 1.
> $$

The following proposition can be obtained by a similar argument.

> [!prop]
>
> If $\theta_{1} = (1-\epsilon )\sqrt{ 2\log n }$ with $\epsilon\in(0,1)$ and $\theta _{i}=0$ for $i\ge 2$, then the Bonferroni algorithm has power approaching 0 as $n\to\infty$.

## Benjamini-Hochberg Algorithm

Let $p_{(1)}\le \dots \le p_{(n)}$ be sorted p-values. The ==Benjamini-Hochberg (BH)== algorithm returns
$$
A(\vec{p}) = \left\{  (i): (i)\le \max \left\{  i : p_{(i)}\le \frac{i}{n}\alpha  \right\}  \right\}.
$$
That is, denoting $i_{0}\coloneqq \max \{ i: p_{(i)} \le i\alpha /n \}$, we reject $i_{0}$ nulls with the smallest p-values.

Note that
$$
A(\vec{p}) \ne \left\{  (i): p_{(i)}\le \frac{i}{n}\alpha   \right\}.
$$
That is, unlike Bonferroni, BH does not reject nulls under a function graph. Instead, it first determines $i_{0}$, and then reject nulls before $i_{0}$ on the line of sorted p-values. See [[Multiple Hypothesis Testing#^fig-bh]] for an illustration: even before $i_{0}$ there are some p-values above the line $\frac{i}{n}\alpha$, they get rejected because $i_{0}$ is the last index below the line.
Also note that without the bound's dependence on $i$, the BH algorithm reduces to the Bonferroni algorithm.

![Illustration of BH algorithm.](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/mhtbh.svg)
^fig-bh



> [!prop] FDR control for BH
>
> For **independent** p-values, the BH algorithm satisfies $\mathrm{FDR} \le \alpha \cdot \# \text{true nulls} /n \le \alpha$.
> The first equality holds when the p-values are uniformly distributed for true nulls.

We first define the confusion matrix:

| \#    | Accepted | Rejected |
| ----- | -------- | -------- |
| True  | $U$      | $V$      |
| False | $T$      | $S$      |

^tbl-confusion

And we denote $N$ as the index set of true nulls; $R$ is the rejection set as before. With a slight abuse of notation, we use $N$ and $R$ to also denote the number of true nulls and the number of rejections, respectively.
Then, $U+V = N$, $T+S = n-N$, $U+T = n-R$, and $V+S = R$.

Define the indicator $V_{i} = \1_{ \{ i\in R \} }$. By definition, we have
$$
\begin{aligned}
\mathrm{FDR} =& \mathbb{E}\left[ \frac{V}{1 \vee R } \right] \\
=& \mathbb{E}\left[ \sum_{i\in N} \frac{V_{i}}{1 \vee R} \right]\\
=& \sum_{i\in N}\mathbb{E}\left[ \sum_{k=1}^{n} \frac{V_{i}}{k} \1_{\{ R=k \}} \right].
\end{aligned}
$$
Without loss of generality, we assume the p-values are already sorted.
Then, observe that if $i\in R$, there exists $j \ge i$ such that $p_{i}\le p_{j} \le \alpha j/n$.
Therefore, if we consider a virtual instance where $p_i=0$ and other p-values are unchanged, BH will return the same rejection set for this instance.^[For this virtual instance, p-values may not be sorted anymore. However, p-values that are smaller than $p_j$ in the original instance will stay below $p_{j}$].
We denote $R(p_{i}\gets 0)$ as the rejection set after setting $p_{i}$ to 0. Note that this virtual instance only depends on $p_{-i} = \{ p_{1},\dots,p_{i-1},p_{i+1},\dots,p_{n} \}$. Therefore,
$$
\begin{aligned}
\mathrm{FDR} =& \sum_{i\in N} \mathbb{E}\left[  \sum_{k=1}^{n} \frac{1}{k} V_{i} \1_{\{ R(p_{i}\gets 0)=k \}}   \right] \\
 =& \sum_{i\in N} \mathbb{E}\left[  \sum_{k=1}^{n} \frac{1}{k} \mathbb{E}\left[ V_{i} \1_{\{ R(p_{i}\gets 0)=k \}} \given p_{-i}\right]  \right] \\
 =& \sum_{i\in N} \mathbb{E}\left[  \sum_{k=1}^{n} \frac{1}{k} \P\left( p_{i}\le \alpha \frac{k}{n} \right) \1_{\{ R(p_{i}\gets 0)=k \}}   \right] \\
 \le& \sum_{i\in N} \mathbb{E}\left[  \sum_{k=1}^{n} \frac{1}{k} \cdot \alpha \frac{k}{n} \cdot \1_{\{ R(p_{i}\gets 0)=k \}}   \right] \\
 =& \sum_{i\in N} \mathbb{E}\left[ \frac{\alpha}{n} \right] \\
 =& \frac{N}{n} \alpha \\
 \le& \alpha
,\end{aligned}
$$
where the first equation is because if $V_{i}=1$, setting $p_{i}=0$ will not change the rejection set as we argued;
the second equation uses the tower property;
the third equation uses the fact that $p_{i}$ is independent of $p_{-i}$, and the indicator specifies that $i_{0} = k$;
the fourth inequality uses the fact that $p_{i}$ is super-uniform, and the equality holds when it's uniform.

## Connection Between Different Metrics

Using the [[Multiple Hypothesis Testing#^tbl-confusion\|confusion matrix]], we can express the metrics as
$$
\mathrm{FDR} = \mathbb{E}\left[ \frac{V}{1 \vee R} \right],\quad  \mathrm{FWER} = \P(V\ge 1) = \mathbb{E}[\1_{\{ V\ge 1 \}}].
$$
Since $R\ge V$, we have $\mathbb{1}_{\{ V\ge 1 \}} \ge V /(1\vee R)$, and thus $\mathrm{FDR} \le \mathrm{FWER}$.
For a single hypothesis test, or if we consider the global null, where we either reject all nulls or none, we have $V /(1\vee R) = \1_{\{ V\ne \emptyset \}} = \1_{\{ V\ge 1 \}}$. In this case, $\mathrm{FDR} = \mathrm{FWER}$.
