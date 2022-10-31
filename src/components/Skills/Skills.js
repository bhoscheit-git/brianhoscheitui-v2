import { Badge, Container, Row, Col } from "react-bootstrap"
import { useAppContext } from "../../context/AppContext"
import './Skills.css'

const Skills = () => {
    const { person } = useAppContext()
    const { skills } = person ?? {}
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <h1 data-testid="skill-header" className="text-center">Skills</h1>
                    <div data-testid="skills-badge-container" className="text-center">
                        {skills?.map((skill, key) => <Badge key={key} data-testid={`skill-${skill}`} bg="primary" pill className="skill-badge">{skill}</Badge>)}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
