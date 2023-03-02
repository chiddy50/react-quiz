import React, { useState, useContext, useRef, useEffect } from 'react'

import { AppContext } from '../context/AppState'

// import { TweenMax, TimelineLite, Power3 } from 'gsap'

import Question from './Question'
import Category from './Category'
import Loader from './Loader'
import Curtain from './Curtain'

function Intro() {
    const { setStart, questions, setIndex, index } = useContext(AppContext)
    const [showQuestion, setShowQuestion] = useState(false)
    const [loading, setLoading] = useState(true)    

    const chooseCategory = (category) => {
        setShowQuestion(true)
        setStart(true)
    }

    // let tl = new TimelineLite();

    // let app = useRef(null)
    // let images = useRef(null)

    useEffect(() => {
        // TweenMax.to(app, 0, {css: {
        //     visibility: 'visible'
        // }});      
        
        // const robot = document.querySelector('.robot');
        // const bird = document.querySelector('.bird');

        // tl.from(robot, 0.8, {x: -1200, ease: Power3.easeOut})   
        // tl.from(robot, 2, {scale: 0.1, ease: Power3.easeOut}, .2)
        
        // tl.from(bird, 0.8, {x: 1200, ease: Power3.easeOut})  
        // tl.from(bird, 2, {scale: 0.1, ease: Power3.easeOut}, .2)

        
        // const imgs = document.querySelectorAll('.category__item');
        // for (let i = 0; i < imgs.length; i++) {        
        //     if(i % 2 == 0){
        //         tl.from(imgs[i], 2, {scale: 0.1, ease: Power3.easeOut}, .2)                            
        //     }else{
        //         tl.from(imgs[i], 2, {scale: 0.1, ease: Power3.easeOut}, .2)  
        //     }    
        // }
        let leftPanel = document.querySelector('.left-panel');
        setTimeout(() => {
            setLoading(false)

            if(leftPanel){
                document.querySelector('.left-panel').style.transform = 'translateX(-100%)'
                document.querySelector('.right-panel').style.transform = 'translateX(100%)'
            }
        }, 3000);
        
    })

    return (
        <>
            {loading === true && 
                <Loader />
            }

            {showQuestion === false && loading === false && 
                <div className='intro'>
                    <Curtain />
                    <Category chooseCategory={chooseCategory} />
                </div>
            }
            
            {showQuestion === true &&
                <Question currentQuestion={questions[index]} questionNo={index + 1}/>
            }
        </>
    )
}

export default Intro
