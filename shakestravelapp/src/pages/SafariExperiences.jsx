import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'

export default function SafariExperiences() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState('')

  const handleBooking = (experience) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  const experiences = [
    {
      slug: 'queen-elizabeth-safari',
      title: 'Queen Elizabeth National Park Safari',
      icon: '🦁',
      tagline: 'Tree-Climbing Lions & Kazinga Channel',
      description: 'Discover Uganda\'s most popular safari destination where tree-climbing lions lounge in the Ishasha sector, and the Kazinga Channel teems with hippos, elephants, and over 600 bird species. This 3-day adventure combines classic game drives with unforgettable boat safaris through one of Africa\'s most biodiverse ecosystems.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      duration: '3 Days',
      difficulty: 'Easy',
      price: '$450 per person',
      rating: '4.8',
      reviews: 189,
      category: 'Wildlife Safari'
    },
    {
      slug: 'murchison-falls-safari',
      title: 'Murchison Falls National Park Safari',
      icon: '💦',
      tagline: 'The Mighty Nile\'s Explosive Power',
      description: 'Witness the world\'s longest river explode through a 7-meter gorge in one of nature\'s most dramatic displays. This 3-day safari combines the thundering spectacle of Murchison Falls with exceptional wildlife viewing including lions, elephants, giraffes, and over 450 bird species along the Nile\'s banks.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$650 per person',
      rating: '4.8',
      reviews: 287,
      category: 'Wildlife Safari'
    },
    {
      slug: 'kidepo-valley-safari',
      title: 'Kidepo Valley National Park Safari',
      icon: '🦒',
      tagline: 'Uganda\'s Remote Wilderness Paradise',
      description: 'Venture into Uganda\'s most remote and spectacular wilderness where vast golden savannahs stretch to distant mountain ranges. Kidepo offers unique wildlife found nowhere else in Uganda including cheetahs, ostriches, and greater kudus, combined with authentic cultural encounters with the Karamojong people.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: 'Contact for pricing',
      rating: '4.8',
      reviews: 105,
      category: 'Wildlife Safari'
    },
    {
      slug: 'lake-mburo-safari',
      title: 'Lake Mburo National Park Safari',
      icon: '🦓',
      tagline: 'Walking Safaris & Unique Wildlife',
      description: 'Experience Uganda\'s only park where you can enjoy walking safaris, horseback riding, and boat cruises all in one destination. Home to Uganda\'s only populations of zebras and impalas, Lake Mburo offers intimate wildlife encounters in a compact, accessible setting perfect for those with limited time.',
      image: 'https://images.unsplash.com/photo-1535338623859-38b734369d9d?w=800',
      duration: '3 Days',
      difficulty: 'Easy',
      price: '$350 per person',
      rating: '4.6',
      reviews: 156,
      category: 'Wildlife Safari'
    },
    {
      slug: 'rwenzori-mountains-trek',
      title: 'Rwenzori Mountains Trek to Margherita Peak',
      icon: '⛰️',
      tagline: 'Africa\'s Mystical Mountains of the Moon',
      description: 'Conquer Africa\'s third-highest peak at 5,109 meters on this challenging 7-9 day trek through otherworldly landscapes. Journey through bamboo forests, heath moorlands, and Afro-alpine zones to reach glacial valleys and snow-capped peaks in this UNESCO World Heritage Site known as the "Mountains of the Moon."',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      duration: '7-9 Days',
      difficulty: 'Challenging',
      price: 'Contact for pricing',
      rating: '4.9',
      reviews: 67,
      category: 'Adventure & Hiking'
    },
    {
      slug: 'bwindi-gorilla-trekking',
      title: 'Gorilla Trekking in Bwindi Impenetrable National Park',
      icon: '🦍',
      tagline: 'Encounter Mountain Gorillas in Ancient Rainforest',
      description: 'Experience the magic of encountering mountain gorillas in their natural habitat within Bwindi Impenetrable National Park, a UNESCO World Heritage Site that has remained largely unchanged for over 25,000 years. Home to nearly half the world\'s remaining mountain gorilla population, this extraordinary journey combines thrilling gorilla tracking with profound wildlife encounters.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$750 per person',
      rating: '4.9',
      reviews: 234,
      category: 'Wildlife Safari'
    },
    {
      slug: 'kibale-chimp-tracking',
      title: 'Chimpanzee Tracking in Kibale National Park',
      icon: '🐵',
      tagline: 'Primate Capital of the World',
      description: 'Venture into the lush expanse of Kibale National Park, Uganda\'s premier destination for primate encounters and home to over 1,500 chimpanzees. This 795 square kilometer protected area contains East Africa\'s largest remaining tropical rainforest, supporting 13 primate species including habituated chimpanzee families.',
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$200 per person',
      rating: '4.8',
      reviews: 178,
      category: 'Wildlife Safari'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Safari Experiences
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From gorilla encounters to cultural immersions - discover the experiences that make Uganda unforgettable
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our safari experiences are thoughtfully designed to immerse you in Uganda's remarkable wildlife and natural beauty.
            From tracking mountain gorillas through ancient forests to exploring the Nile's scenic waterways—each adventure is
            expertly curated to create transformative and meaningful travel moments.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-4 text-4xl shadow-lg">
                    {experience.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-3xl font-bold text-safari-green flex-1">
                      {experience.title}
                    </h2>
                    {experience.rating && (
                      <div className="flex items-center ml-4">
                        <span className="text-safari-gold text-xl mr-1">★</span>
                        <span className="text-lg font-bold text-gray-800">{experience.rating}</span>
                        <span className="text-sm text-gray-600 ml-1">({experience.reviews})</span>
                      </div>
                    )}
                  </div>
                  <p className="text-lg text-safari-gold italic mb-4">{experience.tagline}</p>

                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                    {experience.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Duration</p>
                      <p className="text-sm text-gray-800">{experience.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Difficulty</p>
                      <p className="text-sm text-gray-800">{experience.difficulty}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Price</p>
                      <p className="text-sm text-gray-800 font-bold">{experience.price}</p>
                    </div>
                  </div>

                  <Link
                    to={`/experiences/${experience.slug}`}
                    className="btn-primary w-full block text-center"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What to Expect on Safari</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌅</div>
              <h3 className="text-2xl font-bold mb-3">Early Starts</h3>
              <p className="text-gray-200">
                The animals are early risers, so you should be too! Those pre-dawn starts mean you\'ll be there when the lions are most active and the light is perfect for photos.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-3">Photo Opportunities</h3>
              <p className="text-gray-200">
                Oh, and bring extra memory cards! You'll want to capture every moment - from a gorilla's curious stare to an elephant's knowing wink.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🥾</div>
              <h3 className="text-2xl font-bold mb-3">Physical Activity</h3>
              <p className="text-gray-200">
                Some experiences involve trekking. Maintain a moderate fitness level and bring appropriate gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-safari-green mb-6">
            Combine Multiple Experiences
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Combine multiple experiences to create your ideal Uganda safari. Our team will design a custom itinerary that matches your interests, timeline, and travel style.
          </p>
          <button onClick={() => handleBooking('Custom Package')} className="btn-primary text-lg">
            Design Your Safari
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
