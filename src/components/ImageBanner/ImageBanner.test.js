import { render, screen } from "@testing-library/react"
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
})
