import Link from 'next/link'
import React from 'react'
import Styles from '@/styles/main-page/index.module.scss'
import { useLang } from '@/hooks/useLangs'

export const AllLinks = () => {
    const { lang, translations } = useLang()
    return (
        <Link href='/catalog' className={Styles.all}>
            <span />
            {translations[lang].common.all_link}
        </Link>
    )
}
