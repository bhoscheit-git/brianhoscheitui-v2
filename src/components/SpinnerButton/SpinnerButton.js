import { Button } from "react-bootstrap"
import ConditionalSpinner from "../ConditionalSpinner"


const SpinnerButton = ({ isLoading, children, ...rest }) => (
    <Button {...rest}>
        <ConditionalSpinner data-testid="button-spinner" isLoading={isLoading} animation="border" size="sm" /> {children}
    </Button>
)

export default SpinnerButton