import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Package,
  Calendar,
  Clock,
  Key,
  Bus,
  MapPin,
  Circle,
  Square,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Menu,
  X,
  Shield,
  Briefcase,
  User,
  Star,
  Search,
  Smartphone,
  CheckCircle2,
  Sparkles,
  QrCode,
  Plane,
  Building2,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ride' | 'package' | 'rent' | 'reserve' | 'transit'>('ride');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showBanner, setShowBanner] = useState(true);

  // Reserve form states
  const [reserveDate, setReserveDate] = useState('2026-10-30');
  const [reserveTime, setReserveTime] = useState('15:00');

  const faqs = [
    {
      question: 'Can I have a lost item returned to me?',
      answer:
        'Yes! If you left something behind in an Uber, you can easily contact your driver through the Uber app or website by going to "Your Trips" and selecting "Find lost item". You can coordinate a safe drop-off location or time with the driver directly.',
    },
    {
      question: 'Can I rent a car using Uber?',
      answer:
        'Yes, with Uber Rent you can browse and book rental cars from leading rental car companies like Hertz, Avis, and Budget right in the Uber app. Enjoy flexible cancellation and great rates tailored for your journey.',
    },
    {
      question: 'Can I request a ride from an airport?',
      answer:
        'Uber is available at more than 600 airports worldwide. Depending on the airport, you can meet your driver at designated rideshare pickup zones. You can also reserve your airport ride up to 90 days in advance with Uber Reserve.',
    },
    {
      question: 'How do I schedule a ride in advance with Uber Reserve?',
      answer:
        'Simply select the Reserve icon on your app or homepage, choose your pickup date (up to 90 days out), pickup time, and destination. Your fare is locked in upfront, and your driver will receive extra wait time so you can travel stress-free.',
    },
    {
      question: 'What should I do if I forget my account password?',
      answer:
        'You can easily reset your password by clicking "Log in", entering your registered email address, and clicking "Forgot Password". We will send you a secure verification link or code to regain access to your account.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      {/* 1. TOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-black text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand + Nav Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition">
              Uber
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab('ride')}
                className={`py-1 px-3 rounded-full transition ${
                  activeTab === 'ride' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Ride
              </button>
              <button
                onClick={() => setActiveTab('package')}
                className={`py-1 px-3 rounded-full transition ${
                  activeTab === 'package' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Drive
              </button>
              <a href="#business" className="text-neutral-300 hover:text-white transition py-1 px-3">
                Business
              </a>
              <a href="#uber-one" className="text-neutral-300 hover:text-white transition py-1 px-3">
                Uber Eats
              </a>
              <a href="#about" className="text-neutral-300 hover:text-white transition py-1 px-3">
                About
              </a>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <button className="flex items-center space-x-1.5 text-neutral-300 hover:text-white py-1.5 px-3 rounded-full hover:bg-neutral-800 transition">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>
            <a href="#help" className="text-neutral-300 hover:text-white py-1.5 px-3 rounded-full hover:bg-neutral-800 transition">
              Help
            </a>
            <Link
              to="/login"
              className="text-white hover:text-neutral-300 py-1.5 px-3.5 rounded-full hover:bg-neutral-800 transition"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition shadow-sm"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              to="/login"
              className="text-xs bg-neutral-800 text-white px-3 py-1.5 rounded-full font-medium"
            >
              Log in
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 px-4 pt-3 pb-6 space-y-3 border-t border-neutral-800">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-800">
              <Link
                to="/login"
                className="text-center py-2 px-4 rounded-lg bg-neutral-800 text-white text-sm font-semibold"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="text-center py-2 px-4 rounded-lg bg-white text-black text-sm font-semibold"
              >
                Sign up
              </Link>
            </div>
            <div className="flex flex-col space-y-2 text-sm text-neutral-300">
              <a href="#ride" className="py-2 hover:text-white">Ride</a>
              <a href="#drive" className="py-2 hover:text-white">Drive</a>
              <a href="#business" className="py-2 hover:text-white">Business</a>
              <a href="#uber-one" className="py-2 hover:text-white">Uber One</a>
              <a href="#help" className="py-2 hover:text-white">Help</a>
            </div>
          </div>
        )}
      </header>

      {/* 2. PROMO BANNER (UBER RESERVE ANNOUNCEMENT) */}
      {showBanner && (
        <div className="bg-[#f26522] text-white px-4 py-3 relative transition">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-medium pr-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>
                <strong>Uber Reserve:</strong> Match with a top-rated driver and lock in your fare up to 90 days in advance.
              </span>
            </div>
            <a href="#reserve-section" className="underline font-semibold ml-2 shrink-0 hover:opacity-80">
              Reserve now
            </a>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 3. HERO & BOOKING SECTION */}
      <section className="bg-white py-8 lg:py-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Booking Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 sm:p-8">
              {/* Service Tab Icons */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6 overflow-x-auto gap-4 no-scrollbar">
                <button
                  onClick={() => setActiveTab('ride')}
                  className={`flex flex-col items-center space-y-1 pb-1 transition relative shrink-0 ${
                    activeTab === 'ride' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${activeTab === 'ride' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}>
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="text-xs">Ride</span>
                  {activeTab === 'ride' && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black" />}
                </button>

                <button
                  onClick={() => setActiveTab('package')}
                  className={`flex flex-col items-center space-y-1 pb-1 transition relative shrink-0 ${
                    activeTab === 'package' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${activeTab === 'package' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}>
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-xs">Package</span>
                  {activeTab === 'package' && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black" />}
                </button>

                <button
                  onClick={() => setActiveTab('rent')}
                  className={`flex flex-col items-center space-y-1 pb-1 transition relative shrink-0 ${
                    activeTab === 'rent' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${activeTab === 'rent' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}>
                    <Key className="w-6 h-6" />
                  </div>
                  <span className="text-xs">Rental Cars</span>
                  {activeTab === 'rent' && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black" />}
                </button>

                <button
                  onClick={() => setActiveTab('reserve')}
                  className={`flex flex-col items-center space-y-1 pb-1 transition relative shrink-0 ${
                    activeTab === 'reserve' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${activeTab === 'reserve' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}>
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="text-xs">Reserve</span>
                  {activeTab === 'reserve' && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black" />}
                </button>

                <button
                  onClick={() => setActiveTab('transit')}
                  className={`flex flex-col items-center space-y-1 pb-1 transition relative shrink-0 ${
                    activeTab === 'transit' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${activeTab === 'transit' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}>
                    <Bus className="w-6 h-6" />
                  </div>
                  <span className="text-xs">Transit</span>
                  {activeTab === 'transit' && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black" />}
                </button>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-6">
                {activeTab === 'ride' && 'Go anywhere with Uber'}
                {activeTab === 'package' && 'Send packages with ease'}
                {activeTab === 'rent' && 'Rent the right car for you'}
                {activeTab === 'reserve' && 'Reserve a ride in advance'}
                {activeTab === 'transit' && 'Public transit directions'}
              </h1>

              {/* Form Input fields */}
              <div className="space-y-3 mb-6 relative">
                {/* Connecting line between pickup and dropoff */}
                <div className="absolute left-[23px] top-[26px] bottom-[26px] w-[2px] bg-neutral-300 z-0 pointer-events-none" />

                {/* Pickup */}
                <div className="relative flex items-center bg-neutral-100 rounded-xl px-4 py-3.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-black border border-transparent transition">
                  <Circle className="w-4 h-4 text-black mr-3 fill-black z-10 shrink-0" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder-neutral-500 focus:outline-none"
                  />
                  <button
                    onClick={() => setPickup('Current Location')}
                    className="text-neutral-400 hover:text-black p-1 transition"
                    title="Use current location"
                  >
                    <MapPin className="w-4 h-4" />
                  </button>
                </div>

                {/* Dropoff */}
                <div className="relative flex items-center bg-neutral-100 rounded-xl px-4 py-3.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-black border border-transparent transition">
                  <Square className="w-4 h-4 text-black mr-3 fill-black z-10 shrink-0" />
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="Dropoff location"
                    className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder-neutral-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Schedule / Departure dropdown + CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center justify-between bg-neutral-100 rounded-xl px-4 py-3 text-sm font-medium text-neutral-800">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-neutral-600" />
                    <span>Pickup now</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                </div>
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-neutral-800 text-white font-medium rounded-xl transition duration-150 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>See prices</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Graphic / Interactive Map preview banner */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden h-[340px] sm:h-[420px] lg:h-[460px] bg-neutral-100 border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
                alt="City map ride route illustration"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-max mb-2">
                  Always on time
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">Rides on demand in 10,000+ cities</h3>
                <p className="text-neutral-200 text-xs sm:text-sm mt-1">
                  Connect with drivers nearby anytime of the day or night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOWNLOAD THE APP BAR */}
      <section className="bg-white py-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 hover:bg-neutral-100/80 transition rounded-2xl p-5 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-sm">
                Uber
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 text-base">Download the Uber app</h4>
                <p className="text-neutral-500 text-xs sm:text-sm">Scan the QR code to get started on your phone</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg border border-neutral-200 shadow-xs">
                <QrCode className="w-8 h-8 text-neutral-800" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUGGESTIONS SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-6">
            Suggestions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Ride */}
            <div className="bg-neutral-50 hover:bg-neutral-100 transition rounded-2xl p-5 border border-neutral-200 flex flex-col justify-between h-48 group">
              <div>
                <h3 className="font-semibold text-lg text-neutral-900">Ride</h3>
                <p className="text-neutral-500 text-xs mt-1">
                  Go anywhere with Uber. Request a ride, hop in, and relax.
                </p>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-xs font-semibold bg-white px-3 py-1.5 rounded-full border border-neutral-200 group-hover:bg-black group-hover:text-white transition">
                  Details
                </span>
                <Car className="w-12 h-12 text-neutral-700 group-hover:scale-105 transition transform" />
              </div>
            </div>

            {/* Card 2: Package */}
            <div className="bg-neutral-50 hover:bg-neutral-100 transition rounded-2xl p-5 border border-neutral-200 flex flex-col justify-between h-48 group">
              <div>
                <h3 className="font-semibold text-lg text-neutral-900">Package</h3>
                <p className="text-neutral-500 text-xs mt-1">
                  Uber Connect makes same-day local delivery easier than ever.
                </p>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-xs font-semibold bg-white px-3 py-1.5 rounded-full border border-neutral-200 group-hover:bg-black group-hover:text-white transition">
                  Details
                </span>
                <Package className="w-12 h-12 text-neutral-700 group-hover:scale-105 transition transform" />
              </div>
            </div>

            {/* Card 3: Reserve */}
            <div className="bg-neutral-50 hover:bg-neutral-100 transition rounded-2xl p-5 border border-neutral-200 flex flex-col justify-between h-48 group">
              <div>
                <h3 className="font-semibold text-lg text-neutral-900">Reserve</h3>
                <p className="text-neutral-500 text-xs mt-1">
                  Reserve your ride in advance so you can relax on the day of your trip.
                </p>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-xs font-semibold bg-white px-3 py-1.5 rounded-full border border-neutral-200 group-hover:bg-black group-hover:text-white transition">
                  Details
                </span>
                <Calendar className="w-12 h-12 text-neutral-700 group-hover:scale-105 transition transform" />
              </div>
            </div>

            {/* Card 4: Rental Cars */}
            <div className="bg-neutral-50 hover:bg-neutral-100 transition rounded-2xl p-5 border border-neutral-200 flex flex-col justify-between h-48 group">
              <div>
                <h3 className="font-semibold text-lg text-neutral-900">Rent</h3>
                <p className="text-neutral-500 text-xs mt-1">
                  Compare and book rental cars from top suppliers with flexible cancellation.
                </p>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-xs font-semibold bg-white px-3 py-1.5 rounded-full border border-neutral-200 group-hover:bg-black group-hover:text-white transition">
                  Details
                </span>
                <Key className="w-12 h-12 text-neutral-700 group-hover:scale-105 transition transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLAN FOR LATER / UBER RESERVE PROMO */}
      <section id="reserve-section" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#b3dedb] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-wider font-bold text-neutral-800">
                  Plan for later
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 mt-2 mb-4 leading-tight">
                  Get your ride right with Uber Reserve
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base mb-6 max-w-lg">
                  Choose your exact pickup date and time up to 90 days ahead, lock in your upfront price, and travel with peace of mind.
                </p>

                {/* Date & Time Selectors */}
                <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-2 max-w-md mb-6">
                  <div className="flex-1 flex items-center px-3 py-2 border-b sm:border-b-0 sm:border-r border-neutral-200">
                    <Calendar className="w-4 h-4 text-neutral-500 mr-2 shrink-0" />
                    <input
                      type="date"
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="w-full text-xs sm:text-sm font-medium text-neutral-800 focus:outline-none"
                    />
                  </div>
                  <div className="flex-1 flex items-center px-3 py-2">
                    <Clock className="w-4 h-4 text-neutral-500 mr-2 shrink-0" />
                    <input
                      type="time"
                      value={reserveTime}
                      onChange={(e) => setReserveTime(e.target.value)}
                      className="w-full text-xs sm:text-sm font-medium text-neutral-800 focus:outline-none"
                    />
                  </div>
                </div>

                <button className="bg-black hover:bg-neutral-800 text-white font-medium px-8 py-3.5 rounded-full transition shadow-md">
                  Reserve a ride
                </button>
              </div>

              {/* Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white/40 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center border border-white/60 shadow-lg">
                  <Clock className="w-24 h-24 text-neutral-900 mb-4 stroke-1" />
                  <div className="text-center">
                    <p className="font-bold text-neutral-900 text-lg">On-Time Guarantee</p>
                    <p className="text-xs text-neutral-600 mt-1">Up to 15 min extra driver wait time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit Checkmarks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 mt-8 border-t border-black/10">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800">
                  Choose your exact pickup time up to 90 days in advance
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800">
                  Extra wait time included to meet your ride stress-free
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800">
                  Cancel at no charge up to 60 minutes before pickup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UBER ONE (DARK HERO BANNER) */}
      <section id="uber-one" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 bg-neutral-800 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Uber One Membership</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
                  One membership for everyday savings
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base max-w-lg mb-8">
                  Get 5% off eligible rides, $0 Delivery Fee on orders, and exclusive member perks across both Uber and Uber Eats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-200 transition">
                    Try 1 month free
                  </button>
                  <button className="text-white border border-neutral-700 font-semibold px-6 py-3.5 rounded-full hover:bg-neutral-900 transition">
                    Learn more
                  </button>
                </div>
              </div>

              {/* Graphic / Savings Coins */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-300/30 blur-2xl absolute inset-0" />
                  <div className="relative bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md max-w-xs text-center">
                    <div className="w-16 h-16 bg-amber-400 text-black rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-lg mb-3">
                      1
                    </div>
                    <p className="font-bold text-lg text-white">Save an average of $27/month</p>
                    <p className="text-xs text-neutral-400 mt-1">Starting at $9.99/month after trial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AIRPORT RIDES / EFFORTLESS TRAVEL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200">
            {/* Visual Route Indicator */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-neutral-200 w-full max-w-md">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-4">
                  <span className="font-semibold text-neutral-900 text-sm">Airport Ride Preview</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                    Flight tracking
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Circle className="w-3.5 h-3.5 fill-black text-black" />
                    <div>
                      <p className="text-xs text-neutral-400">Pickup</p>
                      <p className="text-sm font-semibold text-neutral-800">Home Address</p>
                    </div>
                  </div>
                  <div className="ml-1.5 h-6 w-[2px] bg-neutral-300" />
                  <div className="flex items-center space-x-3">
                    <Plane className="w-4 h-4 text-black" />
                    <div>
                      <p className="text-xs text-neutral-400">Destination</p>
                      <p className="text-sm font-semibold text-neutral-800">International Airport (Terminal 3)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Estimated duration</span>
                  <span className="text-sm font-bold text-neutral-900">32 min • Upfront fare</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                Effortless travel
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-2 mb-4">
                Airport rides made easy
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mb-6 leading-relaxed">
                Request a ride to and from over 600 airports worldwide. Get reliable pickups with upfront pricing and live flight tracking so you never miss a beat.
              </p>
              <button className="bg-black text-white hover:bg-neutral-800 font-semibold px-7 py-3 rounded-full transition shadow-sm flex items-center space-x-2">
                <span>Search airports</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WAYS TO RIDE & EARN (3 FEATURE CARDS) */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-8">
            Ride, drive, and make the most of every trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Drive & Earn */}
            <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 group hover:shadow-lg transition">
              <div className="h-56 overflow-hidden bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                  alt="Drive and earn with Uber"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Drive and earn</h3>
                  <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                    Make money on your schedule with deliveries or rides—you decide when, where, and how often you work.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/register"
                    className="inline-block bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Uber for Business */}
            <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 group hover:shadow-lg transition">
              <div className="h-56 overflow-hidden bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Uber for Business"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Reimagined for business</h3>
                  <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                    A streamlined business solution to manage employee travel, meal programs, and VIP client transportation.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="#business"
                    className="inline-block bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition"
                  >
                    Explore business
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Deliver with Uber */}
            <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 group hover:shadow-lg transition">
              <div className="h-56 overflow-hidden bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
                  alt="Delivery with Uber"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Make money delivering</h3>
                  <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                    Deliver food, groceries, and packages using your bike, scooter, or car with flexible payouts.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/register"
                    className="inline-block bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition"
                  >
                    Sign up to deliver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ENTERPRISE / UBER FOR BUSINESS BANNER */}
      <section id="business" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                  Looking for business solutions?
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
                  Discover how 170,000+ companies leverage Uber for Business to simplify travel expense reports, automate corporate meals, and boost team productivity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-neutral-200 transition">
                    Get started
                  </button>
                  <button className="text-white border border-neutral-700 font-semibold px-7 py-3 rounded-full hover:bg-neutral-800 transition">
                    Check out solutions
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80"
                  alt="Business dashboard analytics"
                  className="rounded-2xl shadow-2xl border border-neutral-800 max-h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="help" className="py-14 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition ml-4 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed pr-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. APP DOWNLOAD CARDS */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-6">
            There’s more to love in the apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rider app */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 flex items-center justify-between hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm">
                  Uber
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">Uber app</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">Scan to download for riders</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-neutral-400" />
            </div>

            {/* Driver app */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 flex items-center justify-between hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-neutral-900 text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-sm border border-neutral-800">
                  Driver
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">Uber Driver app</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">Scan to download for drivers</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-neutral-400" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. LEGAL / DISCLAIMER */}
      <section className="py-8 bg-neutral-50 text-neutral-400 text-xs border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 leading-relaxed">
          <p>
            Certain requirements and features vary by country, state, and city. Upfront fare estimates are based on trip distance, duration, and local traffic conditions. Extra wait time fees may apply after 2 minutes of driver arrival.
          </p>
          <p>
            Uber Reserve terms: Availability varies by market. Cancellation fees apply if canceled less than 60 minutes prior to scheduled pickup time.
          </p>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-black text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Brand & Help link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-neutral-800 gap-4">
            <span className="text-2xl font-bold tracking-tight">Uber</span>
            <a href="#help" className="text-sm text-neutral-300 hover:text-white underline">
              Visit Help Center
            </a>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Our offerings</a></li>
                <li><a href="#" className="hover:text-white transition">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition">Investors</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Ride</a></li>
                <li><a href="#" className="hover:text-white transition">Drive</a></li>
                <li><a href="#" className="hover:text-white transition">Deliver</a></li>
                <li><a href="#" className="hover:text-white transition">Uber for Business</a></li>
                <li><a href="#" className="hover:text-white transition">Uber Freight</a></li>
                <li><a href="#" className="hover:text-white transition">Gift cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Global citizenship</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Safety</a></li>
                <li><a href="#" className="hover:text-white transition">Diversity and Inclusion</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Travel</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Reserve</a></li>
                <li><a href="#" className="hover:text-white transition">Airports</a></li>
                <li><a href="#" className="hover:text-white transition">Cities</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1 hover:text-white cursor-pointer">
                <Globe className="w-4 h-4" />
                <span>English (US)</span>
              </span>
              <span className="flex items-center space-x-1 hover:text-white cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>New York</span>
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <span>© 2026 Uber Technologies Inc.</span>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Accessibility</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}