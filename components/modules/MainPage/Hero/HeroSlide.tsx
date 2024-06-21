import Link from 'next/link'
import React from 'react'
import HeroSlideTooltip from './HeroSlideTooltip';
import Image from 'next/image';
import { IHeroSlide } from '@/types/main-page';
import Styles from "@/styles/main-page/index.module.scss";

export default function HeroSlide({ slide }: { slide: IHeroSlide }) {
    return (
        <>
            <Link href='/catalog' className='hero__slide__plus'>
                <Image
                    src={slide.image}
                    alt={slide.title}
                    className={Styles.hero__slider__slide__img}
                />
                <HeroSlideTooltip title={slide.title} price={slide.price} image={slide.image} />
            </Link>
        </>
    )
}
