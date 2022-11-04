import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCESS, LOGIN_UPDATE } from "../constants/constant"
import { loginReducer } from "./loginReducer"

describe("loginReducer", () => {
    const validTests = [
        { initialState: { username: 'test', isLoading: false }, isValid: false },
        { initialState: { password: 'test', isLoading: false }, isValid: false },
        { initialState: { username: 'test', password: 'test', isLoading: true }, isValid: false },
        { initialState: { username: 'test', password: 'test', isLoading: false }, isValid: true }
    ]
    let state
    beforeEach(() => {
        state = { test: 'test' }
    })
    it.each(validTests)("should return expected state on LOGIN_UPDATE", ({initialState, isValid}) => {
        const key = 'key'
        const value = 'value'
        const payload = { key, value }
        const expected = { ...initialState, [key]: value, isValid }
        const action = { type: LOGIN_UPDATE, payload }
        const actual = loginReducer(initialState, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected state on LOGIN_BEGIN", () => {
        const expected = { ...state, isLoading: true, message: {} }
        const action = { type: LOGIN_BEGIN }
        const actual = loginReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected state on LOGIN_SUCCESS", () => {
        const expected = { ...state, isLoading: false, message: {variant: 'success', text: 'Login successful!'} }
        const action = { type: LOGIN_SUCESS }
        const actual = loginReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected state on LOGIN_ERROR", () => {
        const expected = { ...state, isLoading: false, message: {variant: 'warning', text: 'Invalid username or password'} }
        const action = { type: LOGIN_ERROR }
        const actual = loginReducer(state, action)
        expect(actual).toEqual(expected)
    })
    it("should return expected state on default", () => {
        const action = { type: 'default' }
        const actual = loginReducer(state, action)
        expect(actual).toEqual(state)
    })
})