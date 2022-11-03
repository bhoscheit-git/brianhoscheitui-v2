import LinkedIn from '../../assets/LI-In-Bug.png'
import GitHub from '../../assets/GitHub-Mark-64px.png'
import { Image } from 'react-bootstrap'
import './GlobalFooter.css'

const GlobalFooter = () => (
    <footer className="global-footer text-center">
        <a data-testid="linkedin-link" href="https://www.linkedin.com/in/brian-hoscheit-3822a59a" target="_blank" rel="noreferrer">
            <Image src={LinkedIn} className="footer-icon" />
        </a>
        <a data-testid="github-link" href="https://github.com/bhoscheit-git" target="_blank" rel="noreferrer">
            <Image src={GitHub} className="footer-icon" />
        </a>
    </footer>
)

export default GlobalFooter
