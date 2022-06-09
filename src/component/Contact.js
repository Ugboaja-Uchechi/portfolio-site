import React, { useRef, useState } from "react";
import emailjs  from "emailjs-com";

const Result = () => {
  return (
    <p>Your message has been successfully sent.</p>
  )
}

const Contact = () => {

  const [result, showResult] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v2blu0g', 'template_sohrg7v', form.current, 'Z_f0hJHL0vTmROuXe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  return (
    <>
      <footer className="height">
        <h2 className="headings">Get in <span>touch.</span></h2>
        <p id="footer-p">Wanna work together?, have any question or proposal?, or just want to say Hello. Go ahead. I would love to hear from you!</p>
        <form ref={form} onSubmit={sendEmail}>
          <div id="input-flex">
            <div id="margin-inline-end">
              <label for="name">Name</label> <br />
              <input type="text" id="name" placeholder="Jane Doe" name="name" required />
            </div>
            <div id="margin-inline-start">
              <label for="email">Email</label> <br />
              <input type="email" id="email" name="email" placeholder="janedoe@gmail.com" required />
            </div>
          </div>
          <div className="textarea-flex">
            <label for="message">Message</label> <br />
            <textarea id="message" for="message" name="message" rows="7" required></textarea>
          </div>
          <div className="textarea-flex">
            <button type="submit" className="grid4">Send a Message</button>
          </div>
          <div>
           {result ? <Result /> : null}
          </div>
        </form>
      </footer>
    </>
  )
}

export default Contact;