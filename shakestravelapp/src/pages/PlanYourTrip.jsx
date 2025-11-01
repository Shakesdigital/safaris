import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlanYourTripCarousel from '../components/PlanYourTripCarousel'
import {
  PackageIcon,
  SparklesIcon,
  LionIcon,
  TargetIcon,
  TrophyIcon,
  HeartIcon,
  HandshakeIcon,
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon as ChatIcon
} from '../components/Icons'

export default function PlanYourTrip() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    nationality: '',

    // Trip Details
    destinations: [],
    tripDuration: '',
    startDate: '',
    flexibleDates: false,

    // Group Information
    adults: '1',
    children: '0',
    infants: '0',

    // Budget & Accommodation
    budgetRange: '',
    accommodationType: '',

    // Interests & Preferences
    interests: [],
    dietaryRequirements: '',
    specialNeeds: '',

    // Additional Information
    travelNeeds: '',
    hearAboutUs: ''
  })

  const [errors, setErrors] = useState({})

  const destinations = [
    { value: 'bwindi', label: 'Bwindi Impenetrable Forest (Gorilla Trekking)' },
    { value: 'queen-elizabeth', label: 'Queen Elizabeth National Park' },
    { value: 'murchison-falls', label: 'Murchison Falls National Park' },
    { value: 'kibale', label: 'Kibale National Park (Chimp Tracking)' },
    { value: 'kidepo', label: 'Kidepo Valley National Park' },
    { value: 'lake-mburo', label: 'Lake Mburo National Park' },
    { value: 'mount-elgon', label: 'Mount Elgon National Park' },
    { value: 'rwenzori', label: 'Rwenzori Mountains' },
    { value: 'semuliki', label: 'Semuliki Valley' },
    { value: 'jinja', label: 'Jinja (Source of the Nile)' },
    { value: 'ssese-islands', label: 'Ssese Islands' },
    { value: 'kampala', label: 'Kampala City Tour' }
  ]

  const interestOptions = [
    { value: 'gorilla-trekking', label: 'Gorilla Trekking' },
    { value: 'chimp-tracking', label: 'Chimpanzee Tracking' },
    { value: 'wildlife-safari', label: 'Wildlife Safari' },
    { value: 'bird-watching', label: 'Bird Watching' },
    { value: 'cultural-tours', label: 'Cultural Tours' },
    { value: 'boat-safaris', label: 'Boat Safaris' },
    { value: 'hiking', label: 'Hiking & Trekking' },
    { value: 'photography', label: 'Photography Safari' },
    { value: 'adventure-sports', label: 'Adventure Sports (Rafting, etc.)' },
    { value: 'relaxation', label: 'Relaxation & Wellness' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleMultiSelect = (e, fieldName) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setFormData(prev => ({
      ...prev,
      [fieldName]: isChecked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter(item => item !== value)
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (formData.destinations.length === 0) newErrors.destinations = 'Please select at least one destination'
    if (!formData.budgetRange) newErrors.budgetRange = 'Please select a budget range'
    if (!formData.accommodationType) newErrors.accommodationType = 'Please select accommodation type'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Here you would typically send the data to your backend
    console.log('Trip Planning Inquiry:', formData)
    alert('Thank you for your inquiry! Our safari experts will contact you within 24 hours to craft your perfect adventure.')

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      destinations: [],
      tripDuration: '',
      startDate: '',
      flexibleDates: false,
      adults: '1',
      children: '0',
      infants: '0',
      budgetRange: '',
      accommodationType: '',
      interests: [],
      dietaryRequirements: '',
      specialNeeds: '',
      travelNeeds: '',
      hearAboutUs: ''
    })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Plan Your Trip Carousel */}
      <div className="relative" style={{ borderRadius: '0px' }}>
        <PlanYourTripCarousel />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading drop-shadow-lg">
              Let's Plan Your Dream Safari
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              Share your travel dreams with us, and we'll craft a personalized safari adventure that exceeds your expectations
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-safari-green">Your Adventure Starts Here</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below with as much detail as possible. Our experienced safari consultants will use this information to design a tailor-made itinerary that perfectly matches your interests, budget, and travel style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-safari-green bg-opacity-5 rounded-lg">
              <div className="text-4xl mb-3"><PackageIcon className="w-12 h-12 mx-auto text-safari-green" /></div>
              <h3 className="font-bold text-lg mb-2">1. Share Details</h3>
              <p className="text-sm text-gray-600">Tell us about your dream safari</p>
            </div>
            <div className="text-center p-6 bg-safari-gold bg-opacity-10 rounded-lg">
              <div className="text-4xl mb-3"><SparklesIcon className="w-12 h-12 mx-auto text-safari-gold" /></div>
              <h3 className="font-bold text-lg mb-2">2. Get Custom Plan</h3>
              <p className="text-sm text-gray-600">Receive a personalized itinerary</p>
            </div>
            <div className="text-center p-6 bg-safari-green bg-opacity-5 rounded-lg">
              <div className="text-4xl mb-3"><LionIcon className="w-12 h-12 mx-auto text-safari-green" /></div>
              <h3 className="font-bold text-lg mb-2">3. Begin Adventure</h3>
              <p className="text-sm text-gray-600">Experience Uganda like never before</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12" style={{ border: '1px solid #24684f' }}>

            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 234 567 8900"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>

            {/* Safari Destinations */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Safari Destinations
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-3">
                  Which destinations interest you? <span className="text-red-500">*</span>
                  <span className="text-gray-500 font-normal text-xs ml-2">(Select all that apply)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {destinations.map(dest => (
                    <label key={dest.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        value={dest.value}
                        checked={formData.destinations.includes(dest.value)}
                        onChange={(e) => handleMultiSelect(e, 'destinations')}
                        className="mt-1 h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <span className="text-sm">{dest.label}</span>
                    </label>
                  ))}
                </div>
                {errors.destinations && <p className="text-red-500 text-sm mt-2">{errors.destinations}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Trip Duration</label>
                  <select
                    name="tripDuration"
                    value={formData.tripDuration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="1-3">1-3 days</option>
                    <option value="4-7">4-7 days</option>
                    <option value="8-14">8-14 days</option>
                    <option value="15-21">15-21 days</option>
                    <option value="21+">21+ days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="flexibleDates"
                    checked={formData.flexibleDates}
                    onChange={handleChange}
                    className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                  />
                  <span className="text-sm font-medium">My travel dates are flexible</span>
                </label>
              </div>
            </div>

            {/* Group Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Group Information
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Adults (18+)</label>
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    min="1"
                    max="50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Children (6-17)</label>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    min="0"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Infants (0-5)</label>
                  <input
                    type="number"
                    name="infants"
                    value={formData.infants}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Budget & Accommodation */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Budget & Accommodation Preferences
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Budget Range (per person) <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.budgetRange === 'budget' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="budgetRange"
                        value="budget"
                        checked={formData.budgetRange === 'budget'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Budget</div>
                        <div className="text-sm text-gray-600">$100 - $200 per day</div>
                        <div className="text-xs text-gray-500 mt-1">Basic lodges, camping, shared facilities</div>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.budgetRange === 'mid-range' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="budgetRange"
                        value="mid-range"
                        checked={formData.budgetRange === 'mid-range'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Mid-Range</div>
                        <div className="text-sm text-gray-600">$200 - $400 per day</div>
                        <div className="text-xs text-gray-500 mt-1">Comfortable lodges, private rooms, good amenities</div>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.budgetRange === 'luxury' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="budgetRange"
                        value="luxury"
                        checked={formData.budgetRange === 'luxury'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Luxury</div>
                        <div className="text-sm text-gray-600">$400+ per day</div>
                        <div className="text-xs text-gray-500 mt-1">Premium lodges, exclusive experiences, top service</div>
                      </div>
                    </label>
                  </div>
                  {errors.budgetRange && <p className="text-red-500 text-sm mt-2">{errors.budgetRange}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Accommodation Type <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.accommodationType === 'camping' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="accommodationType"
                        value="camping"
                        checked={formData.accommodationType === 'camping'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Camping</div>
                        <div className="text-xs text-gray-500 mt-1">Tented camps, close to nature</div>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.accommodationType === 'lodge' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="accommodationType"
                        value="lodge"
                        checked={formData.accommodationType === 'lodge'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Lodge</div>
                        <div className="text-xs text-gray-500 mt-1">Comfortable mid-range lodges</div>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.accommodationType === 'luxury-lodge' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="accommodationType"
                        value="luxury-lodge"
                        checked={formData.accommodationType === 'luxury-lodge'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Luxury Lodge</div>
                        <div className="text-xs text-gray-500 mt-1">5-star lodges and resorts</div>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.accommodationType === 'mix' ? 'border-safari-green bg-safari-green bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="accommodationType"
                        value="mix"
                        checked={formData.accommodationType === 'mix'}
                        onChange={handleChange}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <div className="ml-3">
                        <div className="font-semibold">Mix of Options</div>
                        <div className="text-xs text-gray-500 mt-1">Variety based on location</div>
                      </div>
                    </label>
                  </div>
                  {errors.accommodationType && <p className="text-red-500 text-sm mt-2">{errors.accommodationType}</p>}
                </div>
              </div>
            </div>

            {/* Interests & Activities */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Interests & Activities
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-3">
                  What activities interest you most?
                  <span className="text-gray-500 font-normal text-xs ml-2">(Select all that apply)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map(interest => (
                    <label key={interest.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        value={interest.value}
                        checked={formData.interests.includes(interest.value)}
                        onChange={(e) => handleMultiSelect(e, 'interests')}
                        className="h-4 w-4 text-safari-green focus:ring-safari-gold"
                      />
                      <span className="text-sm">{interest.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Requirements */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Special Requirements
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Dietary Requirements</label>
                  <input
                    type="text"
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                    placeholder="e.g., Vegetarian, Vegan, Halal, Gluten-free, Allergies"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Accessibility & Special Needs</label>
                  <textarea
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                    placeholder="Please let us know about any mobility requirements, medical conditions, or other special needs we should be aware of..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Travel Needs & Preferences */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-safari-green border-b-2 border-safari-gold pb-2">
                Tell Us More About Your Dream Safari
              </h3>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Additional Information & Special Requests
                </label>
                <textarea
                  name="travelNeeds"
                  value={formData.travelNeeds}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                  placeholder="Share your travel dreams, expectations, bucket list items, or any specific requests. The more details you provide, the better we can customize your safari experience. For example:&#10;- Is this a special occasion (honeymoon, anniversary, birthday)?&#10;- Do you prefer early morning game drives or afternoon safaris?&#10;- Are you interested in photography opportunities?&#10;- Would you like cultural interactions with local communities?&#10;- Any specific wildlife you're hoping to see?&#10;- Previous safari experiences?"
                ></textarea>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">How did you hear about us?</label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-gold focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Friend/Family Referral</option>
                  <option value="travel-blog">Travel Blog/Website</option>
                  <option value="tripadvisor">TripAdvisor</option>
                  <option value="previous-client">Previous Client</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t pt-8">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to be contacted by Shakes Travel regarding your safari inquiry.
                  We respect your privacy and will never share your information.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12 py-4"
                >
                  Submit Safari Plan Request
                </button>
                <Link
                  to="/destinations"
                  className="btn-secondary text-lg px-12 py-4 text-center"
                >
                  Explore Destinations First
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Why Plan With Us Section */}
      <section className="py-16 bg-safari-green bg-opacity-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-safari-green">Why Plan Your Safari With Us?</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4"><TargetIcon className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="font-bold text-lg mb-2">Tailored Itineraries</h3>
              <p className="text-sm text-gray-600">Every safari is customized to match your unique interests and preferences</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4"><TrophyIcon className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
              <p className="text-sm text-gray-600">Years of experience crafting unforgettable Ugandan adventures</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4"><HeartIcon className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="font-bold text-lg mb-2">Sustainable Tourism</h3>
              <p className="text-sm text-gray-600">We prioritize eco-friendly practices and community support</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4"><HandshakeIcon className="w-16 h-16 mx-auto text-safari-green" /></div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support throughout your journey from planning to return</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-safari-green">Need Help Planning?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our safari experts are here to assist you. Reach out directly for immediate assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3"><PhoneIcon className="w-10 h-10 mx-auto text-safari-green" /></div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+256 XXX XXX XXX</p>
              <p className="text-xs text-gray-500 mt-1">Mon-Sat: 8AM-8PM EAT</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3"><EnvelopeIcon className="w-10 h-10 mx-auto text-safari-green" /></div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@shakestravel.com</p>
              <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3"><ChatIcon className="w-10 h-10 mx-auto text-safari-green" /></div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">+256 XXX XXX XXX</p>
              <p className="text-xs text-gray-500 mt-1">Quick responses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
