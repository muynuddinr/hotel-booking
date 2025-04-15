'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaUsers, FaCreditCard, FaSpinner, FaCcVisa, FaCcMastercard, FaCcAmex, FaLock, FaInfoCircle } from 'react-icons/fa';
import { differenceInDays, addDays } from 'date-fns';


interface CheckoutProps {
  params: Promise<{ id: string }>;
}

export default function Checkout({ params }: CheckoutProps) {
  const router = useRouter();
  const roomId = React.use(params).id;
  const [room, setRoom] = useState<any>(null);
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(addDays(new Date(), 1));
  const [guests, setGuests] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  // Payment form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [step, setStep] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showPromoInput, setShowPromoInput] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login?redirect=' + encodeURIComponent(`/checkout/${roomId}`));
      return;
    }

    // Fetch room details
    const fetchRoom = async () => {
      try {
        // Use roomId instead of params.id
        const response = await fetch(`/api/rooms/${roomId}`);
        const data = await response.json();
        setRoom(data);
        calculatePrices(data.price);
      } catch (error) {
        console.error('Failed to fetch room:', error);
      }
    };

    fetchRoom();
  }, [roomId, router]); // Update dependency array to use roomId

  // Calculate prices whenever dates change
  useEffect(() => {
    if (room) {
      calculatePrices(room.price);
    }
  }, [checkIn, checkOut, room]);

  const calculatePrices = (basePrice: number) => {
    const nights = differenceInDays(checkOut, checkIn);
    const roomTotal = basePrice * nights;
    const tax = roomTotal * 0.12; // 12% tax
    const service = roomTotal * 0.05; // 5% service charge
    
    setTotalPrice(roomTotal);
    setTaxAmount(tax);
    setServiceCharge(service);
    setGrandTotal(roomTotal + tax + service - discount);
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'WELCOME10') {
      const discountAmount = totalPrice * 0.1; // 10% discount
      setDiscount(discountAmount);
      setGrandTotal(grandTotal - discountAmount);
      setPaymentError(null);
    } else {
      setPaymentError('Invalid promo code');
      setTimeout(() => setPaymentError(null), 3000);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardNumber(formatCardNumber(value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      let formatted = value;
      if (value.length > 2) {
        formatted = value.slice(0, 2) + '/' + value.slice(2);
      }
      setExpiryDate(formatted);
    }
  };

  const validateForm = () => {
    if (cardNumber.replace(/\s/g, '').length < 16) {
      setPaymentError('Please enter a valid card number');
      return false;
    }
    if (cardName.length < 3) {
      setPaymentError('Please enter the cardholder name');
      return false;
    }
    if (expiryDate.length < 5) {
      setPaymentError('Please enter a valid expiry date');
      return false;
    }
    if (cvv.length < 3) {
      setPaymentError('Please enter a valid CVV');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setTimeout(() => setPaymentError(null), 3000);
      return;
    }
    
    setIsProcessing(true);
    setPaymentError(null);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        router.push('/bookings');
      }, 2500);
    }, 3000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (!room) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h2>
          <p className="text-xl text-gray-600 mb-4">Your booking has been confirmed.</p>
          <p className="text-gray-500">Booking reference: <span className="font-semibold">BK-{Math.floor(Math.random() * 1000000)}</span></p>
          <p className="mt-6 text-gray-600">Redirecting to your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Booking</h1>
          <p className="text-gray-600">You're just a few steps away from your stay at {room.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Summary - Right Side */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                  <div className="h-1 flex-1 mx-2 bg-gray-200">
                    <div className={`h-full ${step === 2 ? 'bg-blue-600 w-full' : 'w-0'}`}></div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                </div>

                {step === 1 ? (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                        <div className="relative">
                          <DatePicker
                            selected={checkIn}
                            onChange={(date: Date | null) => date && setCheckIn(date)}
                            minDate={new Date()}
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2 pl-10"
                          />
                          <FaCalendar className="absolute left-3 top-3 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                        <div className="relative">
                          <DatePicker
                            selected={checkOut}
                            onChange={(date: Date | null) => date && setCheckOut(date)}
                            minDate={addDays(checkIn, 1)}
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2 pl-10"
                          />
                          <FaCalendar className="absolute left-3 top-3 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                      <div className="relative">
                        <select
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full border border-gray-300 rounded-md shadow-sm p-2 pl-10"
                        >
                          {[...Array(room.capacity)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1} Guest{i !== 0 ? 's' : ''}</option>
                          ))}
                        </select>
                        <FaUsers className="absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => setStep(2)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2 pl-10"
                            required
                          />
                          <FaCreditCard className="absolute left-3 top-3 text-gray-400" />
                          <div className="absolute right-3 top-2.5 flex space-x-1">
                            <FaCcVisa className="text-blue-700 text-lg" />
                            <FaCcMastercard className="text-red-500 text-lg" />
                            <FaCcAmex className="text-blue-500 text-lg" />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                            <span className="ml-1 inline-block">
                              <FaInfoCircle className="text-gray-400 text-xs cursor-help" title="3 or 4 digit security code on the back of your card" />
                            </span>
                          </label>
                          <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                            placeholder="123"
                            maxLength={4}
                            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                            required
                          />
                        </div>
                      </div>

                      {paymentError && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-md mb-4">
                          {paymentError}
                        </div>
                      )}

                      <div className="flex justify-between mt-6">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="border border-gray-300 bg-white text-gray-700 font-medium py-2 px-6 rounded-md hover:bg-gray-50 transition duration-300"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className={`flex items-center justify-center py-2 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                            isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                        >
                          {isProcessing ? (
                            <>
                              <FaSpinner className="animate-spin mr-2" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <FaLock className="mr-2 text-sm" />
                              Pay {formatPrice(grandTotal)}
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Room Summary - Left Side */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-6">
              <div className="relative h-48">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold">{room.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                
                <div className="border-t border-b border-gray-200 py-4 my-4">
                  <div className="flex justify-between mb-2">
                    <span>Check-in</span>
                    <span className="font-medium">{checkIn.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Check-out</span>
                    <span className="font-medium">{checkOut.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Room ({differenceInDays(checkOut, checkIn)} nights)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes (12%)</span>
                    <span>{formatPrice(taxAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Fee</span>
                    <span>{formatPrice(serviceCharge)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                </div>
                
                {!showPromoInput ? (
                  <button 
                    onClick={() => setShowPromoInput(true)}
                    className="text-blue-600 text-sm hover:underline mb-4 inline-block"
                  >
                    Have a promo code?
                  </button>
                ) : (
                  <div className="flex mb-4">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-blue-600 text-white px-3 rounded-r-md text-sm"
                    >
                      Apply
                    </button>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Includes taxes and fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkmark {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          stroke-width: 2;
          stroke: #4BB543;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #4BB543;
          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        }
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #4BB543;
          fill: none;
          animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
        }
        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke: #4BB543;
          stroke-width: 3;
          animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
        }
        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }
        @keyframes scale {
          0%, 100% { transform: none; }
          50% { transform: scale3d(1.1, 1.1, 1); }
        }
        @keyframes fill {
          100% { box-shadow: inset 0px 0px 0px 30px #4BB543; }
        }
      `}</style>
    </div>
  );
}