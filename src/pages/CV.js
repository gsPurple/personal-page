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
                        Passionate about technology and highly motivated, I have a collaborative mindset and I'm always open to hearing different perspectives. I can adapt to new situations and like to explore them creatively.
                        New challenges are opportunities to learn new skills.
                    </div>
                    <div id='cv-education'>
                        <h2 className='purp'>EDUCATION</h2>
                        <h3 className='light-purp'>Master of Computer Science and Engineering</h3>
                        <ul className='ul-cv'>
                            <li>NOVA School of Science and Technology (2023)</li>
                            <li>Thesis: "Studying Serious Games for the Therapy of Children with Disabilities following a Co-Design Process"</li>
                        </ul>
                        <h3 className='light-purp'>Bachelor of Science and Computer Engineering</h3>
                        <ul className='ul-cv'>
                            <li>NOVA School of Science and Technology (2020)</li>
                            <li>IGNES: a web and mobile app to help in wildfire prevention, built from the ground up with four colleagues as the final project.</li>
                        </ul>
                        <h3 className='light-purp'>Erasmus+ Program</h3>
                        <ul className='ul-cv'>
                            <li>Comenius University Bratislava - Slovakia</li>
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
                            <li>Full paper: "Dance Mat Fun - A Participatory Design of Exergames for Children with Disabilities” in Springer{'\u2019'}s Pervasive Computing Technologies for Healthcare, 
                            presented at the <a href="https://pervasivehealth.eai-conferences.org/2022/" target="_blank" rel='noopener noreferrer'>16th EAI International Conference of Pervasive Health</a></li>
                            <li>March - September (2022)</li>
                        </ul>
                    </div>
                    <div id='cv-hobbies'>
                        <h2 className='purp'>HOBBIES AND INTERESTS</h2>
                        <ul className='ul-cv'>
                            <li>Scuba Diving {'\u2022'} 3D Printing {'\u2022'} 3D Modelling</li>
                            <li>Photography {'\u2022'} Space {'\u2022'} Nature Documentaries</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CV