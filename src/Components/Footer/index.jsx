import React, { useState } from "react";
import "./footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoWhatsapp } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
// import { HiPhone } from "react-icons/hi2";
// import { TiLocation } from "react-icons/ti";
import { MdOutlineCall, MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {

  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <footer>
        <section className="firstPoint">
          <div className="company_d firstPoint_div">
            <h3>RIYANSH EXIM LLP</h3>
            <p>
              We are involved in manufacturing and exporting of farmming
              industries based products.
            </p>
          </div>
          <div className="product_d firstPoint_div">
            <h3>Products</h3>
            <ul>
              <li><NavLink to='/product/ghee'>Ghee</NavLink></li>
              <li><NavLink to="/product/honey">Honey</NavLink></li>
              <li><NavLink to="/product/spices">Spices</NavLink></li>
              <li><NavLink to="/product/oil-seeds">Oil Seeds</NavLink></li>
              <li><NavLink to="/product/grains">Grains</NavLink></li>
              <li><NavLink to="/product/pulses">Pulses</NavLink></li>
              <li><NavLink to="/product/ground-spices">Ground Spices</NavLink></li>
              <li><NavLink to="/product/dry-fruits">Dry Fruits</NavLink></li>
              <li><NavLink to="/product/cotton-bales">Cotton Bales</NavLink></li>
              <li><NavLink to="/product/hair-washPowder">Hairwash Powder</NavLink></li>

            </ul>
          </div>

          <div className="connect_d firstPoint_div">
            <h3>Stay Connect</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/Ghantala%20Shubham" target="_blank" rel="noopener noreferrer">
                  <TiSocialFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gh_.mansi" target="_blank" rel="noopener noreferrer">
                  <IoLogoInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@SonySAB" target="_blank" rel="noopener noreferrer">
                  <PiYoutubeLogoLight />
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://wa.me/919687553179" target="_blank" rel="noopener noreferrer">
                  <BiLogoWhatsapp />
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div className="service_d firstPoint_div">
            <h3>Customer Service</h3>
            <ul>
              <li><NavLink to='/legal&privacy'>Legal & Privacy</NavLink></li>
              <li>
                <h4>Contact :</h4>
              </li>
              <li><a href="tel:+919687553179">
                <MdOutlineCall /><span>+91 96873 17633</span></a></li>
              <li>
                {/* <a href="mailto:mansighantala@gmail.com"><span ><MdOutlineMail /></span><span>riyansh.exim.llp@gmail.com</span></a> */}
                {/* <a href="mailto:riyansh.exim.llp@gmail.com?subject=Inquiry from Website"> */}
                <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=riyansh.exim.llp@gmail.com&su=Inquiry%20from%20Website" 

                 target="_blank" rel="noopener noreferrer"> <MdOutlineMail />
                  <span>riyansh.exim.llp@gmail.com</span>
                  </a></li>
              {/* <li><a href="www:surat/gujarat/india.com" ><span><MdOutlineLocationOn /></span><span>I-604,Shree nidhi residency,mota varachha, surat-394101, gujarat, india.</span></a></li> */}
               <li>

                <button className="location_link" onClick={() => setShowMap(true)}>
                  <span><MdOutlineLocationOn /></span>
                  <span>I-604, Shree Nidhi Residency, Mota Varachha, Surat - 394101, Gujarat, India.</span>
                </button>
              </li> 
              {showMap && (
                <div className="map-popup">

                  <div className="map-content">
                <button className="close-btn" onClick={() => setShowMap(false)}>✕</button> 

                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.1545577876495!2d72.87372961090543!3d21.23522560592933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f476db35e8f%3A0xd22ddb200365c676!2sshree%20nidhi%20residency%20office!5e0!3m2!1sen!2sin!4v1745645601788!5m2!1sen!2sin" 
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ShreeNidhi Residency Map"
                    ></iframe>
                      </div>
                </div>
              )}


            </ul>
          </div>
        </section>
        <section className="endPoint">
          Copyright © 2025 RIYANSH EXIM LLP. All Rights Reserved
        </section>
      </footer>
    </>
  );
};

export default Footer;
