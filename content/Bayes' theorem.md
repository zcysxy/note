---
publish: true
created: 2021-08-17T21:58:15
modified: 2026-06-26T11:40:50
published: 2026-06-26T18:40:51.223Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
---

# Bayes' theorem

$P(A \mid B)=\frac{P(B \mid A) \cdot P(A)}{P(B)}$

Further, if $\left\{ A_i \right\}$ is a countable partition of the sample space, then

$$$
P(A_i \mid B)=\frac{P(B \mid A_i) \cdot P(A_i)}{\sum_{j} P(B \mid A_j) \cdot P(A_j)}
.$$

For [[Random Variable]]s, the Bayes' law is
$$$

P\_{X\given Y}(x\given y) = \frac{P\_{Y\given X}(y\given x) \cdot P\_{X}(x)}{P\_{Y}(y)}
\= \frac{P\_{Y\given X}(y\given x) \cdot P\_{X}(x)}{\int  , P\_{Y\given X}(y\given x') , \d P\_{X}(x')} ,

$$
where $P$ can be [[Probability Mass Function|PMF]], [[Probability Density Function|PDF]], or general [[Random Variable#Law|probability law]].
$$
