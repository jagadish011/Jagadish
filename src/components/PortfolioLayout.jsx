import React, { useEffect, useState } from "react";
import Profile from "../assets/file.png";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const PortfolioLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android|iphone|ipad|ipod/i.test(userAgent)) {
        setIsMobile(true);
      }
    };

    checkIfMobile();
  }, []);

  const phoneNumber = "9141078914";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 font-spaceMono text-gray-900">
      {/* Header Section */}
      <header className="mb-8">
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
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={Profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-6 space-x-4">
          <a
            href="mailto:munavallijagadish@gmail.com"
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg"
          >
            <CiMail />
          </a>
          <a
            href={isMobile ? `tel:${phoneNumber}` : whatsappLink}
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg"
            target={isMobile ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <MdOutlineLocalPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/jagadish-s-munavalli-278aba219/"
            target="_blank"
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/jagadish011"
            target="_blank"
            className="text-2xl text-gray-400 border border-gray-400 p-2 rounded-lg"
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

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">
                Orbit tech Cloud Solution
              </h3>
              <span className="text-gray-500">JAN 2024 - present</span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-1">
              Full Stack Developer
            </p>
            <p className="text-base text-gray-500 italic">Remote</p>
            <p className="text-base text-gray-700 mt-2 leading-relaxed">
              Implemented new features, led squad, worked on improving the way
              developers ship the code, started migration from Emotion to
              Tailwind CSS and more. Technologies: React, TypeScript, GraphQL
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">
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

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">
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
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">
            KLE Prerana PU College, BVB Campus, Hubli
            </h3>
            <span className="text-gray-500 ml-4 mb-7 w-32 border-red-600">
            2017 - 2019
            </span>
          </div>
          {/* <p className="text-lg font-medium text-gray-700 mb-1">CGPA: 7.76</p> */}
          <p className="text-base text-gray-700">
            Pre University College in Computer Science
          </p>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">
            Kendriya Vidyalaya Dharwad
            </h3>
            <span className="text-gray-500 ml-4 mb-7 w-32 border-red-600">
              2016 - 2017
            </span>
          </div>
          {/* <p className="text-lg font-medium text-gray-700 mb-1">CGPA: 7.76</p> */}
          <p className="text-base text-gray-700">
            High School (CBSC)
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
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

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              name: "Consultly",
              description: "A platform to build and grow your online business",
            },
            {
              name: "Monito",
              description:
                "Browser extension that records everything happening in a web application",
            },
            {
              name: "Jarocki.me",
              description:
                "My personal website and blog. Built with Next.js and Notion API",
            },
            {
              name: "Minimal",
              description:
                "Minimalist calendars, habit trackers and planners generator",
            },
            {
              name: "Barepapers",
              description:
                "Generates beautiful wallpapers using random shapes and gradients",
            },
            {
              name: "Year progress",
              description:
                "Tracks current year progress and displays a countdown",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="border border-gray-200 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 text-base mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                  Side Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioLayout;
