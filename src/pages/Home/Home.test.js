import { render } from "@testing-library/react"
import Home from "."

describe("Home", () => {
    it("should match the screenshot", () => {
        const page = render(<Home />)
        expect(page).toMatchSnapshot()
    })
})
