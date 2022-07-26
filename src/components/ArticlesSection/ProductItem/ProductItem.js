import React from "react";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImage from "./ProductImage/ProductImage";
import "./ProductItem.scss";
const ProductItem = (props) => {
  const { name, description, image, lineColor, size } = props;
  const alignClass = lineColor ? " align-"+lineColor : "";
  
  return (
    <article className={"productArticle"+alignClass}>
          <div className="productSection">
            <ProductImage image={image} size={size}/>
          </div>
          <div className="productSection">
            <ProductDescription
              name={name}
              description={description}
              lineColor={lineColor}
            />
          </div>
    </article>
  );
};

export default ProductItem;
