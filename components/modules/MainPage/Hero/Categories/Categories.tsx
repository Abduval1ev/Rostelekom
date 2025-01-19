'use client'
import { AllLinks } from "@/components/elements/AllLinks/AllLinks"
import useImagePreloader from "@/hooks/useImagePreloader"
import { useLang } from "@/hooks/useLangs"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import img1 from '@/public/categories-1.svg'
import img2 from '@/public/categories-4.svg'
import img3 from '@/public/categories-2.svg'
import img4 from '@/public/categories-3.svg'

import Styles from '@/styles/main-page/index.module.scss'
import Image from "next/image"
import Link from "next/link"
import MainSlider from "../../MainSlider"

const Categories = () => {
    const { lang, translations } = useLang()
    const isMediaQuery490 = useMediaQuery(490)
    const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
    const imgSnipperClass = imgSpinner ? Styles.img_loading : ""

    const images = [
        {
            id: 1,
            title: translations[lang].main_page.category_cloth,
            src: img1,
        },
        {
            id: 2,
            title: translations[lang].main_page.category_accessories,
            src: img2,
        },
        {
            id: 3,
            title: translations[lang].main_page.category_souvenirs,
            src: img3,
        },
        {
            id: 4,
            title: translations[lang].main_page.category_office,
            src: img4,
        },
    ]

    return (
        <section className={Styles.categories}>
            <div className={`container ${Styles.categories__container}`}>
                <h2 className={`site-title ${Styles.categories__title}`}>
                    {translations[lang].main_page.category_title}
                </h2>
                <div className={Styles.categories__inner}>
                    <AllLinks />
                    {!isMediaQuery490 && <>
                        <Link
                            href='/catalog/cloth'
                            className={`${Styles.categories__right} ${Styles.categories__img} ${imgSnipperClass}`}
                        >
                            <Image
                                src={img1}
                                alt="Cloth"
                                className="transition-opacity opacity-0 duration"
                                onLoad={handleLoadingImageComplete}
                            />
                            <span>{translations[lang].main_page.category_cloth}</span>
                        </Link>
                        <div className={Styles.categories__left}>
                            <div className={Styles.categories__left__top}>
                                <Link
                                    href='/catalog/accessories'
                                    className={`${Styles.categories__left__top__right} ${Styles.categories__img} ${imgSnipperClass}`}
                                >
                                    <Image
                                        src={img2}
                                        alt="Accessories"
                                        className="transition-opacity opacity-0 duration"
                                        onLoad={handleLoadingImageComplete}
                                    />
                                    <span>{translations[lang].main_page.category_accessories}</span>

                                </Link>
                                <Link
                                    href='/catalog/souvenirs'
                                    className={`${Styles.categories__left__top__right} ${Styles.categories__img} ${imgSnipperClass}`}
                                >
                                    <Image
                                        src={img3}
                                        alt="Souvenirs"
                                        className="transition-opacity opacity-0 duration"
                                        onLoad={handleLoadingImageComplete}
                                    />
                                    <span>{translations[lang].main_page.category_souvenirs}</span>

                                </Link>
                            </div>
                            <Link
                                href='/catalog/office'
                                className={`${Styles.categories__left__top__right} ${Styles.categories__img} ${imgSnipperClass}`}
                            >
                                <Image
                                    src={img4}
                                    alt="Office"
                                    className="transition-opacity opacity-0 duration"
                                    onLoad={handleLoadingImageComplete}
                                />
                                <span>{translations[lang].main_page.category_office}</span>
                            </Link>
                        </div>
                    </>}
                    {isMediaQuery490 && <MainSlider images={images} />}
                </div>
            </div >
        </section >
    )
}

export default Categories