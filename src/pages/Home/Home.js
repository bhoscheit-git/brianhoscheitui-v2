import { Container } from "react-bootstrap"
import AboutMe from "../../components/AboutMe"
import ImageBanner from "../../components/ImageBanner"
import Skills from "../../components/Skills"
import './Home.css'

const Home = () => (
    <Container>
        <ImageBanner style={{marginBottom: '8px'}} src="https://d33l0n8cnowg3h.cloudfront.net/philly-banner.jpg"/>
        <AboutMe/>
        <Skills/>
    </Container>
)

export default Home