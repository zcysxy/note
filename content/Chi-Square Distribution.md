---
{"publish":true,"title":"Chi-Square Distribution","created":"2022-12-05T17:42:50","modified":"2025-07-17T16:01:52","tags":["pub-stat"],"cssclasses":"","aliases":null,"type":"note","sup":["[[Probability Theory]]"],"state":"done"}
---


# Chi-Squared Distribution

![pdf|300](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chi-square_pdf.svg/642px-Chi-square_pdf.svg.png)

If $Z_1,\dots,Z_n$ are IID standard [[Normal Distribution\|normal random variables]], then
$$
X = \sum^{n}_{i=1} Z_{i}^{2}
$$
is said to have a **chi-square** distribution with $n$ degrees of freedom.

By the uniqueness of [[Moment Generating Function\|MGF]], chi-square distribution with $n$ degrees of freedom is [[Gamma Distribution]] with parameter $(n/2,1/2)$.

- Notation
    - $\chi _{n}^{2}$ ^nota
- Parameters
    - $n$ ^para
- [[Moment Generating Function\|MGF]]
    - $(1-2t)^{-n/2}$ ^mgf
- [[Probability Density Function\|PDF]]
    - $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$ ^pdf
    - [~] This PDF gives $f(x)=0$ when $n>2$, $f(x)=1 /2$ when $n=2$, and $f(x) = \infty$ when $n < 2$.
- [[Expectation\|Mean]]
    - $n$ ^mean
- [[Variance]]
    - $2n$ ^var

## Examples

### Sample Variance

Let $S_n^{2} = \frac{1}{n-1} \sum_{i=1}^{n} (X_{i}-\overline{X})^{2}$ be the unbiased variance estimator, where $X_{i} \sim \mathcal{N}(\mu,\sigma^{2})$. Then, the following random variable is chi-square distributed:
$$
\frac{(n-1)S_n^{2}}{\sigma^{2}} = \frac{1}{\sigma^{2}} \sum_{i=1}^{n} (X_{i}-\overline{X})^{2} \sim \chi _{n-1}^{2}.
$$
The result follows from Cochran's theorem, which also tells us that $S_{n}^{2}$ and $\overline{X}$ are independent.
