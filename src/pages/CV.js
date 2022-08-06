import React from 'react';

const CV = () => {
    return(
        <div>
            <section className='section-container'>
                <div id='grid-cv-page'>
                    <div id='cv-header'>
                        <a href={require("../files/goncalo_cv.pdf")} target="_blank" rel='noopener noreferrer'>
                            <span className='hBttn'>Download CV</span>
                        </a>
                    </div>
                    <div id='cv-profile'>
                        <h2 className='purp'>PROFILE</h2>
                        I am currently finishing my master's degree in computer science. 
                        Always open to hearing different opinions, I enjoy working in a team environment.
                    </div>
                    <div id='cv-education'>
                        <h2 className='purp'>EDUCATION</h2>
                        <h3 className='light-purp'>Master's in Computer Science and Engineering</h3>
                        <ul className='ul-cv'>
                            <li>NOVA School of Science and Technology (Current)</li>
                            <li>Thesis: "Exergames as Engagement Tools for the Therapy of Children with Disabilities"</li>
                        </ul>
                        <h3 className='light-purp'>Bachelor in Science and Computer Engineering</h3>
                        <ul className='ul-cv'>
                            <li>NOVA School of Science and Technology (2020)</li>
                            <li>IGNES: a web and mobile app to help in wildfire prevention, built from the ground up with four colleagues as the final project.</li>
                        </ul>
                        <h3 className='light-purp'>Erasmus+ Program</h3>
                        <ul className='ul-cv'>
                            <li>Comenius University Bratislava - Slovakia</li>
                            <li>1st Semester (2018/2019)</li>
                        </ul>
                        <h3 className='light-purp'>Science and Technology - Secondary Education</h3>
                        <ul className='ul-cv'>
                            <li>Escola Secundária Professor José Augusto Lucas</li>
                        </ul>
                    </div>
                    <div id='cv-skills'>
                        <h2 className='purp'>SKILLS</h2>
                        <h3 className='light-purp'>Languages</h3>
                        <ul className='ul-cv'>
                            <li>Portuguese - Native</li>
                            <li>English - Advanced</li>
                        </ul>
                        <h3 className='light-purp'>Programming</h3>
                        <ul className='ul-cv'>
                            <li>Javascript {'\u2022'} HTML {'\u2022'} CSS {'\u2022'} React</li>
                            <li>Unity {'\u2022'} C# {'\u2022'} JAVA {'\u2022'} Android Studio</li>
                        </ul>
                    </div>
                    <div id='cv-scholarship'>
                        <h2 className='purp'>RESEARCH SCHOLARSHIP</h2>
                        <h3 className='light-purp'>NOVA LINCS</h3>
                        <ul className='ul-cv'>
                            <li>Project: "Pervasive Framework to Support Smart Therapy of Children with Special Needs"</li>
                            <li>March - September (2022)</li>
                        </ul>
                    </div>
                    <div id='cv-hobbies'>
                        <h2 className='purp'>HOBBIES AND INTERESTS</h2>
                        <ul className='ul-cv'>
                            <li>Project: "Pervasive Framework to Support Smart Therapy of Children with Special Needs"</li>
                            <li>March - September (2022)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CV