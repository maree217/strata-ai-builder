export enum RiskLevel {
  HIGH = 'High-Risk',
  LIMITED = 'Limited',
  MINIMAL = 'Minimal',
  UNACCEPTABLE = 'Unacceptable'
}

export enum SystemStatus {
  COMPLIANT = 'Compliant',
  ACTION_REQUIRED = 'Action Required',
  UNDER_REVIEW = 'Under Review'
}

export interface AISystem {
  id: string;
  name: string;
  department: string;
  riskLevel: RiskLevel;
  status: SystemStatus;
  lastReview: string;
  description: string;
}

export interface ChartData {
  name: string;
  value: number;
}
