import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function PlantingGreenPaths() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [email, setEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const handleGetInvolved = (option) => {
    setSelectedOption(option)
    setIsModalOpen(true)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setNewsletterMessage('Thank you for subscribing to our eco-travel updates!')
    setEmail('')
    setTimeout(() => setNewsletterMessage(''), 5000)
  }

  const objectives = [
    {
      icon: '🌳',
      title: 'Tree Planting & Reforestation',
      description: 'Promote tree planting initiatives to increase tree cover, reduce deforestation, lower carbon emissions, and create favorable wildlife habitats across Uganda\'s tourist destinations.'
    },
    {
      icon: '🤝',
      title: 'Community Collaboration',
      description: 'Partner with local communities to implement conservation initiatives, preserve indigenous cultures, improve wellbeing, and create sustainable livelihoods.'
    },
    {
      icon: '🦒',
      title: 'Eco-Travel Integration',
      description: 'Integrate sustainable practices into all safari experiences to promote conservation awareness and mobilize resources for environmental initiatives in tourist destinations.'
    },
    {
      icon: '🏡',
      title: 'Eco-Friendly Accommodations',
      description: 'Recommend and promote eco-stays that support community development, minimize environmental impact, and enhance conservation efforts.'
    }
  ]

  const involvementOptions = [
    {
      icon: '🌱',
      title: 'Donate a Tree',
      description: 'Contribute to reforestation efforts – donate a tree today and help restore Uganda\'s forests.',
      action: 'Tree Donation',
      color: 'bg-safari-green'
    },
    {
      icon: '🚙',
      title: 'Book an Eco Safari',
      description: 'Experience sustainable adventures – book an eco-safari with Shakes Travel and support conservation.',
      action: 'Eco Safari Booking',
      color: 'bg-safari-gold'
    },
    {
      icon: '🏕️',
      title: 'Book an Eco Stay',
      description: 'Stay green in safari destinations – choose eco-friendly lodges that benefit local communities and the environment.',
      action: 'Eco Stay Booking',
      color: 'bg-safari-green'
    },
    {
      icon: '💚',
      title: 'Support Community Initiatives',
      description: 'Join or fund community-led conservation projects to protect East Africa\'s biodiversity.',
      action: 'Community Support',
      color: 'bg-safari-gold'
    }
  ]


  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
            Planting Green Paths
          </h1>
          <p className="text-2xl md:text-3xl mb-4 max-w-4xl mx-auto font-semibold">
            Sustainable Tourism and Travel in Uganda
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join us in conserving Uganda's ecosystems, supporting local communities, and creating unforgettable eco-experiences
          </p>
          <button onClick={() => handleGetInvolved('General Inquiry')} className="btn-primary text-lg">
            Get Involved Today
          </button>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-8">About Planting Green Paths</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Planting Green Paths is Shakes Travel's dedicated initiative to promote safari travel across Uganda that sustainably conserves the environment and enhances the well-being of local communities living in tourist destinations. We believe that tourism can be a powerful force for environmental protection and community development when approached responsibly.
              </p>
              <p>
                Through strategic partnerships with governments, NGOs, conservation organizations, and travel stakeholders, we're addressing critical challenges facing Uganda's natural heritage—including environmental degradation, habitat loss, poaching, and unsustainable resource use.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-safari-light p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Creating thriving ecosystems for wildlife and communities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Building sustainable livelihoods through eco-tourism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Boosting responsible tourism across Uganda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Preserving biodiversity and natural habitats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Combating climate change through reforestation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-safari-light p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Challenges We Address</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Environmental degradation in tourist areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Wildlife habitat loss and fragmentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Poaching and illegal wildlife trade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Unsustainable resource extraction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Climate change impacts on ecosystems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{objective.icon}</div>
                <h3 className="text-xl font-bold text-safari-green mb-3">{objective.title}</h3>
                <p className="text-gray-700">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact and Cause Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">The Cause & Our Impact</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: '1px solid #24684f' }}>
                <h3 className="text-3xl font-bold text-safari-green mb-6">The Cause</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Uganda's tourism industry has experienced significant growth, bringing increased revenue and economic opportunities. However, this growth has coincided with ecosystem degeneration driven by human activities and climate change.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Deforestation, habitat destruction, pollution, and unsustainable tourism practices threaten the very natural wonders that attract visitors. Without intervention, we risk losing the biodiversity, landscapes, and cultural heritage that make Uganda the Pearl of Africa.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: '1px solid #24684f' }}>
                <h3 className="text-3xl font-bold text-safari-gold mb-6">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-safari-green text-2xl mr-3">🌍</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Raising Awareness</h4>
                      <p className="text-gray-700">Educating travelers and communities about conservation and sustainable practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-safari-green text-2xl mr-3">📋</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Developing Policies</h4>
                      <p className="text-gray-700">Collaborating on sustainable tourism policies and environmental protection frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-safari-green text-2xl mr-3">💰</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Mobilizing Resources</h4>
                      <p className="text-gray-700">Channeling tourism revenue into conservation and community development projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-safari-green text-2xl mr-3">🤝</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Fostering Partnerships</h4>
                      <p className="text-gray-700">Building alliances to protect environments, wildlife, and indigenous cultures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">How to Get Involved</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Your participation makes a real difference. Choose how you'd like to contribute to sustainable conservation in Uganda:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {involvementOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid #24684f' }}
              >
                <div className="text-6xl mb-4 text-center">{option.icon}</div>
                <h3 className="text-2xl font-bold text-safari-green mb-4 text-center">{option.title}</h3>
                <p className="text-gray-700 text-lg mb-6 text-center leading-relaxed">
                  {option.description}
                </p>
                <button
                  onClick={() => handleGetInvolved(option.action)}
                  className={`w-full py-4 px-6 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${option.color} hover:opacity-90`}
                >
                  {option.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Contact Section */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-12" style={{ border: '1px solid #24684f' }}>
              <h2 className="text-4xl font-bold text-safari-green mb-4 text-center">Stay Connected</h2>
              <p className="text-xl text-gray-700 text-center mb-8">
                Subscribe to our newsletter for eco-travel updates, conservation stories, and exclusive offers
              </p>

              <form onSubmit={handleNewsletterSubmit} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-safari-green focus:outline-none text-lg"
                  />
                  <button type="submit" className="btn-primary text-lg px-8">
                    Subscribe
                  </button>
                </div>
                {newsletterMessage && (
                  <p className="mt-4 text-safari-green font-semibold text-center">{newsletterMessage}</p>
                )}
              </form>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Get In Touch</h3>
                  <p className="text-gray-700 mb-4">Have questions about Planting Green Paths or want to collaborate?</p>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <span className="text-safari-gold mr-2">📧</span>
                      info@shakestravel.com
                    </p>
                    <p className="flex items-center">
                      <span className="text-safari-gold mr-2">📱</span>
                      +256 XXX XXX XXX
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Follow Our Journey</h3>
                  <p className="text-gray-700 mb-4">Stay updated on our conservation efforts and success stories</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-4xl hover:text-safari-gold transition">📘</a>
                    <a href="#" className="text-4xl hover:text-safari-gold transition">📷</a>
                    <a href="#" className="text-4xl hover:text-safari-gold transition">🐦</a>
                    <a href="#" className="text-4xl hover:text-safari-gold transition">💼</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-safari-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center" style={{ border: '1px solid #24684f' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-safari-green">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Every eco-safari, tree donation, and eco-stay contributes to preserving Uganda's natural heritage for future generations. Join the Planting Green Paths movement today.
            </p>
            <button onClick={() => handleGetInvolved('General Inquiry')} className="btn-primary text-lg">
              Start Your Eco-Journey
            </button>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedOption}
      />
    </div>
  )
}
