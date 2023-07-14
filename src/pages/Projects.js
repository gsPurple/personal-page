import React from 'react';

const Projects = () => {
    return(
        <div>          
            <div className="project-dark-block">
                <h1 className='page-title'>My Projects</h1>
                <section className='project-container'>
                    <h2>Ignes</h2>
                    <p><i>Ignes</i>, a mobile and web application for fire prevention, that was imagined, developed, and created as a university project in 2018. 
                    It was our first experience of developing an idea from scratch. In a team of 5 enthusiastic people, we worked hard to succeed and achieved 
                    the goal of making it to the final presentation, leaving the audience amazed by <i>Ignes</i>.
                    </p>
                </section>
            </div>
            <div className="skew-cc"></div>
            <div className="project-light-block">
                <section className='project-container'>
                    <div className='linked-project-title'>
                        <h2>The Warlock of Firetop Mountain</h2> <span className='project-link'>[<a href="https://gspurple.github.io/wofm/" target="_blank" rel='noopener noreferrer'>Play here!</a>]</span>
                    </div>                
                    <p>Out of the desire to start learning about React and a nostalgic conversation came the idea of creating a digital interactive version of 
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