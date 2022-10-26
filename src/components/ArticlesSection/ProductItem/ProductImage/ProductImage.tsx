import React from "react";
import './ProductImage.scss'

interface ProductImageProps {
  image:string,
  size:string
}

const ProductImage = (props:ProductImageProps) => {
  const { image,size } = props;
  return (
      <div className={"productImage "+ image + " "+size}/>
  );
};

export default ProductImage;
