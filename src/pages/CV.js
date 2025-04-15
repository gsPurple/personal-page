import React from 'react';

const CV = () => {
    return(
        <div>
            <section className='section-container'>
                <div id='grid-cv-page'>
                    <div id='cv-header'>
                    <a
                        href={require("../files/CV_Private.pdf")}
                        download="goncalo_roxo_cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="hBttn">Download CV</span>
                    </a>
                    </div>
                    <div id='cv-profile'>
                        <h2 className='purp'>PROFILE</h2>
                        Passionate about technology and highly motivated, with a strong collaborativemindset and openness to different perspectives. 
                        Enthusiastic and adaptablecomputer engineer with experience in test automation, generative AI tools, andcross-functional teamwork. 
                        Quick to learn and eager to explore new challengescreatively, always seeing them as opportunities to grow and acquire new skills. 
                        I thrive in dynamic environments and enjoy solving real-world problems throughthoughtful, user-centered solutions.
                    </div>
                    <div id='cv-experience'>
                        <h2 className='purp'>WORK EXPERIENCE</h2>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <h3 className='light-purp'>Associate Engineer</h3> <h3 className='blue'>@ Capgemini Engineering</h3>
                        </div>
                        <ul className='ul-cv'>
                            <li>Developed <span className='yllw'>Python</span> scripts to automate sanity testing of set-top box (STB) user interfaces and functionality</li>
                            <li>Refactored existing codebase for improved maintainability and scalability</li>
                            <li>Contributed to the creation of internal tools integrating <span className='blue'>generative AI</span> service APIs</li>
                            <li>Collaborated with cross-functional teams across different countries to define optimal automation strategies</li>
                            <li><span className='peach'>October 2023</span> - <span className='green'>Present</span></li>
                        </ul>
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
                            <li>IGNES: a web and mobile app to help in wildfire prevention, built with from scratch with four other colleagues.</li>
                            <li>Tools & Technologies: Android Studio, Google App Engine, HTML, JS and CSS</li>
                        </ul>
                        <h3 className='light-purp'>Erasmus+ Program</h3>
                        <ul className='ul-cv'>
                            <li>Comenius University Bratislava - Slovakia</li>
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
                            <li>Javascript {'\u2022'} HTML {'\u2022'} CSS {'\u2022'} ReactJS</li>
                            <li>Unity {'\u2022'} C# {'\u2022'} JAVA {'\u2022'} Android Studio</li>
                            <li>Python</li>
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