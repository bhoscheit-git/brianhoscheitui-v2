import PropTypes from 'prop-types'
import { Card, Row, Col, Container } from "react-bootstrap"
import './AboutMe.css'

const AboutMe = ({cardImg, cardTitle, cardText}) => (
    <Container className="about-me-container">
        <Row className="justify-content-center">
            <Col md={10} lg={8}>
                <Card>
                    <Row className="no-gutters">
                        <Col md={12} lg={6}>
                            <Card.Img data-testid="card-img" className="card-img-top" src={cardImg} />
                        </Col>
                        <Col md={12} lg={6}>
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
    cardImg: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string
}

export default AboutMe
