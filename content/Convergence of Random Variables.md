---
publish: true
created: 2023-10-15T22:20:54
modified: 2025-08-04T23:49:53
published: 2026-01-06T20:10:18.038-05:00
tags:
  - pub-stat
type: note
sup:
  - "[[Probability]]"
  - "[[Random Variable]]"
state: done
---

# Convergence of Random Variables

> [!tldr] Relation between Convergence Modes
>
> $$
> \begin{array}{cc}
> & X\_{n} \overset{ \text{a.s.} }{ \to } X \\
> & \text{or}\\
> X\_{n} \overset{ L\_{p'} }{ \to } X \overset{ p' \ge p }{ \implies }&
> X\_{n} \overset{ L^{p} }{ \to } X
> \end{array}\\
> \implies X\_n \overset{P}{\to} X
> \implies \begin{array}{c}
> f\_{X\_n} {\to} f\_{X} \ \Downarrow \\
> X\_{n} \overset{d}{\to} X  \\
> \Updownarrow \ p\_{X\_n} {\to} p\_{X}
> \end{array}
> \iff \phi \_{X\_n} \to \phi \_X,
> $$
> where $f$, $p$, and $\phi$ are PDF (for continuous r.v.s), PMF (for discrete r.v.s), and characteristic function, respectively, and their convergences are in the sense of convergence of functions: $g\_n(t) \to g(t) \ \forall t$.
>
> - If $X$ follows a point-mass/[[Dirac Distribution]] $\delta \_{c}$, then $X\_n \overset{d}{\to} X\implies X\_n\overset{P}{\longrightarrow}X$.

> [!tldr] Convergence under transformations
>
> | Mode \ Operation                                                                  | CMT (g) [^1] | Addition (+) | Multiplication (×) | Division (÷) [^2] | Joint Distribution (·,·) |
> | :-------------------------------------------------------------------------------- | :----------: | :----------: | :----------------: | :---------------: | :----------------------: |
> | $X\_{n} \overset{ d }{ \to } X,, Y\_{n}\overset{ d }{ \to } c$                     |      ✓       |      ✓       |         ✓          |         ✓         |            ✓             |
> | $X\_{n} \overset{ d }{ \to } X,, Y\_{n}\overset{ d }{ \to } Y$                     |      ✓       |              |                    |                   |                          |
> | $X\_{n} \overset{ P }{ \to } X,, Y\_{n}\overset{ P }{ \to } Y$                     |      ✓       |      ✓       |         ✓          |         ✓         |            ✓             |
> | $X\_{n} \overset{ \text{a.s.} }{ \to } X,, Y\_{n}\overset{ \text{a.s.} }{ \to } Y$ |      ✓       |      ✓       |         ✓          |         ✓         |            ✓             |
> | $X\_{n} \overset{ L^{p} }{ \to } X,, Y\_{n}\overset{ L^p }{ \to } Y$               |              |      ✓       |                    |                   |            ✓             |
>
> [^1]: The function $g$ is applied on $Y\_{n}$ and $Y$, and is continuous on the range of $Y$.
> [^2]: For the division operation to be well-defined, the denominator sequence and its limit must be non-zero.

As a [[Random Variable]] involves many different elements, we can define various modes of convergence for a sequence of random variables. Some definitions view random variables as [[Measurable]] functions, others as [[Random Variable#Law|probability measures]], and some through their associated functions, such as the [[Cumulative Distribution Function|CDF]] and the [[Characteristic Function]].

In this note, we denote a sequence of random variables as $X\_{n}$.

## Almost Sure/ Strong Convergence

- Definition: We say that $X\_n$ converges ==almost surely/ almost everywhere/ with probability 1/ strongly== to $X$ if
  $$
  \mathbb{P}(\lim\_{n\to\infty} X\_n = X) = 1
  .$$
- Notation: $X\_n \overset{\text{a.s.}}{\longrightarrow} X$.
- Alternative interpretation: Viewing a random variable as a [[Random Variable#Law|measure of events]], the above convergence is equivalent to
  $$
  \mathbb{P}(\omega\in\Omega:\lim\_{n\to\infty} X\_n(\omega) = X(\omega)) = 1,
  $$
  where $\Omega$ is the [[Probability Space|event space]].
- Remark: $X\_n$ are generally highly dependent for this convergence to hold.
  - Partial sum -> infinite sum
  - R.v.s defined as converging functions of a single underlying r.v.

## Convergence in Probability

- Definition: We say that $X\_n$ converges ==in probability== to $X$ if for any $\epsilon > 0$,
  $$
  \lim\_{n\to\infty} \mathbb{P}(|X\_n - X| > \epsilon) = 0
  .$$
- Notation: $X\_n \overset{P}{\longrightarrow} X$.
- Remark: Convergence in probability has a similar interpretation as almost sure convergence, and it also generally requires  to be dependent. However, it's weaker than almost sure convergence as it's not _uniform_: different $(\epsilon,\delta)$ pairs such that $\P(|X\_{n}-X| > \epsilon) \le \delta$ require different $n$.

## Convergence in Distribution/ Weak Convergence

- Definition: We say that $X\_n$ converges ==in distribution/ in law/ weakly== to $X$ if
  $$
  \lim\_{n\to\infty} F\_{X\_n}(x) = F\_X(x)
  ,$$
  for all $x$ at which $F\_X$ is continuous, where $F$ is a [[Cumulative Distribution Function]].
- Notation: $X\_n \overset{d}{\longrightarrow} X$.
- Alternative interpretation: Weak convergence inspects the convergence of the associated CDF of a random variable sequence, and thus it's _weaker_ and generally requires no dependency between $X\_{n}$. It's equivalent to the convergence of the [[Characteristic Function]].
- Remark: Weak convergence is consistent with the convergence of real numbers. If $X\_n \overset{ \text{a.s.} }{ = } a\_n\in\R$ and $X\overset{ \text{a.s.} }{ = }a\in\R$, then $X\_n\overset{ d }{ \to }X \iff a\_n\to a$.
  - This consistency does not hold if we require $F\_{X\_n}\to F\_{X}$ for all $x$.

### Portmanteau Lemma

Several important statements equivalent to convergence in distribution are given by the **Portmanteau Lemma**:

1. $\mathbb{E}g(X\_n) \to \mathbb{E} g(X)$ for any bounded, continuous/Lipschitz function $g$.
2. $\liminf\_{n \to \infty } \mathbb{E}g(X\_n) \geq \mathbb{E} g(X)$ for any nonnegative and continuous function.
3. $\liminf\_{n \to \infty } P(X\_n\in B) \geq P(X\in B)$ for any open set $B$.
4. $\limsup\_{n \to \infty } P(X\_n\in B) \le P(X\in B)$ for any closed set $B$.
5. $P(X\_n\in B) \to P(X\in B)$ for any continuity set[^3] $B$.
   - which is further equivalent to $\left|\int _{B} f_{X\_n}(x) - f\_{X}(x)\right| , \d x\to 0$.

[^3]: A continuity set has a zero-measure boundary.

### Convergence of PDF/PMF

Suppose $X\_n\overset{ d }{ \to }X$. The convergence of the associated PDF/PMF is unclear:

- It is possible for $X\_n$ to be discrete and $X$ to be continuous.
  - $X\_n = \frac{1}{n}\operatorname{Unif}{ 1,\dots, n } \to \operatorname{Unif}\[0,1]$.
- It is possible for $X\_n$ to be continuous and $X$ to be discrete.
  - $X\_n = \operatorname{Unif}\[0,1/n] \to 0$.
- If $X\_n$ and $X$ are continuous, it is possible that the [[Probability Density Function|PDF]] $f\_n \not\to f$ does not converge.
  - $F\_n = x + \cos(2\pi nx) /(2\pi n) \to F\_{X} = x$ but $f\_n = 1 - \sin(2\pi nx) \not\to f\_{X} = 1$

For the other direction, we have:

- If $X\_n$ and $X$ are continuous, the convergence of [[Probability Density Function|PDF]] implies the convergence in distribution.
- If $X\_n$ and $X$ are discrete, the convergence in distribution **is equivalent** to the convergence of [[Probability Mass Function|PMF]].

### Convergence of Characteristic Functions

Convergence in distribution is equivalent to the convergence of [[Characteristic Function]]s:
$$
\lim\_{n\to\infty} \phi\_{X\_n}(t) = \phi\_X(t), \quad \forall t
$$

## Convergence in $L^p$ Norm

- Definition: We say that $X\_n$ converges ==in $L^p$ norm/ in $p$th mean== to $X$ if
  $$
  \lim\_{n\to\infty} \mathbb{E}\[|X\_n - X|^p] = 0
  .$$
- Notation: $X\_n \overset{L^p}{\longrightarrow} X$.
- Remark: For $p\_{1} > p\_{2} \ge 1$, we have $X\_n \overset{L\_{p\_{1}}}{\longrightarrow} X \implies X\_n \overset{L\_{p\_{2}}}{\longrightarrow} X$, but not the other way around.

## Convergence under Transformations

### Continuous Mapping Theorem

Let $X\_n$ be a sequence of random variables that converges **almost surely/ in probability/ in distribution** to $X$. Let $g$ be a continuous function. Then $g(X\_n)$ converges to $g(X)$.

- The continuous mapping theorem does not apply to convergence in  norm.

Further, if $g$ is continuous at $c$ and $X\_n \overset{ P }{ \to } c$, then $g(X\_n) \overset{ P }{ \to } g(c)$. $g$ need not be continuous in this case.

### Slutsky's Theorem

Let $X\_n$ and $Y\_n$ be sequences of random variables that converge **in distribution** to $X$ and $c$ respectively, where $c$ is a **constant**. Then
$$
\mathcal{B} (X\_n,Y\_n) \overset{ d }{ \to }  \mathcal{B}(X,c),
$$
where $\mathcal{B} ={ +, \times, \div, (\cdot,\cdot ) }$ is a set of binary operations. For $\div$ to be defined, $Y\_n,c$ must be nonzero.

- The theorem also holds for convergence in probability.

For almost sure convergence, convergence in probability, and in $L^p$ norm, we have stronger results:

Suppose $X\_n \overset{ \text{a.s}/P }{ \to } X$ and $Y\_n \overset{ \text{a.s}/P }{ \to } Y$. Then
$$
\mathcal{B} (X\_n,Y\_n) \overset{ \text{a.s.} /P }{ \to }  \mathcal{B}(X,Y).
$$

Suppose $X\_n \overset{ L^p }{ \to } X$ and $Y\_n \overset{ L^p }{ \to } Y$. Then
$$
X\_n + Y\_n \overset{ L^p }{ \to } X + Y.
$$
Note that we no longer restrict $Y\_n$ to converge to a constant.

## Sum of IID Random Variables

A good example to illustrate different modes of convergence is the sum, or average, of iid random variables. Suppose $X\_{i}$ are iid with finite mean $\mu$ and variance $\sigma^{2}$. Let $\overline{X}_{n} = \sum_{i=1}^{n}X\_{i}$. Then, the following theorems claim that $\overline{X}\_n$ converges to $\mu$,

- in distribution by [[Central Limit Theorem]];
- in probability by [[Law of Large Numbers|Weak Law of Large Numbers]];
- and almost surely by [[Law of Large Numbers|Strong Law of Large Numbers]].
