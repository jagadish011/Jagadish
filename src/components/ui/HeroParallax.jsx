import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Modal = ({ product, closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[50%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-64 rounded-lg"
        />
        {/* <h3 className="mt-4 text-2xl font-semibold text-gray-800">
          {product.title}
        </h3> */}
      </div>
    </div>
  );
};

export const HeroParallax = ({
  products,
  projectTitle,
  projectDescription,
  technologies,
  links,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
          {projectTitle}
        </h1>
        <p className="text-lg sm:text-xl mb-6 leading-relaxed bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text text-left">
          {projectDescription}
        </p>
        <ul className="list-none flex flex-wrap justify-center space-x-4 mb-8">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x-4">
          {links.map((link, index) => (
            <Link
              to={link.link}
              target="_blank"
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </header>

      <main className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative group"
            // whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -10, 0] }} // Animation: Move up, then down
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain w-full h-auto rounded-lg shadow-lg"
              onClick={() => handleImageClick(product)}
            />
          </motion.div>
        ))}
      </main>

      {isModalOpen && <Modal product={selectedProduct} closeModal={closeModal} />}
    </div>
  );
};
