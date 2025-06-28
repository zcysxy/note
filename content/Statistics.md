---
{"publish":true,"aliases":["index"],"title":"*Sufficient* of Statistics","created":"2023-10-17T21:41:50","modified":"2025-06-07T21:21:57","cssclasses":"","type":"index","sup":["[[Math]]"],"state":"[[%wip]]","banner":"https://raw.githubusercontent.com/zcysxy/Figurebed/master/img/20231017221426.png","banner_icon":"🔮","reference":"AOS"}
---


# *Sufficient* of Statistics

Statistics is a **problem-solving procedure**:

```mermaid
flowchart LR
subgraph AA["Data"]
    direction TB
    A1@{shape: braces, label: "distribution<br>dependence<br>..."}
end
subgraph BB["Method"]
    direction TB
    B1@{shape: braces, label: "algorithms<br>statistics<br>..."}
end
subgraph CC["Problem"]
    direction TB
    C1@{shape: braces, label: "output<br>metric<br>..."}
end
AA --- BB --- CC
```

- [c] Table. Statistics dictionary

| Statistics                         | **[[Machine Learning]]**            |
| ---------------------------------- | ----------------------------------- |
| [[Estimation]]                     | [[Machine Learning\|learning]]      |
| [[Regression]]                     | [[Supervised Learning]]             |
| [[Clustering]]                     | [[Unsupervised Learning]]           |
| [[Hypothesis Testing\|hypothesis]] | [[Classification]]                  |
| covariates                         | features                            |
| coefficient                        | weight                              |
| predictor                          | input                               |
| response                           | output                              |
| intercept                          | bias                                |
| derived predictor                  | [[Hidden Units]]                    |
| penalty function                   | [[L2 Regularization\|weight decay]] |

## Basic Concepts

- [[Statistical Model]]
- [[Statistical Decision Theory]]
- [[f-Divergence]]
    - [[Total Variation Distance]]
    - [[KL Divergence]]

- Estimation
    - Point Estimation
        - [[Evaluating an Estimator]]
        - [[Maximum Likelihood Estimation]]
        - [[Method of Moments]]
        - [[Mean Squared Error]]
        - [[M-Estimator]]
        - [[Z-Estimator]]
    - Interval Estimation: [[Confidence Interval]]
    - Distributional Estimation: [[Bayes Estimation]]
- [[Hypothesis Testing]]
    - [[Evaluating a Test]]
        - [[Bayes Optimal Test]]
        - [[Uniformly Most Powerful Test]]
    - [[p-value]]
- [[Prediction]]/[[Regression]]
    - [[ANOVA]]

## Advanced Topics

- [[Expectation Maximization]]
- [[Confidence Interval and Hypothesis Test Duality]]
- [[Hardness of Simple Hypothesis Test Through Total Variation]]
- [[Hardness of Estimation Through Testing]]

## Probability and Statistics

```mermaid
graph LR
A(Data generating process) --Probability--> B(Observed data)
B --Statistical inference--> A
```

[[Probability Theory]] answers the following question:

> [!qn] Given a data generating process, what are the properties of the outcomes?

While statistical inference answers the inverse problem:

> [!qn] Given the outcomes, what can we say about the process that generated the data?

## References

- Textbooks
    - Larry Wasserman, *All of Statistics*
    - van der Vaart, *Asymptotic Statistics*
    - Sheldon Ross, *Introduction to Probability and Statistics for Engineers and Scientists*
- Courses
    - Columbia STAT 5701, 5703
    - MIT 6.S951, 18.6501
