# AI Governance Guide

**Enterprise governance for AI portfolios — compliance, risk, and oversight.**

---

## Why Governance Matters

AI governance isn't optional. It's the difference between:
- **Scaling confidently** vs. scaling recklessly
- **Regulatory compliance** vs. costly violations
- **Stakeholder trust** vs. reputational risk

Governance runs **throughout** the Three-Layer Architecture, not as a separate phase.

---

## The Strata Governance Model

```
┌─────────────────────────────────────────────────────────────┐
│                    GOVERNANCE LAYER                          │
│         Runs throughout all three layers                     │
├─────────────────────────────────────────────────────────────┤
│  Layer 3: Experience    │  User consent, explainability     │
│  Layer 2: Intelligence  │  Model cards, bias testing        │
│  Layer 1: Infrastructure│  Access controls, audit trails    │
└─────────────────────────────────────────────────────────────┘
```

---

## Governance by Layer

### Layer 1: Infrastructure Governance

| Area | Requirements | Tools |
|------|--------------|-------|
| **Access Control** | Role-based access, least privilege | Azure AD, IAM policies |
| **Audit Trails** | All API calls logged, immutable | Cloud Logging, SIEM |
| **Data Privacy** | Encryption at rest/transit, retention policies | Key Vault, DLP |
| **Cost Controls** | Budget alerts, approval workflows | FinOps dashboards |

**Checklist:**
- [ ] All AI systems require authentication
- [ ] API calls are logged with user context
- [ ] Data retention policies documented
- [ ] Cost alerts configured

### Layer 2: Intelligence Governance

| Area | Requirements | Tools |
|------|--------------|-------|
| **Model Documentation** | Model cards for all production models | Internal wiki, MLflow |
| **Bias Testing** | Regular fairness audits | Fairlearn, What-If Tool |
| **Version Control** | All models versioned, rollback capability | MLflow, Weights & Biases |
| **Performance Monitoring** | Drift detection, accuracy tracking | Evidently, Arize |

**Checklist:**
- [ ] Model cards exist for all production models
- [ ] Bias testing completed before deployment
- [ ] Model versions tracked with lineage
- [ ] Performance baselines established

### Layer 3: Experience Governance

| Area | Requirements | Tools |
|------|--------------|-------|
| **User Consent** | Clear opt-in for AI features | Consent management |
| **Explainability** | Users can understand AI decisions | SHAP, LIME, plain language |
| **Human Override** | Users can escalate to human | Escalation workflows |
| **Feedback Loops** | Users can report issues | Feedback forms, monitoring |

**Checklist:**
- [ ] AI features clearly labeled
- [ ] Explanations available for decisions
- [ ] Human escalation path exists
- [ ] User feedback collected and reviewed

---

## EU AI Act Compliance

The EU AI Act categorizes AI systems by risk level:

### Risk Categories

| Risk Level | Examples | Requirements |
|------------|----------|--------------|
| **Unacceptable** | Social scoring, manipulative AI | Prohibited |
| **High-Risk** | HR screening, credit scoring, medical devices | Full compliance required |
| **Limited** | Chatbots, emotion recognition | Transparency obligations |
| **Minimal** | Spam filters, game AI | No specific requirements |

### High-Risk Requirements (Annex IV)

For high-risk AI systems, you must document:

1. **General Description**
   - Intended purpose
   - Persons/groups affected
   - Interaction with other systems

2. **Risk Management**
   - Known risks identified
   - Mitigation measures
   - Residual risks accepted

3. **Data Governance**
   - Training data sources
   - Data quality measures
   - Bias assessment

4. **Technical Documentation**
   - Architecture description
   - Algorithm details
   - Performance metrics

5. **Human Oversight**
   - Oversight mechanisms
   - Human intervention capability
   - User instructions

6. **Accuracy & Robustness**
   - Accuracy metrics
   - Cybersecurity measures
   - Resilience testing

**Use the Strata Dashboard** to generate Annex IV documentation automatically.

---

## Governance Roles

### Recommended Structure

