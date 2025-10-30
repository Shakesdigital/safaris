import { useState } from 'react'

export default function MinimalSearchBar({ onSearch, isInHero = false }) {
  const [showForm, setShowForm] = useState(false)
  const [filters, setFilters] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  })

  const destinations = [
    'Bwindi Impenetrable',
    'Kibale National Park',
    'Queen Elizabeth',
    'Murchison Falls',
    'Kidepo Valley',
    'Lake Mburo',
    'Mount Elgon',
    'Rwenzori Mountains',
    'Semuliki Valley',
  ]

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if (!filters.checkIn || !filters.checkOut) {
      alert('Please select check-in and check-out dates')
      return
    }

    onSearch(filters)
    setShowForm(false)
  }

  const getDestinationLabel = () => {
    return filters.destination || 'Where are you going?'
  }

  const getCheckInLabel = () => {
    return filters.checkIn ? new Date(filters.checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Check in'
  }

  const getCheckOutLabel = () => {
    return filters.checkOut ? new Date(filters.checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Check out'
  }

  // HERO VERSION - Compact and integrated into hero
  if (isInHero) {
    return (
      <div className="w-full">
        {/* Compact Search Bar */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
          {/* Collapsed View */}
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full px-6 py-4 flex items-center gap-8 hover:shadow-xl transition-shadow"
            >
              {/* Destination */}
              <div className="flex-1 text-left border-r border-gray-200 pr-4">
                <p className="text-xs text-gray-500 mb-1">Where</p>
                <p className="text-gray-900 font-medium">{getDestinationLabel()}</p>
              </div>

              {/* Check-in */}
              <div className="flex-1 text-left border-r border-gray-200 pr-4">
                <p className="text-xs text-gray-500 mb-1">Check in</p>
                <p className="text-gray-900 font-medium">{getCheckInLabel()}</p>
              </div>

              {/* Check-out */}
              <div className="flex-1 text-left border-r border-gray-200 pr-4">
                <p className="text-xs text-gray-500 mb-1">Check out</p>
                <p className="text-gray-900 font-medium">{getCheckOutLabel()}</p>
              </div>

              {/* Guests */}
              <div className="flex-1 text-left pr-4">
                <p className="text-xs text-gray-500 mb-1">Guests</p>
                <p className="text-gray-900 font-medium">{filters.guests} guest{filters.guests !== 1 ? 's' : ''}</p>
              </div>

              {/* Search Button */}
              <button className="bg-safari-green hover:bg-safari-gold text-white rounded-lg px-6 py-2 font-semibold transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </button>
          ) : (
            /* Expanded Form */
            <form onSubmit={handleSearch} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Destination */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Destination</label>
                  <select
                    value={filters.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold text-sm"
                  >
                    <option value="">Select destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Check in</label>
                  <input
                    type="date"
                    value={filters.checkIn}
                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold text-sm"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Check out</label>
                  <input
                    type="date"
                    value={filters.checkOut}
                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    min={filters.checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold text-sm"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Guests</label>
                  <select
                    value={filters.guests}
                    onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-safari-green text-white py-2 rounded-lg font-semibold hover:bg-safari-gold transition-colors"
                >
                  Search Stays
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }

  // STICKY VERSION - For below hero (if needed)
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
            <select
              value={filters.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold"
            >
              <option value="">Select destination</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check in</label>
            <input
              type="date"
              value={filters.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check out</label>
            <input
              type="date"
              value={filters.checkOut}
              onChange={(e) => handleInputChange('checkOut', e.target.value)}
              min={filters.checkIn || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold"
            />
          </div>

          {/* Guests & Search Button */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
              <select
                value={filters.guests}
                onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-gold"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-safari-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-safari-gold transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
