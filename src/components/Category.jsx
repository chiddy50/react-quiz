import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppState'
import alienRobot from '../assets/img/alien_robot.png'
import bird from '../assets/img/bird.png'

function Category({ chooseCategory }) {
    const { setStart } = useContext(AppContext)

    const [categories, setCategories] = useState([
        'Sports', 'Cinema', 'Science', 'Animals'
    ]);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        setStart(false)
    });

    return (
        <div style={{ position: 'absolute', width: '100%', zIndex: '1' }}>
            <div className='my-8 pl-5 start__msg'>
                <h2 className='font-extrabold text-4xl'>Start Playing</h2>
                <h2 className='font-extrabold text-4xl'>Now!</h2>
            </div>
            <div className="grid grid-cols-4 my-20">
                <div className='col-span-1'>
                    <img className='robot moveInLeft' src={alienRobot} alt=""/>
                </div>

                {
                    ready === false && 
                    <div className="grid gap-6 grid-cols-2 auto-cols-auto auto-rows-auto col-span-2">
                        { 
                            categories.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => setReady(true)} className="col-span-1 category__item rounded-lg shadow-md flex items-center justify-center">                                    
                                        <p className='text-center font-bold my-2 text-3xl' style={{ fontWeight: '600' }}>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

                { ready === true && 
                    <div className="col-span-2 scaleIn flex items-center justify-center rounded-2xl shadow-lg text-center bg-white text-black bangers__font">
                        <div>
                            <h2 className='text-5xl'>ARE YOU READY??</h2>
                            <button onClick={() => chooseCategory()} className="px-16 py-3 bg-red-600 text-white rounded-xl mt-3 shadow-md">START!</button>
                        </div>
                    </div>
                }

                <div className='col-span-1'>
                    <img className='bird moveInRight ml-8' src={bird} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Category
