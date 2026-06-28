---
publish: true
title: Draw and Add Balls
created: 2022-10-18T21:00:56
modified: 2022-10-18T21:17:08
published: 2026-06-28T06:48:20.441Z
tags:
  - pub-prob
aliases:
type: note
sup:
  - "[[Probability]]"
state: done
---

# Draw and Add Balls

## Problem

Suppose you have $x$ red balls and $y$ black balls. Each round, you randomly draw a ball, put it back and add $k$ balls with the same color. What's the probability that the $n$-th draw is red.

## Solution 1

We can work on [[Expectation]]:

$$
\mathbb{E}[\#\text{red balls in }n \text{-th round}] = \mathbb{E}[\#\text{red balls in } (n-1)\text{-th round}] + \mathbb{E}[\#\text{red balls added after} (n-1)\text{-th draw}].
$$

Therefor we have

$$
\frac{\mathbb{E}[N^{\text{red}}_{2}]}{\mathbb{E}[N^{\text{red}}_{2}] + \mathbb{E}[N^{\text{black}}_{2}]} = \frac{x + xk /(x+y)}{x+y+k} = \frac{x}{x+y}.
$$

Then we can induce that $P = \frac{x}{x+y}$ for any $n$ and $k$.

## Solution 2

We can utilize **symmetry** and **relabeling**. Instead of labeling balls as red and black, we can see each of them representing a color, and $x$ colors belong to a "red" family, $y$ colors belong to a "black" family. Then there are $x+y$ colors, and each time you add $k$ balls of the same color.

Then by **symmetry**, we know that the probability of drawing any color is $P' = \frac{1}{x+y}$. Then we know that the probability of drawing a ball in "red" family is $P = x\cdot P' = \frac{x}{x+y}$, regardless of $k$ and $n$.
