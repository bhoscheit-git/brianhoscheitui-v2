import { render, screen, act} from "@testing-library/react"
import ImageBanner from "."

describe("ImageBanner", () => {
    const src = 'src'
    beforeEach(() => {
        render(<ImageBanner src={src} />)
    })
    it("should have the expected source", () => {
        const img = screen.getByTestId("banner-image")
        expect(img).toHaveAttribute("src", src)
    })
    it("should show loading placeholder prior to image loading", () => {
        expect(screen.getByTestId("placeholder-child-container")).toBeInTheDocument()
    })
    it("should not show loading placeholder after load", () => {
        const img = screen.getByTestId("banner-image")
        act(() => img.dispatchEvent(new Event("load")))
        expect(screen.queryByTestId("placeholder-child-container")).not.toBeInTheDocument()
    })
})
