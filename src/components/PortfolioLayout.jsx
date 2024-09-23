import React, { useEffect, useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import Profile from "../assets/file.png";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { BsArrowUp } from "react-icons/bs";

const PortfolioLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android|iphone|ipad|ipod/i.test(userAgent)) {
        setIsMobile(true);
      }
    };

    checkIfMobile();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "9141078914";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
    toggleDropdown();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 font-spaceMono text-gray-900">
      {/* Dropdown Menu Button */}
      <div className="relative mb-4">
        <button
          onClick={toggleDropdown}
          className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg hover:shadow-md hover:shadow-blue-200 transition-shadow duration-300"
        >
          <BsGrid3X2Gap />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <a
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              onClick={(e) => handleSmoothScroll(e, "about")}
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              onClick={(e) => handleSmoothScroll(e, "experience")}
            >
              Experience
            </a>
            <a
              href="#education"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              onClick={(e) => handleSmoothScroll(e, "education")}
            >
              Education
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              onClick={(e) => handleSmoothScroll(e, "skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              onClick={(e) => handleSmoothScroll(e, "projects")}
            >
              Projects
            </a>
          </div>
        )}
      </div>

      {/* Header Section */}
      <header id="about" className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-4xl font-bold mb-3">Jagadish S Munavalli</h1>
            <p className="text-xl text-gray-600 mb-1">
              Full Stack Engineer focused on building products with extra
              attention to details
            </p>
            <p className="text-lg text-gray-500">India, Karnataka</p>
          </div>
          <div className="mt-3 sm:mt-0">
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-200 hover:shadow-lg hover:shadow-blue-100 transition-shadow duration-300">
              <img
                src={Profile}
                alt="profile"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        <div className="flex mt-6 space-x-4">
          <a
            href="mailto:munavallijagadish@gmail.com"
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg hover:shadow-md hover:shadow-blue-200 transition-shadow duration-300"
          >
            <CiMail />
          </a>
          <a
            href={isMobile ? `tel:${phoneNumber}` : whatsappLink}
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg hover:shadow-md hover:shadow-blue-200 transition-shadow duration-300"
            target={isMobile ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <MdOutlineLocalPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/jagadish-s-munavalli-278aba219/"
            target="_blank"
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg hover:shadow-md hover:shadow-blue-200 transition-shadow duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/jagadish011"
            target="_blank"
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg hover:shadow-md hover:shadow-blue-200 transition-shadow duration-300"
          >
            <LuGithub />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Motivated front-end developer with expertise in HTML, CSS, and
          JavaScript, complemented by a strong foundation in backend
          technologies including Express, Node.js, and MongoDB. Completed a
          specialized course in the MERN stack. Proven ability to create
          visually appealing, responsive interfaces, and contribute to fullstack
          development projects.
        </p>
      </section>

      <section id="experience" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex-row md:flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold mb-3 md:mb-0">
                Orbit tech Cloud Solution
              </h3>
              <span className="text-gray-500 ">JAN 2024 - present</span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-1">
              Full Stack Developer
            </p>
            <p className="text-base text-gray-500 italic">Remote</p>
            <p className="text-base text-gray-700 mt-2 leading-relaxed">
              Implemented new features, led squad, worked on improving the way
              developers ship the code, started migration from Emotion to
              Tailwind CSS and more. Technologies: React, JavaScript, Node.js,
              Express.js, MongoDB
            </p>
          </div>
          <div>
            <div className="flex-row md:flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold mb-3 md:mb-0">
                J-Spiders Institute, Bangalore
              </h3>
              <span className="text-gray-500">JUN 2023 - DEC 2023</span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-1">
              MERN Stack Trainee
            </p>
            {/* <p className="text-base text-gray-500 italic">Remote</p> */}
            <p className="text-base text-gray-700 mt-2 leading-relaxed">
              Completed intensive training in MERN stack technologies. Developed
              multiple projects showcasing proficiency in MongoDB, Express.js,
              React.js, and Node.js. Gained hands-on experience with REST API
              development and frontend-backend integration
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <div className="flex-row md:flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold mb-3 md:mb-0">
              KLS Vishwanathrao Deshpande Institute Of Technology
            </h3>
            <span className="text-gray-500 ml-4 mb-7 w-32 border-red-600">
              2019 - 2023
            </span>
          </div>
          <p className="text-lg font-medium text-gray-700 mb-1">CGPA: 7.76</p>
          <p className="text-base text-gray-700">
            Bachelor's Degree in Computer Science and Engineering
          </p>
        </div>
        <div className="mt-6">
          <div className="flex-row md:flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold mb-3 md:mb-0">
              KLE Prerana PU College, BVB Campus, Hubli
            </h3>
            <span className="text-gray-500 ml-4 w-32 border-red-600">
              2017 - 2019
            </span>
          </div>
          {/* <p className="text-lg font-medium text-gray-700 mb-1">CGPA: 7.76</p> */}
          <p className="text-base text-gray-700">
            Pre University College in Computer Science
          </p>
        </div>
        <div className="mt-6">
          <div className="flex-row md:flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold mb-3 md:mb-0">
              Kendriya Vidyalaya Dharwad
            </h3>
            <span className="text-gray-500 ml-4 w-32 border-red-600">
              2016 - 2017
            </span>
          </div>
          {/* <p className="text-lg font-medium text-gray-700 mb-1">CGPA: 7.76</p> */}
          <p className="text-base text-gray-700">High School (CBSC)</p>
        </div>
      </section>

      <section id="skills" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "c/c++",
            "SQL",
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Bootstrap",
            "Material UI",
            "Git",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              name: "Dhongadi Alkaline-Water",
              description:
                "A mobile app for ordering alkaline water, allowing users to place orders seamlessly.",
              type: "Freelance",
            },
            {
              name: "kalasindhu",
              description:
                "A web application for a dance website, enabling users to explore and book dance events seamlessly",
              type: "Freelance",
            },
            {
              name: "Ed mentor",
              description:
                "Developed a Student and Mentor web application using ReactJS and Tailwind CSS",
              type: "Office Project",
            },
            {
              name: "Neo-Deals/DePanda",
              description:
                "Developed a E-commerse website.That sells a variety of products, Uses technology to make shopping convenient, allows Vendors to sell on the site",
              type: "Office Project",
            },
            {
              name: " SEHGAL Foundation / Digital library",
              description:
                "Web application using React, enabling students to access digital audio, books, and videos based on their syllabus. Ensured seamless navigation and an intuitive user interface for enhanced user experience.",
              type: "Office Project",
            },
            {
              name: "Sahay 24x7",
              description:
                "Platform offering a variety of services at home. Customers use our platform to book services",
              type: "Office Project",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 text-base mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <BsArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default PortfolioLayout;
