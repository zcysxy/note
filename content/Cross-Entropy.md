---
{"publish":true,"created":"2024-02-02T04:44:24","modified":"2025-06-18T19:54:13","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Machine Learning]]","[[Statistics]]","[[Information Theory]]"],"related":["[[KL Divergence]]"],"state":"done"}
---


# Cross-Entropy

The cross-entropy between two distributions $P$ and $Q$ is defined as
$$
H(P, Q)=-\mathbb{E}_{\mathrm{x} \sim P} \log Q(x)
$$

Since the cross-entropy is just the **latter term** of the [[KL Divergence]], it also measures how $Q$ is different from $P$. And therefore minimizing the cross-entropy with respect to $Q$ is equivalent to minimizing the KL divergence, because $Q$ does not participate in the omitted term. ^65d90c

Whether it is KL divergence or cross-entropy, usually $P$ is the actual/data-based/precise distribution, while $Q$ is the theoretical/approximate distribution. So if we want the theoretical distribution to be as close to the real distribution as possible, we need to minimize the cross-entropy or KL divergence. In these cases, the cross-entropy can be seen as an "error", or information loss, of the theoretical/approximate distribution over the actual/precise distribution. ^7bd977
