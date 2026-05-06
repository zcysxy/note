---
publish: true
title: Network Propagation
created: 2026-04-05T03:56:10
modified: 2026-05-06T01:39:47
published: 2026-05-06T01:58:47.683-04:00
tags:
  - pub-network
state: done
sup:
  - "[[Network]]"
aliases:
type: note
---

# Network Propagation

Disease, information, behavior, and opinion propagate through social [[Network]]s.

## Susceptible-Infected (SI)

We abstract the propagation model as a infection process, though it applies beyond epidemiology.
A node can be in one of the two states:

- ==Susceptible==: does not have the disease yet, but could catch it if it comes into contact with an infected node.
- ==infected==: has the disease and can potentially pass it on if it comes into contact with a susceptible node.

> [!qn] Typical questions of interest
>
> - Under what conditions will an initial outbreak spread to a nontrivial portion of the population?
> - What percentage of the population will eventually become infected?
> - What is the effect of immunization policies?

### Fully Mixed

Suppose first there is no contact network (or the network is complete). We use such fully mixed models as baselines.
Let $x(t)$ denote the fraction of infected nodes at time $t$ and $\beta$ be the infection rate. Then the dynamics are given by

$$
x(t+1) = x(t) + \beta \underbrace{ x(t)(1-x(t)) }_{ \text{encounter frequency} }.
$$

The derivative is $\beta x(1-x) \ge 0$, which has two stationary points: $x=0$ and $x=1$; the former is unstable while the latter is stable.
More accurately, we can solve the difference equation to get $x(t) = \frac{x(0)\exp(\beta t)}{1-x(0)+x(0)\exp(\beta t)}$, which gives an S-shaped curve.

Incorporating spontaneous infections with rate $\alpha$ gives the ==Bass model==, modeled by the following difference equation:

$$
x(t+1) = x(t) + \alpha(1-x(t)) + \beta x(t)(1-x(t)).
$$

The solution to the corresponding differential equation is $x(t) = \frac{1-\exp(-(\alpha+\beta)t)}{1+ \frac{\beta}{\alpha}\exp(-(\alpha+\beta)t)}$.
When $\alpha<\beta$, we again get an S-shaped curve; when $\alpha \ge \beta$, the curve is more concave.

### Volume

