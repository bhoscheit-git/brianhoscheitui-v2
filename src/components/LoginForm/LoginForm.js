import { Container, Form, Col, Row } from "react-bootstrap"
import CustomFormGroup from "../CustomFormGroup"
import ConditionalAlert from "../ConditionalAlert"
import { useLoginContext } from "../../context/LoginContext"
import SpinnerButton from "../SpinnerButton"

const LoginForm = () => {
    const { username, password, isLoading, message, isValid, handleSubmit, handleChange } = useLoginContext()
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <Form>
                        <h1 data-testid="login-header">Login</h1>
                        <hr />
                        <ConditionalAlert data-testid="login-message" variant={message?.variant}>{message?.text}</ConditionalAlert>
                        <CustomFormGroup controlId="login-username" inputKey="username" label="Username" value={username} onChange={handleChange} />
                        <CustomFormGroup controlId="login-password" inputKey="password" label="Password" type="password" value={password} onChange={handleChange} />
                        <SpinnerButton data-testid="login-button" variant="primary" onClick={handleSubmit} disabled={!isValid || isLoading} isLoading={isLoading}>
                            Login
                        </SpinnerButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm