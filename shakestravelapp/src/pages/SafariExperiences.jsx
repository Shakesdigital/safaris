import { useState } from 'react'
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
      title: 'Gorilla Trekking',
      icon: '🦍',
      tagline: 'The Ultimate Wildlife Encounter',
      description: 'This isn\'t just tracking animals - it\'s meeting family. You\'ll hike through misty forests with our expert guides, then sit quietly as a gorilla family goes about their day just meters away. It\'s humbling, thrilling, and changes how you see the world.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
      includes: [
        'Expert gorilla tracking guides',
        'Park entrance fees',
        'Gorilla permit (subject to availability)',
        'Pre-trek briefing',
        'Certificate of participation'
      ],
      duration: '1-6 hours trekking',
      difficulty: 'Moderate to Challenging',
      price: 'From $700 per person'
    },
    {
      title: 'Big Game Safari',
      icon: '🦁',
      tagline: 'Classic African Safari',
      description: 'Experience the thrill of spotting lions, elephants, leopards, and buffaloes in their natural savanna habitat. Our expert guides will take you through Uganda\'s premier wildlife parks.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      includes: [
        '4x4 safari vehicle with pop-up roof',
        'Professional wildlife guide',
        'Game drives (morning & evening)',
        'Binoculars and field guides',
        'Drinking water during drives'
      ],
      duration: '2-7 days',
      difficulty: 'Easy',
      price: 'From $300 per day'
    },
    {
      title: 'Chimpanzee Tracking',
      icon: '🐵',
      tagline: 'Primate Adventure',
      description: 'Trek through lush forests to find habituated chimpanzee communities. Watch these intelligent primates as they feed, play, and interact in their forest home.',
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800',
      includes: [
        'Chimpanzee tracking permit',
        'Experienced tracker guide',
        'Park fees',
        'Nature walk briefing',
        'Photography opportunities'
      ],
      duration: '2-5 hours',
      difficulty: 'Moderate',
      price: 'From $200 per person'
    },
    {
      title: 'Boat Safari',
      icon: '🚤',
      tagline: 'Aquatic Wildlife Viewing',
      description: 'There\'s something magical about watching wildlife from the water. Elephants come down to drink, hippos surface with grumpy snorts, and birds put on aerial shows. It\'s like having VIP seats to nature\'s most entertaining theater.',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800',
      includes: [
        'Professional boat captain',
        'Life jackets and safety equipment',
        'Bird identification guide',
        'Refreshments on board',
        'Waterproof binoculars'
      ],
      duration: '2-3 hours',
      difficulty: 'Easy',
      price: 'From $40 per person'
    },
    {
      title: 'Cultural Experiences',
      icon: '🎭',
      tagline: 'Authentic Cultural Immersion',
      description: 'Connect with Uganda\'s diverse cultures through village visits, traditional dance performances, and interactions with local communities including the Batwa pygmies.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
      includes: [
        'Cultural guide and interpreter',
        'Village community visit',
        'Traditional dance performance',
        'Local craft demonstrations',
        'Community contribution'
      ],
      duration: '3-5 hours',
      difficulty: 'Easy',
      price: 'From $50 per person'
    },
    {
      title: 'Bird Watching Safari',
      icon: '🦅',
      tagline: 'Ornithological Paradise',
      description: 'Uganda boasts over 1,000 bird species. Join expert birding guides to spot rare and endemic species including the Shoebill stork and African Green Broadbill.',
      image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800',
      includes: [
        'Specialist birding guide',
        'Bird checklist and field guide',
        'High-quality binoculars',
        'Early morning bird walks',
        'Photography support'
      ],
      duration: '3-7 days',
      difficulty: 'Easy to Moderate',
      price: 'From $150 per day'
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
                  <h2 className="text-3xl font-bold text-safari-green mb-2">
                    {experience.title}
                  </h2>
                  <p className="text-lg text-safari-gold italic mb-4">{experience.tagline}</p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-safari-green mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {experience.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-safari-gold mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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

                  <button
                    onClick={() => handleBooking(experience.title)}
                    className="btn-primary w-full"
                  >
                    Book This Experience
                  </button>
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
