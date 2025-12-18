import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  dept: string;
  tag: string;
}

const PipelineColumn = ({ title, count, color, projects }: { title: string, count: number, color: string, projects: Project[] }) => (
  <div className="flex flex-col bg-gray-100 rounded-lg h-full min-h-[500px]">
    <div className={`p-4 border-t-4 ${color} rounded-t-lg bg-white shadow-sm flex justify-between items-center`}>
      <h3 className="font-bold text-gov-navy text-sm uppercase tracking-wide">{title}</h3>
      <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-bold">{count}</span>
    </div>
    <div className="p-3 space-y-3 overflow-y-auto flex-1">
      {projects.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
             <span className="text-xs font-bold text-gov-secondary uppercase">{p.dept}</span>
             <button className="text-gray-400 hover:text-gov-navy opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal size={16} />
             </button>
          </div>
          <h4 className="font-bold text-gov-navy text-sm mb-3">{p.name}</h4>
          <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium border border-blue-100">
            {p.tag}
          </span>
        </div>
      ))}
       <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded text-gray-500 hover:border-gov-teal hover:text-gov-teal text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <Plus size={16} /> Add Project
       </button>
    </div>
  </div>
);

const Pipeline: React.FC = () => {
  const discoveryProjects = [
    { id: '1', name: 'Universal Credit Chatbot', dept: 'DWP', tag: 'NLP' },
    { id: '2', name: 'Border Crossing Vision', dept: 'Home Office', tag: 'Computer Vision' },
    { id: '7', name: 'Planning Application Triage', dept: 'DLUHC', tag: 'Classification' },
    { id: '8', name: 'NHS Appointment Predictor', dept: 'DHSC', tag: 'Forecasting' }
  ];

  const alphaProjects = [
     { id: '3', name: 'Tax Fraud Patterns', dept: 'HMRC', tag: 'Anomaly Detection' },
     { id: '9', name: 'Citizen Feedback Analyser', dept: 'Cabinet Office', tag: 'Sentiment' },
     { id: '10', name: 'Court Document Summariser', dept: 'MoJ', tag: 'NLP' }
  ];

  const betaProjects = [
      { id: '4', name: 'Prison Capacity Model', dept: 'MoJ', tag: 'Predictive' },
      { id: '5', name: 'Traffic Flow Optimiser', dept: 'DfT', tag: 'Optimization' },
      { id: '11', name: 'Flood Risk Assessment', dept: 'DEFRA', tag: 'Risk Modelling' }
  ];

  const liveProjects = [
      { id: '6', name: 'Passport Renewal Automation', dept: 'Home Office', tag: 'Automation' },
      { id: '12', name: 'Fraud Detection Engine', dept: 'HMRC', tag: 'Anomaly Detection' },
      { id: '13', name: 'Benefits Eligibility Checker', dept: 'DWP', tag: 'Rules Engine' }
  ];

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gov-navy">Development Pipeline</h2>
        <button className="bg-gov-navy text-white px-4 py-2 rounded hover:bg-blue-800 font-medium text-sm flex items-center gap-2">
            <Plus size={16} /> New Proposal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
        <PipelineColumn title="Discovery" count={4} color="border-t-purple-500" projects={discoveryProjects} />
        <PipelineColumn title="Alpha" count={3} color="border-t-orange-500" projects={alphaProjects} />
        <PipelineColumn title="Beta" count={3} color="border-t-gov-teal" projects={betaProjects} />
        <PipelineColumn title="Live" count={3} color="border-t-gov-green" projects={liveProjects} />
      </div>
    </div>
  );
};

export default Pipeline;
