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
                    I'm Gonçalo <span className='light-purp'>Roxo</span>, welcome to my corner of the internet.
                    I'm currently looking for new opportunities to develop my skills! sjfhsdkjfhdjk
                    <p>Stay awhile and get to know me!</p>
                </div>
                {/*<a href="https://www.freepik.com/vectors/geography">Geography vector created by brgfx - www.freepik.com</a>*/}
            </section>
            <div className='space'></div>
            <section className='section-container'>
                I'm interested in all things science and am currently finishing my MSc in Computer Science and Engineering.
            </section>
        </div>
    )
}

export default Home