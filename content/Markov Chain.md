---
publish: true
aliases:
  - MDP
  - MRP
title: Markov Chain
created: 2023-04-24T02:15:56
modified: 2024-12-14T18:33:31
published: 2026-05-06T03:53:48.606-04:00
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
  - "[[Stochastic Process]]"
state: done
---

# Markov Chain

We say a [[Stochastic Process]] has ==k-th order Markov property== if

$$
X_{t} | (X_{0},\dots,X_{t-1}) = X_t|(X_{t-1},\dots,X_{t-k}).
$$

^model

And we call an instance of this sequence a ==Markov chain==.

- [[Random Walk]] is a simple example of a Markov chain.

## Concepts

### Transition Kernel

For finite state space $\mathcal{S} = \{ 1,\dots,S \}$, its ==transition matrix== is specified by $P_{ij} = \Pr(s_t = j|s_{t-1}=i)$.
This matrix is also called the ==transition kernel== or the ==Markov matrix==; it is a row-stochastic matrix.

For general state space, the transition kernel is a family of measurable functions such that $P(s,s') = \Pr(s_t =  s'| s_{t-1}=s)$.

We also often use the transition kernel $\mathcal{P}$ as an operator such that $X_{t+1} = \mathcal{P}X_t$.
However, for the matrix $P$, by its definition, we should write $X_{t+1}^T = X_t^TP$ instead.

The above definitions are for **homogeneous** Markov chains, where the transition kernel is independent of time: $\Pr(s_{t+1}=s'|s_t=s) = \Pr(s_1=s'|s_0=s)$ for all $t$.

### Stationary Distribution

A probability distribution $\mu$ is called a ==stationary (steady/equilibrium) distribution== if $\mu = \mathcal{P} \mu$, or equivalently $\mu ^T = \mu ^T P$ for discrete cases.
If on a Markov chain $X_t \sim \mu$, we say the chain is in ==steady-state==.

> [!thm]
> Finite-space time-homogeneous Markov chains always have a stationary distribution.

^e00063

This theorem can be proved by various methods:

- This is a corollary of a general theorem on the stationary distribution's existence.
- Brouwer's fixed-point theorem.
- [[Linear Programming]] approach.

> [!pf]- LP approach
>
> A finite-space time-homogeneous Markov chain has a stationary distribution if and only if the following [[Linear Programming|linear program]] has an unbounded objective function:
>
> $$
> \begin{aligned}
> \max \quad& \mathbf{1}^T \mu\\
> \text{s.t.} \quad& P^T\mu = \mu\\
> & \mu \geq 0
> .\end{aligned}
> $$
>
> This is because if $\mu$ is a stationary distribution, then $c\mu$ for any $c>0$ is a feasible solution to the LP, and the objective function is unbounded; if the LP has an unbounded objective function, it must have a feasible solution, which can be normalized to be a stationary distribution.
>
> On the other hand, the LP has an unbounded objective function if and only if its dual is infeasible. The dual is
>
> $$
> \begin{aligned}
> \min \quad& \mathbf{0}^T \lambda\\
> \text{s.t.} \quad& P\lambda - \lambda \ge \mathbb{1}
> .\end{aligned}
> $$
>
> If the dual is feasible, there exists $\lambda$ such that $P\lambda - \lambda\ge \mathbf{1}$. WLOG, suppose $\lambda_{1} = \max_{s}\lambda _{s}$. Then the first row of $P\lambda - \lambda$ satisfies
>
> $$
> \sum_{s}P_{1s}\lambda_{s} - \lambda_{1} \le \sum_{s}P_{1s}\lambda_{1} - \lambda_{1} = 0 < 1,
> $$
>
> contradicting the constraint.

- For tabular cases, we also know from the fact $X_{\infty} = X_{\infty}P$ that the largest eigenvalue of $P$ is 1 and the steady distribution is its unit eigenvector.

### Transient and Recurrent States

For two states $x$ and $y$, we write $x\to y$ if there exists a non-zero probability of transitioning from $x$ to $y$; formally, $\sum_{t}\mathcal{P}^{n} x = \sum_{t>0}\Pr(X_t=y\given X_{0}=x)>0$.

A state $x$ is called ==transient== if there exists a state $y$ such that $x\to y$ but $y\not\to x$. Otherwise, it is called ==recurrent==.

We say two states $x$ and $y$ ==communicate== if $x\to y$ and $y\to x$, and we write $x\leftrightarrow y$.
Communicating states form an **equivalence** class on the set of recurrent states:

1. $x\leftrightarrow x$
   - Let $z$ be any state that $\Pr(X_{1}=z\given X_{0}=x) >0$ (which could be $x$). Thus $x \to z$. Since $x$ is recurrent, $z \to x$. Therefore, $x \leftrightarrow z$.
2. $x\lr y \implies y\lr x$
3. $x\lr y\land y\lr z \implies x\lr z$

Therefore, the state space can be partitioned into the set of transient states and the set of communicating classes of recurrent states.

See [[Recurrence Time]] for the properties of transient and recurrent states.

### Times

Given a state $x$, we define the following times:

- First passage/ hitting/ return time: $T_{x} = \min\{t>0: X_{t} = x\given X_{0} = x\}$.
  - We set $T_{x}=\infty$ if the minimum doesn't exist.
- Mean recurrence time: $\mu_{x} = \mathbb{E}[T_{x}]$.
- Visit time: $N_{x}(t) = \sum_{k=1}^{t}\mathbb{1}\{X_{k} = x\}$.
- Absorption time: $a_{x}= \min\{t>0: X_t \text{ is recurrent}\given X_{0} = x\}$.

### Irreducibility

We say a Markov chain is ==irreducible== if we can eventually reach any state starting from any other state. That is, the Markov chain has no transient states and has only one recurrent class.

