import React, { useRef } from 'react'
import { Col, Card, Badge } from 'react-bootstrap'

import { useInView } from "framer-motion"

const PortfolioEntry = (props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <Col 
                sm={12} 
                md={4} 
                className={'portfolio-entry'}
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >   
                <Card className={'rounded-0 card'}>
                    <Card.Header className={'portfolio-name'}>
                        {props.portfolioTitle}
                    </Card.Header>
                    <img
                        src={props.portfolioImageUrl}
                        alt={'this is the alt'}
                        className={'portfolio-preview'}
                    />
                    <Card.Body>
                        {props.portfolioTags.map((portfolioTag) => {
                            return (
                                <Badge bg={'secondary'}>{portfolioTag}</Badge>
                            )
                        })}
                        <Card.Text>
                            {props.portfolioDescription}
                        </Card.Text>
                        <Card.Link href={props.portfolioLink} className={'portfolio-action'} target={'_blank'}>
                            {props.portfolioActionLabel}
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default PortfolioEntry