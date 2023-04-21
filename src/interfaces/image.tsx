import { StaticImageData } from 'next/image'

export default interface Image {
    src: string | StaticImageData
    alt: string
    width?: number
    height?: number
}
