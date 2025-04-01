'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaHistory, 
  FaCreditCard, 
  FaBell, 
  FaHeart, 
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaClock,
  FaGem,
  FaCog,
  FaBed,
  FaArrowLeft,
  FaHome
} from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login');
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error('Error parsing user data:', error);
    } finally {
      setLoading(false);
    }
    
    // Set sidebar based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    // Initialize sidebar state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login');
  };

  // Mock bookings data
  const bookings = [
    {
      id: 'B12345',
      roomType: 'Deluxe Suite',
      checkIn: '2023-09-15',
      checkOut: '2023-09-20',
      status: 'Upcoming',
      totalPrice: '$950',
      guests: 2,
      image: '/room-deluxe.jpg'
    },
    {
      id: 'B12346',
      roomType: 'Premium King Room',
      checkIn: '2023-07-10',
      checkOut: '2023-07-15',
      status: 'Completed',
      totalPrice: '$780',
      guests: 2,
      image: '/room-king.jpg'
    }
  ];

  // Mock past stays data
  const pastStays = [
    {
      id: 'S12340',
      roomType: 'Executive Suite',
      dates: 'May 5-10, 2023',
      rating: 5,
      review: 'Excellent service and beautiful rooms!'
    },
    {
      id: 'S12339',
      roomType: 'Ocean View Room',
      dates: 'February 15-20, 2023',
      rating: 4,
      review: 'Great experience overall, will come back!'
    }
  ];

  // Mock loyalty points/rewards
  const loyaltyInfo = {
    points: 1250,
    tier: 'Gold',
    nextTier: 'Platinum',
    pointsToNextTier: 750,
    benefits: ['Priority Check-in', 'Late Checkout', '10% Discount on Dining']
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const renderProfileContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  {user?.name}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 p-2 bg-gray-50 border border-gray-200 rounded-md truncate">
                  {user?.email}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  +1 (555) 123-4567
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Member Since</label>
                <div className="mt-1 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  June 2023
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Edit Information
              </button>
            </div>
          </div>
        );
        
      case 'bookings':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">My Bookings</h3>
            
            <div className="mt-4 space-y-6">
              {bookings.map(booking => (
                <div key={booking.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-40 sm:h-48 relative bg-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaBed className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h4 className="text-lg font-medium">{booking.roomType}</h4>
                          <p className="text-sm text-gray-500">Booking #{booking.id}</p>
                        </div>
                        <span className={`mt-2 sm:mt-0 self-start inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <p className="text-sm text-gray-500">Check-in</p>
                          <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Check-out</p>
                          <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Guests</p>
                          <p className="font-medium">{booking.guests}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Price</p>
                          <p className="font-medium">{booking.totalPrice}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                          View Details
                        </button>
                        {booking.status === 'Upcoming' && (
                          <>
                            <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition">
                              Modify
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition">
                              Cancel
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/bookings/new" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <FaCalendarAlt className="mr-2" />
                Make a New Booking
              </Link>
            </div>
          </div>
        );
        
      case 'history':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Past Stays</h3>
            
            <div className="mt-4 space-y-6">
              {pastStays.map(stay => (
                <div key={stay.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-medium">{stay.roomType}</h4>
                      <p className="text-sm text-gray-500">{stay.dates}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`h-5 w-5 ${i < stay.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{stay.rating}/5</span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 italic">"{stay.review}"</p>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button className="text-blue-600 text-sm hover:text-blue-800 transition flex items-center">
                      View Details
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'payment':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center mb-3 sm:mb-0">
                  <div className="rounded bg-blue-700 text-white p-2">
                    <FaCreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-500">Expires 10/2025</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Default
                  </span>
                </div>
              </div>
            </div>
            
            <button className="w-full sm:w-auto px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center">
              <FaCreditCard className="mr-2" />
              Add Payment Method
            </button>
          </div>
        );
        
      case 'loyalty':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Loyalty & Rewards</h3>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-medium text-blue-800">Your Current Tier</h4>
                  <div className="mt-2 flex items-center">
                    <FaGem className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-xl font-bold text-blue-700">{loyaltyInfo.tier}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="font-medium text-blue-800">Points Balance</h4>
                  <p className="mt-2 text-2xl font-bold text-blue-700">{loyaltyInfo.points}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Progress to {loyaltyInfo.nextTier}</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${Math.min(100, (loyaltyInfo.points / (loyaltyInfo.points + loyaltyInfo.pointsToNextTier)) * 100)}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {loyaltyInfo.pointsToNextTier} more points to reach {loyaltyInfo.nextTier}
              </p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Your Benefits</h4>
              <ul className="space-y-2">
                {loyaltyInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <button className="text-blue-600 text-sm hover:text-blue-800 transition flex items-center">
                <FaHistory className="mr-1" />
                View Points History
              </button>
            </div>
          </div>
        );
        
      case 'preferences':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Room & Stay Preferences</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type Preference</label>
                <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border">
                  <option>Deluxe Suite</option>
                  <option>King Room</option>
                  <option>Twin Beds</option>
                  <option>Family Room</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Floor Preference</label>
                <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border">
                  <option>High Floor</option>
                  <option>Low Floor</option>
                  <option>Middle Floor</option>
                  <option>No Preference</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="request-1" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="request-1" className="ml-2 block text-sm text-gray-700">Extra pillows</label>
                  </div>
                  <div className="flex items-center">
                    <input id="request-2" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="request-2" className="ml-2 block text-sm text-gray-700">Non-smoking room</label>
                  </div>
                  <div className="flex items-center">
                    <input id="request-3" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="request-3" className="ml-2 block text-sm text-gray-700">Quiet room</label>
                  </div>
                  <div className="flex items-center">
                    <input id="request-4" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="request-4" className="ml-2 block text-sm text-gray-700">Early check-in if available</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        );
        
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  // Navigation items array for easier maintenance
  const navigationItems = [
    { id: 'profile', name: 'Personal Information', icon: FaUser },
    { id: 'bookings', name: 'My Bookings', icon: FaCalendarAlt },
    { id: 'history', name: 'Past Stays', icon: FaHistory },
    { id: 'payment', name: 'Payment Methods', icon: FaCreditCard },
    { id: 'loyalty', name: 'Loyalty & Rewards', icon: FaGem },
    { id: 'preferences', name: 'Preferences', icon: FaCog },
    { id: 'notifications', name: 'Notifications', icon: FaBell },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Mobile Tab Indicator - Visible on very small screens */}
        <div className="md:hidden fixed top-16 left-0 w-full bg-white z-20 shadow-sm">
          <div className="flex items-center p-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none mr-2"
            >
              {sidebarOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
            <h2 className="text-lg font-semibold truncate">
              {navigationItems.find(item => item.id === activeTab)?.name || 'Profile'}
            </h2>
            <Link 
              href="/"
              className="ml-auto p-2 rounded-md text-blue-600 hover:text-blue-700 focus:outline-none flex items-center"
            >
              <FaHome className="h-5 w-5" />
              <span className="sr-only md:not-sr-only md:ml-1">Home</span>
            </Link>
          </div>
        </div>

        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-30"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="flex pt-16 flex-1">
          {/* Sidebar */}
          <div 
            className={`fixed inset-y-0 pt-28 md:pt-16 left-0 flex flex-col z-40 transition-all duration-300 transform bg-white shadow-lg md:translate-x-0 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } w-64`}
          >
            {/* Go back button - visible at the top of sidebar */}
            <div className="px-3 py-2 border-b border-gray-200">
              <Link 
                href="/"
                className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <FaArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
            
            {/* User profile summary */}
            <div className="flex flex-col items-center px-4 py-6 border-b">
              {user?.profilePic ? (
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200">
                  <Image 
                    src={user.profilePic} 
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                  {user?.name?.charAt(0)}
                </div>
              )}
              <h3 className="mt-4 text-lg font-medium">{user?.name}</h3>
              <p className="text-sm text-gray-500 truncate max-w-full">{user?.email}</p>
            </div>
            
            {/* Navigation */}
            <nav className="mt-4 px-3 flex-1 overflow-y-auto">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (window.innerWidth < 768) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                      activeTab === item.id 
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${
                      activeTab === item.id ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <span>{item.name}</span>
                    {activeTab === item.id && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    )}
                  </button>
                ))}
              </div>
            </nav>
            
            {/* Logout button */}
            <div className="px-3 py-4 border-t">
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-3 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors"
              >
                <FaSignOutAlt className="mr-3 h-5 w-5" />
                Sign out
              </button>
            </div>
          </div>
          
          {/* Main content area */}
          <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
            <div className="px-4 sm:px-6 lg:px-8 py-6 pt-16 md:pt-6">
              {/* Desktop Page header */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                  {navigationItems.find(item => item.id === activeTab)?.name || 'Profile'}
                </h1>
                
                {/* Desktop back button and sidebar toggle */}
                <div className="flex items-center space-x-2">
                  <Link 
                    href="/"
                    className="flex items-center px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <FaArrowLeft className="mr-1.5 h-4 w-4" />
                    Back to Website
                  </Link>
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
                  >
                    {sidebarOpen ? (
                      <FaArrowLeft className="h-5 w-5" />
                    ) : (
                      <FaBars className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Page content */}
              <div className="mt-4 md:mt-0 mb-8">
                {renderProfileContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 