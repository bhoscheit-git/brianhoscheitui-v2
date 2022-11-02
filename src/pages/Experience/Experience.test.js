import { render, screen, act } from "@testing-library/react"
import Experience from "."
import * as AuthContext from '../../context/AuthContext'
import * as AppContext from '../../context/AppContext'
import * as ExperienceContext from '../../context/ExperienceContext'
import userEvent from "@testing-library/user-event"

const experience = [
    { image: 'image', title: 'title', text: 'text' }
]

describe("Experience", () => {
    let handleEdit
    beforeEach(() => {
        handleEdit = jest.fn()
        jest.spyOn(AuthContext, "useAuthContext").mockReturnValue({ isAuthenticated: false })
        jest.spyOn(ExperienceContext, "useExperienceContext").mockReturnValue({ experience, handleEdit })
    })
    it("should match the screenshot", () => {
        const page = render(<Experience />)
        expect(page).toMatchSnapshot()
    })
    it("should render no experience if experience is empty", () => {
        jest.spyOn(ExperienceContext, "useExperienceContext").mockReturnValue({ })
        render(<Experience />)
        expect(screen.getByTestId("experience-container").innerHTML).toEqual('')
    })
    it("should not display edit buttons if not authenticated", () => {
        render(<Experience />)
        expect(screen.queryByTestId("add-experience")).not.toBeInTheDocument()
        expect(screen.queryByTestId("about-me-edit")).not.toBeInTheDocument() 
    })
    it("should call handleEdit with empty object on plus click", () => {
        jest.spyOn(AuthContext, "useAuthContext").mockReturnValue({ isAuthenticated: true })
        render(<Experience />)
        act(() => userEvent.click(screen.getByTestId("add-experience")))
        expect(handleEdit).toHaveBeenCalledWith({})
    })
    it("should call handleEdit with empty object on pencil click", () => {
        jest.spyOn(AuthContext, "useAuthContext").mockReturnValue({ isAuthenticated: true })
        render(<Experience />)
        act(() => userEvent.click(screen.getByTestId("about-me-edit")))
        expect(handleEdit).toHaveBeenCalledWith(experience[0])
    })
})
