---
publish: true
title: A Plausible Treatment Test
created: 2022-09-14T00:12:25
modified: 2026-06-27T23:04:14
published: 2026-06-28T06:04:14.710Z
tags:
  - pub-prob
type: note
output: pdf_document
author: Chenyu Zhang (cz2736)
geometry: margin=2.5cm
fontsize: 11pt
sup:
  - "[[Probability]]"
state: done
---

# A Plausible Treatment Test

A new treatment for recovery is tested against placebo on two age groups, with the following result:

Total:

|       | R   | not R |
| ----- | --- | ----- |
| T     | 20  | 30    |
| not T | 16  | 34    |

Age < 25:

|       | R   | not R |
| ----- | --- | ----- |
| T     | 19  | 21    |
| not T | 5   | 5     |

Age >= 25:

|       | R   | not R |
| ----- | --- | ----- |
| T     | 1   | 9     |
| not T | 11  | 29    |

The conclusion that the treatment positively affects **all human** **beings** is **wrong.** Because the hidden **age distributions** of the group with treatment and the group without treatment are different, and _maybe_ age affects the recovery rate (I say "maybe" because there may be other factors, which I will explain later).

We can make up another simple test to illustrate this. This time the treatment is a placebo, which has **no effect**. And in fact, people of age < 25 have a natural recovery rate of 0.8, while people of age $\ge 25$ have a natural recovery rate of 0.5. Then for the group with treatment, we choose 80 people of age $< 25$ and 20 people of age $\ge 25$; while for the group without treatment, we choose 50 people of age $< 25$ and 50 people of age $\ge 25$. Then the conclusion table is

| | R | nR |
|-|-|-|
| T | 74 | 26 |
| nT | 65 | 35 |

from which we may conclude that **the treatment (placebo) has a positive effect**, which is wrong.

Let us go back to the example in the class. If all other relevant factors are the same, we can see that young (age $< 25$) people have a higher natural recovery rate, and the treatment has a **negative effect** on all people. However, **young people are more resistant to the treatment.** With a higher natural recovery rate and higher resistance to the treatment, when there are more young people in the group with treatment, it appears that the treatment has a positive effect.

Now we can answer the bigger problem: when can we draw a conclusion reliably? The answer is: when other **relevant conditions** are the same for both groups. We say condition $A$ is relevant, if

$P(\text{one recovers} \mid \text{one has } A) \ne P(\text{one recovers})$

i.e. recovery and $A$ are not independent. In the above examples, one has $A$ could be "one has an age from a certain age distribution". So we need the age distributions for both group to be the same. While other factors **independent to** the recovery, like group size, can be different.
