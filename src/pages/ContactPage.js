import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let formValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Full name is required";
      formValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      formValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Validate the form data
      console.log(formData); // Log form data to the console
      alert("Your message has been sent!");

      // Reset form data to clear the form fields
      setFormData({
        firstName: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      {/* Background image section */}
      <div className="contact-left"></div>

      {/* Contact form section */}
      <div className="contact-form-container">
        <div className="contact-form">
          <h2>Send Us A Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
