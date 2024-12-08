import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroParallax } from "./ui/HeroParallax";
import a1 from "../assets/EdMentor/ed1.png";
import a2 from "../assets/EdMentor/ed2.png";
import a3 from "../assets/EdMentor/ed3.png";
import a4 from "../assets/EdMentor/ed4.png";
import a5 from "../assets/EdMentor/ed5.png";
import a6 from "../assets/EdMentor/ed6.png";
import a7 from "../assets/EdMentor/ed7.png";
import a8 from "../assets/EdMentor/ed3.png";
const Edmentor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { thumbnail: a3 },
    { thumbnail: a2 },
    { thumbnail: a1 },
    { thumbnail: a4 },
    { thumbnail: a5 },
    { thumbnail: a6 },
    { thumbnail: a7 },
    { thumbnail: a8 },
    { thumbnail: a1 },
    { thumbnail: a4 },
    { thumbnail: a5 },
    { thumbnail: a4 },
    { thumbnail: a5 },
    { thumbnail: a6 },
  ];

  const links = [{ title: "Learn More", link: "https://theedmentor.com/" }];

  return (
    <div className=" font-spaceMono">
      {/* Adding the HeroParallax component here */}
      <HeroParallax
        products={products}
        projectTitle="Edmentor"
        projectDescription=" EdMentor is an online platform designed to connect individuals with experienced mentors, offering personalized guidance for educational and career growth. The platform emphasizes one-on-one mentorship and collaboration with industry partners to ensure job readiness.  
        Provide a seamless mentoring experience with features like mentor matching, real-time communication, and a dynamic learning environment.
        Developed the Signup and Landing Pages: Built fully responsive, user-friendly pages to facilitate an intuitive user experience.
        API Integration: Integrated multiple APIs for fetching mentor and mentee data, implementing user authentication, and managing data flow between the frontend and backend.
        Mentorship Dashboard: Worked on creating dynamic, personalized dashboards for both mentors and mentees to track progress, schedule meetings, and exchange resources.
        Responsive Design: Ensured cross-device compatibility using modern CSS frameworks and best practices in design.
        Worked closely with UI/UX designers to translate design wireframes into a functional and engaging user interface."
        technologies={[
          "React",
          "Tailwind CSS",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Razorpay",
        ]}
        links={links}
      />
    </div>
  );
};

export default Edmentor;
