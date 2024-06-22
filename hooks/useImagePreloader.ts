'use client'
import React from "react";

const useImagePreloader = () => {
    const [imgSpinner, setImgSpinner] = React.useState(true)

    const handleLoadingImageComplete = async (
        img: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        img.currentTarget.classList.remove('opacity-0')
        setImgSpinner(false)
    }
    return { handleLoadingImageComplete, imgSpinner }
}
export default useImagePreloader