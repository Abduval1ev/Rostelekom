'use client'
import React from 'react'
import { useLang } from '@/hooks/useLangs'
import Logo from '@/components/elements/Logo'
import Link from 'next/link'
import Menu from './Menu'
import {
    openMenu,
    openSearchModal
} from '@/context/modals'
import {
    addOverfloweHiddenToBody
} from '@/lib/utils/common'
import CartPopup from './CartPopup/CartPopup'

export default function Header() {
    const { lang, translations } = useLang()

    const handleOpenMenu = () => {
        addOverfloweHiddenToBody()
        openMenu()
    }

    const handleOpenSearchModal = () => {
        openSearchModal()
        addOverfloweHiddenToBody()
    }

    return (
        <header className='header'>
            <div className="container header__container">
                <button className='btn-reset header__burger'
                    onClick={handleOpenMenu}>
                    {
                        translations[lang].header.menu_btn
                    }
                </button>
                <Menu />
                <div className="header__logo">
                    <Logo />
                </div>
                <ul className="header__links list-reset">
                    <li className='header__links__item'>
                        <button className='btn-reset header__links__item__btn header__links__item__btn--search'
                            onClick={handleOpenSearchModal}
                        >
                        </button>
                    </li>
                    <li className="header__links__item list-reset">
                        <Link
                            href='/favorites'
                            className='header__links__item__btn header__links__item__btn--favorites'
                        />
                    </li>
                    <li className='header__links__item'>
                        <Link
                            href='/comparison'
                            className='header__links__item__btn header__links__item__btn--compare'
                        />
                    </li>
                    <li className='header__links__item header__links__item--cart'>
                        <CartPopup />
                    </li>
                    <li className='header__links__item header__links__item--profile'>
                        <Link
                            href='/profile'
                            className='header__links__item__btn header__links__item__btn--profile'
                        />
                    </li>
                </ul>
            </div>
        </header>
    )
}
