import React, { useRef } from "react"
import { Container } from "react-bootstrap"

import { useInView } from "framer-motion"

const ExperienceEntry = (props) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <Container key={props.key} className={'p-0 pb-3'}
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                <h5>{props.experienceTitle}</h5>
                <p>{props.experienceDuration}</p>
                <ul>
                    {props.experienceRoles.map((role) => {
                        return (
                            <li>{role}</li>
                        )
                    })}
                </ul>
            </Container>
        </>
    )
}

export default ExperienceEntry