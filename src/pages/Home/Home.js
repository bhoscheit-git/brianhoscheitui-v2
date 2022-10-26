import { Container } from "react-bootstrap"
import AboutMe from "../../components/AboutMe"
import ImageBanner from "../../components/ImageBanner"
import Skills from "../../components/Skills"
import './Home.css'

const Home = () => (
    <Container>
        <ImageBanner style={{ marginBottom: '8px' }} src="https://d33l0n8cnowg3h.cloudfront.net/philly-banner.jpg" />
        <AboutMe
            cardImg="https://d33l0n8cnowg3h.cloudfront.net/brian_hoscheit_square.jpg"
            cardTitle="Hello, I'm Brian!"
            cardText="My name is Brian Hoscheit and I am a self taught software engineer working in the Philadelphia area. I have over 4 years experience in requirement gathering, architectural design, application development, and product delivery." />
        <Skills />
    </Container>
)

export default Home
