import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Crown, HelpCircle, LogOut, MessageSquare } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Launchpad', path: '/launchpad' },
    { name: 'Dashboard', path: '/' },
    { name: 'Pipeline', path: '/pipeline' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'FinOps', path: '/finops' },
    { name: 'Reports', path: '/reports' },
  ];

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    if (confirm('Are you sure you want to sign out?')) {
      alert('Signed out securely.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="bg-gov-navy text-white shadow-md z-10">
        {/* Top Bar */}
        <div className="border-b border-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="font-bold font-sans">GOV.UK</span>
              <span className="bg-amber-500 px-1.5 py-0.5 text-xs font-bold text-white rounded">DEMO PROTOTYPE</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="hover:underline text-gray-200 flex items-center gap-1">
                <HelpCircle size={14} /> Help
              </button>
              <button className="hover:underline text-gray-200 flex items-center gap-1">
                <MessageSquare size={14} /> Feedback
              </button>
              <div className="flex items-center gap-2 border-l border-blue-900 pl-6">
                <span className="text-gray-300 hidden sm:inline">Jane Smith (Cabinet Office)</span>
                <button onClick={handleSignOut} className="hover:underline font-semibold ml-2 flex items-center gap-1">
                  Sign out <LogOut size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header & Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-gov-navy shrink-0">
              <Crown size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">AI Portfolio Management Service</h1>
              <p className="text-blue-200 text-sm">Cross-Government AI Assurance & Oversight</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-1 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-t-md font-medium transition-colors whitespace-nowrap ${isActive
                    ? 'bg-white text-gov-navy shadow-[0_-2px_0_0_#00a3a6] font-bold'
                    : 'text-gray-300 hover:bg-blue-900 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb - Mock */}
        <nav className="flex text-gov-secondary text-sm mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button className="inline-flex items-center hover:text-gov-navy hover:underline">
                Home
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400 mx-1">/</span>
                <span className="ml-1 font-semibold text-gov-text capitalize">
                  {location.pathname === '/' ? 'Dashboard' : location.pathname.substring(1)}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-gray-200 p-2 rounded text-gov-navy">
                <Crown size={32} />
              </div>
              <div>
                <h3 className="font-bold text-gov-navy">AI Portfolio Management Service</h3>
                <p className="text-sm text-gov-secondary">Built by the Cabinet Office for UK Government.</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gov-teal underline decoration-1 underline-offset-2">
                  <button className="hover:text-gov-navy hover:bg-gray-200">Accessibility</button>
                  <button className="hover:text-gov-navy hover:bg-gray-200">Privacy</button>
                  <button className="hover:text-gov-navy hover:bg-gray-200">Cookies</button>
                  <button className="hover:text-gov-navy hover:bg-gray-200">Contact Support</button>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">&copy; Crown Copyright 2025</p>
              <p className="text-xs text-gray-400 mt-1">Contains public sector information licensed under the Open Government Licence v3.0</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
