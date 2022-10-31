import { render, screen } from "@testing-library/react"
import GlobalHeader from "."
import * as HeaderContext from '../../context/HeaderContext'
import userEvent from '@testing-library/user-event'

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({ ...rest }) => <a {...rest} />
}))

describe("GlobalHeader", () => {
    let context
    let toggle
    let collapse
    let isActive
    beforeEach(() => {
        toggle = jest.fn()
        collapse = jest.fn()
        isActive = jest.fn()
        context = { expanded: true, toggle, collapse, isActive }
        jest.spyOn(HeaderContext, "useHeaderContext").mockReturnValue(context);
        render(<GlobalHeader />)
    })
    it("should have expected header", () => {
        expect(screen.getByTestId('global-header')).toHaveTextContent("Brian Hoscheit")
    })

    it("should have expected tabs", () => {
        expect(screen.getByTestId('link-home')).toHaveTextContent("Home")
        expect(screen.getByTestId('link-experience')).toHaveTextContent("Experience")
    })

    it("should call is active with the expected params", () => {
        expect(isActive).toHaveBeenCalledWith('home')
        expect(isActive).toHaveBeenCalledWith('experience')
    })

    it("should call toggle on Nav Toggle click", () => {
        userEvent.click(screen.getByTestId('nav-toggle'))
        expect(toggle).toHaveBeenCalled()
    })

    it.each(['link-home', 'link-experience'])("should call setExpanded on link click", (testId) => {
        userEvent.click(screen.getByTestId(testId))
        expect(collapse).toHaveBeenCalled()
    })
})
