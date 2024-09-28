import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroParallax } from "./ui/HeroParallax"; 
import a1 from "../assets/alkaline/a1.png";
import a2 from "../assets/alkaline/a2.png";
import a3 from "../assets/alkaline/a3.png";
import a4 from "../assets/alkaline/a4.png";
import a5 from "../assets/alkaline/a5.png";
import a6 from "../assets/alkaline/a6.png";
import a7 from "../assets/alkaline/a7.png";
import a8 from "../assets/alkaline/a8.png";

const AlkalineWater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Example products to display in HeroParallax
  const products = [
    {
      title: "Product 3",
      thumbnail: a3,
    },
    {
      title: "Product 2",
      thumbnail: a2,
    },
    {
      title: "Product 1",
      thumbnail: a1,
    },
    {
      title: "Product 4",
      thumbnail: a4,
    },
    {
      title: "Product 5",
      thumbnail: a5,
    },
    {
      title: "Product 6",
      thumbnail: a6,
    },
    {
      title: "Product 7",
      thumbnail: a7,
    },
    {
      title: "Product 8",
      thumbnail: a8,
    },
    {
      title: "Product 1",
      thumbnail: a1,
    },
    {
      title: "Product 4",
      thumbnail: a4,
    },
    {
      title: "Product 5",
      thumbnail: a5,
    },
    {
      title: "Product 4",
      thumbnail: a4,
    },
    {
      title: "Product 5",
      thumbnail: a5,
    },
    {
      title: "Product 6",
      thumbnail: a6,
    },

  ];
  const links = [
    { title: "Backend", link: "https://alkaline-backend-final.vercel.app/health" },
    { title: "Learn More", link: "https://alkaline-admin.vercel.app/" },
  ];
  return (
    <div className="container mx-auto py-8 font-spaceMono">
      <h1 className="text-2xl font-bold mb-4">Freelance Project</h1>
      {/* Adding the HeroParallax component here */}
      <HeroParallax
        products={products}
        projectTitle="Dhongadi Alkaline-Water"
        projectDescription="Dhongadi Alkaline-Water is a mobile app for ordering and delivering alkaline water to customers in bulk. Our team has developed the app using React Native, which allows users to place orders seamlessly. We've also created an admin app for mobile and a web application for the admin, where the admin can manage orders, deliveries, and download the order details of the customer. For payment, we have integrated it with Razorpay."
        technologies={[
          "Backend: Node.js, Express.js",
          "Database: MongoDB",
          "Payment Gateway: Razorpay",
        ]}
        links={links}
      />
    </div>
  );
};

export default AlkalineWater;
