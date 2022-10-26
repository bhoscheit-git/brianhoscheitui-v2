import { render } from "@testing-library/react"
import Experience from "."

describe("Experience", () => {
    it("should match the screenshot", () => {
        const page = render(<Experience />)
        expect(page).toMatchSnapshot()
    })
})
