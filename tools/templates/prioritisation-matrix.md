# AI Initiative Prioritisation Matrix

Use this matrix to score and rank your AI initiatives.

---

## Scoring Guide

### Value Score (1-5)

| Score | Meaning | Examples |
|-------|---------|----------|
| **5** | Transformational | New revenue stream, major competitive advantage |
| **4** | High impact | Significant cost savings (>£100K/year), major efficiency gain |
| **3** | Meaningful | Moderate savings, noticeable improvement |
| **2** | Nice to have | Small improvement, limited scope |
| **1** | Minimal | Marginal benefit, few users affected |

**Questions to ask:**
- How many people benefit?
- What's the £ value of the improvement?
- Does this enable something new, or just improve existing?

---

### Effort Score (1-5)

| Score | Meaning | Timeline | Team |
|-------|---------|----------|------|
| **5** | Very hard | 6+ months | Large team, external help |
| **4** | Hard | 3-6 months | Dedicated team |
| **3** | Moderate | 1-3 months | Small team |
| **2** | Easy | Weeks | 1-2 people |
| **1** | Trivial | Days | Individual |

**Questions to ask:**
- Do we have the skills in-house?
- What integrations are required?
- How much data preparation is needed?
- Is this proven technology or experimental?

---

### Risk Score (1-5)

| Score | Meaning | Examples |
|-------|---------|----------|
| **5** | Critical risk | Patient safety, financial crime, legal liability |
| **4** | High risk | Reputation, regulatory compliance, security |
| **3** | Medium risk | Data quality, adoption uncertainty |
| **2** | Low risk | Technical uncertainty, minor integration |
| **1** | Minimal risk | Well-understood, proven approach |

**Questions to ask:**
- What's the worst case if this goes wrong?
- Are there regulatory implications?
- What data is involved (personal, sensitive)?
- How visible is this to customers/public?

---

## Priority Formula

**Priority Score = Value - (Effort + Risk) / 2**

| Priority Score | Level | Action |
|----------------|-------|--------|
| **3.5+** | High | Do first |
| **2.0 - 3.4** | Medium | Plan for next quarter |
| **< 2.0** | Low | Backlog or reconsider |

---

## The Matrix

| ID | Initiative Name | Owner | Value (1-5) | Effort (1-5) | Risk (1-5) | Priority Score | Priority Level |
|----|-----------------|-------|-------------|--------------|------------|----------------|----------------|
| AI-001 | | | | | | | |
| AI-002 | | | | | | | |
| AI-003 | | | | | | | |
| AI-004 | | | | | | | |
| AI-005 | | | | | | | |
| AI-006 | | | | | | | |
| AI-007 | | | | | | | |
| AI-008 | | | | | | | |
| AI-009 | | | | | | | |
| AI-010 | | | | | | | |

---

## Example Completed Matrix

| ID | Initiative Name | Owner | Value | Effort | Risk | Score | Priority |
|----|-----------------|-------|-------|--------|------|-------|----------|
| AI-001 | Customer chatbot | J. Smith | 4 | 3 | 2 | 1.5 | **High** |
| AI-002 | Fraud detection | M. Jones | 5 | 5 | 4 | 0.5 | Low |
| AI-003 | Email classifier | S. Lee | 3 | 2 | 1 | 1.5 | **High** |
| AI-004 | Predictive maintenance | R. Patel | 4 | 4 | 3 | 0.5 | Low |
| AI-005 | Document search | A. Garcia | 3 | 2 | 2 | 1.0 | **Medium** |

**Interpretation:**
- AI-001 and AI-003 are high priority (good value, manageable effort/risk)
- AI-002 and AI-004 are low priority (high value but also high effort/risk)
- AI-005 is medium priority (balanced)

---

## Decision Framework

### High Priority (Score 3.5+)
- Start immediately
- Assign dedicated owner
- Set clear milestones
- Review weekly

### Medium Priority (Score 2.0-3.4)
- Plan for next quarter
- Assign owner to scope further
- May become high priority as conditions change
- Review monthly

### Low Priority (Score < 2.0)
- Keep on backlog
- Revisit quarterly
- May need to:
  - Reduce scope (lower effort)
  - Find new data (lower risk)
  - Wait for technology maturity
  - Abandon if value doesn't justify

---

## Common Patterns

### High Value, High Effort, High Risk
These are "big bets." Consider:
- Breaking into smaller phases
- Running a proof-of-concept first
- Getting executive sponsorship
- Planning for longer timeline

### High Value, Low Effort, Low Risk
These are "quick wins." Do these first to:
- Build momentum
- Demonstrate AI value
- Learn and iterate
- Fund bigger initiatives

### Low Value, Low Effort, Low Risk
These are "easy wins." Consider:
- Bundling several together
- Using for learning/training
- Delegating to junior team members

### Low Value, High Effort
These should probably be **dropped** unless:
- They enable something else
- They're required for compliance
- The value estimate is wrong

---

## Review Checklist

Before finalising priorities:

- [ ] All initiatives have an owner
- [ ] Scores are based on evidence, not assumptions
- [ ] Team agrees on the scoring
- [ ] Dependencies are considered
- [ ] Resources are available for high-priority items
- [ ] Stakeholders have been consulted

---

## Next Steps

1. **High priority items:** Create [AI Idea Canvas](./idea-canvas.md) for each
2. **Starting experiments:** Use [Experiment Log](./experiment-log.md)
3. **Visualise the portfolio:** [Deploy the dashboard](../get-started/level-2-visualize/)

---

*Template from [Strata AI Portfolio Framework](https://github.com/maree217/strata-ai-builder)*
