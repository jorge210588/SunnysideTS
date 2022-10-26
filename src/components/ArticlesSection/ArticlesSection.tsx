import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ArticlesSection.scss";
import ProductDescription from "./ProductItem/ProductDescription/ProductDescription";

const ArticlesSection = () => {
  const product1 = {
    name: "Transform your brand",
    description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients trough compelling visuals that do most of the marketing for you."
  }
  
  const product2 = {
    name: "Stand out to the right audience",
    description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
  }

  const product3 = {
    name: "Graphic Design",
    description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
  }
  
  const product4 = {
    name: "Photography",
    description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
  }

  return (
    <section>
      <ProductItem
        name={product1.name}
        description={product1.description}
        image="egg"
        lineColor="yellow"
        size="big"
      />
      <ProductItem
        name={product2.name}
        description={product2.description}
        image="cup"
        lineColor="red"
        size="big"
      />
      <article className="bottomImagesSection">
        <div className="bottomImage cherry bgImg">
          <div className="centerContent">
            <ProductDescription
              name={product3.name}
              description={product3.description}
              hideLearnMore={true}
            />
          </div>
        </div>
        <div className="bottomImage mandarin bgImg">
          <div className="centerContent">
            <ProductDescription
              name={product4.name}
              description={product4.description}
              hideLearnMore={true}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ArticlesSection;
