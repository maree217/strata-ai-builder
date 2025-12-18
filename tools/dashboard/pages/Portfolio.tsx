import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { SystemStatus, RiskLevel } from '../types';

const Portfolio: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const systems = [
        { id: 'SYS-001', name: 'Fraud Detection Engine', dept: 'HMRC', risk: RiskLevel.HIGH, status: SystemStatus.ACTION_REQUIRED, owner: 'Sarah Connor' },
        { id: 'SYS-002', name: 'Citizen Feedback Analyser', dept: 'DWP', risk: RiskLevel.HIGH, status: SystemStatus.COMPLIANT, owner: 'John Smith' },
        { id: 'SYS-003', name: 'Document Classifier', dept: 'Home Office', risk: RiskLevel.LIMITED, status: SystemStatus.COMPLIANT, owner: 'James Bond' },
        { id: 'SYS-004', name: 'Internal Search', dept: 'Cabinet Office', risk: RiskLevel.MINIMAL, status: SystemStatus.COMPLIANT, owner: 'Emma Peel' },
        { id: 'SYS-005', name: 'Visa Application Sorter', dept: 'Home Office', risk: RiskLevel.HIGH, status: SystemStatus.UNDER_REVIEW, owner: 'George Smiley' },
        { id: 'SYS-006', name: 'Flood Prediction Model', dept: 'DEFRA', risk: RiskLevel.LIMITED, status: SystemStatus.COMPLIANT, owner: 'Weather Team' },
    ];

    const filteredSystems = systems.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.dept.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getRiskBadge = (risk: RiskLevel) => {
        switch(risk) {
            case RiskLevel.HIGH: return <span className="bg-red-100 text-gov-red border border-red-200 px-2 py-1 rounded text-xs font-bold">High-Risk</span>;
            case RiskLevel.LIMITED: return <span className="bg-orange-100 text-orange-700 border border-orange-200 px-2 py-1 rounded text-xs font-bold">Limited</span>;
            case RiskLevel.MINIMAL: return <span className="bg-green-100 text-green-800 border border-green-200 px-2 py-1 rounded text-xs font-bold">Minimal</span>;
            default: return null;
        }
    };

    return (
        <div>
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gov-navy">System Portfolio</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400"/>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search systems..." 
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gov-teal w-full sm:w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded text-gov-navy hover:bg-gray-50 text-sm font-medium">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-gov-navy text-white rounded hover:bg-blue-800 text-sm font-medium">
                        <Download size={16} /> Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gov-border rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm gov-table">
                        <thead className="bg-gray-100 border-b border-gov-border text-gov-navy uppercase font-semibold text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">System Name</th>
                                <th className="px-6 py-4">Department</th>
                                <th className="px-6 py-4">Risk Level</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Owner</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredSystems.map((system) => (
                                <tr key={system.id} className="group hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-gray-500">{system.id}</td>
                                    <td className="px-6 py-4 font-semibold text-gov-navy">{system.name}</td>
                                    <td className="px-6 py-4 text-gov-secondary">{system.dept}</td>
                                    <td className="px-6 py-4">{getRiskBadge(system.risk)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`flex items-center gap-1.5 font-medium ${system.status === SystemStatus.COMPLIANT ? 'text-gov-green' : system.status === SystemStatus.ACTION_REQUIRED ? 'text-gov-amber' : 'text-gray-600'}`}>
                                            <div className={`w-2 h-2 rounded-full ${system.status === SystemStatus.COMPLIANT ? 'bg-gov-green' : system.status === SystemStatus.ACTION_REQUIRED ? 'bg-gov-amber' : 'bg-gray-400'}`}></div>
                                            {system.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gov-secondary">{system.owner}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gov-teal font-medium hover:underline">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gov-border flex justify-between items-center text-sm">
                    <span className="text-gov-secondary">Showing {filteredSystems.length} systems</span>
                    <div className="flex gap-2">
                        <button className="text-gov-secondary hover:text-gov-navy disabled:opacity-50" disabled>Previous</button>
                        <button className="text-gov-teal hover:text-gov-navy font-medium">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
