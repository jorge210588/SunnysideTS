import React from "react";
import './ProductImage.scss'

const ProductImage = (props) => {
  const { image,size } = props;
  return (
      <div className={"productImage "+ image + " "+size}/>
  );
};

export default ProductImage;
