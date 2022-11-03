import { render, screen, act } from "@testing-library/react"
import UpdateAboutMeModal from "./UpdateAboutMeModal"
import userEvent from "@testing-library/user-event"

describe("UpdateAboutMeModal", () => {
    let about
    let onUpdate
    let onSave
    let onClose
    let rerender
    beforeEach(() => {
        about = { image: 'image', title: 'title', text: 'text' }
        onUpdate = jest.fn();
        onSave = jest.fn();
        onClose = jest.fn();
        ({ rerender } = render(<UpdateAboutMeModal show={true} isLoading={false} about={about} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />))
    })
    it("should have the expected title", () => {
        expect(screen.getByTestId('update-about-me-modal-title')).toHaveTextContent('Edit About Me')
    })
    it.each(['Image', 'Title', 'Text'])("should have the expected inputs", (label) => {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
    it.each(['update-about-me-save', 'update-about-me-close'])("should have the expected buttons", (testId) => {
        expect(screen.getByTestId(testId)).toBeInTheDocument()
    })
    it.each([
        { key: 'image', label: 'Image' },
        { key: 'title', label: 'Title' },
        { key: 'text', label: 'Text' }])("should call onUpdate with the expected params on input update", ({ key, label }) => {
            const text = 'A'
            act(() => userEvent.type(screen.getByLabelText(label), text))
            expect(onUpdate).toHaveBeenCalledWith(key, `${about[key]}${text}`)
        })
    it("should call onSave on save button click", () => {
        act(() => userEvent.click(screen.getByTestId('update-about-me-save')))
        expect(onSave).toHaveBeenCalled()
    })
    it("should call onClose on close button click", () => {
        act(() => userEvent.click(screen.getByTestId('update-about-me-close')))
        expect(onClose).toHaveBeenCalled()
    })
    it("should not display error if there is no error message", () => {
        expect(screen.queryByTestId('update-about-me-alert')).not.toBeInTheDocument()
    })
    it("should display error if there is an error message", () => {
        const error = 'error'
        render(<UpdateAboutMeModal show={true} error={error} isLoading={false} about={about} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        expect(screen.getByTestId('update-about-me-alert')).toHaveTextContent(error)
    })
    it("should not display spinner if not loading", () => {
        expect(screen.queryByTestId('update-about-me-loading')).not.toBeInTheDocument()
    })
    it("should display spinner if loading", () => {
        render(<UpdateAboutMeModal show={true} isLoading={true} about={about} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        expect(screen.getByTestId('update-about-me-loading')).toBeInTheDocument()
    })
})