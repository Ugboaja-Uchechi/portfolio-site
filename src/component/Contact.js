import React from "react";

const Contact = () => {
  return (
    <>
      <footer>
        <h2 className="headings">Get in <span>touch.</span></h2>
        <p id="footer-p">Wanna work together?, have any question or proposal?, or just want to say Hello. Go ahead. I would love to hear from you!</p>
        <form>
          <label for="name" className="grid1 grid-row1">Name</label>
          <input type="text" id="name" name="name" required className="grid1 grid-row2"></input>
          <label for="name" className="grid2 grid-row1">Email</label>
          <input type="email" id="email" name="email" required className="grid2 grid-row2"></input>
          <label for="message">Message</label>
          <textarea id="message" for="message" rows="4" cols="50" required></textarea>
          <button type="submit">Send a Message</button>
        </form>
      </footer>
    </>
  )
}

export default Contact;