import React from "react";
import myphoto from "../assets/img/my-photo.jpg"
import { Container, Row, Col } from "react-bootstrap"
import PortfolioEntry from "../Templates/PortfolioEntry"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons"

import PortfolioJSON from "../json-data/Portfolio.json"

import { motion } from "framer-motion"

import TypewriterComponent from "typewriter-effect";

class HomePage extends React.Component {

    constructor() {
        super();
        this.portfolio = PortfolioJSON;
    }

    render() {
        return (
            <>
                <Container className={'section hero'}>
                    <Row className={'align-items-center'}>
                        <Col sm={12} md={8} className={'hero-content'}>
                            <Container className={'home-hero-heading'}>
                                <div className={'heading-overlay'}></div>
                                <h1>
                                    <TypewriterComponent
                                        options={{
                                            strings: ['I create things for the internet.', 'I build websites for a living.'],
                                            autoStart: true,
                                            loop: true
                                        }}
                                    />
                                </h1>
                            </Container>
                            <p>My name is Christian Verzosa a junior front-end developer from the Philippines. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to reach out.</p>
                            <Container className={'social-links p-0'}>
                                <a href={'https://github.com/channiboi1998'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <FontAwesomeIcon icon={faGithub} />Github
                                </a>
                                <a href={'https://www.linkedin.com/in/christian-verzosa-4917341a1/'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <FontAwesomeIcon icon={faLinkedin} />LinkedIn
                                </a>
                                <a href={'https://www.instagram.com/chanverzosa98/'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <FontAwesomeIcon icon={faInstagram} />Instagram
                                </a>

                                <a href={'mailto:christian.e.verzosa@gmail.com'}>
                                    <FontAwesomeIcon icon={faGoogle} />Gmail
                                </a>
                            </Container>
                        </Col>
                        <Col sm={12} md={4} className={'hero-image'}>
                            <motion.img
                                src={myphoto}
                                alt={'christian-verzosa-profile'}
                                className={'img-desktop'}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container className={'section portfolio'}>
                    <Row>
                        {this.portfolio.map((portfolio) => {
                            return (
                                <PortfolioEntry
                                    key={portfolio.id}
                                    portfolioTitle={portfolio.title}
                                    portfolioImageUrl={portfolio.image_url}
                                    portfolioDescription={portfolio.description}
                                    portfolioLink={portfolio.link}
                                    portfolioTags={portfolio.tags}
                                    portfolioActionLabel={portfolio.action_label}
                                />
                            )
                        }).reverse()}
                    </Row>
                </Container>
            </>
        )
    }
}

export default HomePage