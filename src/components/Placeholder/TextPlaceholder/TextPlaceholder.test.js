import { render, screen } from "@testing-library/react"
import TextPlaceholder from "./TextPlaceholder"
describe("TextPlaceholder", () => {
    let rerender
    beforeEach(() => {
        ({ rerender } = render(<TextPlaceholder isLoading={true} rows={2}><div data-testid="child"></div></TextPlaceholder>))
    })
    it("should display placeholder when loading", () => {
        expect(screen.getByTestId("shimmer-0")).toBeInTheDocument()
        expect(screen.getByTestId("shimmer-1")).toBeInTheDocument()
    })
    it("should not display child when loading", () => {
        expect(screen.queryByTestId("child")).not.toBeInTheDocument()
    })
    it("should display children when not loading", () => {
        rerender(<TextPlaceholder isLoading={false} rows={2}><div data-testid="child"></div></TextPlaceholder>)
        expect(screen.getByTestId("child")).toBeInTheDocument()
    })
})