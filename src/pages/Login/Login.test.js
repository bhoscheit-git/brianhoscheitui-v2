import { render } from "@testing-library/react"
import Login from "."

describe("Login", () => {
    it("should match the screenshot", () => {
        const page = render(<Login />)
        expect(page).toMatchSnapshot()
    })
})
