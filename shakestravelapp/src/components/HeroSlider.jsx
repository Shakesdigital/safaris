import { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function HeroSlider() {
  const sliderRef = useRef(null)

  const heroSlides = [
    {
      image: '/images/FOr%20website/lions%20in%20the%20tree.jpg',
      title: 'Tree-Climbing Lions',
      description: 'Experience the majesty of lions lounging in acacia trees—a rare and unforgettable safari moment.'
    },
    {
      image: '/images/FOr%20website/kid%20gooorillas.jpg',
      title: 'Young Mountain Gorillas',
      description: 'Encounter endangered mountain gorillas in their natural habitat—a humbling and intimate wildlife experience.'
    },
    {
      image: '/images/FOr%20website/giraffe%20two%20safari.jpg',
      title: 'Graceful Giraffes',
      description: 'Watch these magnificent creatures roam the African savanna with elegant, towering movements.'
    },
    {
      image: '/images/FOr%20website/Elephant%20close%20view.jpg',
      title: 'Majestic Elephants',
      description: 'Get up close to Africa\'s largest land animals in their natural environment—a powerful safari experience.'
    },
    {
      image: '/images/FOr%20website/cool%20safari%20cars%20image.jpg',
      title: 'Safari Adventure',
      description: 'Explore the African wilderness in style with expert guides and comfortable safari vehicles.'
    },
    {
      image: '/images/FOr%20website/Gorillas%20with%20baby.jpg',
      title: 'Gorilla Family Bonds',
      description: 'Witness the tender moments between mother gorillas and their young in Bwindi Impenetrable Forest.'
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
    <div className="relative h-screen w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {heroSlides.map((slide, index) => (
          <div key={index} className="h-screen relative">
            <div
              className="h-full w-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}')`,
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 sm:p-12">
                <div className="container mx-auto px-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">{slide.title}</h3>
                  <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        :global(.slick-dots) {
          bottom: 30px !important;
        }

        :global(.slick-dots li) {
          margin: 0 8px !important;
        }

        :global(.slick-dots li button) {
          padding: 0 !important;
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        :global(.slick-dots li.slick-active button) {
          background: white !important;
          width: 16px !important;
          height: 16px !important;
        }

        :global(.slick-prev),
        :global(.slick-next) {
          width: 50px !important;
          height: 50px !important;
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
          font-size: 24px !important;
          color: white !important;
        }

        :global(.slick-prev) {
          left: 30px !important;
        }

        :global(.slick-next) {
          right: 30px !important;
        }
      `}</style>
    </div>
  )
}
