import Image from 'next/image'
import ImageInterface from '../../interfaces/image'

const ImageContainer = ({ src, alt, width, height }: ImageInterface) => {
    return (
        <Image
            className="image-container"
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}

export default ImageContainer
