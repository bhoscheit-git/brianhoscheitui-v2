import { makeGetApiCall, makePutApiCall } from "./apiHelper"
import * as Auth from './auth'

describe("apiHelper", () => {
    const token = 'token'
    let response
    let fetch
    beforeEach(() => {
        response = { status: 200 }
        fetch = jest.fn().mockResolvedValue(response)
        global.fetch = fetch
        jest.spyOn(Auth, "getJwt").mockReturnValue(token)
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
    describe("makePutApiCall", () => {
        it("should return expected value", async () => {
            const actual = await makePutApiCall()
            expect(actual).toEqual(response)
        })
        it("should call fetch with expected params", async () => {
            const route = 'route'
            const body = { test: 'test' }
            const expected = {
                body: JSON.stringify(body),
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                method: "PUT"
            }

            await makePutApiCall(route, body)
            expect(fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_SERVICE_URL}/${route}`, expected)
        })
    })
})