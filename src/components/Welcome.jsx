import React from 'react'

function Welcome({ setShowIntro }) {
    
    return (
        <>
        <div className="welcome">
            <div className='welcome__txt'>
                <span className="">CODEWELL</span><br/>
                <span className="">TRIVIA</span>
            </div>

            <div className='flex justify-center mt-20'>
                <button onClick={setShowIntro} className="py-3 px-12 rounded-xl shadow-md start__btn">Start Playing</button>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default Welcome
