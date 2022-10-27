import { render } from "@testing-library/react"
import Experience from "."
import * as AppContext from '../../context/AppContext'

const experience = [
    { image: 'image', title: 'title', text: 'text' }
]

describe("Experience", () => {
    beforeEach(() => {
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({ person: { experience } })
    })
    it("should match the screenshot", () => {
        const page = render(<Experience />)
        expect(page).toMatchSnapshot()
    })
})
