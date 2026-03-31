import "./contact.css";

const Contact = () => {
    const sendMessage = async () => {

const TOKEN = "BOT_TOKEN";
const CHAT_ID = "CHAT_ID";

const text = `
New message from portfolio:

Name: Sanjar
Email: sanchodevv@gmail.com
Message: Salom
`;

const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

await fetch(url, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
chat_id: CHAT_ID,
text: text
})
});

};
    
    return (
        <section className='contact'>
            <h1>Contact</h1>
            <span></span>
            <div className='map' data-mapbox>
                <figure>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1492.7514774015228!2d60.62081423987571!3d41.558358111458496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9842c81fc9d%3A0x9e434d2b8a616ce9!2sIT%20Park!5e0!3m2!1suz!2s!4v1772552982809!5m2!1suz!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                        width='975'
                        height='650'
                        loading='lazy'></iframe>
                </figure>
            </div>
            <div className="contact__form">
                <h2>Contact Form</h2>
                <div>
                    <input type="text" placeholder="Full name" />
                    <input type="email" placeholder="Email address" />
                </div>
                <textarea name="Your massege" id="massege" placeholder="Your message"></textarea>
            </div>
            <button onClick={sendMessage}>Send Message</button>
        </section>
    );
}
export default Contact;