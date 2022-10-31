import { useState } from "react"
import { useLocation } from "react-router-dom"


export const useHeaderContext = () => {
    const [expanded, setExpanded] = useState(false)
    const location = useLocation()
    const isActive = (pathname) => location.pathname === `/${pathname}`
    const toggle = () => setExpanded(prev => !prev)
    const collapse = () => setExpanded(false)
    return { expanded, toggle, collapse, isActive }
}