import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <main className="about_main">
        <section className="about_first">
          <img className="about_firstImg" src="./favicon/homebg2.jpg" alt="about_us " />
          <h1 className="about_firstH1">About Us</h1>
        </section>

        <section className="about_second">
          <div className="about2_img">
        <video src="./favicon/meeting.mp4" height='255' autoplay loop ></video>

            {/* <img src="./export.jpg" alt="about us2" /> */}
          </div>
          <div className="about2_details">
            <h2 className="about_subtitle">Pure, Organic, and Fresh – From Our Farms to Your Home!</h2>
            <p className="about_text"> At <strong>RIYANSH Exim LLP</strong>, we believe in the purity of tradition and the power of nature.   From handcrafted ghee and raw honey to natural pulses, grains, and spices — our mission is to deliver real, organic, and authentic Indian products across the globe.    </p>
<p className="about_text">We are deeply grateful to our customers and partners who trust us to bring the taste of India into their homes. Your continued support inspires us to grow, innovate, and stay true to our roots — thank you for being a part of our journey</p>        

          </div>
        </section>
        {/* <video src="./meeting.mp4" height='255'>mh</video> */}
        <section className="about_third">
           <div className="about_3_details">
            <h2 className="about_subtitle">Our Vision</h2>
            <p className="about_text">
              To become a globally trusted brand for organic Indian products by connecting rural farmers and artisans with the world through clean, sustainable practices.
            </p>

            <h2 className="about_subtitle">Our Mission</h2>
            <ul className="about_list">
              <li>Deliver premium, chemical-free, and handmade products to global customers.</li>
              <li>Empower Indian farmers and small-scale producers.</li>
              <li>Uphold purity, quality, and tradition in every batch we export.</li>
              <li>Promote India's food heritage with honesty and heart.</li>
            </ul>
          </div>
          {/* <div className="about_third_img">
            <img src="./favicon/contactbg.jpg" alt="vision" className="about3_img" />
          </div> */}
         
        </section>
        <section className="about_four">

          <h1 className="about_subtitle">Why Choose Us</h1>
          <p lassName="about_text">We are Exporting the best quality products around the world, You need the best product on time you are at the right place </p><span> # RIYANSH Exim LLP.</span>
          <div className="about4_list">
         <ul className="about_list">
            <li>100% organic & homemade ingredients</li>
            <li>Direct sourcing from Indian farms</li>
            <li>No preservatives or chemicals</li>
            <li>Hand-packed & small batch exports</li>
          </ul>
         </div>
        </section>
        <section className="about_five">
          <img src="./favicon/abouthome.png" alt="Thank you" className="about_thankyouImg" />
          <h2 className="about_subtitle">Thank You</h2>
          <p className="about_text">
            We’re truly grateful to our customers who trust us to deliver nature’s finest. Your support helps preserve India’s traditional food culture and uplifts local communities.
            Thank you for being a part of our journey.
          </p></section>
      </main>
    </>
  );
};

export default About;
