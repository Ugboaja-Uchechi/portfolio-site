import React from "react";

const Contact = () => {
  return (
    <>
      <footer>
        <h4>Get in touch.</h4>
        <p>Wanna work together?, have any question or proposal?, or just want to say Hello. Go ahead. I would love to hear from you!</p>
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required></input>
          <label for="name">Email</label>
          <input type="email" id="email" name="email" required></input>
          <label for="message">Message</label>
          <textarea id="message" for="message" rows="4" cols="50" required></textarea>
        </form>
      </footer>
    </>
  )
}

export default Contact;