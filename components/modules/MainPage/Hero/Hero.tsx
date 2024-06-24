'use client'
import React from 'react'
import { useLang } from '@/hooks/useLangs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper as SwiperTypes } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import img1 from '@/public/black-t.png'
import img2 from '@/public/orange-t.png'
import img3 from '@/public/violet-t.png'
import Styles from '@/styles/main-page/index.module.scss'
import HeroSlide from './HeroSlide'

export default function Hero() {
  const { lang, translations } = useLang()
  const descriptionSlicePosition = lang === 'ru' ? 5 : 2

  const slides = [
    {
      id: 1,
      title: `${translations[lang].main_page.tShirt} <<Line>> ${translations[lang].main_page.black}`,
      price: `${translations[lang].main_page.price}`,
      image: img1,
    },
    {
      id: 2,
      title: `${translations[lang].main_page.tShirt} <<Line>> ${translations[lang].main_page.orange}`,
      price: `${translations[lang].main_page.price}`,
      image: img2,
    },
    {
      id: 3,
      title: `${translations[lang].main_page.tShirt} <<Line>> ${translations[lang].main_page.violet}`,
      price: `${translations[lang].main_page.price}`,
      image: img3,
    }
  ]

  const handleSlideClick = (e: SwiperTypes) => e.slideTo(e.clickedIndex)

  return (
    <section className={Styles.hero}>
      <h1 className="visually-hidden">
        {translations[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${Styles.hero__container}`}>
        <span className={Styles.ad}>
          {translations[lang].common.ad}
        </span>
        <Swiper
          className={Styles.hero__slider}
          effect='coverflow'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          slidesPerView='auto'
          initialSlide={2}
          autoplay
          loop
          onClick={handleSlideClick}
          modules={[EffectCoverflow]}
          grabCursor
          centeredSlides
        >
          {
            slides.map((slide) => (
              <SwiperSlide className={Styles.hero__slider__slide} key={slide.id}>
                <HeroSlide slide={slide} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className={Styles.hero__subtitle}>
          <div className={Styles.hero__subtitle__rect} />
          <span>
            {translations[lang].main_page.hero_description.slice(0, descriptionSlicePosition)}
          </span>
          <br />
          <span>
            {translations[lang].main_page.hero_description.slice(descriptionSlicePosition)}
          </span>
        </div>
        <h2 className={Styles.hero__title}>
          <span className={`${Styles.hero__title__subtitle} ${lang === 'ru' ? '' : Styles.hero__title__subtitle__lang}`}>
            [ {translations[lang].main_page.hero_subtitle}]
          </span>
          <span className={Styles.hero__title__text}>
            {translations[lang].main_page.hero_title}
          </span>
        </h2>
      </div>
    </section >
  )
}
