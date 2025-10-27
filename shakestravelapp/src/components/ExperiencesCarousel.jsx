import { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ExperiencesCarousel() {
  const sliderRef = useRef(null)

  const experienceSlides = [
    {
      image: '/images/FOr website/Curated Adventures 3.jpg',
      title: 'Curated Safari Adventures',
      description: 'Experience expertly designed safaris that connect you deeply with Uganda\'s wildlife, culture, and natural landscapes.'
    },
    {
      image: '/images/FOr website/giraffe two safari.jpg',
      title: 'Wildlife Encounters',
      description: 'Get up close with Africa\'s iconic wildlife - from graceful giraffes to majestic elephants in their natural habitat.'
    },
    {
      image: '/images/FOr website/Helena favorite safari view.jpg',
      title: 'Scenic Safari Views',
      description: 'Discover breathtaking landscapes and unforgettable vistas across Uganda\'s most spectacular national parks.'
    },
    {
      image: '/images/FOr website/safari experiences.jpg',
      title: 'Complete Safari Experience',
      description: 'Immerse yourself in authentic safari experiences with expert guides and comfortable accommodations.'
    },
    {
      image: '/images/FOr website/safari experiences 2.jpg',
      title: 'Adventure Safari Journey',
      description: 'Embark on thrilling safari adventures through Uganda\'s most remote wilderness destinations.'
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
    <div className="relative h-screen md:h-[600px] w-full overflow-hidden" style={{ borderRadius: '0px' }}>
      <Slider ref={sliderRef} {...settings} className="h-full" style={{ borderRadius: '0px' }}>
        {experienceSlides.map((slide, index) => (
          <div key={index} className="relative h-screen md:h-[600px]" style={{ borderRadius: '0px' }}>
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
        :global(.slick-slider),
        :global(.slick-list),
        :global(.slick-track),
        :global(.slick-slide),
        :global(.slick-slide > div) {
          border-radius: 0 !important;
        }

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
          border: none !important;
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
          border: none !important;
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
