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

export default function ImageCarousel() {
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
          <div className="skeleton min-w-[350px] md:min-w-[650px] min-h-[370px] md:min-h-[540px]"/> // Display skeleton while loading
        ) : (
          <>
            <div ref={sliderRef} className="keen-slider">
              {numbers.map((number, index) => (
                <div key={index} className={`keen-slider__slide number-slide${number}`}>
                  <Image
                    src={`/image-not-found.png`} // Adjust image path based on your directory structure
                    alt={`Slide ${index + 1} image`}
                    width={600} // Adjust image dimensions as needed
                    height={300}
                    className="object-cover w-full h-full" // Adjust image styling
                  />
                </div>
              ))}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {numbers.map((number, index) => (
                <div key={index} className={`keen-slider__slide number-slide${number}`}>
                  <Image
                    src={`/image-not-found.png`} // Adjust image path based on your directory structure
                    alt={`Slide ${index + 1} image`}
                    width={60} // Adjust image dimensions as needed
                    height={30}
                    className="object-cover w-full h-full" // Adjust image styling
                  />
                </div>
              ))}
            </div>
          </>
        )
      }
    </>
  )
}
