import { useState } from 'react'
import BookingModal from '../components/BookingModal'
import FontAwesomeIcon from '../components/FontAwesomeIcon'

export default function Jinja() {
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
            Jinja
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            The Nile's Source & Adventure Capital
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
                Jinja is Uganda's adventure capital and the gateway to the Source of the Nile. Situated at the northern shore
                of Lake Victoria, this vibrant town sits at the exact point where the world's longest river, the Nile, begins
                its legendary 6,650 km journey to the Mediterranean Sea. The presence of Africa's most powerful river has shaped
                this region into a global hotspot for adventure tourism.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beyond its natural significance, Jinja blends colonial charm with modern amenities. The town is a cultural
                melting pot where you can explore local craft markets, experience authentic Ugandan hospitality, and witness
                one of nature's most powerful forces. Whether you're seeking adrenaline-pumping activities or peaceful cultural
                experiences, Jinja offers the perfect balance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Location</h3>
                  <p className="text-gray-700">Lake Victoria Shore</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Distance from Kampala</h3>
                  <p className="text-gray-700">80 km (1.5 hours)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Primary Feature</h3>
                  <p className="text-gray-700">Source of the Nile</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Best For</h3>
                  <p className="text-gray-700">Adventure Activities</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Jinja - Source of the Nile"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">
                <FontAwesomeIcon icon="fa-water" className="w-6 h-6 mr-2 inline" />
                Source of the Nile
              </h3>
              <p className="text-gray-700">
                Visit Ripon Falls where the Nile River begins its legendary journey. A must-see natural monument and
                historically significant site where explorers once sought the source of Africa's greatest river.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">
                <FontAwesomeIcon icon="fa-person-hiking" className="w-6 h-6 mr-2 inline" />
                White-Water Rafting
              </h3>
              <p className="text-gray-700">
                Experience world-class white-water rafting on the Nile's rapids. With Class 3-5 rapids available, it's
                rated among Africa's best rafting destinations. Thrilling for adventurers of all skill levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">
                <FontAwesomeIcon icon="fa-person-hiking" className="w-6 h-6 mr-2 inline" />
                Bungee Jumping
              </h3>
              <p className="text-gray-700">
                The famous Jinja Nile Bungee offers a heart-pumping 44-meter jump over the Nile River. One of Africa's
                most thrilling bungee experiences with spectacular views over the river gorge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">
                <FontAwesomeIcon icon="fa-leaf" className="w-6 h-6 mr-2 inline" />
                Lake Victoria Cruises
              </h3>
              <p className="text-gray-700">
                Scenic boat cruises on Lake Victoria with opportunities for fishing, bird watching, or visiting the
                Ssese Islands. Experience the beauty of Africa's largest lake at sunset.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">
                <FontAwesomeIcon icon="fa-building" className="w-6 h-6 mr-2 inline" />
                Local Craft Markets
              </h3>
              <p className="text-gray-700">
                Explore vibrant local markets featuring handmade crafts, artwork, and traditional artifacts. Perfect for
                authentic souvenirs and experiencing Ugandan artisan culture directly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">
                <FontAwesomeIcon icon="fa-star" className="w-6 h-6 mr-2 inline" />
                Adventure Sports Hub
              </h3>
              <p className="text-gray-700">
                Beyond water sports, try kayaking, quad biking, zip-lining, and parasailing. Jinja is a one-stop
                destination for virtually every type of adventure activity in Uganda.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">White-Water Rafting (Half-day)</h3>
                <p className="text-gray-700 mb-3">
                  Experience thrilling Class 3-5 rapids on the Nile. Professional guides lead small groups through
                  challenging sections with breathtaking scenery. No prior experience needed. Best time: year-round.
                </p>
                <button
                  onClick={() => handleBooking('White-Water Rafting - Jinja')}
                  className="btn-primary"
                >
                  Book Rafting Experience
                </button>
              </div>

              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Nile Bungee Jump</h3>
                <p className="text-gray-700 mb-3">
                  Take a 44-meter leap of faith over the Nile River gorge. Professional setup with perfect safety records.
                  One of the world's most scenic bungee jumps with unforgettable views and adrenaline rush.
                </p>
                <button
                  onClick={() => handleBooking('Bungee Jump - Jinja')}
                  className="btn-primary"
                >
                  Book Bungee Jump
                </button>
              </div>

              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Source of the Nile Tour</h3>
                <p className="text-gray-700 mb-3">
                  Guided visit to Ripon Falls and the Source of the Nile. Learn the fascinating history of explorers
                  seeking the source and enjoy scenic views. Easy, perfect for all ages and fitness levels.
                </p>
                <button
                  onClick={() => handleBooking('Source of the Nile Tour - Jinja')}
                  className="btn-primary"
                >
                  Book Source Tour
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Lake Victoria Sunset Cruise</h3>
                <p className="text-gray-700 mb-3">
                  Evening boat cruise on Lake Victoria with drinks and snacks. Experience magical sunset views over
                  Africa's largest lake. Relaxing atmosphere perfect for unwinding after active adventures.
                </p>
                <button
                  onClick={() => handleBooking('Lake Victoria Cruise - Jinja')}
                  className="btn-primary"
                >
                  Book Sunset Cruise
                </button>
              </div>

              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Kayaking Adventure</h3>
                <p className="text-gray-700 mb-3">
                  Paddle through calm stretches of the Nile and explore scenic waterways. Great for spotting birds and
                  enjoying nature up close. Available for beginners and experienced kayakers.
                </p>
                <button
                  onClick={() => handleBooking('Kayaking - Jinja')}
                  className="btn-primary"
                >
                  Book Kayaking Tour
                </button>
              </div>

              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Jinja Market & Culture Tour</h3>
                <p className="text-gray-700 mb-3">
                  Explore vibrant local markets and craft workshops. Meet artisans, learn about Ugandan crafts, and
                  experience authentic local culture. Support local communities while finding unique souvenirs.
                </p>
                <button
                  onClick={() => handleBooking('Market & Culture Tour - Jinja')}
                  className="btn-primary"
                >
                  Book Culture Tour
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
              <h3 className="text-xl font-bold text-safari-green mb-4">
                <FontAwesomeIcon icon="fa-location-dot" className="w-6 h-6 mr-2 inline" />
                Getting There
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>From Kampala:</strong> 80 km drive (1.5 hours) via main highway</p>
                <p><strong>By Bus:</strong> Regular daily buses from Kampala (2-3 hours)</p>
                <p><strong>By Air:</strong> Fly to Jinja airstrip (30 minutes from Kampala)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">
                <FontAwesomeIcon icon="fa-sun" className="w-6 h-6 mr-2 inline" />
                Best Time to Visit
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Year-Round:</strong> Adventure activities available all seasons</p>
                <p><strong>Dry Seasons:</strong> June-September, December-February (best conditions)</p>
                <p><strong>Peak Season:</strong> July-August and December-January</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">
                <FontAwesomeIcon icon="fa-star" className="w-6 h-6 mr-2 inline" />
                What to Expect
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Climate:</strong> Warm tropical climate, expect rainfall year-round</p>
                <p><strong>Activities:</strong> Mix of adventure sports, nature, and cultural experiences</p>
                <p><strong>Accommodation:</strong> Range from budget hostels to luxury lodges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Source of the Nile
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jinja awaits with world-class adventure activities, breathtaking natural beauty, and rich cultural experiences.
            Whether you're an adrenaline junkie or a cultural explorer, the Nile's source promises unforgettable memories.
          </p>
          <button
            onClick={() => handleBooking('Complete Jinja Adventure Package')}
            className="btn-primary text-lg"
          >
            Plan Your Jinja Adventure
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
