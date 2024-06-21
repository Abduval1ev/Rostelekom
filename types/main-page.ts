import { StaticImageData } from "next/image";

export interface IHeroSlide {
    id?: number
    image: StaticImageData
    title: string
    price: string
}

export type IHeroSlideTooltip = IHeroSlide