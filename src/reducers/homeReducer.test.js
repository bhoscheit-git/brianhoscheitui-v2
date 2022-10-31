import { ABOUT_SAVE_BEGIN, ABOUT_SAVE_ERROR, ABOUT_SAVE_SUCESS, ABOUT_SHOW, ABOUT_SHOW_EDIT, ABOUT_UPDATE } from "../constants/constant"
import { homeReducer } from "./homeReducer"

describe("homeReducer", () => {
    let state
    beforeEach(() => {
        state = { test: 'test' }
    })
    it("should return expected value with type ABOUT_SAVE_BEGIN", () => {
        const expected = { ...state, isLoading: true, error: '' }
        const action = { type: ABOUT_SAVE_BEGIN }
        const actual = homeReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type ABOUT_SAVE_SUCESS", () => {
        const expected = { ...state, isLoading: false, show: false }
        const action = { type: ABOUT_SAVE_SUCESS }
        const actual = homeReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type ABOUT_SAVE_ERROR", () => {
        const expected = { ...state, error: "Failed to update about section", isLoading: false, }
        const action = { type: ABOUT_SAVE_ERROR }
        const actual = homeReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type ABOUT_UPDATE", () => {
        const key = 'key'
        const value = 'value'
        const expected = { ...state, currentAbout: { [key]: value } }
        const payload = { key, value }
        const action = { type: ABOUT_UPDATE, payload }
        const actual = homeReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type ABOUT_SHOW", () => {
        const payload = true
        const expected = { ...state, show: payload }
        const action = { type: ABOUT_SHOW, payload }
        const actual = homeReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type ABOUT_SHOW_EDIT", () => {
        const payload = { test: 'test' }
        const expected = { ...state, currentAbout: payload, show: true }
        const action = { type: ABOUT_SHOW_EDIT, payload }
        const actual = homeReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type default", () => {
        const actual = homeReducer(state, { type: 'default' })
        expect(actual).toEqual(state)
    })

})