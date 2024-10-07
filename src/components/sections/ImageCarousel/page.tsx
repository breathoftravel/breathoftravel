'use client'
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import {MutableRefObject, useEffect, useState} from "react";
import Image from "next/image";
import './style.css'

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }

    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}
interface IImage {
  src: string
  alt: string
}
interface IImageCarousel {
  images: IImage[]
}
export default function ImageCarousel({images}:IImageCarousel) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <>

      {
        isLoading ? (
          <div className="skeleton min-w-[500px] md:min-w-[1034px] min-h-[384px] md:min-h-[868px]"/>
        ) : (
          <>
            <div ref={sliderRef}
                 className="keen-slider">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className={`keen-slider__slide number-slide${index + 1}`}>
                    <Image
                      src={image.src}
                      alt={`Slide ${index + 1} image ${image.alt}`}
                      width={940}
                      height={788}
                      priority={true}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))
              ) : (
                numbers.map((number, index) => (
                  <div key={index} className={`keen-slider__slide number-slide${number}`}>
                    <Image
                      src={`/static/image/image-not-found.webp`}
                      alt={`Slide ${index + 1} image not found`}
                      width={940}
                      height={788}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))
              )}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className={`keen-slider__slide number-slide${index + 1}`}>
                    <Image
                      src={image.src}
                      alt={`Slide ${index + 1} image ${image.alt}`}
                      width={235}
                      height={194}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))
              ) : (
                numbers.map((number, index) => (
                  <div key={index} className={`keen-slider__slide number-slide${number}`}>
                    <Image
                      src={`/static/image/image-not-found.webp`}
                      alt={`Slide ${index + 1} image not found`}
                      width={235}
                      height={197}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))
              )}
            </div>
          </>
        )
      }
    </>
  )
}
