'use client'
import { AllLinks } from "@/components/elements/AllLinks/AllLinks"
import useImagePreloader from "@/hooks/useImagePreloader"
import { useLang } from "@/hooks/useLangs"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import img1 from '@/public/img/categories-1.svg'
import img2 from '@/public/img/categories-4.svg'
import img3 from '@/public/img/categories-2.svg'
import img4 from '@/public/img/categories-3.svg'

import Styles from '@/styles/main-page/index.module.scss'
import Image from "next/image"
import Link from "next/link"

const Categories = () => {
    const { lang, translations } = useLang()
    const isMediaQuery = useMediaQuery(490)
    const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
    const imgSnipperClass = imgSpinner ? Styles.img_loading : ""


    return (
        <section className={Styles.categories}>
            <div className={`container ${Styles.categories__container}`}>
                <h2 className={`site-title ${Styles.categories__title}`}>
                    {translations[lang].main_page.category_title}
                </h2>
                <div className={Styles.categories__inner}>
                    <AllLinks />
                    {!isMediaQuery && <>
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
                </div>
            </div >
        </section >
    )
}

export default Categories