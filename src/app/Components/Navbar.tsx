'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaHotel, FaUser, FaBars, FaTimes, FaEnvelope, FaBed, FaCalendarAlt, FaInfoCircle, FaConciergeBell, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setIsUserMenuOpen(false);
    router.push('/');
  };

  const navLinks = [
    { href: '/bookings', label: 'Bookings', icon: <FaCalendarAlt className="h-5 w-5" /> },
    { href: '/rooms', label: 'Rooms', icon: <FaBed className="h-5 w-5" /> },
    { href: '/about', label: 'About', icon: <FaInfoCircle className="h-5 w-5" /> },
    { href: '/services', label: 'Services', icon: <FaConciergeBell className="h-5 w-5" /> },
    { href: '/contact', label: 'Contact', icon: <FaEnvelope className="h-5 w-5" /> },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <FaHotel className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">HotelManager</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/bookings', label: 'Bookings' },
              { href: '/rooms', label: 'Rooms' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  pathname === link.href 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* User profile and mobile menu button */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center ml-4">
              {user ? (
                <div className="relative">
                  <button 
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-2 p-1 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    {user.profilePic ? (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-300">
                        <Image 
                          src={user.profilePic} 
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        {user.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-sm font-medium">{user.name}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link
                        href="/profile"
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <FaUser className="mr-2" />
                        View Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        <FaSignOutAlt className="mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href="/login" 
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <FaUser className="h-4 w-4" />
                  <span className="font-medium">Login</span>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden ml-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Enhanced Mobile menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-all duration-400 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile menu header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-between">
          <div className="flex items-center">
            <FaHotel className="h-6 w-6 text-white" />
            <span className="ml-2 text-lg font-bold text-white">HotelManager</span>
          </div>
          <button 
            onClick={closeMenu}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
        
        {/* User profile for mobile */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="px-4 py-4 border-t border-gray-200">
            {user ? (
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 mb-3">
                  {user.profilePic ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image 
                        src={user.profilePic} 
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="flex flex-col space-y-2 mt-2">
                  <Link
                    href="/profile"
                    className="flex items-center text-sm text-gray-700 py-2 px-3 rounded hover:bg-blue-50"
                    onClick={closeMenu}
                  >
                    <FaUser className="mr-2" />
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-sm text-red-600 py-2 px-3 rounded hover:bg-red-50"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={closeMenu}
              >
                <FaUser className="h-4 w-4" />
                <span className="font-medium">Login / Register</span>
              </Link>
            )}
          </div>
        </div>
        
        {/* Navigation Links for mobile */}
        <div className="px-6 py-4">
          <h3 className="text-xs uppercase text-gray-500 font-semibold px-3 mb-3">Navigation</h3>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-3 rounded-md transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
                onClick={closeMenu}
              >
                <span className="mr-3 text-gray-500">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
                {pathname === link.href && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
