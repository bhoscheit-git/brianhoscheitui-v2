import { PERSON_GET_REQUEST_BEGIN, PERSON_GET_REQUEST_ERROR, PERSON_GET_REQUEST_SUCCESS } from "../constants/constant"


export const appReducer = (state, action) => {
    switch (action.type) {
        case PERSON_GET_REQUEST_BEGIN:
            return { ...state, isLoading: true }
        case PERSON_GET_REQUEST_SUCCESS:
            return { ...state, person: action.payload, isLoading: false }
        case PERSON_GET_REQUEST_ERROR:
            return { ...state, isLoading: false }
        default: {
            return state
        }
    }
}