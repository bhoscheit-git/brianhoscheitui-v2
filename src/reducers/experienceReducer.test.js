import { EXPERIENCE_SAVE_BEGIN, EXPERIENCE_SAVE_ERROR, EXPERIENCE_SAVE_SUCESS, EXPERIENCE_SHOW, EXPERIENCE_SHOW_EDIT, EXPERIENCE_UPDATE, EXPERIENCE_DELETE_BEGIN, EXPERIENCE_DELETE_SUCESS, EXPERIENCE_DELETE_ERROR } from "../constants/constant"
import { experienceReducer } from "./experienceReducer"

describe("experienceReducer", () => {
    let state
    beforeEach(() => {
        state = { test: 'test' }
    })
    it("should return expected value with type EXPERIENCE_SAVE_BEGIN", () => {
        const expected = { ...state, isLoading: true, error: '' }
        const action = { type: EXPERIENCE_SAVE_BEGIN }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_SAVE_SUCESS", () => {
        const expected = { ...state, isLoading: false, show: false }
        const action = { type: EXPERIENCE_SAVE_SUCESS }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_SAVE_ERROR", () => {
        const expected = { ...state, error: "Failed to update experience section", isLoading: false, }
        const action = { type: EXPERIENCE_SAVE_ERROR }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_DELETE_BEGIN", () => {
        const expected = { ...state, isLoading: true, error: '' }
        const action = { type: EXPERIENCE_DELETE_BEGIN }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_DELETE_SUCESS", () => {
        const expected = { ...state, isLoading: false, show: false }
        const action = { type: EXPERIENCE_DELETE_SUCESS }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_DELETE_ERROR", () => {
        const expected = { ...state, error: "Failed to delete experience", isLoading: false, }
        const action = { type: EXPERIENCE_DELETE_ERROR }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_UPDATE", () => {
        const key = 'key'
        const value = 'value'
        const expected = { ...state, currentExperience: { [key]: value } }
        const payload = { key, value }
        const action = { type: EXPERIENCE_UPDATE, payload }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_SHOW", () => {
        const payload = true
        const expected = { ...state, show: payload }
        const action = { type: EXPERIENCE_SHOW, payload }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type EXPERIENCE_SHOW_EDIT", () => {
        const payload = { test: 'test' }
        const expected = { ...state, currentExperience: payload, show: true }
        const action = { type: EXPERIENCE_SHOW_EDIT, payload }
        const actual = experienceReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected value with type default", () => {
        const actual = experienceReducer(state, { type: 'default' })
        expect(actual).toEqual(state)
    })

})