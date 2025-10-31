import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import MinimalSearchBar from '../components/MinimalSearchBar'
import StayCard from '../components/StayCard'
import HostSpotlightCarousel from '../components/HostSpotlightCarousel'
import HostSignupForm from '../components/HostSignupForm'
import BookingModal from '../components/BookingModal'
import { getFeaturedDestinations, getHostSpotlights } from '../utils/staysData'

export default function Stays() {
  const [isHostFormOpen, setIsHostFormOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedStay, setSelectedStay] = useState('')
  const hostSectionRef = useRef(null)

  const featuredDestinations = getFeaturedDestinations()
  const hostSpotlights = getHostSpotlights()

  const handleSearch = (filters) => {
    // In real app, this would call an API
    console.log('Search filters:', filters)
    // Simulate navigation to results page
    window.location.href = `/stays/results?destination=${filters.destination}&checkin=${filters.checkIn}&checkout=${filters.checkOut}`
  }

  const handleBooking = (stayName = '') => {
    setSelectedStay(stayName)
    setIsBookingModalOpen(true)
  }

  const scrollToHostSection = () => {
    hostSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Integrated Search - Airbnb Style */}
      <section className="relative overflow-hidden bg-gradient-to-r from-safari-green to-safari-green/80 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1920&q=80"
            alt="Safari stay at sunset"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-safari-green/70 via-safari-green/60 to-transparent z-10"></div>
        </div>

        {/* Hero Content - Top Section */}
        <div className="relative z-20 pt-16 pb-12 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white animate-fadeIn">
              Find Your Perfect Safari Stay
            </h1>
            <p className="text-lg md:text-xl text-gray-100 animate-fadeIn mb-12">
              Discover quality accommodations tailored to your preferences and budget in Uganda's premier safari destinations.
            </p>
          </div>
        </div>

        {/* Search Bar - Positioned at bottom of hero, overlapping into next section */}
        <div className="relative z-30 px-4 mb-12">
          <div className="container mx-auto">
            <MinimalSearchBar onSearch={handleSearch} isInHero={true} />
          </div>
        </div>

        {/* Become a Host Link - Below search bar */}
        <div className="relative z-20 text-center pb-8">
          <button
            onClick={scrollToHostSection}
            className="text-white hover:text-safari-gold transition-colors font-semibold text-sm flex items-center justify-center gap-2 mx-auto"
          >
            <span>Are you an accommodation provider?</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Accommodations by Destination</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse quality accommodations across Uganda's premier safari destinations, with options for every budget and preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-safari-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.stays} stays
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-safari-green mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < 5 ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(234 reviews)</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold text-safari-green">
                      from UGX {destination.priceRange}
                    </p>
                    <p className="text-sm text-gray-600">per night</p>
                  </div>

                  <Link
                    to={`/stays/results?destination=${destination.slug}`}
                    className="w-full bg-safari-green text-white py-3 rounded-lg font-semibold hover:bg-safari-gold transition-colors text-center block"
                  >
                    Explore Stays
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book with Shakes Section */}
      <section className="py-16 px-4 bg-safari-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Book with Shakes?</h2>
            <p className="text-gray-600 text-lg">
              Your trusted platform for quality accommodation bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Wide Selection */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-safari-green mb-3">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from diverse accommodation types and price ranges across all major safari destinations.
              </p>
            </div>

            {/* Verified Properties */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-safari-green mb-3">Verified Properties</h3>
              <p className="text-gray-600">
                Every property is verified and reviewed by our team. Book with confidence in quality standards.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-safari-green mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. See all costs upfront with straightforward pricing policies.
              </p>
            </div>

            {/* Secure Booking */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-safari-green mb-3">Secure Booking</h3>
              <p className="text-gray-600">
                Safe payment processing with flexible cancellation options. Your satisfaction guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Providers Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Accommodations</h2>
            <p className="text-gray-600 text-lg">
              Discover quality stays from trusted accommodation service providers across Uganda's safari regions
            </p>
          </div>

          <HostSpotlightCarousel hosts={hostSpotlights} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-safari-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="text-gray-600 text-lg">Three simple steps to your perfect safari stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-safari-gold text-white rounded-full text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-safari-green mb-2">Search</h3>
              <p className="text-gray-600">
                Select your destination, dates, and preferences from our curated listings.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-safari-gold text-white rounded-full text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-safari-green mb-2">Book</h3>
              <p className="text-gray-600">
                Secure your stay with instant confirmation and flexible cancellation options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-safari-gold text-white rounded-full text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-safari-green mb-2">Arrive & Enjoy</h3>
              <p className="text-gray-600">
                Experience authentic hospitality and directly support local families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List Your Accommodation Section */}
      <section ref={hostSectionRef} className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                alt="Accommodation provider hosting guests"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-bold text-safari-green mb-4 font-heading">
                List Your Accommodation
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Grow your accommodation business by listing on Uganda's leading safari travel platform. Reach thousands of travelers looking for quality stays across all price points.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-safari-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800">Easy Setup</h4>
                    <p className="text-gray-600">Free to list. Simple process to showcase your accommodation details.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-safari-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800">Full Control</h4>
                    <p className="text-gray-600">Set your own pricing, availability, and booking terms.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-safari-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800">Broader Reach</h4>
                    <p className="text-gray-600">Access international travelers across various budget segments.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-safari-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800">Full Support</h4>
                    <p className="text-gray-600">Payment processing, booking management, and dedicated support included.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsHostFormOpen(true)}
                className="btn-primary text-lg px-8 py-4 mb-4 block w-full sm:w-auto"
              >
                List Your Property Today
              </button>
              <p className="text-gray-600 text-sm">
                Questions? Check our <a href="#" className="text-safari-gold font-semibold hover:underline">Provider FAQ</a> for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Host Signup Modal */}
      {isHostFormOpen && (
        <HostSignupForm onClose={() => setIsHostFormOpen(false)} />
      )}

      {/* Statistics Footer */}
      <section className="bg-safari-green text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold font-heading mb-2">1,200+</p>
              <p className="text-gray-200">Successful Bookings</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-heading mb-2">150+</p>
              <p className="text-gray-200">Quality Properties</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-heading mb-2">4.8/5</p>
              <p className="text-gray-200">Average Rating</p>
            </div>
          </div>
          <p className="mt-8 text-gray-200">
            Connecting travelers with quality accommodations across Uganda's safari destinations
          </p>
        </div>
      </section>
    </div>
  )
}
