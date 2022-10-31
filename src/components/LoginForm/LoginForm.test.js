import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginForm from "./LoginForm"
import { Auth } from 'aws-amplify'
import * as AuthContext from '../../context/AuthContext'
import { BrowserRouter as Router } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("LoginForm", () => {
    let setIsUserAuthenticated
    let signIn
    beforeEach(() => {
        setIsUserAuthenticated = jest.fn()
        signIn = jest.fn()
        jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({ setIsUserAuthenticated }))
        jest.spyOn(Auth, "signIn").mockImplementation(signIn)
        render(<Router><LoginForm /></Router>)
    })
    it("should have header", () => {
        expect(screen.getByTestId('login-header')).toHaveTextContent('Login')
    })
    it("should have username input", () => {
        expect(screen.getByTestId('login-username')).toBeInTheDocument()
    })
    it("should have password input", () => {
        expect(screen.getByTestId('login-password')).toBeInTheDocument()
    })
    it("should have login button", () => {
        expect(screen.getByTestId('login-button')).toBeInTheDocument()
    })
    it.each(['login-username', 'login-password'])("should have a disabled button if username and password are not populated", (testId) => {
        act(() => userEvent.type(screen.getByTestId(testId), "sample"))
        expect(screen.getByTestId('login-button')).toBeDisabled()
    })
    it("should not have alert if no message provided", () => {
        expect(screen.queryByTestId("login-message")).not.toBeInTheDocument()
    })
    it("should call Auth with username and password on login button click", async () => {
        act(() => userEvent.type(screen.getByTestId('login-username'), "username"))
        act(() => userEvent.type(screen.getByTestId('login-password'), "password"))
        await act(async () => userEvent.click(screen.getByTestId('login-button')))
        expect(signIn).toHaveBeenCalledWith("username", "password")
    })
    it("should display message on auth failure", async () => {
        jest.spyOn(Auth, "signIn").mockImplementation(() => {
            throw new Error()
        })
        act(() => userEvent.type(screen.getByTestId('login-username'), "username"))
        act(() => userEvent.type(screen.getByTestId('login-password'), "password"))
        await act(async () => userEvent.click(screen.getByTestId('login-button')))
        expect(screen.getByTestId("login-message")).toHaveTextContent("Invalid username or password")
    })
})