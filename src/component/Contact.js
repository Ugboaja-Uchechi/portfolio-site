import React from "react";

const Contact = () => {
  return (
    <>
      <footer className="height">
        <h2 className="headings">Get in <span>touch.</span></h2>
        <p id="footer-p">Wanna work together?, have any question or proposal?, or just want to say Hello. Go ahead. I would love to hear from you!</p>
        <form>
          <div id="input-flex">
            <div>
              <label for="name">Name</label> <br />
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label for="email">Email</label> <br />
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="textarea-flex">
            <label for="message">Message</label>
            <textarea id="message" for="message" rows="4" cols="50" required></textarea>
          </div>
          <div className="textarea-flex">
            <button type="submit" className="grid4">Send a Message</button>
          </div>
        </form>
      </footer>
    </>
  )
}

export default Contact;