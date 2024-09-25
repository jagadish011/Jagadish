import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroParallax } from "./ui/HeroParallax"; // import { HeroParallax } from './ui/HeroParallax';

const AlkalineWater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Example products to display in HeroParallax
  const products = [
    {
      title: "Product 1",
      link: "/product-1",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail:
        "https://cdn.pixabay.com/photo/2022/02/13/13/10/mountain-7011121_1280.png",
    },
    {
      title: "Product 4",
      link: "/product-4",
      thumbnail:
        "https://cdn.pixabay.com/photo/2023/07/19/12/40/trees-8136806_1280.png",
    },
    {
      title: "Product 5",
      link: "/product-5",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/06/17/14/58/school-8835808_1280.jpg",
    },
    {
      title: "Product 6",
      link: "/product-6",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/07/31/15/10/blue-8935074_1280.jpg",
    },
    {
      title: "Product 7",
      link: "/product-7",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg",
    },
    {
      title: "Product 8",
      link: "/product-8",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg",
    },
    {
      title: "Product 9",
      link: "/product-9",
      thumbnail:
        "https://cdn.pixabay.com/photo/2022/02/13/13/10/mountain-7011121_1280.png",
    },
    {
      title: "Product 10",
      link: "/product-10",
      thumbnail:
        "https://cdn.pixabay.com/photo/2023/07/19/12/40/trees-8136806_1280.png",
    },
    {
      title: "Product 11",
      link: "/product-11",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/06/17/14/58/school-8835808_1280.jpg",
    },
    {
      title: "Product 12",
      link: "/product-12",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/07/31/15/10/blue-8935074_1280.jpg",
    },
    {
      title: "Product 13",
      link: "/product-13",
      thumbnail:
        "https://cdn.pixabay.com/photo/2021/03/26/11/39/camera-6125683_1280.jpg",
    },
    {
      title: "Product 14",
      link: "/product-14",
      thumbnail:
        "https://cdn.pixabay.com/photo/2023/10/26/22/50/guitar-8343666_1280.png",
    },
  ];

  return (
    <div className="container mx-auto py-8 font-spaceMono">
      <h1 className="text-2xl font-bold mb-4">Freelance Project</h1>
      {/* <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className="rounded-lg"
          >
            <div>
              <img src="https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg" alt="Alkaline Water App" />
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg" alt="Alkaline Water App" />
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2023/10/23/17/10/landscape-8336497_1280.jpg" alt="Alkaline Water App" />
            </div>
          </Carousel>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            Dhongadi Alkaline-Water is a mobile app for ordering and delivering alkaline water to customers in bulk. Our team has developed the app using React Native, which allows users to place orders seamlessly. We've also created an admin app for mobile and a web application for the backend, integrating it with Razorpay for payments.
          </p>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>User-friendly mobile app for placing water orders</li>
            <li>Admin app for managing orders and deliveries</li>
            <li>Web application for the backend, including Razorpay integration</li>
            <li>Responsive design for seamless user experience</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <div className="flex gap-4">
            <a
              href="https://dhongadi-alkaline-water.com"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Live Website
            </a>
            <a
              href="https://github.com/your-username/dhongadi-alkaline-water"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div> */}

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
      />
    </div>
  );
};

export default AlkalineWater;
