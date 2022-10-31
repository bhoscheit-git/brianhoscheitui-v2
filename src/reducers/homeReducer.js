import { ABOUT_SAVE_BEGIN, ABOUT_SAVE_ERROR, ABOUT_SAVE_SUCESS, ABOUT_SHOW, ABOUT_SHOW_EDIT, ABOUT_UPDATE } from "../constants/constant";

export const homeReducer = (state, action) => {
    switch (action.type) {
        case ABOUT_SAVE_BEGIN:
            return { ...state, isLoading: true, error: '' }
        case ABOUT_SAVE_SUCESS:
            return { ...state, isLoading: false, show: false }
        case ABOUT_SAVE_ERROR:
            return { ...state, isLoading: false, error: 'Failed to update about section' }
        case ABOUT_UPDATE: {
            const { key, value } = action.payload
            return { ...state, currentAbout: { ...state.currentAbout, [key]: value } }
        }
        case ABOUT_SHOW:
            return { ...state, show: action.payload }
        case ABOUT_SHOW_EDIT:
            return { ...state, currentAbout: action.payload, show: true }
        default:
            return state;
    }
}
