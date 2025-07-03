import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div id="contact-card-container">
                <div id="contact-card-title">Contact Me</div>
                <div id="contact-card-name">Dariel Mera</div>
                <div id="contact-card-phone">954.793.7173</div>
                <div id="contact-card-email">daridariel@gmail.com</div>
                <div id="contact-card-address">Oakland Park, Florida</div>
            </div>

            <div id="form-container">
                <form action="mailto:daridariel@yahoo.com" method="post" enctype="text/plain">
                    <label htmlFor="name">Name*:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email*:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="subject">Subject*:</label>
                    <input type="text" id="subject" name="subject" required />

                    <label htmlFor="message">Message*:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;