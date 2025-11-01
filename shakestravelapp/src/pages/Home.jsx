import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import DestinationCarousel from '../components/DestinationCarousel'
import ExperienceCarousel from '../components/ExperienceCarousel'
import HeroSlider from '../components/HeroSlider'
import FontAwesomeIcon from '../components/FontAwesomeIcon'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState('')

  const handleBooking = (experience = '') => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  const featuredDestinations = [
    {
      title: 'Bwindi Impenetrable Forest',
      description: 'Home to half of the world\'s mountain gorillas. Experience the breathtaking encounter with these gentle giants in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
      highlights: ['Gorilla Trekking', 'UNESCO World Heritage Site', 'Biodiversity Hotspot'],
      link: '/destinations/bwindi-impenetrable'
    },
    {
      title: 'Queen Elizabeth National Park',
      description: 'Uganda\'s most popular safari destination with diverse ecosystems and the famous tree-climbing lions of Ishasha.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      highlights: ['Tree-Climbing Lions', 'Boat Safari', 'Big Game Viewing'],
      link: '/destinations/queen-elizabeth'
    },
    {
      title: 'Murchison Falls National Park',
      description: 'Witness the Nile River explode through a narrow gorge, creating the world\'s most powerful waterfall.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      highlights: ['Murchison Falls', 'Nile River Safari', 'Wildlife Abundance'],
      link: '/destinations/murchison-falls'
    },
    {
      title: 'Kibale National Park',
      description: 'The primate capital of the world with 13 primate species. Track habituated chimpanzees through pristine tropical rainforest.',
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800',
      highlights: ['Chimpanzee Tracking', 'Primate Diversity', 'Birding Paradise'],
      link: '/destinations/kibale-national-park'
    },
    {
      title: 'Kidepo Valley National Park',
      description: 'Uganda\'s most remote and untouched wilderness. Experience authentic African savanna with minimal tourist crowds.',
      image: 'https://images.unsplash.com/photo-1535338454770-6c4f504d5f6b?w=800',
      highlights: ['Remote Wilderness', 'Diverse Wildlife', 'Cultural Encounters'],
      link: '/destinations/kidepo-valley'
    },
    {
      title: 'Lake Mburo National Park',
      description: 'Uganda\'s smallest savanna park offering intimate wildlife encounters. Perfect for walking safaris and horseback riding.',
      image: 'https://images.unsplash.com/photo-1547970810-dc1e684757a9?w=800',
      highlights: ['Walking Safaris', 'Zebra Herds', 'Boat Cruises'],
      link: '/destinations/lake-mburo'
    },
    {
      title: 'Rwenzori Mountains',
      description: 'The legendary Mountains of the Moon with snow-capped peaks at the equator. Africa\'s most challenging and rewarding trek.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      highlights: ['Mountain Trekking', 'Glacial Peaks', 'Alpine Flora'],
      link: '/destinations/rwenzori-mountains'
    },
    {
      title: 'Semuliki Valley',
      description: 'Uganda\'s true birder\'s paradise with over 400 bird species. Explore hot springs and lowland tropical forest ecosystems.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
      highlights: ['Hot Springs', 'Birding Heaven', 'Pygmy Culture'],
      link: '/destinations/semuliki-valley'
    },
    {
      title: 'Mount Elgon National Park',
      description: 'An extinct volcano with the world\'s largest caldera. Discover spectacular caves, waterfalls, and unique mountain vegetation.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      highlights: ['Cave Exploration', 'Waterfalls', 'Hiking Trails'],
      link: '/destinations/mount-elgon'
    },
    {
      title: 'Jinja',
      description: 'The vibrant adventure capital where the Nile River begins its legendary journey. Experience white-water rafting, visit the Source of the Nile, and explore local culture and crafts.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      highlights: ['Nile Source', 'White-Water Rafting', 'Adventure Sports'],
      link: '/destinations/jinja'
    }
  ]

  const experiences = [
    {
      slug: 'bwindi-gorilla-trekking',
      title: '3 Days Safari Experience to Bwindi Impenetrable National Park',
      icon: 'fa-paw',
      tagline: 'Encounter Mountain Gorillas in Ancient Rainforest',
      description: 'You\'ll walk into a forest that feels like it\'s been waiting for you, where every step brings you closer to one of life\'s most moving experiences - sitting quietly while a family of mountain gorillas goes about their day around you.',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$750 per person',
      rating: '4.9',
      reviews: 234,
      category: 'Wildlife Safari'
    },
    {
      slug: 'queen-elizabeth-safari',
      title: '3 Days Safari Experience to Queen Elizabeth National Park',
      icon: 'fa-paw',
      tagline: 'Tree-Climbing Lions & Kazinga Channel',
      description: 'You\'ll find yourself in Uganda\'s most welcoming safari destination, where lions have learned to climb trees in the Ishasha sector - it\'s quite something to see these big cats lounging in the branches like oversized house cats.',
      duration: '3 Days',
      difficulty: 'Easy',
      price: '$450 per person',
      rating: '4.8',
      reviews: 189,
      category: 'Wildlife Safari'
    },
    {
      slug: 'murchison-falls-safari',
      title: '3 Days Safari Experience to Murchison Falls National Park',
      icon: 'fa-water',
      tagline: 'The Mighty Nile\'s Explosive Power',
      description: 'There\'s something almost unbelievable about watching the world\'s longest river squeeze through a narrow gap in the rocks and explode out the other side with such force it creates a permanent rainbow in the mist.',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$650 per person',
      rating: '4.8',
      reviews: 287,
      category: 'Wildlife Safari'
    },
    {
      slug: 'kibale-chimp-tracking',
      title: '3 Days Safari Experience to Kibale National Park',
      icon: 'fa-paw',
      tagline: 'Primate Capital of the World',
      description: 'You\'ll walk into Kibale Forest and suddenly realize you\'re in a place where primates rule - chimpanzees calling to each other through the canopy, monkeys swinging from branch to branch like they\'re putting on a show just for you.',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$200 per person',
      rating: '4.8',
      reviews: 178,
      category: 'Wildlife Safari'
    },
    {
      slug: 'kidepo-valley-safari',
      title: '3 Days Safari Experience to Kidepo Valley National Park',
      icon: 'fa-paw',
      tagline: 'Uganda\'s Remote Wilderness Paradise',
      description: 'You\'ll drive for hours through changing landscapes until suddenly you\'re in a place that feels like the Africa of storybooks - vast plains stretching out to mountains that touch the sky.',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: 'Contact for pricing',
      rating: '4.8',
      reviews: 105,
      category: 'Wildlife Safari'
    },
    {
      slug: 'lake-mburo-safari',
      title: '3 Days Safari Experience to Lake Mburo National Park',
      icon: 'fa-paw',
      tagline: 'Walking Safaris & Unique Wildlife',
      description: 'This is the kind of place that reminds you why you came to Africa in the first place - intimate, welcoming, and full of those quiet moments that become treasured memories.',
      duration: '3 Days',
      difficulty: 'Easy',
      price: '$350 per person',
      rating: '4.6',
      reviews: 156,
      category: 'Wildlife Safari'
    },
    {
      slug: 'rwenzori-mountains-trek',
      title: '8 Days Trekking Experience to Rwenzori Mountains Margherita Peak',
      icon: 'fa-mountain',
      tagline: 'Africa\'s Mystical Mountains of the Moon',
      description: 'You\'ll feel like you\'ve stepped into another world when you enter these mountains - where giant lobelia plants tower over you like strange trees from a fairy tale, and moss drapes everything in soft green mystery.',
      duration: '7-9 Days',
      difficulty: 'Challenging',
      price: 'Contact for pricing',
      rating: '4.9',
      reviews: 67,
      category: 'Adventure & Hiking'
    }
  ]

  return (
    <div>
      {/* Hero Section with Image Slider */}
      <div className="relative">
        <HeroSlider />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 text-center text-white z-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading drop-shadow-lg">
              Discover the Pearl of Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Expertly curated safari adventures that immerse you in Uganda's breathtaking wildlife, vibrant culture, and natural beauty—while leaving a greener footprint
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <Link to="/plan-your-trip" className="btn-primary text-lg">
                Start Your Adventure
              </Link>
              <Link to="/destinations" className="btn-secondary text-lg">
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Shakes Travel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Shakes Travel?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We craft expertly planned safari experiences that connect you deeply with Uganda's culture, wildlife, and landscapes—all while promoting responsible tourism
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src="/images/FOr website/Local Expertise.jpg"
                  alt="Local Expertise"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-safari-green">Local Expertise</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  Every itinerary is crafted with deep local insight, ensuring you connect authentically with Uganda's wildlife, culture, and people
                </p>
              </div>
            </div>

            <Link to="/planting-green-paths" className="card group flex flex-col h-full no-underline">
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src="/images/FOr website/About Us.jpg"
                  alt="Planting Green Paths"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-safari-green">Planting Green Paths</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  Every safari you book plants trees. Restore Uganda's forests, support communities, and combat climate change while experiencing incredible wildlife encounters
                </p>
              </div>
            </Link>

            <div className="card group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src="/images/FOr website/About us 12.jpg"
                  alt="Curated Adventures"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-safari-green">Curated Adventures</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  From gorilla trekking in Bwindi to exploring the Nile's source in Jinja—our safaris are thoughtfully designed to match your interests and travel style
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="text-xl text-gray-600">
              Explore Uganda's diverse landscapes—from misty rainforests to sprawling savannas. Each destination offers unique wildlife encounters and natural beauty
            </p>
          </div>

          <DestinationCarousel destinations={featuredDestinations} />

          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary text-lg">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Safari Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-safari-green">Safari Experiences</h2>
            <p className="text-xl text-gray-600">
              Choose from thoughtfully designed experiences—from tracking mountain gorillas to scenic nature adventures across Uganda's most stunning landscapes
            </p>
          </div>

          <ExperienceCarousel experiences={experiences} />

          <div className="text-center mt-12">
            <Link to="/experiences" className="btn-primary text-lg">
              Explore All Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Community Stays Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&q=80"
                alt="Community-hosted safari stay"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-safari-green font-heading">
                Stay with Locals
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Experience authentic Uganda through community-hosted accommodations. Support local families, enjoy genuine hospitality, and deepen your safari adventure.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon icon="fa-house" className="w-12 h-12 text-safari-green flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Authentic Experiences</h4>
                    <p className="text-gray-600">Sleep in homes, not hotels. Connect with Ugandan families and experience real hospitality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FontAwesomeIcon icon="fa-heart" className="w-12 h-12 text-safari-green flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Direct Impact</h4>
                    <p className="text-gray-600">Your booking directly supports local communities and sustainable tourism.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FontAwesomeIcon icon="fa-star" className="w-12 h-12 text-safari-green flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Verified & Safe</h4>
                    <p className="text-gray-600">Every property is inspected and reviewed for quality and safety.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/stays" className="btn-primary text-lg">
                  Explore Community Stays
                </Link>
                <button className="btn-secondary text-lg">
                  Become a Host
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center" style={{ border: '1px solid #24684f' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-safari-green">
              Ready for Your Uganda Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Let us craft your perfect Uganda safari adventure. From breathtaking wildlife to vibrant culture—your journey to the Pearl of Africa starts here.
            </p>
            <button onClick={() => handleBooking()} className="btn-primary text-lg">
              Book Your Safari Today
            </button>
          </div>
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
