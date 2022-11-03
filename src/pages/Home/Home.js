import { Container } from "react-bootstrap"
import AboutMe from "../../components/AboutMe"
import ImageBanner from "../../components/ImageBanner"
import Skills from "../../components/Skills"
import UpdateAboutMeModal from "../../components/UpdateAboutMeModal/UpdateAboutMeModal"
import { useHomeContext } from "../../context/HomeContext"
import './Home.css'

const Home = () => {
    const { about, show, isLoading, currentAbout, handleEdit, handleSave, handleUpdate, handleClose, error } = useHomeContext()
    return (
        <>
            <UpdateAboutMeModal show={show} isLoading={isLoading} about={currentAbout} onClose={handleClose} onUpdate={handleUpdate} onSave={handleSave} error={error} />
            <Container>
                <ImageBanner style={{ marginBottom: '8px' }} src="https://d33l0n8cnowg3h.cloudfront.net/philly-banner.jpg" />
                <AboutMe
                    isLoading={isLoading}
                    cardImg={about?.image}
                    cardTitle={about?.title}
                    cardText={about?.text}
                    isEditable={true}
                    onEdit={handleEdit} />
                <Skills />
            </Container>
        </>
    )
}

export default Home
