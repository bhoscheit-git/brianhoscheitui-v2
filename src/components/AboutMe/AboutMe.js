import PropTypes from 'prop-types'
import { Card, Row, Col, Container } from "react-bootstrap"
import { Pencil } from 'react-bootstrap-icons'
import { useAuthContext } from '../../context/AuthContext'
import './AboutMe.css'

const AboutMe = ({ lg, cardImg, cardTitle, cardText, isEditable, onEdit }) => {
    const { isAuthenticated } = useAuthContext()
    return (
        < Container className="about-me-container" >
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card>
                        <Row className="no-gutters">
                            <Col data-testid="card-img-col" md={12} lg={lg} className="my-auto">
                                <Card.Img data-testid="card-img" className="card-img-top" src={cardImg} />
                            </Col>
                            <Col data-testid="card-txt-col" md={12} lg={12 - lg}>
                                <Card.Body>
                                    <Row>
                                        <Col><Card.Title data-testid="card-title">{cardTitle}</Card.Title></Col>
                                        {isEditable && isAuthenticated && <Col style={{ textAlign: 'right' }}><Pencil data-testid="about-me-edit" style={{ marginBottom: '.5rem' }} onClick={onEdit} /></Col>}
                                    </Row>
                                    <Card.Text data-testid="card-text">{cardText}</Card.Text>
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
