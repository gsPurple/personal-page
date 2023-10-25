import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ isExpanded, onClick, style }) => {
    return (
      <button className="btn-toggle" style={style} onClick={onClick}>
        {isExpanded ? <span><FontAwesomeIcon icon={faAnglesUp} /> Show Less <FontAwesomeIcon icon={faAnglesUp} /></span> : <span><FontAwesomeIcon icon={faAnglesDown} /> Show More <FontAwesomeIcon icon={faAnglesDown} /></span>}
      </button>
    );

  };
  

const Projects = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [divHeight, setDivHeight] = useState('16rem');

    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateContainerSize = () => {
          if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setContainerSize({ width, height });
          }
        };
    
        window.addEventListener('resize', updateContainerSize);
        updateContainerSize();
    
        return () => {
          window.removeEventListener('resize', updateContainerSize);
        };
      }, []);

      const gradientAngle = Math.atan(containerSize.height / containerSize.width) * (180 / Math.PI);

      const divStyle2 = {
        transform: `translate(-50%, -50%) rotate(-${gradientAngle}deg)`,
      };

      const handleWindowResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 470) { // Adjust the breakpoint value to desired screen widths
          setDivHeight(isExpanded ? '85rem' : '19rem'); 
        }
        else if(windowWidth <= 640) {
          setDivHeight(isExpanded ? '92rem' : '17rem');
        }
        else if(windowWidth > 640 && windowWidth < 896) {
          setDivHeight(isExpanded ? '112rem' : '17rem');
        }
        else {
          setDivHeight(isExpanded ? '83rem' : '16rem'); 
        }
      };
    
      useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
        //setDivHeight(isExpanded ? '85rem' : '18rem');
      }, [isExpanded]);

    const handleClickBtn = () => {
        setIsExpanded((prev) => !prev);        
    };

    const divStyle = {
        height: divHeight, // Adjust the desired expanded height here
        overflow: 'hidden',
        transition: 'height 1.5s ease',
      };

    return(
        <div>          
            <div className="project-dark-block">
                <h1 className='page-title'>My Projects</h1>
                <section className='project-container' style={divStyle}>
                    <h2>Ignes</h2>
                    <div className='project-content'>
                        <p>
                            <i className='peach'>Ignes</i>, a mobile and web application for fire prevention, that was imagined, developed, and created as a university project in 2018. 
                            It was our first experience of developing an idea from scratch. In a team of 5 enthusiastic people, we worked hard to succeed and achieved 
                            the goal of making it to the final presentation, leaving the audience amazed by <i className='peach'>Ignes</i>.
                        </p>
                        <p>
                            The app was available in both <span className='green'>web and mobile</span> formats. The web client was targeted towards institutions that offered services such as cleaning 
                            or transport, allowing them to manage their workers and assign tasks. The mobile app, developed in <span className='android-green'>Android Studio</span>, served as a platform for 
                            regular users to report situations they believed could pose a safety risk, potentially leading to a forest fire.
                        </p>
                        <img className="ignes-project-image" src={require("../images/ignesUser.png")} alt=""/>
                        <p>
                            If a worker logged into the mobile app using their worker account, the interface would dynamically adjust and display only the relevant geolocation 
                            markers on the map that corresponded to the worker's assigned tasks.
                        </p>
                        <img className="ignes-project-image" src={require("../images/ignesWorker.png")} alt=""/>
                    </div>
                </section>
                
            </div>
            <div ref={containerRef} className='skew-cc'><ToggleButton style={divStyle2} isExpanded={isExpanded} onClick={handleClickBtn}/></div>
            <div className="project-light-block">
                <section className='project-container'>
                    <div className='linked-project-title'>
                        <h2>The Warlock of Firetop Mountain</h2> <span className='project-link'>[<a href="https://gspurple.github.io/wofm/" target="_blank" rel='noopener noreferrer'>Play here!</a>]</span>
                    </div>                
                    <p>Out of the desire to start learning about <b className='blue'>ReactJS</b> and a nostalgic conversation came the idea of creating a digital interactive version of 
                    the choose-your-own-adventure-style book '<a href="https://en.wikipedia.org/wiki/The_Warlock_of_Firetop_Mountain" target="_blank" rel='noopener noreferrer'>The Warlock of Firetop Mountain</a>' 
                    by Steve Jackson and Ian Livingstone, so that my brother and I could play it anywhere without needing the book or dice.
                    </p>
            </section>
            </div>
            <div className="skew-c"></div>
            <div className="project-dark-block">

            </div>
        </div>
    )
}

export default Projects