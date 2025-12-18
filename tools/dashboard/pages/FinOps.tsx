import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Coins, TrendingUp } from 'lucide-react';

const costData = [
  { month: 'Jan', cloud: 4000, api: 2400 },
  { month: 'Feb', cloud: 3000, api: 1398 },
  { month: 'Mar', cloud: 2000, api: 9800 },
  { month: 'Apr', cloud: 2780, api: 3908 },
  { month: 'May', cloud: 1890, api: 4800 },
  { month: 'Jun', cloud: 2390, api: 3800 },
];

const FinOps: React.FC = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gov-navy">Financial Operations</h2>
            <div className="bg-gray-100 p-1 rounded-lg flex text-sm">
                <button className="px-3 py-1 bg-white rounded shadow-sm text-gov-navy font-medium">Monthly</button>
                <button className="px-3 py-1 text-gray-500 hover:text-gov-navy">Quarterly</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600"><Coins size={24}/></div>
                    <div>
                        <p className="text-sm text-gray-500">Total Spend (YTD)</p>
                        <p className="text-2xl font-bold text-gov-navy">£482,000</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-50 rounded-full text-green-600"><TrendingUp size={24}/></div>
                    <div>
                        <p className="text-sm text-gray-500">Budget Remaining</p>
                        <p className="text-2xl font-bold text-gov-navy">£1.2M</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-50 rounded-full text-orange-600"><PieChart size={24}/></div>
                    <div>
                        <p className="text-sm text-gray-500">Highest Cost Center</p>
                        <p className="text-xl font-bold text-gov-navy">HMRC (Fraud)</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
            <h3 className="font-bold text-gov-navy mb-4">Cost Trend: Infrastructure vs API Calls</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={costData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1e3a5f" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#1e3a5f" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorApi" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00a3a6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#00a3a6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="cloud" stroke="#1e3a5f" fillOpacity={1} fill="url(#colorCloud)" />
                        <Area type="monotone" dataKey="api" stroke="#00a3a6" fillOpacity={1} fill="url(#colorApi)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
};

export default FinOps;
