import React, { useState, useEffect } from "react";
import TextSpan from "../components/TextSpan";
import GlowingWrapper from "../components/GlowingWrapper";
import OrangeAlien2D from "../assets/OrangeAlienFlat2d.jpg";
import AlienGuards1 from "../assets/AlienGuards/AlienGuards1.jpg";
import AlienGuards2 from "../assets/AlienGuards/AlienGuards2.jpg";
import AlienGuards3 from "../assets/AlienGuards/AlienGuards3.jpg";
import AlienGuards4 from "../assets/AlienGuards/AlienGuards4.jpg";
import OrangeUFO from "../assets/AlienGuards/OrangeUFO.jpg";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const OrangeCollection = "The Orange Collection".split("");
  const OrangeClosing = "Innovation In Every Shade Of Orange".split("");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // 20000 milliseconds = 20 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="container-xl overflow-hidden justify-items-center p-6 scatter-bo2">
      <AnimatePresence>
        <div className="flex justify-center space-x-4">
          <motion.div
            initial={{ opacity: 0, y: -600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            className="flex space-x-4"
          >
            <GlowingWrapper className="w-52 h-32 md:w-96 md:h-56 from-orange-100 to-orange-200">
              <img
                src={OrangeUFO}
                alt="Orange UFO saucer shooting a tractor beam"
                className="rounded-lg w-52 h-32 md:w-96 md:h-56 hover:animate-pulse duration-200"
              />
            </GlowingWrapper>  
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 2 }}
        >
          <h1 className="text-3xl mx-auto md:text-4xl italic font-bold text-orange-400 font-pacifico py-12 hover:animate-pulse hover:text-orange-500 duration-1000">
            {OrangeCollection.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </h1>
        </motion.div>
        <div className="flex justify-center space-x-4">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 3 }}
            className="flex space-x-4"
          >
            <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-100 to-orange-200">
              <img
                src={AlienGuards1}
                alt="OrangeAlien Flat2d design"
                className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
              />
            </GlowingWrapper>
            <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-300 to-orange-400">
              <img
                src={AlienGuards2}
                alt="OrangeAlien Flat2d design"
                className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
              />
            </GlowingWrapper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 8, duration: 2 }}
            className="flex space-x-4"
          >
            <GlowingWrapper className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 from-orange-500 to-orange-600">
              <img
                src={OrangeAlien2D}
                alt="OrangeAlien Flat2d design"
                className="rounded-lg w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 hover:animate-pulse duration-200"
              />
            </GlowingWrapper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 3 }}
            className="flex space-x-4"
          >
            <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-400 to-orange-300">
              <img
                src={AlienGuards3}
                alt="OrangeAlien Flat2d design"
                className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
              />
            </GlowingWrapper>
            <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-200 to-orange-100">
              <img
                src={AlienGuards4}
                alt="OrangeAlien Flat2d design"
                className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
              />
            </GlowingWrapper>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9, duration: 3 }}
        >
          <h2 className="text-2xl md:text-4xl italic font-bold text-orange-400 font-pacifico py-12 hover:animate-pulse hover:text-orange-500 duration-1000">
            {OrangeClosing.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
