import React from 'react';

const Home = () => {
    return(
        <div>
            <section className='section-container'>
                <div id="welcome-img">
                    <img id="avatar" src={require("../images/meRedPolo.jpg")} alt=""/>
                    <img id="earth" src={require("../images/earth.png")} alt=""/>
                </div>
                <div id='intro-text'>
                    <h1>Hello, world!</h1>
                    I'm Gonçalo <span className='light-purp tooltip'>Roxo<div className='tooltiptext'>My last name means purple in Portuguese!</div></span>, welcome to my corner of the internet.
                    I'm currently working as an <b>Associate Engineer @ <span className='blue'>Capgemini</span>!</b>
                    <p>Stay awhile and get to know me!</p>
                </div>
                {/*<a href="https://www.freepik.com/vectors/geography">Geography vector created by brgfx - www.freepik.com</a>*/}
            </section>
            
            <section className='section-container'>
                <div className='body-text'>
                    <div className='text-and-image-container'>
                        <p>
                            During my Master's degree, my work was mainly focused on the <span className='blue'>Human-Computer Interaction</span> area. We were studying the use of videogames as a complement to traditional therapy using off-the-shelf controllers like the Wii Balance Board
                            and a Dance Mat, and managed to publish a research paper with part of that work.
                        </p>
                        <div className='image-container'>
                            <img className="image-float-right" src={require("../images/meetingClinic.jpeg")} alt=""/>
                        </div>
                    </div>

                    <div className='text-and-image-container'>
                        <p>
                            Beyond the digital realm, I enjoy scuba diving, <span className='yllw'>3D printing</span>, photography, and exploring the wonders of nature and space.
                            With a <span className='green'>collaborative mindset</span> and an eagerness to learn, I like to feel part of a team where we can build cool stuff together.
                        </p>
                        <p>
                            I'm a tech and science enthusiast, with a particular interest in <span className='peach'>front-end</span> and <span className='peach'>mobile</span> development, but open to discovering new passions.
                        </p>

                        <div className='image-container'>
                            <img className="image-float-left" src={require("../images/faceInSpaceM.jpg")} alt=""/>
                        </div>
                    </div>
                    
                    <p id='push-down'>Fun fact: My face went on one of the last Space Shuttle flights and my name has gone as far as Mars on other community events for NASA missions.</p>
                </div>
                <div className='space'></div>
            </section>
        </div>
    )
}

export default Home