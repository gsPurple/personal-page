import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    
    const location = useLocation();
    var currentPage;
    var trick;

    switch(location.pathname) {
        case "/":
            currentPage = "home()";
            trick = 0;
            break;
        case "/cv":
            currentPage = "cv()";
            trick = 1;
            break;
        case "/projects":
            currentPage = "projects()";
            trick = 2;
            break;
        case "/contact":
            currentPage = "contact()";
            trick = 3;
            break;
        default:
            currentPage = "";
    }

    const clickNavToggle = () => {
        const primaryNav = document.querySelector('.primary-nav');
        const navToggle = document.querySelector('.mobile-nav-toggle');

        const visibility = primaryNav.getAttribute('data-visible')

        if(visibility === 'false') {
            primaryNav.setAttribute('data-visible', 'true');
            navToggle.setAttribute('aria-expanded', 'true')

        }
        else if (visibility === 'true') {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false')
        }
    }

    return(
        <header>
            <div className='parent'>
                <div className='header-container'>
                    <div key={trick} className='header-current purp'>{currentPage}</div>

                    <button onClick={() => clickNavToggle()} className='mobile-nav-toggle' aria-controls='primary-nav' aria-expanded='false'>
                        <span className='sr-only'>Menu</span>
                    </button>

                    <nav>
                        <ul id='primary-nav' data-visible='false' className='header-nav-bttns primary-nav'>
                            <li className='active'>
                                <NavLink to="/cv" onClick={() => clickNavToggle()}>
                                    <span className='hBttn'>cv()</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" onClick={() => clickNavToggle()}>
                                    <span className='hBttn'>home()</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() => clickNavToggle()}>
                                    <span className='hBttn'>contact()</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" onClick={() => clickNavToggle()}>
                                    <span className='hBttn'>projects()</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/goncaloroxo" target="_blank" rel='noopener noreferrer' onClick={() => clickNavToggle()}>
                                    <FontAwesomeIcon icon={faLinkedin} className='social-icon hBttn'/>
                                </a>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header