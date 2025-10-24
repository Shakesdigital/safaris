import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function BwindiImpenetrable() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Bwindi Impenetrable National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Uganda's Premier Gorilla Trekking Destination
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
                Located in southwestern Uganda on the edge of the Albertine Rift Valley, Bwindi Impenetrable National
                Park encompasses 331 square kilometers of ancient rainforest dating back over 25,000 years. This UNESCO
                World Heritage Site delivers life-changing encounters with our closest living relatives while supporting
                critical conservation efforts that protect nearly half the world's remaining mountain gorilla population.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Home to approximately 460 mountain gorillas—nearly 50% of the global population—Bwindi combines
                thrilling adventure with meaningful conservation impact. Every visitor contributes directly to gorilla
                protection and community development through Uganda's innovative revenue-sharing model, making
                each trek both personally transformative and globally significant for wildlife conservation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">331 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Elevation</h3>
                  <p className="text-gray-700">1,160 - 2,706m</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Gorilla Families</h3>
                  <p className="text-gray-700">25+ habituated groups</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">350+</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800"
                alt="Bwindi Impenetrable National Park"
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
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #24684f' }}>
              <h3 className="text-xl font-bold text-safari-green mb-3">Mountain Gorilla Encounters</h3>
              <p className="text-gray-700">
                25 habituated gorilla families across four sectors provide the world's most accessible mountain gorilla
                viewing. Each family offers unique personalities and behaviors, with success rates exceeding 95%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #24684f' }}>
              <h3 className="text-xl font-bold text-safari-green mb-3">Munyaga Waterfalls</h3>
              <p className="text-gray-700">
                This spectacular 33-meter cascade provides a perfect complement to gorilla trekking through a
                manageable 3-hour forest hike from Buhoma sector.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #24684f' }}>
              <h3 className="text-xl font-bold text-safari-green mb-3">Rushura Hill Viewpoint</h3>
              <p className="text-gray-700">
                360-degree panoramic vistas encompass the Virunga Volcanoes, Rwenzori Mountains, and Western Rift
                Valley. This moderate 3-hour climb offers spectacular sunrise and sunset viewing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #24684f' }}>
              <h3 className="text-xl font-bold text-safari-green mb-3">Mubwindi Swamp</h3>
              <p className="text-gray-700">
                A birding paradise with over 200 species including rare Albertine Rift endemics like the African Green
                Broadbill and Shelley's Crimson-wing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #24684f' }}>
              <h3 className="text-xl font-bold text-safari-green mb-3">Batwa Heritage Trail</h3>
              <p className="text-gray-700">
                Cultural immersion experiences with the forest's original inhabitants provide insights into traditional
                forest survival skills and spiritual connections to the ancient ecosystem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #24684f' }}>
              <h3 className="text-xl font-bold text-safari-green mb-3">Bamboo Forest Ecosystem</h3>
              <p className="text-gray-700">
                High-altitude bamboo zones above 2,400 meters offer unique trekking experiences through specialized
                habitats supporting distinct wildlife communities.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">Gorilla Trekking</h3>
                <p className="text-gray-700 mb-3">
                  The park's signature experience with 17 habituated families available for tourism across four sectors.
                  Treks involve steep climbs through dense vegetation with 95%+ success rates for encounters.
                </p>
                <button
                  onClick={() => handleBooking('Gorilla Trekking - Bwindi')}
                  className="btn-primary"
                >
                  Book Gorilla Trekking
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Gorilla Habituation Experience</h3>
                <p className="text-gray-700 mb-3">
                  In Rushaga sector offers four hours with research teams training wild gorillas for future tourism.
                  This premium experience provides unparalleled insights into gorilla behavior and conservation science.
                </p>
                <button
                  onClick={() => handleBooking('Gorilla Habituation - Bwindi')}
                  className="btn-primary"
                >
                  Book Habituation Experience
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Forest Hiking</h3>
                <p className="text-gray-700 mb-3">
                  Multiple trail options from easy 3-hour waterfall walks to challenging 7-hour sector-connecting treks.
                  Popular routes include the Munyaga Waterfall Trail and Rushura Hill climb.
                </p>
                <button
                  onClick={() => handleBooking('Forest Hiking - Bwindi')}
                  className="btn-primary"
                >
                  Book Forest Hike
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Birdwatching Tours</h3>
                <p className="text-gray-700 mb-3">
                  Bwindi's status as Uganda's premier birding destination with 23 Albertine Rift endemic species.
                  The Mubwindi Swamp Trail in Ruhija sector provides exceptional opportunities for both novice and expert birders.
                </p>
                <button
                  onClick={() => handleBooking('Birdwatching - Bwindi')}
                  className="btn-primary"
                >
                  Book Birdwatching Tour
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Batwa Cultural Experiences</h3>
                <p className="text-gray-700 mb-3">
                  Connect visitors with the forest's original inhabitants through traditional skills demonstrations,
                  storytelling, and insights into sustainable forest living practices developed over millennia.
                </p>
                <button
                  onClick={() => handleBooking('Batwa Cultural Experience - Bwindi')}
                  className="btn-primary"
                >
                  Book Cultural Experience
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Community Conservation Projects</h3>
                <p className="text-gray-700 mb-3">
                  Revenue-sharing initiatives allow visitors to witness direct conservation impacts through community-
                  managed projects including schools, hospitals, and sustainable development programs.
                </p>
                <button
                  onClick={() => handleBooking('Community Visit - Bwindi')}
                  className="btn-primary"
                >
                  Book Community Visit
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
                <p><strong>Flight Options:</strong> Daily flights from Entebbe to Kihihi or Kisoro airstrips</p>
                <p><strong>Road Access:</strong> 8-9 hour drive from Kampala via Mbarara and Kabale</p>
                <p><strong>Border Access:</strong> 3-5 hour drive from Kigali, Rwanda via Cyanika Border</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Peak Season:</strong> June-September, December-February (dry trails, clear views)</p>
                <p><strong>Shoulder Season:</strong> March, September, early December (good value, moderate conditions)</p>
                <p><strong>Low Season:</strong> April-May, October-November (challenging but rewarding)</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Sectors</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Buhoma:</strong> Most accommodation options, established infrastructure</p>
                <p><strong>Rushaga:</strong> Most gorilla families (8), habituation experience available</p>
                <p><strong>Nkuringo:</strong> Scenic volcano views, fewer crowds</p>
                <p><strong>Ruhija:</strong> Superior birding opportunities, cooler climate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Meet the Mountain Gorillas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embark on a life-changing journey into Bwindi's ancient rainforest. Our expert guides and carefully
            planned itineraries ensure you experience the magic of gorilla trekking while supporting vital conservation efforts.
          </p>
          <button
            onClick={() => handleBooking('Complete Bwindi Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Bwindi Adventure
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