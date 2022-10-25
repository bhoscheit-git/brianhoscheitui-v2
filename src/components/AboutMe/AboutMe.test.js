import { render, screen } from "@testing-library/react"
import AboutMe from "./AboutMe"

describe("About Me", () => {
    beforeEach(() => {
        render(<AboutMe />)
    })
    it("should container image", () => {
        expect(screen.getByTestId("card-img")).toBeInTheDocument()
    })
    it("should contain title", () => {
        expect(screen.getByTestId("card-title")).toBeInTheDocument()
    })
    it("should contain text", () => {
        expect(screen.getByTestId("card-text")).toBeInTheDocument()
    })
})