---
{"publish":true,"aliases":["MAP"],"title":"Maximum a Posteriori","created":"2023-01-31T15:04:22","modified":"2023-02-06T14:43:43","cssclasses":"","type":"note","sup":["[[Probability Theory]]","[[Linear Regression]]","[[Bayes Estimation]]"],"state":"done","related":["[[Ridge Regression]]"]}
---


# Maximum a Posteriori

As in the [[Bayes Estimation]], we have a posterior distribution given a prior distribution and the observation. However, instead of taking the expectation, we can also apply the [[Maximum Likelihood Estimation]], which gives the **maximum a posteriori (MAP)** estimation.

$$\begin{aligned}
w_{\mathrm{MAP}} & =\argmax _w \ln p(w \mid y, X) \\
& =\argmax _w \ln p(y \mid w, X)+\ln p(w)-\ln p(y \mid X) \\
& =\argmax _w \ln p(y \mid w, X)+\ln p(w)\\
\end{aligned}$$

^obj

Note here, we are not [[Maximum Likelihood Estimation\|maximizing the likelihood of the observation]]; we are maximizing the likelihood of the weight given the posterior distribution.

## Relationship with Ridge Regression

Just like [[Maximum Likelihood Estimation\|MLE]] being the probability interpretation of [[Linear Regression\|least square]] estimation, MAP is the probability interpretation of the [[Ridge Regression]]. 

Assume the prior distribution of $w$ is $\mathcal{N}(0,\lambda ^{-1}I)$, then ^asmp

$$
w_{\mathrm{MAP}} =\arg \max _w-\frac{1}{2 \sigma^2}(y-X w)^T(y-X w)-\frac{\lambda}{2} w^T w
$$
which gives $w_{\mathrm{MAP}} = (\lambda\sigma^{2}I + X^TX)^{-1}X^Ty$, equaling to $w_{\mathrm{RR}}$ with regularizer parameter $\lambda\sigma^{2}$. ^sol
