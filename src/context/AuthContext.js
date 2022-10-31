import { createContext, useContext, useEffect, useState } from "react";
import { Auth } from 'aws-amplify'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const setIsUserAuthenticated = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true)
        } catch {
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        setIsUserAuthenticated()
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsUserAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)