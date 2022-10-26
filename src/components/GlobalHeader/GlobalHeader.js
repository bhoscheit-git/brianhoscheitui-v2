import { Navbar, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import './GlobalHeader.css'

const GlobalHeader = () => {
    const [expanded, setExpanded] = useState(false)
    const location = useLocation()

    const isActive = (pathname) => location.pathname === `/${pathname}`
    const handleExpand = () => setExpanded(false)

    return (
        <Navbar expanded={expanded} expand="lg" className="global-nav" fixed="top">
            <Navbar.Brand data-testid="global-header" as={Link} to="home">
                Brian Hoscheit
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link data-testid="link-home" active={isActive("home")} as={Link} to="home" onClick={handleExpand}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link data-testid="link-experience" active={isActive("experience")} as={Link} to="experience" onClick={handleExpand}>Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default GlobalHeader
