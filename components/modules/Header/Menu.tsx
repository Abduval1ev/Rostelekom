import React from "react"
import { useUnit } from "effector-react"
import { AnimatePresence, motion } from "framer-motion"
import Logo from "@/components/elements/Logo"
import { AllowedLangs } from "@/constans/lang"
import { setLang } from "@/context/lang"
import { $menuIsOpen, closeMenu } from "@/context/modals"
import { useLang } from "@/hooks/useLangs"
import { removeOverfloweHiddenFromBody } from "@/lib/utils/common"
import Accordion from "../Accordion/Accordion"
import { usePathname } from "next/navigation"
import MenuLinkItem from "./MenuLinkItem"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import BuyersListItems from "./BuyersListItems"

export default function Menu() {
    const [showCatologList, setShowCatologList] = React.useState(false)
    const [showBuyersList, setShowBuyersList] = React.useState(false)
    const [showContactsList, setShowContactsList] = React.useState(false)
    const { lang, translations } = useLang()
    const menuIsOpen = useUnit($menuIsOpen)
    const pathname = usePathname()
    const isMedia800 = useMediaQuery(800)
    const isMedia640 = useMediaQuery(640)

    const handleSwitchLang = (lang: string) => {
        setLang(lang as AllowedLangs)
        localStorage.setItem('lang', JSON.stringify(lang))
    }

    const handleSwitchLangToRu = () => handleSwitchLang('ru')
    const handleSwitchLangToEn = () => handleSwitchLang('en')

    const handleShowCatalogList = () => {
        setShowCatologList(true)
        setShowBuyersList(false)
        setShowContactsList(false)
    }
    const handleShowBuyersList = () => {
        setShowCatologList(false)
        setShowBuyersList(true)
        setShowContactsList(false)
    }
    const handleShowContactsList = () => {
        setShowCatologList(false)
        setShowBuyersList(false)
        setShowContactsList(true)
    }

    const handleCloseMenu = () => {
        removeOverfloweHiddenFromBody()
        closeMenu()
    }

    const handleRedirectToCatalog = (path: string) => {
        if (pathname.includes('/catalog')) {
            window.history.pushState({ path }, '', path)
            window.location.reload()
        }
        handleCloseMenu()
    }

    const clothLinks = [
        {
            id: 1,
            text: translations[lang].comparison['t-shirts'],
            href: '/catalog/cloth?offset=0&type=t-shirts',
        },
        {
            id: 2,
            text: translations[lang].comparison['long-sleeves'],
            href: '/catalog/cloth?offset=0&type=long-sleeves',
        },
        {
            id: 3,
            text: translations[lang].comparison.hoodie,
            href: '/catalog/cloth?offset=0&type=hoodie',
        },
        {
            id: 4,
            text: translations[lang].comparison.outerwear,
            href: '/catalog/cloth?offset=0&type=outerwear',
        },
    ]

    const accessoriesLinks = [
        {
            id: 1,
            text: translations[lang].comparison.bags,
            href: '/catalog/accessories?offset=0&type=bags',
        },
        {
            id: 2,
            text: translations[lang].comparison.headdress,
            href: '/catalog/accessories?offset=0&type=headdress',
        },
        {
            id: 3,
            text: translations[lang].comparison.umbrella,
            href: '/catalog/accessories?offset=0&type=umbrella',
        },
    ]

    const souvenirsLinks = [
        {
            id: 1,
            text: translations[lang].comparison['business-souvenirs'],
            href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
        },
        {
            id: 2,
            text: translations[lang].comparison['promotional-souvenirs'],
            href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
        },
    ]

    const officeLinks = [
        {
            id: 1,
            text: translations[lang].comparison.notebook,
            href: '/catalog/office?offset=0&type=notebook',
        },
        {
            id: 2,
            text: translations[lang].comparison.pen,
            href: '/catalog/office?offset=0&type=pen',
        },
    ]

    return (
        <nav className={`nav-menu ${menuIsOpen ? "open" : "close"}`}>
            <div className="container nav-menu__container">
                <div className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}>
                    <Logo />
                </div>
                <img className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`} src={`/menu_bg${isMedia800 ? '_small' : ''}.png`} alt="menu background" />
                <button className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`} onClick={handleCloseMenu} />
                <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
                    <button
                        className={`btn-reset nav-menu__lang__btn 
                ${lang === 'ru' ? 'lang-active' : ''}`}
                        onClick={handleSwitchLangToRu}>
                        RU
                    </button>
                    <button
                        className={`btn-reset nav-menu__lang__btn 
                ${lang === 'en' ? 'lang-active' : ''}`}
                        onClick={handleSwitchLangToEn}>
                        EN
                    </button>
                </div>
                <ul className={`list-resett nav-menu__list ${menuIsOpen ? 'open' : ''}`}>
                    {
                        !isMedia800 && (
                            <li className='nav-menu__list__item'>
                                <button className='btn-reset nav-menu__list__item__btn'
                                    onMouseEnter={handleShowCatalogList}
                                >
                                    {
                                        translations[lang].main_menu.catalog
                                    }
                                </button>
                                <AnimatePresence>
                                    {showCatologList && (
                                        <motion.ul
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="list-reset nav-menu__accordion"
                                        >
                                            <li className="nav-menu__accordion__item">
                                                <Accordion
                                                    title={translations[lang].main_menu.cloth}
                                                    titleClass='btn-reset nav-menu__accordion__item__title'
                                                >
                                                    <ul className='list-reset nav-menu__accordion__item__list'>
                                                        {
                                                            clothLinks.map((item) => (
                                                                <MenuLinkItem
                                                                    key={item.id}
                                                                    item={item}
                                                                    handleRedirectToCatalog={handleRedirectToCatalog}
                                                                />
                                                            ))
                                                        }
                                                    </ul>
                                                </Accordion>
                                            </li>
                                            <li className="nav-menu__accordion__item">
                                                <Accordion
                                                    title={translations[lang].main_menu.accessories}
                                                    titleClass='btn-reset nav-menu__accordion__item__title'
                                                >
                                                    <ul className='list-reset nav-menu__accordion__item__list'>
                                                        {
                                                            accessoriesLinks.map((item) => (
                                                                <MenuLinkItem
                                                                    key={item.id}
                                                                    item={item}
                                                                    handleRedirectToCatalog={handleRedirectToCatalog}
                                                                />
                                                            ))
                                                        }
                                                    </ul>
                                                </Accordion>
                                            </li>
                                            <li className="nav-menu__accordion__item">
                                                <Accordion
                                                    title={translations[lang].main_menu.souvenirs}
                                                    titleClass='btn-reset nav-menu__accordion__item__title'
                                                >
                                                    <ul className='list-reset nav-menu__accordion__item__list'>
                                                        {
                                                            souvenirsLinks.map((item) => (
                                                                <MenuLinkItem
                                                                    key={item.id}
                                                                    item={item}
                                                                    handleRedirectToCatalog={handleRedirectToCatalog}
                                                                />
                                                            ))
                                                        }
                                                    </ul>
                                                </Accordion>
                                            </li>
                                            <li className="nav-menu__accordion__item">
                                                <Accordion
                                                    title={translations[lang].main_menu.office}
                                                    titleClass='btn-reset nav-menu__accordion__item__title'
                                                >
                                                    <ul className='list-reset nav-menu__accordion__item__list'>
                                                        {
                                                            officeLinks.map((item) => (
                                                                <MenuLinkItem
                                                                    key={item.id}
                                                                    item={item}
                                                                    handleRedirectToCatalog={handleRedirectToCatalog}
                                                                />
                                                            ))
                                                        }
                                                    </ul>
                                                </Accordion>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        )
                    }
                    <li className='nav-menu__list__item'>
                        {!isMedia640 && (
                            <button className='btn-reset nav-menu__list__item__btn'
                                onMouseEnter={handleShowBuyersList}
                            >
                                {
                                    translations[lang].main_menu.buyers
                                }
                            </button>
                        )}
                        <AnimatePresence>
                            {showBuyersList && (
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="list-reset nav-menu__accordion"
                                >
                                    <BuyersListItems />
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                    <li className='nav-menu__list__item'>
                        <button className='btn-reset nav-menu__list__item__btn'
                            onMouseEnter={handleShowContactsList}
                        >
                            {
                                translations[lang].main_menu.contacts
                            }
                        </button>
                        <AnimatePresence>
                            {showContactsList && (
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="list-reset nav-menu__accordion"
                                >
                                    <li className='nav-menu__accordion__item'>
                                        <a
                                            href='tel:+(998) (90) 064-28-09'
                                            className='nav-menu_accordion__item__link nav-menu__accordion__item__title'
                                        >
                                            tel:+(998) (90) 064-28-09
                                        </a>
                                    </li>
                                    <li className='nav-menu__accordion__item'>
                                        <a
                                            href='https://mail.google.com/mail/u/0/#inbox'
                                            className='nav-menu_accordion__item__link  nav-menu__accordion__item__title'
                                        >
                                            Email
                                        </a>
                                    </li>
                                    <li className='nav-menu__accordion__item'>
                                        <a
                                            href='https://t.me/abduvaliev_06'
                                            className='nav-menu_accordion__item__link nav-menu__accordion__item__title'
                                        >
                                            {translations[lang].main_menu.tg}
                                        </a>
                                    </li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                </ul>
            </div>
        </ nav >
    )
}
