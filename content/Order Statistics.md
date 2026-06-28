---
publish: true
title: Order Statistics
created: 2024-11-03T21:31:20
modified: 2026-06-27T22:50:33
published: 2026-06-28T05:50:35.976Z
tags:
  - pub-prob
state: done
sup:
  - "[[Random Variable]]"
  - "[[Statistics]]"
aliases:
type: note
---

# Order Statistics

Given a sample $X=(X_{1},\dots,X_{n})$ with components being iid [[Random Variable]]s, the ==order statistics== of $X$ is a [[Statistic]], i.e., the sorted values of the sample: $X_{(1)}\le X_{(2)}\le \cdots \le X_{(n)}$. Order statistics are [[Sufficient Statistic]].

- Order statistics are usually considered for continuous random variables, for which samples will have distinct values with probability 1.

## Maximum and Minimum

The distributions of $X_{(1)} = \min_{i}X _i$ and $X_{(n)} = \max_{i}X _i$ are easy to compute. The [[Cumulative Distribution Function|CDF]]s are

$$
\begin{aligned}
P(X_{(n)} \le x) =& P(X_{1},\dots,X_n\le x) = F(x)^{n},\\
P(X_{(1)} \le x) =& 1 - P(X_{(1)}>x) = 1 - P(X_{1},\dots,X_n > x) = 1 - (1-F(x))^{n}.
\end{aligned}
$$

If $X_i$ is a continuous r.v. with [[Probability Density Function|Density]] $f$, we have

$$
f_{X_{(n)}}(x) = nF^{n-1}(x)f(x),\quad f_{X_{(1)}}(x) = n(1-F(x))^{n-1}f(x).
$$

For [[Uniform Distribution]], these correspond to [[Beta Distribution]]: $X_{(n)}\sim \operatorname{Beta}(n,1)$ and $X_{(1)}\sim \operatorname{Beta}(1,n)$. ^2e635f

We plot the PDF of $X_{(n)}$, $X_{(1)}$, and $X_{i}$ below

```r
f <- function(x) {
  ifelse(x < 0 | x > 1, 0, 1)
}

f_min <- function(x, n) {
  n * (1 - x)^(n - 1) * f(x)
}

f_max <- function(x, n) {
  n * x^(n - 1) * f(x)
}

x <- seq(0, 1, length.out = 1000)
plot(x, f_max(x, 10), type = "l", col = "blue", xlim=c(0,1), xlab = "x", ylab = "Density", main = "PDF of Order Statistics with n=10")
lines(x, f_min(x, 10), type = "l", col = "red")
lines(x, f(x), col = "black")
legend("topright", legend = c("Max", "Min", "i-th"), col = c("blue", "red", "black"), lty = 1)
```

## Joint Distribution

> [!error] Wrong
>
> One tempting way to compute the joint distribution of order statistics is to use [[Conditional Probability]], leading to the plausible formula:
>
> $$
> \begin{aligned}
> f_{(X_{(i)})}(x) 
> =& \sum_{\sigma\in S_{n}} f_{(X_{(i) })\given X_{\sigma }} (x\given X_{(i)} = X_{\sigma(i) }) P(X_{(i)} = X_{\sigma(i) })\\
> =& \sum_{\sigma\in S_{n}} f_{X_{\sigma}} (x) P(X_{(i)} = X_{\sigma(i) })\\
> =& n! \prod_{i=1}^{n}f(x_i) \cdot 1 /n!\\
> =& \prod_{i=1}^{n}f(x_i).
> \end{aligned}
> $$
>
> where $S_{n}$ is the set of all permutations of $n$ elements. The first, third, and fourth equalities are correct. The second equality seems correct, as given that $X_{(i)}=X_{\sigma(i)}$, the density of $f_{(X_{(i)})}$ should be the same as $f_{X_{\sigma}}$. However,
>
> $$
> P(X_{\sigma}\in B \given X_{\sigma(i)} = X_{(i)}) \ne P(X_{\sigma}\in B).
> $$
>
> An intuitive explanation is that when $X_{\sigma(1)} = X_{(1)}$, then the distribution of $X_{\sigma(1)}$ is no longer uniform, as the other $X_{\sigma(i)}$ are constrained to be larger than $X_{(1)}$.
> Therefore, $f_{X_{(i)}\given X_{\sigma(i)}=X_{(i)}}(x \given X_{\sigma(i)} = X_{(i)}) \ne f_{X_{\sigma}}(x)$.

We first work with probabilities, which are easier to work with than PDFs. For values $a_{1}<b_{1}\le a_{2}<b_{2}\le \dots a_n<b_n$, we have

$$
\left\{ (X_{(i)})\in \bigtimes_{i}  (a_i,b_i)  \right\} = \left\{ X_{1}\in(a_{1},b_{1}), X_{2}\in (a_{2},b_{2})\dots \right\} \cup \left\{ X_{2}\in(a_{1},b_{1}), X_{1}\in(a_{2},b_{2}) \right\} \cup \dots  = \bigsqcup_{\sigma\in S_n} \left\{ (X_{\sigma(i)}) \in \bigtimes_{i} (a_i,b_i) \right\}.
$$

Therefore,

$$
\begin{aligned}
P(a_{1}<X_{(1)}\le b_{1},\dots,a_{n}<X_{(n)}\le b_{n}) 
=& \sum_{\sigma\in S_n}P(a_{1}<X_{\sigma(1)}< b_{1},\dots,a_{n}<X_{\sigma(n)}< b_{n})\\
=& \sum_{\sigma\in S_n}\int_{a_{1}}^{b_{1}}\dots\int_{a_{n}}^{b_{n}} f_{X_{\sigma }}(x_1,\dots,x_n) \mathrm{d}x_1\dots \mathrm{d}x_n\\
=& \sum_{\sigma\in S_n}\int_{a_{1}}^{b_{1}}f(x_{1})\d x_{1}\dots\int_{a_{n}}^{b_{n}} f(x_n) \mathrm{d}x_n\\
=& n! \prod_{i}(F(b_i)-F(a_i)).
\end{aligned}
$$

Taking the derivative gives

$$
f_{(X_{(i)})}(x) = n! \prod_{i}f(x_i) \mathbb{1}\{ x_{1}\le \dots \le x_{n} \}.
$$

## Distribution of i-th Order Statistic

By taking the marginal distribution of $X_{(i)}$, we have

$$
f_{X_{(i)}}(x_i) = \frac{n!}{(n-i)!(i-1)!}F^{i-1}(x _i)(1-F(x _i))^{n-i}f(x _i).
$$
