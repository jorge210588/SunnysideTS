import React from "react";
import ProductImage from "../ArticlesSection/ProductItem/ProductImage/ProductImage";
import './ProductImages.scss'

const ProductImages = () => {
  return (
    <section className="flexImages">
      <div className="imgRow">
        <ProductImage image='bottles' size='small'/>
      </div>
      <div className="imgRow">
        <ProductImage image='orange' size='small'/>
      </div>
      <div className="imgRow">
        <ProductImage image='cone' size='small'/>
      </div>
      <div className="imgRow">
        <ProductImage image='cubes' size='small'/>
      </div>
    </section>
  );
};

export default ProductImages;
