import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

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
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

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
          />
        ))}
      </motion.div>
      <motion.div className="flex flex-row mb-10 space-x-6">
        {secondRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateXReverse}
            key={product.title}
          />
        ))}
      </motion.div>
      <motion.div className="flex flex-row-reverse space-x-reverse space-x-6">
        {thirdRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateX}
            key={product.title}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const Header = ({ title, description, technologies, links }) => {
  return (
    <div className="max-w-7xl mx-auto py-20 md:py-12 px-4 w-full">
  {/* Title */}
  <h1 className="text-2xl md:text-4xl font-bold dark:text-white text-left">
    {title}
  </h1>

  {/* Description */}
  <p className="w-full text-base md:text-xl mt-8 dark:text-neutral-200 text-left">
    {description}
  </p>

  {/* Technologies List */}
  <ul className="list-disc pl-5 mt-4 text-base md:text-xl dark:text-neutral-200 text-left">
    {technologies.map((tech, index) => (
      <li key={index}>{tech}</li>
    ))}
  </ul>

  {/* Links */}
  <div className="flex flex-row space-x-4 mt-8">
    {links.map((link, index) => (
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        <button className="text-base md:text-xl font-bold dark:text-white bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {link.title}
        </button>
      </a>
    ))}
  </div>
</div>

  );
};

export const ProductCard = ({ product, translate }) => {
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
      <Link to={product.link} className="">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain object-center absolute h-full w-full inset-0"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full  pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4  text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
