import { render, screen } from "@testing-library/react"
import Experience from "."
import * as AuthContext from '../../context/AuthContext'
import * as AppContext from '../../context/AppContext'

const experience = [
    { image: 'image', title: 'title', text: 'text' }
]

describe("Experience", () => {
    beforeEach(() => {
        jest.spyOn(AuthContext, "useAuthContext").mockReturnValue({ isAuthenticated: false })
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({ person: { experience } })
    })
    it("should match the screenshot", () => {
        const page = render(<Experience />)
        expect(page).toMatchSnapshot()
    })
    it("should render no skills if person is empty", () => {
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({})
        render(<Experience />)
        expect(screen.getByTestId("experience-container").innerHTML).toEqual('')
    })
})
