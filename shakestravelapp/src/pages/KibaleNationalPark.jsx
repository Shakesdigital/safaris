import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function KibaleNationalPark() {
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Kibale National Park
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Uganda's Premier Primate & Adventure Destination
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
                Kibale National Park is a protected tropical rainforest located in western Uganda, approximately 348
                kilometers from Kampala and just 26 kilometers south-east of the picturesque town of Fort Portal. The
                park spans 795 square kilometers and occupies an elevated position on the Fort Portal plateau, with its
                highest point reaching 1,590 meters above sea level.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While not a UNESCO World Heritage Site itself, it forms part of a larger conservation corridor
                connecting to Queen Elizabeth National Park, protecting a 180 km wildlife migration corridor that
                stretches from Ishasha to Sebitoli. This connectivity creates one of the most biodiverse regions in East
                Africa, earning Kibale its reputation as the "Primate Capital of Africa."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Size</h3>
                  <p className="text-gray-700">795 km²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Elevation</h3>
                  <p className="text-gray-700">Up to 1,590m</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Primate Species</h3>
                  <p className="text-gray-700">13 species</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-safari-green mb-2">Chimpanzees</h3>
                  <p className="text-gray-700">1,450+ individuals</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800"
                alt="Kibale National Park"
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
              <h3 className="text-xl font-bold text-safari-green mb-3">Chimpanzee Trekking</h3>
              <p className="text-gray-700">
                Kibale is arguably the best place in the world to observe wild chimpanzees. With approximately 1,500
                individuals and habituated communities, success rates for sightings exceed 90%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Primate Diversity</h3>
              <p className="text-gray-700">
                Beyond chimpanzees, Kibale boasts 12 other primate species, including the rare L'Hoest's monkey,
                red colobus monkeys, black-and-white colobus monkeys, and grey-cheeked mangabeys.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Bigodi Wetland Sanctuary</h3>
              <p className="text-gray-700">
                This community-managed swamp is a biodiversity hotspot located just outside the park. Home to 138
                bird species and 8 primate species, its boardwalk trails provide excellent wildlife viewing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Crater Lakes Landscape</h3>
              <p className="text-gray-700">
                The area between Kibale and Fort Portal features dozens of picturesque crater lakes formed by
                volcanic activity. These stunning water bodies set amidst lush hills offer spectacular viewpoints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Birdwatching Excellence</h3>
              <p className="text-gray-700">
                With 375 recorded species, including 6 endemic to the Albertine Rift region, Kibale is a premier
                birding destination. Specialties include the green-breasted pitta and black bee-eater.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-safari-green mb-3">Cultural Encounters</h3>
              <p className="text-gray-700">
                Opportunities to engage with local communities including the Batooro and Bakiga people provide
                insight into traditional Ugandan life, including traditional dances and medicinal plants.
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
                <h3 className="text-xl font-bold text-safari-green mb-2">Chimpanzee Trekking</h3>
                <p className="text-gray-700 mb-3">
                  The flagship experience involves guided forest walks to locate and observe habituated chimpanzee
                  communities. Treks depart twice daily and typically last 2-4 hours, with one hour of observation time.
                </p>
                <button
                  onClick={() => handleBooking('Chimpanzee Trekking - Kibale')}
                  className="btn-primary"
                >
                  Book Chimpanzee Trekking
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Chimpanzee Habituation Experience</h3>
                <p className="text-gray-700 mb-3">
                  For a more immersive encounter, this full-day program allows visitors to join researchers as they
                  follow chimpanzee groups during the habituation process, providing 4 hours with the chimpanzees.
                </p>
                <button
                  onClick={() => handleBooking('Chimpanzee Habituation - Kibale')}
                  className="btn-primary"
                >
                  Book Habituation Experience
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Bird Watching</h3>
                <p className="text-gray-700 mb-3">
                  Kibale's remarkable avian diversity makes it a premier birding destination. Both half-day and
                  full-day guided excursions are available, with the Bigodi Wetland Sanctuary particularly rewarding.
                </p>
                <button
                  onClick={() => handleBooking('Bird Watching - Kibale')}
                  className="btn-primary"
                >
                  Book Bird Watching Tour
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Nature and Forest Walks</h3>
                <p className="text-gray-700 mb-3">
                  Various guided walks explore Kibale's diverse ecosystems, from easy 1-2 hour walks suitable for
                  families to challenging full-day hikes covering 12km of forest terrain.
                </p>
                <button
                  onClick={() => handleBooking('Nature Walks - Kibale')}
                  className="btn-primary"
                >
                  Book Nature Walk
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Cultural Encounters</h3>
                <p className="text-gray-700 mb-3">
                  Community visits offer insights into local cultures and traditions. Experiences include traditional
                  dance performances, storytelling, and visits to local homes and schools.
                </p>
                <button
                  onClick={() => handleBooking('Cultural Encounters - Kibale')}
                  className="btn-primary"
                >
                  Book Cultural Experience
                </button>
              </div>
              <div className="border-l-4 border-safari-gold pl-6">
                <h3 className="text-xl font-bold text-safari-green mb-2">Night Walks</h3>
                <p className="text-gray-700 mb-3">
                  Guided nocturnal explorations reveal Kibale's after-dark ecology, including pottos, bushbabies,
                  nightjars, and numerous insect species.
                </p>
                <button
                  onClick={() => handleBooking('Night Walks - Kibale')}
                  className="btn-primary"
                >
                  Book Night Walk
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
                <p><strong>From Kampala:</strong> 5-6 hour drive (348 km) via Fort Portal</p>
                <p><strong>Alternative Route:</strong> 7-8 hours via Mbarara and Queen Elizabeth National Park</p>
                <p><strong>Air Access:</strong> Charter flights to Kasese Airfield (2-3 hour drive to park)</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Best Time to Visit</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dry Seasons:</strong> December-February, June-September (ideal for trekking)</p>
                <p><strong>Wet Seasons:</strong> March-May, October-November (lush scenery, fewer visitors)</p>
                <p><strong>Temperature:</strong> 14-27°C year-round</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-safari-green mb-4">Park Features</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Vegetation:</strong> Moist evergreen forest to woodland and savanna</p>
                <p><strong>Bird Species:</strong> 375 recorded species, 6 Albertine Rift endemics</p>
                <p><strong>Mammal Species:</strong> 70+ species including forest elephants</p>
                <p><strong>Butterfly Species:</strong> 250+ species recorded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Primate Capital of Africa
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the incredible diversity of Kibale National Park, where chimpanzees swing through ancient
            forests and rare primates roam freely. Our expert guides will lead you on unforgettable primate encounters
            in one of East Africa's most biodiverse destinations.
          </p>
          <button
            onClick={() => handleBooking('Complete Kibale Experience')}
            className="btn-primary text-lg"
          >
            Plan Your Kibale Adventure
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