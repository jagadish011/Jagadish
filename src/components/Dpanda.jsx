import React, { useEffect } from "react";
import { HeroParallax } from "./ui/HeroParallax";
import dp1 from "../assets/dpanda/nd1.png";
import dp2 from "../assets/dpanda/nd2.png";
import dp3 from "../assets/dpanda/nd3.png";
import dp4 from "../assets/dpanda/nd4.png";
import dp5 from "../assets/dpanda/nd5.png";
import dp6 from "../assets/dpanda/nd6.png";
import dp7 from "../assets/dpanda/nd7.png";
import dp8 from "../assets/dpanda/nd8.png";
import dp9 from "../assets/dpanda/nd9.png";
import dp10 from "../assets/dpanda/nd10.png";
import dp11 from "../assets/dpanda/nd11.png";
import dp12 from "../assets/dpanda/nd12.png";
import dp13 from "../assets/dpanda/nd13.png";

const Dpanda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of products
  const products = [
    { title: "Product 1", thumbnail: dp1 },
    { title: "Product 2", thumbnail: dp2 },
    { title: "Product 3", thumbnail: dp3 },
    { title: "Product 4", thumbnail: dp4 },
    { title: "Product 5", thumbnail: dp5 },
    { title: "Product 6", thumbnail: dp6 },
    { title: "Product 7", thumbnail: dp7 },
    { title: "Product 8", thumbnail: dp8 },
    { title: "Product 9", thumbnail: dp9 },
    { title: "Product 10", thumbnail: dp10 },
    { title: "Product 11", thumbnail: dp11 },
    { title: "Product 12", thumbnail: dp12 },
    { title: "Product 13", thumbnail: dp13 },
  ];

  // Array of links
  const links = [
    { title: "Live Project", link: "https://neodeals.in/" },
    { title: "Admin Panel", link: "https://vendortool.neodeals.in/" },
  ];

  // Expanded description
  const projectDescription = `
    DePanda is a robust e-commerce platform designed for seamless interaction 
    between customers, vendors, and administrators. The platform offers 
    a user-friendly interface for customers to explore and purchase a wide range 
    of products while empowering vendors with tools for managing their product listings, 
    tracking sales, and overseeing orders.
    
    The platform also includes a comprehensive admin panel where administrators 
    can manage users, monitor transactions, and oversee payouts efficiently. 
    Razorpay integration ensures secure and hassle-free payment processing, 
    making the platform reliable for all stakeholders.
  `;

  return (
    <div className="font-spaceMono">
      <HeroParallax
        products={products}
        projectTitle="DePanda E-commerce Platform"
        projectDescription={projectDescription}
        technologies={[
          "Frontend: ReactJS, Tailwind CSS",
          "Vendor Tool: ReactJS, Material-UI",
          "Backend: Node.js, Express.js",
          "Database: MongoDB",
          "Payment Gateway: Razorpay",
        ]}
        links={links}
      />

      {/* Additional Details Section */}
      <div className="mt-5 p-5 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Platform Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Responsive Design:</strong> A fully responsive layout that
            adapts seamlessly to devices of all sizes, ensuring a great user
            experience.
          </li>
          <li>
            <strong>Vendor Management:</strong> Separate dashboards for vendors
            with tools to manage their store, inventory, and orders.
          </li>
          <li>
            <strong>Admin Capabilities:</strong> Admin panel features include
            user management, order monitoring, and payout handling.
          </li>
          <li>
            <strong>Secure Payments:</strong> Integrated with Razorpay to
            provide secure and seamless transactions for all users.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-4">Key Achievements</h2>
        <p className="text-gray-700">
          During the development of DePanda, our team achieved remarkable
          milestones:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Implemented reusable UI components for scalability.</li>
          <li>
            Integrated Material-UI into the vendor tool for professional-grade
            interfaces.
          </li>
          <li>
            Delivered an end-to-end e-commerce solution with efficient data
            flow between frontend and backend.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dpanda;
