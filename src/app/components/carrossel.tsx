'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false }),
  )

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-14">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="overflow-hidden rounded-xl">
                <div className="flex h-[30rem] flex-col bg-[url('../../public/assets/image1.jpg')] bg-cover bg-center bg-no-repeat ">
                  <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                    <span className="block text-white">Nike React</span>
                    <span className="block text-xl text-white md:text-3xl">
                      Rewriting sports playbook for billions of athletes
                    </span>
                    <div className="mt-5">
                      <a
                        className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                        href="#"
                      >
                        Read Case Studies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="overflow-hidden rounded-xl shadow-lg shadow-black/30">
                <div className="flex h-[30rem] flex-col bg-[url('../../public/assets/image2.jpg')] bg-cover bg-center bg-no-repeat ">
                  <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                    <span className="block text-white">Nike React</span>
                    <span className="block text-xl text-white md:text-3xl">
                      Rewriting sports playbook for billions of athletes
                    </span>
                    <div className="mt-5">
                      <a
                        className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                        href="#"
                      >
                        Read Case Studies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="overflow-hidden rounded-xl shadow-lg shadow-black/30">
                <div className="flex h-[30rem] flex-col bg-[url('../../public/assets/image3.webp')] bg-cover bg-center bg-no-repeat ">
                  <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                    <span className="block text-white">Nike React</span>
                    <span className="block text-xl text-white md:text-3xl">
                      Rewriting sports playbook for billions of athletes
                    </span>
                    <div className="mt-5">
                      <a
                        className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                        href="#"
                      >
                        Read Case Studies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* </div> */}
      </div>
    </>
  )
}
