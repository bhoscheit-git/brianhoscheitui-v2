import PropTypes from 'prop-types'
import { Modal, Form, Button } from "react-bootstrap"
import ConditionalAlert from '../ConditionalAlert'
import CustomFormGroup from '../CustomFormGroup'
import SpinnerButton from '../SpinnerButton'

const UpdateAboutMeModal = ({ show, isLoading, about, onUpdate, onSave, onClose, error }) => {
    const { image, title, text } = about ?? {}
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title data-testid="update-about-me-modal-title">Edit About Me</Modal.Title>
            </Modal.Header>
            <ConditionalAlert data-testid="update-about-me-alert" variant="warning">{error}</ConditionalAlert>
            <Modal.Body>
                <Form>
                    <CustomFormGroup controlId="update-about-me-image" inputKey="image" label="Image" value={image} onChange={onUpdate} />
                    <CustomFormGroup controlId="update-about-me-title" inputKey="title" label="Title" value={title} onChange={onUpdate} />
                    <CustomFormGroup controlId="update-about-me-text" inputKey="text" label="Text" value={text} onChange={onUpdate} as="textarea" rows={5} />
                    <SpinnerButton data-testid="update-about-me-save" style={{ marginRight: '.5rem' }} variant="primary" onClick={onSave} disabled={isLoading} isLoading={isLoading}>
                        Save
                    </SpinnerButton>
                    <Button data-testid="update-about-me-close" variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal >
    )
}


UpdateAboutMeModal.propTypes = {
    show: PropTypes.bool,
    isLoading: PropTypes.bool,
    onUpdate: PropTypes.func,
    onSave: PropTypes.func,
    onClose: PropTypes.func,
    error: PropTypes.string
}

export default UpdateAboutMeModal