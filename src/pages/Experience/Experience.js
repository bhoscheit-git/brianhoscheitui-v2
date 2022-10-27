import { Container } from "react-bootstrap";
import AboutMe from "../../components/AboutMe";
import { useAppContext } from "../../context/AppContext";

const Experience = () => {
    const { person } = useAppContext()
    const { experience } = person ?? {}
    return (
        <Container>
            {experience.map(({ image, title, text }, key) => <AboutMe key={key} lg={4} cardImg={image} cardTitle={title} cardText={text} />)}
        </Container>
    )
}



export default Experience