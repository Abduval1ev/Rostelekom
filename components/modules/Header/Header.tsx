'use client'
import React from 'react'
import { useLang } from '@/hooks/useLangs'
import Logo from '@/components/elements/Logo'
import Link from 'next/link'
import Menu from './Menu'
import { openMenu } from '@/context/madals'
import { addOverfloweHiddenToBody } from '@/lib/utils/common'

export default function Header() {

    const { lang, translations } = useLang()

    const handleOpenMenu = () => {
        addOverfloweHiddenToBody()
        openMenu()
    }
    return (
        <header className='header'>
            <div className="container header__container">
                <button className='btn-reset header__burger' onClick={handleOpenMenu}>
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
                        <button className='btn-reset header__links__item__btn header__links__item__btn--search'>
                        </button>
                    </li>
                    <li className="header__links list-reset">
                        <Link
                            href='/favorites'
                            className='header__links__item__btn header__links__item__btn--favorites'
                        />
                    </li>
                    <li>
                        <Link
                            href='/comparison'
                            className='header__links__item__btn header__links__item__btn--compare'
                        />
                    </li>
                    <li className='header__links__item header__links__item--cart'>
                        <Link
                            href='/cart'
                            className='header__links__item__btn header__links__item__btn--cart'
                        />
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
