import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { productData } from "./ProductData";
import "./mainProduct.css";

const ProductPage = () => {
  const { productName } = useParams();

  const product = productData.find(
    (item) => item.category === productName
  );

  return (
    <>
    
      <main className="products_main">
        <div className="head_div">
          <img src={product.img} alt={product.category} />
          <h1 className="product_heading">{product.title}</h1>
        </div>
      </main>
      <section className="products_section">
        <div className="products_head">
          <h2 className="proMain_heading">{product.subTitle}</h2>
          <p className="proMain_details">{product.details}</p>
         
          {/* <p className="proMain_details">{product.details[0]}</p>
          <p className="proMain_details">{product.details[1]}</p>
          <p className="proMain_details">{product.details[2]}</p> */}


        </div>
      </section>
      <section className="home_sec1">
  <div className="home1_produts">
    {product.subProducts?.map((sub, index) => (
      <div className="home1_product_box" key={index}>
        <NavLink to={sub.path}>
          <img
            className="home1_product_img"
            src={sub.img}
            alt={sub.category}
          />
          <p className="home1_product_p">{sub.title}</p>
        </NavLink>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default ProductPage;