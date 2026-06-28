---
publish: true
title: Abstract Integration
created: 2024-11-03T22:06:59
modified: 2024-11-04T01:58:51
published: 2026-06-28T05:28:09.229Z
tags:
  - pub-prob
state: done
sup:
  - "[[Measure Theory]]"
  - "[[Probability]]"
  - "[[Real Analysis]]"
aliases:
type: note
---

# Abstract Integration

On a [[Measure]] space $(\Omega,\mathcal{F},\mu)$, we want to define the integration of a function $f:\Omega\to \R$ denoted as

$$
\int _{\Omega}f \, \d \mu.
$$

- Throughout this note, we use convention $0\cdot \infty = 0$.

When the integral is well-defined, we have the following properties:

| General Measure                                                                  | Probability Measure                                                                         |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| $\int_{\Omega}\mathbb{1}_{B}\d \mu = \mu(b)$                                     | $\mathbb{E}[\mathbb{1}_{B}] = P(B)$                                                         |
| $f \ge 0 \implies \int g\d \mu \ge 0$                                            | $X \ge 0 \implies \mathbb{E}[X] \ge 0$                                                      |
| $f = 0\text{ a.e. }\implies \int f\d \mu = 0$                                    | $X = 0\text{ a.s.} \implies \mathbb{E}[X] = 0$                                              |
| $f\le g \text{ a.e. } \implies \int f\d \mu\le \int g \d \mu$                    | $X\le Y \text{ a.s. } \implies \mathbb{E}[X]\le \mathbb{E}[Y]$                              |
| $f= g \text{ a.e. } \implies \int f\d \mu= \int g \d \mu$                        | $X= Y \text{ a.s. } \implies \mathbb{E}[X]= \mathbb{E}[Y]$                                  |
| $f\ge 0 \land \int f\d \mu=0\implies f=0 \text{ a.e.}$                           | $X\ge 0 \land \mathbb{E}[X]=0\implies X=0 \text{ a.s.}$                                     |
| $\int (f+g)\d \mu = \int f\d \mu+\int g\d \mu$                                   | $\mathbb{E}[X+Y] = \mathbb{E}[X]+\mathbb{E}[Y]$                                             |
| $\int(a f)\d \mu = a \int f\d \mu$                                               | $\mathbb{E}[aX] = a\mathbb{E}[X]$                                                           |
| $0\le f_{n}\uparrow f \text{ a.e. } \implies \int f_n\d \mu\uparrow\int f\d \mu$ | $0\le X_{n}\uparrow X \text{ a.s. } \implies \mathbb{E}[X_n]\uparrow\mathbb{E}[X]$          |
| $f\ge 0\implies\nu(B)\coloneqq\int_Bf\d \mu$ is a measure                        | $f\ge 0 \land \int f\d P = 1\implies \nu(B)\coloneqq\int_{B}f\d P$ is a probability measure |

^tab-prop

To define such an integral, we follow a _standard program_: "simple -> nonnegative -> general" approach.

## Integral of Simple Functions

$g\colon \Omega\to \R$ is called simple if it is measurable and has a finite range. The canonical representation of a simple function is

$$
g(\omega) = \sum_{i=1}^{n}a_i\mathbb{1}_{A_i}(\omega),
$$

where $a_i\in \R$ are distinct and $A_i = \left\{ \omega : g(\omega) = a_i \right\}\in \mathcal{F}$ form a disjoint partition of $\Omega$.
A simple function have have multiple representations, but the canonical representation is unique.

For a simple function $g$, we define its integral as

$$
\int g\d \mu = \sum_{i=1}^{n}a_i\mu(A_i).
$$

We can verify that:

