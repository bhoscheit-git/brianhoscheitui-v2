import { useState } from "react"
import { Container, Form, Col, Row, Button, Alert } from "react-bootstrap"
import { Auth } from 'aws-amplify'

const LoginForm = () => {
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        try {
            setMessage('')
            await Auth.signIn(username, password)
        } catch (e) {
            setMessage('Invalid username or password')
        }
    }

    const isFormValid = () => !!username && !!password

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <Form>
                        <h1 data-testid="login-header">Login</h1>
                        <hr />
                        {message && <Alert data-testid="login-message" variant="warning">{message}</Alert>}
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control data-testid="login-username" value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control data-testid="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button data-testid="login-button" variant="primary" onClick={handleSubmit} disabled={!isFormValid()}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm