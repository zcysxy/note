---
{"publish":true,"created":"2023-10-15T22:20:54","modified":"2025-08-04T19:44:50","cssclasses":"","type":"note","sup":["[[Probability Theory]]","[[Random Variable]]"],"state":"done"}
---


# Convergence of Random Variables

> [!tldr] Relation between Convergence Modes
>
> $$
> \begin{array}{cc}
> & X_{n} \overset{ \text{a.s.} }{ \to } X \\ 
> & \text{or}\\
> X_{n} \overset{ L_{p'} }{ \to } X \overset{ p' \ge p }{ \implies }&
> X_{n} \overset{ L^{p} }{ \to } X 
> \end{array}\ 
> \implies X_n \overset{P}{\to} X 
> \implies \begin{array}{c}
> f_{X_n} {\to} f_{X} \\ \Downarrow \\
> X_{n} \overset{d}{\to} X  \\
> \Updownarrow \\ p_{X_n} {\to} p_{X}
\end{array}
> \iff \phi _{X_n} \to \phi _X,
> $$
> where $f$, $p$, and $\phi$ are PDF (for continuous r.v.s), PMF (for discrete r.v.s), and characteristic function, respectively, and their convergences are in the sense of convergence of functions: $g_n(t) \to g(t) \ \forall t$.
>
> - [&] If $X$ follows a point-mass/[[Dirac Distribution]] $\delta _{c}$, then $X_n \overset{d}{\to} X\implies X_n\overset{P}{\longrightarrow}X$.

> [!tldr] Convergence under transformations
>
> | Mode \ Operation                                                                  | CMT (g) [^1] | Addition (+) | Multiplication (×) | Division (÷) [^2] | Joint Distribution (·,·) |
> | :-------------------------------------------------------------------------------- | :----------: | :----------: | :----------------: | :---------------: | :----------------------: |
> | $X_{n} \overset{ d }{ \to } X,\, Y_{n}\overset{ d }{ \to } c$                     |      ✓       |      ✓       |         ✓          |         ✓         |            ✓             |
> | $X_{n} \overset{ d }{ \to } X,\, Y_{n}\overset{ d }{ \to } Y$                     |      ✓       |              |                    |                   |                          |
> | $X_{n} \overset{ P }{ \to } X,\, Y_{n}\overset{ P }{ \to } Y$                     |      ✓       |      ✓       |         ✓          |         ✓         |            ✓             |
> | $X_{n} \overset{ \text{a.s.} }{ \to } X,\, Y_{n}\overset{ \text{a.s.} }{ \to } Y$ |      ✓       |      ✓       |         ✓          |         ✓         |            ✓             |
> | $X_{n} \overset{ L^{p} }{ \to } X,\, Y_{n}\overset{ L^p }{ \to } Y$               |              |      ✓       |                    |                   |            ✓             |
>
> [^1]: The function $g$ is applied on $Y_{n}$ and $Y$, and is continuous on the range of $Y$.
> [^2]: For the division operation to be well-defined, the denominator sequence and its limit must be non-zero.

As a [[Random Variable]] involves many different elements, we can define various modes of convergence for a sequence of random variables. Some definitions view random variables as [[Measurable]] functions, others as [[Random Variable#Law\|probability measures]], and some through their associated functions, such as the [[Cumulative Distribution Function\|CDF]] and the [[Characteristic Function]].

In this note, we denote a sequence of random variables as $X_{n}$.

## Almost Sure/ Strong Convergence

- Definition: We say that $X_n$ converges ==almost surely/ almost everywhere/ with probability 1/ strongly== to $X$ if
    $$
    \mathbb{P}(\lim_{n\to\infty} X_n = X) = 1
    .$$
- Notation: $X_n \overset{\text{a.s.}}{\longrightarrow} X$.
- Alternative interpretation: Viewing a random variable as a [[Random Variable#Law\|measure of events]], the above convergence is equivalent to
    $$
    \mathbb{P}(\omega\in\Omega:\lim_{n\to\infty} X_n(\omega) = X(\omega)) = 1
    ,$$
    where $\Omega$ is the [[Probability Space\|event space]].
- [!] Remark: $X_n$ are generally highly dependent for this convergence to hold.
    - [@] Partial sum -> infinite sum
    - [@] R.v.s defined as converging functions of a single underlying r.v.

## Convergence in Probability

- Definition: We say that $X_n$ converges ==in probability== to $X$ if for any $\epsilon > 0$,
    $$
    \lim_{n\to\infty} \mathbb{P}(|X_n - X| > \epsilon) = 0
    .$$
- Notation: $X_n \overset{P}{\longrightarrow} X$.
- [!] Remark: Convergence in probability has a similar interpretation as almost sure convergence, and it also generally requires  to be dependent. However, it's weaker than almost sure convergence as it's not *uniform*: different $(\epsilon,\delta)$ pairs such that $\P(|X_{n}-X| > \epsilon) \le \delta$ require different $n$.

## Convergence in Distribution/ Weak Convergence

- Definition: We say that $X_n$ converges ==in distribution/ in law/ weakly== to $X$ if
    $$
    \lim_{n\to\infty} F_{X_n}(x) = F_X(x)
    ,$$
    for all $x$ at which $F_X$ is continuous, where $F$ is a [[Cumulative Distribution Function]].
- Notation: $X_n \overset{d}{\longrightarrow} X$.
- Alternative interpretation: Weak convergence inspects the convergence of the associated CDF of a random variable sequence, and thus it's *weaker* and generally requires no dependency between $X_{n}$. It's equivalent to the convergence of the [[Characteristic Function]].
- [!] Remark: Weak convergence is consistent with the convergence of real numbers. If $X_n \overset{ \text{a.s.} }{ = } a_n\in\R$ and $X\overset{ \text{a.s.} }{ = }a\in\R$, then $X_n\overset{ d }{ \to }X \iff a_n\to a$.
    - [!] This consistency does not hold if we require $F_{X_n}\to F_{X}$ for all $x$.

### Portmanteau Lemma

Several important statements equivalent to convergence in distribution are given by the **Portmanteau Lemma**:

1. $\mathbb{E}g(X_n) \to \mathbb{E} g(X)$ for any bounded, continuous/Lipschitz function $g$.
2. $\liminf_{n \to \infty } \mathbb{E}g(X_n) \geq \mathbb{E} g(X)$ for any nonnegative and continuous function.
3. $\liminf_{n \to \infty } P(X_n\in B) \geq P(X\in B)$ for any open set $B$.
4. $\limsup_{n \to \infty } P(X_n\in B) \le P(X\in B)$ for any closed set $B$.
5. $P(X_n\in B) \to P(X\in B)$ for any continuity set[^1] $B$.
    - which is further equivalent to $\left|\int _{B} f_{X_n}(x) - f_{X}(x)\right| \, \d x\to 0$.

[^1]: A continuity set has a zero-measure boundary.

### Convergence of PDF/PMF

Suppose $X_n\overset{ d }{ \to }X$. The convergence of the associated PDF/PMF is unclear:

- It is possible for $X_n$ to be discrete and $X$ to be continuous.
    - [@] $X_n = \frac{1}{n}\operatorname{Unif}\{ 1,\dots, n \} \to \operatorname{Unif}[0,1]$.
- It is possible for $X_n$ to be continuous and $X$ to be discrete.
    - [@] $X_n = \operatorname{Unif}[0,1/n] \to 0$.
- [!] If $X_n$ and $X$ are continuous, it is possible that the [[Probability Density Function\|PDF]] $f_n \not\to f$ does not converge.
    - [@] $F_n = x + \cos(2\pi nx) /(2\pi n) \to F_{X} = x$ but $f_n = 1 - \sin(2\pi nx) \not\to f_{X} = 1$

For the other direction, we have:

- If $X_n$ and $X$ are continuous, the convergence of [[Probability Density Function\|PDF]] implies the convergence in distribution.
- If $X_n$ and $X$ are discrete, the convergence in distribution **is equivalent** to the convergence of [[Probability Mass Function\|PMF]].

### Convergence of Characteristic Functions

Convergence in distribution is equivalent to the convergence of [[Characteristic Function]]s:
$$
\lim_{n\to\infty} \phi_{X_n}(t) = \phi_X(t), \quad \forall t
$$

## Convergence in $L^p$ Norm

- Definition: We say that $X_n$ converges ==in $L^p$ norm/ in $p$th mean== to $X$ if
    $$
    \lim_{n\to\infty} \mathbb{E}[|X_n - X|^p] = 0
    .$$
- Notation: $X_n \overset{L^p}{\longrightarrow} X$.
- [!] Remark: For $p_{1} > p_{2} \ge 1$, we have $X_n \overset{L_{p_{1}}}{\longrightarrow} X \implies X_n \overset{L_{p_{2}}}{\longrightarrow} X$, but not the other way around.

## Convergence under Transformations

### Continuous Mapping Theorem

Let $X_n$ be a sequence of random variables that converges **almost surely/ in probability/ in distribution** to $X$. Let $g$ be a continuous function. Then $g(X_n)$ converges to $g(X)$.

- [!] The continuous mapping theorem does not apply to convergence in  norm.

Further, if $g$ is continuous at $c$ and $X_n \overset{ P }{ \to } c$, then $g(X_n) \overset{ P }{ \to } g(c)$. $g$ need not be continuous in this case.

### Slutsky's Theorem

Let $X_n$ and $Y_n$ be sequences of random variables that converge **in distribution** to $X$ and $c$ respectively, where $c$ is a **constant**. Then
$$
\mathcal{B} (X_n,Y_n) \overset{ d }{ \to }  \mathcal{B}(X,c),
$$
where $\mathcal{B} =\{ +, \times, \div, (\cdot,\cdot ) \}$ is a set of binary operations. For $\div$ to be defined, $Y_n,c$ must be nonzero.

- [!] The theorem also holds for convergence in probability.

For almost sure convergence, convergence in probability, and in $L^p$ norm, we have stronger results:

Suppose $X_n \overset{ \text{a.s}/P }{ \to } X$ and $Y_n \overset{ \text{a.s}/P }{ \to } Y$. Then
$$
\mathcal{B} (X_n,Y_n) \overset{ \text{a.s.} /P }{ \to }  \mathcal{B}(X,Y).
$$

Suppose $X_n \overset{ L^p }{ \to } X$ and $Y_n \overset{ L^p }{ \to } Y$. Then
$$
X_n + Y_n \overset{ L^p }{ \to } X + Y.
$$
Note that we no longer restrict $Y_n$ to converge to a constant.
