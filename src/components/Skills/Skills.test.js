import { render, screen } from "@testing-library/react"
import Skills from "."
import * as AppContext from '../../context/AppContext'
const skills = ['React', 'Jest', 'Node.js', 'C#', 'NUnit', 'Cypress', 'SQL', 'MongoDb', 'AWS', 'Jenkins']

describe("ImageBanner", () => {
    beforeEach(() => {
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({ person: { skills } })
        render(<Skills />)
    })
    it("should have the expected title", () => {
        expect(screen.getByTestId("skill-header")).toHaveTextContent("Skills")
    })
    it.each(skills)("should have the expected skills", (skill) => {
        expect(screen.getByTestId(`skill-${skill}`)).toHaveTextContent(skill)
    })
})

