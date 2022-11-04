import PropTypes from 'prop-types'
import { Spinner } from "react-bootstrap"

const ConditionalSpinner = ({ isLoading, ...rest }) => isLoading && <Spinner {...rest} />

ConditionalSpinner.propTypes = {
    isLoading: PropTypes.bool
}

export default ConditionalSpinner