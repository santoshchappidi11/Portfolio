import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import contactImage from "../../Images/contact.png";
import emailjs from "@emailjs/browser";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  let SubmitEmail = (
    <button type="submit" value="Send">
      Submit
    </button>
  );
  let sentEmail = (
    <button type="submit" className="email-success">
      Sent
    </button>
  );

  useEffect(() => {
    setTimeout(() => {
      setIsEmailSent(false);
    }, 2000);
  }, [isEmailSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsEmailSent(false);
    emailjs
      .sendForm(
        "service_gdsgacj",
        "template_8e0ymbp",
        form.current,
        "1EemYohgssznRb8ve"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsEmailSent(true);
  };

  return (
    <>
      <section id="Contact" className="section-4">
        <header className="contact-header">
          <AttentionSeeker effect="pulse">
            <h4>Contact</h4>
          </AttentionSeeker>
          <h1>Say Hello!</h1>
          <p>
            Submit the form below so I can get back to you as soon as possible
          </p>
        </header>
        <main className="contact-content">
          <div className="form">
            <Fade delay={600}>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="user_name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  required
                />
                <textarea
                  type="text"
                  id="message"
                  placeholder="Message"
                  name="message"
                  required
                />
                {!isEmailSent && SubmitEmail}
                {isEmailSent && sentEmail}
              </form>
            </Fade>
          </div>
          <div className="contact-details">
            <div className="contact-img">
              <Zoom>
                <img src={contactImage} alt="contact" loading="lazy" />
              </Zoom>
            </div>
            <div className="details">
              {/* <label>
                <i className="fas fa-phone-alt fa-1x"></i>
                <span>(+91) 8356015803</span>
              </label> */}
              <label>
                <i className="fas fa-envelope fa-1x"></i>
                <span>santoshchappidi03@gmail.com</span>
              </label>
              <label>
                <i className="fas fa-map-marker-alt fa-1x"></i>
                <span> Chembur Mumbai-400074.</span>
              </label>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
