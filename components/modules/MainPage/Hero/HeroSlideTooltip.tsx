import React from 'react'
import Image from 'next/image'
import { IHeroSlideTooltip } from '@/types/main-page'
import Styles from '@/styles/main-page/index.module.scss'

const HeroSlideTooltip = ({ title, image, price }: IHeroSlideTooltip) => (
    <div className={`${Styles.hero__slider__slide__popup} slide-popup`}>
        <span className={Styles.hero__slider__popup__arrow} />
        <Image
            className={Styles.hero__slider__slide__popup__img}
            src={image}
            alt={title}
        />
        <p className={Styles.hero__slider__slide__popup__inner}>
            <b className={Styles.hero__slider__slide__popup__title}>{title}</b>
            <span className={Styles.hero__slider__slide__popup__price}>{price}</span>
        </p>
    </div>
)

export default HeroSlideTooltip