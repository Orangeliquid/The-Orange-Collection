import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowingWrapper from "../components/GlowingWrapper";
import ContentBoxes from "../components/ContentBoxes";
import OrangeAlien2D from "../assets/OrangeAlienFlat2d.jpg";

const contentData = [
  {
    type: "text",
    title: "My Name is Michael",
    data: "Following in my father's footsteps, I developed a keen interest in technology from a young age. However, it wasn’t until recently that I delved into the world of programming.",
    titleClassName:
      "text-2xl font-bold mb-4 xl:max-w-md text-white violet-glass",
    textClassName:
      "text-lg xl:text-xl mb-12 xl:max-w-md font-montserrat text-white font-semibold",
  },
  {
    type: "text",
    title: "First Language: Python",
    data: "As I grew older, friends often suggested that I explore Python. After several attempts, I finally gained the understanding needed to create my own projects.",
    titleClassName:
      "text-2xl font-bold mb-4 xl:max-w-md text-white violet-glass",
    textClassName:
      "text-lg xl:text-xl mb-12 xl:max-w-md font-montserrat text-white font-semibold",
  },
  {
    type: "text",
    title: "Currently",
    data: "My main focus is to further my knowledge of Python, CSS, HTML, and JavaScript. I am also developing more in-depth Python projects.",
    titleClassName:
      "text-2xl font-bold mb-4 xl:max-w-md text-white violet-glass",
    textClassName:
      "text-lg xl:text-xl mb-12 xl:max-w-md font-montserrat text-white font-semibold",
  },
  {
    type: "text",
    title: "The Future",
    data: "My goal is to secure a position in the software development field. I find backend development intellectually stimulating and frontend development creatively invigorating!",
    titleClassName:
      "text-2xl font-bold mb-4 xl:max-w-lg text-white violet-glass",
    textClassName:
      "text-lg xl:text-xl mb-12 xl:max-w-lg font-montserrat text-white font-semibold",
  },
];

function About() {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          id="AboutContent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          <div className="container-xl flex flex-col xl:flex-row-reverse items-center justify-center mb-12 m-0 p-6">
            <GlowingWrapper className="mb-10 xl:mb-0 xl:ml-10 h-80 w-64 xl:h-[30rem] xl:w-[25rem] from-orange-500 to-orange-600">
              <img
                src={OrangeAlien2D}
                alt="Orange Alien standing with an orange background"
                className="rounded-lg h-80 w-64 xl:h-[30rem] xl:w-[25rem] hover:animate-pulse duration-200"
              />
            </GlowingWrapper>

            <div className="xl:text-center xl:mr-16 xl:max-w-md py-4">
              <h1 className="text-4xl xl:text-5xl font-montserrat text-white font-bold pb-4">
                Unveiling the Spectrum of Innovation.
              </h1>
              <h2 className="text-2xl xl:text-3xl font-montserrat text-white font-semibold">
                Founded in 2022, The Orange Collection showcases my projects and
                Python learning journey.
              </h2>
            </div>
          </div>

          <div className="container-xl flex flex-col xl:flex-row items-center justify-center orange-glass rounded-none p-16">
            <ContentBoxes content={contentData} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default About;
