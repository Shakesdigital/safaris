import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import MinimalSearchBar from '../components/MinimalSearchBar'
import StayCard from '../components/StayCard'
import HostSpotlightCarousel from '../components/HostSpotlightCarousel'
import HostSignupForm from '../components/HostSignupForm'
import BookingModal from '../components/BookingModal'
import { getFeaturedDestinations, getHostSpotlights } from '../utils/staysData'
import {
  CoinsIcon,
  StarIcon,
  CrownIcon,
  HotelIcon,
  TentIcon,
  HomeIcon,
  LeafIcon,
  CheckmarkIcon,
  MapIcon,
  HandshakeIcon
} from '../components/Icons'

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

  const budgetTiers = [
    {
      name: 'Budget-Friendly',
      iconComponent: CoinsIcon,
      description: 'Comfortable stays under UGX 150,000/night',
      priceRange: 'UGX 50,000 - 150,000'
    },
    {
      name: 'Mid-Range',
      iconComponent: StarIcon,
      description: 'Quality lodges and comfortable accommodations',
      priceRange: 'UGX 150,000 - 350,000'
    },
    {
      name: 'Premium',
      iconComponent: CrownIcon,
      description: 'Luxury safari experiences and eco-resorts',
      priceRange: 'UGX 350,000+'
    },
  ]

  const propertyTypes = [
    { name: 'Lodges & Resorts', iconComponent: HotelIcon },
    { name: 'Tented Camps', iconComponent: TentIcon },
    { name: 'Homestays', iconComponent: HomeIcon },
    { name: 'Eco-Cabins', iconComponent: LeafIcon },
  ]

  const safariRegions = [
    { name: 'Bwindi & Gorillas' },
    { name: 'Queen Elizabeth' },
    { name: 'Kibale & Chimps' },
    { name: 'Murchison Falls' },
    { name: 'Kidepo Valley' },
    { name: 'Lake Mburo' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Safari Context */}
      <section className="relative overflow-hidden bg-gradient-to-r from-safari-green via-safari-green/90 to-safari-green/80">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1920&q=80"
            alt="Safari accommodation stay"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-safari-green/80 via-safari-green/70 to-safari-green/60"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 py-16 md:py-20">
          {/* Main Heading - Safari Focused */}
          <div className="max-w-2xl mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight font-heading">
              Find Your Perfect Safari Stay in Uganda
            </h1>
            <p className="text-lg text-white/95 mb-8">
              Discover quality accommodations across Uganda's premier safari destinations. From budget-friendly homestays to luxury eco-resorts, find your ideal stay based on your preferences and budget.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative z-30 mb-6">
            <MinimalSearchBar onSearch={handleSearch} isInHero={true} />
          </div>

          {/* Host Link */}
          <div className="text-white/90">
            <button
              onClick={scrollToHostSection}
              className="text-white hover:text-safari-gold transition-colors font-semibold text-sm flex items-center gap-2"
            >
              <span>👥 Are you an accommodation provider?</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Budget Tiers Section - Quick Browse */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-safari-green mb-2 font-heading">Browse by Budget</h2>
            <p className="text-gray-600">Accommodations available for every budget level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetTiers.map((tier, idx) => {
              const IconComponent = tier.iconComponent
              return (
                <Link
                  key={idx}
                  to={`/stays/results`}
                  className="group relative p-6 rounded-xl border-2 border-gray-200 hover:border-safari-green hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-safari-green/5 rounded-bl-3xl group-hover:bg-safari-green/10 transition-colors"></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-4"><IconComponent className="w-16 h-16 text-safari-green" /></div>
                    <h3 className="text-xl font-bold text-safari-green mb-2 group-hover:text-safari-green/80 transition-colors">{tier.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                    <p className="text-safari-green font-semibold text-sm">{tier.priceRange}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Safari Destinations */}
      <section className="py-12 px-4 bg-gradient-to-b from-safari-light to-white">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-safari-green mb-2 font-heading">Popular Safari Destinations</h2>
            <p className="text-gray-600">Accommodations in Uganda's most visited wildlife regions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/stays/results?destination=${destination.slug}`}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                </div>

                {/* Content */}
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-safari-green mb-2 group-hover:text-safari-gold transition-colors">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-semibold text-gray-700">{destination.rating}</span>
                      <span className="text-xs text-gray-500">(234 reviews)</span>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">From <span className="text-lg font-bold text-safari-green">UGX {destination.priceRange}</span></p>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>

                  <button className="w-full bg-safari-green text-white py-2 rounded-lg font-semibold hover:bg-safari-green/90 transition-colors">
                    View Stays
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Property Type */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-safari-green mb-2 font-heading">Browse by Accommodation Type</h2>
            <p className="text-gray-600">Choose from various accommodation styles across Uganda</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {propertyTypes.map((type) => {
              const IconComponent = type.iconComponent
              return (
                <Link
                  key={type.name}
                  to={`/stays/results`}
                  className="group p-5 rounded-lg border-2 border-gray-200 hover:border-safari-green hover:bg-safari-light transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    <IconComponent className="w-12 h-12 mx-auto text-safari-green" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-safari-green transition-colors">{type.name}</h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Uganda Safari Regions Quick Access */}
      <section className="py-12 px-4 bg-safari-light">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-safari-green mb-2 font-heading">Explore by Safari Region</h2>
            <p className="text-gray-600">Quick access to accommodations in every major safari area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {safariRegions.map((region, idx) => (
              <Link
                key={idx}
                to={`/stays/results`}
                className="p-4 rounded-lg bg-white border-2 border-gray-200 hover:border-safari-green hover:shadow-md transition-all text-center group"
              >
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-safari-green transition-colors">{region.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Accommodations Showcase */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-safari-green mb-2 font-heading">Quality Accommodations We Recommend</h2>
            <p className="text-gray-600">Handpicked stays from trusted service providers across Uganda's safari destinations</p>
          </div>

          <HostSpotlightCarousel hosts={hostSpotlights} />
        </div>
      </section>

      {/* Why Book Through Shakes? */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-safari-green mb-2 font-heading">Why Book Your Safari Stay Through Shakes?</h2>
            <p className="text-gray-600">We make finding and booking quality accommodations in Uganda simple and reliable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trust & Verification */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3"><CheckmarkIcon className="w-12 h-12 text-safari-green" /></div>
              <h3 className="font-bold text-safari-green text-lg mb-2">Verified Properties</h3>
              <p className="text-gray-600 text-sm">All accommodations are verified and inspected to ensure quality standards across all price ranges.</p>
            </div>

            {/* Budget Transparency */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3"><CoinsIcon className="w-12 h-12 text-safari-green" /></div>
              <h3 className="font-bold text-safari-green text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden fees. See exact prices in Ugandan Shillings before booking. What you see is what you pay.</p>
            </div>

            {/* Local Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3"><MapIcon className="w-12 h-12 text-safari-green" /></div>
              <h3 className="font-bold text-safari-green text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Deep knowledge of Uganda's safari regions, wildlife areas, and best accommodation options in each destination.</p>
            </div>

            {/* Support */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3"><HandshakeIcon className="w-12 h-12 text-safari-green" /></div>
              <h3 className="font-bold text-safari-green text-lg mb-2">Reliable Support</h3>
              <p className="text-gray-600 text-sm">Dedicated customer service to help you find the perfect accommodation match for your safari experience.</p>
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
