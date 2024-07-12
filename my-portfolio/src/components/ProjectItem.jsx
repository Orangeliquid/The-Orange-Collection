import React, { useState, useRef } from "react";
import GlowingWrapper from "../components/GlowingWrapper";
import TextSpan from "../components/TextSpan";
import ImageModal from "../components/ImageModal"; // Import ImageModal component
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const ProjectItem = ({ project }) => {
  const ref = useRef(null);
  const navRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const navScrollProgress = useScroll({
    container: navRef,
  });
  const y = useParallax(scrollYProgress);
  const scaleX = useSpring(navScrollProgress.scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [selectedTab, setSelectedTab] = useState(project.tabs[0]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [modalImgSrc, setModalImgSrc] = useState(""); // State for modal image src
  const [modalImgAlt, setModalImgAlt] = useState(""); // State for modal image alt text

  // Function to open modal
  const handleOpenModal = (src, alt) => {
    setModalImgSrc(src);
    setModalImgAlt(alt);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        ref={ref}
        className="h-screen flex flex-col items-center justify-center snap-start"
      >
        <GlowingWrapper className="m-4 p-2 from-purple-500 to-orange-400 bg-purple-500 rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h1 className="text-2xl md:text-4xl text-white font-pacifico m-3">
                  {project.name.split("").map((letter, index) => (
                    <TextSpan key={`project.name-${index}`}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                  ))}
                </h1>
              </a>
            </motion.div>
          </AnimatePresence>
        </GlowingWrapper>

        <GlowingWrapper className="from-purple-500 to-orange-400">
          <div className="flex flex-col items-center relative bg-black rounded">
            <nav className="flex z-10 w-full p-4 bg-orange-500">
              <ul className="flex space-x-4 text-[9px] md:w-24 md:h-10 md:text-base text-white">
                {project.tabs.map((item) => (
                  <GlowingWrapper
                    key={item.label}
                    className="from-purple-600 to-purple-600"
                  >
                    <li
                      className={`cursor-pointer md:w-[5.9rem] md:h-10 bg-purple-500 p-2 rounded hover:animate-pulse ${
                        item === selectedTab ? "text-slate-900 font-bold" : ""
                      }`}
                      onClick={() => setSelectedTab(item)}
                    >
                      {item.label}
                      {item === selectedTab ? (
                        <motion.div
                          className="underline"
                          layoutId="underline"
                        />
                      ) : null}
                    </li>
                  </GlowingWrapper>
                ))}
              </ul>
            </nav>
            <motion.div className="rounded-lg overflow-hidden" style={{ y }}>
              <div className="w-full h-full max-w-[35rem] max-h-[28rem] md:max-w-[35rem] md:max-h-[28rem] sm:max-w-[25rem] sm:max-h-[20rem] xs:max-w-[18rem] xs:max-h-[15rem]">
                <img
                  src={selectedTab.image}
                  alt={`${project.name} ${selectedTab.label}`}
                  className="rounded-lg p-8 mt-8 w-72 h-52 md:w-[35rem] md:h-[28rem] object-contain cursor-pointer"
                  onClick={() =>
                    handleOpenModal(
                      selectedTab.image,
                      `${project.name} ${selectedTab.label}`
                    )
                  }
                />
              </div>
            </motion.div>
          </div>
        </GlowingWrapper>
        <GlowingWrapper className="mt-6 p-4 from-purple-500 to-orange-400 bg-purple-500 text-white font-lato rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="justify-center flex-wrap">{selectedTab.content}</p>
            </motion.div>
          </AnimatePresence>
        </GlowingWrapper>
      </section>

      {/* Render ImageModal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imgSrc={modalImgSrc}
        imgAlt={modalImgAlt}
      />
    </>
  );
};

export default ProjectItem;
