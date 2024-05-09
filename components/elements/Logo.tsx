import Link from 'next/link'
import React from 'react'
import logo from '@/public/img/logo.svg'
import Image from 'next/image'

export default function Logo() {
    return (
        <Link className='logo' href='/'>
            <Image className='logo__img' src={logo} alt="Rostelecom_logo" />
        </Link>
    )
}
