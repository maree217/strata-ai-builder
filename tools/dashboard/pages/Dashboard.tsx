import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUpRight, Users, Server, AlertTriangle } from 'lucide-react';

const deptData = [
  { name: 'HMRC', systems: 12 },
  { name: 'DWP', systems: 18 },
  { name: 'Home Office', systems: 8 },
  { name: 'MoJ', systems: 6 },
  { name: 'Cab Office', systems: 4 },
];

const usageData = [
  { name: 'Jan', requests: 4000 },
  { name: 'Feb', requests: 3000 },
  { name: 'Mar', requests: 2000 },
  { name: 'Apr', requests: 2780 },
  { name: 'May', requests: 1890 },
  { name: 'Jun', requests: 2390 },
  { name: 'Jul', requests: 3490 },
];

const MetricCard = ({ title, value, change, icon: Icon, colorClass }: any) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 border-t-4 ${colorClass} p-6`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gov-secondary">{title}</p>
        <p className="text-3xl font-bold text-gov-navy mt-1">{value}</p>
      </div>
      <div className="p-2 bg-gray-50 rounded-full text-gray-500">
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
        <span className="text-gov-green font-medium flex items-center">
             <ArrowUpRight size={16} className="mr-1" /> {change}
        </span>
        <span className="text-gov-secondary ml-2">from last month</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gov-navy">Dashboard Overview</h2>
        <div className="flex gap-2">
            <select className="bg-white border border-gray-300 text-gov-navy text-sm rounded-lg focus:ring-gov-teal focus:border-gov-teal block p-2.5">
                <option>All Departments</option>
                <option>HMRC</option>
                <option>DWP</option>
            </select>
            <button className="bg-gov-teal text-white px-4 py-2 rounded hover:bg-gov-tealDark font-medium text-sm transition-colors">
                Download Report
            </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total AI Systems" value="48" change="+2" icon={Server} colorClass="border-t-gov-navy" />
        <MetricCard title="Active Users" value="1,240" change="+12%" icon={Users} colorClass="border-t-gov-teal" />
        <MetricCard title="Compliance Alerts" value="4" change="-1" icon={AlertTriangle} colorClass="border-t-gov-red" />
        <MetricCard title="API Requests (24h)" value="89.2k" change="+5%" icon={ArrowUpRight} colorClass="border-t-gov-green" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gov-navy mb-4">Systems by Department</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#f3f4f6'}} />
                <Bar dataKey="systems" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gov-navy mb-4">Cross-Gov API Usage Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip />
                <Line type="monotone" dataKey="requests" stroke="#00a3a6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-gov-navy">Recent Activity</h3>
                <button className="text-gov-teal text-sm font-medium hover:underline">View all</button>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gov-green"></div>
                        <div>
                            <p className="text-sm font-medium text-gov-navy">Fraud Detection Engine passed compliance review</p>
                            <p className="text-xs text-gov-secondary">Sarah Connor (HMRC) • 1 hour ago</p>
                        </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-medium">Compliant</span>
                </li>
                <li className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gov-teal"></div>
                        <div>
                            <p className="text-sm font-medium text-gov-navy">Universal Credit Chatbot moved to Alpha phase</p>
                            <p className="text-xs text-gov-secondary">James Wilson (DWP) • 3 hours ago</p>
                        </div>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">Alpha</span>
                </li>
                <li className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gov-amber"></div>
                        <div>
                            <p className="text-sm font-medium text-gov-navy">Annex IV documentation generated for Visa Sorter</p>
                            <p className="text-xs text-gov-secondary">Emma Peel (Home Office) • 5 hours ago</p>
                        </div>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">Documentation</span>
                </li>
                <li className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gov-red"></div>
                        <div>
                            <p className="text-sm font-medium text-gov-navy">Compliance alert: Data governance review due</p>
                            <p className="text-xs text-gov-secondary">System • Yesterday</p>
                        </div>
                    </div>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium">Action Required</span>
                </li>
            </ul>
       </div>
    </div>
  );
};

export default Dashboard;
