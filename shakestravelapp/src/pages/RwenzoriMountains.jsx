import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function RwenzoriMountains() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Rwenzori Mountains National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Mountains of the Moon
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
                The Rwenzori Mountains ("Mountains of the Moon") lie in western Uganda along the DR Congo border.
                The park spans roughly 996 km² of rugged peaks, glaciers and montane forests. Unlike volcanic
                Kilimanjaro, the Rwenzoris are tectonic mountains with year-round snow and glaciers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The summit of Mt. Stanley (Margherita Peak, 5,109m) is the third-highest point in Africa. The park's
                biodiversity is exceptional: over 70 mammal species and 217 bird species inhabit the forests and
                moorlands. Unique Afro-alpine vegetation gives hikers an "otherworldly" landscape of giant lobelia
                forests and mystical mossy terrain.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">996 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Highest Peak</h3>
                  <p className="text-gray-700">5,109m (Margherita)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">UNESCO Site</h3>
                  <p className="text-gray-700">World Heritage Site</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">217 species</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Rwenzori Mountains National Park"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">Margherita Peak</h3>
              <p className="text-gray-700">
                The park's crown jewel – Africa's third-highest mountain. Reaching the summit is a 9-12 day technical
                climb. Hikers earn panoramic views of snowfields and glaciers. Rarely visited peaks with recently
                installed rope bridge over glacier crevasses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Stanley Range</h3>
              <p className="text-gray-700">
                Adjacent peaks to Stanley including Speke Peak (4,890m) and Mt. Baker (4,843m). Many treks include
                summits or viewpoints on these mountains. Remote alpine terrain with dramatic landscapes and
                challenging scrambling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Alpine Lakes</h3>
              <p className="text-gray-700">
                The central circuit features a string of glacial lakes. Lake Mahoma, Bujuku, Kitandara create emerald
                tarns reflecting the snowy peaks. Camping by a glacial lake, surrounded by giant lobelias in misty
                mornings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Waterfalls & Rivers</h3>
              <p className="text-gray-700">
                Lower Rwenzori has spectacular falls on the Mubuku and Nyamwamba rivers. Notable falls include
                Enock's Falls, Samalira Falls and the series of Bridal/Sine waterfalls. Lush rainforest trails ending
                in tropical waterfalls with excellent birding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Afro-alpine Flora</h3>
              <p className="text-gray-700">
                The Rwenzori moorlands are world-famous for their exotic vegetation. Above 3,000m one finds giant
                groundsel and lobelia "trees" several meters tall, as well as heath, moss and lichen. British visitors
                liken it to "Middle Earth" or "enchanted forest".
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Cultural Sites</h3>
              <p className="text-gray-700">
                In the foothills, Ruboni Village overlooks Kasese and offers cultural tours with traditional Bakonzo
                dances, village visits, and local cuisine. The historical Bulemba Ruins (former king's palace) provide
                insight into Bakonzo history and hospitality.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">Summit Margherita Peak</h3>
                <p className="text-gray-700 mb-3">
                  The ultimate challenge: a 9-12 day technical climb to 5,109m. Groups spend nights in mountain huts
                  and use mountaineering gear. Very high difficulty with glacier travel and fixed ropes. Requires
                  experienced trekkers with insurance covering high-altitude mountaineering.
                </p>
                <button
                  onClick={() => handleBooking('Summit Margherita Peak - Rwenzori')}
                  className="btn-primary"
                >
                  Book Summit Expedition
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Peak Trek (Weismann's/Baker)</h3>
                <p className="text-gray-700 mb-3">
                  For a shorter summit experience, popular treks reach peaks like Edward Weismann Peak (4,620m).
                  This moderate climb requires fitness and acclimatization but is non-technical. 5-7 day treks with
                  long days and steep trails.
                </p>
                <button
                  onClick={() => handleBooking('Peak Trek - Rwenzori')}
                  className="btn-primary"
                >
                  Book Peak Trek
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Nature Walks & Birding</h3>
                <p className="text-gray-700 mb-3">
                  Half-day to full-day walks at lower elevations around Ruboni, Nyamwamba or Mubuku valley.
                  Explore montane rainforest and bamboo zones with guides spotting turacos, sunbirds, monkeys and
                  reptiles.
                </p>
                <button
                  onClick={() => handleBooking('Nature Walks & Birding - Rwenzori')}
                  className="btn-primary"
                >
                  Book Nature Walk
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Waterfalls & Lakes Trek</h3>
                <p className="text-gray-700 mb-3">
                  A short, scenic trek visiting Samalira Falls, Bridal/Sine Falls, Mahoma Falls and highland lakes.
                  Ideal for experienced hikers short on time. 3-4 days with mossy rainforest trails, bamboo groves,
                  and multiple river crossings.
                </p>
                <button
                  onClick={() => handleBooking('Waterfalls & Lakes Trek - Rwenzori')}
                  className="btn-primary"
                >
                  Book Waterfalls Trek
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Village & Cultural Tours</h3>
                <p className="text-gray-700 mb-3">
                  Immersive experiences in Bakonzo villages, especially Ruboni. Visits to local homesteads,
                  traditional drumming and dance performances, and walks through banana plantations to small
                  waterfalls.
                </p>
                <button
                  onClick={() => handleBooking('Village & Cultural Tours - Rwenzori')}
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
      <section className="py-16 bg-safari-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-safari-green mb-12 text-center">Travel Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Getting There</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>From Kampala:</strong> 465 km drive (8-10 hours) via Fort Portal</p>
                <p><strong>Air Access:</strong> Daily flights to Kasese Airport (1 hour from Entebbe)</p>
                <p><strong>Trailheads:</strong> Nyakalengija (northern) and Kilembe (southern) gates</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> June-August, December-February (least rain)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (challenging trails)</p>
                <p><strong>Temperature:</strong> Tropical at base to freezing at high altitude</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Geology:</strong> Tectonic mountains with glaciers and year-round snow</p>
                <p><strong>Vegetation:</strong> Giant lobelias, groundsels, and afro-alpine flora</p>
                <p><strong>Culture:</strong> Bakonzo people with rich mountain traditions</p>
                <p><strong>Challenge:</strong> Technical climbing with mountaineering equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Challenge Yourself in the Mountains of the Moon
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embark on Africa's ultimate mountaineering adventure in the mystical Rwenzori Mountains. From
            technical glacier climbs to enchanting moorland treks, the Rwenzoris offer an otherworldly experience
            that will test your limits and reward your spirit.
          </p>
          <button
            onClick={() => handleBooking('Complete Rwenzori Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Rwenzori Adventure
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