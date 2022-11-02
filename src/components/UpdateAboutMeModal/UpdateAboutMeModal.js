import PropTypes from 'prop-types'
import { Modal, Form, Button, Alert, Spinner } from "react-bootstrap"

const UpdateAboutMeModal = ({ show, isLoading, about, onUpdate, onSave, onClose, error }) => (
    <Modal show={show}>
        <Modal.Header>
            <Modal.Title data-testid="update-about-me-modal-title">Edit About Me</Modal.Title>
        </Modal.Header>
        {error && <Alert data-testid="update-about-me-alert" variant="warning">{error}</Alert>}
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control data-testid="update-about-me-image" value={about?.image} onChange={e => onUpdate('image', e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control data-testid="update-about-me-title" value={about?.title} onChange={e => onUpdate('title', e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control data-testid="update-about-me-text" as="textarea" rows={5} value={about?.text} onChange={e => onUpdate('text', e.target.value)} />
                </Form.Group>
                <Button data-testid="update-about-me-save" style={{ marginRight: '.5rem' }} variant="primary" onClick={onSave} disabled={isLoading}>
                    {isLoading && <Spinner data-testid="update-about-me-loading" animation="border" size="sm" />} Save
                </Button>
                <Button data-testid="update-about-me-close" variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Form>
        </Modal.Body>
    </Modal >
)


UpdateAboutMeModal.propTypes = {
    show: PropTypes.bool,
    isLoading: PropTypes.bool,
    onUpdate: PropTypes.func,
    onSave: PropTypes.func,
    onClose: PropTypes.func,
    error: PropTypes.string
}

export default UpdateAboutMeModal