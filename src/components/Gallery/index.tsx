import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type SlickButtonFixProps = {
  children: React.ReactNode
  currentSlide: React.ReactNode
  slideCount: number
}

const SlickButtonFix = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  ...props
}: SlickButtonFixProps) => <span {...props}>{children}</span>

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: (
    <SlickButtonFix currentSlide={undefined} slideCount={0}>
      <ArrowRight aria-label="next games" />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix currentSlide={undefined} slideCount={0}>
      <ArrowLeft aria-label="previous games" />
    </SlickButtonFix>
  )
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <Image
            width={295}
            height={165}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <S.ImageWrapper key={`gallery-${index}`}>
                <Image
                  src={item.src}
                  alt={item.label}
                  layout="fill"
                  objectFit="contain"
                />
              </S.ImageWrapper>
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
