import PropTypes from 'prop-types'
import { Alert } from "react-bootstrap"

const ConditionalAlert = ({ variant, children, ...rest }) => children && <Alert variant={variant} {...rest}>{children}</Alert>

ConditionalAlert.propTypes = {
    variant: PropTypes.string
}
export default ConditionalAlert