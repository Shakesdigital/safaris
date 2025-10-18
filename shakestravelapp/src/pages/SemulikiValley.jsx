import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function SemulikiValley() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Semuliki Valley National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Uganda's Biodiversity Hotspot
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
                Semuliki Valley National Park represents one of Africa's most biologically diverse and geologically
                fascinating protected areas. Established as a national park in October 1993, this 220 km² protected
                area is situated in Uganda's Bundibugyo District and constitutes East Africa's only true lowland
                tropical rainforest.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This ancient forest survived the last ice age approximately 12,000-18,000 years ago, creating a living
                museum of prehistoric biological diversity. Semuliki's ecosystem functions as a biological bridge
                between Central and East African environments, hosting numerous species found nowhere else in East
                Africa, including 35 Guinea-Congo forest biome bird species.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">220 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Elevation</h3>
                  <p className="text-gray-700">670-760m</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Bird Species</h3>
                  <p className="text-gray-700">441 species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Mammal Species</h3>
                  <p className="text-gray-700">53 species</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
                alt="Semuliki Valley National Park"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">Sempaya Hot Springs</h3>
              <p className="text-gray-700">
                The park's most famous attraction features two spectacular geothermal springs: the "male" spring
                (Bitende) measuring 12 meters wide and the "female" spring (Nyansimbi) at 2 meters wide, both
                boiling at over 100°C.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Exceptional Birdwatching</h3>
              <p className="text-gray-700">
                With 441 recorded bird species (over 35% of Uganda's total avifauna), Semuliki is a premier birding
                destination. The park hosts 35 Guinea-Congo forest biome species not found elsewhere in East Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Primates and Mammals</h3>
              <p className="text-gray-700">
                The park hosts 53 mammal species, including 8 primate species such as chimpanzees, red-tailed
                monkeys, black-and-white colobus monkeys, and the rare Central African red colobus and Dent's Mona
                monkeys.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Semuliki River</h3>
              <p className="text-gray-700">
                This 140km-long river originates from Lake Edward and flows into Lake Albert, forming a natural
                border between Uganda and the Democratic Republic of Congo. Boat rides offer opportunities to spot
                hippos, crocodiles, and aquatic birds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Cultural Encounters</h3>
              <p className="text-gray-700">
                Four distinct ethnic groups inhabit areas around the park: the Bakonjo, Bwamba, Batuku, and Batwa
                pygmies. Visitors can engage in culturally immersive experiences, particularly with the Batwa, to
                learn about their traditional lifestyles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Ancient Rainforest</h3>
              <p className="text-gray-700">
                As East Africa's only true lowland tropical rainforest, Semuliki provides a unique opportunity to
                experience a Congo Basin ecosystem. The forest features towering trees including the dominant
                Uganda ironwood, forming a canopy that shelters incredible biodiversity.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">Bird Watching</h3>
                <p className="text-gray-700 mb-3">
                  Semuliki is a world-class birding destination with over 441 recorded species. The Kirumia Trail
                  provides exceptional birding opportunities through pristine rainforest, with specialized guides
                  helping spot rare species like the lyre-tailed honeyguide and Congo serpent eagle.
                </p>
                <button
                  onClick={() => handleBooking('Bird Watching - Semuliki Valley')}
                  className="btn-primary"
                >
                  Book Bird Watching
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Sempaya Hot Springs Visit</h3>
                <p className="text-gray-700 mb-3">
                  This must-do activity involves a guided walk to the spectacular geothermal springs through lush
                  forest. The experience includes learning about the cultural significance and the opportunity to cook
                  eggs or plantains in the steam.
                </p>
                <button
                  onClick={() => handleBooking('Sempaya Hot Springs Visit - Semuliki Valley')}
                  className="btn-primary"
                >
                  Book Hot Springs Visit
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Nature and Forest Walks</h3>
                <p className="text-gray-700 mb-3">
                  Multiple guided trails offer immersion in Semuliki's unique ecosystems. The Kirumia Trail provides
                  deep forest penetration ideal for birding and primate spotting. Trails vary from 2-5 hours with
                  difficulty ranging from easy to moderate.
                </p>
                <button
                  onClick={() => handleBooking('Nature and Forest Walks - Semuliki Valley')}
                  className="btn-primary"
                >
                  Book Nature Walk
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Primate Watching</h3>
                <p className="text-gray-700 mb-3">
                  While chimpanzee tracking is less developed than in Kibale Forest, Semuliki offers opportunities to
                  observe chimpanzees along with 8 other primate species. The experience involves early morning
                  departures with experienced trackers.
                </p>
                <button
                  onClick={() => handleBooking('Primate Watching - Semuliki Valley')}
                  className="btn-primary"
                >
                  Book Primate Watching
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Cultural Encounters</h3>
                <p className="text-gray-700 mb-3">
                  Visits to Batwa pygmy communities provide insight into traditional forest-based lifestyles and
                  cultural heritage. These experiences include demonstrations of traditional hunting techniques,
                  medicinal plant use, and storytelling.
                </p>
                <button
                  onClick={() => handleBooking('Cultural Encounters - Semuliki Valley')}
                  className="btn-primary"
                >
                  Book Cultural Experience
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Boat Trips</h3>
                <p className="text-gray-700 mb-3">
                  Water-based exploration offers different perspectives on the park's ecosystems. Boat trips on the
                  Semuliki River provide opportunities to spot hippos, crocodiles, and aquatic birds including the
                  elusive shoebill stork.
                </p>
                <button
                  onClick={() => handleBooking('Boat Trips - Semuliki Valley')}
                  className="btn-primary"
                >
                  Book Boat Trip
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
                <p><strong>From Kampala:</strong> 180-465 km drive (4-8 hours) via Mubende or Masaka/Mbarara</p>
                <p><strong>From Fort Portal:</strong> 50 km drive (1.5 hours) to park</p>
                <p><strong>Air Access:</strong> Charter flights to nearby airstrips in Kasese and Fort Portal</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-February, June-September (minimal rainfall)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (challenging but rewarding)</p>
                <p><strong>Temperature:</strong> 18-30°C year-round in lowland tropical climate</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Ecosystem:</strong> East Africa's only lowland tropical rainforest</p>
                <p><strong>Biodiversity:</strong> Biological bridge between Central and East Africa</p>
                <p><strong>Geology:</strong> Ancient forest with geothermal features</p>
                <p><strong>Culture:</strong> Four distinct ethnic groups with rich traditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover East Africa's Hidden Rainforest Paradise
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Journey into Semuliki Valley and experience one of Africa's most biodiverse destinations. From
            boiling hot springs to rare bird species, Semuliki offers an authentic rainforest adventure that
            showcases the incredible diversity of the African continent.
          </p>
          <button
            onClick={() => handleBooking('Complete Semuliki Valley Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Semuliki Adventure
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