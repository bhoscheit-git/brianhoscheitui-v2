import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert, Spinner } from "react-bootstrap"
import CustomFormGroup from '../CustomFormGroup'

const UpdateExperienceModal = ({ show, isLoading, experience, onUpdate, onSave, onDelete, onClose, error }) => {
    const { id, image, title, text } = experience ?? {}
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title data-testid="update-experience-modal-title">{id == null ? "Add" : "Edit"} Experience</Modal.Title>
            </Modal.Header>
            {error && <Alert data-testid="update-experience-alert" variant="warning">{error}</Alert>}
            <Modal.Body>
                <Form>
                    <CustomFormGroup controlId="update-experience-image" inputKey="image" label="Image" value={image} onChange={onUpdate} />
                    <CustomFormGroup controlId="update-experience-title" inputKey="title" label="Title" value={title} onChange={onUpdate} />
                    <CustomFormGroup controlId="update-experience-text" inputKey="text" label="Text" value={text} onChange={onUpdate} as="textarea" rows={5}/>
                    <Button data-testid="update-experience-save" style={{ marginRight: '.5rem' }} variant="primary" onClick={onSave} disabled={isLoading}>
                        {isLoading && <Spinner data-testid="update-experience-loading" animation="border" size="sm" />} Save
                    </Button>
                    {id != null && <Button data-testid="update-experience-delete" style={{ marginRight: '.5rem' }} variant="danger" onClick={onDelete} disabled={isLoading}>
                        {isLoading && <Spinner data-testid="delete-experience-loading" animation="border" size="sm" />} Delete
                    </Button>
                    }
                    <Button data-testid="update-experience-close" variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal >
    )
}

UpdateExperienceModal.propTypes = {
    show: PropTypes.bool,
    isLoading: PropTypes.bool,
    onUpdate: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onClose: PropTypes.func,
    error: PropTypes.string
}

export default UpdateExperienceModal