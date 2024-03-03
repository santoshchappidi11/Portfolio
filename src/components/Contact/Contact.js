import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import contactImage from "../../Images/contact.png";
import emailjs from "@emailjs/browser";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";
import location from "../../Images/location.png";
import mail from "../../Images/mail.png";
import sendMsg from "../../Images/sendmessage.png";
import sentMsg from "../../Images/sentmessage.png";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  let SubmitEmail = (
    <motion.button whileTap={{ scale: "0.95" }} type="submit" value="Send">
      {/* <button type="submit" value="Send"> */}
      <div id="send-msg">
        <img src={sendMsg} alt="message" />
      </div>
      Send Message
      {/* </button> */}
    </motion.button>
  );
  let sentEmail = (
    <motion.button
      whileTap={{ scale: "0.95" }}
      type="submit"
      className="email-success"
    >
      {/* <button type="submit" className="email-success"> */}
      <div id="sent-msg">
        <img src={sentMsg} alt="message" />
      </div>
      Sent
      {/* </button> */}
    </motion.button>
  );

  useEffect(() => {
    setTimeout(() => {
      setIsEmailSent(false);
    }, 5000);
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
              <>
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
              </>
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
                {/* <i className="fas fa-envelope fa-1x"></i> */}
                <div>
                  <img src={mail} alt="mail" />
                </div>
                <span>santoshchappidi03@gmail.com</span>
              </label>
              <label>
                {/* <i className="fas fa-map-marker-alt fa-1x"></i> */}
                <div>
                  <img src={location} alt="location" />
                </div>
                <span>Chembur Mumbai-400074.</span>
              </label>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
