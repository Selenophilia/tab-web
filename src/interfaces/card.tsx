import { StaticImageData } from 'next/image'
import React from 'react'

interface Image {
    src?: string
    height?: number
    width?: number
}

export default interface Card {
    title?: string
    description?: string
    className?: string
    footerTitle?: string
    footer?: React.ReactNode | string
    subTitle?: string
    subDescription?: string
    withImage?: boolean
    img?: Image
}
