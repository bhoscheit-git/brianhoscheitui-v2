import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCESS, LOGIN_UPDATE } from "../constants/constant"


const isValid = (state) => {
    const { username, password, isLoading } = state
    return !!username && !!password && !isLoading
}

export const loginReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_UPDATE: {
            const { key, value } = action.payload
            const updatedState = { ...state, [key]: value }
            return { ...updatedState, isValid: isValid(updatedState) }
        }
        case LOGIN_BEGIN:
            return { ...state, message: {}, isLoading: true }
        case LOGIN_SUCESS:
            return { ...state, message: { variant: 'success', text: 'Login successful!' }, isLoading: false }
        case LOGIN_ERROR:
            return { ...state, message: { variant: 'warning', text: 'Invalid username or password' }, isLoading: false }
        default:
            return state
    }
}