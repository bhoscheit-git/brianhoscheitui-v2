import { useState } from "react"
import { Container, Form, Col, Row, Button, Alert, Spinner } from "react-bootstrap"
import { Auth } from 'aws-amplify'
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"

const LoginForm = () => {
    const navigate = useNavigate()
    const { setIsUserAuthenticated } = useAuthContext()
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            setMessage({})
            await Auth.signIn(username, password)
            setMessage({ variant: 'success', text: 'Login successful!' })
            await setIsUserAuthenticated()
            navigate('/home')
        } catch (e) {
            setMessage({ variant: 'warning', text: 'Invalid username or password' })
        } finally {
            setIsLoading(false)
        }
    }

    const isFormValid = () => !!username && !!password && !isLoading

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <Form>
                        <h1 data-testid="login-header">Login</h1>
                        <hr />
                        {message.text && <Alert data-testid="login-message" variant={message.variant}>{message.text}</Alert>}
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control data-testid="login-username" value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control data-testid="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button data-testid="login-button" variant="primary" onClick={handleSubmit} disabled={!isFormValid()}>
                            {isLoading && <Spinner animation="border" size="sm" />} Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm