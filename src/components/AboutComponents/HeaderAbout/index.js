import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function HeaderAbout() {
  return (
    <header className='head'>
    <nav>
        <div className='mainNav'>
            <div className='navLogo'>
                <h3>Start Bootstrap</h3>
            </div>
            <div className='hamburgerMenu'>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className='links'>
                <ul>
                    <Link className='stil' to="/">Home</Link>
                    <Link className='stil' to="about">About</Link>
                </ul>
            </div>
        </div>
    </nav>
    
    <div className='clean'>
        <h1>About Me</h1>
        <p>This is what I do</p>
    </div>
</header>
  )
}

export default HeaderAbout