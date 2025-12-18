import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const Reports: React.FC = () => {
    const reports = [
        { title: 'EU AI Act Compliance Summary - Q4 2025', date: 'Dec 2025', size: '2.4 MB', type: 'Compliance' },
        { title: 'Cross-Government AI Portfolio Board Paper', date: 'Dec 2025', size: '1.8 MB', type: 'Board Paper' },
        { title: 'AI Infrastructure Cost Analysis FY25/26', date: 'Nov 2025', size: '1.1 MB', type: 'Financial' },
        { title: 'High-Risk Systems Audit Report', date: 'Nov 2025', size: '3.2 MB', type: 'Audit' },
        { title: 'Annex IV Technical Documentation - HMRC Fraud Detection', date: 'Nov 2025', size: '4.5 MB', type: 'Technical' },
        { title: 'Model Performance Metrics - All Departments', date: 'Oct 2025', size: '14 MB', type: 'Performance' },
        { title: 'Data Governance Assessment Report', date: 'Oct 2025', size: '2.1 MB', type: 'Governance' },
        { title: 'User Access & Permissions Review', date: 'Oct 2025', size: '0.8 MB', type: 'Security' },
    ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gov-navy mb-6">Reports & Exports</h2>
      
      <div className="bg-white border border-gov-border rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-bold text-gov-navy">Available Documents</h3>
        </div>
        <ul className="divide-y divide-gray-200">
            {reports.map((report, idx) => (
                <li key={idx} className="p-4 hover:bg-blue-50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded text-gov-secondary">
                            <FileText size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-gov-navy">{report.title}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                <span className="flex items-center gap-1"><Calendar size={12}/> {report.date}</span>
                                <span>{report.size}</span>
                            </div>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-gov-teal text-gov-teal rounded hover:bg-gov-teal hover:text-white transition-colors text-sm font-medium">
                        <Download size={14} /> Download
                    </button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
