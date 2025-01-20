import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroParallax } from "./ui/HeroParallax"; 
import s1 from "../assets/sahay/s1.png";
import s2 from "../assets/sahay/s2.png";
import s3 from "../assets/sahay/s3.png";
import s4 from "../assets/sahay/s4.png";
import s5 from "../assets/sahay/s5.png";
import s6 from "../assets/sahay/s6.png";
import s7 from "../assets/sahay/s7.png";
import s8 from "../assets/sahay/s8.png";
import s9 from "../assets/sahay/s9.png";
import s10 from "../assets/sahay/s10.png";
import s11 from "../assets/sahay/s11.png";
import s12 from "../assets/sahay/s12.png";

const Sahay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { title: "Dashboard Overview", thumbnail: s1 },
    { title: "Vendor Management", thumbnail: s2 },
    { title: "Ranger Allocation", thumbnail: s3 },
    { title: "Service Details", thumbnail: s4 },
    { title: "Add Vendor", thumbnail: s5 },
    { title: "Add Ranger", thumbnail: s6 },
    { title: "Service Categories", thumbnail: s7 },
    { title: "Customer Orders", thumbnail: s8 },
    { title: "Customer Orders", thumbnail: s9 },
    { title: "Customer Orders", thumbnail: s10 },
    { title: "Customer Orders", thumbnail: s11 },
    { title: "Customer Orders", thumbnail: s12 },
  ];

  const links = [
    { title: "Admin Panel", link: "https://sahay-admin.vercel.app/" },
    { title: "Learn More", link: "https://sahay.vercel.app/" },
  ];

  return (
    <div className="font-spaceMono">
      <HeroParallax
        products={products}
        projectTitle="Sahay: Home Services Platform"
        projectDescription="Sahay is a comprehensive home services platform designed to streamline the management and allocation of services such as plumbing, home cleaning, painting, car washing, and more. The platform features a hierarchical role structure, with VROs (Virtual Regional Officers) having complete access to add vendors and rangers. Vendors can manage their rangers and assign services, while rangers provide the services selected by the VRO and vendors. 

        As a major contributor to the admin application, I implemented features such as vendor and ranger management, service allocation, and customer order tracking. Built using React.js and Tailwind CSS, the platform offers a seamless user experience. Postman was used for API testing and integration, ensuring efficient backend communication and service reliability."
        technologies={[
          "Frontend: React.js, Tailwind CSS",
          "Tools: Postman",
        ]}
        links={links}
      />
    </div>
  );
};

export default Sahay;
