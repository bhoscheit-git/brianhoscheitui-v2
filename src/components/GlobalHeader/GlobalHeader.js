import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import './GlobalHeader.css'
import { useHeaderContext } from "../../context/HeaderContext";

const GlobalHeader = () => {
    const { expanded, collapse, toggle, isActive } = useHeaderContext()

    return (
        <Navbar expanded={expanded} expand="lg" className="global-nav" fixed="top">
            <Navbar.Brand data-testid="global-header" as={Link} to="home">
                Brian Hoscheit
            </Navbar.Brand>
            <Navbar.Toggle data-testid="nav-toggle" aria-controls="responsive-navbar-nav" onClick={toggle} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link data-testid="link-home" active={isActive("home")} as={Link} to="home" onClick={collapse}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link data-testid="link-experience" active={isActive("experience")} as={Link} to="experience" onClick={collapse}>Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default GlobalHeader
