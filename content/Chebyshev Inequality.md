---
{"publish":true,"aliases":["Markov Inequality","Probability Inequalities"],"title":"Chebyshev Inequality","created":"2022-12-04T22:31:54","modified":"2024-11-04T04:18:08","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# Chebyshev Inequality

- **(Sample)** Let $\overline{x}$ and $s$ be the sample [[Expectation\|Mean]] and sample standard deviation of the data set $\{ x_{1},\dots,x_n \}$, where $s > 0$. Let $S_k = \{ i: |x _i - \overline{x}| \le ks, 1\le i \le n \}$, then for any $k \ge 1$
    $$ 1 - \frac{|S_k|}{n} \le \frac{1}{k^{2}} $$
- **(Sample General)** For any $\alpha > 0$, let $S_a = \{ i: |x _i- \overline{x}| \le a, 1\le i \le n \}$
    $$ 1 - \frac{|S_k|}{n} \le \frac{s^{2}}{a^{2}}. $$
- **(Sample One-Sided)** Let $N_k = \{ i: x _i-\overline{x} \ge \alpha, 1\le i \le n \}$
    $$ \frac{|N_k|}{n} \le \frac{s^{2}}{\alpha^{2} + s^{2}} = \frac{1}{\frac{\alpha^{2}}{s^{2}}+1}. $$
- **(Variable)** For a [[Random Variable]] $X$ with mean $\mu$ and variance $\sigma^{2}$, and for any $a > 0$
    $$P(|X-\mu| \ge a) \le \frac{\sigma^{2}}{a^{2}}$$
- **(Markov Inequality)** for $l>0$ and $a > 0$
    $$ P(|X| \ge a) \le \frac{\mathbb{E}[|X|^{l}]}{a^{l}} $$

## Proof

### Sample

We have
$$
s \ge \sqrt{ \frac{n - |S_k|}{n-1} (ks)^{2} },
$$
which gives the result.

### Markov

$$
\mathbb{E}[|X|^{l}] = \int _{\R}|x|^{l}p(x) \, dx \ge \int _{|x|\ge a}|x|^{l}p(x) \, dx \ge a^{l}P(|X| \ge a).
$$

### One-Sided

Let $y_i = x _i - \overline{x}$. For any $\beta  \ge 0$, we have
$$
\sum_{i=1}^{n}(y_i + \beta )^{2}  \ge |N_k| (\alpha + \beta )^{2}.
$$

Also, we have
$$
\sum_{i=1}^{n}(y_i + \beta )^{2} = \sum^{n}_{i=1}y_i^{2} + 2\beta \sum^{n}_{i=1}y_i + n\beta^{2} = (n-1)s^{2} + n\beta^{2}.
$$

Combining the above two equations gives
$$
|N_k| \le \frac{(n-1)s^{2} + n\beta^{2}}{(\alpha + \beta)^{2}} \le n \frac{s^{2} + \beta^{2}}{(\alpha + \beta)^{2}}.
$$

Let $\beta = s^{2} /\alpha$, then we get
$$
\frac{|N_k|}{n} \le \frac{s^{2}}{\alpha^{2} + s^{2}} = \frac{1}{\frac{\alpha^{2}}{s^{2}}+1}.
$$
