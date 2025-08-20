---
{"publish":true,"aliases":["Student's t-distribution"],"title":"t-Distribution","created":"2022-12-05T18:14:58","modified":"2025-07-17T16:05:33","tags":["pub-stat"],"cssclasses":"","type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# t-Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Student_t_pdf.svg/650px-Student_t_pdf.svg.png)

While we can show that the sample [[Variance]] of [[Normal Distribution]] samples is of [[Chi-Square Distribution]], it is convenient to define the distribution for the following [[Random Variable]]
$$
T_n = \frac{Z}{\sqrt{ \chi _{n}^{2} /n }},
$$
where $Z \sim \mathcal{N}(0,1)$. $T_n$ is said to have a **t-distribution** with $n$ degrees of freedom.

By the [[Law of Large Numbers]], for large $n$, $T_n \approx Z \sim \mathcal{N}(0,1)$ (but always with larger [[Variance]]).

- Parameter
    - $n \in \mathbb{N}$ ^para
- [[Expectation\|Mean]]
    - 0 ^mean
- [[Variance]]

- $\frac{n}{n-2}$ ^var
- [[Probability Density Function\|PDF]]
    - $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ ^pdf
- [[Moment Generating Function\|MGF]]
    - *Undefined* ^mgf

## Examples

## Normal Distribution with Unknown Variance

Suppose $\{ X_{i}\sim \mathcal{N}(\mu,\sigma^{2}) \}$, then
$$
\frac{\overline{X} - \mu}{s / \sqrt{n}} \sim t _{n-1},
$$
where $s$ is the square root of [[Variance#Sample Variance]].

## Difference of Normal Distributions with the Same Variance

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma^{2}) \}_{j=1}^{m}$. Then
$$
\frac{(\overline{x}-\overline{y}) - (\mu_{1}-\mu_{2})}{s_{p} \sqrt{ \frac{1}{m}+\frac{1}{n} }} \sim t _{m+n-2},
$$
where
$$
s_{p} = \sqrt{ \frac{(m-1)s^{2}_{x}+(n-1)s^{2}_{y}}{m+n-2}}.
$$

## Difference of Normal Distributions with Different Variances

Let $\{ X_{i}\sim \mathcal{N}(\mu_{1}, \sigma_{1}^{2}) \}_{i=1}^{n}$ and $\{X_j \sim \mathcal{N}(\mu_{2},\sigma_{2}^{2}) \}_{j=1}^{m}$. Then **approximately**, we have
$$
\frac{(\overline{x} - \overline{y}) - (\mu_{1} - \mu_{2})}{\sqrt{ \frac{s^{2}_{1}}{n} + \frac{s_{2}^{2}}{m} }} \sim t _{N},
$$
where
$$
N = \frac{\left( \frac{s_{1}^{2}}{n} + \frac{s_{2}^{2}}{m} \right) ^{2}}{\frac{s_{1}^{4}}{n^{2}(n-1)} + \frac{s_{2}^{4}}{m^{2}(m-1)}} \gtrsim \min \{ n,m \}.
$$
The result follows from the Welch-Satterthwaite formula.
