import React from 'react'
import loader from '../assets/img/preloader.gif'

function Loader() {
    return (
        <div className='flex items-center justify-center' style={{ background: '#515781', minHeight: '100vh' }}>
            <img src={loader} alt=""/>
        </div>
    )
}

export default Loader
