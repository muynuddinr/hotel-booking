 'use client';
import React, { useState } from 'react';
import { 
  FaChartLine, 
  FaChartBar, 
  FaChartPie, 
  FaCalendarAlt, 
  FaFileDownload, 
  FaMoneyBillWave, 
  FaArrowUp, 
  FaArrowDown 
} from 'react-icons/fa';

// Simple bar chart component
const SimpleBarChart = () => (
  <div className="relative h-64">
    <div className="absolute inset-0 flex items-end justify-around">
      <div className="flex flex-col items-center">
        <div className="h-20 w-12 bg-blue-500"></div>
        <span className="mt-2 text-xs text-gray-500">Q1</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-32 w-12 bg-blue-500"></div>
        <span className="mt-2 text-xs text-gray-500">Q2</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-48 w-12 bg-blue-500"></div>
        <span className="mt-2 text-xs text-gray-500">Q3</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-40 w-12 bg-blue-500"></div>
        <span className="mt-2 text-xs text-gray-500">Q4</span>
      </div>
    </div>
  </div>
);

// Simple pie chart component
const SimplePieChart = () => (
  <div className="relative h-64 flex items-center justify-center">
    <div className="h-48 w-48 rounded-full border-8 border-blue-500 relative overflow-hidden">
      <div className="absolute w-1/2 h-full right-0 bg-blue-300"></div>
      <div className="absolute w-1/2 h-1/2 left-0 top-0 bg-blue-700"></div>
      <div className="absolute w-1/2 h-1/2 left-0 bottom-0 bg-blue-400"></div>
    </div>
  </div>
);

export default function RevenuePage() {
  const [period, setPeriod] = useState('This Year');
  
  // Mock revenue data
  const revenueData = {
    total: '$345,678',
    growth: 18.5,
    avgBookingValue: '$298',
    totalBookings: 1245,
  };
  
  // Mock revenue sources
  const revenueSources = [
    { source: 'Room Bookings', amount: 245000, percentage: 71 },
    { source: 'Restaurant & Bar', amount: 62500, percentage: 18 },
    { source: 'Spa & Wellness', amount: 24500, percentage: 7 },
    { source: 'Conference Rooms', amount: 10500, percentage: 3 },
    { source: 'Other Services', amount: 3178, percentage: 1 },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Revenue Analytics</h1>
          <p className="mt-2 text-sm text-gray-700">
            Comprehensive overview of your hotel's financial performance and revenue streams.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaCalendarAlt className="mr-2 h-4 w-4 text-gray-500" />
            {period}
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaFileDownload className="mr-2 h-4 w-4 text-gray-500" />
            Export
          </button>
        </div>
      </div>

      {/* Revenue overview cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaMoneyBillWave className="h-10 w-10 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                  <dd>
                    <div className="text-2xl font-bold text-gray-900">{revenueData.total}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm flex items-center">
              <FaArrowUp className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-green-700">{revenueData.growth}%</span>
              <span className="ml-1.5 text-gray-500">from last year</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaChartBar className="h-10 w-10 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg. Booking Value</dt>
                  <dd>
                    <div className="text-2xl font-bold text-gray-900">{revenueData.avgBookingValue}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm flex items-center">
              <FaArrowUp className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-green-700">8.2%</span>
              <span className="ml-1.5 text-gray-500">from last quarter</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaChartLine className="h-10 w-10 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Monthly Growth</dt>
                  <dd>
                    <div className="text-2xl font-bold text-gray-900">5.3%</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm flex items-center">
              <FaArrowDown className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <span className="text-red-700">1.2%</span>
              <span className="ml-1.5 text-gray-500">from previous month</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaCalendarAlt className="h-10 w-10 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Bookings</dt>
                  <dd>
                    <div className="text-2xl font-bold text-gray-900">{revenueData.totalBookings}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm flex items-center">
              <FaArrowUp className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-green-700">12.1%</span>
              <span className="ml-1.5 text-gray-500">from last year</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Revenue Trends</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{period}</span>
            </div>
          </div>
          <SimpleBarChart />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Revenue Breakdown</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">by service category</span>
            </div>
          </div>
          <SimplePieChart />
        </div>
      </div>

      {/* Revenue sources table */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Revenue by Source</h3>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Source
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Percentage
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contribution
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {revenueSources.map((source, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {source.source}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${source.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {source.percentage}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${source.percentage}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}