import { render, screen, act } from "@testing-library/react"
import * as AuthContext from '../../context/AuthContext'
import AboutMe from "./AboutMe"
import userEvent from '@testing-library/user-event'

describe("About Me", () => {
    const lg = 1
    const src = 'src'
    const title = 'title'
    const text = 'text'
    let onEdit
    let rerender
    beforeEach(() => {
        onEdit = jest.fn()
        jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({ isAuthenticated: false }));
        ({ rerender } = render(<AboutMe lg={lg} cardImg={src} cardTitle={title} cardText={text} />));
    })
    it("should container image", () => {
        expect(screen.getByTestId("card-img")).toHaveAttribute("src", src)
    })
    it("should contain title", () => {
        const img = screen.getByTestId("card-img")
        act(() => img.dispatchEvent(new Event("load")))
        expect(screen.getByTestId("card-title")).toHaveTextContent(title)
    })
    it("should contain text", () => {
        const img = screen.getByTestId("card-img")
        act(() => img.dispatchEvent(new Event("load")))
        expect(screen.getByTestId("card-text")).toHaveTextContent(text)
    })
    it.each([{ testId: 'card-img-col', width: lg }, { testId: 'card-txt-col', width: 12 - lg }])("should set column widths", ({ testId, width }) => {
        expect(screen.getByTestId(testId)).toHaveClass(`col-lg-${width}`)
    })
    it("should not display pencil when not authenticated", () => {
        expect(screen.queryByTestId('about-me-edit')).not.toBeInTheDocument()
    })
    it("should not display pencil when authenticated and not editable", () => {
        jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({ isAuthenticated: true }));
        rerender(<AboutMe lg={lg} cardImg={src} cardTitle={title} cardText={text} />);
        expect(screen.queryByTestId('about-me-edit')).not.toBeInTheDocument()
    })
    it("should display pencil when authenticated and editable", () => {
        jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({ isAuthenticated: true }));
        rerender(<AboutMe lg={lg} cardImg={src} cardTitle={title} cardText={text} isEditable={true} />);
        const img = screen.getByTestId("card-img")
        act(() => img.dispatchEvent(new Event("load")))
        expect(screen.getByTestId('about-me-edit')).toBeInTheDocument()
    })
    it("should call onEdit when pencil clicked", () => {
        jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({ isAuthenticated: true }));
        rerender(<AboutMe lg={lg} cardImg={src} cardTitle={title} cardText={text} onEdit={onEdit} isEditable={true} />);
        const img = screen.getByTestId("card-img")
        act(() => img.dispatchEvent(new Event("load")))
        act(() => userEvent.click(screen.getByTestId('about-me-edit')))
        expect(onEdit).toHaveBeenCalled()
    })
})