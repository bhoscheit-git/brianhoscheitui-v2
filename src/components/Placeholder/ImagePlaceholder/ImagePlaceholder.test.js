import { render, screen } from "@testing-library/react"
import ImagePlaceholder from "./ImagePlaceholder"
describe("ImagePlaceholder", () => {
    let rerender
    beforeEach(() => {
        ({ rerender } = render(<ImagePlaceholder isLoading={true}><div data-testid="child"></div></ImagePlaceholder>))
    })
    it("should display placeholder when loading", () => {
        expect(screen.getByTestId("shimmer-placeholder")).toBeInTheDocument()
    })
    it("should contain hidden container when loading", () => {
        const element = screen.getByTestId("placeholder-child-container")
        expect(element).toBeInTheDocument()
        expect(element).toHaveStyle("visibility: hidden")
        expect(element).toHaveStyle("position: absolute")
    })
    it("should not display placeholder when not loading", () => {
        rerender(<ImagePlaceholder isLoading={false}><div data-testid="child"></div></ImagePlaceholder>)
        expect(screen.queryByTestId("shimmer-placeholder")).not.toBeInTheDocument()
    })
    it("should not contain hidden container when not loading", () => {
        rerender(<ImagePlaceholder isLoading={false}><div data-testid="child"></div></ImagePlaceholder>)
        expect(screen.queryByTestId("placeholder-child-container")).not.toBeInTheDocument()
    })
    it.each([true, false])("should contain child regardless of loading", (isLoading) => {
        rerender(<ImagePlaceholder isLoading={isLoading}><div data-testid="child"></div></ImagePlaceholder>)
        expect(screen.getByTestId("child")).toBeInTheDocument()
    })
})