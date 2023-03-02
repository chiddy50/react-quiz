import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Welcome from '../components/Welcome'

import { AppContext } from '../context/AppState'

function Home() {
    const { start } = useContext(AppContext)
    const [showIntro, setShowIntro] = useState(false)
    
    return (
        <>
            { start && <Header/> }
            { showIntro === false && <Welcome setShowIntro={() => setShowIntro(true)} /> }
            { showIntro === true && <Intro/> }
        </>
    )
}

export default Home
