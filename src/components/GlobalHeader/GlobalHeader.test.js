import { render, screen } from "@testing-library/react"
import GlobalHeader from "."

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({...rest}) => <a {...rest}/>,
    useLocation: () => ({
        pathname: 'home'
    })
}))

describe("GlobalHeader", () => {
    beforeEach(() => {
        render(<GlobalHeader />)
    })
    it("should have expected header", () => {
        expect(screen.getByTestId('global-header')).toHaveTextContent("Brian Hoscheit")
    })

    it("should have expected tabs", () => {
        expect(screen.getByTestId('link-home')).toHaveTextContent("Home")
    })
})
