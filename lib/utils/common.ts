import { closeSearchModal } from "@/context/modals"

export const removeOverfloweHiddenFromBody = () => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.remove('overflow-hidden')
}

export const addOverfloweHiddenToBody = (paddingRight = '') => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.add('overflow-hidden')
    paddingRight && (body.style.paddingRight = paddingRight)
}

export const getWindowWidth = () => {
    const { innerWidth: windowWidth } =
        typeof window !== 'undefined' ? window : { innerWidth: 0 }
    return { windowWidth }
}

export const handleCloseSearchModal = () => {
    closeSearchModal()
    removeOverfloweHiddenFromBody()
}