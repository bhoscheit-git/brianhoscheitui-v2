import { EXPERIENCE_SAVE_BEGIN, EXPERIENCE_SAVE_ERROR, EXPERIENCE_SAVE_SUCESS, EXPERIENCE_SHOW, EXPERIENCE_SHOW_EDIT, EXPERIENCE_UPDATE, EXPERIENCE_DELETE_BEGIN, EXPERIENCE_DELETE_SUCESS, EXPERIENCE_DELETE_ERROR } from "../constants/constant";

export const experienceReducer = (state, action) => {
    switch (action.type) {
        case EXPERIENCE_SAVE_BEGIN:
            return { ...state, isLoading: true, error: '' }
        case EXPERIENCE_SAVE_SUCESS:
            return { ...state, isLoading: false, show: false }
        case EXPERIENCE_SAVE_ERROR:
            return { ...state, isLoading: false, error: 'Failed to update experience section' }
        case EXPERIENCE_DELETE_BEGIN:
            return { ...state, isLoading: true, error: '' }
        case EXPERIENCE_DELETE_SUCESS:
            return { ...state, isLoading: false, show: false }
        case EXPERIENCE_DELETE_ERROR:
            return { ...state, isLoading: false, error: 'Failed to delete experience' }
        case EXPERIENCE_UPDATE: {
            const { key, value } = action.payload
            return { ...state, currentExperience: { ...state.currentExperience, [key]: value } }
        }
        case EXPERIENCE_SHOW:
            return { ...state, show: action.payload }
        case EXPERIENCE_SHOW_EDIT:
            return { ...state, currentExperience: action.payload, show: true }
        default:
            return state;
    }
}
