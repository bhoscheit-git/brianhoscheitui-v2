import PropTypes from 'prop-types'
import { Card, Row, Col, Container } from "react-bootstrap"
import './AboutMe.css'

const AboutMe = ({ lg, cardImg, cardTitle, cardText }) => (
    <Container className="about-me-container">
        <Row className="justify-content-center">
            <Col md={10} lg={8}>
                <Card>
                    <Row className="no-gutters">
                        <Col data-testid="card-img-col" md={12} lg={lg} className="my-auto">
                            <Card.Img data-testid="card-img" className="card-img-top" src={cardImg} />
                        </Col>
                        <Col data-testid="card-txt-col" md={12} lg={12 - lg}>
                            <Card.Body>
                                <Card.Title data-testid="card-title">{cardTitle}</Card.Title>
                                <Card.Text data-testid="card-text">{cardText}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </Container>
)

AboutMe.propTypes = {
    lg: PropTypes.number,
    cardImg: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string
}

AboutMe.defaultProps = {
    lg: 6
}

export default AboutMe
