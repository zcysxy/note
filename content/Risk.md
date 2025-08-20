---
{"publish":true,"aliases":["Minimax"],"title":"Risk","created":"2025-05-24T19:42:49","modified":"2025-06-27T21:34:37","tags":["pub-stat"],"cssclasses":"","state":"done","sup":["[[Statistics]]"],"type":"note"}
---


# Risk

Risk is a measure of the performance of a [[Statistical Decision Theory\|statistical procedure]]. It quantifies the expected loss incurred by using a particular procedure to make decisions based on data.
Formally, given a [[Statistical Model]] parameterized by $\Theta$ and a loss function
$$
L:\mathcal{A} \times \Theta \to \R_{\ge_{0}},
$$
the risk of a statistical procedure $A$ is defined as
$$
R(A, \theta) \coloneqq \mathbb{E}_{X\sim P_{\theta}}[L(A(X),\theta)].
$$

> [!ex] Loss Function and Risk Function
> An example for a loss function is the squared error loss $L(\theta ,\delta )=\|\theta -\delta \|^{2}$, and the risk function for this loss is the [[Mean Squared Error]].

Unfortunately, in general, the risk cannot be minimized since it depends on the unknown parameter $\theta$ itself (If we knew what was the actual value of $\theta$, we wouldn't need to estimate it). Therefore additional criteria for finding an optimal estimator in some sense are required.

- ==Bayes Risk==: $$R_{B}(A)\coloneqq \mathbb{E}_{\theta \sim Q}[R(A,\theta)],\quad \text{prior }Q\in\Delta(\Theta).$$
    - Can incorporate prior knowledge about the parameter $\theta$.
    - Can be understood as the *average* or weighted risk, with $Q$ being the weight.
- ==Minimax Risk==: $$R_{M}(A)\coloneqq \sup_{\theta\in\Theta }R(A,\theta).$$
    - Suitable for deterministic parameters.
    - Can be understood as the *worst-case* risk.

A Bayes/minimax (optimal) estimator is a procedure that minimizes the Bayes/minimax risk, respectively. See also [[Bayes Optimality]]
