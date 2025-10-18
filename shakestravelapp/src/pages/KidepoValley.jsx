import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function KidepoValley() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Kidepo Valley National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Africa's True Wilderness
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
                Kidepo Valley National Park is one of Africa's most spectacular wilderness areas, located in Uganda's
                remote northeastern corner in the Karamoja region, approximately 700km from Kampala and bordering
                South Sudan to the northwest and Kenya to the east. Covering 1,442 square kilometers of semi-arid
                savannah, the park is Uganda's third-largest national park and arguably its most scenic.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Despite not being a UNESCO World Heritage Site, Kidepo has gained international recognition, with
                CNN naming it one of Africa's most picturesque parks. The park's isolation has preserved an authentic
                safari experience where visitors often have spectacular wildlife sightings entirely to themselves,
                making it a must-visit for adventure travelers seeking untouched landscapes and unique cultural encounters.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">1,442 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Mammal Species</h3>
                  <p className="text-gray-700">77 species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">475+ species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Lions</h3>
                  <p className="text-gray-700">190+ individuals</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800"
                alt="Kidepo Valley National Park"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">Apoka Plains</h3>
              <p className="text-gray-700">
                The heart of wildlife viewing in Kidepo, these vast golden savannah plains offer exceptional game
                viewing against a backdrop of dramatic mountain scenery. The plains are particularly rewarding for
                spotting predators, including lions, cheetahs, and leopards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Narus Valley</h3>
              <p className="text-gray-700">
                An oasis in the semi-arid landscape, this valley features seasonal wetlands that attract incredible
                concentrations of wildlife, especially during the dry season when the Narus River provides the only
                reliable water source for miles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Kidepo Valley and Hot Springs</h3>
              <p className="text-gray-700">
                The park's namesake valley is characterized by scenic borassus palm forests along the seasonal
                Kidepo River. The nearby Kanangorok Hot Springs create a unique geological feature where water
                temperatures reach 50°C.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Morungole Mountain Range</h3>
              <p className="text-gray-700">
                This sacred mountain to the Ik people offers challenging hiking opportunities with spectacular
                panoramic views over the park and neighboring countries. The mountain's higher elevations feature
                montane forest ecosystems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Cultural Encounters</h3>
              <p className="text-gray-700">
                Interactions with the semi-nomadic Karamojong people provide fascinating insights into traditional
                pastoralist lifestyles. Visitors can experience traditional dancing, witness cattle-keeping practices,
                and learn about warrior heritage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Birdwatching Excellence</h3>
              <p className="text-gray-700">
                With approximately 475 bird species, including 56 raptor species, Kidepo is a premier birding
                destination. Specialties include ostriches (Uganda's only population), secretary birds, kori bustards,
                and numerous endemic species.
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
                  The primary activity in Kidepo involves guided game drives through the Narus and Kidepo Valleys.
                  Morning drives and evening drives offer the best wildlife viewing opportunities when animals are
                  most active. The Narus Valley is particularly productive for sightings.
                </p>
                <button
                  onClick={() => handleBooking('Game Drives - Kidepo Valley')}
                  className="btn-primary"
                >
                  Book Game Drive
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Guided Nature Walks</h3>
                <p className="text-gray-700 mb-3">
                  For a closer wilderness connection, guided walks explore specific areas like the Namamukweny
                  Valley or along the Narus River. These 2-3 hour walks provide opportunities to learn about smaller
                  ecosystems and track animals.
                </p>
                <button
                  onClick={() => handleBooking('Nature Walks - Kidepo Valley')}
                  className="btn-primary"
                >
                  Book Nature Walk
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Bird Watching</h3>
                <p className="text-gray-700 mb-3">
                  Kidepo's remarkable avian diversity makes it a premier birding destination. Specialties include
                  ostriches, secretary birds, kori bustards, and numerous raptors. Both dedicated birding drives and
                  walking focus sessions are available.
                </p>
                <button
                  onClick={() => handleBooking('Bird Watching - Kidepo Valley')}
                  className="btn-primary"
                >
                  Book Bird Watching
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Hiking and Mountain Treks</h3>
                <p className="text-gray-700 mb-3">
                  More strenuous full-day hikes explore the Morungole Mountains, home to the Ik people, or the
                  Lomej Hills. These require good physical fitness but reward with spectacular panoramic views and
                  cultural interactions.
                </p>
                <button
                  onClick={() => handleBooking('Hiking - Kidepo Valley')}
                  className="btn-primary"
                >
                  Book Mountain Trek
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Cultural Encounters</h3>
                <p className="text-gray-700 mb-3">
                  Community visits to Karamojong manyattas provide fascinating insights into traditional pastoralist
                  lifestyles. Experiences include traditional dance performances, learning about cattle-keeping
                  traditions, and understanding warrior culture.
                </p>
                <button
                  onClick={() => handleBooking('Cultural Encounters - Kidepo Valley')}
                  className="btn-primary"
                >
                  Book Cultural Experience
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Photography Expeditions</h3>
                <p className="text-gray-700 mb-3">
                  The spectacular landscapes and unique wildlife make Kidepo a photographer's paradise.
                  Specialized photography tours focus on optimal lighting conditions and know the best vantage
                  points for capturing the park's dramatic scenery.
                </p>
                <button
                  onClick={() => handleBooking('Photography - Kidepo Valley')}
                  className="btn-primary"
                >
                  Book Photography Tour
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
                <p><strong>From Kampala:</strong> 700 km drive (10-12 hours) via Gulu to Lokumoit Gate</p>
                <p><strong>Air Access:</strong> Daily flights to Kidepo Airport (2 hours from Entebbe)</p>
                <p><strong>Alternative:</strong> Access via northern gates from Karamoja subregion</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-March, June-October (ideal wildlife viewing)</p>
                <p><strong>Wet Seasons:</strong> April-May, November (lush scenery, fewer visitors)</p>
                <p><strong>Temperature:</strong> 25-30°C daytime, warm year-round</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Wildlife:</strong> Unique species found nowhere else in Uganda</p>
                <p><strong>Landscape:</strong> Semi-arid savannah with dramatic mountain backdrops</p>
                <p><strong>Culture:</strong> Karamojong and Ik people traditional communities</p>
                <p><strong>Isolation:</strong> Remote location ensures authentic wilderness experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Africa's Last True Wilderness
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venture into Uganda's remote northeast and experience the raw beauty of Kidepo Valley. From
            unique wildlife species to ancient cultural traditions, Kidepo offers an authentic African adventure
            far from the beaten path.
          </p>
          <button
            onClick={() => handleBooking('Complete Kidepo Valley Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Kidepo Adventure
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