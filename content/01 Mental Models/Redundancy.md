---
type: mental-model
category:
  - Engineering
  - Risk Management
  - Systems Design
related_models:
  - "[[Margin of Safety]]"
  - "[[Antifragile]]"
  - "[[Single Point of Failure]]"
---

## Definition
Building in backup systems, extra capacity, or duplicate components so that if one fails, others can take over. Intentional duplication to prevent catastrophic failure.

## Key Insight
Efficiency eliminates waste, but it also eliminates slack. A perfectly efficient system has no redundancy—which means it's fragile. Strategic redundancy trades a small amount of efficiency for massive increases in reliability and resilience.

## How to Apply
Identify critical points in any system and ask:
- "What happens if this fails?"
- "Do I have a backup?"
- "Is this a single point of failure?"
- "What redundancy would give me peace of mind?"

Build in backup plans for anything you can't afford to have fail.

## Real-World Example
Airplanes have redundant engines, hydraulic systems, and electrical systems. If one engine fails, the other(s) keep it flying. This seems "wasteful"—why carry extra engines you hopefully never fully need? But the redundancy prevents catastrophic failure.

Your body has two kidneys, but you only need one to survive. This redundancy means kidney failure isn't immediately fatal and allows you to donate one. Evolution built in redundancy at the cost of efficiency.

A business with one key client who provides 80% of revenue is efficient but fragile. If that client leaves, the business collapses. Building redundancy means having many smaller clients—less "efficient" but far more resilient.

Having only one income source (your job) is a single point of failure. Side income streams or savings create redundancy. Having only one skill is fragile; multiple transferable skills create redundancy.

## Common Pitfalls
- Building so much redundancy the system becomes inefficient and uncompetitive
- Adding redundancy to unimportant things while ignoring critical failures
- Assuming redundant systems will work when needed (they need testing and maintenance)
- Confusing redundancy with mere duplication (redundancy must be independent)
