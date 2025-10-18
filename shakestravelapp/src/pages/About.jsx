import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers = [
    {
      name: 'Safari Guide Team',
      role: 'Expert Local Guides',
      description: 'Our passionate guides bring years of experience and deep knowledge of Uganda\'s wildlife and cultures.',
      icon: '🧭'
    },
    {
      name: 'Operations Team',
      role: 'Safari Planners',
      description: 'Dedicated professionals who craft personalized itineraries and ensure seamless safari experiences.',
      icon: '📋'
    },
    {
      name: 'Customer Care',
      role: '24/7 Support',
      description: 'Always available to assist you before, during, and after your safari adventure.',
      icon: '💬'
    }
  ]

  const values = [
    {
      title: 'Conservation',
      description: 'We are committed to protecting Uganda\'s precious wildlife and natural habitats for future generations.',
      icon: '🌿'
    },
    {
      title: 'Community',
      description: 'We work closely with local communities, ensuring our safaris benefit the people who call Uganda home.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional safari experiences through attention to detail and personalized service.',
      icon: '⭐'
    },
    {
      title: 'Authenticity',
      description: 'We provide genuine, immersive experiences that showcase the real Uganda beyond the tourist trail.',
      icon: '🎯'
    }
  ]

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
            About Shakes Travel
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Inspiring and crafting unforgettable safari experiences across Uganda since inception
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Shakes Travel was born from a deep passion for Uganda's extraordinary wildlife and natural beauty.
                We believe that every person should have the opportunity to experience the magic of encountering
                mountain gorillas in the mist, witnessing lions on the savanna, and connecting with the warm,
                welcoming people of Uganda.
              </p>
              <p>
                What started as a dream to share Uganda's wonders with the world has grown into a trusted safari
                company known for creating transformative travel experiences. We take pride in our deep knowledge
                of Uganda's national parks, our relationships with local communities, and our commitment to
                sustainable tourism practices.
              </p>
              <p>
                Every safari we organize is more than just a trip - it's a carefully crafted journey designed to
                inspire, educate, and create memories that last a lifetime. We work tirelessly to ensure that
                your time in Uganda exceeds your expectations and leaves you with a profound appreciation for
                this remarkable country we call the Pearl of Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20">
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
      <section className="py-16 bg-gradient-to-r from-safari-green to-safari-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Uganda Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team help you plan the safari of your dreams. Contact us today to begin
            your journey to the Pearl of Africa.
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
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
