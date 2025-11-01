import { useState } from 'react'
import BookingModal from '../components/BookingModal'
import PlantingGreenPathsCarousel from '../components/PlantingGreenPathsCarousel'
import FontAwesomeIcon from '../components/FontAwesomeIcon'

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
      icon: 'fa-tree',
      title: 'Large-Scale Tree Planting',
      description: 'Plant thousands of trees across Uganda to restore forests, expand wildlife habitats, combat climate change, and ensure sustainable safari experiences for generations to come.'
    },
    {
      icon: 'fa-car',
      title: 'Safari-Linked Conservation',
      description: 'Integrate tree planting directly into safari experiences so every game drive, trek, and wildlife encounter contributes measurable environmental restoration and community benefit.'
    },
    {
      icon: 'fa-handshake',
      title: 'Community Empowerment',
      description: 'Support local communities through tree planting employment, sustainable farming practices, and direct revenue from eco-tourism—creating economic alternatives to forest destruction.'
    },
    {
      icon: 'fa-paw',
      title: 'Wildlife Habitat Restoration',
      description: 'Restore and expand critical wildlife corridors through strategic tree planting, ensuring the animals that make safaris unforgettable have thriving natural habitats.'
    }
  ]

  const involvementOptions = [
    {
      icon: 'fa-leaf',
      title: 'Plant Trees Today',
      description: 'Donate trees that will directly restore Uganda\'s forests, create wildlife habitats, and provide livelihoods for local communities planting and caring for them.',
      action: 'Tree Donation',
      color: 'bg-safari-green'
    },
    {
      icon: 'fa-car',
      title: 'Book a Safari Adventure',
      description: 'Experience Uganda\'s wildlife while your safari directly funds tree planting projects and community conservation work in the parks you visit.',
      action: 'Eco Safari Booking',
      color: 'bg-safari-gold'
    },
    {
      icon: 'fa-campground',
      title: 'Stay at Eco-Lodges',
      description: 'Choose sustainable accommodations that support tree planting campaigns and provide fair wages to local staff committed to forest restoration.',
      action: 'Eco Stay Booking',
      color: 'bg-safari-green'
    },
    {
      icon: 'fa-heart',
      title: 'Support Tree Planters',
      description: 'Sponsor community tree planters earning sustainable income while restoring forests—directly connecting your support to people protecting Uganda\'s natural beauty.',
      action: 'Community Support',
      color: 'bg-safari-gold'
    }
  ]


  return (
    <div>
      {/* Hero Section with Planting Green Paths Carousel */}
      <div className="relative" style={{ borderRadius: '0px' }}>
        <PlantingGreenPathsCarousel />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading drop-shadow-lg">
              Planting Green Paths
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              Link your safaris with tree planting. Every booking restores forests, supports communities, and fights climate change
            </p>
            <button onClick={() => handleGetInvolved('General Inquiry')} className="btn-primary text-lg mt-6 pointer-events-auto">
              Get Involved Today
            </button>
          </div>
        </div>
      </div>

      {/* Program Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-8">About Planting Green Paths</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Planting Green Paths is Shakes Travel's commitment to promoting authentic safari experiences across Uganda while protecting our environment and supporting local communities through strategic tree planting initiatives. We believe that every safari adventure can contribute directly to environmental conservation and community wellbeing by combining unforgettable wildlife encounters with measurable conservation impact.
              </p>
              <p>
                Through every safari booking, tree donation, and eco-stay, we channel resources into reforestation projects that restore Uganda's forests, combat climate change, and create sustainable livelihoods for local communities. Our tree planting initiatives are integrated into all our safari experiences, making conservation an active part of your adventure rather than just a passive benefit.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-safari-light p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Experience authentic safaris while directly supporting reforestation efforts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Plant trees that restore Uganda's forests and create wildlife habitats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Support local communities with sustainable livelihood opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Combat climate change through massive tree planting campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">✓</span>
                      <span>Create lasting environmental legacy from your safari adventure</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-safari-light p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Challenges We Address Through Tree Planting</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Deforestation destroying wildlife habitats and safari experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Loss of forest cover reducing animal populations and ecosystem services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Climate change threatening wildlife and tourism sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Limited economic opportunities for communities living near protected areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-safari-gold mr-2 text-xl">•</span>
                      <span>Environmental degradation reducing the beauty of safari destinations</span>
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
            {objectives.map((objective, index) => {
              return (
                <div key={index} className="card p-6 text-center hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-6xl mb-4"><FontAwesomeIcon icon={objective.icon} className="w-20 h-20 mx-auto text-safari-green" /></div>
                  <h3 className="text-xl font-bold text-safari-green mb-3">{objective.title}</h3>
                  <p className="text-gray-700">{objective.description}</p>
                </div>
              )
            })}
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
                  Uganda's forests are disappearing at an alarming rate—taking with them the habitats that make safaris magical and the resources that sustain local communities. Deforestation driven by agricultural expansion, logging, and climate change threatens both wildlife populations and the livelihoods of people living in safari destinations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Without immediate, large-scale reforestation, Uganda's safari experiences will diminish as wildlife populations decline and ecosystems collapse. Communities have limited economic alternatives to forest exploitation. Planting Green Paths directly addresses this by linking safari tourism revenue to tree planting—making conservation profitable and creating sustainable income for communities.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: '1px solid #24684f' }}>
                <h3 className="text-3xl font-bold text-safari-gold mb-6">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon="fa-tree" className="w-8 h-8 text-safari-green mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Planting Thousands of Trees</h4>
                      <p className="text-gray-700">Every safari booking and tree donation plants native trees that restore forests and create thriving wildlife habitats</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon="fa-people-group" className="w-8 h-8 text-safari-green mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Creating Community Livelihoods</h4>
                      <p className="text-gray-700">Employing local tree planters and providing sustainable income that reduces pressure on forests</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon="fa-paw" className="w-8 h-8 text-safari-green mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Restoring Wildlife Habitats</h4>
                      <p className="text-gray-700">Expanding corridors and habitats so safari animals have thriving ecosystems to call home</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon="fa-globe" className="w-8 h-8 text-safari-green mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Fighting Climate Change</h4>
                      <p className="text-gray-700">Sequestering carbon through large-scale reforestation while supporting climate-resilient communities</p>
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
            {involvementOptions.map((option, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ border: '1px solid #24684f' }}
                >
                  <div className="text-6xl mb-4 text-center"><FontAwesomeIcon icon={option.icon} className="w-20 h-20 mx-auto text-safari-green" /></div>
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
              )
            })}
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
                      <FontAwesomeIcon icon="fa-envelope" className="w-6 h-6 text-safari-gold mr-2" />
                      info@shakestravel.com
                    </p>
                    <p className="flex items-center">
                      <FontAwesomeIcon icon="fa-phone" className="w-6 h-6 text-safari-gold mr-2" />
                      +256 XXX XXX XXX
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-safari-green mb-4">Follow Our Journey</h3>
                  <p className="text-gray-700 mb-4">Stay updated on our conservation efforts and success stories</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-4xl hover:text-safari-gold transition"><FontAwesomeIcon icon="fa-people-group" className="w-10 h-10 text-safari-green hover:text-safari-gold" /></a>
                    <a href="#" className="text-4xl hover:text-safari-gold transition"><FontAwesomeIcon icon="fa-camera" className="w-10 h-10 text-safari-green hover:text-safari-gold" /></a>
                    <a href="#" className="text-4xl hover:text-safari-gold transition"><FontAwesomeIcon icon="fa-sun" className="w-10 h-10 text-safari-green hover:text-safari-gold" /></a>
                    <a href="#" className="text-4xl hover:text-safari-gold transition"><FontAwesomeIcon icon="fa-people-group" className="w-10 h-10 text-safari-green hover:text-safari-gold" /></a>
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
              Ready to Plant Trees While Experiencing Incredible Safaris?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Every safari you book plants trees. Every tree donation restores forests and employs communities. Every eco-stay supports sustainable livelihoods. Together, we're restoring Uganda's beauty—one tree, one safari, one community at a time.
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
