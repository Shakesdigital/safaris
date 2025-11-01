import { useState, useEffect } from 'react'
import FontAwesomeIcon from './FontAwesomeIcon'

export default function HostSpotlightCarousel({ hosts }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hosts.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [autoPlay, hosts.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hosts.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + hosts.length) % hosts.length)
    setAutoPlay(false)
  }

  if (!hosts || hosts.length === 0) {
    return <div>No hosts available</div>
  }

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-80 lg:h-96">
        {/* Slides */}
        {hosts.map((host, index) => (
          <div
            key={host.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left: Image */}
              <div className="hidden md:block relative overflow-hidden bg-gray-200">
                <img
                  src={host.image}
                  alt={host.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center p-8 md:p-10 bg-white">
                <div className="mb-4">
                  <img
                    src={host.image}
                    alt={host.name}
                    className="md:hidden w-32 h-32 rounded-full object-cover mb-4 mx-auto"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-safari-green mb-2">
                  {host.name}
                </h3>

                <p className="text-lg text-gray-600 mb-4">
                  <span className="font-semibold">{host.property}</span>
                </p>

                <div className="flex items-center gap-2 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < host.rating ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm font-semibold text-gray-800 ml-2">
                    {host.rating} ({host.reviews} reviews)
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {host.womenLed && (
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FontAwesomeIcon icon="fa-people-group" className="w-4 h-4" /> Women-Led
                    </span>
                  )}
                  {host.ecocertified && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FontAwesomeIcon icon="fa-leaf" className="w-4 h-4" /> Eco-Certified
                    </span>
                  )}
                  {host.newHost && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FontAwesomeIcon icon="fa-star" className="w-4 h-4" /> New Host
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-safari-gold pl-4 mb-4">
                  "{host.quote}"
                </blockquote>

                {/* Location */}
                <p className="text-sm text-gray-600 flex items-center gap-2 mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {host.location}
                </p>

                {/* CTA */}
                <button className="bg-safari-green text-white py-2 px-6 rounded-lg font-semibold hover:bg-safari-gold transition-colors w-fit">
                  View Property
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-safari-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-safari-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {hosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-safari-gold w-8'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-10 text-white text-xs bg-black/50 px-2 py-1 rounded">
        {currentIndex + 1} / {hosts.length}
      </div>
    </div>
  )
}
