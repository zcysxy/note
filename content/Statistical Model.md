---
{"publish":true,"title":"Statistical Model","created":"2025-05-21T18:14:35","modified":"2025-05-24T23:57:10","cssclasses":"","state":"done","sup":["[[Statistics]]"],"aliases":null,"type":"note"}
---


# Statistical Model

A ==statistical model== is a collection of probability distributions that describes the behavior of a (set of) random variable(s) in a statistical experiment.
The collection is denoted by
$$
\mathcal{P} = \{ P_{\theta}: \theta\in \Theta , P_{\theta} \text{ is  a probability distribution on } \mathcal{X} \},
$$
where $\mathcal{X}$ is the sample space, and $\Theta$ is the ==parameter set==.

## Notions Around Statistical Model

- If $\Theta$ lies in a finite-dimensional space, then the model is ==parametric==.
- If $\Theta$ is of infinite dimension, then the model is ==non-parametric==.
- If the underlying probability of the experiment belongs to $\mathcal{P}$, then the model is ==well-specified==.
- The parameter $\theta$ is called ==identifiable== if $\Theta\ni\theta  \mapsto P_{\theta}$ is injective, i.e., $\theta\ne \theta'\implies P_{\theta}\ne P_{\theta'}$
