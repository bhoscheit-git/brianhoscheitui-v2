import { render, screen, act } from '@testing-library/react'
import * as apiHelper from '../helpers/apiHelper'
import { AppProvider, useAppContext } from './AppContext'

const MockChildren = () => {
    const { person } = useAppContext()
    const { about, skills, experience } = person ?? {}
    return (
        <div>
            <div data-testid="about">{about?.title}</div>
            <div data-testid="skills">{skills[0]}</div>
            <div data-testid="experience">{experience[0]?.title}</div>
        </div>
    )
}
const MockProvider = () => <AppProvider><MockChildren /></AppProvider>


describe("AppContext", () => {
    let json
    let response
    const person = { about: { title: 'title' }, skills: ['skill'], experience: [{ title: 'title' }] }
    beforeEach(() => {
        json = jest.fn().mockResolvedValue(person)
        response = {
            status: 200,
            json
        }
        jest.spyOn(apiHelper, "makeGetApiCall").mockResolvedValue(response)
    })
    it("should return expected state on success", async () => {
        await act(async () => render(<MockProvider />))
        expect(screen.getByTestId('about')).toHaveTextContent(person.about.title)
        expect(screen.getByTestId('skills')).toHaveTextContent(person.skills[0])
        expect(screen.getByTestId('experience')).toHaveTextContent(person.experience[0]?.title)
    })
    it("should return expected state on bad status", async () => {
        response = {
            status: 500,
            json
        }
        jest.spyOn(apiHelper, "makeGetApiCall").mockResolvedValue(response)
        await act(async () => render(<MockProvider />))
        expect(screen.getByTestId('about')).not.toHaveTextContent(person.about.title)
        expect(screen.getByTestId('skills')).not.toHaveTextContent(person.skills[0])
        expect(screen.getByTestId('experience')).not.toHaveTextContent(person.experience[0]?.title)
    })
    it("should return expected state on exception", async () => {
        jest.spyOn(apiHelper, "makeGetApiCall").mockImplementation(() => {
            throw new Error()
        })
        await act(async () => render(<MockProvider />))
        expect(screen.getByTestId('about')).not.toHaveTextContent(person.about.title)
        expect(screen.getByTestId('skills')).not.toHaveTextContent(person.skills[0])
        expect(screen.getByTestId('experience')).not.toHaveTextContent(person.experience[0]?.title)
    })
})