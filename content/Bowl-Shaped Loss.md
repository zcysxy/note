---
{"publish":true,"title":"Bowl-Shaped Loss","created":"2025-06-27T21:39:32","modified":"2025-07-27T19:33:45","cssclasses":"","state":"done","sup":["[[Machine Learning]]","[[Statistics]]"],"aliases":null,"type":"note"}
---


# Bowl-Shaped Loss

Bowl-shaped loss functions are an important class of loss functions in [[Statistics]] and [[Machine Learning]] that are both common and well-behaved.
A loss function $L:\Theta^{2} \to \R_{\ge 0}$ is ==bowl-shaped==, if there exists some function $\ell$ with **convex** and **symmetric** level sets, such that
$$
L(\hat{\theta},\theta ) = \ell(\hat{\theta}-\theta).
$$
- [@] Example: $\ell(x)=\|x\|^{p}$ for any norm and $p$.
