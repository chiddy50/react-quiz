import React, { useEffect } from 'react'

import profile from '../assets/img/profile.png'
import camo from '../assets/img/vortex.png'

function Admin() {
    useEffect(() => {
        let nav = document.querySelector('.admin__nav');
        let style = getComputedStyle(nav)
        document.querySelector('.admin__content').style.marginTop = style.height;
        console.log(style.height);
    })
    return (
        <div>            
            <div className="admin__sidenav px-5" style={{ background: `url(${camo})` }}>
                <a href="#home"><i className="fa fa-fw fa-home"></i> Dashboard</a>
                <a href="#services"><i className="fa fa-fw fa-users"></i> Scoreboard</a>
                <a className="active__tab" href="#clients"><i className="fa fa-fw fa-comment"></i> Add Questions</a>
                <a href="#contact"><i className="fa fa-fw fa-wrench"></i> Settings</a>
            </div>

            <div className="admin__main">
                <div className="admin__nav p-5 shadow-md bg-white">
                    {/* <div>
                        <i className="fa fa-bell text-xl"></i>
                    </div> */}
                    <div className="flex items-center">
                        <div className="flex items-center mr-2">
                            <p className='font-bolder text-sm'>John Doe</p>
                        </div>
                        <img src={profile} className="w-10 h-10 mr-2" alt="user"/>
                    </div>
                </div>
                <div className="admin__content">
                    {/* <h2>Sidebar</h2>
                    <p>This sidebar is of full height (100%) and always shown.</p>
                    <p>Scroll down the page to see the result.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p> */}
                </div>
            </div>   
        </div>
    )
}

export default Admin
