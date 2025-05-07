import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { productData } from "../Product/ProductData";
import Form from "../ContactUs/Form";
const Home = () => {
  return (
    <>
      <main className="home">
        <header className="home_header">
          <h3 className="home_headLine"> Exporting Quality, Importing Trust – Your Partner in Organic Goodness! </h3>
        </header>
        <section className="home_sec1">
          <h1 className="home_h1">Product</h1>
          <div className="home1_produts">
          {productData.map((product,index)=>(
            <article  className="home1_product_box" key={index}>
              <NavLink to={product.path}>
                <img
                  className="home1_product_img"
                  src={product.img}
            alt={product.category} />
                <p className="home1_product_p">{product.title}</p>
              </NavLink>
            </article>
          ))}
          </div>
        </section>
        <section className="home_sec2">
         <div className="home_sec2_div" >
<h4 className="home2_h4">About Riyansh Exim LLP</h4>
<h2 className="home2_h2">Naturally Made, Internationally Loved</h2>
<p className="about_text">At Riyansh Exim LLP , we proudly export premium-quality organic and homemade Indian products to customers around the world. From traditionally crafted ghee and raw forest honey to handpicked spices, pulses, grains, and cold-pressed oils — our range celebrates India’s rich food heritage with a modern, health-conscious touch.</p>
<p className="about_text">We partner directly with farmers and local artisans to ensure every product is fresh, pure, and ethically made. Each item reflects our commitment to sustainability, food safety, and honest, small-batch production — delivering real flavor and real value to global kitchens.</p>
</div>    
 <div className="home2_img_div">
        <img className="home2_img" src="/favicon/home2.jpg" alt="about export"/>
        </div>
        </section>
        <section className="home_sec3">
            <h1 className="home_h1">Our Partners</h1>
            <div className="home3_partners">
           <a className="home3_infoLink" href="https://youtube.com"> 
             <img className="partner_logo" src="./favicon/diamond.jpg" alt="other compnay "/>
             <p className="partner_name">RIYANSH ENTERPRISE </p>
          </a>
          {/* </div> */}
          {/* <div className="home3_partners"> */}
           <a className="home3_infoLink" href="https://youtube.com"> 
             <img className="partner_logo" src="./favicon/vanyved.png" alt="other compnay "/>
             <p className="partner_name">VANY AYURVED </p>
          </a>
          </div>
        </section>
        <section className="home_sec4">
          <h1 className="home_h1">Contact us via e-mail</h1>
          <div className="home4_form">
        <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
