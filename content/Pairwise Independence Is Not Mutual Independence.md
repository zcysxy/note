---
publish: true
aliases:
  - pairwise independent
  - mutually independent
title: Pairwise Independence Is Not Mutual Independence
created: 2022-09-15T21:18:39
modified: 2022-09-20T23:05:02
published: 2026-06-28T05:52:03.533Z
tags:
  - pub-prob
type: note
sup:
  - "[[Probability]]"
state: done
related:
  - "[[Independence]]"
---

# Pairwise Independence Is Not Mutual Independence

> [!error] A wrong example
>
> $$
> \begin{cases}
> A: \text{red exists},\\
> B: \text{blue exists}, \\
> C: \text{both red and blue exist}.
> \end{cases}
> $$
>
> Apparently, $C = A\cap B$ and $P(A|C) = 1 \ne P(A)$. Therefore, these three events are not pairwise independent nor mutually independent.

However, in light of this, we can have a correct example using a 4-sided die. Roll a fair 4-sided die whose outcome is in $\{1,2,3,4\}$. Define three events

$$
\begin{cases}
A: \{ 1,2 \}, \\
B: \{ 1,3 \}, \\
C: \{ 2,3 \}.
\end{cases}
$$

Then we have

$$
\begin{aligned}
P(AB) = P(\{1\}) = \frac{1}{4} = P(A)P(B),\\
P(AC) = P(\{2\}) = \frac{1}{4} = P(A)P(C) ,\\
P(BC) = P(\{3\}) = \frac{1}{4} = P(B)P(C).\\
\end{aligned}
$$

But

$$
P(ABC) = P(\varnothing) = 0 \ne P(A)P(B)P(C).
$$

Therefore, pairwise independence is not mutual independence.

## Simplestness

### Define What's Simpler

To show the above example is the "simplest," we need first to define the partial order to compare simpleness: we say an example $E$ is simpler than $F$, if $E$ involves fewer events than $F$, or the cardinality of $E$'s sample space is smaller when $E$ and $F$ involve the same number of events. Since the number of events cannot be less than 3, otherwise mutual independence will reduce to pairwise independence, we need to find a smaller sample space for a simpler example.

### Select the Events

Consider the sample space $\{ 1,2,3 \}$. The nonempty events are

$$
\{ 1 \}, \{ 2 \}, \{ 3 \}, \{ 1,2 \}, \{ 1,3 \}, \{ 2,3 \}, \{ 1,2,3 \}.
$$

We call the first three events size-1 events, the following three events size-2 events, and the last one size-3 event. To compose the example, we need to select three events $A$, $B$, $C$.
The size-3 event cannot be selected, because it is the superset of all other events, and hence is not independent of any of them.
We can select up to one size-1 event; otherwise, the intersection of two size-1 events is empty, indicating that these two events are not pairwise independent (here we assume nonzero probability).
However, when we select one size-1 event, the other two size-2 events either are the supersets of it, or have no intersection with it; in either situation, they are not pairwise independent.
Therefore, $A,B,C$ can only be the three size-2 events.

### Calculate the Probabilities

Let the probability mass function be

$$
P(\{1\}) = p, P(\{2\}) = q, P(\{3\})=1-p-q.
$$

Then we have

$$
P(BC) = P(B)P(C) \Rightarrow 1-p-q = (1-q)(1-p) \Rightarrow pq = 0.
$$

This also indicates mutual independence, because

$$
P(ABC) = P(\varnothing) = 0 = pq(1-p-q) = P(A)P(B)P(C).
$$

In summary, such an example with a sample space of cardinality 3 does not exist.
