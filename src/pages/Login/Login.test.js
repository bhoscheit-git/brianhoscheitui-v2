import { render } from "@testing-library/react"
import * as AuthContext from '../../context/AuthContext'
import Login from "."

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
    let setIsUserAuthenticated
    beforeEach(() => {
        setIsUserAuthenticated = jest.fn()
        jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({ setIsUserAuthenticated }))
    })
    it("should match the screenshot", () => {
        const page = render(<Login />)
        expect(page).toMatchSnapshot()
    })
})
