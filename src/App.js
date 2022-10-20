import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ExperiencePage from "./Pages/ExperiencePage"
import HomePage from "./Pages/HomePage"
import SiteNavbar from "./Templates/SiteNavbar"

import { motion, useScroll, useSpring } from "framer-motion"

const App = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (
        <>
            <Router>
                <SiteNavbar />
                <motion.div className="progress-bar bg-danger" style={{ scaleX }} />
                <Routes>
                    <Route exact path='/websiteportfolio' element={<HomePage />}></Route>
                    <Route exact path='/experience' element={<ExperiencePage />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;