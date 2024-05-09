export const removeOverfloweHiddenFromBody = () => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.remove('overflow-hidden')
}

export const addOverfloweHiddenToBody = () => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.add('overflow-hidden')
}