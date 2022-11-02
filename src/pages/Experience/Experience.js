import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../../components/AboutMe";
import UpdateExperienceModal from '../../components/UpdateExperienceModal'
import { useExperienceContext } from "../../context/ExperienceContext";
import { PlusCircle } from 'react-bootstrap-icons'
import { useAuthContext } from "../../context/AuthContext";

const Experience = () => {
    const { isAuthenticated } = useAuthContext()
    const { experience, show, isLoading, currentExperience, handleEdit, handleSave, handleUpdate, handleDelete, handleClose, error } = useExperienceContext()
    return (
        <>
            <UpdateExperienceModal show={show} isLoading={isLoading} experience={currentExperience} onClose={handleClose} onUpdate={handleUpdate} onSave={handleSave} onDelete={handleDelete} error={error} />
            <Container>
                {isAuthenticated && <Row className="justify-content-center">
                    <Col lg={8} style={{ textAlign: 'right', marginRight: '25px' }}>
                        <PlusCircle data-testid="add-experience" onClick={() => handleEdit({})} />
                    </Col>
                </Row>}
                <div data-testid="experience-container">
                    {experience?.map((experience, key) => <AboutMe key={key} lg={4} cardImg={experience.image} cardTitle={experience.title} cardText={experience.text} isEditable={true} onEdit={() => handleEdit(experience)} />)}
                </div>
            </Container>
        </>
    )
}

export default Experience