Now suppose there is a contact network but $\beta=1$. Then a node will infect its component.
For a sparse [[Erdos-Renyi Random Graph|ER]] model $\mathrm{ER}(n,\lambda /n)$, if $\lambda<1$, then there is no giant component, so the disease dies out (number of infected nodes is $o(n)$).
If $\lambda >1$, we know the unique [[Erdos-Renyi Random Graph#Supercritical regime, giant component|giant component]] is of size $(1-\eta(\lambda))n$, where $\eta$ satisfying $\eta  = \exp(\lambda (\eta -1))$ is the extinction probability of a [[Branching]] process with $\operatorname{Poisson}(\lambda)$ offspring distribution. Then, with probability $\eta$, the node is in a small component and the disease dies out; with probability $1-\eta$, the disease spreads to a nontrivial portion of the population $(1-\eta)n$.

We can also incorporate immunization. Suppose the probability of node not being immune is $\varphi$.
For a [[Configuration Model]] with degree distribution $(p_{d})_{d\in\N}$, again, by the local branching approximation, we know the expected number of infected offsprings of a node is $\varphi \langle \tilde{d} \rangle$, where $\langle \tilde{d} \rangle = \frac{\langle d^{2} \rangle -\langle d \rangle }{\langle d \rangle }$ is the mean excess degree.
Let $\varphi _{c}\coloneqq \frac{\langle d \rangle}{\langle d^{2} \rangle-\langle d \rangle}$. Then, the contagion spread with a positive probability if $\varphi > \varphi _{c}$ and dies out with probability 1 if $\varphi < \varphi _{c}$.

### Rate

With a general infection rate $\beta\le 1$, let $x(t) = (x_{1}(t),\dots,x_{n}(t))$ denote the infection status (probability of being infected) of all nodes. Then the propagation dynamics are given by

$$
x_{i}(t+1) = x_{i}(t) + \beta (1-x_{i}(t))\left(1- \prod_{j\in N_{i}} (1-\beta x_{j}(t))\right)
$$

When $\beta \ll 1$, we have the approximation $\prod_{j\in N_{i}}(1-\beta x_{j}(t)) \approx 1- \beta \sum_{j\in N_{i}}x_{j}(t)$.
Let $A$ be the adjacency matrix of the contact network. Then, we have

$$
x(t+1) = x(t) + \beta (I - \operatorname{diag}(x(t))) A x(t).
$$

Consider only the first-order term, we have

$$
x(t+1) = (I + \beta A)x(t) \to \left< x(0),v_{1} \right>  (I + \beta \lambda _{1})^{t} v_{1},
$$

where $\lambda_{1}$ and $v_{1}$ are the largest eigenvalue and its corresponding eigenvector of $A$, respectively.[^1]
The propagation is dominated by the [[Centrality#Eigenvector|eigenvector centrality]].

[^1]: If $A$ is primitive (the graph is strongly connected and aperiodic), then by Perron-Frobenius theorem, $\lambda_{1}$ is real, positive, strictly larger than the magnitude of any other eigenvalue, and $v_{1}$ is element-wise positive.

## Susceptible-Infected-Recovered (SIR)

Consider an additional state:

- ==Recovered==: recovered from the disease, immunized, and can’t pass it on anymore if it comes into contact with a susceptible node.

### Fully Mixed

Let $s(t)$, $x(t)$, and $r(t)$ denote the fraction of susceptible, infected, and recovered nodes at time $t$, respectively. Let $\gamma$ be the recovery rate. Then the fully mixed continuous dynamics are

$$
\begin{aligned}
\dot{s}(t) &= -\beta s(t)x(t),\\
\dot{x}(t) &= \beta s(t)x(t) - \gamma x(t),\\
\dot{r}(t) &= \gamma x(t),\\
r(0) &= 0,\quad s(t) + x(t) + r(t) = 1.
\end{aligned}
$$

The first and third condition give $s(t) = s(0)\exp(-\frac{\beta}{\gamma}r(t))$. Together with $x(t)=1-s(t)-r(t)$, we get

$$
\dot{r}(t) = \gamma \left(1-s(0)\exp\left(-\frac{\beta}{\gamma}r( t) \right) - r( t) \right).
$$

When $s(0)=1$, the stationary point of $r$ satisfies $r = 1 - \exp(-\frac{\beta}{\gamma}r)$.
When $\beta \le \gamma$, the unique stationary point is $r=0$, i.e., infected nodes recover faster than susceptible nodes get infected, so the disease dies out; when $\beta > \gamma$, there is another nontrivial stationary point $r>0$, i.e., the disease spreads to a nontrivial portion of the population. $\beta=\gamma$ is called the ==epidemic threshold/transition==.

### Networked

Start with one infected node. Each node, once infected, stays infected for $\tau$ units of time, and then recovers.
For each $\d t$ unit of time, an infected node infects each of its susceptible neighbors with probability $\beta \d t + o(\d t)$.
Suppose node $i$ gets infected from node $i_{0}$. Let $T_{i}$ be the time of infection of $i$ after $i_{0}$ gets infected. Then, we know $T_{i} \overset{ d }{ \sim } \operatorname{Exp}(\beta)$ (see [[Exponential Distribution#Exponential Distribution and Poisson Distribution]]).
Thus,

$$
P(i_{0} \text{ infects } i) = P(T_{i} < \tau) = 1 - \exp(-\beta \tau).
$$

Let $\phi\coloneqq{1}-\exp(-\beta \tau)$. We get a [[Branching]] process with rate $\phi$.

## Susceptible-Infected-Susceptible (SIS)

Consider a recovered node, instead of being removed, can be infected again.

### Fully Mixed

Let $x(t)$ denote the fraction of infected nodes at time $t$. Then, the fully mixed continuous dynamics are

$$
\dot{x}(t) = \beta x(t)(1-x(t)) - \gamma x(t),
$$

whose solution is $x(t) = \frac{(\beta - \gamma)x(0)\exp((\beta-\gamma)t)}{\beta - \gamma - \beta x(0) + \beta x(0)\exp((\beta-\gamma)t)}$.
When $\beta>\gamma$, the steady state is $x = 1 - \frac{\gamma}{\beta}$, referred to as the ==endemic disease state==.

### Networked

Similarly, for a infimum $\d t$ unit of time, an infected node recovers (but not immunized) with probability $\gamma \d t + o(\d t)$, and a susceptible node gets infected with probability $\beta k \d t + o(\d t)$, where $k$ is the number of infected neighbors.
The resulting system is a giant [[Markov Chain]] with a state space $\{ 0,1 \}^{n}$.

## Susceptible-Infected-Recovered-Susceptible (SIRS)

Consider not all recovered nodes are immunized or can be infected again.
Let $\delta$ be the rate of losing immunity and becoming susceptible again.
Again, let $s(t)$, $x(t)$, and $r(t)$ denote the fraction of susceptible, infected, and recovered nodes at time $t$, respectively. Then, the fully mixed continuous dynamics are

$$
\begin{aligned}
\dot{s}(t) &= \delta r(t)-\beta s(t)x(t),\\
\dot{x}(t) &= \beta s(t)x(t) - \gamma x(t),\\
\dot{r}(t) &= \gamma x(t)-\delta r(t),\\
r(0) &= 0,\quad s(t) + x(t) + r(t) = 1.
\end{aligned}
$$
