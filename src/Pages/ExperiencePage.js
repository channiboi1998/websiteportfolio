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
                                <Badge bg={'secondary'}>NodeJS</Badge>
                                <Badge bg={'secondary'}>React</Badge>
                                <Badge bg={'secondary'}>Angular</Badge>
                                <Badge bg={'secondary'}>Web API</Badge>
                                <Badge bg={'secondary'}>PHP</Badge>
                                <Badge bg={'secondary'}>Codeigniter</Badge>
                                <Badge bg={'secondary'}>MySQL</Badge>
                                <Badge bg={'secondary'}>Mongo</Badge>
                                <Badge bg={'secondary'}>Bootstrap</Badge>
                                <Badge bg={'secondary'}>Material</Badge>
                                <Badge bg={'secondary'}>LESS</Badge>
                                <Badge bg={'secondary'}>HTML</Badge>
                                <Badge bg={'secondary'}>CSS</Badge>
                                <Badge bg={'secondary'}>WordPress</Badge>
                                <Badge bg={'secondary'}>Magento</Badge>
                        </Col>
                        <Col sm={12} md={6}>
                            {this.experience.map((experience) => {
                                return (
                                    <ExperienceEntry key={experience.id} experienceTitle={experience.title} experienceDuration={experience.duration} experienceRoles={experience.roles} />
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default ExperiencePage