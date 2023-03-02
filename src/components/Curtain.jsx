import React from 'react'

import alienRobot from '../assets/img/alien_robot.png'
import bird from '../assets/img/bird.png'

function Curtain() {
    return (
        <>
            <div className="left-panel flex items-center justify-center">
                <div>
                    <h1 className="text-6xl tracking-wider scaleIn text-center text__shadow2 bangers__font text-white mb-3">READY?</h1>
                    <img className='robot moveInLeft' src={alienRobot} alt="alien"/>                
                </div>
            </div>                
            <div className="right-panel flex items-center justify-center">
                <div>
                    <h1 className="text-6xl tracking-wider scaleIn text-center text__shadow2 bangers__font text-white mb-3">LET'S GO!!</h1>
                    <img className='bird moveInRight' src={bird} alt="bird"/>                    
                </div>
            </div>
        </>
    )
}

export default Curtain
