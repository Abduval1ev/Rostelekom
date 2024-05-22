'use client'
import React from "react"
import Header from "../modules/Header/Header"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { handleCloseSearchModal } from "@/lib/utils/common"
import { $searchModal } from "@/context/modals"
import MobileNavBar from "../modules/MobileNavBar/MobileNavBar"
import { AnimatePresence, motion } from "framer-motion"
import { SearchModal } from "../modules/Header/SearchModal"
import { useUnit } from "effector-react"

const Layout = ({ children }: {
    children: React.ReactNode
}) => {

    const isMedia800 = useMediaQuery(800)
    const searchModal = useUnit($searchModal)

    return (
        <>
            <Header />
            {children}
            {isMedia800 &&
                <MobileNavBar />
            }
            <AnimatePresence>
                {searchModal && (
                    <motion.div
                        initial={{ opacity: 0, zIndex: 102 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <SearchModal />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={`header__search-overlay 
            ${searchModal ?
                    'overlay-active' : ''}`}
                onClick={handleCloseSearchModal}
            />
            <div className=""></div>
        </>
    )
}

export default Layout