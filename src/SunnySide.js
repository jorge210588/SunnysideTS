import React from "react";
import ArticlesSection from "./components/ArticlesSection/ArticlesSection";
import ClientTestimonials from "./components/ClientTestimonials/ClientTestimonials";
import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import ProductImages from "./components/ProductImages/ProductImages";

const SunnySide = () => {
  return (
    <>
      <HeaderSection />
      <ArticlesSection />
      <ClientTestimonials />
      <ProductImages />
      <FooterSection/>
    </>
  );
};

export default SunnySide;
