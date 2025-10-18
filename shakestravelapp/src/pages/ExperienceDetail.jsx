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
    },
    'lake-mburo-safari': {
      title: 'Lake Mburo National Park Safari',
      tagline: 'Walking Safaris & Unique Wildlife',
      location: 'Lake Mburo National Park',
      category: 'Wildlife Safari',
      description: 'Experience Uganda\'s only park where you can enjoy walking safaris, horseback riding, and boat cruises all in one destination. Home to Uganda\'s only populations of zebras and impalas, Lake Mburo offers intimate wildlife encounters in a compact, accessible setting perfect for those with limited time.',
      fullDescription: `Lake Mburo National Park, Uganda's smallest savannah park, offers an intimate and accessible safari experience that combines traditional game drives with unique activities unavailable in other Ugandan parks. Located just 240 kilometers from Kampala, this compact 370 square kilometer park is perfect for weekend getaways and short safari experiences without sacrificing wildlife diversity or adventure.

The park's defining feature is Lake Mburo itself, one of fourteen lakes in the Banyankole region, creating a wetland ecosystem that attracts diverse wildlife year-round. This is the only Ugandan park where you can walk among wildlife on guided walking safaris, getting closer to nature than vehicle-based viewing allows. Expert ranger guides lead you through acacia woodlands and grasslands, teaching you to track animals by their footprints, identify bird calls, and understand the complex relationships within the ecosystem.

Lake Mburo holds the distinction of being Uganda's only park with populations of zebras and impalas, making it essential for comprehensive wildlife viewing across the country. The park also supports healthy numbers of eland (Africa's largest antelope), topi, buffaloes, warthogs, and bushbucks. Night drives reveal nocturnal species including leopards, spotted hyenas, white-tailed mongooses, and genets that remain hidden during daylight hours.

Horseback safaris offer a unique perspective, allowing you to ride alongside giraffes and zebras in a non-threatening way that brings you remarkably close to wildlife. The horses are well-trained for safari conditions, and rides are available for various skill levels, from beginners to experienced riders.

Boat cruises on Lake Mburo provide excellent opportunities to observe hippos at close range, spot crocodiles sunning on the shore, and photograph water birds including African fish eagles, pelicans, and herons. The lake's tranquil waters create perfect reflections of surrounding hills at sunrise and sunset.

Birding enthusiasts will find over 350 bird species, including the rare African finfoot, shoebill stork (occasionally), and papyrus yellow warbler. The park's varied habitats - from lake shores to acacia woodlands to rocky outcrops - create niches for diverse avian species.`,
      heroImage: 'https://images.unsplash.com/photo-1535338623859-38b734369d9d?w=1600',
      image: 'https://images.unsplash.com/photo-1535338623859-38b734369d9d?w=800',
      highlights: [
        'Guided walking safaris through wildlife areas',
        'Boat cruise on Lake Mburo',
        'Horseback safari options',
        'Uganda\'s only zebra and impala populations',
        'Leopard tracking opportunities',
        'Night game drives',
        'Bird watching with over 350 species',
        'All meals, accommodation, and park fees'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Arrival and Afternoon Activities',
          description: 'Depart Kampala in the morning for the 4-hour scenic drive to Lake Mburo National Park, stopping at the Equator for photos and demonstrations. Arrive at your lodge for lunch and a brief rest. Afternoon boat cruise on Lake Mburo to see hippos, crocodiles, and waterbirds up close. Optional horseback safari in the evening for a unique perspective on wildlife. Dinner and overnight at your lodge.'
        },
        {
          day: 'Day 2',
          title: 'Walking Safari & Game Drive',
          description: 'Early morning guided walking safari with an armed ranger, tracking wildlife on foot through acacia woodlands and grasslands - an experience unique to Lake Mburo in Uganda. Return for brunch, then afternoon game drive through the park searching for zebras, impalas, elands, buffaloes, and the elusive leopard. Optional night game drive to spot nocturnal species. Dinner at the lodge.'
        },
        {
          day: 'Day 3',
          title: 'Morning Game Drive & Departure',
          description: 'Final early morning game drive to catch animals at their most active and capture the beautiful sunrise over the savannah. Return to lodge for breakfast, then begin the journey back to Kampala, arriving in the afternoon with memories of this accessible yet diverse safari experience.'
        }
      ],
      included: [
        'Professional safari guide throughout',
        '4x4 safari vehicle with pop-up roof',
        'All park entrance fees',
        'Guided walking safari with armed ranger',
        '2 nights accommodation',
        'All meals from lunch Day 1 to breakfast Day 3',
        'Boat cruise on Lake Mburo',
        'Multiple game drives',
        'Horseback safari (1 hour)',
        'Bottled water during activities',
        'Government taxes'
      ],
      excluded: [
        'International flights',
        'Uganda visa fees',
        'Travel insurance',
        'Night game drive (optional extra)',
        'Extended horseback safaris',
        'Alcoholic beverages',
        'Tips and personal expenses',
        'Items not mentioned in inclusions'
      ],
      duration: '3 Days',
      difficulty: 'Easy',
      price: '$350 per person',
      rating: '4.6',
      reviews: 156,
      bestTime: 'June to September and December to February offer the best conditions. However, Lake Mburo is accessible and rewarding year-round.',
      whatToBring: [
        'Comfortable walking shoes/boots',
        'Light, neutral-colored clothing',
        'Long trousers for walking safari',
        'Warm jacket for early mornings',
        'Sun hat and sunscreen',
        'Binoculars for wildlife and birding',
        'Camera with zoom capability',
        'Insect repellent',
        'Personal medications',
        'Flashlight for night activities'
      ]
    },
    'rwenzori-mountains-trek': {
      title: 'Rwenzori Mountains Trek to Margherita Peak',
      tagline: 'Africa\'s Mystical Mountains of the Moon',
      location: 'Rwenzori Mountains National Park',
      category: 'Adventure & Hiking',
      description: 'Conquer Africa\'s third-highest peak at 5,109 meters on this challenging 7-9 day trek through otherworldly landscapes. Journey through bamboo forests, heath moorlands, and Afro-alpine zones to reach glacial valleys and snow-capped peaks in this UNESCO World Heritage Site known as the "Mountains of the Moon."',
      fullDescription: `The Rwenzori Mountains, Africa's highest mountain range, rise dramatically from the western Rift Valley to form a 120-kilometer chain of snow-capped peaks straddling the Uganda-Congo border. Ancient Greek geographer Ptolemy called these the "Mountains of the Moon," believing them to be the source of the Nile. Today, they offer one of Africa's most challenging and rewarding mountain treks.

Your expedition to Margherita Peak (5,109m), the third-highest point in Africa, takes you through five distinct vegetation zones, each with unique flora and fauna found nowhere else on Earth. The trek begins in cultivated farmland before entering montane forest alive with primates, including chimpanzees, colobus monkeys, and blue monkeys. Listen for the calls of Rwenzori turaco and other endemic bird species.

As you ascend, bamboo forests give way to heather zone, where massive tree heathers grow twisted and gnarled, draped in hanging lichens that create an otherworldly atmosphere. Higher still, the moorland zone presents giant lobelias and groundsels - prehistoric-looking plants that grow to extraordinary sizes in the Afro-alpine environment, creating landscapes unlike anywhere else on Earth.

The final push takes you into the alpine zone where glaciers, though receding, still cap the highest peaks. Technical sections require ropes, crampons, and ice axes as you navigate crevasses and snow fields. The climb to Margherita Peak, the highest point of Mount Stanley, demands technical mountaineering skills and excellent physical fitness, but rewards successful summiteers with views across the Rift Valley and, on clear days, glimpses of the distant Virunga volcanoes.

Mountain huts along the route provide basic shelter, though conditions are rustic. Porters carry supplies and equipment, while experienced guides ensure safety and share knowledge about this remarkable ecosystem. The Rwenzori is renowned for extreme weather - be prepared for rain, hail, snow, and potential sunshine all in one day.

Beyond the physical challenge, the Rwenzori trek offers a profound wilderness experience in one of Africa's last true frontiers. The remoteness, the surreal landscapes, and the achievement of summiting Margherita Peak combine to create a mountaineering adventure that ranks among the world's great high-altitude treks.`,
      heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      highlights: [
        'Summit attempt of Margherita Peak (5,109m)',
        'Professional mountain guides and porters',
        'Traverse through 5 distinct vegetation zones',
        'Glacial valley exploration',
        'UNESCO World Heritage Site experience',
        'Mountain hut accommodation',
        'All meals and climbing equipment',
        'Park fees and permits'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Nyakalengija (1,615m) to Nyabitaba Hut (2,651m)',
          description: 'Begin your trek from the park gate through farmland and montane forest. The 7km hike takes 5-6 hours, following the Mubuku River through forest inhabited by primates and birds. Arrive at Nyabitaba Hut for your first night on the mountain. Overnight at 2,651m.'
        },
        {
          day: 'Day 2',
          title: 'Nyabitaba to John Matte Hut (3,505m)',
          description: 'Descend to cross the Mubuku River, then climb steeply through bamboo forest into the heather zone. Cross the Kurt Shafer Bridge over the Bujuku River, then ascend to John Matte Hut. 8km trek, 6-7 hours. Overnight at 3,505m.'
        },
        {
          day: 'Day 3',
          title: 'John Matte to Bujuku Hut (3,962m)',
          description: 'Trek through giant heather and groundsels in the boggy Bigo Bog. The otherworldly landscape of giant lobelias emerges as you ascend into the alpine zone. 5km trek, 4-5 hours. Bujuku Hut sits in a spectacular location beneath Mount Baker and Mount Speke. Overnight at 3,962m.'
        },
        {
          day: 'Day 4',
          title: 'Bujuku to Elena Hut (4,541m)',
          description: 'Climb steeply to Scott-Elliot Pass (4,372m) with stunning views, then descend slightly before ascending to Elena Hut, your base for the summit attempt. This is a challenging day through boulder fields and alpine terrain. 5km, 5-6 hours. Early dinner and rest before midnight summit attempt. Overnight at 4,541m.'
        },
        {
          day: 'Day 5',
          title: 'Summit Day - Margherita Peak (5,109m) and Descend to Kitandara',
          description: 'Depart around 2am for the summit attempt. Technical climb using ropes, crampons, and ice axes across Stanley Glacier to Margherita Peak, Africa\'s third-highest point. After celebrating at the summit with sunrise views, descend carefully to Elena Hut for breakfast, then continue down to Kitandara Hut (4,023m). Long, demanding day of 10-12 hours. Overnight at 4,023m.'
        },
        {
          day: 'Day 6',
          title: 'Kitandara to Guy Yeoman Hut (3,505m)',
          description: 'Optional climb of Mount Baker (4,844m) if energy permits, then descend through scenic valleys to Guy Yeoman Hut. Pass beautiful lakes and alpine vegetation. 6km, 5-6 hours. Overnight at 3,505m.'
        },
        {
          day: 'Day 7',
          title: 'Guy Yeoman to Nyabitaba Hut (2,651m)',
          description: 'Descend through the heather and bamboo zones, retracing earlier paths. 8km, 5-6 hours. Final night on the mountain at Nyabitaba Hut. Overnight at 2,651m.'
        },
        {
          day: 'Day 8',
          title: 'Nyabitaba to Nyakalengija & Departure',
          description: 'Final descent through montane forest to the park gate. 7km, 4-5 hours. Meet your vehicle for transfer back to your hotel for a well-deserved hot shower and comfortable bed.'
        }
      ],
      included: [
        'Experienced mountain guides',
        'Porters to carry equipment and supplies',
        'All park entrance fees and permits',
        'Mountain hut accommodation',
        'All meals on the mountain',
        'Technical climbing equipment (ropes, ice axes, crampons)',
        'Emergency rescue insurance',
        'Purified drinking water',
        'Cook and cooking equipment'
      ],
      excluded: [
        'International flights and visas',
        'Hotel accommodation before/after trek',
        'Personal trekking gear (boots, clothing, sleeping bag)',
        'Travel insurance',
        'Tips for guides and porters',
        'Personal expenses',
        'Alcoholic beverages',
        'Items not specified in inclusions'
      ],
      duration: '7-9 Days',
      difficulty: 'Challenging',
      price: 'Contact for pricing',
      rating: '4.9',
      reviews: 67,
      bestTime: 'January-February and June-September offer the best conditions with less rainfall. However, be prepared for challenging weather at any time of year.',
      whatToBring: [
        'Sturdy, waterproof hiking boots',
        'Warm sleeping bag (rated to -10°C)',
        'Waterproof jacket and trousers',
        'Thermal base layers',
        'Fleece or insulated jacket',
        'Warm hat and gloves',
        'Gaiters for snow and mud',
        'Trekking poles',
        'Headlamp with extra batteries',
        'Sunglasses and sun protection',
        'Personal first aid kit',
        'Water purification tablets',
        'High-energy snacks',
        'Camera and extra batteries'
      ]
    },
    'bwindi-gorilla-trekking': {
      title: 'Gorilla Trekking in Bwindi Impenetrable National Park',
      tagline: 'Encounter Mountain Gorillas in Ancient Rainforest',
      location: 'Bwindi Impenetrable National Park',
      category: 'Wildlife Safari',
      description: 'Experience the magic of encountering mountain gorillas in their natural habitat within Bwindi Impenetrable National Park, a UNESCO World Heritage Site that has remained largely unchanged for over 25,000 years. Home to nearly half the world\'s remaining mountain gorilla population, this extraordinary journey combines thrilling gorilla tracking with profound wildlife encounters.',
      fullDescription: `Bwindi Impenetrable National Park protects one of Africa's most biologically diverse forests and serves as the sanctuary for nearly half of the world's remaining mountain gorillas. This UNESCO World Heritage Site encompasses 331 square kilometers of ancient rainforest that clings to steep mountain slopes in southwestern Uganda, creating a mist-shrouded realm where encountering gorillas feels like stepping into a David Attenborough documentary.

The park is home to approximately 459 mountain gorillas living in over 50 family groups. Thirteen of these groups have been habituated to human presence, allowing visitors the privilege of spending one magical hour observing these gentle giants as they feed, play, groom, and interact. Gorilla trekking in Bwindi ranks among the world's most extraordinary wildlife experiences - few encounters match the profound emotion of making eye contact with a massive silverback or watching playful juveniles tumble through the undergrowth just meters away.

Your trek begins with a briefing from experienced rangers who explain gorilla behavior, trekking etiquette, and safety protocols. The hike to locate gorillas can take anywhere from 30 minutes to 6+ hours depending on where the family spent the previous night. Trackers who set out at dawn to locate the gorillas communicate their position via radio, guiding your group through the dense forest.

The forest itself captivates with its primeval atmosphere. Ancient trees draped in vines and epiphytes create a multi-layered canopy. Sunlight filters through leaves in shifting patterns, illuminating rare orchids and tree ferns. Listen for the calls of Albertine Rift endemic birds including the African green broadbill and Shelley's crimsonwing. Watch for other primates - L'Hoest's monkeys, black-and-white colobus, and red-tailed monkeys inhabit different forest strata.

The moment you encounter gorillas, all fatigue from the trek dissolves. The silverback, weighing up to 200kg, maintains calm authority over his family. Females tend to youngsters while adolescents test boundaries through play. You'll observe complex social dynamics, communication through grunts and gestures, and behaviors that mirror human families. Photographers have opportunities for incredible images, though the experience itself will be seared into memory.

Beyond gorilla trekking, Bwindi offers cultural encounters with Batwa pygmies, the forest's original inhabitants. Their traditional knowledge of medicinal plants, hunting techniques, and forest ecology provides insights into sustainable relationships with the environment. Nature walks to Munyaga Waterfall or through community trails reveal additional layers of the park's natural and cultural heritage.`,
      heroImage: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1600',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
      highlights: [
        'Mountain gorilla family encounters in natural rainforest habitat',
        'Trek through 25,000-year-old ancient Bwindi forest ecosystem',
        'Observe 23 Albertine Rift endemic bird species',
        'Batwa cultural experience with forest\'s original inhabitants',
        'Hike to spectacular 33-meter Munyaga Waterfall',
        'Direct contribution to mountain gorilla conservation',
        'Expert guides and gorilla tracking permits',
        'All park fees and accommodation'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Transfer to Bwindi Impenetrable National Park',
          description: 'Depart Kampala or Entebbe early morning for the 8-9 hour scenic drive to Bwindi through Uganda\'s beautiful countryside. Stop at the Equator monument for photos and continue through terraced hills and banana plantations. Arrive at your lodge near the park in the late afternoon. Evening briefing about gorilla trekking protocols and what to expect. Dinner and overnight near the park.'
        },
        {
          day: 'Day 2',
          title: 'Gorilla Trekking Experience',
          description: 'Early breakfast, then transfer to the park headquarters for 7:30am briefing. Meet your ranger guides and tracking team before setting off into the forest. Trek duration varies from 2-8 hours depending on gorilla location. Spend one unforgettable hour with the gorilla family, observing their behaviors, social interactions, and daily routines. Return to the lodge for lunch and relaxation. Optional afternoon visit to Batwa community or village walk. Dinner and overnight.'
        },
        {
          day: 'Day 3',
          title: 'Optional Activities & Return to Kampala',
          description: 'Optional early morning nature walk to Munyaga Waterfall or birding in the forest (additional cost). After breakfast, begin the return journey to Kampala with lunch en route, arriving in the evening. Alternatively, extend your stay for additional gorilla trekking or other activities.'
        }
      ],
      included: [
        'Professional driver-guide',
        '4x4 safari vehicle',
        'Gorilla trekking permit ($700 value)',
        'All park entrance fees',
        '2 nights accommodation',
        'All meals during the safari',
        'Bottled water throughout',
        'Services of ranger guides and trackers',
        'Government taxes',
        'Certificate of participation after trek'
      ],
      excluded: [
        'International flights and Uganda visa',
        'Travel insurance',
        'Optional activities (waterfall hike, Batwa visit)',
        'Porter fees (highly recommended - $15)',
        'Tips for guides and staff',
        'Personal expenses and laundry',
        'Alcoholic beverages',
        'Items not mentioned in inclusions'
      ],
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$750 per person',
      rating: '4.9',
      reviews: 234,
      bestTime: 'June to September and December to February offer drier conditions, though gorillas can be trekked year-round. The wet seasons (March-May, October-November) offer lush forest scenery.',
      whatToBring: [
        'Sturdy waterproof hiking boots',
        'Long trousers and long-sleeved shirt',
        'Rain jacket (essential year-round)',
        'Gardening/work gloves for grabbing vegetation',
        'Wide-brimmed hat',
        'Daypack for water and snacks',
        'Insect repellent',
        'Camera (no flash allowed)',
        'Binoculars for birding',
        'Energy snacks and water',
        'Personal medications',
        'Porter tip money ($15-20)'
      ]
    },
    'kibale-chimp-tracking': {
      title: 'Chimpanzee Tracking in Kibale National Park',
      tagline: 'Primate Capital of the World',
      location: 'Kibale National Park',
      category: 'Wildlife Safari',
      description: 'Venture into the lush expanse of Kibale National Park, Uganda\'s premier destination for primate encounters and home to over 1,500 chimpanzees. This 795 square kilometer protected area contains East Africa\'s largest remaining tropical rainforest, supporting 13 primate species including habituated chimpanzee families.',
      fullDescription: `Kibale National Park stands as Uganda's premier primate-watching destination, protecting one of the most diverse ecosystems in Africa. This 795 square kilometer expanse of tropical rainforest harbors the highest concentration of primates in East Africa, earning its reputation as the "Primate Capital of the World." The park's 1,500+ chimpanzees represent our closest living relatives, sharing 98.7% of our DNA and displaying remarkably human-like behaviors.

Chimpanzee tracking in Kibale offers opportunities to observe these intelligent primates in their natural habitat as they engage in complex social interactions, tool use, and communication. Four habituated chimpanzee communities allow visitors to approach within meters, spending precious time watching them feed on figs, groom each other, play, and sometimes patrol territorial boundaries with impressive displays of strength and vocalizations that echo through the forest.

The tracking experience begins early morning when chimps are most active and vocal. Expert guides lead you along forest trails, listening for characteristic pant-hoots and following other clues like feeding remnants and knuckle prints. Once located, you'll spend one hour observing the community - watching young chimps swing through branches, mothers nursing infants, and dominant males maintaining social order. The chimpanzees' human-like expressions and behaviors create profound connections that deepen our understanding of our evolutionary heritage.

For those seeking a more immersive experience, the Chimpanzee Habituation Experience allows you to spend an extended day (6+ hours) with researchers as they habituate a semi-wild community to human presence. This provides insights into chimp behavior from dawn nest-leaving to evening nest-building, along with understanding the scientific process of habituation.

Beyond chimpanzees, Kibale hosts 12 other primate species including red colobus monkeys (endangered), L'Hoest's monkeys, black-and-white colobus, red-tailed monkeys, blue monkeys, grey-cheeked mangabeys, and the nocturnal potto and bushbaby. A single day in Kibale can yield sightings of 6-8 different primate species, each occupying distinct ecological niches.

The forest canopy walkway, suspended 25 meters above the ground, provides bird's-eye perspectives of the forest ecosystem and opportunities to observe canopy-dwelling species at eye level. Birdwatchers will find over 375 bird species including African grey parrots, great blue turaco, and the endemic Kibale ground thrush.

A visit to nearby Bigodi Wetland Sanctuary complements your Kibale experience with excellent birding, additional primate sightings, and community-based tourism that directly benefits local villages. The wetland boardwalk winds through papyrus swamps teeming with life - sitatungas, otters, butterflies, and an incredible diversity of birds.`,
      heroImage: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1600',
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800',
      highlights: [
        'Track over 1,500 chimpanzees across habituated family groups',
        'Observe 13 primate species in the "Primate Capital of the World"',
        'Explore East Africa\'s largest remaining mahogany forest',
        'Extended chimpanzee habituation experience available',
        'Bird watching and primate viewing in Bigodi Wetland',
        'Forest canopy walk with elevated rainforest perspectives',
        'Expert primate guides and tracking permits',
        'All park fees and accommodation'
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Transfer to Kibale National Park',
          description: 'Depart Kampala in the morning for the 5-hour scenic drive to Kibale National Park through Uganda\'s beautiful countryside, passing tea plantations and crater lakes. Stop in Fort Portal for lunch, then continue to your lodge near the park. Afternoon at leisure to relax or take an optional community walk. Evening briefing about chimpanzee tracking. Dinner and overnight.'
        },
        {
          day: 'Day 2',
          title: 'Chimpanzee Tracking & Bigodi Wetland',
          description: 'Early breakfast, then transfer to Kanyanchu Visitor Center for 7:30am briefing. Begin your chimpanzee tracking adventure through the lush rainforest, following calls and signs until you locate a habituated community. Spend one hour observing chimps as they feed, play, groom, and interact. Return to the lodge for lunch. Afternoon visit to Bigodi Wetland Sanctuary for birding and additional primate sightings including red colobus, black-and-white colobus, and blue monkeys. Return for dinner and overnight.'
        },
        {
          day: 'Day 3',
          title: 'Nature Walk & Return to Kampala',
          description: 'Optional early morning forest canopy walkway experience (additional cost) for bird watching and unique forest perspectives. After breakfast, begin the return journey to Kampala with lunch en route, arriving in the late afternoon.'
        }
      ],
      included: [
        'Professional driver-guide',
        '4x4 safari vehicle',
        'Chimpanzee tracking permit',
        'All park entrance fees',
        'Bigodi Wetland Sanctuary visit',
        '2 nights accommodation',
        'All meals during safari',
        'Bottled water throughout',
        'Services of ranger guides',
        'Government taxes'
      ],
      excluded: [
        'International flights and visa',
        'Travel insurance',
        'Chimpanzee Habituation Experience (optional upgrade)',
        'Canopy walkway fee (optional)',
        'Tips for guides and staff',
        'Personal expenses',
        'Alcoholic beverages',
        'Items not specified in inclusions'
      ],
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '$200 per person',
      rating: '4.8',
      reviews: 178,
      bestTime: 'December to February and June to September offer the best trekking conditions. However, Kibale is accessible year-round, and chimpanzees can be tracked in any season.',
      whatToBring: [
        'Waterproof hiking boots',
        'Long trousers tucked into socks',
        'Long-sleeved shirt',
        'Rain jacket (essential)',
        'Sun hat and sunscreen',
        'Insect repellent with DEET',
        'Daypack',
        'Camera (no flash)',
        'Binoculars for canopy viewing',
        'Water bottle and energy snacks',
        'Personal medications',
        'Light sweater for cool mornings'
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
