import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectItem from "./ProjectItem";
import projectsData from '../data/projects.js';

const GitHubProjects = () => {
  const scrollContainerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar" ref={scrollContainerRef}>
        {projectsData.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
      <motion.div className="h-full bg-orange-400 fixed top-0 right-10 w-1" style={{ scaleY }} />
    </div>
  );
};

export default GitHubProjects;
