import { useState } from 'react'

export default function BookingModal({ isOpen, onClose, experience = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: experience,
    date: '',
    guests: '1',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Booking inquiry:', formData)
    alert('Thank you for your inquiry! We will contact you shortly.')
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      date: '',
      guests: '1',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-safari-green">Book Your Safari</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Safari Experience *</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
              >
                <option value="">Select an experience</option>
                <option value="gorilla-trekking">Gorilla Trekking - Bwindi</option>
                <option value="queen-elizabeth">Queen Elizabeth National Park</option>
                <option value="murchison-falls">Murchison Falls Safari</option>
                <option value="wildlife-safari">General Wildlife Safari</option>
                <option value="cultural-tour">Cultural Experience</option>
                <option value="custom">Custom Safari Package</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                placeholder="Tell us about your expectations, special requirements, or any questions..."
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="btn-primary flex-1">
                Submit Inquiry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
