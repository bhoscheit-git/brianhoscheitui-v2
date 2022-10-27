import { render } from "@testing-library/react"
import Home from "."
import * as AppContext from '../../context/AppContext'

const about = { image: 'image', title: 'title', text: 'text' }

describe("Home", () => {
    beforeEach(() => {
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({ person: { about } })
    })
    it("should match the screenshot", () => {
        const page = render(<Home />)
        expect(page).toMatchSnapshot()
    })
})
