import { Auth } from "aws-amplify"
import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCESS, LOGIN_UPDATE } from "../constants/constant"
import { loginReducer } from "../reducers/loginReducer"
import { useAuthContext } from "./AuthContext"

const initialState = {
    username: '',
    password: '',
    message: {},
    isLoading: false
}

export const useLoginContext = () => {
    const navigate = useNavigate()
    const { setIsUserAuthenticated } = useAuthContext()
    const [state, dispatch] = useReducer(loginReducer, initialState)

    const handleChange = (key, value) => dispatch({ type: LOGIN_UPDATE, payload: { key, value } })

    const handleSubmit = async () => {
        const { username, password } = state
        try {
            dispatch({ type: LOGIN_BEGIN })
            await Auth.signIn(username, password)
            dispatch({ type: LOGIN_SUCESS })
            await setIsUserAuthenticated()
            navigate('/home')
        } catch (e) {
            dispatch({ type: LOGIN_ERROR })
        }
    }

    return { handleChange, handleSubmit, ...state }
}