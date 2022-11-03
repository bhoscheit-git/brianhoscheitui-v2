import PropTypes from 'prop-types'
import { useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import ImagePlaceholder from '../Placeholder/ImagePlaceholder/ImagePlaceholder'

const ImageBanner = ({ src, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <Container {...rest}>
            <ImagePlaceholder isLoading={isLoading} aspectRatio="4415/1598">
                <Image data-testid="banner-image" src={src} fluid onLoad={() => setIsLoading(false)} />
            </ImagePlaceholder>
        </Container>
    )
}
ImageBanner.propTypes = {
    src: PropTypes.string
}

export default ImageBanner
