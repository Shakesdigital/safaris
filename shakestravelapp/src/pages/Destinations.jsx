import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'

export default function Destinations() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState('')

  const handleBooking = (destination) => {
    setSelectedDestination(destination)
    setIsModalOpen(true)
  }

  const getDestinationUrl = (destinationName) => {
    const urlMap = {
      'Bwindi Impenetrable National Park': 'bwindi-impenetrable',
      'Kibale National Park': 'kibale-national-park',
      'Queen Elizabeth National Park': 'queen-elizabeth',
      'Murchison Falls National Park': 'murchison-falls',
      'Kidepo Valley National Park': 'kidepo-valley',
      'Lake Mburo National Park': 'lake-mburo',
      'Mount Elgon National Park': 'mount-elgon',
      'Rwenzori Mountains National Park': 'rwenzori-mountains',
      'Semuliki Valley National Park': 'semuliki-valley'
    }
    return urlMap[destinationName] || destinationName.toLowerCase().replace(/\s+/g, '-')
  }

  const destinations = [
    {
      name: 'Bwindi Impenetrable National Park',
      tagline: 'Home of the Mountain Gorillas',
      description: 'Imagine stepping into a real-life jungle book where mountain gorillas peer at you through the mist. Bwindi isn\'t just a park - it\'s where you come face-to-face with families of these gentle giants, where every hike feels like a personal invitation into their world.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
      highlights: [
        'Mountain Gorilla Trekking',
        'Over 350 bird species',
        'Ancient rainforest ecosystem',
        'Batwa cultural experiences'
      ],
      bestTime: 'June to September, December to February',
      duration: '2-3 days'
    },
    {
      name: 'Queen Elizabeth National Park',
      tagline: 'Medley of Wonders',
      description: 'This place has it all - from lions lounging in trees (yes, really!) to elephants marching to the water\'s edge. Take a boat cruise on the Kazinga Channel and watch hippos yawn, crocs bask, and birds put on a show. It\'s like nature decided to throw the ultimate wildlife party.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      highlights: [
        'Tree-climbing lions in Ishasha',
        'Kazinga Channel boat safari',
        'Over 95 mammal species',
        'Spectacular Crater Lakes'
      ],
      bestTime: 'June to September, December to February',
      duration: '2-4 days'
    },
    {
      name: 'Murchison Falls National Park',
      tagline: 'Where Nature Performs',
      description: 'Picture the world\'s longest river squeezing through a tiny crack in the rocks and exploding out the other side - that\'s Murchison Falls! Watch the Nile force its way through, then hop on a boat to see crocs, hippos, and elephants along the banks. It\'s raw power meets pure beauty.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      highlights: [
        'Murchison Falls boat trip',
        'Big Four wildlife viewing',
        'Nile River safaris',
        'Over 450 bird species'
      ],
      bestTime: 'December to February, June to September',
      duration: '2-3 days'
    },
    {
      name: 'Kibale National Park',
      tagline: 'Primate Capital of the World',
      description: 'Kibale National Park is renowned for having the highest concentration of primates in East Africa. The park is home to 13 primate species including over 1,500 chimpanzees.',
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800',
      highlights: [
        'Chimpanzee trekking',
        '13 primate species',
        'Bigodi Wetland Sanctuary',
        'Nature walks and birding'
      ],
      bestTime: 'February to June, September to November',
      duration: '1-2 days'
    },
    {
      name: 'Lake Mburo National Park',
      tagline: 'Whispers of the Wild',
      description: 'The smallest of Uganda\'s savanna national parks, Lake Mburo offers an intimate safari experience with diverse wildlife, beautiful landscapes, and opportunities for walking safaris.',
      image: 'https://images.unsplash.com/photo-1535338623859-38b734369d9d?w=800',
      highlights: [
        'Walking safaris',
        'Horse riding safaris',
        'Boat trips on the lake',
        'Zebras and impalas'
      ],
      bestTime: 'June to September, December to February',
      duration: '1-2 days'
    },
    {
      name: 'Kidepo Valley National Park',
      tagline: 'Africa\'s True Wilderness',
      description: 'Remote and rugged, Kidepo Valley National Park is Uganda\'s most isolated park. It offers a true wilderness experience with dramatic scenery and rare wildlife species found nowhere else in Uganda.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      highlights: [
        'Remote wilderness experience',
        'Unique wildlife species',
        'Karamojong cultural encounters',
        'Stunning mountain scenery'
      ],
      bestTime: 'September to March',
      duration: '2-3 days'
    },
    {
      name: 'Semuliki Valley National Park',
      tagline: 'Biodiversity Hotspot',
      description: 'East Africa\'s only lowland tropical rainforest, Semuliki Valley represents a living museum of prehistoric biological diversity. This ancient forest is a biological bridge between Central and East African environments, hosting species found nowhere else in East Africa.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      highlights: [
        'Sempaya Hot Springs',
        '441 bird species including 35 Guinea-Congo biome species',
        '8 primate species and unique Central African mammals',
        'Ancient rainforest ecosystem'
      ],
      bestTime: 'December to February, June to September',
      duration: '2-3 days'
    },
    {
      name: 'Rwenzori Mountains National Park',
      tagline: 'Mountains of the Moon',
      description: 'The Rwenzori Mountains are tectonic mountains with year-round snow and glaciers, offering epic high-altitude trekking through otherworldly landscapes. Home to Africa\'s third-highest peak and unique afro-alpine vegetation including giant lobelias and groundsels.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      highlights: [
        'Margherita Peak (5,109m) - Africa\'s third-highest mountain',
        'Unique afro-alpine flora and glacial lakes',
        'Technical climbing and mountaineering',
        'Bakonzo cultural experiences'
      ],
      bestTime: 'June to August, December to February',
      duration: '5-12 days'
    },
    {
      name: 'Mount Elgon National Park',
      tagline: 'Africa\'s Ancient Giant',
      description: 'An extinct volcano with the world\'s largest intact caldera, Mount Elgon offers rugged hiking through diverse ecosystems from montane forest to afro-alpine moorland. Home to Uganda\'s highest point and spectacular waterfalls including the famous Sipi Falls.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      highlights: [
        'Wagagai Peak (4,321m) - Uganda\'s highest point',
        'World\'s largest volcanic caldera (40 km²)',
        'Spectacular Sipi Falls and hot springs',
        'UNESCO Biosphere Reserve status'
      ],
      bestTime: 'December to February, June to September',
      duration: '3-6 days'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Uganda Safari Destinations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the Pearl of Africa's most spectacular national parks and wildlife reserves
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Uganda offers incredible diversity—from ancient rainforests where mountain gorillas roam, to vast savanna plains alive with wildlife.
            Each destination showcases unique ecosystems, breathtaking scenery, and unforgettable wildlife encounters. Let us guide you through
            the Pearl of Africa's most spectacular national parks and natural wonders.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="card overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="md:w-1/2 space-y-4">
                  <div>
                    <h2 className="text-4xl font-bold text-safari-green mb-2">
                      {destination.name}
                    </h2>
                    <p className="text-xl text-safari-gold italic">{destination.tagline}</p>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {destination.description}
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-safari-green mb-3">Highlights</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-safari-gold mr-2">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Best Time to Visit</p>
                      <p className="text-gray-800">{destination.bestTime}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Recommended Duration</p>
                      <p className="text-gray-800">{destination.duration}</p>
                    </div>
                  </div>

                  <Link
                    to={`/destinations/${getDestinationUrl(destination.name)}`}
                    className="btn-primary mt-4 inline-block"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t-4 border-safari-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-safari-green">
            Create Your Custom Safari Itinerary
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Combine multiple destinations to create your perfect Uganda safari. Our expertly curated itineraries can blend diverse experiences based on your interests and schedule.
          </p>
          <button onClick={() => handleBooking('Custom Itinerary')} className="btn-primary text-lg">
            Get Started
          </button>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedDestination}
      />
    </div>
  )
}
