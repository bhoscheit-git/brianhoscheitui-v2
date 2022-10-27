import { Container } from "react-bootstrap"
import AboutMe from "../../components/AboutMe"
import ImageBanner from "../../components/ImageBanner"
import Skills from "../../components/Skills"
import { useAppContext } from "../../context/AppContext"
import './Home.css'

const Home = () => {
    const { person } = useAppContext()
    const { about } = person ?? {}
    return (
        <Container>
            <ImageBanner style={{ marginBottom: '8px' }} src="https://d33l0n8cnowg3h.cloudfront.net/philly-banner.jpg" />
            <AboutMe
                cardImg={about.image}
                cardTitle={about.title}
                cardText={about.text}/>
            <Skills />
        </Container>
    )
}

export default Home
