import React, { useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import TextSpan from "../components/TextSpan";
import GlowingWrapper from "../components/GlowingWrapper";
import OrangeAlien2D from "../assets/OrangeAlienFlat2d.jpg";
import AlienGuards1 from "../assets/AlienGuards/AlienGuards1.jpg";
import AlienGuards2 from "../assets/AlienGuards/AlienGuards2.jpg";
import AlienGuards3 from "../assets/AlienGuards/AlienGuards3.jpg";
import AlienGuards4 from "../assets/AlienGuards/AlienGuards4.jpg";
import OrangeUFO from "../assets/AlienGuards/OrangeUFO.jpg";
import GitHubProjects from "../components/GithubProjects";

function Home() {
  const OrangeCollection = "The Orange Collection".split("");
  const OrangeClosing = "Innovation In Every Shade Of Orange".split("");

  const [scope, animate] = useAnimate();
  const [aliens, setAliens] = useState({
    OrangeAlien: true,
    AlienGuards1: true,
    AlienGuards2: true,
    Ufo: true,
  });

  const [viewbutton, setViewButton] = useState({
    ViewButton: true,
  });
  const [showGitHubProjects, setShowGitHubProjects] = useState(false);

  const handleAnimate = async () => {
    // Reverse animations for the aliens returning to the ship
    await animate("#ViewButton", { opacity: 0 }, { duration: 0.5 });
    setViewButton((prev) => ({ ...prev, ViewButton: false }));
    await animate("#OrangeAlien", { y: -200 }, { duration: 1 });
    await animate("#OrangeAlien", { opacity: 0 }, { duration: 1 });
    setAliens((prev) => ({ ...prev, OrangeAlien: false }));
    await animate("#AlienGuards1", { y: -200 }, { duration: 1 });
    await animate("#AlienGuards1", { opacity: 0 }, { duration: 1 });
    setAliens((prev) => ({ ...prev, AlienGuards1: false }));
    await animate("#AlienGuards2", { y: -200 }, { duration: 1 });
    await animate("#AlienGuards2", { opacity: 0 }, { duration: 1 });
    setAliens((prev) => ({ ...prev, AlienGuards2: false }));
    await animate("#Ufo", { y: -200, opacity: 0},  { duration: 2 });
    setAliens((prev) => ({ ...prev, Ufo: false }));
    await animate("#Innovation", { y: -60 }, { duration: 1.2 });

    setShowGitHubProjects(true);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 4000);
  };

  return (
    <>
      <div
        className="container-xl overflow-hidden glass-effect justify-items-center p-6"
        ref={scope}
      >
        <AnimatePresence>
          <div className="flex justify-center space-x-4">
            {aliens.Ufo && (
              <motion.div
                id="Ufo"
                initial={{ opacity: 0, y: -600 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                className="flex space-x-4"
              >
                <GlowingWrapper className="w-52 h-32 md:w-96 md:h-56 from-orange-100 to-orange-200">
                  <img
                    onClick={handleAnimate}
                    src={OrangeUFO}
                    alt="Orange UFO saucer shooting a tractor beam"
                    className="rounded-lg w-52 h-32 md:w-96 md:h-56 hover:animate-pulse duration-200"
                  />
                </GlowingWrapper>
              </motion.div>
            )}
          </div>
          <motion.div
            id="OrangeCollection"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 2 }}
          >
            <h1 className="text-4xl mx-auto md:text-6xl font-bold text-orange-400 font-pacifico py-12 hover:animate-pulse hover:text-orange-500 duration-1000">
              {OrangeCollection.map((letter, index) => (
                <TextSpan key={`orange-collection-${index}`}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              ))}
            </h1>
          </motion.div>
          <div className="flex justify-center space-x-4">
            {aliens.AlienGuards1 && (
              <motion.div
                id="AlienGuards1"
                initial={{ opacity: 0, x: 200, y: -200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 5, duration: 3 }}
                className="flex space-x-4"
              >
                <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-100 to-orange-200">
                  <img
                    onClick={handleAnimate}
                    src={AlienGuards1}
                    alt="Two orange alien guards"
                    className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
                  />
                </GlowingWrapper>
                <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-300 to-orange-400">
                  <img
                    onClick={handleAnimate}
                    src={AlienGuards2}
                    alt="two orange alien guards, one with a small alien child on their back"
                    className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
                  />
                </GlowingWrapper>
              </motion.div>
            )}
            {aliens.OrangeAlien && (
              <motion.div
                id="OrangeAlien"
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 8, duration: 2 }}
                className="flex space-x-4"
              >
                <GlowingWrapper className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 from-orange-500 to-orange-600">
                  <img
                    onClick={handleAnimate}
                    src={OrangeAlien2D}
                    alt="OrangeAlien Flat2d design"
                    className="rounded-lg w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 hover:animate-pulse duration-200"
                  />
                </GlowingWrapper>
              </motion.div>
            )}
            {aliens.AlienGuards2 && (
              <motion.div
                id="AlienGuards2"
                initial={{ opacity: 0, x: -200, y: -200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 5, duration: 3 }}
                className="flex space-x-4"
              >
                <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-400 to-orange-300">
                  <img
                    onClick={handleAnimate}
                    src={AlienGuards3}
                    alt="OrangeAlien Flat2d design"
                    className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
                  />
                </GlowingWrapper>
                <GlowingWrapper className="w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 from-orange-200 to-orange-100">
                  <img
                    onClick={handleAnimate}
                    src={AlienGuards4}
                    alt="OrangeAlien Flat2d design"
                    className="rounded-lg w-16 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 hover:animate-pulse duration-200"
                  />
                </GlowingWrapper>
              </motion.div>
            )}
          </div>
          <motion.div
            id="Innovation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 9, duration: 3 }}
          >
            <h2 className="text-xl md:text-2xl italic font-bold text-orange-400 font-lato py-12 hover:animate-pulse hover:text-orange-500 duration-1000">
              {OrangeClosing.map((letter, index) => (
                <TextSpan key={`orange-closing-${index}`}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              ))}
            </h2>
          </motion.div>
          <AnimatePresence>
            {viewbutton.ViewButton && (
              <motion.div
                id="ViewButton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 10, duration: 0.5 }}
              >
                
                <div className="flex justify-center">
                <GlowingWrapper className="rounded-md orange-glass opacity-90 from-orange-500 to-violet-500">
                  <button
                    onClick={handleAnimate}
                    className="rounded-md orange-glass px-4 py-2 font-medium text-white hover:animate-pulse hover:bg-orange-600 duration-1000"
                  >
                    View The Orange Collection
                  </button>
                  </GlowingWrapper>
                </div>
                
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showGitHubProjects && (
              <motion.div
                id="showGitHubProjects"
                initial={{ opacity: 0, y: -1000 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 5 }}
              >
                <GitHubProjects />
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Home;
