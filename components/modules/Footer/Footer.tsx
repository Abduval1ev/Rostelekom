import React from 'react'
import { useLang } from '@/hooks/useLangs'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { FooterLinks } from './FooterLinks'
import Logo from '@/components/elements/Logo'
import Link from 'next/link'
import FooterMobileLink from './FooterMobileLink'

export const Footer = () => {
    const { lang, translations } = useLang()
    const isMedia950 = useMediaQuery(950)
    const isMedia640 = useMediaQuery(640)

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__top__container">
                    <div className="footer__logo">
                        <Logo />
                    </div>
                    <div className="footer__contacts">
                        <span>
                            <a href='tel:+75000000000'>+7 (500) 000-00-00</a>
                        </span>
                        <span>
                            <a href="mailto:rostelecom.merc@rt.ru">rostelecom.merc@rt.ru</a>
                        </span>
                        {/* {isMedia950 && <FooterLinks />} */}
                    </div>
                    {/* {isMedia950 && <FooterLinks />} */}
                    <ul className='list-reset footer__socials'>
                        <li className='footer__socials__item'>
                            <a
                                href="https://t.me/abduvaliev_06"
                                className='footer__socials__item__link'
                            />
                        </li>
                        <li className='footer__socials__item'>
                            <a
                                href="#!"
                                className='footer__socials__item__link'
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container footer__bottom__container">
                    <div className="footer__copyright">
                        2024 OOO {translations[lang].footer.copyright}
                        <br />
                        (18+)
                    </div>
                    <div className="footer__policy">
                        <div className="footer__policy__inner">
                            <Link
                                href='/data-processing-policy'
                            >
                                {translations[lang].footer.policy}
                            </Link>
                            <Link
                                href='/privace-policy'
                            >
                                {translations[lang].footer.privacy}
                            </Link>
                        </div>
                        {isMedia640 && (
                            <FooterMobileLink text={translations[lang].footer.full_version} />
                        )}
                    </div>
                    {!isMedia640 && (
                        <FooterMobileLink text={translations[lang].footer.mobile_version} />
                    )}
                </div>
            </div>
        </footer>
    )
}
