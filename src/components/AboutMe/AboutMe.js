import { Card, Row, Col, Container } from "react-bootstrap"
import './AboutMe.css'

const AboutMe = () => (
    <Container className="about-me-container">
        <Row className="justify-content-center">
            <Col md={10} lg={8}>
                <Card>
                    <Row className="no-gutters">
                        <Col md={12} lg={6}>
                            <Card.Img data-testid="card-img" src="https://d33l0n8cnowg3h.cloudfront.net/brian_hoscheit_square.jpg" />
                        </Col>
                        <Col md={12} lg={6}>
                            <Card.Body>
                                <Card.Title data-testid="card-title">Hello, I'm Brian!</Card.Title>
                                <Card.Text data-testid="card-text">My name is Brian Hoscheit and I am a self taught software engineer working in the Philadelphia area. I have over 4 years experience in requirement gathering, architectural design, application development, and product delivery.</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </Container>
)

export default AboutMe
