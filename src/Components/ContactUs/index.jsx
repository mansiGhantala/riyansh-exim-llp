import React from "react";
import "./contactUS.css";
import { HiPhone } from "react-icons/hi2";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

import Form from "./Form";

const ContactUs = () => {
 
  
  return (
    <>
      <section className="Contact1">
        <img
          className="contact_Img1"
          src="/favicon/contactUs.jpg"
          alt="contact Us"
        />
        <div className="con_info">
          <p className="con_heading">Contact Us</p>
          <h2 className="con_headline"> We're Here To Help You! </h2>
          <p className="con1_para">
            Every bite counts! Let’s make the world healthier together. Contact
            us for ethically sourced, organic food that supports you and the
            planet." 💚 Customer Support & Assistance "Need help choosing the
            best organic products? Our team is ready to assist! Reach out to us
            for expert advice on your organic journey."
          </p>
        </div>
      </section>
      <section className="contact2 ">
        <div className="conDetails_Div">
          <span>
            <HiPhone className="conDetails_icon" />
          </span>
          <h1 className="conDetails_h1">PHONE</h1>
          <a className="conDetails_a" href="tel:+919687553179">
            +91 9687553179
          </a>
        </div>
        <div className="conDetails_Div">
          <span>
            <TiLocation className="conDetails_icon"  />
          </span>
          <h1 className="conDetails_h1">EMAIL</h1>
          <a href="mailto:mansighantala@gmail.com"
           className="conDetails_a">
            riyansh.exim.llp@gmail.com
          </a>
        </div>
        <div className="conDetails_Div">
          <span>
            <MdEmail className="conDetails_icon" />
          </span>
          <h1 className="conDetails_h1">ADDRESS</h1>
          <a className="conDetails_a" href="www.surat.com">
            E-604 Shree Nidhi Residency, Mota Varachha, Surat, Gujarat, India.
          </a>
        </div>
      </section>
      {/* <div className="visibleLine"></div>  */}
      <section className="contact_touch">
        <div className="getInTouch_info">
          <div className="getInTouch_logo">
            <img
              className="getInTouch_icon"
              src="/icon.png"
              alt="Company Logo"
            />
            <p className="getInTouch_head">Riyansh Exim LLP</p>
          </div>

          <h1 className="Contactinf_h1">Let’s Get In Touch.</h1>
          <p className="info_p">
            Or just reach out manually to
            <a href="@gmail.com">riyansh@egro.com</a>.
          </p>
        </div>

          <div className="contact_form"> 
         <Form/>
         </div>
        {/* <div> */}
          {/* <img src="/favicon/bgcontact.png" alt="conatct"

        </div> */}
        {/* <div className="getInTouch_img">
          <img
            className="contactTouchImg"
            src="/favicon/pulses.jpg"
            alt="Get in Touch"
            width="40%"
          />
        </div> */}
      </section>
    </>
  );
};

export default ContactUs;

