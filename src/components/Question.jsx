import React, { useContext, useRef, useState, useEffect } from 'react'
import { AppContext } from '../context/AppState'

// import { TweenMax, TimelineLite, Power3 } from 'gsap'
import _ from 'lodash';
import { Fireworks } from 'fireworks/lib/react'

import coins from '../assets/img/coin.png'
import crying_sloth from '../assets/img/cry_sloth.jpg'
import trophy from '../assets/img/trophy.svg'

function Question({ currentQuestion, questionNo }) {
    const { setIndex, index, darkMode } = useContext(AppContext)
    const [correctIndex, setCorrectIndex] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [correct, setCorrect] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [timerOn, setTimerOn] = useState(false)
    const [seconds, setSeconds] = useState(30)
    const [storeInterval, setStoreInterval] = useState(null)

    let TotalSeconds;

    // let tl = new TimelineLite();
    // let questionElem = useRef(null)
    
    useEffect(() => {
        shuffledAndSort();  
        resetTimer();

        const answers = document.querySelectorAll('.answers');
        if (answers.length) {
            animate();      
            resetTimer()                                  
        }
        
    }, [currentQuestion]);

    const fxProps = {
        count: 1,
        interval: 200,
        colors: ['#cc3333', '#4CAF50', '#eeC784'],
        calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    const animate = () => {
        // const answers = document.querySelectorAll('.answers');

        // TweenMax.to(answers, 0, {css: {
        //     visibility: 'visible'
        // }});        

        // const imgs = document.querySelectorAll('.option');
        // for (let i = 0; i < imgs.length; i++) {        
        //     if(i % 2 == 0){
        //         tl.from(imgs[i], 0.8, {x: -1200, ease: Power3.easeOut})                            
        //     }else{
        //         tl.from(imgs[i], 0.8, {x: 1200, ease: Power3.easeOut})  
        //     }    
        // }

        startCounting()
    }
    
    const shuffledAndSort = () => {
        setCorrect(false)           

        let shuffled = _.shuffle(currentQuestion.incorrect_answer)
        setShuffledAnswers(shuffled)

        let corrIndex = shuffled.indexOf(currentQuestion.correct_answer)            
        setCorrectIndex(corrIndex)

        let options = document.getElementsByClassName('option');
        console.log(options);
        for (let i = 0; i < options.length; i++) {
           options[i].classList.remove('correct_answer')
           options[i].classList.remove('wrong_answer')
        }
    }

    const nextQuestion = () => {
        setCorrect(false) 
        resetTimer();

        let nextIndex = index + 1;
        setIndex(nextIndex)
        setAnswered(false)
        setSelectedIndex(null);
    }

    const resetTimer = () => {
        setSeconds(30)
        TotalSeconds = seconds; 
    }

    const selectQuestion = (answer, index, e) => {
        stopCounting()

        if(answered){
            return;
        }
        
        let isCorrect = false
        setSelectedIndex(index);
        
        if (index === correctIndex) {
            console.log('Correct answer');
            e.target.classList.add('correct_answer')
            isCorrect = true
            
            setTimeout(() => {                 
                setAnswered(true)
                setCorrect(true)           
            }, 1500);

        }else{
            console.log('Wrong answer');     
            e.target.classList.add('wrong_answer')
            setTimeout(() => {                 
                setAnswered(true)
                setCorrect(false)           
            }, 1500);
        }

    }

    // const test = () => {
    //     // setInterval(() => {
    //         // let countDownDate = new Date();
    //         // countDownDate.setSeconds(countDownDate.getSeconds() + 30 );
    
    //         // let now = new Date();
    //         // let distance = now.getTime() - countDownDate.getTimezoneOffset();
    //         // console.log(distance);

    //         // console.log(now);
    //         // console.log(countDownDate);

            
    //     // }, 1000);
    // }

    const startCounting = () => {
        if(!timerOn){
            setTimerOn(true)
            tick();
        }
    }
    
    const stopCounting = () => {
        clearTimeout(storeInterval)
        setTimerOn(false)
    }

    const tick = () => {
        if (TotalSeconds <= 0) { 
            alert("Time's up!") 
            return; 
        } 

        TotalSeconds -= 1; 
        setSeconds(TotalSeconds)
        setStoreInterval(setTimeout(tick, 1000)); 
	}

    let { question } = currentQuestion;

    return (
        <>
            { correct === false && answered === false &&
                <div className="w-3/4 fireworks-container question__box">
                    <div className="question my-8 scaleIn">
                        <div className="flex justify-between text-center mb-8">
                            <button className="shadow-md transparent__btn rounded-lg px-4">Quit</button>
                            <span style={{ color: darkMode ? '#545454' : '#b91372' }} className='text-md mx-3 py-2 px-10 rounded-lg bg-white font-bolder text-center'>
                                Time Remaining: {seconds > 9 ? seconds : `0${seconds}`}:00
                            </span>
                            <button className="shadow-md transparent__btn rounded-lg px-4">Next</button>
                        </div>

                        <h2 className='text-lg mb-2 font-bolder text-center'>Question {questionNo}</h2>
                        <h2 className='text-2xl font-bolder text-center'>{question}</h2>
                    </div>
                    
                    <div className="answers gap-6">                        
                        {
                            shuffledAnswers.map((item, i) => {
                                return (
                                    <div key={i} onClick={(e) => selectQuestion(item, i, e)} className="option shadow-md rounded-lg p-4">
                                        {item}
                                    </div>
                                )
                            })
                        }                        
                    </div>                           
                </div>
            }

            {
                correct === true && answered === true &&
                <div className='flex scaleIn justify-center w-full mt-20'>
                    <div className="flex justify-center">
                        <Fireworks {...fxProps} />
                    </div>
                    <div className='p-12 text-black bg-white rounded-md w-1/3'>
                        <div className="flex justify-center mb-3">
                            <img src={trophy} className='h-10 w-10' alt=""/>
                        </div>
                        <h3 className="text-xl text-center">Congratulation, Joe!</h3>
                        <div className='flex justify-center my-2'>
                            <h4 className='text-3xl font-bold'>You won <span className='color__gold'>50 coins!!</span></h4>
                            <img src={coins} className="w-10 h-10" alt="user"/>  
                        </div>
                        <h3 className="text-md text-center">Answered in {30 - seconds} seconds</h3>
                        
                        <div className="flex justify-center mt-3">
                            <button onClick={nextQuestion} style={{ background: '#b91372', color: '#fff' }} className="px-12 py-2 font-bold rounded-xl shadow-lg">Continue Playing</button>
                        </div>
                    </div>
                </div>
            }

            {
                correct === false && answered === true &&
                <div className='flex scaleIn justify-center w-full mt-10'>                    
                    <div className='py-10 text-black bg-white rounded-md w-1/3'>
                        <h3 className="text-3xl text-gray-600 tracking-wider bangers__font text-center mb-3">Wrong Answer, Joe!</h3>
                        <div className='flex justify-center'>
                            <img src={crying_sloth} className="w-60" alt="user"/>  
                        </div>
                        <h3 className="text-md text-center mt-3">Answered in {30 - seconds} seconds</h3>

                        <div className="flex justify-center mt-2">
                            <button onClick={nextQuestion} style={{ background: '#b91372', color: '#fff' }} className="px-12 py-2 font-bold rounded-xl shadow-lg">Continue Playing</button>
                        </div>
                    </div>
                </div>
            }            
        </>
    )
}

export default Question
