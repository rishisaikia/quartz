---
type: mental-model
category:
  - Statistics
  - Decision Making
  - Game Theory
related_models:
  - "[[Asymmetric Risk]]"
  - "[[Probability]]"
  - "[[Opportunity Cost]]"
---

## Definition
The average outcome you can expect from a decision if you repeated it many times, calculated by multiplying each possible outcome by its probability and summing them up.

## Key Insight
Good decisions can have bad outcomes, and bad decisions can have good luck. Expected value lets you evaluate decisions based on the reasoning, not the results. Over time, making positive expected value decisions compounds into success, even when individual outcomes vary.

## How to Apply
Calculate expected value:
- List all possible outcomes
- Estimate the probability of each
- Estimate the value (gain or loss) of each
- Multiply probability × value for each outcome
- Sum them up

Choose the option with the highest expected value.

## Real-World Example
A coin flip bet: Pay $1 to play. Heads you win $3, tails you get nothing.
- Probability of heads: 50% × $3 = $1.50
- Probability of tails: 50% × $0 = $0
- Expected value: $1.50 - $1 cost = $0.50 profit

You should always take this bet, even though half the time you'll lose. Over many flips, you'll profit.

Career decision: Job A has 100% certainty of $100k salary. Job B has 50% chance of $50k (if startup fails) and 50% chance of $300k (if startup succeeds).
- Job A EV: 100% × $100k = $100k
- Job B EV: (50% × $50k) + (50% × $300k) = $175k

Job B has higher expected value, though higher variance. If you can handle the risk and have multiple career bets, Job B is better long-term.

## Common Pitfalls
- Confusing expected value with guaranteed outcome (it's an average)
- Not accounting for risk tolerance (EV ignores how much variance you can handle)
- Poor probability estimates making the calculation meaningless
- Ignoring outcomes you can't afford even once (bankruptcy, death)
