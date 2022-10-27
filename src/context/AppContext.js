import { createContext, useContext, useEffect, useReducer } from "react";
import { PERSON_GET_REQUEST_BEGIN, PERSON_GET_REQUEST_ERROR, PERSON_GET_REQUEST_SUCCESS } from "../constants/constant";
import { makeGetApiCall } from '../helpers/apiHelper'
import { appReducer } from "../reducers/appReducer";

const AppContext = createContext()


const initialState = {
    isLoading: false,
    person: {
        about: {},
        skills: [],
        experience: []
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState)
    const getPerson = async () => {
        try {
            dispatch({ type: PERSON_GET_REQUEST_BEGIN })
            const response = await makeGetApiCall("person?userId=bhoscheit")
            switch (response.status) {
                case 200: {
                    const payload = await response.json()
                    dispatch({ type: PERSON_GET_REQUEST_SUCCESS, payload })
                    break;
                }
                default: {
                    dispatch({ type: PERSON_GET_REQUEST_ERROR })
                    break;
                }
            }
        } catch (e) {
            dispatch({ type: PERSON_GET_REQUEST_ERROR })
        }
    }

    useEffect(() => {
        getPerson()
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)