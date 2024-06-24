'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useImagePreloader from "@/hooks/useImagePreloader"
import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
import Styles from '@/styles/main-page/index.module.scss'
import { useEffect } from 'react'

const MainSlider = ({
    images,
}: {
    images: {
        id: number
        title: string
        src: StaticImageData
    }[]
}) => {
    const isMedia420 = useMediaQuery(420)
    const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
    const imageSpinnerClass = imgSpinner ? Styles.img_loading : ''
    const settings = {
        dots: false,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        speed: 500,
        arrows: false
    }

    useEffect(() => {
        const slider = document.querySelectorAll(`.${Styles.categories__slider}`)

        slider.forEach((obj) => {
            const list = obj.querySelector('.slick-list') as HTMLElement
            if (list) {
                list.style.height = isMedia420 ? '290px' : '375px'
                list.style.marginRight = isMedia420 ? '0' : '-15px'
            }
        })
    }, [isMedia420])

    return (
        <Slider {...settings} className={Styles.categories__slider}>
            {
                images.map((obj) => (
                    <Link
                        key={obj.id}
                        style={{ width: isMedia420 ? 290 : 357 }}
                        className={`${Styles.categories__slider} ${Styles.categories__img} ${imageSpinnerClass}`}
                        href='/catalog'
                    >
                        <Image
                            src={obj.src}
                            alt={obj.title}
                            width={357}
                            height={357}
                            onLoad={handleLoadingImageComplete}
                        />
                        <span>{obj.title.replace(/\s/g, '\u00A0')}</span>
                    </Link>
                ))
            }
        </Slider>
    )

}

export default MainSlider