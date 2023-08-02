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
                    I'm currently looking for new opportunities to develop my skills!
                    <p>Stay awhile and get to know me!</p>
                </div>
                {/*<a href="https://www.freepik.com/vectors/geography">Geography vector created by brgfx - www.freepik.com</a>*/}
            </section>
            
            <section className='section-container'>
                <div className='shjs'>
                    <p>During my Master's degree, my work was mainly focused on the Human-Computer Interaction area. We were studying the use of videogames as a complement to traditional therapy using off-the-shelf controllers like the Wii Balance Board
                    and a Dance Mat, and managed to publish a research paper with part of that work. I'm a tech and science enthusiast, with a particular interest in front-end and mobile development, but open to discovering new passions.</p>
                
                    <p>Beyond the digital realm, I enjoy scuba diving, 3D printing, photography, and exploring the wonders of space and nature through documentaries.
                    With a collaborative mindset and an eagerness to learn, I like to feel part of a team where we can build cool stuff together.</p>

                    <p>Fun fact: My face went on one of the last Space Shuttle flights and my name has gone as far as Mars on other community events for NASA missions.</p>
                </div>
            </section>
        </div>
    )
}

export default Home