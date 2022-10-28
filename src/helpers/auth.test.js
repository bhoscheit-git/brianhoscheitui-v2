import { Auth } from 'aws-amplify'
import { getJwt } from './auth'

const mockToken = 'token'
const mockSession = {
    getAccessToken: () => ({
        getJwtToken: () => {
            return mockToken
        }
    })
}
describe("Auth", () => {
    beforeEach(() => {
        jest.spyOn(Auth, "currentSession").mockResolvedValue(mockSession)
    })
    it("should return the expected value", async () => {
        const actual = await getJwt()
        expect(actual).toEqual(mockToken)
    })
})