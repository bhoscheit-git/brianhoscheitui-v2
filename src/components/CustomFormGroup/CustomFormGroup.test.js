import { render, screen, act } from "@testing-library/react"
import CustomFormGroup from "./CustomFormGroup"
describe("CustomFormGroup", () => {
    const controlId = 'controlId'
    const inputKey = 'inputKey'
    const label = 'label'
    const value = 'value'
    let onChange
    let rerender
    beforeEach(() => {
        onChange = jest.fn();
        ({ rerender } = render(<CustomFormGroup controlId={controlId} inputKey={inputKey} label={label} value={value} onChange={onChange} />))
    })
    it("should have the expected label", () => {
        expect(screen.getByText(label)).toBeInTheDocument()
    })
    it("should have the expected control", () => {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
    it("should have the expected value", () => {
        expect(screen.getByLabelText(label)).toHaveValue(value)
    })
    it("should default value to empty string if value is null", () => {
        rerender(<CustomFormGroup controlId={controlId} inputKey={inputKey} label={label} value={null} onChange={onChange} />)
        expect(screen.getByLabelText(label)).toHaveValue('')
    })
    it("should call onChange when value changes", () => {

    })
})