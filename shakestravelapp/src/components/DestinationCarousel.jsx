import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DestinationCarousel({ destinations }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, destinations.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlaying(false)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      goToNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      goToPrevious()
    }
  }

  // Calculate which cards to show (show 3 on desktop, 1 on mobile)
  const getVisibleDestinations = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % destinations.length
      visible.push(destinations[index])
    }
    return visible
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop View - Show 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {getVisibleDestinations().map((destination, index) => (
            <div
              key={`${destination.title}-${index}`}
              className="card group animate-fadeIn flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-safari-green h-16 line-clamp-2">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-4">{destination.description}</p>
                <div className="mb-4 min-h-[60px]">
                  {destination.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-block bg-safari-gold bg-opacity-20 text-safari-brown px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link
                  to={destination.link}
                  className="btn-secondary w-full block text-center mt-auto"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Show 1 card */}
        <div className="md:hidden">
          <div className="card group flex flex-col h-full">
            <div className="relative h-64 overflow-hidden flex-shrink-0">
              <img
                src={destinations[currentIndex].image}
                alt={destinations[currentIndex].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-safari-green">
                {destinations[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm flex-grow">{destinations[currentIndex].description}</p>
              <div className="mb-4">
                {destinations[currentIndex].highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-block bg-safari-gold bg-opacity-20 text-safari-brown px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <Link
                to={destinations[currentIndex].link}
                className="btn-secondary w-full block text-center mt-auto"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-safari-green hover:text-white text-safari-green rounded-full p-3 shadow-lg transition-all duration-300 z-10 group"
        aria-label="Previous destination"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-safari-green hover:text-white text-safari-green rounded-full p-3 shadow-lg transition-all duration-300 z-10 group"
        aria-label="Next destination"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-safari-green w-8 h-3'
                : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-600 hover:text-safari-green transition-colors flex items-center gap-2"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </>
          )}
        </button>
      </div>
    </div>
  )
}
