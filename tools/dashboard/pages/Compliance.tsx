import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Activity, 
  Calendar, 
  Wand2, 
  Loader2, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  XCircle, 
  Download 
} from 'lucide-react';
import { generateDocumentation } from '../services/gemini';

const Compliance: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('Fraud Detection Engine (HMRC)');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedContent('');
    setIsSuccess(false);
    
    // Simulate initial delay for "thinking" feel
    // await new Promise(r => setTimeout(r, 800));

    try {
      const sections = ['System Description', 'Data Governance', 'Post-Market Monitoring'];
      await generateDocumentation(selectedSystem, sections, (chunk) => {
        setGeneratedContent(chunk);
      });
      setIsSuccess(true);
    } catch (e) {
      console.error(e);
      setGeneratedContent('Error generating documentation. Please check your API key.');
    } finally {
      setIsGenerating(false);
    }
  };

  const scrollToGenerator = () => {
    const el = document.getElementById('generator-section');
    el?.scrollIntoView({ behavior: 'smooth' });
    el?.classList.add('ring-4', 'ring-gov-amber', 'transition-all');
    setTimeout(() => el?.classList.remove('ring-4', 'ring-gov-amber'), 1000);
  };

  return (
    <div>
        {/* SECTION 1: Compliance Summary */}
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gov-navy">EU AI Act Compliance Status</h2>
                <button className="text-gov-teal hover:text-gov-tealDark font-medium text-sm flex items-center">
                    <Download className="mr-2" size={18} /> Export Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Metric 1 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-t-4 border-t-gov-red p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gov-secondary">High-Risk Systems</p>
                            <p className="text-3xl font-bold text-gov-navy mt-1">4</p>
                        </div>
                        <div className="p-2 bg-red-50 rounded-full text-gov-red">
                            <AlertCircle size={24} />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-gov-green font-medium flex items-center"><CheckCircle className="mr-1" size={16} /> 3 Compliant</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gov-red font-medium flex items-center"><AlertTriangle className="mr-1" size={16} /> 1 Action Needed</span>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-t-4 border-t-gov-teal p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gov-secondary">Documentation</p>
                            <p className="text-3xl font-bold text-gov-navy mt-1">94%</p>
                        </div>
                        <div className="p-2 bg-teal-50 rounded-full text-gov-teal">
                            <FileText size={24} />
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                        <div className="bg-gov-teal h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-t-4 border-t-gov-green p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gov-secondary">Post-Market Monitoring</p>
                            <p className="text-3xl font-bold text-gov-navy mt-1">Active</p>
                        </div>
                        <div className="p-2 bg-green-50 rounded-full text-gov-green">
                            <Activity size={24} />
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gov-secondary flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gov-green animate-pulse mr-2"></div>
                        System performing within bounds
                    </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-t-4 border-t-gov-navy p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gov-secondary">Next Audit</p>
                            <p className="text-2xl font-bold text-gov-navy mt-1">15 Jan 2026</p>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-full text-gov-navy">
                            <Calendar size={24} />
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gov-teal font-medium hover:underline cursor-pointer">
                        View Audit Calendar &rarr;
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 2: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* LEFT COLUMN: System Table */}
            <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gov-navy">AI Systems by Risk Classification</h3>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-sm border border-gov-border rounded bg-white hover:bg-gray-50 text-gov-text">Filter</button>
                    </div>
                </div>

                <div className="bg-white border border-gov-border rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm gov-table">
                            <thead className="bg-gray-100 border-b border-gov-border text-gov-navy uppercase font-semibold text-xs tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">System Name</th>
                                    <th className="px-6 py-4">Risk Level</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="group hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gov-navy">
                                        Fraud Detection Engine
                                        <div className="text-xs text-gov-secondary font-normal mt-0.5">Dept: HMRC</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="status-badge bg-red-100 text-gov-red border border-red-200 px-2 py-0.5 rounded text-xs font-bold">
                                            High-Risk
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-gov-amber font-medium">
                                            <AlertTriangle className="mr-1.5" size={16} /> Action Req
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gov-teal font-medium hover:underline">View</button>
                                    </td>
                                </tr>
                                <tr className="group hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gov-navy">
                                        Citizen Feedback Analyser
                                        <div className="text-xs text-gov-secondary font-normal mt-0.5">Dept: DWP</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="status-badge bg-red-100 text-gov-red border border-red-200 px-2 py-0.5 rounded text-xs font-bold">
                                            High-Risk
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-gov-green font-medium">
                                            <CheckCircle className="mr-1.5" size={16} /> Compliant
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gov-teal font-medium hover:underline">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Actions */}
            <div className="lg:col-span-5 space-y-4">
                <h3 className="text-lg font-bold text-gov-navy">Compliance Actions Required</h3>
                
                <div className="space-y-4">
                    {/* Urgent Card */}
                    <div className="bg-white border-l-4 border-gov-red rounded-r-lg shadow-sm p-4 relative group hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-2 mb-2">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-gov-red mt-1.5"></span>
                                <span className="text-xs font-bold text-gov-red uppercase tracking-wide">Urgent</span>
                            </div>
                            <span className="text-xs text-gov-secondary">Due: Today</span>
                        </div>
                        <h4 className="font-bold text-gov-navy">Fraud Detection Engine - Annex IV Incomplete</h4>
                        <p className="text-sm text-gov-secondary mt-1 mb-3">
                            Critical documentation missing for high-risk classification compliance.
                        </p>
                        <div className="bg-red-50 p-2 rounded text-xs text-red-800 mb-3 space-y-1">
                            <div className="flex items-center"><XCircle className="mr-1.5" size={14} /> Data Governance Section</div>
                            <div className="flex items-center"><XCircle className="mr-1.5" size={14} /> Testing Procedures</div>
                        </div>
                        <button onClick={scrollToGenerator} className="w-full text-center px-4 py-2 bg-gov-teal text-white rounded font-medium text-sm hover:bg-gov-tealDark transition-colors shadow-sm">
                            Generate Documentation
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 3: Documentation Generator */}
        <section id="generator-section" className="bg-gov-navy rounded-lg shadow-lg overflow-hidden text-white mb-12">
            <details className="group" open>
                <summary className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-blue-900 transition-colors select-none">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded">
                            <Wand2 size={24} className="text-gov-teal" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Annex IV Documentation Generator</h3>
                            <p className="text-blue-200 text-sm">Automated technical documentation for High-Risk AI Systems</p>
                        </div>
                    </div>
                    <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
                </summary>
                
                <div className="bg-white text-gov-text p-6 border-t border-blue-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-bold text-gov-navy mb-2">Select System</label>
                            <div className="relative">
                                <select 
                                  value={selectedSystem}
                                  onChange={(e) => setSelectedSystem(e.target.value)}
                                  className="block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gov-teal focus:border-gov-teal sm:text-sm rounded-md bg-white text-gov-navy shadow-sm"
                                >
                                    <option>Fraud Detection Engine (HMRC)</option>
                                    <option>Citizen Feedback Analyser (DWP)</option>
                                    <option>Visa Sorter (Home Office)</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-sm font-bold text-gov-navy mb-3">Sections to Generate</h4>
                                <div className="space-y-3">
                                    <label className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                                        <input type="checkbox" defaultChecked className="h-4 w-4 text-gov-teal border-gray-300 rounded focus:ring-gov-teal mt-1" />
                                        <div className="ml-3 text-sm">
                                            <span className="font-medium text-gov-navy">System Description</span>
                                            <p className="text-gray-500">Architecture, intended purpose, and logic.</p>
                                        </div>
                                    </label>
                                    <label className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                                        <input type="checkbox" defaultChecked className="h-4 w-4 text-gov-teal border-gray-300 rounded focus:ring-gov-teal mt-1" />
                                        <div className="ml-3 text-sm">
                                            <span className="font-medium text-gov-navy">Data Governance</span>
                                            <p className="text-gray-500">Training data provenance, bias mitigation, and lineage.</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded border border-gray-200 p-4 flex flex-col h-[400px]">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-xs font-bold text-gray-400 uppercase">Preview</h4>
                                {isGenerating && <span className="text-xs text-gov-teal animate-pulse">Generating...</span>}
                            </div>
                            <div className="bg-white shadow-sm border border-gray-100 p-4 flex-grow font-mono text-xs text-gray-600 leading-relaxed overflow-y-auto scroller relative whitespace-pre-wrap">
                                <div className="absolute top-2 right-2 p-1 bg-gray-100 text-gray-400 text-[10px] rounded">DRAFT</div>
                                {generatedContent ? (
                                  generatedContent
                                ) : (
                                  <div className="text-gray-400 italic mt-4 text-center">
                                    Select options and click generate to create documentation draft.
                                  </div>
                                )}
                            </div>
                            
                            <div className="mt-4 flex justify-end gap-3">
                                <button className="px-4 py-2 bg-white border border-gray-300 text-gov-navy rounded hover:bg-gray-50 font-medium text-sm">
                                    Preview Full PDF
                                </button>
                                <button 
                                  onClick={handleGenerate} 
                                  disabled={isGenerating}
                                  className={`px-4 py-2 text-white rounded font-bold text-sm shadow-sm flex items-center transition-all ${isSuccess ? 'bg-gov-green hover:bg-green-700' : 'bg-gov-teal hover:bg-gov-tealDark'} ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isGenerating ? (
                                      <>Generating <Loader2 className="animate-spin ml-2" size={16} /></>
                                    ) : isSuccess ? (
                                      <>Docs Generated <Check className="ml-2" size={16} /></>
                                    ) : (
                                      <>Generate Documentation <ArrowRight className="ml-2" size={16} /></>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
        </section>
    </div>
  );
};

export default Compliance;