import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "./ProductData";
const SubProductPage = () => {
  const { productName, subProductName } = useParams();

  const product = productData.find(
    (item) => item.category === productName
  );

 
  const subProduct = product.subProducts.find(
    (sub) => sub.category === subProductName
  );

 
  return (
    <>
      <main className="products_main">
        <div className="head_div">
          <img src={subProduct.img} alt={subProduct.category} />
          <h1 className="product_heading">{subProduct.title}</h1>
        </div>
      </main>
      <section className="products_section">
        <div className="products_head">
          <h2 className="proMain_heading">{subProduct.subTitle}</h2>
          <p className="proMain_details">{subProduct.details}</p>
        </div>
      </section>
    </>
  );
};

export default SubProductPage;