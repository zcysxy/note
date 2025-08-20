---
{"publish":true,"aliases":["KL"],"created":"2022-05-28T03:34:21","modified":"2025-06-01T03:56:26","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Machine Learning]]","[[Information Theory]]","[[Statistics]]","[[f-Divergence]]"],"state":"done"}
---


# KL Divergence

The ==Kullback-Leibler (KL) divergence==, a.k.a. ==relative entropy==, measures how one distribution diverges from a second, expected probability distribution. It is defined as:

$$
D_{\mathrm{KL}}(P \| Q)=\mathbb{E}_{\mathrm{x} \sim P}\left[\log \frac{P(x)}{Q(x)} \right]=\mathbb{E}_{\mathrm{x} \sim P}[\log P(x)-\log Q(x)].
$$
KL divergence is an example of [[f-Divergence]] with $f(x) = x\log x$.

KL divergence measures how two probability distributions are different from each other: the more similar two distributions are, the smaller their KL divergence is. For example, if two distributions' KL divergence is 0, iff they are almost everywhere the same. ^88c6e5

For discrete variables, KL divergence is the **extra amount of information** needed to send a message containing symbols drawn from probability distribution P, when we use a code that was designed to minimize the length of messages drawn from probability distribution Q; or conversely, is the **information gain** achieved if $P$ would be used instead of $Q$, which is currently used. ^103d70

## Properties

1. Generally $D_{\mathrm{KL}}(P||Q) \neq  D_{\mathrm{KL}}(Q||P)$
2. $D_{\mathrm{KL}} \geq 0$
3. $D_{\mathrm{KL}}(P||Q) = 0 \Rightarrow P \doteq Q$
4. Generally $D_{\mathrm{KL}}(P||Q) \not\le D_{\mathrm{KL}}(P\|R) + D_{\mathrm{KL}}(R\| Q)$

- [!] KL divergence is not a metric.

The second and third properties are by [[Jensen Inequality]] and the convexity of $-\log$.
