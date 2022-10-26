import React from "react";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImage from "./ProductImage/ProductImage";
import "./ProductItem.scss";

interface ProductItemProps{
  name:string,
  description:string,
  image:string,
  lineColor:string,
  size:string
}

const ProductItem = (props:ProductItemProps) => {
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
