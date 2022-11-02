import { render, screen, act } from '@testing-library/react'
import * as apiHelper from '../helpers/apiHelper'
import { useExperienceContext } from './ExperienceContext'
import * as AppContext from './AppContext'
import userEvent from '@testing-library/user-event'

const MockChildren = () => {
    const { handleEdit, handleSave, handleUpdate, handleDelete, handleClose, experience, show, currentExperience, isLoading, error } = useExperienceContext()
    return (
        <div>
            <button data-testid="edit" onClick={() => handleEdit(experience[0])} />
            <button data-testid="save" onClick={handleSave} />
            <button data-testid="delete" onClick={handleDelete} />
            <button data-testid="update" onClick={() => handleUpdate('image', 'updatedImage')} />
            <button data-testid="close" onClick={handleClose} />
            <div data-testid="image">{experience[0]?.image}</div>
            <div data-testid="title">{experience[0]?.title}</div>
            <div data-testid="text">{experience[0]?.text}</div>
            <div data-testid="current-image">{currentExperience?.image}</div>
            <div data-testid="current-title">{currentExperience?.title}</div>
            <div data-testid="current-text">{currentExperience?.text}</div>
            <div data-testid="show">{show?.toString()}</div>
            <div data-testid="loading">{isLoading?.toString()}</div>
            <div data-testid="error">{error}</div>
        </div>
    )
}

describe("HomeContext", () => {
    const person = { experience: [{ id: '1', image: 'image', title: 'title', text: 'text' }] }
    let put
    let deleteFn
    beforeEach(() => {
        put = jest.fn()
        deleteFn = jest.fn()
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({ person })
        jest.spyOn(apiHelper, "makePutApiCall").mockImplementation(put)
        jest.spyOn(apiHelper, "makeDeleteApiCall").mockImplementation(deleteFn)
    })
    it("should return expected state on handleEdit", () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('edit')))
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('current-image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('current-title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('current-text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('show')).toHaveTextContent("true")
    })
    it("should return expected state on handleSave", async () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('edit')))
        await act(async () => userEvent.click(screen.getByTestId('save')))
        expect(put).toHaveBeenCalledWith('experience/bhoscheit', person.experience[0])
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('loading')).toHaveTextContent("false")
        expect(screen.getByTestId('error')).toHaveTextContent("")
    })
    it("should return expected state on handleDelete", async () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('edit')))
        await act(async () => userEvent.click(screen.getByTestId('delete')))
        expect(deleteFn).toHaveBeenCalledWith('experience/bhoscheit', { id: '1' })
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('loading')).toHaveTextContent("false")
        expect(screen.getByTestId('error')).toHaveTextContent("")
    })
    it("should call put with expected params after update", async () => {
        render(<MockChildren />)
        await act(async () => userEvent.click(screen.getByTestId('update')))
        await act(async () => userEvent.click(screen.getByTestId('save')))
        expect(put).toHaveBeenCalledWith('experience/bhoscheit', { image: 'updatedImage' })
    })
    it("should return expected state on handleSave and error", async () => {
        put.mockImplementation(() => {
            throw new Error()
        })
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('edit')))
        await act(async () => userEvent.click(screen.getByTestId('save')))
        expect(put).toHaveBeenCalledWith('experience/bhoscheit', person.experience[0])
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('loading')).toHaveTextContent("false")
        expect(screen.getByTestId('error')).toHaveTextContent("Failed to update experience section")
    })
    it("should return expected state on handleDelete and error", async () => {
        deleteFn.mockImplementation(() => {
            throw new Error()
        })
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('edit')))
        await act(async () => userEvent.click(screen.getByTestId('delete')))
        expect(deleteFn).toHaveBeenCalledWith('experience/bhoscheit', { id: '1' })
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('loading')).toHaveTextContent("false")
        expect(screen.getByTestId('error')).toHaveTextContent("Failed to delete experience")
    })
    it("should call handleUpdate", () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('update')))
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('current-image')).toHaveTextContent('updatedImage')
    })
    it("should return expected state on handleClose", () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('close')))
        expect(screen.getByTestId('image')).toHaveTextContent(person.experience[0].image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.experience[0].title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.experience[0].text)
        expect(screen.getByTestId('show')).toHaveTextContent("false")
    })
})