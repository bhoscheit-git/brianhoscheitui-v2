import PropTypes from 'prop-types'
import { useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap"
import { Pencil } from 'react-bootstrap-icons'
import { useAuthContext } from '../../context/AuthContext'
import ImagePlaceholder from '../Placeholder/ImagePlaceholder'
import TextPlaceholder from '../Placeholder/TextPlaceholder'
import './AboutMe.css'

const AboutMe = ({ lg, isLoading, cardImg, cardTitle, cardText, isEditable, onEdit }) => {
    const { isAuthenticated } = useAuthContext()
    const [isImageLoading, setIsImageLoading] = useState(true)
    return (
        < Container className="about-me-container" >
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card>
                        <Row className="no-gutters">
                            <Col data-testid="card-img-col" md={12} lg={lg} className="my-auto">
                                <ImagePlaceholder isLoading={isLoading || isImageLoading} aspectRatio="3005 / 3006">
                                    <Card.Img data-testid="card-img" className="card-img-top" src={cardImg} onLoad={() => setIsImageLoading(false)} />
                                </ImagePlaceholder>

                            </Col>
                            <Col data-testid="card-txt-col" md={12} lg={12 - lg}>
                                <Card.Body>
                                    <TextPlaceholder isLoading={isLoading || isImageLoading} rows={5}>
                                        <Row>
                                            <Col><Card.Title data-testid="card-title">{cardTitle}</Card.Title></Col>
                                            {isEditable && isAuthenticated && <Col style={{ textAlign: 'right' }}><Pencil data-testid="about-me-edit" style={{ marginBottom: '.5rem' }} onClick={onEdit} /></Col>}
                                        </Row>
                                        <Card.Text data-testid="card-text">{cardText}</Card.Text>
                                    </TextPlaceholder>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}


AboutMe.propTypes = {
    lg: PropTypes.number,
    cardImg: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    isEditable: PropTypes.bool,
    onEdit: PropTypes.func
}

AboutMe.defaultProps = {
    lg: 6
}

export default AboutMe
