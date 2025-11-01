import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import ExperiencesCarousel from '../components/ExperiencesCarousel'
import FontAwesomeIcon from '../components/FontAwesomeIcon'

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
      title: '3 Days Safari Experience to Queen Elizabeth National Park',
      icon: 'fa-paw',
      tagline: 'Tree-Climbing Lions & Kazinga Channel',
      description: 'You\'ll find yourself in Uganda\'s most welcoming safari destination, where lions have learned to climb trees in the Ishasha sector - it\'s quite something to see these big cats lounging in the branches like oversized house cats. The Kazinga Channel feels like nature\'s own theater, with hippos grunting their morning greetings, elephants coming down for a drink, and more types of birds than you ever knew existed. It\'s the kind of place where every game drive and boat trip brings that genuine excitement of not knowing what you\'ll see next, but knowing it will be special.',
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
      title: '3 Days Safari Experience to Murchison Falls National Park',
      icon: 'fa-water',
      tagline: 'The Mighty Nile\'s Explosive Power',
      description: 'There\'s something almost unbelievable about watching the world\'s longest river squeeze through a narrow gap in the rocks and explode out the other side with such force it creates a permanent rainbow in the mist. You\'ll feel the ground vibrate as you approach Murchison Falls, and then spend your days discovering why this place captures hearts - from boat rides where crocodiles bask on the banks like they own the place, to game drives where elephant families wander by as if you\'re just another part of their landscape. It\'s the kind of raw, natural power that makes you understand why people fall in love with Africa.',
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
      title: '3 Days Safari Experience to Kidepo Valley National Park',
      icon: 'fa-paw',
      tagline: 'Uganda\'s Remote Wilderness Paradise',
      description: 'You\'ll drive for hours through changing landscapes until suddenly you\'re in a place that feels like the Africa of storybooks - vast plains stretching out to mountains that touch the sky. Here, in Uganda\'s most remote park, you might spot a cheetah scanning the horizon from a rocky outcrop, or watch ostriches striding across the grasslands like they\'ve been doing it forever. The Karamojong people welcome you with a warmth that makes you feel like you\'ve come home, sharing stories around evening fires that connect you to generations of living in harmony with this wild land.',
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
      title: '3 Days Safari Experience to Lake Mburo National Park',
      icon: 'fa-paw',
      tagline: 'Walking Safaris & Unique Wildlife',
      description: 'This is the kind of place that reminds you why you came to Africa in the first place - intimate, welcoming, and full of those quiet moments that become treasured memories. You can walk right up to zebras that graze as if you\'re not even there, take a boat ride where hippos surface nearby with their curious eyes, or even ride horses through the savanna like you\'re part of an old adventure story. It\'s smaller than other parks, which just means you get to know it better, see the personalities of the animals, and feel that genuine connection to a place that welcomes you like a friend.',
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
      title: '8 Days Trekking Experience to Rwenzori Mountains Margherita Peak',
      icon: 'fa-mountain',
      tagline: 'Africa\'s Mystical Mountains of the Moon',
      description: 'You\'ll feel like you\'ve stepped into another world when you enter these mountains - where giant lobelia plants tower over you like strange trees from a fairy tale, and moss drapes everything in soft green mystery. The air grows colder as you climb toward Margherita Peak, Africa\'s third-highest mountain, until you\'re walking through landscapes that don\'t seem like they belong on this continent. It\'s challenging, yes, but that moment when you stand at 5,109 meters looking out over valleys you\'ve crossed and peaks you\'ve conquered stays with you forever. These are the Mountains of the Moon, and they\'ll change how you see the world.',
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
      title: '3 Days Safari Experience to Bwindi Impenetrable National Park',
      icon: 'fa-paw',
      tagline: 'Encounter Mountain Gorillas in Ancient Rainforest',
      description: 'You\'ll walk into a forest that feels like it\'s been waiting for you, where every step brings you closer to one of life\'s most moving experiences - sitting quietly while a family of mountain gorillas goes about their day around you. These are our closest relatives, looking back at you with eyes that seem to understand something profound. Bwindi isn\'t just beautiful because of its ancient trees and misty hills; it\'s special because of those moments when a young gorilla plays nearby, or a silverback watches over his family, and you realize you\'re not just visiting - you\'re being welcomed into something timeless and precious.',
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
      title: '3 Days Safari Experience to Kibale National Park',
      icon: 'fa-paw',
      tagline: 'Primate Capital of the World',
      description: 'You\'ll walk into Kibale Forest and suddenly realize you\'re in a place where primates rule - chimpanzees calling to each other through the canopy, monkeys swinging from branch to branch like they\'re putting on a show just for you. This is where you sit quietly and watch a chimpanzee family interact, groom each other, and play, and you understand why scientists say we\'re so closely related. The forest envelops you in its cool, green embrace, and you leave knowing you\'ve witnessed something both wonderfully wild and deeply familiar. It\'s not just about seeing chimpanzees; it\'s about feeling connected to the very beginning of what makes us human.',
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
      {/* Hero Section with Experiences Carousel */}
      <div className="relative" style={{ borderRadius: '0px' }}>
        <ExperiencesCarousel />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading drop-shadow-lg">
              Safari Experiences
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              From gorilla encounters to cultural immersions - discover the experiences that make Uganda unforgettable
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that the best safari experiences come from genuine connections - with the land, the wildlife, and the people who call these places home.
            That's why we've put together journeys that let you step beyond the ordinary tourist path and into something real and memorable.
            Whether you're sitting quietly with a gorilla family or feeling the ground shake beneath Murchison Falls, these are the moments that make you fall in love with Africa.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
              return (
                <div key={index} className="card">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-4 text-4xl shadow-lg">
                      <FontAwesomeIcon icon={experience.icon} className="w-12 h-12 text-safari-green" />
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
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-safari-green">What to Expect on Safari</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <div className="text-5xl mb-4"><FontAwesomeIcon icon="fa-sun" className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="text-2xl font-bold mb-3 text-safari-green">Early Starts</h3>
              <p className="text-gray-700">
                The animals are early risers, so you should be too! Those pre-dawn starts mean you\'ll be there when the lions are most active and the light is perfect for photos.
              </p>
            </div>

            <div className="card text-center p-6">
              <div className="text-5xl mb-4"><FontAwesomeIcon icon="fa-camera" className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="text-2xl font-bold mb-3 text-safari-green">Photo Opportunities</h3>
              <p className="text-gray-700">
                Oh, and bring extra memory cards! You'll want to capture every moment - from a gorilla's curious stare to an elephant's knowing wink.
              </p>
            </div>

            <div className="card text-center p-6">
              <div className="text-5xl mb-4"><FontAwesomeIcon icon="fa-person-hiking" className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="text-2xl font-bold mb-3 text-safari-green">Physical Activity</h3>
              <p className="text-gray-700">
                Some experiences involve trekking. Maintain a moderate fitness level and bring appropriate gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center" style={{ border: '1px solid #24684f' }}>
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
