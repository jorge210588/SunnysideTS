import React from "react";
import "./ProductDescription.scss";

interface ProductDescriptionProps {
  name:string, 
  description:string, 
  hideLearnMore?:boolean, 
  lineColor?:string
}

const ProductDescription = (props:ProductDescriptionProps) => {
  const { name, description, hideLearnMore, lineColor } = props;
  let descriptionClass = "descriptionContainer";
  if (hideLearnMore) {
    descriptionClass += " centeredDesc";
  }

  return (
    <div className={descriptionClass}>
      <h2
        className={hideLearnMore ? "DescriptionTitleImg" : "DescriptionTitle"}
      >
        {name}
      </h2>
      <br />
      <p className={hideLearnMore ? "DescriptionTxtImg" : "DescriptionTxt"}>
        {description}
      </p>
      <br />
      <br />
      {!hideLearnMore && (
        <span>
          <a className={"learnMore " + lineColor} href="#">
            LEARN MORE
          </a>
        </span>
      )}
    </div>
  );
};

export default ProductDescription;
