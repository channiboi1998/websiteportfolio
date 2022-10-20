import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ExperienceEntry from "../Templates/ExperienceEntry"
import ExperienceJSON from "../json-data/Experience.json"
import { Badge } from "react-bootstrap"

class ExperiencePage extends React.Component {

    constructor() {
        super();
        this.experience = ExperienceJSON;
    }

    render() {
        return (
            <>
                <Container className={'section experience'}>
                    <Row>
                        <Col sm={12} md={6} className={'hero-content pb-5'}>
                            <h1>I build websites for a living.</h1>
                            <p className={'mb-5'}>As a front end developer, I enjoy building digital and creative products from start to finish. Focusing on simple and intuitive experiences that constantly grow and improve based on user metrics. I am soon to be full stack developer. A Village88 Trainee.</p>
                                <Badge bg={'secondary'}>JavaScript ES5 ES6</Badge>
                                <Badge bg={'secondary'}>TypeScript</Badge>
                                <Badge bg={'secondary'}>NodeJS</Badge>
                                <Badge bg={'secondary'}>Express</Badge>
                                <Badge bg={'secondary'}>EJS</Badge>
                                <Badge bg={'secondary'}>React</Badge>
                                <Badge bg={'secondary'}>Angular</Badge>
                                <Badge bg={'secondary'}>Socket.io</Badge>
                                <Badge bg={'secondary'}>jQuery</Badge>
                                <Badge bg={'secondary'}>Ajax</Badge>
                                <Badge bg={'secondary'}>Axios</Badge>
                                <Badge bg={'secondary'}>Docker</Badge>
                                <Badge bg={'secondary'}>API</Badge>
                                <Badge bg={'secondary'}>Postman</Badge>
                                <Badge bg={'secondary'}>MySQL</Badge>
                                <Badge bg={'secondary'}>Workbench</Badge>
                                <Badge bg={'secondary'}>Jenkins</Badge>
                                <Badge bg={'secondary'}>Mocha</Badge>
                                <Badge bg={'secondary'}>Chai</Badge>
                                <Badge bg={'secondary'}>Git</Badge>
                                <Badge bg={'secondary'}>Github</Badge>
                                <Badge bg={'secondary'}>Github Actions</Badge>
                                <Badge bg={'secondary'}>PHP</Badge>
                                <Badge bg={'secondary'}>Codeigniter</Badge>
                                <Badge bg={'secondary'}>ORM</Badge>
                                <Badge bg={'secondary'}>Material</Badge>
                                <Badge bg={'secondary'}>WordPress</Badge>
                                <Badge bg={'secondary'}>Magento 1</Badge>
                                <Badge bg={'secondary'}>Shopify</Badge>
                                <Badge bg={'secondary'}>Html</Badge>
                                <Badge bg={'secondary'}>Twig</Badge>
                                <Badge bg={'secondary'}>CSS</Badge>
                                <Badge bg={'secondary'}>LESS</Badge>
                                <Badge bg={'secondary'}>Bootstrap</Badge>
                                <Badge bg={'secondary'}>Slack</Badge>
                        </Col>
                        <Col sm={12} md={6}>
                            {this.experience.map((experience) => {
                                return (
                                    <ExperienceEntry key={experience.id} experienceTitle={experience.title} experienceDuration={experience.duration} experienceRoles={experience.roles} />
                                )
                            }).reverse()}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default ExperiencePage