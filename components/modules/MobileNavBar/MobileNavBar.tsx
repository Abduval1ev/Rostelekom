'use client'
import Link from 'next/link'
import { closeCatalogMenu, openMenu, openCatalogMenu, closeMenu } from '@/context/madals'
import { useLang } from '@/hooks/useLangs'
import { addOverfloweHiddenToBody } from '@/lib/utils/common'
import CatalogMenu from '../Header/CatalogMenu'

export default function MobileNavBar() {

    const { lang, translations } = useLang()

    const handleOpenMenu = () => {
        addOverfloweHiddenToBody()
        openMenu()
        closeCatalogMenu()
    }

    const handleOpenCatalogMenu = () => {
        addOverfloweHiddenToBody('0')
        openCatalogMenu()
        closeMenu()

    }

    return (
        <>
            <CatalogMenu />
            <div className="mobile-navbar">
                <Link href='/' className='mobile-navbar__btn'>
                    {translations[lang].breadcrumbs.main}
                </Link>
                <button className='btn-reset mobile-navbar__btn' onClick={handleOpenCatalogMenu}>
                    {translations[lang].breadcrumbs.catalog}
                </button>
                <Link href='/favorites' className='mobile-navbar__btn'>
                    {translations[lang].breadcrumbs.favorites}
                </Link>
                <Link href='/cart' className='mobile-navbar__btn'>
                    {translations[lang].breadcrumbs.cart}
                </Link>
                <button className='btn-reset mobile-navbar__btn' onClick={handleOpenMenu}>
                    {translations[lang].common.more}
                </button>
            </div>
        </>
    )
}
