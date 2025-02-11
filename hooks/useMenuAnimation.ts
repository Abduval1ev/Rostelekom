import React, { useEffect } from "react"

export const useMenuAnimation = (zIndex: number, popupIsOpen: boolean) => {
    const [popupZIndex, setPopupZIndex] = React.useState<string | number>(0)

    const itemVariants = {
        closed: {
            opacity: 0,
        },
        open: {
            opacity: 1
        }
    };

    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.01,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
            }
        }
    }

    useEffect(() => {
        if (popupIsOpen) {
            setPopupZIndex(zIndex)
            return
        }

        const timeId = setTimeout(() => setPopupZIndex('-1'), 1000)
        return () => clearTimeout(timeId)
    }, [popupIsOpen, zIndex])

    return { popupZIndex, itemVariants, sideVariants }
}