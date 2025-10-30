import { useState } from 'react'

export default function StayCard({ stay, onBook }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="card overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={stay.image}
          alt={stay.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {stay.isFeatured && (
            <span className="bg-safari-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
          {stay.ecocertified && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              🌿 Eco-Certified
            </span>
          )}
          {stay.womenLed && (
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              👩 Women-Led
            </span>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          aria-label="Save listing"
        >
          <svg
            className={`w-6 h-6 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5 5a2 2 0 012-2h6a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>

        {/* Price Badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-2xl font-bold">UGX {stay.pricePerNight.toLocaleString()}</p>
          <p className="text-gray-200 text-sm">per night</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Host Info */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={stay.hostImage}
            alt={stay.hostName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{stay.hostName}</p>
            <p className="text-xs text-gray-600">{stay.propertyType}</p>
          </div>
        </div>

        {/* Title & Location */}
        <h3 className="text-lg font-bold text-safari-green mb-2 line-clamp-2">
          {stay.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{stay.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(stay.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-800">{stay.rating}</span>
          <span className="text-xs text-gray-600">({stay.reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {stay.description}
        </p>

        {/* Amenities */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600">
          {stay.amenities.slice(0, 4).map((amenity, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <svg className="w-4 h-4 text-safari-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {amenity}
            </div>
          ))}
        </div>

        {/* Occupancy */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
          <span>
            👥 Max {stay.maxGuests} {stay.maxGuests === 1 ? 'guest' : 'guests'}
          </span>
          <span>
            🛏️ {stay.bedrooms} {stay.bedrooms === 1 ? 'bed' : 'beds'}
          </span>
        </div>

        {/* Availability */}
        {stay.availableUntil && (
          <p className="text-xs text-red-600 mb-4 font-semibold">
            Only {stay.availableUntil} available this month
          </p>
        )}

        {/* CTA Button */}
        <button
          onClick={() => onBook && onBook(stay.id)}
          className="w-full bg-safari-green text-white py-3 rounded-lg font-semibold hover:bg-safari-gold transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Book Now
        </button>
      </div>
    </div>
  )
}
