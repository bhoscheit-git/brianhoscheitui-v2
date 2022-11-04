import { render, screen } from "@testing-library/react"
import ConditionalAlert from "./ConditionalAlert"

describe("ConditionalAlert", () => {
    let rerender
    beforeEach(() => {
        ({ rerender } = render(<ConditionalAlert data-testid="test" />))
    })
    it("should display nothing if no children are provided", () => {
        expect(screen.queryByTestId("test")).not.toBeInTheDocument()
    })
    it("should display alert if children are provided", () => {
        rerender(<ConditionalAlert data-testid="test">test</ConditionalAlert>)
        expect(screen.getByTestId("test")).toBeInTheDocument()
    })
})