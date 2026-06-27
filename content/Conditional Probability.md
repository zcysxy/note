---
publish: true
title: Conditional Probability
created: 2024-10-17T16:32:15
modified: 2024-11-03T21:05:41
published: 2026-06-26T18:07:18.466Z
tags:
  - pub-prob
state: done
sup:
  - "[[Probability]]"
type: note
---

# Conditional Probability

## Conditional Probability Space

We start with [[Probability Space]]s. Consider $(\Omega,\mathcal{F},\P)$ and an even $B\in \mathcal{F}$ with positive Probability.
Conditioned on the occurrence of $B$, the probability of an event $A\in \mathcal{F}$ is now

$$
\P(A\,|\, B) = \P(A\cap B) / \P(B).
$$

One can verify that $\P(\cdot \given B)$ is a probability measure on $(\Omega,\mathcal{F})$.
Actually, this gives a conditional probability space $(\Omega,\mathcal{F},\P(\cdot \given B))$ or $(B,\mathcal{F}\cap B,\P(\cdot \given B))$.

The definition directly gives some properties:

- Law of total probability: Given any countable partition $\{B_i\}$ of $\Omega$, for any $A\in \mathcal{F}$,

$$$
\P(A) = \sum_i \P(A\cap B_i) = \sum_i \P(A\given B_i)\P(B_i).
$$ ^law-prob
- [[Bayes' theorem]]
- Chain rule: For any countable $\left\{ A_i \right\}\subset  \mathcal{F}$,
$$$

\P(\cap\_{i} A\_i) = \P(A\_1)\prod\_{i\ge 2}\P(A\_i\given \cap\_{j\<i} A\_j).

$$

## Conditional Distribution

Let $X,Y$ be two [[Random Variable]]s defined on the same [[Probability Space]] with [[Joint Distribution]] $P_{X,Y}$.
The conditional distribution of $X$ given $Y$ is defined as
$$

P\_{X\given Y}(A\given B) = P\_{X,Y}(A\times B) / P\_{Y}(B).

$$
We can consider the conditional distribution as a distribution on the new probability space where $Y\in B$ is a deterministic event; thus, we require $P_{Y}(B)>0$.
Visually, we can think of the conditional distribution as a slice of the joint distribution along the $Y$ axis, renormalized to be a probability distribution.

If $X,Y$ are discrete, we define the conditional [[Probability Mass Function|PMF]] as
$$

p\_{X\given Y}(x\given y) = p\_{X,Y}(x,y) / p\_Y(y).

$$
If they are continuous, we define the conditional [[Probability Density Function|PDF]] as
$$

f\_{X\given Y}(x\given y) = f\_{X,Y}(x,y) / f\_Y(y).

$$

## Conditional Expectation

The conditional expectation is just the expectation on the conditional probability space:
$$

\mathbb{E}\[X\given A] = \int x , \d \P({ X=x }\given A).

$$
Given another r.v. $Y$, let $A = \{ Y\in B \}$. Then, the conditional expectation of $X$ on $Y\in B$ is
$$

\mathbb{E}\[X\given Y\in B] = \int x , \d \P\_{X\given Y}(x\given  B).

$$

- [~] The existence of expectation (integrability) implies the existence of conditional expectation. But the reverse is not true.

Similar to [[#^law-prob]], we have **law of total expectation**: given any countable partition $\{ A_i \}$ of $\Omega$, for any r.v. $X$,
$$

\mathbb{E}\[X] = \sum\_i \mathbb{E}\[X\given A\_i]\P(A\_i).

$$

### Conditional Expectation as a Random Variable

Conditioned on the random variable $Y$ instead of an event $\{ Y\in B \}$, the conditional expectation $\mathbb{E}[X\given Y]$ is a [[Random Variable]]: $\omega \mapsto \mathbb{E}[X\given Y(\omega)]$.
In this sense, the law of total expectation gives the **tower property**:
For any measurable function $g$ such that $Xg(Y)$ is integrable, we have
$$

\mathbb{E}\left\[ \mathbb{E}\[X\given Y]g(Y) \right]  = \mathbb{E}\[Xg(Y)].

$$
In particular, if $g(Y)=1$, then
$$

\mathbb{E}\left\[ \mathbb{E}\[X\given Y] \right] = \mathbb{E}\[X].

$$

### General Definition of Conditional Expectation

The tower property gives an alternative definition of conditional expectation: it is a [[Random Variable]] of the form $\phi(Y)$, where $\phi$ is a measurable function, such that
$$

\mathbb{E}\[(\phi(Y)-X)g(Y)] = 0,

$$
for any measurable function $g$. This definition is valid for all kinds of random variables, including continuous and discrete ones.

- (Existence) $\phi$ exists for any integrable r.v. $X$.
- (Uniqueness) $\phi$ is unique up to a set of measure zero.

#### Optimal Estimation

The above definition of conditional expectation can be interpreted as the optimal estimation of $X$ given $Y$ in the sense that it minimizes the mean square error:
Suppose $X$ is square integrable; for any measurable function $g$, we have
$$

\mathbb{E}\[(X-\mathbb{E}\[X\given Y])^2] \le \mathbb{E}\[(X-g(Y))^2].

$$
To see this, we expand the MSE:
$$

\mathbb{E}\left\[ (X-g(Y))^{2} \right]  = \mathbb{E}\[(X-\mathbb{E}\[X\given Y])^{2}] + 2\mathbb{E}\[(X-\mathbb{E}\[X\given Y])(\mathbb{E}\[X\given Y]-g(Y))] + \mathbb{E}\[(\mathbb{E}\[X\given Y]-g(Y))^{2}]
\ge \mathbb{E}\[(X-\mathbb{E}\[X\given Y])^{2}] + 2\mathbb{E}\[(\phi(Y)-X)f(Y)],

$$
where $f(Y)=g(Y)-\mathbb{E}[X\given Y]$. By the general definition, we know $\mathbb{E}[(\phi(Y)-X)f(Y)]=0$, which gives the desired inequality.

### Related Problems

- [[6-7700-hw5#Exercise 3]]
$$
