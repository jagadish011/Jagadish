import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const Modal = ({ product, closeModal }) => {
  const [modalStyle, setModalStyle] = useState({});

  React.useEffect(() => {
    const calculatePosition = () => {
      const modalWidth = 800; // Adjust as needed
      const modalHeight = 600; // Adjust as needed

      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Calculate the center of the current viewport
      const viewportCenterY = scrollY + window.innerHeight / 2;
      const viewportCenterX = window.innerWidth / 2;

      // Position the modal centered in the current viewport
      const top = viewportCenterY - modalHeight / 2;
      const left = viewportCenterX - modalWidth / 2;

      setModalStyle({
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        maxWidth: `${modalWidth}px`,
        maxHeight: `${modalHeight}px`,
        transform: "none",
      });
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-75 overflow-y-auto"
      onClick={closeModal}
    >
      <div
        style={modalStyle}
        className="bg-white p-4 relative mx-auto overflow-auto rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-black font-bold text-lg"
          onClick={closeModal}
        >
          &times;
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain w-full h-auto"
        />
        <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
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
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

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
    <div
      ref={ref}
      className="h-full py-2 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header
        title={projectTitle}
        description={projectDescription}
        technologies={technologies}
        links={links}
      />
      <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 mb-10">
        {firstRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateX}
            key={product.title}
            onImageClick={handleImageClick}
          />
        ))}
      </motion.div>
      <motion.div className="flex flex-row mb-10 space-x-6">
        {secondRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateXReverse}
            key={product.title}
            onImageClick={handleImageClick}
          />
        ))}
      </motion.div>
      <motion.div className="flex flex-row-reverse space-x-reverse space-x-6">
        {thirdRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateX}
            key={product.title}
            onImageClick={handleImageClick}
          />
        ))}
      </motion.div>

      {isModalOpen && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export const Header = ({ title, description, technologies, links }) => {
  return (
    <div className="max-w-7xl mx-auto py-20 md:py-12 px-4 w-full">
      <h1 className="text-2xl md:text-4xl font-bold dark:text-white text-left">
        {title}
      </h1>
      <p className="w-full text-base md:text-xl mt-8 dark:text-neutral-200 text-left">
        {description}
      </p>
      <ul className="list-disc pl-5 mt-4 text-base md:text-xl dark:text-neutral-200 text-left">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="flex flex-row space-x-4 mt-8">
        {links.map((link, index) => (
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <a
              href="#_"
              class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                {link.title}
              </span>
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate, onImageClick }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <button onClick={() => onImageClick(product)} className="w-full h-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain object-center absolute h-full w-full inset-0"
        />
      </button>
      <div className="absolute inset-0 h-full w-full pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 text-white">{product.title}</h2>
    </motion.div>
  );
};

export default HeroParallax;
