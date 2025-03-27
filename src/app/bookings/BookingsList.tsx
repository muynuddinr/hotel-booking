'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaSearch, FaFilter, FaEdit, FaTrash, FaEye, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// Mock data for bookings - in a real app, you would fetch this from an API
const bookingsData = [
  {
    id: 'BK-20231001',
    guestName: 'John Doe',
    roomType: 'Deluxe King Room',
    roomNumber: '301',
    checkIn: '2023-10-01',
    checkOut: '2023-10-05',
    guests: 2,
    totalAmount: 796,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    bookedOn: '2023-09-15',
  },
  {
    id: 'BK-20231012',
    guestName: 'Jane Smith',
    roomType: 'Executive Suite',
    roomNumber: '401',
    checkIn: '2023-10-12',
    checkOut: '2023-10-14',
    guests: 2,
    totalAmount: 598,
    status: 'Confirmed',
    paymentStatus: 'Pending',
    bookedOn: '2023-09-28',
  },
  {
    id: 'BK-20231020',
    guestName: 'Robert Johnson',
    roomType: 'Family Room',
    roomNumber: '205',
    checkIn: '2023-10-20',
    checkOut: '2023-10-25',
    guests: 4,
    totalAmount: 1245,
    status: 'Pending',
    paymentStatus: 'Not Paid',
    bookedOn: '2023-10-01',
  },
  {
    id: 'BK-20231105',
    guestName: 'Sarah Williams',
    roomType: 'Standard Twin Room',
    roomNumber: '102',
    checkIn: '2023-11-05',
    checkOut: '2023-11-07',
    guests: 2,
    totalAmount: 318,
    status: 'Cancelled',
    paymentStatus: 'Refunded',
    bookedOn: '2023-10-10',
  },
  {
    id: 'BK-20231115',
    guestName: 'Michael Brown',
    roomType: 'Deluxe King Room',
    roomNumber: '303',
    checkIn: '2023-11-15',
    checkOut: '2023-11-18',
    guests: 2,
    totalAmount: 597,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    bookedOn: '2023-10-20',
  }
];

const BookingsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentBookings, setCurrentBookings] = useState(bookingsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<typeof bookingsData[0] | null>(null);

  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filteredBookings = bookingsData.filter(booking => 
      (statusFilter === 'All' || booking.status === statusFilter) &&
      (booking.id.toLowerCase().includes(term.toLowerCase()) || 
       booking.guestName.toLowerCase().includes(term.toLowerCase()))
    );
    
    setCurrentBookings(filteredBookings);
  };

  // Function to handle status filter
  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    
    const filteredBookings = bookingsData.filter(booking => 
      (status === 'All' || booking.status === status) &&
      (booking.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
       booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    setCurrentBookings(filteredBookings);
  };

  // Function to open booking details modal
  const openBookingDetails = (booking: typeof bookingsData[0]) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  // Function to handle status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to handle payment status color
  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Not Paid':
        return 'bg-red-100 text-red-800';
      case 'Refunded':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
            <p className="mt-2 text-sm text-gray-600">Manage all your hotel bookings in one place</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              href="/book" 
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaCalendarAlt className="mr-2 -ml-1 h-4 w-4" />
              New Booking
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search by booking ID or guest name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex-shrink-0">
              <div className="relative inline-block text-left w-full md:w-auto">
                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FaFilter className="mr-2 h-5 w-5 text-gray-400" />
                    <span>Status: {statusFilter}</span>
                  </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {['All', 'Confirmed', 'Pending', 'Cancelled'].map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusFilter(status)}
                        className={`${
                          statusFilter === status ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100`}
                        role="menuitem"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guest
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check-in/out
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.guestName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.roomType} - {booking.roomNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{new Date(booking.checkIn).toLocaleDateString()}</div>
                      <div>{new Date(booking.checkOut).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${booking.totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => openBookingDetails(booking)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <FaEye className="h-4 w-4" />
                        </button>
                        <Link 
                          href={`/bookings/edit/${booking.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                          title="Edit Booking"
                        >
                          <FaEdit className="h-4 w-4" />
                        </Link>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          title="Cancel Booking"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {currentBookings.length === 0 && (
            <div className="text-center py-12">
              <FaCalendarAlt className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings found</h3>
              <p className="mt-1 text-sm text-gray-500">
                There are no bookings matching your search criteria.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{currentBookings.length}</span> of{' '}
                  <span className="font-medium">{currentBookings.length}</span> bookings
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    1
                  </button>
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for Booking Details */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Booking Details
                    </h3>
                    <div className="border-t border-gray-200 py-3">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Booking ID</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedBooking.id}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Status</dt>
                          <dd className="mt-1 text-sm">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedBooking.status)}`}>
                              {selectedBooking.status}
                            </span>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Guest Name</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedBooking.guestName}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Guests</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedBooking.guests}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Room Type</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedBooking.roomType}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Room Number</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedBooking.roomNumber}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Check-in Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{new Date(selectedBooking.checkIn).toLocaleDateString()}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Check-out Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{new Date(selectedBooking.checkOut).toLocaleDateString()}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Payment Status</dt>
                          <dd className="mt-1 text-sm">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusColor(selectedBooking.paymentStatus)}`}>
                              {selectedBooking.paymentStatus}
                            </span>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
                          <dd className="mt-1 text-sm text-gray-900">${selectedBooking.totalAmount}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Booked On</dt>
                          <dd className="mt-1 text-sm text-gray-900">{new Date(selectedBooking.bookedOn).toLocaleDateString()}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
                <Link
                  href={`/bookings/edit/${selectedBooking.id}`}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsList; 