> [!thm]
> ![[Uniqueness of Stationary Distribution for Irreducible Markov Chains#^743562]]

### Periodicity

We define the

- ==transient probability== (or density for continuous cases) from $x$ to $y$ as $p_{xy}^{(n)} = \Pr(X_{n}=y\given X_{0} = x)$. Given a transition matrix $P$, we have $p_{xy}^{(n)} = (P^{n})_{xy}$;
- ==accessible times== of state $x$ as $I_{x} = \{ n\ge 1: p_{xx}^{(n)} >0 \}$, which is a non-empty set for recurrent states and is closed under addition: $m,n\in I_{x} \implies m+n\in I_{x}$;
- ==period== of state $x$ as $d_{x}=\operatorname{gcd}(I_{x})$.
- A recurrent class is called ==periodic== if its period is greater than 1; otherwise, it is called ==aperiodic==.

^period-def

See [[Periodicity]] for the properties of periodic and aperiodic states/ Markov chains.

- We say a kernel is ==aperiodic== if the sequence doesn't loop between sets of states in a pre-deﬁned pattern.

### Ergodicity

We say

- a state is ==ergodic== if it's recurrent and aperiodic;
- a Markov chain is ==ergodic== if it's irreducible and all its states are ergodic,
  - equivalently, the chain is **irreducible** and **aperiodic**.
  - For continuous state space, an ergodic chain is also needed to be **positive recurrent**, i.e., the mean recurrence time of any state is finite. This is automatically satisfied for finite state space.

We have the [[Mixing Property]]:

> ![[Mixing Property#^c7829b]]

**Alt Def 1.** Sometimes we refer to the ergodicity as the mixing property, i.e., we say a kernel is ==ergodic== if there exists a stationary distribution $\mu$ of states such that
$\lim_{ n \to \infty }\mathcal{P}^{n}X_0 \sim \mu$
for any initial distribution of $X_{0}$. For tabular cases, this reads $X_{\infty} = \mu$.

- In this case, irreducibility + aperiodicity => ergodicity.

**Alt Def 2.** Aligned more closely to the ergodic theory, an ergodic Markov chain is just irreducible. In this sense, the chain is possible to go from any state to any other state in a finite number of steps and every state is visited infinitely often.

Without assuming either irreducibility or aperiodicity, we still have an [[Ergodic Theorem]] for chains with a **single recurrence class**, which relates the time average $N_{x}(t) /t$ to the spatial average $\pi _{x}$.

> ![[Ergodic Theorem#^thm]]

### MRP and MDP

### [[Partially Observable Markov Decision Process|POMDP]]

## Model Learning

The most widely used technique to learn a Markov kernel is the [[Monte Carlo Method]], which uses [[Maximum Likelihood Estimation]].

$$
M_{\mathrm{ML}}=\arg \max _M p\left(s_1, \ldots, s_t \mid M\right)=\arg \max _M \sum_{u=1}^{t-1} \sum_{i, j}^S \mathbb{1}\left(s_u=i, s_{u+1}=j\right) \ln M_{i j}
$$

^obj

Since each row of $M$ has to be a probability distribution, we can show that

$$
M_{\mathrm{ML}}(i, j)=\frac{\sum_{u=1}^{t-1} \mathbb{1}\left(s_u=i, s_{u+1}=j\right)}{\sum_{u=1}^{t-1} \mathbb{1}\left(s_u=i\right)} .
$$

^sol

Empirically, count how many times we observe a transition from $i \rightarrow j$ and divide by the total number of transitions from $i$.

## Simple Ergodic Model-Based Applications

We present two Markov chain model applications assuming ergodicity and the full knowledge of the kernel (so we can compute the steady distribution).

### Ranking

Problem setup

- We construct a Markov chain where each object is a state.
- We encourage transitions from objects that _lose_ to objects that _win_.
- Transitions only occur between objects that play each other.
  - If object A beats object B, there should be a high probability of transitioning from B→A and small probability from A→B.
- The strength of the transition can be linked to the score of the game.
  - for each game, the unnormalized probability is updated as $K_{ij} +\!\!= \mathbb{1}\{ j \text{ wins} \} + \frac{\text{pts}_{j}}{\text{pts}_{i} + \text{pts}_{j}}$, where $i,j$ can be A or B, so we are updating four entries after each game.
- Predicting the "state" (i.e., object) far in the _future_, we can interpret a more probable state as a better object.

## Semi-Supervised Classification

For a [[Semi-Supervised Learning]] [[Classification]], we can use a **random walk** method:

- A "random walker" starts from an unlabeled point $x_i$ and moves around from point to point
- A transition between _nearby_ points has a higher probability
  - Distance defined by Euclidean distance, [[Mercer Kernel|kernel]]s, etc.
- A transition to a labeled point terminates the walk
- We label $x_i$ using the label of the terminal point

![image.png|400](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20230425025724.png)

We call the points with pre-defined labels ==absorbing states== because the transition probability from these states to another state is zero.
Therefore, this model is **not ergodic**, indicating the convergence distribution is **dependent on the initial state**.
We arrange $K$ in a way that all the absorbing states appear at the bottom right:

$$
P = \begin{pmatrix} A&B\\0&I \end{pmatrix}
$$

Then,

$$
P^{\infty} = \begin{pmatrix}
    A^{\infty} & \sum^{\infty}_{t=0}A^{t} B\\0&I
\end{pmatrix} = \begin{pmatrix}
    0 & (I-A)^{-1} B\\0&I
\end{pmatrix}.
$$

The second equality is from $\lambda _{\max}(A) < 1$.
Then, for any unlabeled data point $x_{i}$, we know its **classification weight** vector is $[(I-A)^{-1}B]_{i,:}$

![image.png|500](https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20230425030657.png)
