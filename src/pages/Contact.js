import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_z9sqa2r', 'template_5px9huj', e.target, 'mcR_hlPGRmm3UqM0T')
        .then((result) => {
            console.log(result.text);
            setPopupText('Your message has been sent successfully!');
        }, (error) => {
            setPopupText('There was an error sending your message. Please try again.');
            console.log(error.text);
        });

        setShowPopup(true);

        e.target.reset();
    }

    return(
        <div>
            <section className='section-container'>
                <div id='formdiv'>
                    <form onSubmit={sendEmail}>
                        <div id='grid-contact-form'>
                            <div id='contact-form-title'>
                                <h2>Let's get in touch!</h2>
                                <p>Want to work together, share ideas or send some feedback?</p>
                                <p>Feel free to shoot me a message and I'll get back to you as soon as I can!</p>
                            </div>
                            <div id='contact-form-name'>
                                <input id="name" className='formtext' type='text' placeholder='Name' name='from_name' required aria-required="true"/>
                            </div>
                            <div id='contact-form-email'>
                                <input className='formtext' type='email' placeholder='Email' name='from_email' required aria-required="true"/>
                            </div>
                            <div id='contact-form-message'>
                                <textarea cols='30' rows='8' placeholder='Your Message' name='message'/>
                            </div>
                            <div id='contact-form-submit'>
                                <input id='contact-submit-bttn' type='submit' value='Send Message'/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <p>{popupText}</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Contact