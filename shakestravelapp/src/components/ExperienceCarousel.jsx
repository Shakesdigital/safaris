import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ExperienceCarousel({ experiences }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, experiences.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
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

  // Calculate which cards to show (show 3 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleExperiences = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % experiences.length
      visible.push(experiences[index])
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {getVisibleExperiences().map((experience, index) => (
            <div
              key={`${experience.slug}-${index}`}
              className="card group animate-fadeIn flex flex-col h-full"
            >
              <div className="relative h-40 overflow-hidden flex-shrink-0 bg-gradient-to-br from-safari-green to-safari-gold flex items-center justify-center">
                <div className="text-6xl">{experience.icon}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-safari-green line-clamp-2">{experience.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{experience.description}</p>

                {/* Additional Info */}
                <div className="mb-4 space-y-2 min-h-[60px] flex flex-col justify-center">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {experience.duration}
                  </div>
                  {experience.rating && (
                    <div className="flex items-center justify-center">
                      <span className="text-safari-gold text-sm mr-1">★</span>
                      <span className="text-sm font-bold text-gray-800">{experience.rating}</span>
                      <span className="text-xs text-gray-600 ml-1">({experience.reviews})</span>
                    </div>
                  )}
                </div>

                <Link
                  to={`/experiences/${experience.slug}`}
                  className="btn-secondary w-full text-sm block text-center mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet View - Show 2 cards */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {getVisibleExperiences().slice(0, 2).map((experience, index) => (
            <div
              key={`${experience.slug}-${index}`}
              className="card group animate-fadeIn flex flex-col h-full"
            >
              <div className="relative h-40 overflow-hidden flex-shrink-0 bg-gradient-to-br from-safari-gold to-safari-green flex items-center justify-center">
                <div className="text-6xl">{experience.icon}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-safari-green line-clamp-2">{experience.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{experience.description}</p>

                <div className="mb-4 space-y-2 min-h-[60px] flex flex-col justify-center">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {experience.duration}
                  </div>
                  {experience.rating && (
                    <div className="flex items-center justify-center">
                      <span className="text-safari-gold text-sm mr-1">★</span>
                      <span className="text-sm font-bold text-gray-800">{experience.rating}</span>
                      <span className="text-xs text-gray-600 ml-1">({experience.reviews})</span>
                    </div>
                  )}
                </div>

                <Link
                  to={`/experiences/${experience.slug}`}
                  className="btn-secondary w-full text-sm block text-center mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Show 1 card */}
        <div className="md:hidden">
          <div className="card group flex flex-col h-full">
            <div className="relative h-40 overflow-hidden flex-shrink-0 bg-gradient-to-br from-safari-green to-safari-gold flex items-center justify-center">
              <div className="text-6xl">{experiences[currentIndex].icon}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-safari-green text-center">{experiences[currentIndex].title}</h3>
              <p className="text-gray-600 mb-4 text-sm flex-grow text-center">{experiences[currentIndex].description}</p>

              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {experiences[currentIndex].duration}
                </div>
                {experiences[currentIndex].rating && (
                  <div className="flex items-center justify-center">
                    <span className="text-safari-gold text-sm mr-1">★</span>
                    <span className="text-sm font-bold text-gray-800">{experiences[currentIndex].rating}</span>
                    <span className="text-xs text-gray-600 ml-1">({experiences[currentIndex].reviews})</span>
                  </div>
                )}
              </div>

              <Link
                to={`/experiences/${experiences[currentIndex].slug}`}
                className="btn-secondary w-full text-sm block text-center mt-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-safari-green hover:text-white text-safari-green rounded-full p-3 shadow-lg transition-all duration-300 z-10 group"
        aria-label="Previous experience"
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
        aria-label="Next experience"
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
        {experiences.map((_, index) => (
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
