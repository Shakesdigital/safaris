import { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function DestinationsCarousel() {
  const sliderRef = useRef(null)

  const destinationSlides = [
    {
      image: '/images/FOr website/Murchison Falls.jpg',
      title: 'Murchison Falls National Park',
      description: 'Witness the Nile River explode through a narrow gorge, creating one of the world\'s most powerful waterfalls with incredible wildlife viewing opportunities.'
    },
    {
      image: '/images/FOr website/Elephant in Queen Elizabeth.jpg',
      title: 'Queen Elizabeth National Park',
      description: 'Discover tree-climbing lions, diverse ecosystems, and the famous Kazinga Channel boat safari in Uganda\'s most popular safari destination.'
    },
    {
      image: '/images/FOr website/53677709716_ab82ebce09_o.jpg',
      title: 'Mt Rwenzori',
      description: 'Climb the legendary Mountains of the Moon with snow-capped peaks at the equator—Africa\'s most challenging and rewarding trek.'
    },
    {
      image: '/images/FOr website/bwindi 1.jpg',
      title: 'Bwindi Impenetrable National Park',
      description: 'Home to half of the world\'s mountain gorillas. Experience an intimate encounter with these gentle giants in their natural rainforest habitat.'
    },
    {
      image: '/images/FOr website/IMG_7978.JPG',
      title: 'Mt Elgon',
      description: 'Explore an extinct volcano with the world\'s largest caldera, spectacular Sipi Falls, and diverse ecosystems from montane forest to afro-alpine moorland.'
    },
    {
      image: '/images/FOr website/Chimpanzee in Kibale.jpg',
      title: 'Kibale National Park',
      description: 'The primate capital of the world with 13 primate species. Track habituated chimpanzees through pristine tropical rainforest.'
    },
    {
      image: '/images/FOr website/Lake Mburo National Park.jpg',
      title: 'Lake Mburo National Park',
      description: 'Uganda\'s smallest savanna park offering intimate wildlife encounters. Perfect for walking safaris, horseback riding, and boat cruises.'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="slick-dot-custom bg-white opacity-60 hover:opacity-100 transition-opacity"></div>
    )
  }

  return (
    <div className="relative h-96 md:h-[28rem] w-full overflow-hidden rounded-2xl shadow-xl">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {destinationSlides.map((slide, index) => (
          <div key={index} className="relative h-96 md:h-[28rem]">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              style={{ position: 'absolute', top: 0, left: 0 }}
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 sm:p-8 z-10">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{slide.title}</h3>
                <p className="text-base sm:text-lg text-gray-200">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        :global(.slick-dots) {
          bottom: 20px !important;
        }

        :global(.slick-dots li) {
          margin: 0 6px !important;
        }

        :global(.slick-dots li button) {
          padding: 0 !important;
          width: 10px !important;
          height: 10px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        :global(.slick-dots li.slick-active button) {
          background: white !important;
          width: 14px !important;
          height: 14px !important;
        }

        :global(.slick-prev),
        :global(.slick-next) {
          width: 40px !important;
          height: 40px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
        }

        :global(.slick-prev:hover),
        :global(.slick-next:hover) {
          background: rgba(255, 255, 255, 0.6) !important;
        }

        :global(.slick-prev::before),
        :global(.slick-next::before) {
          font-size: 20px !important;
          color: white !important;
        }

        :global(.slick-prev) {
          left: 20px !important;
        }

        :global(.slick-next) {
          right: 20px !important;
        }
      `}</style>
    </div>
  )
}
