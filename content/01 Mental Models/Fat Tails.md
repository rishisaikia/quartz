---
type: mental-model
category:
  - Risk Management
  - Statistics
  - Decision Making
related_models:
  - "[[Black Swan]]"
  - "[[Asymmetric Risk]]"
  - "[[Margin of Safety]]"
  - "[[Antifragile]]"
---
## Definition
In a fat-tailed distribution, extreme events occur far more frequently than a normal (bell curve) distribution would predict. The "tails"—low-probability, high-impact events—are fatter, meaning rare outcomes carry much more weight than standard models assume.

## Key Insight
Most of our intuitions about risk are calibrated for thin-tailed distributions (like human height, where no one is 100 feet tall). Many important domains—financial markets, pandemics, wars, business outcomes—are fat-tailed. In these domains, standard risk models dramatically underestimate catastrophic outcomes, and the few extreme events dominate the total.

## How to Apply
Identifying fat-tailed domains:
- Is the domain subject to positive feedback loops or cascades?
- Can outcomes compound without limit (wealth, followers, casualties)?
- Are extreme historical events routinely called "once in a century" events?

Adjusting strategy:
- Don't optimize solely for expected value—consider the variance
- Maintain [[Margin of Safety]] against tail events
- Use [[Optionality]] to benefit from positive tails while limiting downside
- Avoid positions where a single bad event can be ruinous

## Real-World Example
**Financial risk:** Models behind the 2008 crisis assumed normally distributed returns. In practice, financial returns have fat tails—large crashes happen far more often than models predicted. Banks were "optimized" for normal conditions and destroyed by tail events.

**Wealth distribution:** Income is fat-tailed. The top 1% holds more wealth than the bottom 50%. A normal distribution can't explain this—a fat-tailed (power law) distribution does.

**Viral spread:** Most social media posts get few views. A tiny fraction go massively viral. Hits are fat-tailed—you can't predict which one takes off, but you can design for the possibility.

## Common Pitfalls
- Assuming a lack of observed extreme events means they're rare (they may just not have happened yet)
- Using thin-tailed models (standard deviation, Value at Risk) in fat-tailed domains
- Treating outliers as statistical noise rather than the most important data points
- Optimizing for the median outcome in a world where the mean is dominated by extremes
