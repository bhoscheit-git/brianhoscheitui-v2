import { render, screen } from "@testing-library/react"
import AboutMe from "./AboutMe"

describe("About Me", () => {
    const lg = 1
    const src = 'src'
    const title = 'title'
    const text = 'text'
    beforeEach(() => {
        render(<AboutMe lg={lg} cardImg={src} cardTitle={title} cardText={text} />)
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
    it.each([{ testId: 'card-img-col', width: lg }, { testId: 'card-txt-col', width: 12 - lg }])("should set column widths", ({testId, width}) => {
        expect(screen.getByTestId(testId)).toHaveClass(`col-lg-${width}`)
    })
})