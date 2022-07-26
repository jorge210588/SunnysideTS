import React from "react";
import emilyImg from "../../images/image-emily.jpg";
import thomasImg from "../../images/image-thomas.jpg";
import jennieImg from "../../images/image-jennie.jpg";
import Client from "./Client/Client";
import "./ClientTestimonials.scss";

const ClientTestimonials = () => {
  const client1 = {
    name: "Emily R.",
    position: "Marketing Director",
    description:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    image: emilyImg,
  };

  const client2 = {
    name: "Tomas S.",
    position: "Chief Operating Officer",
    description: `Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.`,
    image: thomasImg,
  };

  const client3 = {
    name: "Jennie F.",
    position: "Business Owner",
    description:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    image: jennieImg,
  };

  return (
    <section className="clientsTestimonials">
      <div className="clientsTitle">
        <h3>CLIENT TESTIMONIALS</h3>
      </div>
      <div className="clients">
        <Client
          name={client1.name}
          position={client1.position}
          description={client1.description}
          image={client1.image}
        />
        <Client
          name={client2.name}
          position={client2.position}
          description={client2.description}
          image={client2.image}
        />
        <Client
          name={client3.name}
          position={client3.position}
          description={client3.description}
          image={client3.image}
        />
      </div>
    </section>
  );
};

export default ClientTestimonials;
