import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function QueenElizabeth() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState('')

  const handleBooking = (experience) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

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
            Queen Elizabeth National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Uganda's Premier Wildlife Safari Destination
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-safari-green mb-6">Destination Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Queen Elizabeth National Park stands as Uganda's most visited and diverse wildlife destination, offering
                an extraordinary blend of savannah, wetlands, forests, and crater lakes across 1,978 square kilometers.
                Home to 95 mammal species and over 600 bird species, this UNESCO Biosphere Reserve delivers classic
                African safari experiences with unique features like tree-climbing lions and boat cruises through hippo-filled channels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The park's strategic location in western Uganda makes it the perfect centerpiece for multi-destination
                safaris, seamlessly connecting gorilla trekking in Bwindi, chimpanzee tracking in Kibale, and the dramatic
                Murchison Falls. With accommodation options ranging from budget camping to luxury eco-lodges,
                Queen Elizabeth provides accessible wildlife adventures for every traveler.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">1,978 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Mammal Species</h3>
                  <p className="text-gray-700">95 species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">600+ species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Crater Lakes</h3>
                  <p className="text-gray-700">100+ lakes</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
                alt="Queen Elizabeth National Park"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-safari-green mb-12 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Tree-Climbing Lions of Ishasha</h3>
              <p className="text-gray-700">
                The Ishasha sector hosts one of only two populations of tree-climbing lions worldwide. These
                magnificent cats regularly lounge in fig and acacia trees, possibly escaping ground insects or gaining
                elevated hunting vantage points.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Kazinga Channel Boat Cruise</h3>
              <p className="text-gray-700">
                This 32-kilometer natural waterway connecting Lakes Edward and George provides Uganda's highest
                wildlife concentration along its banks. Two-hour cruises reveal massive hippo pods and basking crocodiles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Kasenyi Plains Game Viewing</h3>
              <p className="text-gray-700">
                These expansive savannah grasslands offer classic African safari experiences with high lion density,
                large buffalo herds, elephant families, and abundant Uganda kob antelope.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Kyambura Gorge Chimpanzee Tracking</h3>
              <p className="text-gray-700">
                This 100-meter deep forested gorge creates an "underground rainforest" environment harboring
                habituated chimpanzee groups. Daily tracking expeditions offer intimate primate encounters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Crater Lakes Exploration</h3>
              <p className="text-gray-700">
                Over 100 volcanic crater lakes dot the landscape, many hosting flamingo populations and providing
                scenic photography opportunities. Lake Katwe features traditional salt mining operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Maramagambo Forest</h3>
              <p className="text-gray-700">
                This remaining natural forest offers guided walking safaris through diverse habitats supporting
                forest primates, bird species, and unique flora. Bat caves and python encounters enhance the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-safari-green mb-12 text-center">Adventure Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Game Drives</h3>
                <p className="text-gray-700 mb-3">
                  Morning and afternoon game drives through Kasenyi Plains and Ishasha sector. The Kasenyi Plains
                  offer excellent lion and buffalo viewing, while Ishasha sector provides the famous tree-climbing lion encounters.
                </p>
                <button
                  onClick={() => handleBooking('Game Drives - Queen Elizabeth')}
                  className="btn-primary"
                >
                  Book Game Drive
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Kazinga Channel Boat Cruise</h3>
                <p className="text-gray-700 mb-3">
                  Two-hour cruises on the famous Kazinga Channel reveal massive hippo pods, basking crocodiles,
                  elephant herds drinking at water's edge, and exceptional birdlife including African fish eagles.
                </p>
                <button
                  onClick={() => handleBooking('Kazinga Channel Boat Cruise')}
                  className="btn-primary"
                >
                  Book Boat Cruise
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Chimpanzee Tracking</h3>
                <p className="text-gray-700 mb-3">
                  Kyambura Gorge offers 70% success rates for encounters with semi-habituated chimpanzee groups.
                  Morning expeditions combine primate viewing with forest ecosystem education.
                </p>
                <button
                  onClick={() => handleBooking('Chimpanzee Tracking - Queen Elizabeth')}
                  className="btn-primary"
                >
                  Book Chimpanzee Tracking
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Lion Tracking Experience</h3>
                <p className="text-gray-700 mb-3">
                  Join the Uganda Carnivore Program research teams using radio telemetry to locate collared lions
                  and leopards. This unique conservation experience provides insights into predator behavior.
                </p>
                <button
                  onClick={() => handleBooking('Lion Tracking - Queen Elizabeth')}
                  className="btn-primary"
                >
                  Book Lion Tracking
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Night Game Drives</h3>
                <p className="text-gray-700 mb-3">
                  Evening drives reveal nocturnal species like leopards, hyenas, and smaller predators. These
                  specialized drives offer different wildlife viewing opportunities under spotlight.
                </p>
                <button
                  onClick={() => handleBooking('Night Game Drives - Queen Elizabeth')}
                  className="btn-primary"
                >
                  Book Night Drive
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Cultural Visits</h3>
                <p className="text-gray-700 mb-3">
                  Lake Katwe salt mining demonstrations and traditional village visits provide authentic cultural
                  exchange while supporting local economies through tourism revenue.
                </p>
                <button
                  onClick={() => handleBooking('Cultural Visits - Queen Elizabeth')}
                  className="btn-primary"
                >
                  Book Cultural Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-safari-green mb-12 text-center">Travel Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Getting There</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>From Kampala:</strong> 410-420 km drive (6-7 hours) via Mbarara or Fort Portal</p>
                <p><strong>Air Access:</strong> Daily flights to Mweya, Kasese, or Ishasha airstrips</p>
                <p><strong>Park Sectors:</strong> Mweya Peninsula, Kasenyi Plains, Ishasha, Kyambura Gorge</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-February, June-September (optimal game viewing)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (lush scenery, fewer visitors)</p>
                <p><strong>Temperature:</strong> 24-26°C average year-round</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>UNESCO Site:</strong> Designated Biosphere Reserve for biodiversity</p>
                <p><strong>Big Five:</strong> Four of the Big Five (lions, elephants, leopards, buffaloes)</p>
                <p><strong>Water Bodies:</strong> Lakes Edward, George, and 100+ crater lakes</p>
                <p><strong>Research:</strong> Active carnivore research and monitoring programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Uganda's Premier Safari Destination
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the incredible diversity of Queen Elizabeth National Park, from tree-climbing lions to
            hippo-filled channels. Our expert guides will lead you on unforgettable wildlife encounters in one of
            Africa's most spectacular safari destinations.
          </p>
          <button
            onClick={() => handleBooking('Complete Queen Elizabeth Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Queen Elizabeth Adventure
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