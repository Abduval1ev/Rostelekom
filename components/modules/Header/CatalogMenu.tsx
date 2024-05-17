'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useStore } from "effector-react"
import { $catalogMenuIsOpen, closeCatalogMenu } from "@/context/madals"
import { useLang } from "@/hooks/useLangs"
import { useMenuAnimation } from "@/hooks/useMenuAnimation"
import React from "react"
import Header from "./Header"
import { removeOverfloweHiddenFromBody } from "@/lib/utils/common"

export default function CatalogMenu() {

    const catalogMenuIsOpen = useStore($catalogMenuIsOpen)
    const [showClothList, setShowClothList] = React.useState(false)
    const [showAccessoriesList, setShowAccessoriesList] = React.useState(false)
    const [showSouvenirsList, setShowSouvenirsList] = React.useState(false)
    const [showOfficeList, setShowOfficeList] = React.useState(false)
    const { lang, translations } = useLang()
    const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
        2, catalogMenuIsOpen
    )

    const handleShowClothList = () => {
        setShowClothList(true)
        setShowAccessoriesList(false)
        setShowSouvenirsList(false)
        setShowOfficeList(false)
    }
    const handleShowAccessoriesList = () => {
        setShowClothList(false)
        setShowAccessoriesList(true)
        setShowSouvenirsList(false)
        setShowOfficeList(false)
    }
    const handleShowSouvenirsList = () => {
        setShowClothList(false)
        setShowAccessoriesList(false)
        setShowSouvenirsList(true)
        setShowOfficeList(false)
    }
    const handleShowOfficeList = () => {
        setShowClothList(false)
        setShowAccessoriesList(false)
        setShowSouvenirsList(false)
        setShowOfficeList(true)
    }
    const handleCloseMenu = () => {
        removeOverfloweHiddenFromBody()
        closeCatalogMenu()
        setShowClothList(false)
        setShowAccessoriesList(false)
        setShowSouvenirsList(false)
        setShowOfficeList(false)

    }

    const items = [
        {
            name: translations[lang].main_menu.cloth,
            id: 1,
            items: [
                translations[lang].comparison['t-shirts'],
                translations[lang].comparison['long-sleeves'],
                translations[lang].comparison.hoodie,
                translations[lang].comparison.outerwear,
            ],
            handler: handleShowClothList,
        },
        {
            name: translations[lang].main_menu.cloth,
            id: 2,
            items: [
                translations[lang].comparison['t-shirts'],
                translations[lang].comparison['long-sleeves'],
                translations[lang].comparison.hoodie,
                translations[lang].comparison.outerwear,
            ],
            handler: handleShowAccessoriesList,
        },
        {
            name: translations[lang].main_menu.cloth,
            id: 3,
            items: [
                translations[lang].comparison['t-shirts'],
                translations[lang].comparison['long-sleeves'],
                translations[lang].comparison.hoodie,
                translations[lang].comparison.outerwear,
            ],
            handler: handleShowSouvenirsList,
        },
        {
            name: translations[lang].main_menu.cloth,
            id: 4,
            items: [
                translations[lang].comparison['t-shirts'],
                translations[lang].comparison['long-sleeves'],
                translations[lang].comparison.hoodie,
                translations[lang].comparison.outerwear,
            ],
            handler: handleShowOfficeList,
        },
    ]

    return (
        <div className="catalog-menu" style={{ zIndex: popupZIndex }}>
            <AnimatePresence>
                {
                    catalogMenuIsOpen &&
                    <motion.aside
                        className="catalog-menu__aside"
                        initial={{ width: 0 }}
                        animate={{ width: 300, }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.7, duration: 0.3 },
                        }}
                    >
                        <div className="catalog-menu__header">
                            <Header />
                        </div>
                        <motion.div
                            className="catalog-menu__inner"
                            initial='closed'
                            animate='open'
                            exit='closed'
                            variants={sideVariants}
                        >
                            <img
                                className="catalog-menu__bg"
                                src="/img/menu_bg_small.png"
                                alt="menu background"
                            />
                            <motion.button
                                className="btn-reset catalog-menu__close"
                                variants={itemVariants}
                                onClick={handleCloseMenu}
                            />
                            <motion.h2
                                className="catalog-menu__title"
                                variants={itemVariants}
                            >
                                {translations[lang].main_menu.catalog}
                            </motion.h2>
                        </motion.div>
                    </motion.aside>
                }
            </AnimatePresence>
        </div>
    )
}
