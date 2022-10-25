import PropTypes from 'prop-types'
import { Container, Image } from 'react-bootstrap'

const ImageBanner = ({src, ...rest}) => <Container {...rest}><Image data-testid="banner-image" src={src} fluid/></Container>

ImageBanner.propTypes = {
    src: PropTypes.string
}

export default ImageBanner
