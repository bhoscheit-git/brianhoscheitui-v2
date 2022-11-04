import { render, screen, act, queryByTestId, getByTestId } from "@testing-library/react"
import UpdateExperienceModal from "./UpdateExperienceModal"
import userEvent from "@testing-library/user-event"

describe("UpdateExperienceModal", () => {
    let experience
    let onUpdate
    let onSave
    let onClose
    let rerender
    beforeEach(() => {
        experience = { image: 'image', title: 'title', text: 'text' }
        onUpdate = jest.fn();
        onSave = jest.fn();
        onClose = jest.fn();
        ({ rerender } = render(<UpdateExperienceModal show={true} isLoading={false} experience={experience} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />))
    })
    it("should have the expected title", () => {
        expect(screen.getByTestId('update-experience-modal-title')).toHaveTextContent('Add Experience')
    })
    it("should have the expected title when id not null", () => {
        const updatedExperience = {...experience, id: '1'}
        rerender(<UpdateExperienceModal show={true} isLoading={false} experience={updatedExperience} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        expect(screen.getByTestId('update-experience-modal-title')).toHaveTextContent('Edit Experience')
    })
    it.each(['Image', 'Title', 'Text'])("should have the expected inputs", (label) => {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
    it.each(['update-experience-save', 'update-experience-close'])("should have the expected buttons", (testId) => {
        expect(screen.getByTestId(testId)).toBeInTheDocument()
    })
    it.each([
        { key: 'image', label: 'Image' },
        { key: 'title', label: 'Title' },
        { key: 'text', label: 'Text' }])("should call onUpdate with the expected params on input update", ({ key, label }) => {
            const text = 'A'
            act(() => userEvent.type(screen.getByLabelText(label), text))
            expect(onUpdate).toHaveBeenCalledWith(key, `${experience[key]}${text}`)
        })
    it("should call onSave on save button click", () => {
        act(() => userEvent.click(screen.getByTestId('update-experience-save')))
        expect(onSave).toHaveBeenCalled()
    })
    it("should call onClose on close button click", () => {
        act(() => userEvent.click(screen.getByTestId('update-experience-close')))
        expect(onClose).toHaveBeenCalled()
    })
    it("should not display error if there is no error message", () => {
        expect(screen.queryByTestId('update-experience-alert')).not.toBeInTheDocument()
    })
    it("should display error if there is an error message", () => {
        const error = 'error'
        rerender(<UpdateExperienceModal show={true} error={error} isLoading={false} experience={experience} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        expect(screen.getByTestId('update-experience-alert')).toHaveTextContent(error)
    })
    it("should not display save spinner if not loading", () => {
        expect(screen.queryByTestId('update-experience-loading')).not.toBeInTheDocument()
    })
    it("should display save spinner if loading", () => {
        rerender(<UpdateExperienceModal show={true} isLoading={true} experience={experience} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        expect(screen.getByTestId('update-experience-loading')).toBeInTheDocument()
    })
    it("should not display delete spinner if not loading", () => {
        const updatedExperience = {...experience, id: '1'}
        rerender(<UpdateExperienceModal show={true} isLoading={false} experience={updatedExperience} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        const button = screen.getByTestId("update-experience-delete")
        expect(queryByTestId(button, "button-spinner")).not.toBeInTheDocument()
    })
    it("should display delete spinner if loading", () => {
        const updatedExperience = {...experience, id: '1'}
        rerender(<UpdateExperienceModal show={true} isLoading={true} experience={updatedExperience} onUpdate={onUpdate} onSave={onSave} onClose={onClose} />)
        const button = screen.getByTestId("update-experience-delete")
        expect(getByTestId(button, "button-spinner")).toBeInTheDocument()
    })
})