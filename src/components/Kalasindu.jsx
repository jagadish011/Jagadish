import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroParallax } from "./ui/HeroParallax";
import a1 from "../assets/kalasindhu/k1.png";
import a2 from "../assets/kalasindhu/k2.png";
import a3 from "../assets/kalasindhu/k3.png";
import a4 from "../assets/kalasindhu/k4.png";
import a5 from "../assets/kalasindhu/k5.png";
import a6 from "../assets/kalasindhu/k6.png";
import a7 from "../assets/kalasindhu/k7.png";
import a8 from "../assets/kalasindhu/k8.png";

const Kalasindu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { title: "Product 3", thumbnail: a3 },
    { title: "Product 2", thumbnail: a2 },
    { title: "Product 1", thumbnail: a1 },
    { title: "Product 4", thumbnail: a4 },
    { title: "Product 5", thumbnail: a5 },
    { title: "Product 6", thumbnail: a6 },
    { title: "Product 7", thumbnail: a7 },
    { title: "Product 8", thumbnail: a8 },
    { title: "Product 1", thumbnail: a1 },
    { title: "Product 4", thumbnail: a4 },
    { title: "Product 5", thumbnail: a5 },
    { title: "Product 4", thumbnail: a4 },
    { title: "Product 5", thumbnail: a5 },
    { title: "Product 6", thumbnail: a6 },
  ];

  const links = [{ title: "Learn More", link: "https://kalasindhu.com/" }];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 font-spaceMono">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Freelance Project: Kalasindu
      </h1>
      <p className="text-lg mb-6 text-center text-gray-600 max-w-4xl mx-auto">
        Kalasindhu, an esteemed Academy of Dance and Related Arts, aims to preserve and promote Indian arts and culture.
      </p>

      {/* Adding the HeroParallax component here */}
      <HeroParallax
        products={products}
        projectTitle="Kalasindu"
        projectDescription="I had the incredible opportunity to develop a website for Kalasindhu, an esteemed Academy of Dance and Related Arts located in Banashankari, Bangalore, India. This project was built using React and Bootstrap to ensure a responsive and visually appealing design. Kalasindhu is passionately committed to preserving and promoting Indian arts and culture. The academy offers a comprehensive and integrated approach to education in classical arts, including dance, music, visual art, and Sanskrit, with a special focus on dance."
        technologies={[
          "An elegant, user-friendly layout that showcases the rich tapestry of classical arts.",
          "Detailed information on the various programs and courses offered by the academy.",
          "A dedicated section for news and updates to keep students and visitors informed about upcoming events and performances.",
          "A gallery to highlight memorable moments and achievements of the academy’s students and faculty.",
          "Contact information and an interactive map for easy navigation and inquiries.",
        ]}
        links={links}
      />
    </div>
  );
};

export default Kalasindu;
