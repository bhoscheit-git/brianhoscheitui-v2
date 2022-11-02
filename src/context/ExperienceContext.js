import { useReducer } from "react"
import { EXPERIENCE_DELETE_BEGIN, EXPERIENCE_DELETE_ERROR, EXPERIENCE_DELETE_SUCESS, EXPERIENCE_SAVE_BEGIN, EXPERIENCE_SAVE_ERROR, EXPERIENCE_SAVE_SUCESS, EXPERIENCE_SHOW, EXPERIENCE_SHOW_EDIT, EXPERIENCE_UPDATE } from "../constants/constant"
import { makePutApiCall, makeDeleteApiCall } from "../helpers/apiHelper"
import { experienceReducer } from "../reducers/experienceReducer"
import { useAppContext } from "./AppContext"

const initialState = { experience: [] }

export const useExperienceContext = () => {
    const { person } = useAppContext()
    const [state, dispatch] = useReducer(experienceReducer, initialState)
    const handleClose = () => dispatch({ type: EXPERIENCE_SHOW, payload: false })
    const handleEdit = (experience) => dispatch({ type: EXPERIENCE_SHOW_EDIT, payload: experience })
    const handleUpdate = (key, value) => dispatch({ type: EXPERIENCE_UPDATE, payload: { key, value } })
    const handleSave = async () => {
        try {
            dispatch({ type: EXPERIENCE_SAVE_BEGIN })
            await makePutApiCall('experience/bhoscheit', state.currentExperience)
            dispatch({ type: EXPERIENCE_SAVE_SUCESS })
        } catch (e) {
            dispatch({ type: EXPERIENCE_SAVE_ERROR })
        }
    }
    const handleDelete = async () => {
        try {
            dispatch({ type: EXPERIENCE_DELETE_BEGIN })
            const { id } = state.currentExperience
            await makeDeleteApiCall('experience/bhoscheit', { id })
            dispatch({ type: EXPERIENCE_DELETE_SUCESS })
        } catch (e) {
            dispatch({ type: EXPERIENCE_DELETE_ERROR })
        }
    }

    return { handleEdit, handleSave, handleUpdate, handleDelete, handleClose, ...state, experience: person?.experience }
}