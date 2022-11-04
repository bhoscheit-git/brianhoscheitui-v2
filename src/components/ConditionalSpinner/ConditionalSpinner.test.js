import { render, screen } from "@testing-library/react"
import ConditionalSpinner from "./ConditionalSpinner"

describe("ConditionalSpinner", () => {
    let rerender
    beforeEach(() => {
        ({ rerender } = render(<ConditionalSpinner data-testid="test" isLoading={false} />))
    })
    it("should display spinner if loading", () => {
        rerender(<ConditionalSpinner data-testid="test" isLoading={true} />)
        expect(screen.getByTestId("test")).toBeInTheDocument()
    })
    it("should not display spinner if not loading", () => {
        expect(screen.queryByTestId("test")).not.toBeInTheDocument()
    })
})