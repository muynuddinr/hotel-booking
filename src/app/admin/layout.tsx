'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaUsers, 
  FaChartLine, 
  FaBed, 
  FaEnvelope, 
  FaNewspaper, 
  FaSignOutAlt, 
  FaTimes, 
  FaBars,
  FaHotel
} from 'react-icons/fa';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: FaHome },
    { name: 'Customers', href: '/admin/customers', icon: FaUsers },
    { name: 'Revenue', href: '/admin/revenue', icon: FaChartLine },
    { name: 'Rooms', href: '/admin/rooms', icon: FaBed },
    { name: 'Contact', href: '/admin/contact', icon: FaEnvelope },
    { name: 'Newsletter', href: '/admin/newsletter', icon: FaNewspaper },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {!sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-10"
          onClick={() => setSidebarOpen(true)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 flex flex-col z-50 transition-all duration-300 transform bg-blue-800 md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:w-64 md:flex`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-blue-700">
          <div className="flex items-center space-x-2">
            <FaHotel className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">Admin Panel</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar navigation */}
        <div className="flex-1 overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive 
                      ? 'bg-blue-900 text-white' 
                      : 'text-blue-100 hover:bg-blue-700'
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-blue-300 group-hover:text-white'}`} />
                  {item.name}
                  {isActive && (
                    <span className="ml-auto bg-white w-2 h-2 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout button */}
        <div className="p-4 border-t border-blue-700">
          <Link
            href="/login"
            className="group flex items-center px-4 py-3 text-base font-medium rounded-md text-blue-100 hover:bg-blue-700 transition-colors"
          >
            <FaSignOutAlt className="mr-3 h-5 w-5 text-blue-300 group-hover:text-white" />
            Logout
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-blue-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none"
          >
            <span className="sr-only">Open sidebar</span>
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Content area */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 