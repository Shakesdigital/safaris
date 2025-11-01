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

  const propertyTypes = [
    { name: 'Hotels', icon: '🏨' },
    { name: 'Lodges', icon: '🏩' },
    { name: 'Homestays', icon: '🏡' },
    { name: 'Eco-Cabins', icon: '🌿' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Booking.com Style */}
      <section className="relative bg-gradient-to-r from-safari-green to-safari-green/80 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Find your next stay
            </h1>
            <p className="text-white/90 text-sm md:text-base">
              Search deals on accommodations, homes, and much more...
            </p>
          </div>

          {/* Compact Search Bar */}
          <div className="relative z-30">
            <MinimalSearchBar onSearch={handleSearch} isInHero={true} />
          </div>

          {/* Host Link */}
          <div className="mt-4 text-center">
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
        </div>
      </section>

      {/* Promotional Offer Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-safari-green/10 to-safari-gold/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-safari-green mb-1">Special Offers</h3>
              <p className="text-gray-600 text-sm">Promotions, deals, and special offers for you</p>
            </div>
            <button className="bg-safari-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-safari-gold/90 transition-colors whitespace-nowrap">
              Browse Deals
            </button>
          </div>
        </div>
      </section>

      {/* Trending Destinations - Booking.com Style */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Trending destinations</h2>
            <p className="text-gray-600 text-sm">Most popular choices for safari travelers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/stays/results?destination=${destination.slug}`}
                className="group relative h-32 md:h-40 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-sm md:text-base truncate">{destination.name}</h3>
                  <p className="text-white/80 text-xs">{destination.stays} stays</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Property Type - Booking.com Style */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by property type</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {propertyTypes.map((type) => (
              <Link
                key={type.name}
                to={`/stays/results`}
                className="group p-4 rounded-lg border-2 border-gray-200 hover:border-safari-green hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-safari-green transition-colors">{type.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Uganda Destinations - Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Uganda</h2>
            <p className="text-gray-600 text-sm">Discover accommodations across all safari regions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/stays/results?destination=${destination.slug}`}
                className="group relative h-28 md:h-32 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-bold text-xs md:text-sm truncate">{destination.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Accommodations Showcase */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Accommodations</h2>
            <p className="text-gray-600 text-sm">Discover quality stays from trusted accommodation service providers</p>
          </div>

          <HostSpotlightCarousel hosts={hostSpotlights} />
        </div>
      </section>

      {/* Why Shakes? - Booking.com Style */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Shakes?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-safari-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-safari-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Best value at the property</h3>
                <p className="text-sm text-gray-600">We price match to help you save</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-safari-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-safari-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">500+ thousand reviews</h3>
                <p className="text-sm text-gray-600">Real verified guest reviews</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-safari-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-safari-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h-2a2 2 0 01-2-2v-1h-1a2 2 0 01-2-2v-1h-1a2 2 0 01-2-2v-1h-1a2 2 0 01-2-2v-1h-1a2 2 0 01-2-2V4a2 2 0 012-2h1V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">All properties inspected</h3>
                <p className="text-sm text-gray-600">Quality is guaranteed on every property</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-safari-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-safari-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">24/7 customer service</h3>
                <p className="text-sm text-gray-600">We're here to help any time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel More Spend Less - CTA Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Travel more, spend less</h2>
              <p className="text-gray-600 mb-6">Sign up for the Shakes newsletter and receive exclusive deals in your inbox</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-safari-green"
                />
                <button
                  type="submit"
                  className="bg-safari-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-safari-green/90 transition-colors whitespace-nowrap"
                >
                  Register
                </button>
              </form>
            </div>
            <div className="hidden lg:block">
              <div className="bg-safari-light rounded-lg p-8 flex items-center justify-center h-64">
                <svg className="w-32 h-32 text-safari-green/20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
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

      {/* Popular Destinations Footer */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Popular with travelers from Uganda</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/stays/results?destination=${destination.slug}`}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-safari-green hover:text-safari-green transition-colors text-center"
              >
                {destination.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

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
