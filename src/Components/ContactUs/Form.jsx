import React, { useState, useRef } from 'react';
import { GoPerson } from "react-icons/go";
import { BiMessageRounded } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import './form.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!formData.description.trim()) newErrors.description = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const now = new Date();
    const formattedDate = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    form.current.date_time.value = formattedDate;

    try {
      // Send email to the company
      await emailjs.sendForm(
        'service_70mkr7k',
        'template_itixlaj',
        form.current,
        '-13hOnid56cUbAeaR'
      );

      // Send auto-reply to user
      await emailjs.send(
        'service_70mkr7k',
        'template_wsqt4oh',
        {
          ...formData,
          date_time: formattedDate
        },
        '-13hOnid56cUbAeaR'
      );

      alert('✅ Message sent! Auto-reply also sent to your email.');

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: ""
      });
      setErrors({});
    } catch (error) {
      console.error("Email error:", error);
      alert("❌ Error sending message. Please try again.");
    }
  };

  return (
    <section className="form_section">
      <form ref={form} onSubmit={sendEmail}>
        {/* Hidden field for date/time */}
        <input type="hidden" name="date_time" />

        <div className="formDiv">
          <GoPerson />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <div className="formDiv">
          <GoPerson />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <div className="formDiv">
          <MdOutlineMailOutline />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="formDiv">
          <IoCallOutline />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}

        <div className="formDiv">
          <BiMessageRounded className="textarea_icon" />
          <textarea
            name="description"
            placeholder="Message"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        {errors.description && <p className="error">{errors.description}</p>}

        <button  type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
