import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="content">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://www.instagram.com/bjonesonfilm?igsh=cHU0bW8yejNpMjZk&utm_source=qr">
          Instagram
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/breanna-jones-1678b830b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
