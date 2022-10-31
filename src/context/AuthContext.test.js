import { render, screen, act } from '@testing-library/react'
import { AuthProvider, useAuthContext } from './AuthContext'
import { Auth } from 'aws-amplify'

const MockChildren = () => {
    const { isAuthenticated } = useAuthContext()
    return (
        <div>
            <div data-testid="is-authenticated">{isAuthenticated.toString()}</div>
        </div>
    )
}

const MockProvider = () => <AuthProvider><MockChildren /></AuthProvider>


describe("AuthContext", () => {
    beforeEach(() => {
        jest.spyOn(Auth, "currentAuthenticatedUser").mockResolvedValue(true)
    })
    it("should return set isAuthenticated to true if currentAuthenticatedUser", async () => {
        await act(async () => render(<MockProvider />))
        expect(screen.getByTestId('is-authenticated')).toHaveTextContent("true")
    })
    it("should return set isAuthenticated to false if currentAuthenticatedUser throws", async () => {
        jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
            throw new Error()
        })
        await act(async () => render(<MockProvider />))
        expect(screen.getByTestId('is-authenticated')).toHaveTextContent("false")
    })
})