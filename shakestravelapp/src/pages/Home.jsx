import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState('')

  const handleBooking = (experience = '') => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  const featuredDestinations = [
    {
      title: 'Bwindi Impenetrable Forest',
      description: 'Home to half of the world\'s mountain gorillas. Experience the breathtaking encounter with these gentle giants in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
      highlights: ['Gorilla Trekking', 'UNESCO World Heritage Site', 'Biodiversity Hotspot']
    },
    {
      title: 'Queen Elizabeth National Park',
      description: 'Uganda\'s most popular safari destination with diverse ecosystems and the famous tree-climbing lions of Ishasha.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      highlights: ['Tree-Climbing Lions', 'Boat Safari', 'Big Game Viewing']
    },
    {
      title: 'Murchison Falls National Park',
      description: 'Witness the Nile River explode through a narrow gorge, creating the world\'s most powerful waterfall.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      highlights: ['Murchison Falls', 'Nile River Safari', 'Wildlife Abundance']
    }
  ]

  const experiences = [
    {
      icon: '🦍',
      title: 'Gorilla Trekking',
      description: 'An unforgettable face-to-face encounter with mountain gorillas'
    },
    {
      icon: '🦁',
      title: 'Wildlife Safaris',
      description: 'Spot lions, elephants, leopards, and countless other species'
    },
    {
      icon: '🎭',
      title: 'Cultural Tours',
      description: 'Immerse yourself in Uganda\'s rich cultural heritage'
    },
    {
      icon: '🚤',
      title: 'Boat Safaris',
      description: 'Cruise along pristine waterways observing hippos and crocodiles'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
            Discover the Pearl of Africa
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Inspiring and crafting unforgettable safari experiences across Uganda's breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleBooking()} className="btn-primary text-lg">
              Start Your Adventure
            </button>
            <Link to="/destinations" className="btn-secondary text-lg">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Shakes Travel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Shakes Travel?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just organize safaris - we craft life-changing experiences that connect you with Uganda's incredible wilderness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-safari-green">Expert Guides</h3>
              <p className="text-gray-600">
                Our experienced local guides bring Uganda's wildlife and culture to life with their deep knowledge and passion
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-3 text-safari-green">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We're committed to responsible tourism that protects wildlife and benefits local communities
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-safari-green">Tailored Experiences</h3>
              <p className="text-gray-600">
                Every safari is customized to match your interests, budget, and travel style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="text-xl text-gray-600">
              Explore Uganda's most spectacular safari destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-safari-green">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="mb-4">
                    {destination.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-block bg-safari-gold bg-opacity-20 text-safari-brown px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleBooking(destination.title)}
                    className="btn-secondary w-full"
                  >
                    Plan Your Visit
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary text-lg">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Safari Experiences */}
      <section className="py-20 bg-safari-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Safari Experiences</h2>
            <p className="text-xl text-gray-200">
              Choose from our range of carefully curated safari experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="text-center p-6 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition">
                <div className="text-6xl mb-4">{exp.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                <p className="text-gray-200">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/experiences" className="btn-primary text-lg">
              Explore All Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-safari-green to-safari-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Uganda Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Our team is ready to craft your perfect safari experience.
          </p>
          <button onClick={() => handleBooking()} className="btn-primary text-lg">
            Book Your Safari Today
          </button>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
      />
    </div>
  )
}
