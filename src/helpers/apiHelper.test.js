import { makeGetApiCall } from "./apiHelper"

describe("apiHelper", () => {
    let response
    let fetch
    beforeEach(() => {
        response = { status: 200 }
        fetch = jest.fn().mockResolvedValue(response)
        global.fetch = fetch
    })
    describe("makeGetApiCall", () => {
        it("should return expected value", async () => {
            const actual = await makeGetApiCall()
            expect(actual).toEqual(response)
        })
        it("should call fetch with expected params", async () => {
            const route = 'route'
            await makeGetApiCall(route)
            expect(fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_SERVICE_URL}/${route}`)
        })
    })
})