- This definition is well-defined, i.e., it does not depend on the representation of $g$.
- The sum of two simple functions is simple.
- All properties in [[#^tab-prop]].

## Integral of Nonnegative Functions

For a nonnegative (extended-valued) measurable function $g$, denote $S(g)$ the set of all nonnegative simple functions $q$ such that $q\le g$, and define

$$
\int g \, \d \mu  = \sup_{q\in S(g)} \int q \, \d \mu. 
$$

We can verify that this definition satisfies all properties in [[#^tab-prop]]; we will provide some proofs below.

### Zero Variation

We prove that $g\ge 0 \land\int g \, \d \mu=0$ implies $g = 0$ a.e.
We will show contradiction if $g\neq 0$ on a set of positive measure. Let $B \coloneqq \left\{ \omega : g(\omega)>0 \right\}$. Then, $\mu(B)>0$.
Let $B_n \coloneqq \left\{ \omega : g(\omega) > 1 /n\right\}$. Then $B_n\uparrow B$. Thus $\mu(B_n)\uparrow \mu(B)$, which indicates that $\mu(B_{n_0})>0$ for some $n_0$. We have

$$
\int g \d \mu \ge \int \mathbb{1}_{B_{n_0}}g\d \mu \ge \frac{1}{n_0}\mu(B_{n_0})>0.
$$

### Monotone Convergence Theorem

We first prove the case where $g_n\uparrow q$ and $q$ is a simple function ($g_n$ are not necessarily simple). Suppose $q$ has the canonical representation $q = \sum_{i=1}^{m}a_i\mathbb{1}_{A_i}$.
If $\int q\d \mu=\infty$, then there exists $i$ such that $a_i>0$ and $\mu(A_i)=\infty$. Let $B_n = \left\{ \omega\in A_i : g_n(\omega) > a_i /2 \right\}$. Since $q_n\uparrow q$, $B_n\uparrow A_i$. Then we have

$$
\lim_{n \to \infty}\int g_n\d \mu \ge \lim_{n \to \infty}\int \mathbb{1}_{B_n}g_n\d \mu \ge \lim_{n \to \infty}\frac{a_i}{2}\mu(B_n) = \frac{a_i}{2}\mu(A_i) = \infty.
$$

If $\int q\d \mu<\infty$, then $\mu(A_i)<\infty$ for all $i$ such that $a_i>0$. Let $A = \sqcup_{i=1}^{m}A_i$. By the countable additivity of $\mu$, we have $\mu(A)<\infty$.
Fixing a $R>0$, let $B_n = \left\{ \omega\in A: g_n(\omega) \ge q(\omega) - 1 /R\right\}$. Then $B_n\uparrow A$. We have

$$
\int g_n\d \mu + \int \mathbb{1}_{B_n} /R\d \mu \ge \int \mathbb{1}_{B_n}q\d \mu
= \int q\d \mu - \int_{A\setminus B_n}q\d \mu
\ge \int q\d \mu - \max_{i}a_i\mu(A\setminus B_n).
$$

Since $B_n\uparrow A$, we have

$$
\lim_{n \to \infty}\int g_n\d \mu + \mu(A) /R \ge \int q\d \mu - \max_{i}a_i\mu(A\setminus A) = \int q\d \mu.
$$

Letting $R\to\infty$ gives $\lim_{n \to \infty}\int g_n\d \mu \ge \int q\d \mu$. On the other hand, we have

$$
\int g_n\d \mu \le \int q\d \mu \implies \lim_{n \to \infty}\int g_n\d \mu \le \int q\d \mu.
$$

We now consider the more general case where $g_n\uparrow g$. For any simple function $q\in S(g)$, we have

$$
0\le \min \left\{ g_n,q \right\}\uparrow \min \left\{ g,q \right\}=q.
$$

From the previous case, we have

$$
\lim_{n \to \infty}\int g_n\d \mu\ge\lim_{n \to \infty}\int \min \left\{ g_n,q \right\}\d \mu = \int q\d \mu.
$$

Taking supremum over $q\in S(g)$ gives

$$
\lim_{n \to \infty}\int g_n\d \mu\ge \sup_{q\in S(g)}\int q\d \mu = \int g\d \mu.
$$

On the other hand, we have $g_n\le g \implies \int g_n\d \mu\le \int g\d \mu$.

Now suppose $g_n\uparrow g$ a.e. Then there exists $g_n'$ and $g'$ such that $g_n=g_n'$ a.e., $g=g'$ a.e., and $g_n'\uparrow g'$. By the previous case, we have

$$
\lim_{n \to \infty}\int g_n\d\mu = \lim_{n \to \infty} \int g_n'\d\mu = \int g'\d\mu = \int g\d\mu.
$$

### Constructing Approximation

The proof of MCT does not provide a way to construct the approximating sequence. An explicit construction is as follows:

$$
g_n(\omega) = \begin{cases}
  n, &\text{if } g(\omega)\ge n,\\
  k /2^n, &\text{if } k/2^{n}\le g(\omega)<(k+1)/2^{n}, &&\text{ for }k=0,1,\ldots,n2^{n}-1
.\end{cases}
$$

In words, the function $g_n$ is a quantized version of $g$. For every $ω$, the value of $g(ω)$ is ﬁrst capped at $n$, and then rounded down to the nearest multiple of $2^{-n}$.
One can verify that $g_n$ is simple and $g_n\uparrow g$.

- A byproduct of this construction is that we show that a nonnegative function is measurable if and only if it is the monotonic and pointwise limit of simple functions. This conclusion generalizes to general functions.

## Integral of General Functions

Consider now a general measurable function $f\colon \Omega\to \bar{\R}$. Let $f^+ = \max \left\{ f,0 \right\}$ and $f^- = \max \left\{ -f,0 \right\}$. Then $f = f^+ - f^-$ and $f^+,f^-$ are nonnegative. We define

$$
\int f\d \mu = \int f^+\d \mu - \int f^-\d \mu.
$$

This definition is well-defined as long as one of the integrals on the RHS is finite. We can verify that this definition satisfies all properties in [[#^tab-prop]].

## Consistency with Expectation

With the help of abstract integration, we can define the expectation, the integral of probability measures, for [[Expectation#^d5bee7|general random variables]].
However, functions like [[Random Variable]]s and [[Probability Density Function|Densities]] carry the operations between different measure spaces. It is important to verify the consistency of abstract integration among different measure spaces.

---

Consider a [[Probability Space]] $(\Omega,\mathcal{F},\P)$ and a [[Random Variable]] $X:\Omega\to\R$. This random variable induces another probability space $(\R,\mathcal{B},\P_{X})$. Further, let $g:\R\to\R$ be a measurable function, $Y=g(X)$ be the new random variable, whose induced probability space is $(\R,\mathcal{B},\P_{Y})$. We want to show that

$$
\mathbb{E}[Y] =\int Y\d\P =\int g\d\P_{X} =\int y\d\P_{Y}.
$$

A special case of this consistency is proved in [[Expectation#Proof of Function Transformation]].
To prove the general results, we adopt the _stnadard program_, which starts with simple functions. Suppose $g$ is a simple function whose range is $\{ y_i \}$. We have

$$
\int Y\d\P = \sum_{i} y_i\P(\{ \omega : g\circ X(\omega)=y_i \}) = \sum_{i} y_i\P(\{ \omega : Y(\omega)=y_i \}) = \sum_{i} y_i\P_{Y}(y_i)  =\int y\d\P_{Y} .
$$

Similarly

$$
\int g\d\P_{X} = \sum_{i}y_i\P_{X}(\{ x : g(x)=y_i \}) = \sum_{i}y_i\P_{X}(g^{-1}(y_i)) = \sum_{i}y_i\P(\{ \omega : X(\omega )\in g^{-1}(y_i) \}) = \sum_{i}y_i\P(\{ \omega : g(X(\omega))=y_i \}),
$$

which establishes $\int Y\d\P =\int g\d\P_{X}$.

The general case follows by approximating $g$ by simple functions.

---

We now consider a continuous r.v. $X$ with [[Probability Density Function|Density]] $f$. We want to show that

$$
\mathbb{E}[g(X)] =\int g\d\P_{X} =\int (gf)\d\lambda,
$$

where $\lambda$ is the [[Lebesgue Measure]] on $\R$.

Again, we start with a simple function $g=\sum_{i}y_i \mathbb{1}_{A_i}$. We have

$$
\int g\d\P_{X}
= \sum_{i}y_i\P_{X}(A_i)
= \sum_{i}y_i\int _{A_i}f\d \lambda 
=\int \sum_{i} y_i \mathbb{1}_{A_i}f\d \lambda
=\int gf\,\d \lambda.
$$

The general case follows by approximating $g$ by simple functions.

## Dominated Convergence Theorem

$X_n\to X$ a.e. Suppose $|X_n|\le Y$ a.e. for some integrable $Y$. Then $\lim_{ n \to \infty }\mathbb{E}[X_n]=\mathbb{E}[X]$. Or $X_n\overset{ L_{1} }{ \to }X$.

### Proof

WLOG, we assume $X_n\to X$ and $|X_n|\le Y$ everywhere. By [[Fatou's Lemma]], we have

$$
\mathbb{E}[X]=\mathbb{E}[\liminf_{n} X_n] \le \liminf_{n}\mathbb{E}[X_n] \le \limsup_{n}\mathbb{E}[X_n] \le \mathbb{E}[\limsup_{n}X_n] = \mathbb{E}[X].
$$

Therefore, $\lim_{n \to \infty}\mathbb{E}[X_n]=\mathbb{E}[X]$.
