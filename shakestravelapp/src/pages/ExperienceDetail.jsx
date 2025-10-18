import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import BookingModal from '../components/BookingModal'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experiences = {
    'queen-elizabeth-safari': {
      title: 'Queen Elizabeth National Park Safari',
      tagline: 'Tree-Climbing Lions & Kazinga Channel',
      location: 'Queen Elizabeth National Park',
      category: 'Wildlife Safari',
      description: 'Discover Uganda\'s most popular safari destination where tree-climbing lions lounge in the Ishasha sector, and the Kazinga Channel teems with hippos, elephants, and over 600 bird species. This 3-day adventure combines classic game drives with unforgettable boat safaris through one of Africa\'s most biodiverse ecosystems.',
      fullDescription: `Experience the magnificent diversity of Queen Elizabeth National Park, Uganda's most visited wildlife reserve and a true gem of East African safari destinations. Spanning nearly 2,000 square kilometers, this remarkable park encompasses savannah plains, lush wetlands, crater lakes, and pristine forests that create one of the continent's most varied ecosystems.

Your journey begins with game drives through the park's diverse landscapes, where the iconic tree-climbing lions of the Ishasha sector provide one of wildlife viewing's most extraordinary spectacles. Watch these magnificent predators lounge in fig trees, a behavior unique to this region, while the surrounding grasslands teem with elephants, buffaloes, Uganda kob, and warthogs.

The highlight of any visit is the Kazinga Channel boat cruise, where the 32-kilometer natural channel connecting Lake Edward and Lake George becomes a wildlife theater. Hippos congregate in massive pods, Nile crocodiles bask on sandy banks, and elephants come to drink at the water's edge. The channel attracts over 600 bird species, making it one of the world's premier birding destinations, with African skimmers, pied kingfishers, and majestic African fish eagles putting on spectacular displays.

Venture into Kyambura Gorge, a dramatic valley known as the "Valley of Apes," where habituated chimpanzee communities swing through riverine forest canopy. The gorge's microclimate supports diverse primates including black-and-white colobus monkeys, red-tailed monkeys, and baboons.

Explore the mystical crater lakes dotting the park's northern edge, where ancient volcanic calderas now cradle sapphire waters surrounded by emerald forests. These lakes provide stunning photographic opportunities and insights into the area's geological history.`,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600',
      highlights: [
        'Tree-climbing lion tracking in Ishasha sector',
        'Kazinga Channel boat cruise with abundant wildlife',
        'Chimpanzee tracking in Kyambura Gorge',
        'Game drives through diverse landscapes',
        'Over 600 bird species including African skimmer',
        'Crater lakes exploration',
        'Professional safari guide and 4x4 vehicle',
        'Park entrance fees and accommodation'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Arrival and Afternoon Game Drive',
          description: 'Depart Kampala early morning for the scenic 6-hour drive to Queen Elizabeth National Park. Stop at the Equator monument for photos and experiments. Arrive at your lodge for lunch, then embark on an afternoon game drive through the Kasenyi plains, known for lion sightings and large elephant herds. Return to the lodge for dinner and overnight.'
        },
        {
          day: 'Day 2',
          title: 'Kazinga Channel Cruise & Ishasha Lions',
          description: 'Start with an early morning game drive to catch predators at their most active. After brunch, enjoy a boat cruise on the Kazinga Channel, getting close to hippos, crocodiles, and water birds. In the afternoon, drive to the Ishasha sector to search for the famous tree-climbing lions. Evening relaxation at your lodge.'
        },
        {
          day: 'Day 3',
          title: 'Chimpanzee Tracking & Departure',
          description: 'Morning chimpanzee tracking in Kyambura Gorge with expert guides. Observe these intelligent primates in their natural habitat, along with other forest species. After lunch, begin the return journey to Kampala, arriving in the evening with unforgettable memories of Uganda\'s wildlife.'
        }
      ],
      included: [
        'Professional safari guide throughout the trip',
        '4x4 safari vehicle with pop-up roof for game viewing',
        'All park entrance fees and activity permits',
        'Accommodation for 2 nights (lodges or camps based on preference)',
        'All meals from lunch Day 1 to lunch Day 3',
        'Kazinga Channel boat cruise',
        'Chimpanzee tracking permit and guide',
        'Game drives in Kasenyi and Ishasha sectors',
        'Bottled water during game drives',
        'Government taxes and service charges'
      ],
      excluded: [
        'International and domestic flights',
        'Uganda visa fees',
        'Travel insurance',
        'Personal expenses (laundry, telephone, tips)',
        'Alcoholic beverages',
        'Optional activities not mentioned in itinerary',
        'Porter fees at lodges'
      ],
      duration: '3 Days',
      difficulty: 'Easy',
      price: '$450 per person',
      rating: '4.8',
      reviews: 189,
      bestTime: 'June to September and December to February offer the best wildlife viewing with dry conditions. However, the park is accessible year-round.',
      whatToBring: [
        'Lightweight, neutral-colored clothing',
        'Warm jacket for early morning drives',
        'Comfortable walking shoes',
        'Sun hat and sunscreen',
        'Binoculars for wildlife viewing',
        'Camera with zoom lens',
        'Insect repellent',
        'Personal medications',
        'Reusable water bottle'
      ]
    },
    'murchison-falls-safari': {
      title: 'Murchison Falls National Park Safari',
      tagline: 'The Mighty Nile\'s Explosive Power',
      location: 'Murchison Falls National Park',
      category: 'Wildlife Safari',
      description: 'Witness the world\'s longest river explode through a 7-meter gorge in one of nature\'s most dramatic displays. This 3-day safari combines the thundering spectacle of Murchison Falls with exceptional wildlife viewing including lions, elephants, giraffes, and over 450 bird species along the Nile\'s banks.',
      fullDescription: `Murchison Falls National Park, Uganda's largest and oldest conservation area, offers an unparalleled combination of dramatic landscapes, diverse wildlife, and the spectacular power of the Nile River. Protected since 1952, this 3,893 square kilometer wilderness represents the best of Uganda's savannah ecosystem.

The park's namesake attraction is one of nature's most powerful displays: Murchison Falls, where the entire force of the Nile River compresses through a narrow 7-meter gorge before plunging 43 meters in a thunderous explosion of spray and rainbows. The falls divide the park into distinct northern and southern sectors, each offering unique wildlife experiences.

Your safari adventure includes game drives across the northern bank's vast savannah, where the legendary African wildlife cast assembles daily. Lions prowl through tall grass, elephants march in family groups, giraffes browse on acacia trees, and buffalo herds thunder across the plains. The park hosts four of the Big Five (only rhinos are absent from the park itself, though you can visit them at nearby Ziwa Rhino Sanctuary).

Boat safaris along the Nile provide intimate wildlife encounters impossible to achieve on land. Glide past pods of hippos, observe massive Nile crocodiles basking on sandbanks, and watch elephants drinking at the river's edge. The boat journey culminates at the base of Murchison Falls, where you'll feel the spray and hear the roar of millions of gallons cascading through the narrow gorge.

Hike to the top of the falls for breathtaking views as the Nile squeezes through the rock chasm, then explodes outward in spectacular fury. The surrounding area attracts over 450 bird species, including the rare shoebill stork, making this one of Africa's premier birding destinations.`,
      heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      highlights: [
        'Boat trip to the base of Murchison Falls',
        'Game drives with lions, elephants, and giraffes',
        'Top of the Falls viewing experience',
        'Nile River wildlife viewing with hippos and crocodiles',
        'Over 450 bird species including the rare shoebill',
        'Visit to Ziwa Rhino Sanctuary (optional)',
        'Professional guide and safari vehicle',
        'All park fees and accommodation'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Kampala to Murchison Falls via Ziwa Rhino Sanctuary',
          description: 'Depart Kampala early morning and drive to Ziwa Rhino Sanctuary for rhino tracking on foot - your chance to see Uganda\'s rhinos up close. Continue to Murchison Falls, stopping at the Top of the Falls for spectacular views of the Nile forcing through a 7-meter gorge. Check into your lodge for dinner and overnight.'
        },
        {
          day: 'Day 2',
          title: 'Morning Game Drive & Afternoon Boat Safari',
          description: 'Early morning game drive on the northern bank, tracking lions, elephants, giraffes, and various antelope species. Return for brunch, then take a 3-hour boat cruise upstream to the base of Murchison Falls. Get close to hippos, crocodiles, and water birds. The boat stops near the falls for photos of the powerful cascade. Evening at leisure at your lodge.'
        },
        {
          day: 'Day 3',
          title: 'Morning Game Drive & Return to Kampala',
          description: 'Final early morning game drive to catch predators hunting and any animals you might have missed. After breakfast, begin the return journey to Kampala with a lunch stop en route. Arrive in Kampala late afternoon.'
        }
      ],
      included: [
        'Professional driver-guide for the entire safari',
        '4x4 safari vehicle with pop-up roof',
        'Park entrance fees for Murchison Falls',
        'Rhino tracking permit at Ziwa Sanctuary',
        '2 nights accommodation (lodge or camp)',
        'All meals during the safari',
        'Boat cruise to the base of Murchison Falls',
        'Multiple game drives',
        'Top of the Falls visit',
        'Bottled water throughout',
        'All taxes and government levies'
      ],
      excluded: [
        'International flights and visas',
        'Travel and medical insurance',
        'Tips and gratuities',
        'Personal expenses and laundry',
        'Alcoholic drinks',
        'Activities not mentioned in itinerary'
      ],
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$650 per person',
      rating: '4.8',
      reviews: 287,
      bestTime: 'December to February and June to September provide optimal game viewing conditions. The dry season concentrates animals around water sources.',
      whatToBring: [
        'Light, long-sleeved shirts and trousers in neutral colors',
        'Warm fleece or jacket for early mornings',
        'Sturdy walking boots for rhino tracking',
        'Wide-brimmed hat and sunglasses',
        'High SPF sunscreen',
        'Quality binoculars',
        'Camera with telephoto lens',
        'Insect repellent with DEET',
        'Personal first aid kit',
        'Waterproof bag for boat cruise'
      ]
    },
    'kidepo-valley-safari': {
      title: 'Kidepo Valley National Park Safari',
      tagline: 'Uganda\'s Remote Wilderness Paradise',
      location: 'Kidepo Valley National Park',
      category: 'Wildlife Safari',
      description: 'Venture into Uganda\'s most remote and spectacular wilderness where vast golden savannahs stretch to distant mountain ranges. Kidepo offers unique wildlife found nowhere else in Uganda including cheetahs, ostriches, and greater kudus, combined with authentic cultural encounters with the Karamojong people.',
      fullDescription: `Kidepo Valley National Park stands as Uganda's most isolated and arguably most spectacular wilderness area. Located in the remote northeastern corner of the country, this 1,442 square kilometer park offers a true African wilderness experience that rivals the famous parks of Kenya and Tanzania, yet remains refreshingly uncrowded.

The park encompasses two major valley systems - Kidepo and Narus - each separated by mountain ranges that create dramatic backdrops to sweeping savannah plains. This is Uganda's most authentic "Out of Africa" landscape, where golden grasslands stretch endlessly beneath immense skies, and wildlife roams in numbers that evoke Africa of old.

Kidepo's isolation has preserved wildlife species found nowhere else in Uganda. Spot cheetahs stalking across the plains, ostriches striding through tall grass, and greater kudus browsing beneath acacia trees. The park hosts over 77 mammal species and 475 bird species, including 58 raptors - the highest concentration of birds of prey in any East African park.

Game drives through the Narus Valley reveal healthy populations of lions, elephants, buffaloes, and giraffes. During the dry season, permanent water in the Narus stream attracts elephants in herds of up to 250 individuals. Watch leopards lounging in sausage trees and spotted hyenas patrolling in large clans.

The cultural component adds extraordinary depth to your safari. Visit traditional Karamojong manyattas (homesteads) to experience one of Uganda's most fascinating pastoral cultures. The Karamojong maintain traditional cattle-herding lifestyles and distinctive customs that have remained largely unchanged for centuries.

Beyond wildlife, Kidepo's landscapes captivate with their raw beauty. The seasonal Kidepo River, flanked by borassus palms, creates a memorable scene. Climb to viewpoints for panoramic vistas across valleys to distant mountain ranges that mark the borders with South Sudan and Kenya.`,
      heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      highlights: [
        'Exclusive wildlife including cheetahs and ostriches',
        'Greater kudus and other rare species',
        'Vast savannah landscapes with dramatic mountain backdrops',
        'Cultural visits to Karamojong communities',
        'Narus Valley game drives',
        'Kidepo Valley exploration',
        'Remote wilderness camping experience',
        'Expert guides and all park fees'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Flight to Kidepo & Evening Game Drive',
          description: 'Take a domestic flight from Entebbe to Kidepo Valley (alternatively, it\'s a long 10-hour scenic drive). Upon arrival, check into your lodge and enjoy lunch with views over the vast savannah. Evening game drive through Narus Valley, searching for lions, elephants, and the park\'s unique species like cheetahs and ostriches. Return for dinner under the stars.'
        },
        {
          day: 'Day 2',
          title: 'Full Day Game Drives & Cultural Visit',
          description: 'Early morning game drive to spot predators and witness spectacular sunrise over the valley. Return for brunch, then visit a traditional Karamojong manyatta to experience their unique pastoral culture. Afternoon game drive through different areas of Narus Valley, with chances to see buffaloes, giraffes, and greater kudus. Night drive option available for nocturnal species.'
        },
        {
          day: 'Day 3',
          title: 'Kidepo Valley Exploration & Departure',
          description: 'Morning drive to the Kidepo Valley with its seasonal river and palm-lined landscapes. Stop at the hot springs and enjoy incredible mountain views. Visit the border viewing point overlooking South Sudan. After lunch, transfer to the airstrip for your flight back to Entebbe, or begin the overland journey.'
        }
      ],
      included: [
        'Domestic flight to/from Kidepo (if flying)',
        'Professional safari guide',
        '4x4 safari vehicle',
        'All park entrance fees',
        '2 nights accommodation',
        'All meals and bottled water',
        'Multiple game drives',
        'Karamojong cultural visit',
        'Kidepo Valley exploration',
        'Night game drive (optional)',
        'All government taxes'
      ],
      excluded: [
        'International flights',
        'Uganda visa',
        'Travel insurance',
        'Gratuities for guides and staff',
        'Personal items',
        'Alcoholic beverages',
        'Optional activities not specified'
      ],
      duration: '3 Days',
      difficulty: 'Moderate',
      price: 'Contact for pricing',
      rating: '4.8',
      reviews: 105,
      bestTime: 'September to March offers the best game viewing. The dry season (December-March) concentrates wildlife around water sources.',
      whatToBring: [
        'Lightweight clothing in earth tones',
        'Warm layers for cool evenings',
        'Comfortable safari boots',
        'Sun protection (hat, sunscreen, sunglasses)',
        'Quality binoculars essential for vast landscapes',
        'Camera with long telephoto lens',
        'Insect repellent',
        'Personal medications',
        'Flashlight/headlamp',
        'Power bank for charging devices'
      ]
    }
  }

  const experience = experiences[slug]

  if (!experience) {
    return <Navigate to="/safari-experiences" replace />
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${experience.heroImage})`,
        }}
      >
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-safari-green/90 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                {experience.category}
              </span>
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700">
                {experience.difficulty}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {experience.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="text-lg">{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-safari-gold text-2xl">★</span>
                <span className="text-lg font-semibold">{experience.rating}</span>
                <span className="text-lg">({experience.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span className="text-lg">{experience.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-safari-green mb-4">About This Experience</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{experience.description}</p>
              <div className="prose prose-lg max-w-none text-gray-700">
                {experience.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-safari-green mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <span className="text-safari-gold text-2xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-safari-green mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {experience.itinerary.map((day, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-safari-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-safari-green mb-1">{day.day}</h3>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{day.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included/Excluded */}
            <section>
              <h2 className="text-3xl font-bold text-safari-green mb-6">What's Included & Excluded</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-safari-green mb-4 flex items-center">
                    <span className="text-2xl mr-2">✓</span> Included
                  </h3>
                  <ul className="space-y-3">
                    {experience.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-safari-gold mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                    <span className="text-2xl mr-2">✗</span> Not Included
                  </h3>
                  <ul className="space-y-3">
                    {experience.excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* What to Bring */}
            <section>
              <h2 className="text-3xl font-bold text-safari-green mb-6">What to Bring</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-safari-green text-xl">📦</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Time to Visit */}
            <section className="card p-6 bg-safari-green/5 border-l-4 border-safari-green">
              <h2 className="text-2xl font-bold text-safari-green mb-3">Best Time to Visit</h2>
              <p className="text-gray-700 leading-relaxed">{experience.bestTime}</p>
            </section>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="card sticky top-6 p-6">
              <div className="mb-6">
                <div className="text-3xl font-bold text-safari-green mb-2">{experience.price}</div>
                <p className="text-gray-600">per person</p>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-800">{experience.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-sm text-gray-600">Difficulty</p>
                    <p className="font-semibold text-gray-800">{experience.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-safari-gold text-2xl">★</span>
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="font-semibold text-gray-800">{experience.rating} ({experience.reviews} reviews)</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary w-full mb-4"
              >
                Book This Experience
              </button>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Free cancellation up to 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Customizable itinerary</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-3">Questions about this experience?</p>
                <a href="mailto:info@shakestravel.com" className="text-safari-green hover:underline text-sm font-medium">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={experience.title}
      />
    </div>
  )
}
