# Governance

**Throughout all layers — compliance, risk, and continuous oversight.**

---

## Overview

Governance isn't a phase. It runs through all three layers:

```
Layer 3 + Governance = User consent, explainability, human override
Layer 2 + Governance = Model cards, bias testing, version control
Layer 1 + Governance = Access controls, audit trails, data privacy
```

For comprehensive governance guidance, see [GOVERNANCE.md](../GOVERNANCE.md) at the repository root.

---

## Quick Reference

### By Layer

| Layer | Key Governance Actions |
|-------|----------------------|
| **Layer 1** | Access controls, audit logging, encryption, cost controls |
| **Layer 2** | Model documentation, bias testing, version control, data lineage |
| **Layer 3** | User consent, explainability, human override, feedback loops |

### By Regulation

| Regulation | Key Requirements | Strata Approach |
|------------|------------------|-----------------|
| **EU AI Act** | Risk classification, documentation, human oversight | Built into assessment and documentation |
| **GDPR** | Data protection, consent, right to explanation | Layer 1 controls, Layer 3 transparency |
| **SOC 2** | Security controls, audit trails | Layer 1 infrastructure |
| **ISO 42001** | AI management system | Full framework alignment |

---

## Governance Checklist

### Before Any AI Initiative

- [ ] Risk classification completed
- [ ] Data sources documented
- [ ] Owner assigned
- [ ] Success metrics defined
- [ ] Compliance requirements identified

### During Development

- [ ] Model card created
- [ ] Bias testing performed
- [ ] Security review completed
- [ ] Documentation updated
- [ ] Testing documented

### Before Deployment

- [ ] All Layer 1 controls active
- [ ] All Layer 2 monitoring operational
- [ ] Human override capability tested
- [ ] User consent mechanism in place
- [ ] Rollback plan documented

### After Deployment

- [ ] Monthly performance review
- [ ] Quarterly bias reassessment
- [ ] Annual compliance audit
- [ ] Continuous monitoring active
- [ ] Feedback loop operational

---

## Monthly Review Agenda

Use this agenda for monthly AI portfolio reviews:

### 1. Portfolio Status (10 min)
- Total initiatives by stage
- Movement since last month
- New initiatives added
- Initiatives sunset

### 2. Risk Review (10 min)
- High-risk initiatives status
- Compliance gaps
- Incidents or near-misses
- Mitigation progress

### 3. Performance Review (15 min)
- Top performers: Why?
- Underperformers: What's wrong?
- Cost trends
- ROI trends

### 4. Compliance Status (10 min)
- Documentation completeness
- Audit findings status
- Upcoming requirements
- Training needs

### 5. Decisions (15 min)
- Resource allocations
- Priority changes
- New approvals
- Sunset decisions

---

## Documentation Templates

### Initiative Registration

```markdown
# AI Initiative Registration

## Basic Information
- **Name**:
- **ID**: AI-XXX
- **Owner**:
- **Department**:
- **Created**: YYYY-MM-DD

## Classification
- **EU AI Act Risk Level**: [Minimal/Limited/High]
- **Data Sensitivity**: [Public/Internal/Confidential/Restricted]
- **User Impact**: [Internal/External/Both]

## Description
[What does this initiative do?]

## Business Case
- **Problem Solved**:
- **Expected Value**:
- **Success Metrics**:

## Technical Overview
- **AI Models Used**:
- **Data Sources**:
- **Infrastructure**:

## Governance
- **Compliance Requirements**:
- **Risk Mitigations**:
- **Review Schedule**:
```

### Monthly Status Report

```markdown
# Monthly Status: [Initiative Name]

## Period: [Month Year]

## Health: 🟢 Green / 🟡 Yellow / 🔴 Red

## Metrics
| Metric | Target | Actual | Trend |
|--------|--------|--------|-------|
| [Metric 1] | | | ↑/↓/→ |
| [Metric 2] | | | ↑/↓/→ |

## Highlights
- [What went well]

## Challenges
- [What's blocking progress]

## Actions
- [What needs to happen next]

## Compliance
- Documentation: ✅/⚠️/❌
- Bias Testing: ✅/⚠️/❌
- Security Review: ✅/⚠️/❌
```

---

## Escalation Matrix

| Situation | Escalate To | Timeline |
|-----------|-------------|----------|
| Security incident | Security team + AI Governance Lead | Immediate |
| Compliance gap discovered | AI Governance Lead | 24 hours |
| Model performance degradation | Technical owner | 48 hours |
| User complaint about AI | Product owner + Ethics | 48 hours |
| Cost overrun >20% | AI Governance Lead + Finance | 1 week |
| Bias detected | Ethics Officer | Immediate |

---

## Resources

- [Full Governance Guide](../GOVERNANCE.md)
- [Assessment](./assessment.md)
- [EU AI Act Summary](https://artificialintelligenceact.eu/)
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)

---

*Governance enables scaling. Without it, every AI initiative is a liability.*
