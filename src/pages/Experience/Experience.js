import { Container } from "react-bootstrap";
import AboutMe from "../../components/AboutMe";

const experiences = [
    {
        cardImg: "https://d33l0n8cnowg3h.cloudfront.net/Travelers_share.jpg",
        cardTitle: "Software Engineer I",
        cardText: `Developer on mission critical software Find A Claim 2.0 used by claim professionals to locate client data across hundreds of millions of records.

        Involved in the development, testing, and deployment of key Travelers’s initiative Straight Through Processing (STP) to automate report only claims.
        
        Learned and utilized new technologies React, Jest, Node.js, and MongoDb within a month of joining Travelers.
        
        Implemented solution to remove stale documents from Find A Claim 2.0 Mongo collections at a rate 100x faster than the architecture proposed solution (execution time of approximately 4 hours daily to 3 minutes).
        
        Joined HSP Innersourcing team to assist technology value stream with new HSP features.
        
        Frequently presents new claim platform enhancements to business stakeholders.
        
        Mentored two junior developers from the Travelers Software Engineering Bootcamp.
        
        Identified and participated in growth opportunities through the Presentation and Facilitation Group Mentoring Program and the Security Enthusiasts Group`
    },
    {
        cardImg: "https://d33l0n8cnowg3h.cloudfront.net/bny_logo.png",
        cardTitle: "Lead Analyst - Full Stack Software Developer",
        cardText: `Consistently ranked within the top 15% of BNY Mellon’s 50,000+ employees by performance.

        Was Responsible for major features and architectural design on a fully self-service enterprise grade solution to manage BNY Mellon’s reconciliations.
        
        Reduced operational risk by developing a parent-child relationship for recon configurations, which automated the flow of user updates.
        
        Ensured progress tracking in an agile environment through the use of Git integrated Jira scrum boards.
        
        Implemented full unit test coverage through the use of Katalon Studio, NUnit, and Moq.
        
        Presented application demos to prospective clients, led application trainings, and managed user acceptance testing.
        
        Utilized HTML, CSS, Bootstrap, Typescript, JavaScript, Angular 5+, C# RESTful Web Api, and T-SQL.`
    }
]
const Experience = () => (
    <Container>
        {experiences.map(({ cardImg, cardTitle, cardText }, key) => <AboutMe key={key} cardImg={cardImg} cardTitle={cardTitle} cardText={cardText} />)}
    </Container>
)

export default Experience