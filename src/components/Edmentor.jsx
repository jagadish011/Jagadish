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
const Edmentor = () => {
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

  const links = [{ title: "Learn More", link: "https://theedmentor.com/" }];

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 font-spaceMono">
      {/* Adding the HeroParallax component here */}
      <HeroParallax
        products={products}
        projectTitle="Edmentor"
        projectDescription=" EdMentor is an online platform designed to connect individuals with experienced mentors, offering personalized guidance for educational and career growth. The platform emphasizes one-on-one mentorship and collaboration with industry partners to ensure job readiness.  
        Provide a seamless mentoring experience with features like mentor matching, real-time communication, and a dynamic learning environment."
        technologies={[
          "Developed the Signup and Landing Pages: Built fully responsive, user-friendly pages to facilitate an intuitive user experience.",
          "API Integration: Integrated multiple APIs for fetching mentor and mentee data, implementing user authentication, and managing data flow between the frontend and backend.",
          "Mentorship Dashboard: Worked on creating dynamic, personalized dashboards for both mentors and mentees to track progress, schedule meetings, and exchange resources.",
          "Responsive Design: Ensured cross-device compatibility using modern CSS frameworks and best practices in design.",
          "Worked closely with UI/UX designers to translate design wireframes into a functional and engaging user interface.",
        ]}
        links={links}
      />
    </div>
  );
};

export default Edmentor;
