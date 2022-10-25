import { render, screen } from "@testing-library/react"
import Skills from "."

const skills = ['React', 'Jest', 'Node.js', 'C#', 'NUnit', 'Cypress', 'SQL', 'MongoDb', 'AWS', 'Jenkins']

describe("ImageBanner", () => {
    beforeEach(() => {
        render(<Skills />)
    })
    it("should have the expected title", () => {
        expect(screen.getByTestId("skill-header")).toHaveTextContent("Skills")
    })
    it.each(skills)("should have the expected skills", (skill) => {
        expect(screen.getByTestId(`skill-${skill}`)).toHaveTextContent(skill)
    })
})

