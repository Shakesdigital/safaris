import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import AboutCarousel from '../components/AboutCarousel'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers = [
    {
      name: 'Safari Experts',
      role: 'Local Guides & Trackers',
      description: 'Experienced professionals with deep knowledge of Uganda\'s wildlife, culture, and ecosystems—bringing each safari to life with authentic insights.',
      icon: '🧭'
    },
    {
      name: 'Planning Team',
      role: 'Itinerary Specialists',
      description: 'We craft each safari with attention to detail, ensuring seamless logistics and unforgettable experiences tailored to your interests.',
      icon: '📋'
    },
    {
      name: 'Support Team',
      role: 'Guest Services',
      description: 'Available to assist you before, during, and after your journey—ensuring your Uganda adventure exceeds expectations.',
      icon: '💬'
    }
  ]

  const values = [
    {
      title: 'Environmental Stewardship',
      description: 'Through our tree planting initiatives, we restore ecosystems and reduce tourism\'s impact—ensuring Uganda\'s natural beauty endures for future generations.',
      icon: '🌿'
    },
    {
      title: 'Community Partnership',
      description: 'We work closely with local communities and conservation partners to ensure tourism benefits the people who call Uganda home.',
      icon: '🤝'
    },
    {
      title: 'Expert Curation',
      description: 'Every safari is thoughtfully designed with deep local knowledge to create transformative and memorable travel experiences.',
      icon: '⭐'
    },
    {
      title: 'Responsible Tourism',
      description: 'We promote sustainable travel practices that protect wildlife, preserve culture, and support conservation efforts across Uganda.',
      icon: '🎯'
    }
  ]

  return (
    <div>
      {/* Hero Section with About Carousel */}
      <div className="relative" style={{ borderRadius: '0px' }}>
        <AboutCarousel />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading drop-shadow-lg">
              About Shakes Travel
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              Inspiring and crafting expertly planned safari experiences across Uganda's breathtaking landscapes
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Inspired by the beauty and magnificence of Uganda's landscapes, wildlife, people, and culture, Shakes Travel Agency was founded to showcase this splendor to the world while promoting sustainable environmental protection and enhancing the well-being of local communities living in the destinations that harbor these wonders.
              </p>
              <p>
                Shakes Travel inspires travelers to discover Uganda's breathtaking natural beauty, vibrant culture, and diverse landscapes through expertly crafted safari experiences that connect you with Uganda's natural wonders and fully immerse you in its people and culture. We believe travel should be transformative, fostering meaningful connections with the places you visit while leaving a positive impact.
              </p>
              <p>
                At the heart of our mission is the <Link to="/planting-green-paths" className="text-safari-green font-bold hover:text-safari-gold transition">Planting Green Paths initiative</Link>—our dedicated commitment to linking safari experiences with large-scale tree planting and community empowerment. Every safari booking, tree donation, and eco-stay directly funds reforestation projects across Uganda's tourist destinations. Through strategic partnerships with local communities and conservation organizations, we're restoring Uganda's forests, expanding wildlife habitats, combating climate change, and creating sustainable livelihoods for people living in safari areas. This isn't just conservation—it's a movement that makes environmental restoration profitable and benefits everyone: travelers get unforgettable safaris, communities gain economic opportunities, and Uganda's ecosystems are restored for future generations.
              </p>
              <p>
                Our mission is to deliver expertly curated safari adventures that immerse you in Uganda's culture, wildlife, and landscapes while promoting responsible tourism. Whether you're tracking mountain gorillas in Bwindi, exploring the source of the Nile in Jinja, hiking the Rwenzori Mountains, or embarking on scenic nature adventures, each itinerary is crafted with deep local insight to connect you with the true spirit of Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-safari-green mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-safari-green mb-2">{member.name}</h3>
                <p className="text-safari-gold font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-safari-green text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Shakes Travel?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">🏆 Local Expertise</h3>
              <p className="text-gray-200">
                As a Ugandan-owned company, we have insider knowledge and direct relationships with parks,
                communities, and service providers.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">🎨 Tailored Experiences</h3>
              <p className="text-gray-200">
                No two safaris are the same. We customize every itinerary to match your interests, budget,
                and travel style.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">🌍 Responsible Tourism</h3>
              <p className="text-gray-200">
                We practice and promote sustainable tourism that protects wildlife and empowers local communities.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">🚗 Quality Vehicles</h3>
              <p className="text-gray-200">
                Our well-maintained 4x4 safari vehicles with pop-up roofs ensure comfort and optimal game viewing.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">📞 24/7 Support</h3>
              <p className="text-gray-200">
                Our team is always available to assist you, ensuring a worry-free safari experience from start
                to finish.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">💰 Fair Pricing</h3>
              <p className="text-gray-200">
                We offer competitive rates with transparent pricing and no hidden costs. Quality safaris at fair
                prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Our Commitment to Sustainability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Shakes Travel, we understand that the future of Uganda's wildlife depends on sustainable tourism
              practices. We are committed to:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-safari-gold text-2xl">✓</span>
                <p className="text-gray-700">
                  Supporting conservation efforts through partnerships with wildlife organizations
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-safari-gold text-2xl">✓</span>
                <p className="text-gray-700">
                  Employing local guides and staff to benefit community economies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-safari-gold text-2xl">✓</span>
                <p className="text-gray-700">
                  Minimizing environmental impact through responsible safari practices
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-safari-gold text-2xl">✓</span>
                <p className="text-gray-700">
                  Educating travelers about wildlife conservation and cultural respect
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border-2 border-safari-green p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-safari-green">
              Ready to Start Your Uganda Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Your gateway to unforgettable Uganda safari adventures begins here. Let us craft an expertly planned journey that immerses you in the Pearl of Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg">
                Book Your Safari
              </button>
              <a href="mailto:info@shakestravel.com" className="btn-secondary text-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
