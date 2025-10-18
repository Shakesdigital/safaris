import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function MurchisonFalls() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Murchison Falls National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where Nature Performs
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
                Murchison Falls National Park stands as Uganda's crown jewel of safari destinations, offering an
                extraordinary blend of raw wilderness, thunderous waterfalls, and spectacular wildlife viewing
                opportunities. Uganda's largest and oldest national park spans an impressive 3,893 square kilometers,
                making it a pristine wilderness twice the size of many European countries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located in northwestern Uganda at the northern end of the Albertine Rift Valley, the park is bisected
                by the mighty Victoria Nile River, which creates its most spectacular attraction - the thunderous
                Murchison Falls. Here, the Nile explodes through a narrow 7-8 meter gap in the rock escarpment and
                plunges 45 meters into the "Devil's Cauldron" below, creating one of the world's most powerful waterfalls.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">3,893 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Mammal Species</h3>
                  <p className="text-gray-700">144 species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">556+ species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Elephants</h3>
                  <p className="text-gray-700">15,000+ individuals</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=800"
                alt="Murchison Falls National Park"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-safari-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-safari-green mb-12 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">The Spectacular Murchison Falls</h3>
              <p className="text-gray-700">
                The park's namesake waterfall represents one of nature's most powerful displays, where the mighty
                Nile River forces approximately 300 cubic meters of water per second through a narrow 7-8 meter gap
                before plunging 45 meters into the Devil's Cauldron below.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">World-Class Boat Safaris</h3>
              <p className="text-gray-700">
                The boat cruise to the base of Murchison Falls ranks among East Africa's premier wildlife experiences.
                During the 3-hour journey, visitors encounter dense populations of hippos, massive Nile crocodiles,
                and elephants, giraffes, and buffaloes drinking along the riverbanks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Exceptional Game Viewing</h3>
              <p className="text-gray-700">
                The park's northern sector offers classic African savanna experiences with excellent wildlife
                densities. Game drives regularly yield sightings of lions, leopards, elephants, buffaloes, and
                Rothschild's giraffes (three-quarters of the world's population).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Albert Nile Delta Birding</h3>
              <p className="text-gray-700">
                The 20-kilometer downstream boat cruise to the Albert Delta provides unparalleled birding
                opportunities, particularly for spotting the prehistoric shoebill stork. This journey offers sightings
                of over 200 water bird species.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Top of the Falls Hike</h3>
              <p className="text-gray-700">
                The guided hike to the top of Murchison Falls combines history, adventure, and spectacular scenery.
                Starting from Baker's Point, the 45-minute trek follows the Winston Churchill Trail used by the
                British statesman in 1907.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Chimpanzee Trekking</h3>
              <p className="text-gray-700">
                The ancient Budongo Forest harbors over 800 chimpanzees across six habituated groups. Chimpanzee
                trekking experiences last 3-4 hours and provide one-hour encounters with our closest relatives in
                their natural habitat.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">Boat Safari to Murchison Falls</h3>
                <p className="text-gray-700 mb-3">
                  The signature boat cruise to the base of Murchison Falls represents the park's most popular activity.
                  This 3-hour journey covers 17 kilometers upstream from Paraa jetty, navigating through one of Africa's
                  most wildlife-rich river sections.
                </p>
                <button
                  onClick={() => handleBooking('Boat Safari - Murchison Falls')}
                  className="btn-primary"
                >
                  Book Boat Safari
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Game Drive Safaris</h3>
                <p className="text-gray-700 mb-3">
                  Game drives in Murchison Falls provide classic African safari experiences across diverse ecosystems.
                  The northern sector's savanna grasslands offer exceptional wildlife concentrations, while southern
                  forest areas provide primate encounters.
                </p>
                <button
                  onClick={() => handleBooking('Game Drives - Murchison Falls')}
                  className="btn-primary"
                >
                  Book Game Drive
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Top of Falls Hike</h3>
                <p className="text-gray-700 mb-3">
                  This adventurous trek provides spectacular views from above Murchison Falls, following historical
                  routes used by Winston Churchill and starting from Baker's Point where Samuel Baker first named
                  the falls in 1864.
                </p>
                <button
                  onClick={() => handleBooking('Top of Falls Hike - Murchison Falls')}
                  className="btn-primary"
                >
                  Book Falls Hike
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Shoebill Stork Tracking</h3>
                <p className="text-gray-700 mb-3">
                  The downstream cruise to Albert Delta offers Uganda's best opportunity to observe the prehistoric
                  shoebill stork. This 4-5 hour journey through papyrus swamps and wetlands offers sightings of over
                  200 water bird species.
                </p>
                <button
                  onClick={() => handleBooking('Shoebill Stork Tracking - Murchison Falls')}
                  className="btn-primary"
                >
                  Book Birding Cruise
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Chimpanzee Trekking</h3>
                <p className="text-gray-700 mb-3">
                  East Africa's largest mahogany forest harbors over 800 chimpanzees across six habituated groups,
                  offering intimate encounters with our closest living relatives in their natural habitat.
                </p>
                <button
                  onClick={() => handleBooking('Chimpanzee Trekking - Murchison Falls')}
                  className="btn-primary"
                >
                  Book Chimpanzee Trekking
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Sport Fishing</h3>
                <p className="text-gray-700 mb-3">
                  The Victoria Nile offers world-class sport fishing, particularly for massive Nile perch exceeding
                  100 kilograms, alongside tigerfish, tilapia, and catfish. The experience combines angling excitement
                  with wildlife viewing.
                </p>
                <button
                  onClick={() => handleBooking('Sport Fishing - Murchison Falls')}
                  className="btn-primary"
                >
                  Book Fishing Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 bg-safari-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-safari-green mb-12 text-center">Travel Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Getting There</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>From Kampala:</strong> 305 km drive (5-6 hours) via Masindi highway</p>
                <p><strong>Air Access:</strong> Daily flights to Pakuba Airstrip (1 hour 15 minutes)</p>
                <p><strong>Ferry Crossing:</strong> Paraa Ferry connects southern and northern sectors</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-February, June-September (excellent game viewing)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (lush scenery, fewer visitors)</p>
                <p><strong>Shoebill Season:</strong> January-March (optimal stork viewing)</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Big Five:</strong> Four of the Big Five (elephants, lions, leopards, buffaloes)</p>
                <p><strong>Giraffes:</strong> Three-quarters of world's Rothschild's giraffe population</p>
                <p><strong>River Nile:</strong> World's longest river bisects the park</p>
                <p><strong>Conservation:</strong> Recent rhino reintroduction program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Power of the Nile
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Witness the incredible force of Murchison Falls and discover Uganda's premier safari destination.
            From thundering waterfalls to exceptional wildlife viewing, Murchison Falls offers an authentic African
            adventure that will leave you breathless.
          </p>
          <button
            onClick={() => handleBooking('Complete Murchison Falls Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Murchison Falls Adventure
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