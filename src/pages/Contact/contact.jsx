import "./contact.css";

const Contact = () => {
    return (
        <section className='contact'>
            <h1>Contact</h1>
            <span></span>
            <div className='map' data-mapbox>
                <figure>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd'
                        width='1085'
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
            <button>Send Message</button>
        </section>
    );
}
export default Contact;