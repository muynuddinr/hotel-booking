'use client';
import React from 'react';
import { 
  FaUsers, 
  FaBed, 
  FaMoneyBillWave, 
  FaCalendarCheck,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';

// Simple line chart component for demo
const SimpleLineChart = () => (
  <div className="relative h-64">
    <div className="absolute inset-0 flex items-end">
      <div className="h-1/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-2/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-3/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-2/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-4/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-3/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-4/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-full w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-4/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-3/5 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-5/6 w-1/12 bg-blue-500 mx-0.5"></div>
      <div className="h-2/3 w-1/12 bg-blue-500 mx-0.5"></div>
    </div>
    <div className="absolute bottom-0 w-full border-t border-gray-300 pt-2 flex justify-between text-xs text-gray-500">
      <span>Jan</span>
      <span>Feb</span>
      <span>Mar</span>
      <span>Apr</span>
      <span>May</span>
      <span>Jun</span>
      <span>Jul</span>
      <span>Aug</span>
      <span>Sep</span>
      <span>Oct</span>
      <span>Nov</span>
      <span>Dec</span>
    </div>
  </div>
);

// Recent activity component for demo
const RecentActivity = () => {
  const activities = [
    { id: 1, event: 'New booking', user: 'John Smith', time: '5 minutes ago', type: 'booking' },
    { id: 2, event: 'Payment received', user: 'Emily Johnson', time: '1 hour ago', type: 'payment' },
    { id: 3, event: 'Room service request', user: 'Michael Wong', time: '2 hours ago', type: 'service' },
    { id: 4, event: 'Check-out completed', user: 'Sarah Williams', time: '3 hours ago', type: 'checkout' },
    { id: 5, event: 'New customer registration', user: 'Robert Johnson', time: '5 hours ago', type: 'registration' },
  ];

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    activity.type === 'booking' ? 'bg-green-100' :
                    activity.type === 'payment' ? 'bg-blue-100' :
                    activity.type === 'service' ? 'bg-yellow-100' :
                    activity.type === 'checkout' ? 'bg-red-100' : 'bg-purple-100'
                  }`}>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      activity.type === 'booking' ? 'text-green-500' :
                      activity.type === 'payment' ? 'text-blue-500' :
                      activity.type === 'service' ? 'text-yellow-500' :
                      activity.type === 'checkout' ? 'text-red-500' : 'text-purple-500'
                    }`}>
                      {activity.type === 'booking' && <FaCalendarCheck />}
                      {activity.type === 'payment' && <FaMoneyBillWave />}
                      {activity.type === 'service' && <FaBed />}
                      {activity.type === 'checkout' && <FaCalendarCheck />}
                      {activity.type === 'registration' && <FaUsers />}
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {activity.user}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {activity.event} • {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function AdminDashboard() {
  // Mock data for the dashboard
  const stats = [
    { id: 1, name: 'Total Guests', value: '1,245', icon: FaUsers, change: 12, isIncrease: true },
    { id: 2, name: 'Active Bookings', value: '42', icon: FaCalendarCheck, change: 8, isIncrease: true },
    { id: 3, name: 'Room Occupancy', value: '78%', icon: FaBed, change: 3, isIncrease: false },
    { id: 4, name: 'Revenue (MTD)', value: '$45,678', icon: FaMoneyBillWave, change: 15, isIncrease: true },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-700">
            A comprehensive overview of your hotel's performance and statistics.
          </p>
        </div>
      </div>

      {/* Stats overview */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-10 w-10 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm flex items-center">
                {stat.isIncrease ? (
                  <FaArrowUp className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500" />
                ) : (
                  <FaArrowDown className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500" />
                )}
                <span className={stat.isIncrease ? "text-green-700" : "text-red-700"}>
                  {stat.change}%
                </span>
                <span className="ml-1.5 text-gray-500">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts section */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Revenue Overview</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Year: 2023</span>
            </div>
          </div>
          <SimpleLineChart />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Occupancy Rate</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Last 12 months</span>
            </div>
          </div>
          <SimpleLineChart />
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
} 