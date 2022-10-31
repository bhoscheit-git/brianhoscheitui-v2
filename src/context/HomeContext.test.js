import { render, screen, act } from '@testing-library/react'
import * as apiHelper from '../helpers/apiHelper'
import { useHomeContext } from './HomeContext'
import * as AppContext from './AppContext'
import userEvent from '@testing-library/user-event'

const MockChildren = () => {
    const { handleEdit, handleSave, handleUpdate, handleClose, about, show, currentAbout, isLoading, error } = useHomeContext()
    return (
        <div>
            <button data-testid="edit" onClick={handleEdit} />
            <button data-testid="save" onClick={handleSave} />
            <button data-testid="update" onClick={() => handleUpdate('image', 'updatedImage')} />
            <button data-testid="close" onClick={handleClose} />
            <div data-testid="image">{about?.image}</div>
            <div data-testid="title">{about?.title}</div>
            <div data-testid="text">{about?.text}</div>
            <div data-testid="current-image">{currentAbout?.image}</div>
            <div data-testid="current-title">{currentAbout?.title}</div>
            <div data-testid="current-text">{currentAbout?.text}</div>
            <div data-testid="show">{show?.toString()}</div>
            <div data-testid="loading">{isLoading?.toString()}</div>
            <div data-testid="error">{error}</div>
        </div>
    )
}

describe("HomeContext", () => {
    const person = { about: { image: 'image', title: 'title', text: 'text' } }
    let put
    beforeEach(() => {
        put = jest.fn()
        jest.spyOn(AppContext, "useAppContext").mockReturnValue({ person })
        jest.spyOn(apiHelper, "makePutApiCall").mockImplementation(put)
    })
    it("should return expected state on handleEdit", () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('edit')))
        expect(screen.getByTestId('image')).toHaveTextContent(person.about.image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.about.text)
        expect(screen.getByTestId('current-image')).toHaveTextContent(person.about.image)
        expect(screen.getByTestId('current-title')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('current-text')).toHaveTextContent(person.about.text)
        expect(screen.getByTestId('show')).toHaveTextContent("true")
    })
    it("should return expected state on handleSave", async () => {
        render(<MockChildren />)
        await act(async () => userEvent.click(screen.getByTestId('save')))
        expect(put).toHaveBeenCalledWith('about/bhoscheit', undefined)
        expect(screen.getByTestId('image')).toHaveTextContent(person.about.image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.about.text)
        expect(screen.getByTestId('loading')).toHaveTextContent("false")
        expect(screen.getByTestId('error')).toHaveTextContent("")
    })
    it("should call put with expected params after update", async () => {
        render(<MockChildren />)
        await act(async () => userEvent.click(screen.getByTestId('update')))
        await act(async () => userEvent.click(screen.getByTestId('save')))
        expect(put).toHaveBeenCalledWith('about/bhoscheit', {image: 'updatedImage'})
    })
    it("should return expected state on handleSave and error", async () => {
        put.mockImplementation(() => {
            throw new Error()
        })
        render(<MockChildren />)
        await act(async () => userEvent.click(screen.getByTestId('save')))
        expect(put).toHaveBeenCalledWith('about/bhoscheit', undefined)
        expect(screen.getByTestId('image')).toHaveTextContent(person.about.image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.about.text)
        expect(screen.getByTestId('loading')).toHaveTextContent("false")
        expect(screen.getByTestId('error')).toHaveTextContent("Failed to update about section")
    })
    it("should call handleUpdate", () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('update')))
        expect(screen.getByTestId('image')).toHaveTextContent(person.about.image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.about.text)
        expect(screen.getByTestId('current-image')).toHaveTextContent('updatedImage')
    })
    it("should return expected state on handleClose", () => {
        render(<MockChildren />)
        act(() => userEvent.click(screen.getByTestId('close')))
        expect(screen.getByTestId('image')).toHaveTextContent(person.about.image)
        expect(screen.getByTestId('title')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('text')).toHaveTextContent(person.about.text)
        expect(screen.getByTestId('show')).toHaveTextContent("false")
    })
})