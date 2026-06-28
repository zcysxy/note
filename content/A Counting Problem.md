---
publish: true
title: A Counting Problem
created: 2022-09-08T23:08:58
modified: 2022-09-10T16:36:32
published: 2026-06-28T05:56:20.007Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
  - "[[Number Theory]]"
state: done
---

# A Counting Problem

## The Problem

Choose an integer $x$ from 0 to 999 randomly. Say the probability of the digits of $x$ containing 2 but no 3 is $\frac{\alpha}{1000}$. What is $\alpha$.

### The Generalized Problem

We consider a generalized problem. Choose an integer $x$ from 0 to $10^{n}-1$ randomly. Say the probability of the digits of $x$ containing 2 but no 3 is $\frac{\alpha}{10^{n}}$. What is $\alpha$.

## A Subtraction Solution

Let $N_{1}$ be the number of numbers whose digits don't contain 3, $N_2$ be the number of numbers whose digits don't contain 2 or 3.
Then we know that

$$
\alpha = N_1-N_2.
$$

And we can see choosing a number randomly as choosing digits randomly. Therefore

$$
\begin{aligned}
N_1 = (10 - 1)^{n}, \\
N_2 = (10 - 2)^{n}.
\end{aligned}
$$

Thus

$$
\alpha = 9^{n} - 8^{n}.
$$

When $n = 3$, $\alpha = 217$.

## A Summation Solution

The previous solution is concise and the expression of $\alpha$ is elegant and **scalable**.
However, even when $n$ is small, $9^{n}$ and $8^{n}$ are two large numbers that are hard to compute without the help of a calculator.
Therefore we propose another solution that only involves the addition operation.
Although the expression may be more complicated, the involved computations may be simpler when $n$ is small.

Let $N_k$ be the number of numbers whose digits contain $k$ 2s but no 3. Then we have

$$
N_k = \binom{k}{n} 8^{n-k}.
$$

Then

$$
\alpha = \sum_{k=1}^{n} N_k = \sum_{k=1}^{n}\binom{k}{n}8^{n-k}.
$$

E.g., when $n=3$, the computation is

$$
\alpha = 3\times 8^2 + 3\times 8 + 1 = 217.
$$

## A MUCH SIMPLER Solution [^1]

[^1]: Compared to [[#A Simple Solution]]

We use an array $(a,b,c)$ to denote three digits of a number without order. Then there are three cases:

$$
\begin{cases}
    (2,a,b), a \notin \{2,3\}, b \notin \{2,3\}&: \binom{1}{3}\times 8\times 8 = 192,\\
    (2,2,a), a \notin \{2,3\}&:\binom{2}{3} \times 8 = 24,\\
    (2,2,2) &: 1.
\end{cases}
$$

So there are $(192 + 24 + 1) = 217$ numbers satisfying the condition. Thus $\alpha = 217$.

## A Simple Solution

First we count the numbers whose digits contain 2. We use an array $(a,b,c)$ to denote three digits without order. There are three cases:

$$
\begin{cases}
    (2,a,b), a\ne 2, b \ne 2&: \binom{1}{3}\times 9\times 9 = 243,\\
    (2,2,a), a \ne 2&:\binom{2}{3} \times 9 = 27,\\
    (2,2,2) &: 1.
\end{cases}
$$

So there are total $(243 + 27 + 1) = 271$ numbers whose digits contain 2.

Then we count the numbers whose digits contain both 2 and 3. There are still three cases

$$
\begin{cases}
    (2,3,a), a\ne 2, a\ne 3 &: 2 \times \binom{2}{3} \times 8 = 48,\\
    (2,2,3) &: \binom{2}{3} = 3,\\
    (2,3,3) &: \binom{1}{3} = 3.
\end{cases}
$$

So there are total $(48 + 3 + 3) = 54$ numbers whose digits contain both 2 and 3.

Therefore, there are $(271-54) = 217$ numbers satisfying the condition. Thus $\alpha = 217$.

> Note that for illustration the solution is a little long. But the idea and all the operations are very simple that you don't even need to write them down.
