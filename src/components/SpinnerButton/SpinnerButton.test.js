import { render, screen } from '@testing-library/react'
import SpinnerButton from './SpinnerButton'
describe("SpinnerButton", () => {
    let rerender
    beforeEach(() => {
        ({ rerender } = render(<SpinnerButton isLoading={false}>Submit</SpinnerButton>))
    })
    it("should display spinner if loading", () => {
        rerender(<SpinnerButton isLoading={true}>Submit</SpinnerButton>)
        expect(screen.getByTestId("button-spinner")).toBeInTheDocument()
    })
    it("should not display spinner if not loading", () => {
        expect(screen.queryByTestId("button-spinner")).not.toBeInTheDocument()
    })
})