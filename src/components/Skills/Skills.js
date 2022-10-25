import { Badge, Container, Row, Col } from "react-bootstrap"
import './Skills.css'

const skills = ['React', 'Jest', 'Node.js', 'C#', 'NUnit', 'Cypress', 'SQL', 'MongoDb', 'AWS', 'Jenkins']

const Skills = () => (
    <Container>
        <Row className="justify-content-center">
            <Col lg={4}>
                <h1 data-testid="skill-header" className="text-center">Skills</h1>
                <div className="text-center">
                    {skills.map((skill, key) => <Badge key={key} data-testid={`skill-${skill}`} bg="primary" pill className="skill-badge">{skill}</Badge>)}
                </div>
            </Col>
        </Row>
    </Container>
)

export default Skills
