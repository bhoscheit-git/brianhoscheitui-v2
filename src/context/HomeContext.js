import { useReducer } from "react"
import { ABOUT_SAVE_BEGIN, ABOUT_SAVE_ERROR, ABOUT_SAVE_SUCESS, ABOUT_SHOW, ABOUT_SHOW_EDIT, ABOUT_UPDATE } from "../constants/constant"
import { makePutApiCall } from "../helpers/apiHelper"
import { homeReducer } from "../reducers/homeReducer"
import { useAppContext } from "./AppContext"

const initialState = { about: { image: '', title: '', text: '' } }

export const useHomeContext = () => {
    const { person } = useAppContext()
    const [state, dispatch] = useReducer(homeReducer, initialState)
    const handleClose = () => dispatch({ type: ABOUT_SHOW, payload: false })
    const handleEdit = () => dispatch({ type: ABOUT_SHOW_EDIT, payload: person?.about })
    const handleUpdate = (key, value) => dispatch({ type: ABOUT_UPDATE, payload: { key, value } })
    const handleSave = async () => {
        try {
            dispatch({ type: ABOUT_SAVE_BEGIN })
            await makePutApiCall('about/bhoscheit', state.currentAbout)
            dispatch({ type: ABOUT_SAVE_SUCESS })
        } catch (e) {
            dispatch({ type: ABOUT_SAVE_ERROR })
        }
    }

    return { handleEdit, handleSave, handleUpdate, handleClose, ...state, about: person?.about }
}