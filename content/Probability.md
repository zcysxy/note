---
{"publish":true,"aliases":["Probability Theory"],"title":"*Almost All* of Probability","created":"2022-09-25T14:40:01","modified":"2025-08-25T19:56:41","tags":["pub-prob"],"cssclasses":"","id":"Probability","banner":"https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/Apstrakcija.jpg","pub-banner":"https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/prob-icon.svg","banner_icon":"🎲","dg-publish":false,"state":"done","sup":["[[Math]]"],"type":"index"}
---




# Probability

Probability is a **mathematical language** that describes the unobserved world, using vocabulary from [[Measure\|Measure Theory]].

```mermaid
graph RL
A("Probability space (Ω,𝓕,𝐏)")
O("Space Ω") --> A
F("Sigma field 𝓕") --> A
F1@{shape: braces, label: "1\\. Empty set<br>2. Closure under complementation<br>3. Closure under countable unions"} --- F
P("Probability measure 𝐏") --> A
P1@{shape: braces, label: "1\\. Non-negativity<br>2. Countable addivity<br>3. Unit"} --- P
style P1 text-align:left
style F1 text-align:left
```

The three defining conditions of a probability measure are also called the ==probability axioms==.

## Basic Concepts

- [[Probability Space]]
    - [[Sigma Field]]
    - [[Measure]]
        - [[Caratheodory's Extension]]
- [[Independence]]
- [[Conditional Probability]]
    - [[Law of Total Variance]]
    - [[Bayes' theorem]]
- [[Random Variable]]
    - [[Cumulative Distribution Function\|CDF]], [[Probability Mass Function\|PMF]], [[Probability Density Function\|PDF]]
    - [[Expectation\|Mean]], [[Variance]], [[Moment]]
    - [[Moment Generating Function\|MGF]], [[Characteristic Function]]
    - [*] [[Convergence of Random Variables]]
        - [[Law of Large Numbers]]
        - [[Central Limit Theorem]]
        - [[Chernoff Bound]]
- Multiple Random Variables
    - [[Joint Distribution]]
    - [[Covariance]], [[Correlation]]
        - [[Cauchy-Schwartz Inequality]]

## Advanced Notes

- [[Borel-Cantelli Lemma]]
- [[Chebyshev Inequality\|Probability Inequalities]]
- [[Order Statistics]]
- [[Abstract Integration]]
    - [[Fatou's Lemma]]
    - [[Fubini's Theorem]]

## Problems

- [[Pairwise Independence Is Not Mutual Independence]]
- [[Covariance and Independence]]
- [[A Counting Problem]]
- [[A Plausible Treatment Test]]
- [[Matching Problem]]

## Common Distributions

| Distribution                          | Notation                       | Parameters                                            | CDF                                                                                             | PMF/PDF                                                                                                                                                 | Mean                                        | Variance                                                                                                        | MGF                                                                                           | CF                               |
| ------------------------------------- | ------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------- |
| [[Uniform Distribution]]              | $\mathcal{U}(a,b)$             | $a,b\in\R$                                            | $F(x) = \begin{cases}0,  \quad & x<a,\\ \frac{x-a}{b-a}, &a\le x\le b,\\ 1,  & x>b.\end{cases}$ | $f(x) = \begin{cases} \frac{1}{b-a}, \quad & a\le x\le b,\\ 0, & \text{otherwise.}\end{cases}$                                                          | $\frac{a+b}{2}$                             | $\frac{(b-a)^{2}}{12}$                                                                                          | $\displaystyle \frac{e^{tb} - e^{ta}}{(b-a)t}$                                                |                                  |
| [[Bernoulli Distribution]]            | /                              | $p\in[0,1]$                                           | $F(x) = \begin{cases} 0, \quad & x<0,\\ q = 1-p, & 0\le x\le 1,\\ 1, & x >1. \end{cases}$       | $p(n) = \begin{cases} p, \quad & n=1, ,\\ q\coloneqq 1-p, & n=0.\end{cases}$                                                                            | $p$                                         | $pq$                                                                                                            | $q + pe^{t}$                                                                                  |                                  |
| [[Binomial Distribution]]             | $B(n,p)$                       | $n \in \mathbb{N}, p\in[0,1]$                         | /                                                                                               | $p(k) = {n \choose k} p^{k}(1-p)^{n-k}$                                                                                                                 | $np$                                        | $npq$                                                                                                           | $(q + pe^{t})^{n}$                                                                            |                                  |
| [[Poisson Distribution]]              | /                              | $\lambda > 0$                                         | /                                                                                               | $\displaystyle p(n) = e^{-\lambda} \frac{\lambda ^{n}}{n!}$                                                                                             | $\lambda$                                   | $\lambda$                                                                                                       | $\exp(\lambda(e^{t}-1))$                                                                      | $\exp(\lambda(e^{it}-1))$        |
| [[Exponential Distribution]]          | /                              | $\lambda > 0$                                         | $1 - e^{-\lambda x}$                                                                            | $\displaystyle f(n) = \begin{cases} \lambda e^{-\lambda x}, \quad &x \ge 0,\\ 0, & x< 0 \end{cases}$                                                    | $\frac{1}{\lambda}$                         | $\frac{1}{\lambda^{2}}$                                                                                         | $\lambda /(\lambda - t), \quad t < \lambda$                                                   | $\lambda /(\lambda - it)$        |
| [[Normal Distribution]]               | $\mathcal{N}(\mu, \sigma^{2})$ | $\mu\in\R, \sigma^{2}\in\R_{+}$                       | /                                                                                               | $\displaystyle f(x)=\frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}}$                                                | $\mu$                                       | $\sigma^{2}$                                                                                                    | $e^{\mu t + \sigma^{2}t^{2} /2}$                                                              | $e^{it\mu - \sigma^{2}t^{2} /2}$ |
| [[Gamma Distribution]]                | /                              | $\alpha, \lambda >0$                                  | /                                                                                               | $f(x)=\begin{cases} \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha -1}}{\Gamma(\alpha)},\quad & x \ge 0,\\0,& x<0 \end{cases}$                         | $\alpha /\lambda$                           | $\alpha /\lambda^{2}$                                                                                           | $\left( \frac{\lambda}{\lambda - t} \right)^{\alpha},\quad t <\lambda$                        |                                  |
| [[Beta Distribution]]                 | /                              | $a,b >0$                                              | /                                                                                               | $f(x)=\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} x^{a-1}(1-x)^{b-1}$                                                                                       | $\frac{a}{a+b}$                             | $\frac{ab}{(a+b)^2(a+b+1)}$                                                                                     | $\frac{\Gamma(a+b)}{\Gamma(a) \Gamma(b)} \int_{0}^{1} x^{a-1}(1-x)^{b-1} e^{tx} \mathrm{d} x$ |                                  |
| [[Chi-Square Distribution]]           | $\chi _{n}^{2}$                | $n$                                                   | /                                                                                               | $\displaystyle f(x) = \frac{e^{-x/2}(x/2)^{n /2 -1}}{2\Gamma(n /2)}, \quad x\ge 0$                                                                      | $n$                                         | $2n$                                                                                                            | $(1-2t)^{-n/2}$                                                                               |                                  |
| [[Wishart Distribution]]              |                                |                                                       |                                                                                                 |                                                                                                                                                         |                                             |                                                                                                                 |                                                                                               |                                  |
| [[t Distribution]]                    | /                              | $n \in \mathbb{N}$                                    | /                                                                                               | $\displaystyle\frac{\Gamma \left(\frac{n+1}{2} \right)} {\sqrt{n\pi}\,\Gamma \left(\frac{n}{2} \right)} \left(1+\frac{x^2}{n} \right)^{-\frac{n+1}{2}}$ | 0                                           | $\frac{n}{n-2}$                                                                                                 | *Undefined*                                                                                   |                                  |
| [[F Distribution]]                    | /                              | $n,m \in \mathbb{N}$                                  | /                                                                                               | /                                                                                                                                                       | $m/(m-2)$                                   | $\displaystyle \frac{2m^{2}(m+n -2)}{n(m-2)^{2}(m-4)}$                                                          | *Undefined*                                                                                   |                                  |
| [[Geometric Distribution]]            | /                              | $p\in [0,1]$                                          | $F(n) = 1 - q^{n}$                                                                              | $p(n) = pq^{n-1}$                                                                                                                                       | $1 /p$                                      | $q /p^{2}$                                                                                                      | $\frac{pe^{t}}{1-qe^{t}}$, $e^{t}< 1 /q$                                                      |                                  |
| [[Hypergeometric Distribution]]       | /                              | $N\in \mathbb{N}, M,n\in [N]$                         | /                                                                                               | $\displaystyle p(k) = \frac{{M \choose k}{N-M \choose n-k}}{{N \choose k}}$                                                                             | $\frac{nM}{N}$                              | $\displaystyle\frac{nM(N-n)(N-M)}{N^{2}(N-1)}$                                                                  | /                                                                                             |                                  |
| [[Cauchy Distribution]]               | /                              | $a$                                                   | $\frac{1}{\pi}\left(\arctan \frac{x}{a} +\frac{\pi}{2}  \right)$                                | $\frac{1}{\pi}\frac{a}{x^{2} + a ^{2}}$                                                                                                                 | *Undefined*                                 | *Undefined*                                                                                                     | *Undefined*                                                                                   |                                  |
| Discrete [[Power Law Distribution]]   | /                              | Discrete: $\alpha\in\R_{++}$                          | $F(k)=1-1 /(k+1)^{\alpha }$                                                                     | $p(k) = 1 /k^{\alpha} - 1 /(k+1)^{\alpha}$                                                                                                              | Discrete: $\sum_{k=1}^{\infty}1/k^{\alpha}$ | Discrete: $\sum_{k=1}^{\infty} 2k^{1-\alpha} - k^{-\alpha} - \left( \sum_{k=1}^{\infty}k^{-\alpha} \right)^{2}$ | Discrete: $1 + (e^{t}-1) \sum_{k=0}^{\infty}e^{tk}(k+1)^{-\alpha}$                            |                                  |
| Continuous [[Power Law Distribution]] | /                              | Continuous: $\alpha, c\in\R_{++}$, $\beta=c^{\alpha}$ | $F(x) = 1 - c^{\alpha} /x^{\alpha}$ for $x\ge c$                                                | $f(x) = \alpha c^{\alpha} /x^{\alpha+1}$                                                                                                                | Continuous: $\frac{\alpha}{\alpha-1}$       | Continuous: $\frac{\alpha}{(\alpha-1)^{2}(\alpha-2)}$                                                           | /                                                                                             |                                  |
| [[Dirac Distribution]]                | $\delta_{x_0}$                 | $x_0\in\mathbb{R}$                                    | $F(x) = \mathbb{1}\left\{ x\ge x_0 \right\}$                                                    | $p(x)=\delta(x-x_0)$                                                                                                                                    | $x_0$                                       | $0$                                                                                                             | $e^{x_0t}$                                                                                    |                                  |
| [[Laplace Distribution]]              |                                |                                                       |                                                                                                 |                                                                                                                                                         |                                             |                                                                                                                 |                                                                                               |                                  |



## References

- Textbooks
    - Dimitri P. Bertsekas and John N. Tsitsiklis, *Introduction to Probability*
    - Geoffrey Grimmett and David Stirzaker, *Probability and Random Processes*
    - Sheldon Ross, *Introduction to Probability and Statistics for Engineers and Scientists*
    - Gangjian Ying and Ping He, *Probability Theory*
- Courses
    - MIT 6.7700 w/ Prof. Philippe Rigollet, and 6.431 w/ Prof. John Tsitsiklis
    - Columbia STAT 5701, 5703
    - Fudan MATH 130009 w/ Prof. Gangjian Ying
