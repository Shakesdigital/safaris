import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import StayCard from '../components/StayCard'
import { getAllStays } from '../utils/staysData'

export default function StaysResults() {
  const [searchParams] = useSearchParams()
  const [stays, setStays] = useState([])
  const [filteredStays, setFilteredStays] = useState([])
  const [viewMode, setViewMode] = useState('list') // 'list' or 'map'
  const [isLoading, setIsLoading] = useState(true)

  // Filter state
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [rating, setRating] = useState(0)
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])

  const destination = searchParams.get('destination')
  const checkIn = searchParams.get('checkin')
  const checkOut = searchParams.get('checkout')

  // Load mock data
  useEffect(() => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      const allStays = getAllStays()
      setStays(allStays)
      setFilteredStays(allStays)
      setIsLoading(false)
    }, 500)
  }, [])

  // Apply filters
  useEffect(() => {
    let filtered = stays

    // Filter by destination
    if (destination && destination !== 'all') {
      filtered = filtered.filter((stay) => stay.destination === destination)
    }

    // Filter by price
    filtered = filtered.filter(
      (stay) => stay.pricePerNight >= priceRange[0] && stay.pricePerNight <= priceRange[1]
    )

    // Filter by rating
    if (rating > 0) {
      filtered = filtered.filter((stay) => stay.rating >= rating)
    }

    // Filter by amenities
    if (selectedAmenities.length > 0) {
      filtered = filtered.filter((stay) =>
        selectedAmenities.some((amenity) => stay.amenities.includes(amenity))
      )
    }

    // Filter by property type
    if (propertyTypes.length > 0) {
      filtered = filtered.filter((stay) => propertyTypes.includes(stay.propertyType))
    }

    setFilteredStays(filtered)
  }, [stays, priceRange, rating, selectedAmenities, propertyTypes, destination])

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    )
  }

  const handlePropertyTypeChange = (type) => {
    setPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const allAmenities = ['WiFi', 'Hot Water', 'Meals Included', 'Swimming Pool', 'Guides Available', 'Parking']
  const allPropertyTypes = ['Lodge', 'Tented Camp', 'Homestay', 'Eco-Cabin', 'Resort', 'Guest House']

  return (
    <div className="min-h-screen bg-safari-light pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-safari-green mb-2">
            {destination ? `Stays in ${destination.replace(/-/g, ' ')}` : 'All Stays'}
          </h1>
          <p className="text-gray-600">
            {checkIn && checkOut && `${checkIn} - ${checkOut}`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-safari-green mb-4">Filters</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Price per Night</h4>
                <div className="flex gap-2 mb-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded"
                    placeholder="Max"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  UGX {priceRange[0].toLocaleString()} - UGX {priceRange[1].toLocaleString()}
                </p>
              </div>

              {/* Rating Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Rating</h4>
                <div className="space-y-2">
                  {[0, 4, 4.5].map((r) => (
                    <label key={r} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="rating"
                        checked={rating === r}
                        onChange={() => setRating(r)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">
                        {r === 0 ? 'All' : `${r}+ stars`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Property Type</h4>
                <div className="space-y-2">
                  {allPropertyTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={propertyTypes.includes(type)}
                        onChange={() => handlePropertyTypeChange(type)}
                        className="w-4 h-4 text-safari-green rounded"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Amenities</h4>
                <div className="space-y-2">
                  {allAmenities.map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="w-4 h-4 text-safari-green rounded"
                      />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setPriceRange([0, 1000000])
                  setRating(0)
                  setSelectedAmenities([])
                  setPropertyTypes([])
                }}
                className="w-full py-2 px-4 border-2 border-safari-green text-safari-green rounded-lg font-semibold hover:bg-safari-green hover:text-white transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Toggle */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">
                  Showing <strong>{filteredStays.length}</strong> stays
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-safari-green text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                  aria-label="List view"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>

                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'map'
                      ? 'bg-safari-green text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                  aria-label="Map view"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin">
                  <svg className="w-12 h-12 text-safari-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Results Grid */}
            {!isLoading && filteredStays.length > 0 && viewMode === 'list' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStays.map((stay) => (
                  <StayCard key={stay.id} stay={stay} />
                ))}
              </div>
            )}

            {/* Map View Placeholder */}
            {!isLoading && viewMode === 'map' && (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6.553 3.276A1 1 0 0117 19.382V8.618a1 1 0 00-1.447-.894L9 10m0 0V5m6.553-3.276A1 1 0 0117 4.618v10.764a1 1 0 01-1.447.894L15 13" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Map View Coming Soon</h3>
                <p className="text-gray-600">
                  View all stays on an interactive map. Coming in the next update!
                </p>
              </div>
            )}

            {/* No Results */}
            {!isLoading && filteredStays.length === 0 && (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No stays found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 1000000])
                    setRating(0)
                    setSelectedAmenities([])
                    setPropertyTypes([])
                  }}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
