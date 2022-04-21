import React from 'react'
import './NavStyles.css'
// import '../nav../components/assets/ITA_logo_bare.pdf'

const Nav = () => {
    return (
        <div className="nav">
            <div className="container">

                <ul className='nav-list'>
                    <img src="../nav../components../src/assets/ITA_logo_bare.pdf" placeholder="ITA Logo"></img>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav