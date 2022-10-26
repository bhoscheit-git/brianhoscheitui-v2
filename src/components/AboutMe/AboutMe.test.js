import { render, screen } from "@testing-library/react"
import AboutMe from "./AboutMe"

describe("About Me", () => {
    const src = 'src'
    const title = 'title'
    const text = 'text'
    beforeEach(() => {
        render(<AboutMe cardImg={src} cardTitle={title} cardText={text}/>)
    })
    it("should container image", () => {
        expect(screen.getByTestId("card-img")).toHaveAttribute("src", src)
    })
    it("should contain title", () => {
        expect(screen.getByTestId("card-title")).toHaveTextContent(title)
    })
    it("should contain text", () => {
        expect(screen.getByTestId("card-text")).toHaveTextContent(text)
    })
})