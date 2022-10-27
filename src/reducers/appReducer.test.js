import { PERSON_GET_REQUEST_BEGIN, PERSON_GET_REQUEST_ERROR, PERSON_GET_REQUEST_SUCCESS } from "../constants/constant"
import { appReducer } from "./appReducer"

describe("appReducer", () => {
    let state
    beforeEach(() => {
        state = { test: 'test' }
    })
    it("should return expected value with type PERSON_GET_REQUEST_BEGIN", () => {
        const expected = { ...state, isLoading: true }
        const action = { type: PERSON_GET_REQUEST_BEGIN }
        const actual = appReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type PERSON_GET_REQUEST_SUCCESS", () => {
        const payload = {userId: 'userId'}
        const expected = { ...state, person: payload, isLoading: false }
        const action = { type: PERSON_GET_REQUEST_SUCCESS, payload }
        const actual = appReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type PERSON_GET_REQUEST_ERROR", () => {
        const expected = { ...state, isLoading: false }
        const action = { type: PERSON_GET_REQUEST_ERROR }
        const actual = appReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type default", () => {
        const action = { type: 'default' }
        const actual = appReducer(state, action)
        expect(actual).toEqual(state)
    })
})