import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Header() {
    return (
        <header>
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
            <div className='try'>
                <p>TRY LOGGING IN</p>
            </div>
            <div className='clean'>
                <h1>Clean Blog</h1>
                <p>Blog Theme by Start Bootstrap</p>
            </div>
        </header>
    )
}

export default Header