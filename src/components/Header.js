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
                                <NavLink to="/cv">
                                    <span className='hBttn'>cv()</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <span className='hBttn'>home()</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="https://www.w3schools.com">
                                    <span className='hBttn'>contact()</span>
                                </a>
                            </li>
                            <li>
                                <NavLink to="/projects">
                                    <span className='hBttn'>projects()</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/gon%C3%A7alo-roxo-522168165/" target="_blank" rel='noopener noreferrer'>
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