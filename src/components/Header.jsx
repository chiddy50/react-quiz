import React, { useContext } from 'react'

import coins from '../assets/img/coin.png'
import profile from '../assets/img/profile.png'

import { AppContext } from '../context/AppState'


function Header() {
    const { darkMode, setDarkMode } = useContext(AppContext)

    const onchange = (e) => {
        setDarkMode(e.target.checked);
        
        if(darkMode === false){
            document.body.style.background = 'linear-gradient(to bottom, #4f5558, #272a2b)';
            document.body.style.color = '#fff';            
        }else{
            // document.body.style.background = 'linear-gradient(to bottom, #fff , #fff)';
            document.body.style.background = 'linear-gradient(to bottom, #b91372, #6b0f1a)';
            // document.body.style.color = '#333';            
        }
    }

    return (
        <>
            <nav style={{ background: darkMode ? 'linear-gradient(to right, #2a2f32, #2a2f32)' : 'linear-gradient(to right, #b91372, #6b0f1a)'}} className="navigation p-4 shadow-md flex justify-between">
                <div className="flex items-center">
                    <img src={profile} className="w-10 h-10 mr-2" alt="user"/>
                    <div className="flex flex-col">
                        <p className='text-white font-bolder text-sm'>Level</p>
                        <p className='text-white font-bolder text-sm'>5 - 6</p>                    
                    </div>
                </div>

                <div className='flex'>
                    <div className="flex flex-col mr-5 items-center justify-center">
                        <p className='text-white font-bolder text-sm'>Count</p>
                        <p className='text-white bg__gold shadow-md rounded-md font-bold px-3 text-sm'>1/10</p>                    
                    </div>
                    <div className='flex items-center justify-end mr-8'>
                        <img src={coins} className="w-10 h-10 mr-2" alt="coin"/> 
                        <div>
                            <p className='text-white text-xl' style={{  }}>Coins</p>
                            <p className='text-white font-bolder text-sm' style={{ fontWeight: '700' }}>130</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label className="switch">
                            <input type="checkbox" checked={darkMode === true ? true : false} onChange={onchange}/>
                            <span className="slider round"></span>
                        </label>
                    </div>

                </div>
            </nav>  
        </>
    )
}

export default Header
