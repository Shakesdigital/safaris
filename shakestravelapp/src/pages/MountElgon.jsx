import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function MountElgon() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Mount Elgon National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Africa's Ancient Giant
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
                Mount Elgon straddles eastern Uganda and Kenya, with Uganda's Mount Elgon National Park covering
                about 1,121 km² of the 2,151 km² massif. Its peak, Wagagai (4,321 m), is the highest point in Uganda
                and the 8th highest in Africa. An extinct volcano ~24 million years old, Mount Elgon once towered far
                higher than Kilimanjaro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Erosion over millennia has carved a giant 40 km² caldera and deep canyons. The park's cool high-altitude
                forests and moorlands harbor rich wildlife and has earned UNESCO designation as a transboundary Man &
                the Biosphere Reserve. Mount Elgon offers rugged, crowd-free hiking compared to Kilimanjaro or the
                Rwenzoris, with famous features including the vast caldera, hot springs, and elephant-visited Kitum Caves.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">1,121 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Highest Peak</h3>
                  <p className="text-gray-700">4,321m (Wagagai)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">300+ species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">UNESCO Site</h3>
                  <p className="text-gray-700">Biosphere Reserve</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Mount Elgon National Park"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">Wagagai Peak</h3>
              <p className="text-gray-700">
                Uganda's highest point at 4,321m. Achieving Wagagai's summit rewards hikers with sunrise over
                distant ranges. Compared to other African peaks, the climb is non-technical but strenuous due to
                length and altitude.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">The Caldera & Jackson's Pool</h3>
              <p className="text-gray-700">
                The world's largest intact volcanic caldera (40 km²) lies just below Wagagai. Its steep "Wall of
                Death" cliffs and hidden lakes are geological marvels. Inside the caldera, Jackson's Pool is a surreal
                hot spring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Sipi Falls</h3>
              <p className="text-gray-700">
                A short drive from the park, Sipi Falls is a set of three descending waterfalls on the slopes of
                Elgon. The classic 3-hour hike starts at Sipi village and visits all three cataracts, with coffee
                plantations and waterfalls plunging over 100m.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Forest Wildlife & Birding</h3>
              <p className="text-gray-700">
                The montane forests around Kapkwai Exploration Center are birding hotspots. Look for high-altitude
                specialists: Elgon Francolin, Crowned Eagle, Hartlaub's Turaco, and even Bearded Vulture circling
                the cliffs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Cultural Sites</h3>
              <p className="text-gray-700">
                Near Kapchorwa lies the Mtoto Monument and local Sabiny communities. Guests can visit the Sebei
                Cultural Center for traditional dances or time visits during the August Imbalu festival when hundreds
                of boys are circumcised.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Hot Springs & Nature Trails</h3>
              <p className="text-gray-700">
                Several thermal springs bubble from Elgon's flanks. Short nature trails near Budadiri or Sipi offer
                gentle walks through bamboo forests, coffee farms, and up to viewpoints like the Wanale Ridge.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">Summit Trek (Wagagai)</h3>
                <p className="text-gray-700 mb-3">
                  Multi-day hike (3-6 days round-trip) to East Africa's largest caldera and Uganda's highest peak.
                  Trek through montane forest, bamboo zones, and moorland. Groups typically 4-8 hikers with moderate
                  difficulty but long distance and high altitude.
                </p>
                <button
                  onClick={() => handleBooking('Summit Trek - Mount Elgon')}
                  className="btn-primary"
                >
                  Book Summit Trek
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Sipi Falls Hike</h3>
                <p className="text-gray-700 mb-3">
                  Day hike (4-6 hours) starting at Sipi village. A local guide leads you along coffee terraces to all
                  three waterfalls. Easy to moderate difficulty with steep descent/ascent. Includes coffee farm visits.
                </p>
                <button
                  onClick={() => handleBooking('Sipi Falls Hike - Mount Elgon')}
                  className="btn-primary"
                >
                  Book Sipi Falls Hike
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Mountain Biking</h3>
                <p className="text-gray-700 mb-3">
                  1-2 day biking excursions on forest tracks around Sipi or Kapkwai. Trails vary from gentle loops to
                  steep Enduro routes. Good fitness and biking skills needed on rough descents.
                </p>
                <button
                  onClick={() => handleBooking('Mountain Biking - Mount Elgon')}
                  className="btn-primary"
                >
                  Book Mountain Biking
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Birding & Nature Walks</h3>
                <p className="text-gray-700 mb-3">
                  Morning guided walks around Kapkwai or Sipi forests. Focus on endemic and rare species. Easy
                  trails; best birding just after dawn. Highlights include Northern Double-collared Sunbird and
                  Kakamega woodpecker.
                </p>
                <button
                  onClick={() => handleBooking('Birding & Nature Walks - Mount Elgon')}
                  className="btn-primary"
                >
                  Book Birding Tour
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Abseiling/Rock Climbing</h3>
                <p className="text-gray-700 mb-3">
                  At Sipi Falls, ropes course with 100m waterfall rappel. Single-day experience for beginners to
                  intermediate climbers. Participants learn safety belaying from experts.
                </p>
                <button
                  onClick={() => handleBooking('Abseiling - Mount Elgon')}
                  className="btn-primary"
                >
                  Book Abseiling
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Cultural & Community Trails</h3>
                <p className="text-gray-700 mb-3">
                  Half-day visits to Sabiny villages, coffee farms or Ndorobo trail. Walks include homestay lunch or
                  coffee ceremony. Great for learning local culture and birdwatching along riverine gardens.
                </p>
                <button
                  onClick={() => handleBooking('Cultural Trails - Mount Elgon')}
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
                <p><strong>From Kampala:</strong> 143 km drive (2.5-3 hours) via highway to Mbale</p>
                <p><strong>Air Access:</strong> Daily flights to Soroti or Mbale airstrips (45-60 minutes)</p>
                <p><strong>Trailheads:</strong> Sipi, Budadiri, and Bushiyi gates accessible by road</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-February, June-early September (drier trails)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (lush scenery, fewer visitors)</p>
                <p><strong>Temperature:</strong> Varies from tropical at base to freezing at summit</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Geology:</strong> Ancient volcano with world's largest caldera</p>
                <p><strong>Vegetation:</strong> Montane forest to afro-alpine moorland with giant lobelias</p>
                <p><strong>Culture:</strong> Sabiny and Bagisu communities with rich traditions</p>
                <p><strong>Activities:</strong> Hiking, biking, abseiling, and cultural experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conquer Uganda's Highest Peak
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Challenge yourself on Mount Elgon's ancient trails and discover one of Africa's most underrated
            adventure destinations. From thundering waterfalls to silent moorlands, Elgon offers an authentic
            mountaineering experience far from the crowds.
          </p>
          <button
            onClick={() => handleBooking('Complete Mount Elgon Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Mount Elgon Adventure
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