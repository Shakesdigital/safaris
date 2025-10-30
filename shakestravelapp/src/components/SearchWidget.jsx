import { useState } from 'react'

export default function SearchWidget({ onSearch }) {
  const [filters, setFilters] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    propertyType: '',
  })

  const destinations = [
    { id: 'all', name: 'All Uganda' },
    { id: 'bwindi', name: 'Bwindi Impenetrable' },
    { id: 'kibale', name: 'Kibale National Park' },
    { id: 'queen-elizabeth', name: 'Queen Elizabeth' },
    { id: 'murchison', name: 'Murchison Falls' },
    { id: 'kidepo', name: 'Kidepo Valley' },
    { id: 'lake-mburo', name: 'Lake Mburo' },
    { id: 'mount-elgon', name: 'Mount Elgon' },
    { id: 'rwenzori', name: 'Rwenzori Mountains' },
    { id: 'semuliki', name: 'Semuliki Valley' },
  ]

  const propertyTypes = [
    'All Types',
    'Lodge',
    'Tented Camp',
    'Homestay',
    'Eco-Cabin',
    'Resort',
    'Guest House',
  ]

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()

    // Basic validation
    if (!filters.checkIn || !filters.checkOut) {
      alert('Please select check-in and check-out dates')
      return
    }

    onSearch(filters)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const getDateAfterTomorrow = () => {
    const date = new Date()
    date.setDate(date.getDate() + 2)
    return date.toISOString().split('T')[0]
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-safari-gold">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Destination */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Destination
            </label>
            <select
              value={filters.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold focus:border-transparent"
            >
              <option value="">Select destination</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name}
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check-in
            </label>
            <input
              type="date"
              value={filters.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold focus:border-transparent"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check-out
            </label>
            <input
              type="date"
              value={filters.checkOut}
              onChange={(e) => handleInputChange('checkOut', e.target.value)}
              min={filters.checkIn || getTomorrowDate()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold focus:border-transparent"
            />
          </div>

          {/* Adults */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Adults
            </label>
            <select
              value={filters.adults}
              onChange={(e) => handleInputChange('adults', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Adult' : 'Adults'}
                </option>
              ))}
            </select>
          </div>

          {/* Children */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Children
            </label>
            <select
              value={filters.children}
              onChange={(e) => handleInputChange('children', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold focus:border-transparent"
            >
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Child' : 'Children'}
                </option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Type
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold focus:border-transparent"
            >
              <option value="">All Types</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Stays
          </button>

          <button
            type="reset"
            className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Quick Links */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3 font-semibold">Popular searches:</p>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-safari-gold hover:text-white transition-colors">
            Gorilla Trekking
          </button>
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-safari-gold hover:text-white transition-colors">
            Tree-Climbing Lions
          </button>
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-safari-gold hover:text-white transition-colors">
            Chimp Tracking
          </button>
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-safari-gold hover:text-white transition-colors">
            Eco-Friendly Stays
          </button>
        </div>
      </div>
    </div>
  )
}
