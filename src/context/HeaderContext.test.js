import { useHeaderContext } from "./HeaderContext"
import userEvent from '@testing-library/user-event'
import { render, act, screen } from "@testing-library/react"

let mockPathname = '/home'
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: mockPathname
    })
}))

const MockContext = () => {
    const { expanded, toggle, collapse, isActive } = useHeaderContext()
    return (
        <div>
            <button data-testid="toggle" onClick={toggle} />
            <button data-testid="collapse" onClick={collapse} />
            <div data-testid="is-active">{isActive('home').toString()}</div>
            <div data-testid="expanded">{expanded.toString()}</div>
        </div>
    )
}

describe("HeaderContext", () => {
    it("should start with expanded set to false", () => {
        render(<MockContext />)
        expect(screen.getByTestId("expanded")).toHaveTextContent("false")
    })
    it("should set expanded to true on toggle click", () => {
        render(<MockContext />)
        act(() => userEvent.click(screen.getByTestId("toggle")))
        expect(screen.getByTestId("expanded")).toHaveTextContent("true")
    })
    it("should set expanded to false on second toggle click", () => {
        render(<MockContext />)
        act(() => userEvent.click(screen.getByTestId("toggle")))
        act(() => userEvent.click(screen.getByTestId("toggle")))
        expect(screen.getByTestId("expanded")).toHaveTextContent("false")
    })
    it("should set expanded to false on collapse click", () => {
        render(<MockContext />)
        act(() => userEvent.click(screen.getByTestId("toggle")))
        act(() => userEvent.click(screen.getByTestId("collapse")))
        expect(screen.getByTestId("expanded")).toHaveTextContent("false")
    })
    it("should return true if pathname equals isActive param", () => {
        render(<MockContext />)
        expect(screen.getByTestId("is-active")).toHaveTextContent("true")
    })
    it("should return false if pathname does not equal isActive param", () => {
        mockPathname = '/other'
        render(<MockContext />)
        expect(screen.getByTestId("is-active")).toHaveTextContent("false")
    })
})