import PropTypes from 'prop-types'
import { Form } from "react-bootstrap";

const CustomFormGroup = ({ controlId, inputKey, label, value, onChange, ...rest }) => {
    const handleChange = (e) => onChange(inputKey, e.target.value)
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control value={value ?? ''} onChange={handleChange} {...rest}/>
        </Form.Group >
    )
}

CustomFormGroup.propTypes = {
    controlId: PropTypes.string,
     inputKey: PropTypes.string, 
     label: PropTypes.string, 
     value: PropTypes.string, 
     onChange: PropTypes.func
}

export default CustomFormGroup