| Role | Responsibility | Reports To |
|------|----------------|------------|
| **AI Governance Lead** | Overall governance strategy | CTO/CDO |
| **AI Ethics Officer** | Ethical review, bias assessment | AI Governance Lead |
| **Model Risk Manager** | Model validation, performance | AI Governance Lead |
| **Data Protection Officer** | Privacy compliance | Legal/Compliance |
| **AI Portfolio Manager** | Initiative tracking, prioritization | AI Governance Lead |

### RACI Matrix

| Activity | Governance Lead | Ethics Officer | Risk Manager | DPO |
|----------|-----------------|----------------|--------------|-----|
| Policy creation | A | C | C | C |
| Risk assessment | A | R | R | C |
| Bias testing | C | A | R | I |
| Privacy review | C | C | I | A |
| Audit response | A | C | C | R |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## Governance Processes

### 1. AI Initiative Approval

```
New AI Idea
    ↓
Risk Classification (Minimal/Limited/High)
    ↓
If High-Risk → Ethics Review → Legal Review
    ↓
Technical Review (Architecture)
    ↓
Governance Approval
    ↓
Add to Portfolio Tracker
```

### 2. Model Deployment Gate

Before any model goes to production:

- [ ] Model card completed
- [ ] Bias testing passed
- [ ] Performance benchmarks met
- [ ] Rollback plan documented
- [ ] Monitoring configured
- [ ] Human oversight defined

### 3. Quarterly Review

Every quarter, review:

1. **Portfolio Health**
   - Active initiatives by stage
   - ROI by initiative
   - Risk distribution

2. **Compliance Status**
   - Documentation completeness
   - Audit findings
   - Regulatory changes

3. **Incident Review**
   - AI incidents logged
   - Root cause analysis
   - Prevention measures

---

## Templates

### Model Card Template

```markdown
# Model Card: [Model Name]

## Overview
- **Purpose**: [What does this model do?]
- **Owner**: [Team/Individual]
- **Version**: [X.Y.Z]
- **Last Updated**: [Date]

## Intended Use
- **Primary Use**: [Main application]
- **Out of Scope**: [What it shouldn't be used for]
- **Users**: [Who uses this model?]

## Training Data
- **Source**: [Where data came from]
- **Size**: [Number of samples]
- **Date Range**: [Time period covered]
- **Known Limitations**: [Data gaps or biases]

## Performance
- **Metrics**: [Accuracy, F1, etc.]
- **Benchmark**: [Comparison to baseline]
- **Limitations**: [Where it performs poorly]

## Ethical Considerations
- **Bias Assessment**: [Results of fairness testing]
- **Potential Harms**: [Identified risks]
- **Mitigations**: [How risks are addressed]

## Maintenance
- **Retraining Schedule**: [How often]
- **Monitoring**: [What's tracked]
- **Escalation**: [When to alert humans]
```

### Risk Assessment Template

```markdown
# Risk Assessment: [Initiative Name]

## Classification
- **EU AI Act Category**: [Minimal/Limited/High/Unacceptable]
- **Internal Risk Score**: [1-5]
- **Data Sensitivity**: [Public/Internal/Confidential/Restricted]

## Identified Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| [Risk 1] | [H/M/L] | [H/M/L] | [Action] | [Name] |

## Residual Risks
[Risks accepted after mitigation]

## Review Schedule
- **Next Review**: [Date]
- **Reviewer**: [Name]
```

---

## Getting Started

1. **Assess Current State**
   - Use [framework/assessment.md](./framework/assessment.md)
   - Identify governance gaps

2. **Classify Initiatives**
   - Apply EU AI Act categories
   - Prioritize high-risk systems

3. **Implement Controls**
   - Start with Layer 1 (infrastructure)
   - Add Layer 2 (intelligence) controls
   - Complete Layer 3 (experience) requirements

4. **Track in Dashboard**
   - Add all initiatives to portfolio
   - Monitor compliance status
   - Generate documentation

---

## Resources

- [EU AI Act Full Text](https://eur-lex.europa.eu/eli/reg/2024/1689)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [ISO/IEC 42001 AI Management System](https://www.iso.org/standard/81230.html)
- [OECD AI Principles](https://oecd.ai/en/ai-principles)

---

*Governance is not a blocker. It's an enabler of sustainable AI at scale.*
