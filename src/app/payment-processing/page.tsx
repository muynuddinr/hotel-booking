'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaLock, FaCheckCircle, FaCreditCard, FaSpinner } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function PaymentProcessingPage() {
  const router = useRouter();
  const [stage, setStage] = useState(1);
  const [bookingData, setBookingData] = useState<any>(null);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    // Get booking data from localStorage
    const storedBookingData = localStorage.getItem('pendingBooking');
    if (!storedBookingData) {
      router.push('/rooms');
      return;
    }

    try {
      const parsedData = JSON.parse(storedBookingData);
      setBookingData(parsedData);
      
      // Generate a random booking ID
      setBookingId(`BK-${Math.floor(Math.random() * 1000000)}`);

      // Simulate payment processing stages
      const timer1 = setTimeout(() => setStage(2), 2000); // Verifying payment
      const timer2 = setTimeout(() => setStage(3), 4000); // Processing payment
      const timer3 = setTimeout(() => setStage(4), 6000); // Confirming booking
      const timer4 = setTimeout(() => setStage(5), 8000); // Success
      
      // Redirect to confirmation page after success
      const timer5 = setTimeout(() => {
        // Clear the pending booking data
        localStorage.removeItem('pendingBooking');
        
        // Store booking in localStorage (in a real app, this would be saved to a database)
        const userBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
        userBookings.push({
          ...parsedData,
          bookingId,
          bookingDate: new Date().toISOString(),
          status: 'Confirmed'
        });
        localStorage.setItem('userBookings', JSON.stringify(userBookings));
        
        // Redirect to bookings page
        router.push('/bookings');
      }, 10000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    } catch (error) {
      console.error('Error parsing booking data:', error);
      router.push('/rooms');
    }
  }, [router]);

  if (!bookingData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Card animation */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-64 h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg flex flex-col justify-between p-4 text-white"
                  >
                    <div className="flex justify-between items-start">
                      <div className="text-xs opacity-80">Payment Processing</div>
                      <FaCreditCard className="text-xl" />
                    </div>
                    <div className="text-lg font-mono tracking-wider">
                      **** **** **** {bookingData.cardLast4 || '1234'}
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs opacity-80">
                        <div>BOOKING REF</div>
                        <div className="font-semibold">{bookingId}</div>
                      </div>
                      <div className="text-xs opacity-80">
                        <div>AMOUNT</div>
                        <div className="font-semibold">
                          {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                          }).format(bookingData.grandTotal)}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Processing animation overlay */}
                  {stage < 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center"
                    >
                      <div className="text-white text-center">
                        <FaSpinner className="animate-spin text-3xl mx-auto mb-2" />
                        <div className="text-sm font-medium">Processing Payment</div>
                      </div>
                    </motion.div>
                  )}

                  {/* Success checkmark overlay */}
                  {stage === 5 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center"
                    >
                      <div className="text-white text-center">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-2" />
                        </motion.div>
                        <div className="text-sm font-medium">Payment Successful</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Progress steps */}
              <div className="mb-8">
                <div className="relative">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <motion.div 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      initial={{ width: "0%" }}
                      animate={{ width: `${stage * 20}%` }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between">
                    <div className={`text-xs ${stage >= 1 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Initiated</div>
                    <div className={`text-xs ${stage >= 2 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Verifying</div>
                    <div className={`text-xs ${stage >= 3 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Processing</div>
                    <div className={`text-xs ${stage >= 4 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Confirming</div>
                    <div className={`text-xs ${stage >= 5 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Completed</div>
                  </div>
                </div>
              </div>

              {/* Status message */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {stage < 5 ? 'Processing Your Payment' : 'Payment Successful!'}
                </h2>
                <p className="text-gray-600">
                  {stage === 1 && 'Initiating secure payment process...'}
                  {stage === 2 && 'Verifying your payment details...'}
                  {stage === 3 && 'Processing your payment...'}
                  {stage === 4 && 'Confirming your booking...'}
                  {stage === 5 && 'Your booking has been confirmed. Redirecting to your bookings...'}
                </p>
              </div>

              {/* Booking details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Room</p>
                    <p className="font-medium">{bookingData.roomName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Booking Reference</p>
                    <p className="font-medium">{bookingId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Check-in</p>
                    <p className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Check-out</p>
                    <p className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Guests</p>
                    <p className="font-medium">{bookingData.guests}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Amount</p>
                    <p className="font-medium">
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        maximumFractionDigits: 0
                      }).format(bookingData.grandTotal)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Security note */}
              <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
                <FaLock className="mr-2" />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Success animation */}
      {stage === 5 && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.8, times: [0, 0.6, 1] }}
            className="w-full h-full max-w-md max-h-md"
          >
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <motion.path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </svg>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .checkmark {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          stroke-width: 2;
          stroke: #4BB543;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #4BB543;
        }
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #4BB543;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
        }
        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke: #4BB543;
          stroke-width: 3;
        }
        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </>
  );
}