import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function LakeMburo() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1535338623859-38b734369d9d?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Lake Mburo National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Whispers of the Wild
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
                Lake Mburo National Park lies in western Uganda's Kiruhura District, about 30 km east of Mbarara City.
                At roughly 370 km², it's Uganda's smallest savanna national park. The park is a biodiverse mosaic of
                acacia woodlands, savanna and wetlands (5 lakes, 20% swamp), home to 68 mammal species and over 350
                bird species.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established as a national park in 1983, Lake Mburo offers an intimate safari experience with diverse
                wildlife, beautiful landscapes, and unique opportunities for walking safaris, horseback rides and boat
                trips. Its compact size, varied habitats and safe daytime conditions (no resident lions or elephants)
                make it ideal for adventure activities alongside classic game drives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">370 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Mammal Species</h3>
                  <p className="text-gray-700">68 species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">350+ species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Lakes</h3>
                  <p className="text-gray-700">5 lakes</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1535338623859-38b734369d9d?w=800"
                alt="Lake Mburo National Park"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">Game Drives</h3>
              <p className="text-gray-700">
                Exciting safaris in open 4×4 vehicles, spotting zebra herds, impala, warthogs, waterbuck, eland and
                buffalo. Lake Mburo has among Uganda's densest zebra populations and is famous as the only national
                park where you'll regularly see impala.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Boat Safaris on Lake Mburo</h3>
              <p className="text-gray-700">
                Two-hour boat cruises on Lake Mburo showcase hippos, Nile crocodiles and wetland birds. Calm waters
                allow close wildlife viewing of fishing eagles, cormorants and kingfishers. Boat rides operate
                year-round with dry season offering clearest water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Walking Safaris</h3>
              <p className="text-gray-700">
                Unlike most parks, walking safaris are encouraged here (no resident lions). Armed Uganda Wildlife
                Authority rangers lead 2-3 hour walks through acacia savanna and riverine woods, revealing small
                game and game trails.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Horseback & Cycling Safaris</h3>
              <p className="text-gray-700">
                Lake Mburo is famous for horseback safaris where well-trained horses let riders approach grazing
                zebras and giraffes closely. Guided mountain biking is also offered, exploring quieter trails and
                off-track scenery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Bird Watching</h3>
              <p className="text-gray-700">
                With 350+ species, Lake Mburo is a birder's paradise. Look for papyrus-specialists, kingfishers and
                raptors around the lakes, and savanna species in acacias. April-May and September-November bring
                migrants and breeding plumage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Cultural Experiences</h3>
              <p className="text-gray-700">
                Engage with the Bahima pastoralists whose Ankole long-horned cattle surround the park. Tours often
                include visiting a traditional homestead, cultural dances, or the Rwabarata community crafts center.
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
                  2-4 hour 4×4 safaris with a ranger guide, searching for mammals on open savanna. Early morning
                  and late afternoon drives maximize sightings. Unique night drives reveal nocturnal wildlife under
                  spotlights.
                </p>
                <button
                  onClick={() => handleBooking('Game Drives - Lake Mburo')}
                  className="btn-primary"
                >
                  Book Game Drive
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Boat Safaris</h3>
                <p className="text-gray-700 mb-3">
                  Guided boat cruises on Lake Mburo showcase hippos, crocodiles and wetland birds. The experience
                  includes opportunities to observe fishing eagles, cormorants and kingfishers up close from the water.
                </p>
                <button
                  onClick={() => handleBooking('Boat Safaris - Lake Mburo')}
                  className="btn-primary"
                >
                  Book Boat Safari
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Horseback Safaris</h3>
                <p className="text-gray-700 mb-3">
                  Riding through open grasslands for 1-3 hours. Riders must be ≥12 years, weight ≤95 kg. Both
                  novices and experienced riders can participate. Guide plus horses provided by specialized lodges.
                </p>
                <button
                  onClick={() => handleBooking('Horseback Safaris - Lake Mburo')}
                  className="btn-primary"
                >
                  Book Horseback Safari
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Guided Nature Walks</h3>
                <p className="text-gray-700 mb-3">
                  2-3 hour armed walks into the savanna and lake edge habitats. Moderate effort; good for seeing
                  small game and birds. Popular trails include Rubanga Forest and an impala salt-lick at Rwonyo.
                </p>
                <button
                  onClick={() => handleBooking('Nature Walks - Lake Mburo')}
                  className="btn-primary"
                >
                  Book Nature Walk
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Birding Tours</h3>
                <p className="text-gray-700 mb-3">
                  Guided bird walks/vehicle tours to see Lake Mburo's 350+ species. Includes visits to Rwonyo
                  forest, dambo/swamp edges. Best during wet season for migrants and breeding plumage.
                </p>
                <button
                  onClick={() => handleBooking('Birding Tours - Lake Mburo')}
                  className="btn-primary"
                >
                  Book Birding Tour
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Cultural Visits</h3>
                <p className="text-gray-700 mb-3">
                  Short tours to nearby Bahima homesteads or Rwabarata community. Learn about Ankole cattle,
                  milk culture and crafts. Fees directly support the community and help uplift local villages.
                </p>
                <button
                  onClick={() => handleBooking('Cultural Visits - Lake Mburo')}
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
                <p><strong>From Kampala:</strong> 228 km drive (3.5-4 hours) via Masaka-Mbarara highway</p>
                <p><strong>From Entebbe:</strong> 253 km drive (4+ hours) via Kampala</p>
                <p><strong>Air Access:</strong> Charter flights to Mbarara Airstrip (30 minute drive to park)</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-February, June-September (optimal game viewing)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (lush scenery, abundant birds)</p>
                <p><strong>Temperature:</strong> 20-28°C daytime, cooler nights in dry season</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Wildlife:</strong> Zebras, impala, buffalo, giraffe, hippos, crocodiles</p>
                <p><strong>Activities:</strong> Walking and horseback safaris (no lions or elephants)</p>
                <p><strong>Birds:</strong> 350+ species including Shoebill in surrounding wetlands</p>
                <p><strong>Location:</strong> Convenient stop between Kampala and western parks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Uganda's Most Accessible Safari
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the intimate beauty of Lake Mburo National Park, where walking safaris and horseback
            rides bring you closer to nature than ever before. Perfect for first-time safari-goers and seasoned
            adventurers alike.
          </p>
          <button
            onClick={() => handleBooking('Complete Lake Mburo Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Lake Mburo Adventure
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